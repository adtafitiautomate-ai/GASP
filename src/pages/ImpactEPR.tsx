import { Factory, Truck, Layers, Leaf, CheckCircle2, ShieldCheck, Globe, Recycle, ArrowRight } from 'lucide-react';

export default function ImpactEPR() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[819px] flex items-center overflow-hidden bg-primary-container">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity" 
            alt="Hero Background" 
            src="/images/impact feature pic.jpg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-container via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <span className="inline-block px-4 py-1 bg-primary-fixed text-on-primary-fixed text-label-sm font-label-sm rounded-full mb-stack-md uppercase">
            EPR SCHEME 2024
          </span>
          <h1 className="font-display-lg text-display-lg text-white max-w-4xl mb-stack-md">
            Closing the Loop with <span className="text-on-primary-container">Extended Responsibility.</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-primary-fixed-variant max-w-2xl mb-stack-lg">
            GASP pioneers the world’s first integrated EPR framework for industrial waste, holding producers accountable while regenerating ecosystems through a unified circular economy.
          </p>
        </div>
      </section>

      {/* Impact Metrics Marquee */}
      <div className="bg-primary text-on-primary py-12 overflow-hidden border-y border-white/5">
        <div className="flex items-center gap-24 whitespace-nowrap animate-[marquee_30s_linear_infinite]">
          <div className="flex items-center gap-stack-md">
            <span className="font-headline-xl text-headline-xl text-primary-fixed">1.2M</span>
            <span className="font-label-sm text-label-sm opacity-60">TONS WASTE DIVERTED</span>
          </div>
          <div className="flex items-center gap-stack-md">
            <span className="font-headline-xl text-headline-xl text-primary-fixed">450+</span>
            <span className="font-label-sm text-label-sm opacity-60">PARTNER FACILITIES</span>
          </div>
          <div className="flex items-center gap-stack-md">
            <span className="font-headline-xl text-headline-xl text-primary-fixed">85%</span>
            <span className="font-label-sm text-label-sm opacity-60">RESOURCE RECOVERY RATE</span>
          </div>
          <div className="flex items-center gap-stack-md">
            <span className="font-headline-xl text-headline-xl text-primary-fixed">$14M</span>
            <span className="font-label-sm text-label-sm opacity-60">COMMUNITY REINVESTMENT</span>
          </div>
          {/* Duplicate for seamless loop */}
          <div className="flex items-center gap-stack-md">
            <span className="font-headline-xl text-headline-xl text-primary-fixed">1.2M</span>
            <span className="font-label-sm text-label-sm opacity-60">TONS WASTE DIVERTED</span>
          </div>
          <div className="flex items-center gap-stack-md">
            <span className="font-headline-xl text-headline-xl text-primary-fixed">450+</span>
            <span className="font-label-sm text-label-sm opacity-60">PARTNER FACILITIES</span>
          </div>
          <div className="flex items-center gap-stack-md">
            <span className="font-headline-xl text-headline-xl text-primary-fixed">85%</span>
            <span className="font-label-sm text-label-sm opacity-60">RESOURCE RECOVERY RATE</span>
          </div>
          <div className="flex items-center gap-stack-md">
            <span className="font-headline-xl text-headline-xl text-primary-fixed">$14M</span>
            <span className="font-label-sm text-label-sm opacity-60">COMMUNITY REINVESTMENT</span>
          </div>
        </div>
      </div>

      {/* The EPR Framework Section */}
      <section className="py-section-padding px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-end mb-stack-lg">
          <div className="md:col-span-6">
            <span className="font-label-sm text-label-sm text-primary uppercase mb-4 block">Our Methodology</span>
            <h2 className="font-headline-xl text-headline-xl">A Technical Approach to Circularity</h2>
          </div>
          <div className="md:col-span-6 md:pb-2">
            <p className="font-body-lg text-body-lg text-outline">Our Extended Producer Responsibility scheme isn't just a compliance layer; it's a structural shift in how materials are valued, tracked, and returned to the biosphere.</p>
          </div>
        </div>

        {/* Bento Grid of Process */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter h-auto md:h-[600px]">
          <div className="md:col-span-2 bg-surface-container-low p-stack-lg flex flex-col justify-between border border-outline-variant/30 rounded-xl relative overflow-hidden group">
            <div className="relative z-10">
              <Factory className="w-10 h-10 text-primary mb-stack-md" />
              <h3 className="font-headline-md text-headline-md mb-stack-sm">Source Accountability</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Real-time IoT tracking at the point of production ensures every material stream is cataloged for its eventual return.</p>
            </div>
            <div className="absolute bottom-[-10%] right-[-10%] opacity-5 group-hover:opacity-10 transition-opacity">
              <ShieldCheck className="w-64 h-64" />
            </div>
          </div>
          
          <div className="md:col-span-1 bg-primary text-on-primary p-stack-lg rounded-xl flex flex-col justify-end">
            <span className="font-display-lg text-display-lg leading-none mb-stack-sm">98%</span>
            <p className="font-label-sm text-label-sm opacity-70">DATA ACCURACY IN TRACKING</p>
          </div>

          <div className="md:col-span-1 bg-surface-container-high p-stack-lg rounded-xl flex flex-col items-center justify-center text-center">
            <div className="w-full aspect-square border-2 border-dashed border-primary/20 rounded-full flex items-center justify-center p-8 animate-[spin_12s_linear_infinite]">
              <Recycle className="w-16 h-16 text-primary" />
            </div>
            <h4 className="mt-stack-md font-label-sm text-label-sm">RECURSIVE RECOVERY</h4>
          </div>

          <div className="md:col-span-1 bg-secondary-container p-stack-lg rounded-xl">
            <Leaf className="w-10 h-10 text-on-secondary-container mb-stack-md" />
            <h3 className="font-headline-md text-headline-md text-on-secondary-container mb-stack-sm">Bio-Regen</h3>
            <p className="font-body-md text-body-md text-on-secondary-fixed-variant">Converting non-recyclable organics into high-grade compostable polymers.</p>
          </div>

          <div className="md:col-span-3 bg-white p-0 rounded-xl border border-outline-variant/30 overflow-hidden relative">
            <img 
              className="w-full h-full object-cover opacity-60" 
              alt="Global Reach Map" 
              src="/images/circular economy.jpg"
            />
            <div className="absolute bottom-8 left-8 glass-panel p-6 rounded-lg max-w-xs backdrop-blur-xl bg-white/30 border border-white/20 shadow-xl">
              <h4 className="font-headline-md text-headline-md mb-2 text-primary">Global Reach</h4>
              <p className="font-body-md text-body-md text-primary">Connecting 42 nations into a single, transparent accountability network.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Flow Diagram */}
      <section className="bg-tertiary-fixed py-section-padding">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-24">
            <span className="font-label-sm text-label-sm text-tertiary/60 uppercase tracking-widest block mb-4">The Circularity Model</span>
            <h2 className="font-display-lg text-headline-xl md:text-display-lg text-tertiary">From Production to Bio-Restoration</h2>
          </div>
          <div className="relative flex flex-col md:flex-row justify-between gap-12 items-start">
            <div className="flex-1 text-center group">
              <div className="w-24 h-24 bg-white rounded-full mx-auto flex items-center justify-center mb-8 border border-tertiary/10 transition-transform group-hover:scale-110">
                <Factory className="w-10 h-10 text-primary" />
              </div>
              <h4 className="font-headline-md text-body-lg font-bold mb-4">Extraction & Design</h4>
              <p className="font-body-md text-on-tertiary-fixed-variant">Producers commit to low-impact design and upfront EPR fees based on material complexity.</p>
            </div>
            
            <div className="hidden md:flex pt-12 items-center justify-center">
              <ArrowRight className="w-8 h-8 text-tertiary/20" />
            </div>

            <div className="flex-1 text-center group">
              <div className="w-24 h-24 bg-white rounded-full mx-auto flex items-center justify-center mb-8 border border-tertiary/10 transition-transform group-hover:scale-110">
                <Truck className="w-10 h-10 text-primary" />
              </div>
              <h4 className="font-headline-md text-body-lg font-bold mb-4">Smart Logistics</h4>
              <p className="font-body-md text-on-tertiary-fixed-variant">IoT-enabled collection systems optimize recovery routes, reducing transport emissions by 40%.</p>
            </div>

            <div className="hidden md:flex pt-12 items-center justify-center">
              <ArrowRight className="w-8 h-8 text-tertiary/20" />
            </div>

            <div className="flex-1 text-center group">
              <div className="w-24 h-24 bg-white rounded-full mx-auto flex items-center justify-center mb-8 border border-tertiary/10 transition-transform group-hover:scale-110">
                <Layers className="w-10 h-10 text-primary" />
              </div>
              <h4 className="font-headline-md text-body-lg font-bold mb-4">Material Separation</h4>
              <p className="font-body-md text-on-tertiary-fixed-variant">AI-driven sorting facilities break down complex textiles into virgin-grade polymers.</p>
            </div>

            <div className="hidden md:flex pt-12 items-center justify-center">
              <ArrowRight className="w-8 h-8 text-tertiary/20" />
            </div>

            <div className="flex-1 text-center group">
              <div className="w-24 h-24 bg-primary text-white rounded-full mx-auto flex items-center justify-center mb-8 shadow-xl transition-transform group-hover:scale-110">
                <Leaf className="w-10 h-10" />
              </div>
              <h4 className="font-headline-md text-body-lg font-bold mb-4 text-primary">Regenerative Feedstock</h4>
              <p className="font-body-md text-on-tertiary-fixed-variant">Output is reintroduced as premium raw material, effectively decoupling growth from resource extraction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency & Reporting */}
      <section className="py-section-padding px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-stack-lg items-center">
        <div>
          <h2 className="font-headline-xl text-headline-xl mb-stack-md">Shared Responsibility for Sustainable Outcomes</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-lg">
            Our Extended Producer Responsibility (EPR) model ensures that producers take accountability for the lifecycle of their products.We work with organizations to:
          </p>
          <ul className="space-y-4 mb-stack-lg">
            <li className="flex items-center gap-4 py-4 border-b border-outline-variant">
              <CheckCircle2 className="w-6 h-6 text-emerald-600" />
              <span className="font-body-md font-bold">Track material flows</span>
            </li>
            <li className="flex items-center gap-4 py-4 border-b border-outline-variant">
              <ShieldCheck className="w-6 h-6 text-emerald-600" />
              <span className="font-body-md font-bold">Ensure compliance with environmental regulations</span>
            </li>
            <li className="flex items-center gap-4 py-4 border-b border-outline-variant">
              <Globe className="w-6 h-6 text-emerald-600" />
              <span className="font-body-md font-bold">Build sustainable waste management systems</span>
            </li>
          </ul>
          <button className="bg-primary text-on-primary px-10 py-4 rounded-full font-label-sm uppercase hover:scale-105 transition-transform">
            View Portfolio
          </button>
        </div>
        <div className="bg-surface-container rounded-3xl p-stack-md aspect-square flex items-center justify-center relative">
          <img 
            className="w-full h-full object-cover rounded-2xl" 
            alt="Dashboard visual" 
            src="/images/recycling economy.jpg" 
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="mb-24 px-8">
        <div className="max-w-7xl mx-auto bg-primary-container rounded-[2rem] p-16 md:p-24 text-center overflow-hidden relative">
          <div className="relative z-10">
            <h2 className="font-display-lg text-headline-xl md:text-display-lg text-white mb-8">Ready to pioneer the <span className="text-on-primary-container italic">next economy?</span></h2>
            <p className="font-body-lg text-body-lg text-on-primary-fixed-variant max-w-2xl mx-auto mb-12">
              Join 200+ global brands already enrolled in our EPR scheme. Transform your waste liability into a regenerative asset.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <button className="bg-secondary text-on-secondary px-12 py-5 rounded-full font-label-sm uppercase hover:scale-105 transition-transform">Become a Partner</button>
              <button className="bg-white/10 text-white backdrop-blur-md border border-white/20 px-12 py-5 rounded-full font-label-sm uppercase hover:bg-white/20 transition-all">Download 2024 Report</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

