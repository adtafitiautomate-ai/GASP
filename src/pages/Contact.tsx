import { useState, type FormEvent } from 'react';
import { MapPin, Mail, Phone, Link2, Share2, Globe2 } from 'lucide-react';

const locationUrl = 'https://www.google.com/maps/place/90+Kanjokya+St,+Kampala/data=!4m2!3m1!1s0x177dbbb1d1165707:0x13fae9069bbce84f?sa=X&ved=1t:242&ictx=111';
const mapPreviewUrl = 'https://www.google.com/maps?q=90%20Kanjokya%20St%2C%20Kampala&output=embed';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const submitInquiry = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formElement = event.currentTarget;
    const data = Object.fromEntries(new FormData(formElement).entries());
    setStatus('sending');
    setStatusMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await response.json().catch(() => null);
      if (!response.ok) throw new Error(result?.message || 'Submission failed');
      formElement.reset();
      setStatus('sent');
      setStatusMessage("Thanks for your inquiry! We'll be in touch soon.");
    } catch (error) {
      setStatus('error');
      setStatusMessage(error instanceof Error ? error.message : 'We could not send your message. Please email info@gasp.co.ug directly.');
    }
  };

  const copyLocationLink = async () => {
    await navigator.clipboard?.writeText(locationUrl);
  };

  const shareLocation = async () => {
    if (navigator.share) {
      await navigator.share({
        title: 'GASP Headquarters',
        text: 'Plot 90 Kanjokya Street, Kanjokya House',
        url: locationUrl,
      });
      return;
    }

    await navigator.clipboard?.writeText(locationUrl);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="px-8 pb-32 pt-28 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div className="space-y-8">
          <span className="font-label-sm text-label-sm text-on-primary-container uppercase tracking-widest bg-primary-fixed px-4 py-1 rounded-full">Contact Us</span>
          <h1 className="font-display-lg text-display-lg text-primary tracking-tighter">
            Let’s engineer a <span className="text-on-primary-container italic">sustainable</span> future.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
            We bridge the gap between industrial necessity and biological urgency. Reach out to start a partnership or learn more about our circular production models.
          </p>
        </div>
        <div className="relative h-[500px] w-full rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
          <img className="w-full h-full object-cover" alt="Sustainable office" src="/images/mission feature image.jpg"/>
        </div>
      </section>

      {/* Contact & Info Bento */}
      <section className="px-8 py-32 bg-primary-container text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Form Column */}
            <div className="md:col-span-7 bg-white/5 backdrop-blur-md p-12 rounded-xl border border-white/10">
              <h2 className="font-headline-xl text-headline-xl mb-12">Send an Inquiry</h2>
              <form className="space-y-8" onSubmit={submitInquiry}>
                <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="group">
                    <label className="font-label-sm text-label-sm text-white/50 block mb-2">Full Name</label>
                    <input required className="w-full bg-transparent border-b border-white/20 py-3 font-body-md text-white focus:outline-none focus:border-on-primary-container transition-all" placeholder="John Doe" type="text" name="name" maxLength={200}/>
                  </div>
                  <div className="group">
                    <label className="font-label-sm text-label-sm text-white/50 block mb-2">Email Address</label>
                    <input required className="w-full bg-transparent border-b border-white/20 py-3 font-body-md text-white focus:outline-none focus:border-on-primary-container transition-all" placeholder="john@company.com" type="email" name="email" maxLength={320}/>
                  </div>
                </div>
                <div className="group">
                  <label className="font-label-sm text-label-sm text-white/50 block mb-2">Interest</label>
                  <select name="interest" className="w-full bg-transparent border-b border-white/20 py-3 font-body-md text-white focus:outline-none focus:border-on-primary-container appearance-none">
                    <option className="bg-primary-container">Partnerships</option>
                    <option className="bg-primary-container">Media Inquiry</option>
                    <option className="bg-primary-container">Impact Reporting</option>
                    <option className="bg-primary-container">Other</option>
                  </select>
                </div>
                <div className="group pt-4">
                  <label className="font-label-sm text-label-sm text-white/50 block mb-2">Message</label>
                  <textarea required className="w-full bg-transparent border-b border-white/20 py-3 font-body-md text-white focus:outline-none focus:border-on-primary-container transition-all resize-none" placeholder="How can we collaborate?" rows={4} name="message" maxLength={10000}></textarea>
                </div>
                <button type="submit" disabled={status === 'sending'} className="bg-secondary text-on-tertiary-fixed px-10 py-4 rounded-full font-label-sm text-label-sm uppercase tracking-widest hover:scale-[1.02] transition-transform active:scale-95 duration-150 mt-8 disabled:opacity-60 disabled:hover:scale-100">
                  {status === 'sending' ? 'Sending…' : 'Submit Inquiry'}
                </button>
                {statusMessage && (
                  <p role="status" className={`font-body-md ${status === 'error' ? 'text-red-300' : 'text-emerald-300'}`}>
                    {statusMessage}
                  </p>
                )}
              </form>
            </div>

            {/* Info Column */}
            <div className="md:col-span-5 flex flex-col justify-between space-y-8">
              <div className="bg-white/5 backdrop-blur-md p-10 rounded-xl border border-white/10 flex-grow">
                <h3 className="font-headline-md text-headline-md mb-8">Headquarters</h3>
                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <MapPin className="text-emerald-400 w-6 h-6 shrink-0" />
                    <div>
                      <p className="font-body-md">Plot 90 Kanjokya Street</p>
                      <p className="font-body-md">Kanjokya House</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <Mail className="text-emerald-400 w-6 h-6 shrink-0" />
                    <p className="font-body-md">info@gasp.co.ug</p>
                  </div>
                  <div className="flex gap-4 items-start">
                    <Phone className="text-emerald-400 w-6 h-6 shrink-0" />
                    <p className="font-body-md">+256 753 444777</p>
                  </div>
                </div>
              </div>

              <div className="h-64 rounded-xl overflow-hidden border border-white/10 relative">
                <iframe
                  className="h-full w-full border-0 opacity-80"
                  src={mapPreviewUrl}
                  title="Map preview of GASP headquarters"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="pointer-events-none absolute inset-0 bg-primary-container/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <a
                    className="bg-white text-primary px-4 py-2 rounded-full font-label-sm text-label-sm uppercase tracking-widest flex items-center gap-2 hover:scale-105 transition-transform"
                    href={locationUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MapPin className="w-4 h-4" />
                    View Map
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  aria-label="Copy location link"
                  title="Copy location link"
                  onClick={copyLocationLink}
                  className="h-12 w-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-emerald-400 hover:text-primary transition-all"
                >
                  <Link2 className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  aria-label="Share location"
                  title="Share location"
                  onClick={shareLocation}
                  className="h-12 w-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-emerald-400 hover:text-primary transition-all"
                >
                  <Share2 className="w-5 h-5" />
                </button>
                <a
                  aria-label="Open maps"
                  title="Open maps"
                  className="h-12 w-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-emerald-400 hover:text-primary transition-all"
                  href={locationUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Globe2 className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Marquee / Circular Economy Motif */}
      <section className="py-12 bg-background overflow-hidden border-y border-surface-variant">
        <div className="flex whitespace-nowrap gap-16 items-center opacity-30 animate-[marquee_30s_linear_infinite]">
          <span className="font-headline-md text-headline-md uppercase tracking-tighter">Circular Economy</span>
          <span>•</span>
          <span className="font-headline-md text-headline-md uppercase tracking-tighter">Sustainable Production</span>
          <span>•</span>
          <span className="font-headline-md text-headline-md uppercase tracking-tighter">Industrial Regeneration</span>
          <span>•</span>
          <span className="font-headline-md text-headline-md uppercase tracking-tighter">Global Impact</span>
          <span>•</span>
          <span className="font-headline-md text-headline-md uppercase tracking-tighter">Circular Economy</span>
          <span>•</span>
          <span className="font-headline-md text-headline-md uppercase tracking-tighter">Sustainable Production</span>
        </div>
      </section>
    </div>
  );
}
