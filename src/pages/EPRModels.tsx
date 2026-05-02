import { Recycle, ShieldCheck, Heart, Users, Handshake, FileCheck, Leaf, ArrowRight } from 'lucide-react';

const EPRModels = () => {
  return (
    <div className="bg-background text-on-background font-body-md selection:bg-primary-fixed selection:text-on-primary-fixed pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-primary-container">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="/images/TRJ_8795.jpg" 
            alt="High-tech industrial recycling facility" 
            className="w-full h-full object-cover mix-blend-screen opacity-50 grayscale" 
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-container via-primary-container/80 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 py-32">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 mb-8 rounded-full bg-on-primary-container/10 border border-on-primary-container/20 text-on-primary-container font-label-sm uppercase tracking-widest text-xs">
              Circular Models
            </span>
            <h1 className="font-display-lg text-5xl md:text-7xl text-emerald-50 mb-8">Our Niche</h1>
            <p className="font-body-lg text-lg text-emerald-100/80 leading-relaxed mb-12">
              An open & collaborative partnership with all stakeholders in the packaged goods value chain building a transparent & impactful extended producer responsibility scheme to fund awareness & capacity building to accelerate Uganda from the Linear & Recycling economy to the Circular Economy.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-secondary text-on-secondary px-8 py-4 rounded-full font-label-sm uppercase tracking-widest text-xs hover:scale-[1.02] transition-transform">
                Explore EPR Models
              </button>
              <button className="border border-emerald-50/20 text-emerald-50 px-8 py-4 rounded-full font-label-sm uppercase tracking-widest text-xs hover:bg-emerald-50/10 transition-all">
                View Impact Report
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Stats */}
      <div className="bg-surface-container-low py-12 border-y border-outline-variant overflow-hidden">
        <div className="flex animate-[marquee_40s_linear_infinite] whitespace-nowrap gap-24 items-center">
          <span className="font-headline-md text-2xl md:text-3xl text-primary opacity-40 flex items-center gap-4">
            <Recycle className="w-8 h-8" /> COLLABORATION
          </span>
          <span className="font-headline-md text-2xl md:text-3xl text-primary opacity-40 flex items-center gap-4">
            <ShieldCheck className="w-8 h-8" /> ACCOUNTABILITY
          </span>
          <span className="font-headline-md text-2xl md:text-3xl text-primary opacity-40 flex items-center gap-4">
            <Heart className="w-8 h-8" /> PASSION
          </span>
          <span className="font-headline-md text-2xl md:text-3xl text-primary opacity-40 flex items-center gap-4">
            <Users className="w-8 h-8" /> RESPECT
          </span>
          {/* Duplicate for loop */}
          <span className="font-headline-md text-2xl md:text-3xl text-primary opacity-40 flex items-center gap-4">
            <Recycle className="w-8 h-8" /> COLLABORATION
          </span>
          <span className="font-headline-md text-2xl md:text-3xl text-primary opacity-40 flex items-center gap-4">
            <ShieldCheck className="w-8 h-8" /> ACCOUNTABILITY
          </span>
          <span className="font-headline-md text-2xl md:text-3xl text-primary opacity-40 flex items-center gap-4">
            <Heart className="w-8 h-8" /> PASSION
          </span>
          <span className="font-headline-md text-2xl md:text-3xl text-primary opacity-40 flex items-center gap-4">
            <Users className="w-8 h-8" /> RESPECT
          </span>
        </div>
      </div>

      {/* Core Values Section */}
      <section className="py-32 px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <h2 className="font-headline-xl text-4xl md:text-5xl mb-6">Built on Ethical Precision</h2>
            <p className="font-body-lg text-lg text-on-surface-variant">Our EPR framework is anchored in four core pillars that transform standard regulatory compliance into a driver for regenerative economic growth.</p>
          </div>
          <div className="flex gap-4">
            <span className="font-headline-xl text-5xl text-primary opacity-10 font-black">04</span>
            <span className="font-label-sm uppercase tracking-tighter pt-4 text-xs">Strategic<br/>Pillars</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Collaboration */}
          <div className="group border border-outline-variant p-10 hover:bg-surface-container transition-all duration-300 flex flex-col justify-between min-h-[400px]">
            <div>
              <div className="w-12 h-12 flex items-center justify-center bg-primary-fixed rounded-full mb-8">
                <Handshake className="w-6 h-6 text-on-primary-fixed" />
              </div>
              <h3 className="font-headline-md text-2xl md:text-3xl mb-6">Collaboration</h3>
              <p className="font-body-md text-on-surface-variant mb-4">True partnership, collaboration & transparency with all public & private stakeholders.</p>
              <p className="font-body-md text-on-surface-variant italic">Every Ugandan will have awareness, education & passion for the environment. Strong collaborative partnership established.</p>
            </div>
            <div className="mt-8 flex justify-end">
              <ArrowRight className="w-6 h-6 text-primary group-hover:translate-x-2 transition-transform" />
            </div>
          </div>

          {/* Accountability */}
          <div className="group border border-outline-variant p-10 hover:bg-surface-container transition-all duration-300 flex flex-col justify-between min-h-[400px]">
            <div>
              <div className="w-12 h-12 flex items-center justify-center bg-secondary-fixed rounded-full mb-8">
                <FileCheck className="w-6 h-6 text-on-secondary-fixed" />
              </div>
              <h3 className="font-headline-md text-2xl md:text-3xl mb-6">Accountability</h3>
              <p className="font-body-md text-on-surface-variant mb-4">High Ethical & Moral standards. Real Time Recognition & Validation on GASP Website & App.</p>
              <p className="font-body-md text-on-surface-variant">Aggregate Revenue Spend transparently shared. Data Privacy at the core of our operations.</p>
            </div>
            <div className="mt-8 flex justify-end">
              <ArrowRight className="w-6 h-6 text-primary group-hover:translate-x-2 transition-transform" />
            </div>
          </div>

          {/* Passion */}
          <div className="group border border-outline-variant p-10 hover:bg-surface-container transition-all duration-300 flex flex-col justify-between min-h-[400px]">
            <div>
              <div className="w-12 h-12 flex items-center justify-center bg-primary-fixed-dim rounded-full mb-8">
                <Leaf className="w-6 h-6 text-on-primary-fixed-variant" />
              </div>
              <h3 className="font-headline-md text-2xl md:text-3xl mb-6">Passion</h3>
              <p className="font-body-md text-on-surface-variant mb-4">Passion for Supporting the recycling economy. EPR fees will subsidise collection, sorting & recycling ecosystem operators.</p>
              <p className="font-body-md text-on-surface-variant">EPR fee policy will be based on complexity, recyclability & circularity to drive true innovation.</p>
            </div>
            <div className="mt-8 flex justify-end">
              <ArrowRight className="w-6 h-6 text-primary group-hover:translate-x-2 transition-transform" />
            </div>
          </div>

          {/* Respect */}
          <div className="group border border-outline-variant p-10 hover:bg-surface-container transition-all duration-300 flex flex-col justify-between min-h-[400px]">
            <div>
              <div className="w-12 h-12 flex items-center justify-center bg-tertiary-fixed-dim rounded-full mb-8">
                <Users className="w-6 h-6 text-on-tertiary-fixed" />
              </div>
              <h3 className="font-headline-md text-2xl md:text-3xl mb-6">Respect</h3>
              <p className="font-body-md text-on-surface-variant mb-4">All Strategies, Policies & actions put people first. We recognize the human element in every node of the value chain.</p>
              <p className="font-body-md text-on-surface-variant">Concierge service for members, ensuring high-fidelity support for our circular partners.</p>
            </div>
            <div className="mt-8 flex justify-end">
              <ArrowRight className="w-6 h-6 text-primary group-hover:translate-x-2 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Impact Display */}
      <section className="bg-surface-container-lowest py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src="/images/TRJ_8796.jpg" 
              alt="Circular waste sorting line" 
              className="w-full h-full object-cover mix-blend-multiply opacity-20 grayscale" 
            />
          </div>
          <div className="order-1 lg:order-2">
            <span className="font-label-sm text-primary uppercase tracking-widest block mb-6 text-xs">Our Methodology</span>
            <h2 className="font-headline-xl text-4xl md:text-5xl mb-10">Uganda's Transition to Circularity</h2>
            <div className="space-y-12">
              <div className="flex gap-8 items-start">
                <span className="font-headline-xl text-4xl text-outline-variant">01</span>
                <div>
                  <h4 className="font-headline-md text-2xl md:text-3xl text-primary mb-2">Linear Phase</h4>
                  <p className="font-body-md text-on-surface-variant">The traditional take-make-waste model which we are aggressively disrupting through stakeholder education.</p>
                </div>
              </div>
              <div className="flex gap-8 items-start">
                <span className="font-headline-xl text-4xl text-primary-fixed-dim">02</span>
                <div>
                  <h4 className="font-headline-md text-2xl md:text-3xl text-primary mb-2">Recycling Economy</h4>
                  <p className="font-body-md text-on-surface-variant">Improving the efficiency of mass flow and recovery through strategic EPR subsidies and infrastructure.</p>
                </div>
              </div>
              <div className="flex gap-8 items-start">
                <span className="font-headline-xl text-4xl text-primary">03</span>
                <div>
                  <h4 className="font-headline-md text-2xl md:text-3xl text-primary mb-2">Circular Future</h4>
                  <p className="font-body-md text-on-surface-variant">A closed-loop system where waste is designed out and the packaged goods value chain becomes regenerative.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-8">
        <div className="max-w-5xl mx-auto text-center border-t border-outline-variant pt-24">
          <h2 className="font-display-lg text-4xl md:text-6xl mb-12">Join the Collective Responsibility</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-primary text-on-primary px-10 py-5 rounded-full font-label-sm uppercase tracking-widest text-xs hover:scale-105 transition-transform">
              Become a Member
            </button>
            <button className="bg-secondary-container text-on-secondary-container px-10 py-5 rounded-full font-label-sm uppercase tracking-widest text-xs hover:scale-105 transition-transform">
              EPR Fee Schedule
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EPRModels;
