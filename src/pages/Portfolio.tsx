import { Download, RefreshCw, Handshake, Users } from 'lucide-react';

export default function Portfolio() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <header className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-primary-container">
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover opacity-30 mix-blend-overlay" alt="Uganda aerial landscape" src="/images/portfolio feature image.jpg"/>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 py-24">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 mb-6 border border-on-primary-container text-on-primary-container rounded-full text-label-sm uppercase tracking-widest font-label-sm">Impact Framework</span>
            <h1 className="font-display-lg text-display-lg text-white mb-8">
              GREEN ACTION FOR SUSTAINABLE PRODUCTION ROADMAP: 2023 TO 2030
            </h1>
            <p className="font-body-lg text-body-lg text-on-primary-container mb-12 max-w-xl">
              Architecting a circular future for East Africa through industrial precision and ecological regeneration.
            </p>
            <div className="flex gap-4">
              <button className="bg-secondary text-on-secondary px-8 py-4 rounded-full font-headline-md text-sm uppercase tracking-widest hover:scale-[1.02] transition-transform shadow-lg">
                View Vision
              </button>
              <button className="border border-on-primary-container text-on-primary-container px-8 py-4 rounded-full font-headline-md text-sm uppercase tracking-widest hover:bg-on-primary-container/10 transition-colors">
                The Roadmap
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Marquee Metrics */}
      <div className="bg-surface-container-high py-12 border-y border-outline-variant overflow-hidden">
        <div className="flex whitespace-nowrap gap-16 animate-[marquee_30s_linear_infinite]">
          <div className="flex items-center gap-16">
            <span className="font-headline-md text-primary flex items-center gap-4">
              <RefreshCw className="w-8 h-8" /> ZERO WASTE TARGET 2030
            </span>
            <span className="font-headline-md text-primary flex items-center gap-4">
              <Users className="w-8 h-8" /> 5 FOUNDING MEMBERS
            </span>
            <span className="font-headline-md text-primary flex items-center gap-4">
              <Handshake className="w-8 h-8" /> REGENERATIVE IMPACT
            </span>
          </div>
          {/* Duplicated for seamless loop */}
          <div aria-hidden="true" className="flex items-center gap-16">
            <span className="font-headline-md text-primary flex items-center gap-4">
              <RefreshCw className="w-8 h-8" /> ZERO WASTE TARGET 2030
            </span>
            <span className="font-headline-md text-primary flex items-center gap-4">
              <Users className="w-8 h-8" /> 5 FOUNDING MEMBERS
            </span>
            <span className="font-headline-md text-primary flex items-center gap-4">
              <Handshake className="w-8 h-8" /> REGENERATIVE IMPACT
            </span>
          </div>
        </div>
      </div>

      {/* Preview Section: Definitions */}
      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-16">
            <h2 className="font-headline-xl text-headline-xl text-primary mb-4">The Evolution of Production</h2>
            <div className="w-24 h-1 bg-secondary"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Linear Card */}
            <div className="group bg-surface-container-low p-10 border border-outline-variant hover:border-secondary transition-all duration-300">
              <span className="text-primary mb-6 text-4xl block">→</span>
              <h3 className="font-headline-md text-headline-md text-primary mb-4">Linear Economy</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                The traditional "take-make-waste" model where resources are extracted, used, and discarded, creating systemic ecological debt.
              </p>
            </div>
            {/* Recycling Card */}
            <div className="group bg-surface-container-low p-10 border border-outline-variant hover:border-secondary transition-all duration-300">
              <RefreshCw className="text-primary mb-6 w-10 h-10" />
              <h3 className="font-headline-md text-headline-md text-primary mb-4">Recycling</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                A transitional stage focusing on resource recovery, attempting to re-integrate materials after their primary lifecycle.
              </p>
            </div>
            {/* Circular Card */}
            <div className="group bg-surface-container-lowest p-10 border-2 border-secondary shadow-xl relative overflow-hidden transition-all duration-300">
              <div className="absolute -right-8 -top-8 w-24 h-24 bg-secondary-container rounded-full opacity-50"></div>
              <RefreshCw className="text-secondary mb-6 w-10 h-10" />
              <h3 className="font-headline-md text-headline-md text-primary mb-4">Circular Economy</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                A regenerative system where design eliminates waste. Materials are kept in high-value loops, mimicking biological ecosystems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Unique Value: Bento Grid */}
      <section className="py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <span className="text-label-sm uppercase font-label-sm tracking-widest text-secondary">The GASP Difference</span>
            <h2 className="font-headline-xl text-headline-xl text-primary mt-4">What is unique about GASP?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
            <div className="md:col-span-8 bg-primary-container rounded-xl p-12 flex flex-col justify-end relative overflow-hidden group">
              <img className="absolute inset-0 w-full h-full object-cover opacity-30 transition-transform duration-700 group-hover:scale-110" alt="Boardroom meeting" src="/images/portfolio feature image.jpg"/>
              <div className="relative z-10">
                <span className="text-secondary-fixed text-4xl font-headline-xl block mb-4">01</span>
                <h3 className="font-headline-md text-headline-md text-white mb-2">Incubated in 2023</h3>
                <p className="text-on-primary-container max-w-md">Established with 5 pioneering founding members committed to reshaping the industrial landscape of Uganda.</p>
              </div>
            </div>
            <div className="md:col-span-4 bg-surface-container-lowest rounded-xl p-8 border border-outline-variant flex flex-col justify-center">
              <span className="text-secondary text-4xl font-headline-xl block mb-4">02</span>
              <h3 className="font-headline-md text-headline-md text-primary mb-2">Global EPR Standards</h3>
              <p className="text-on-surface-variant">Extended Producer Responsibility model based on global best practices, ensuring local relevance with international rigor.</p>
            </div>
            <div className="md:col-span-4 bg-secondary-container rounded-xl p-8 flex flex-col justify-center">
              <span className="text-primary text-4xl font-headline-xl block mb-4">03</span>
              <h3 className="font-headline-md text-headline-md text-primary mb-2">Inclusive Governance</h3>
              <p className="text-on-secondary-container">Board representation from all stakeholders, from manufacturers to environmental advocates, ensuring a balanced ecosystem.</p>
            </div>
            <div className="md:col-span-8 bg-surface-container-highest rounded-xl p-12 flex items-center relative overflow-hidden">
              <div className="flex-1 pr-12">
                <h3 className="font-headline-md text-headline-md text-primary mb-4">Our Niche</h3>
                <p className="font-body-lg text-body-lg text-on-surface">Open & collaborative partnership models that bridge the gap between policy and practical production.</p>
              </div>
              <div className="hidden lg:block w-1/3">
                <Handshake className="w-32 h-32 text-primary/10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary-container">
          <img className="w-full h-full object-cover opacity-20" alt="Sustainable Ugandan plantation" src="/images/circular economy.jpg"/>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-8 text-center text-white">
          <h2 className="font-display-lg text-headline-xl md:text-display-lg mb-12">Join the Circular Revolution.</h2>
          <p className="font-body-lg text-body-lg text-on-primary-container mb-12">
            Access our full 2023-2030 Roadmap and Impact Framework. Discover how we're transforming production across the region.
          </p>
          <button className="bg-secondary text-white px-12 py-5 rounded-full font-headline-md text-lg uppercase tracking-widest hover:scale-[1.05] transition-all shadow-2xl flex items-center gap-4 mx-auto">
            <Download className="w-6 h-6" />
            Download Portfolio
          </button>
        </div>
      </section>
    </div>
  );
}

