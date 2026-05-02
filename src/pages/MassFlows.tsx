import { TrendingDown, RefreshCw, Infinity as InfinityIcon } from 'lucide-react';

const MassFlows = () => {
  return (
    <div className="bg-background text-on-background font-body-md pt-20 selection:bg-primary-fixed selection:text-on-primary-fixed">
      {/* Hero Section */}
      <section className="relative min-h-[819px] flex flex-col justify-center overflow-hidden bg-primary-container py-32 px-8">
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(circle at center, rgba(173, 206, 188, 0.15) 0%, transparent 70%)' }}
        ></div>
        
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8">
              <span className="inline-block px-4 py-1 bg-on-primary-fixed-variant/20 text-on-primary-container rounded-full font-label-sm uppercase mb-6 text-xs">
                Regenerative Intelligence
              </span>
              <h1 className="font-display-lg text-5xl md:text-7xl text-surface-container-lowest mb-8">
                Journey from Linear to Circular Economy
              </h1>
              <p className="font-body-lg text-lg text-on-primary-container max-w-2xl mb-12">
                A scientific exploration of resource logistics and value preservation. We map the global shift from terminal waste cycles to infinite material regeneration.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-secondary text-on-secondary px-8 py-4 rounded-full font-label-sm uppercase text-xs hover:scale-[1.02] transition-transform">
                  Explore The Model
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Visual Flow */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full hidden lg:block opacity-40">
          <img 
            src="/images/TRJ_8799.jpg" 
            alt="Data streams" 
            className="w-full h-full object-cover grayscale opacity-50 mix-blend-screen" 
          />
        </div>
      </section>

      {/* Marquee / Loop Status */}
      <div className="py-12 bg-surface-container-low overflow-hidden whitespace-nowrap border-y border-outline-variant/30">
        <div className="flex animate-[marquee_30s_linear_infinite] gap-16 items-center">
          <span className="font-headline-md text-2xl md:text-3xl text-primary/10 uppercase italic">Circular Resilience</span>
          <span className="font-headline-md text-2xl md:text-3xl text-primary/10 uppercase italic">Mass Flow Optimization</span>
          <span className="font-headline-md text-2xl md:text-3xl text-primary/10 uppercase italic">Regenerative Design</span>
          <span className="font-headline-md text-2xl md:text-3xl text-primary/10 uppercase italic">Closed Loop Systems</span>
          <span className="font-headline-md text-2xl md:text-3xl text-primary/10 uppercase italic">Impact Logistics</span>
          <span className="font-headline-md text-2xl md:text-3xl text-primary/10 uppercase italic">Circular Resilience</span>
          <span className="font-headline-md text-2xl md:text-3xl text-primary/10 uppercase italic">Mass Flow Optimization</span>
        </div>
      </div>

      {/* The Three Eras Section */}
      <section className="max-w-7xl mx-auto px-8 py-32">
        <div className="text-center mb-24">
          <h2 className="font-headline-xl text-4xl md:text-5xl text-primary mb-6">The Circular Economy Model</h2>
          <div className="h-1 w-24 bg-secondary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Linear Economy */}
          <div className="group border border-outline-variant p-10 rounded-lg bg-surface transition-all hover:bg-surface-container-low flex flex-col h-full">
            <div className="mb-8">
              <TrendingDown className="w-10 h-10 text-error mb-4" />
              <h3 className="font-headline-md text-2xl md:text-3xl text-primary mb-4">Linear Economy</h3>
              <p className="font-body-md text-on-surface-variant">
                Our linear economy exponentially grew during the industrial revolution, and our planet has suffered from the take, make, use & waste value chain.
              </p>
            </div>
            <div className="mt-auto pt-8 border-t border-outline-variant/30">
              <img 
                src="/images/TRJ_8792.jpg" 
                alt="Linear Economy" 
                className="w-full h-48 object-cover rounded grayscale" 
              />
              <div className="mt-6 flex justify-between items-center text-error font-label-sm uppercase tracking-widest text-xs">
                <span>Efficiency Loss</span>
                <span>98%</span>
              </div>
            </div>
          </div>

          {/* Recycling Economy */}
          <div className="group border border-outline-variant p-10 rounded-lg bg-surface transition-all hover:bg-surface-container-low flex flex-col h-full">
            <div className="mb-8">
              <RefreshCw className="w-10 h-10 text-secondary mb-4" />
              <h3 className="font-headline-md text-2xl md:text-3xl text-primary mb-4">Recycling Economy</h3>
              <p className="font-body-md text-on-surface-variant">
                Growing the recycling ecosystem is an important yet intermediate step in our transition to a circular ecosystem.
              </p>
            </div>
            <div className="mt-auto pt-8 border-t border-outline-variant/30">
              <img 
                src="/images/elephant with plastic bottles recycle.jpg" 
                alt="Recycling Economy" 
                className="w-full h-48 object-cover rounded grayscale" 
              />
              <div className="mt-6 flex justify-between items-center text-secondary font-label-sm uppercase tracking-widest text-xs">
                <span>Value Recovery</span>
                <span>42%</span>
              </div>
            </div>
          </div>

          {/* Circular Economy */}
          <div className="group bg-primary-container p-10 rounded-lg text-surface-container-lowest transition-all hover:scale-[1.01] flex flex-col h-full ring-1 ring-emerald-400/20">
            <div className="mb-8">
              <InfinityIcon className="w-10 h-10 text-on-primary-container mb-4" />
              <h3 className="font-headline-md text-2xl md:text-3xl mb-4 text-emerald-50">Circular Economy</h3>
              <p className="font-body-md text-on-primary-container">
                A circular ecosystem where nothing goes to waste & everything is made from renewable or recovered materials.
              </p>
            </div>
            <div className="mt-auto pt-8 border-t border-emerald-900">
              <img 
                src="/images/TRJ_8801.jpg" 
                alt="Circular Economy" 
                className="w-full h-48 object-cover rounded brightness-110 contrast-110" 
              />
              <div className="mt-6 flex justify-between items-center text-on-primary-container font-label-sm uppercase tracking-widest text-xs">
                <span>Resilience Factor</span>
                <span>100%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Diagram Section / Asymmetric Bento */}
      <section className="bg-surface-container-lowest py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Text Block */}
            <div className="md:col-span-5 flex flex-col justify-center">
              <h4 className="font-label-sm text-secondary uppercase tracking-[0.2em] mb-4 text-xs">Mass Flows Analysis</h4>
              <h2 className="font-headline-xl text-4xl md:text-5xl text-primary mb-8">Decoupling Growth from Extraction</h2>
              <p className="font-body-lg text-lg text-on-surface-variant mb-8">
                Our model focuses on the preservation of natural capital. By extending product lifecycles and optimizing material flows, we eliminate the very concept of "waste."
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="bg-primary-fixed text-on-primary-fixed w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs shrink-0">01</span>
                  <div>
                    <h5 className="font-headline-md text-lg text-primary mb-1">Renewable Sourcing</h5>
                    <p className="font-body-md text-on-surface-variant">Leveraging bio-based components that safely return to the biosphere.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <span className="bg-primary-fixed text-on-primary-fixed w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs shrink-0">02</span>
                  <div>
                    <h5 className="font-headline-md text-lg text-primary mb-1">Technical Nutrients</h5>
                    <p className="font-body-md text-on-surface-variant">Synthetics designed for disassembly and high-purity recycling loops.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Visual Block */}
            <div className="md:col-span-7 relative">
              <div className="aspect-[4/5] bg-surface-container rounded-3xl overflow-hidden relative group">
                <img 
                  src="/images/TRJ_8793.jpg" 
                  alt="Integrated Supply Chain" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex items-end p-12">
                  <p className="text-surface-container-lowest font-headline-md text-2xl md:text-3xl">Integrated Supply Chain Hub</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-8 py-32">
        <div className="bg-surface-container-high rounded-3xl p-16 text-center border border-outline-variant">
          <h2 className="font-headline-xl text-4xl md:text-5xl text-primary mb-6">Redefine Your Value Chain</h2>
          <p className="font-body-lg text-lg text-on-surface-variant max-w-2xl mx-auto mb-10">
            Join the global shift toward regenerative production. Our analytics team is ready to map your circular potential.
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <button className="bg-secondary text-on-secondary px-10 py-5 rounded-full font-label-sm uppercase hover:scale-[1.02] transition-transform text-xs">
              Get Sustainability Report
            </button>
            <button className="border border-outline text-primary px-10 py-5 rounded-full font-label-sm uppercase hover:bg-surface-container transition-colors text-xs">
              Partner with us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MassFlows;
