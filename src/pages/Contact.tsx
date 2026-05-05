import { MapPin, Mail, Phone, Link2, Share2, Globe2 } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="px-8 py-32 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
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
              <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); alert("Thanks for your inquiry! We'll be in touch soon."); }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="group">
                    <label className="font-label-sm text-label-sm text-white/50 block mb-2">Full Name</label>
                    <input required className="w-full bg-transparent border-b border-white/20 py-3 font-body-md text-white focus:outline-none focus:border-on-primary-container transition-all" placeholder="John Doe" type="text"/>
                  </div>
                  <div className="group">
                    <label className="font-label-sm text-label-sm text-white/50 block mb-2">Email Address</label>
                    <input required className="w-full bg-transparent border-b border-white/20 py-3 font-body-md text-white focus:outline-none focus:border-on-primary-container transition-all" placeholder="john@company.com" type="email"/>
                  </div>
                </div>
                <div className="group">
                  <label className="font-label-sm text-label-sm text-white/50 block mb-2">Interest</label>
                  <select className="w-full bg-transparent border-b border-white/20 py-3 font-body-md text-white focus:outline-none focus:border-on-primary-container appearance-none">
                    <option className="bg-primary-container">Partnerships</option>
                    <option className="bg-primary-container">Media Inquiry</option>
                    <option className="bg-primary-container">Impact Reporting</option>
                    <option className="bg-primary-container">Other</option>
                  </select>
                </div>
                <div className="group pt-4">
                  <label className="font-label-sm text-label-sm text-white/50 block mb-2">Message</label>
                  <textarea required className="w-full bg-transparent border-b border-white/20 py-3 font-body-md text-white focus:outline-none focus:border-on-primary-container transition-all resize-none" placeholder="How can we collaborate?" rows={4}></textarea>
                </div>
                <button type="submit" className="bg-secondary text-on-tertiary-fixed px-10 py-4 rounded-full font-label-sm text-label-sm uppercase tracking-widest hover:scale-[1.02] transition-transform active:scale-95 duration-150 mt-8">
                  Submit Inquiry
                </button>
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
                      <p className="font-body-md">Plot 42, Industrial Area</p>
                      <p className="font-body-md">Kampala, Uganda</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <Mail className="text-emerald-400 w-6 h-6 shrink-0" />
                    <p className="font-body-md">hello@gasp.org</p>
                  </div>
                  <div className="flex gap-4 items-start">
                    <Phone className="text-emerald-400 w-6 h-6 shrink-0" />
                    <p className="font-body-md">+256 414 000 000</p>
                  </div>
                </div>
              </div>

              <div className="h-64 rounded-xl overflow-hidden border border-white/10 relative">
                <img className="w-full h-full object-cover opacity-80" alt="Kampala Industrial Area" src="/images/Importer.png"/>
                <div className="absolute inset-0 bg-primary-container/40 flex items-center justify-center">
                  <a className="bg-white text-primary px-4 py-2 rounded-full font-label-sm text-label-sm uppercase tracking-widest flex items-center gap-2 hover:scale-105 transition-transform" href="#">
                    <MapPin className="w-4 h-4" />
                    View Map
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <a className="h-12 w-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-emerald-400 hover:text-primary transition-all" href="#">
                  <Link2 className="w-5 h-5" />
                </a>
                <a className="h-12 w-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-emerald-400 hover:text-primary transition-all" href="#">
                  <Share2 className="w-5 h-5" />
                </a>
                <a className="h-12 w-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-emerald-400 hover:text-primary transition-all" href="#">
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

