import { Check, X } from 'lucide-react';
import { useState, type ReactNode } from 'react';
import { createPortal } from 'react-dom';

type MemberPortalButtonProps = {
  className: string;
  children?: ReactNode;
};

type FormState = {
  companyName: string;
  organisationEmail: string;
  registrationNumber: string;
  tin: string;
  incorporationDate: string;
  nemaNumber: string;
  street: string;
  district: string;
  poBox: string;
  website: string;
  description: string;
  category: string;
  annualTonnage: string;
  plasticTypes: string[];
  contactName: string;
  contactTitle: string;
  contactPhone: string;
  contactEmail: string;
  tier: string;
  paymentMethod: string;
  confirmAccuracy: boolean;
  confirmRules: boolean;
  confirmRenewal: boolean;
  signatoryName: string;
  signatoryTitle: string;
  applicationDate: string;
  capacity: string;
};

const initialForm: FormState = {
  companyName: '',
  organisationEmail: '',
  registrationNumber: '',
  tin: '',
  incorporationDate: '',
  nemaNumber: '',
  street: '',
  district: '',
  poBox: '',
  website: '',
  description: '',
  category: '',
  annualTonnage: '',
  plasticTypes: [],
  contactName: '',
  contactTitle: '',
  contactPhone: '',
  contactEmail: '',
  tier: '',
  paymentMethod: '',
  confirmAccuracy: false,
  confirmRules: false,
  confirmRenewal: false,
  signatoryName: '',
  signatoryTitle: '',
  applicationDate: new Date().toISOString().slice(0, 10),
  capacity: '',
};

const districts = ['Kampala', 'Wakiso', 'Mukono', 'Jinja', 'Mbarara', 'Gulu', 'Fort Portal', 'Mbale', 'Soroti', 'Arua', 'Other'];
const categories = ['Manufacturer / Producer', 'Importer', 'Distributor', 'Retailer', 'Recycler'];
const tonnageRanges = ['Under 50T', '50-200T', '200-500T', '500+T per year'];
const plasticTypes = ['PET (Code 1)', 'HDPE (Code 2)', 'PVC (Code 3)', 'LDPE (Code 4)', 'PP (Code 5)', 'PS/EPS (Code 6)', 'Other (Code 7)'];
const paymentMethods = ['Bank Transfer', 'Mobile Money (MTN / Airtel)', 'Cheque payable to GASP Uganda', 'Other'];
const capacities = ['Director / Board Member', 'CEO', 'Managing Director', 'Company Secretary', 'Duly Authorised Representative'];
const tiers = [
  { name: 'Bronze', price: 'UGX 2,000,000 / year', scale: 'Starter membership' },
  { name: 'Silver', price: 'UGX 5,000,000 / year', scale: 'Under 50 tonnes / year' },
  { name: 'Gold', price: 'UGX 10,000,000 / year', scale: '50-200 tonnes / year' },
  { name: 'Diamond', price: 'UGX 15,000,000 / year', scale: '200-500 tonnes / year' },
  { name: 'Platinum', price: 'UGX 25,000,000 / year', scale: '500+ tonnes / year' },
];

function FieldLabel({ children, required = false }: { children: ReactNode; required?: boolean }) {
  return (
    <label className="mb-2 block text-sm font-bold text-primary">
      {children} {required && <span className="text-red-700">*</span>}
    </label>
  );
}

function fieldClass(error?: string) {
  return `w-full rounded-xl border bg-white px-4 py-3 text-sm text-primary outline-none transition focus:border-[#2C6842] ${
    error ? 'border-red-400' : 'border-[#DDD8CE]'
  }`;
}

function referenceNumber() {
  return `GASP-APP-${new Date().getFullYear()}-${String(Math.floor(Math.random() * 900) + 100).padStart(3, '0')}`;
}

export default function MemberPortalButton({ className, children = 'Become a Member' }: MemberPortalButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [reference, setReference] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const isSuccess = step === 4;
  const progress = isSuccess ? 100 : (step + 1) * 25;

  const setField = (field: keyof FormState, value: string | boolean | string[]) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      const next = { ...current };
      delete next[field];
      return next;
    });
  };

  const validateStep = () => {
    const next: Record<string, string> = {};

    if (step === 0) {
      if (!form.companyName.trim()) next.companyName = 'Required';
      if (!form.organisationEmail.trim()) next.organisationEmail = 'Required';
    }

    if (step === 1) {
      if (!form.category) next.category = 'Required';
      if (!form.contactName.trim()) next.contactName = 'Required';
      if (!form.contactEmail.trim()) next.contactEmail = 'Required';
      if (form.plasticTypes.length === 0) next.plasticTypes = 'Required';
    }

    if (step === 2 && !form.tier) next.tier = 'Required';

    if (step === 3) {
      if (!form.confirmAccuracy) next.confirmAccuracy = 'Required';
      if (!form.confirmRules) next.confirmRules = 'Required';
      if (!form.confirmRenewal) next.confirmRenewal = 'Required';
      if (!form.signatoryName.trim()) next.signatoryName = 'Required';
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const resetAndClose = () => {
    setIsOpen(false);
    setStep(0);
    setErrors({});
    setReference('');
    setSubmitError('');
    setIsSubmitting(false);
    setForm(initialForm);
  };

  const continueStep = () => {
    if (validateStep()) setStep((current) => Math.min(3, current + 1));
  };

  const submit = async () => {
    if (!validateStep()) return;

    const nextReference = referenceNumber();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch('/api/membership', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({reference: nextReference, form}),
      });

      if (!response.ok) {
        const result = await response.json().catch(() => null);
        throw new Error(result?.message || 'Submission failed');
      }

      setReference(nextReference);
      setStep(4);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'We could not submit your application. Please try again or contact info@gasp.co.ug.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const togglePlastic = (type: string) => {
    setField('plasticTypes', form.plasticTypes.includes(type) ? form.plasticTypes.filter((item) => item !== type) : [...form.plasticTypes, type]);
  };

  const modal = (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/76 px-4 py-6 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="member-application-title"
      onClick={resetAndClose}
    >
      <div
        className="relative flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-[2rem] bg-white text-primary shadow-[0_28px_90px_rgba(0,0,0,0.38)]"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close membership application"
          onClick={resetAndClose}
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-all hover:bg-primary hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="h-[3px] bg-[#DDD8CE]">
          <div className="h-full bg-[#2C6842] transition-all duration-300" style={{ width: `${progress}%` }} />
        </div>

        <div className="grid min-h-0 flex-1 grid-cols-1 lg:grid-cols-[0.82fr_1.7fr]">
          <aside className="bg-[#C4EAD0] p-8 lg:p-10">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">G</div>
              <div>
                <p className="font-bold text-primary">GASP Uganda</p>
                <p className="text-xs uppercase tracking-widest text-primary/60">Membership application</p>
              </div>
            </div>
            <p className="mb-4 font-bold text-primary/70">{isSuccess ? 'Application submitted' : `Step ${step + 1} of 4 - ${progress}% complete`}</p>
            <h2 id="member-application-title" className="font-headline-xl text-4xl leading-tight text-primary">
              {isSuccess && 'Application submitted!'}
              {step === 0 && 'Tell us about your organisation.'}
              {step === 1 && 'Your plastics and who to contact.'}
              {step === 2 && 'Choose your membership tier.'}
              {step === 3 && 'Declare and submit.'}
            </h2>
            <p className="mt-4 max-w-sm text-primary/70">
              {isSuccess ? 'Your application is under review by the GASP Secretariat.' : 'Complete each step to register your EPR membership interest.'}
            </p>
            <div className="mt-8 flex gap-3">
              {[0, 1, 2, 3].map((item) => (
                <div key={item} className={`flex h-10 w-10 items-center justify-center rounded-full font-bold ${step > item || isSuccess ? 'bg-[#2C6842] text-white' : step === item ? 'bg-primary text-white' : 'bg-white/70 text-primary/50'}`}>
                  {step > item || isSuccess ? <Check className="h-4 w-4" /> : item + 1}
                </div>
              ))}
            </div>
          </aside>

          <div className="flex min-h-0 min-w-0 flex-col overflow-hidden bg-[#EEEDE9] p-6 sm:p-8 lg:p-10">
            <div className="min-h-0 flex-1 overflow-hidden">
              <div className="flex h-full w-[500%] transition-transform duration-300 ease-out" style={{ transform: `translateX(-${step * 20}%)` }}>
                <section className="h-full w-1/5 shrink-0 overflow-y-auto pr-4">
                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <FieldLabel required>Registered Company Name</FieldLabel>
                      <input className={fieldClass(errors.companyName)} value={form.companyName} onChange={(event) => setField('companyName', event.target.value)} placeholder="e.g. Mukwano Group of Companies Ltd" />
                    </div>
                    <div>
                      <FieldLabel>Certificate of Incorporation No.</FieldLabel>
                      <input className={fieldClass()} value={form.registrationNumber} onChange={(event) => setField('registrationNumber', event.target.value)} placeholder="e.g. 80010001234567" />
                    </div>
                    <div>
                      <FieldLabel>Tax Identification Number (TIN)</FieldLabel>
                      <input className={fieldClass()} value={form.tin} onChange={(event) => setField('tin', event.target.value)} placeholder="e.g. 1000123456" />
                    </div>
                    <div>
                      <FieldLabel>Date of Incorporation</FieldLabel>
                      <input type="date" className={fieldClass()} value={form.incorporationDate} onChange={(event) => setField('incorporationDate', event.target.value)} />
                    </div>
                    <div>
                      <FieldLabel>NEMA Registration No.</FieldLabel>
                      <input className={fieldClass()} value={form.nemaNumber} onChange={(event) => setField('nemaNumber', event.target.value)} placeholder="e.g. NEMA/REG/2024/001" />
                    </div>
                    <div>
                      <FieldLabel>Street / Plot Address</FieldLabel>
                      <input className={fieldClass()} value={form.street} onChange={(event) => setField('street', event.target.value)} placeholder="e.g. Plot 12, Kampala Road" />
                    </div>
                    <div>
                      <FieldLabel>District</FieldLabel>
                      <select className={fieldClass()} value={form.district} onChange={(event) => setField('district', event.target.value)}>
                        <option value="">Select District</option>
                        {districts.map((district) => <option key={district}>{district}</option>)}
                      </select>
                    </div>
                    <div>
                      <FieldLabel>P.O. Box</FieldLabel>
                      <input className={fieldClass()} value={form.poBox} onChange={(event) => setField('poBox', event.target.value)} placeholder="e.g. P.O. Box 2671, Kampala" />
                    </div>
                    <div>
                      <FieldLabel required>Organisation Email</FieldLabel>
                      <input type="email" className={fieldClass(errors.organisationEmail)} value={form.organisationEmail} onChange={(event) => setField('organisationEmail', event.target.value)} placeholder="info@yourcompany.co.ug" />
                    </div>
                    <div>
                      <FieldLabel>Website</FieldLabel>
                      <input type="url" className={fieldClass()} value={form.website} onChange={(event) => setField('website', event.target.value)} placeholder="https://yourcompany.co.ug" />
                    </div>
                    <div className="md:col-span-2">
                      <FieldLabel>Brief Description of Business Activities</FieldLabel>
                      <textarea className={`${fieldClass()} min-h-28 resize-none`} value={form.description} onChange={(event) => setField('description', event.target.value)} placeholder="Describe your main products, packaging materials used, and reason for joining GASP..." />
                    </div>
                  </div>
                </section>

                <section className="h-full w-1/5 shrink-0 overflow-y-auto pr-4">
                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <FieldLabel required>Primary Category</FieldLabel>
                      <select className={fieldClass(errors.category)} value={form.category} onChange={(event) => setField('category', event.target.value)}>
                        <option value="">Select</option>
                        {categories.map((category) => <option key={category}>{category}</option>)}
                      </select>
                    </div>
                    <div>
                      <FieldLabel>Annual Plastic Volume</FieldLabel>
                      <select className={fieldClass()} value={form.annualTonnage} onChange={(event) => setField('annualTonnage', event.target.value)}>
                        <option value="">Select range</option>
                        {tonnageRanges.map((range) => <option key={range}>{range}</option>)}
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <FieldLabel required>Plastic Types Handled</FieldLabel>
                      <div className="grid gap-3 sm:grid-cols-2">
                        {plasticTypes.map((type) => (
                          <label key={type} className={`flex items-center gap-3 rounded-xl border bg-white px-4 py-3 text-sm ${errors.plasticTypes ? 'border-red-400' : 'border-[#DDD8CE]'}`}>
                            <input type="checkbox" checked={form.plasticTypes.includes(type)} onChange={() => togglePlastic(type)} />
                            {type}
                          </label>
                        ))}
                      </div>
                    </div>
                    <div>
                      <FieldLabel required>Contact Full Name</FieldLabel>
                      <input className={fieldClass(errors.contactName)} value={form.contactName} onChange={(event) => setField('contactName', event.target.value)} placeholder="e.g. Jane Akello" />
                    </div>
                    <div>
                      <FieldLabel>Title / Position</FieldLabel>
                      <input className={fieldClass()} value={form.contactTitle} onChange={(event) => setField('contactTitle', event.target.value)} placeholder="e.g. Head of Sustainability" />
                    </div>
                    <div>
                      <FieldLabel>Mobile Number</FieldLabel>
                      <input type="tel" className={fieldClass()} value={form.contactPhone} onChange={(event) => setField('contactPhone', event.target.value)} placeholder="+256 7XX XXX XXX" />
                    </div>
                    <div>
                      <FieldLabel required>Contact Email</FieldLabel>
                      <input type="email" className={fieldClass(errors.contactEmail)} value={form.contactEmail} onChange={(event) => setField('contactEmail', event.target.value)} placeholder="jane@yourcompany.co.ug" />
                    </div>
                  </div>
                </section>

                <section className="h-full w-1/5 shrink-0 overflow-y-auto pr-4">
                  <FieldLabel required>Membership Tier</FieldLabel>
                  <div className="grid gap-4 md:grid-cols-2">
                    {tiers.map((tier) => (
                      <button key={tier.name} type="button" onClick={() => setField('tier', tier.name)} className={`rounded-2xl border bg-white p-5 text-left transition-all ${form.tier === tier.name ? 'border-[#2C6842] ring-2 ring-[#2C6842]/20' : errors.tier ? 'border-red-400' : 'border-[#DDD8CE]'}`}>
                        <span className="text-xs font-bold uppercase text-[#2C6842]">{tier.name}</span>
                        <h3 className="mt-1 text-xl font-bold">{tier.price}</h3>
                        <p className="mt-1 text-sm text-primary/60">{tier.scale}</p>
                      </button>
                    ))}
                  </div>
                  <p className="mt-5 rounded-2xl bg-[#C4EAD0] p-4 text-sm text-primary/75">
                    EPR levy note: UGX 6,000 per tonne of plastic placed on the Ugandan market is invoiced separately after annual declaration.
                  </p>
                  <div className="mt-5">
                    <FieldLabel>Preferred Payment Method</FieldLabel>
                    <select className={fieldClass()} value={form.paymentMethod} onChange={(event) => setField('paymentMethod', event.target.value)}>
                      <option value="">Select payment method</option>
                      {paymentMethods.map((method) => <option key={method}>{method}</option>)}
                    </select>
                  </div>
                </section>

                <section className="h-full w-1/5 shrink-0 overflow-y-auto pr-4">
                  <div className="rounded-2xl bg-white p-5 text-sm leading-6 text-primary/75">
                    <p className="font-bold text-primary">Declaration</p>
                    <p className="mt-2">I/we declare that all information is true and complete, the organisation will comply with GASP membership rules and EPR obligations, and GASP may share membership status with NEMA and on its public register.</p>
                  </div>
                  <div className="mt-5 space-y-3">
                    {[
                      ['confirmAccuracy', 'I confirm all information provided is accurate and complete.'],
                      ['confirmRules', 'Our organisation agrees to abide by GASP Uganda membership rules and EPR obligations.'],
                      ['confirmRenewal', 'I understand membership is renewable annually subject to compliance and payment.'],
                    ].map(([field, label]) => (
                      <label key={field} className={`flex items-start gap-3 rounded-xl border bg-white px-4 py-3 text-sm ${errors[field] ? 'border-red-400' : 'border-[#DDD8CE]'}`}>
                        <input type="checkbox" checked={Boolean(form[field as keyof FormState])} onChange={(event) => setField(field as keyof FormState, event.target.checked)} />
                        {label}
                      </label>
                    ))}
                  </div>
                  <div className="mt-5 grid gap-5 md:grid-cols-2">
                    <div>
                      <FieldLabel required>Signatory Full Name</FieldLabel>
                      <input className={fieldClass(errors.signatoryName)} value={form.signatoryName} onChange={(event) => setField('signatoryName', event.target.value)} placeholder="Authorised representative" />
                    </div>
                    <div>
                      <FieldLabel>Title / Designation</FieldLabel>
                      <input className={fieldClass()} value={form.signatoryTitle} onChange={(event) => setField('signatoryTitle', event.target.value)} placeholder="e.g. Managing Director" />
                    </div>
                    <div>
                      <FieldLabel>Date of Application</FieldLabel>
                      <input type="date" className={fieldClass()} value={form.applicationDate} onChange={(event) => setField('applicationDate', event.target.value)} />
                    </div>
                    <div>
                      <FieldLabel>Capacity</FieldLabel>
                      <select className={fieldClass()} value={form.capacity} onChange={(event) => setField('capacity', event.target.value)}>
                        <option value="">Select</option>
                        {capacities.map((capacity) => <option key={capacity}>{capacity}</option>)}
                      </select>
                    </div>
                  </div>
                </section>

                <section className="flex h-full w-1/5 shrink-0 items-center justify-center pr-4">
                  <div className="max-w-lg rounded-3xl bg-white p-8 text-center shadow-sm">
                    <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#2C6842] text-white">
                      <Check className="h-8 w-8" />
                    </div>
                    <h3 className="font-headline-xl text-3xl text-primary">Application submitted!</h3>
                    <p className="mt-4 text-primary/70">Thank you for joining the circular revolution.</p>
                    <div className="my-6 rounded-2xl bg-[#C4EAD0] p-5">
                      <p className="text-xs font-bold uppercase text-primary/60">Application Reference</p>
                      <p className="mt-2 text-2xl font-bold text-primary">{reference}</p>
                    </div>
                    <p className="text-sm text-primary/60">We'll be in touch at {form.contactEmail || form.organisationEmail || 'your email'} within 5-10 business days.</p>
                    <button type="button" onClick={resetAndClose} className="mt-7 rounded-full bg-primary px-8 py-4 text-sm font-bold uppercase text-white transition-all hover:bg-[#2C6842]">
                      Close
                    </button>
                  </div>
                </section>
              </div>
            </div>

            {!isSuccess && (
              <div className="mt-6 flex flex-col-reverse justify-between gap-3 border-t border-[#DDD8CE] pt-5 sm:flex-row">
                <button type="button" onClick={() => setStep((current) => Math.max(0, current - 1))} disabled={step === 0} className="rounded-full border border-[#DDD8CE] px-7 py-3 text-sm font-bold uppercase text-primary transition-all hover:border-primary disabled:pointer-events-none disabled:opacity-40">
                  Back
                </button>
                <div className="flex flex-col items-stretch gap-3 sm:items-end">
                  {submitError && <p className="max-w-md text-sm font-semibold text-red-700">{submitError}</p>}
                  <button type="button" onClick={step === 3 ? submit : continueStep} disabled={isSubmitting} className="rounded-full bg-primary px-7 py-3 text-sm font-bold uppercase text-white transition-all hover:bg-[#2C6842] disabled:pointer-events-none disabled:opacity-60">
                    {isSubmitting ? 'Submitting...' : step === 3 ? 'Submit Application' : step === 0 ? 'Continue to Operations & Contact' : step === 1 ? 'Continue to Membership Tier' : 'Continue to Declaration'}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <button type="button" onClick={() => setIsOpen(true)} className={className}>
        {children}
      </button>
      {isOpen ? createPortal(modal, document.body) : null}
    </>
  );
}
