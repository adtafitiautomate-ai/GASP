import VideoHero from '../components/home/VideoHero';
import LogoMarquee from '../components/LogoMarquee';
import { ArrowRight, Recycle, RefreshCw } from 'lucide-react';

export default function Home() {
  return (
    <>
      <VideoHero />

      {/* Introduction */}
      <section className="py-section-padding bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="mb-10 flex h-24 w-24 items-center justify-center overflow-hidden rounded-2xl border border-outline-variant bg-white p-2 shadow-sm">
                <img src="/images/logo.png" alt="GASP logo" className="h-full w-full object-contain" />
              </div>
              <h2 className="font-headline-xl text-headline-xl text-primary mb-6">Established 2023. Impact Driven.</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                Incubated in 2023, GASP is an open & collaborative partnership building a transparent & impactful EPR scheme to fund awareness & capacity building across the region.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-outline-variant">
                <img className="w-full h-full object-cover" alt="Community Outreach" src="/images/community_outreach.jpg"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LogoMarquee eyebrow="GASP Partner Network" />

      {/* Core Pillars */}
      <section className="py-section-padding bg-surface-container">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <span className="font-label-sm text-on-secondary-fixed-variant uppercase tracking-widest">Our Methodology</span>
            <h2 className="font-headline-xl text-headline-xl text-primary mt-4">Defining the Next Paradigm</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Linear */}
            <div className="p-10 bg-white border border-outline-variant rounded-3xl flex flex-col items-start hover:border-primary transition-colors group">
              <div className="w-16 h-16 rounded-2xl bg-surface-container-high flex items-center justify-center text-primary mb-8 group-hover:bg-primary-container group-hover:text-white transition-colors">
                <ArrowRight className="w-8 h-8" />
              </div>
              <h3 className="font-headline-md text-headline-md mb-4 text-primary">Linear Economy</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                The traditional 'Take-Make-Waste' model. Extracting resources, using them, and disposing of them, leading to significant environmental degradation.
              </p>
              <div className="mt-auto pt-8 flex items-center text-on-primary-container font-bold text-label-sm">
                LEGACY MODEL
              </div>
            </div>
            {/* Recycling */}
            <div className="p-10 bg-white border border-outline-variant rounded-3xl flex flex-col items-start hover:border-primary transition-colors group">
              <div className="w-16 h-16 rounded-2xl bg-surface-container-high flex items-center justify-center text-primary mb-8 group-hover:bg-primary-container group-hover:text-white transition-colors">
                <Recycle className="w-8 h-8" />
              </div>
              <h3 className="font-headline-md text-headline-md mb-4 text-primary">Recycling Economy</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Focusing on end-of-life material recovery. Converting waste back into raw materials, but often losing value and quality in the process.
              </p>
              <div className="mt-auto pt-8 flex items-center text-on-primary-container font-bold text-label-sm">
                INTERIM STEP
              </div>
            </div>
            {/* Circular */}
            <div className="p-10 bg-primary-container border border-primary-container rounded-3xl flex flex-col items-start text-white group">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-white mb-8">
                <RefreshCw className="w-8 h-8" />
              </div>
              <h3 className="font-headline-md text-headline-md mb-4 text-white">Circular Economy</h3>
              <p className="font-body-md text-body-md text-on-primary-container">
                Designing out waste from the start. Maintaining materials at their highest value through reuse, repair, and regenerative production systems.
              </p>
              <div className="mt-auto pt-8 flex items-center text-white font-bold text-label-sm">
                THE GASP STANDARD
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Overview */}
      <section className="py-section-padding bg-primary-container text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary rounded-full blur-[120px]"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary-fixed-dim rounded-full blur-[120px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-1">
              <h2 className="font-headline-xl text-headline-xl mb-6">Real-Time Impact Metrics</h2>
              <p className="font-body-md text-on-primary-container">Live data tracking from our partner network and EPR monitoring systems.</p>
            </div>
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="border-l border-white/20 pl-8 py-4">
                <div className="font-display-lg text-6xl mb-2">42+</div>
                <div className="font-label-sm text-on-primary-container uppercase tracking-widest">Partner Facilities</div>
              </div>
              <div className="border-l border-white/20 pl-8 py-4">
                <div className="font-display-lg text-6xl mb-2">85%</div>
                <div className="font-label-sm text-on-primary-container uppercase tracking-widest">Resource Recovery Rate</div>
              </div>
              <div className="border-l border-white/20 pl-8 py-4">
                <div className="font-display-lg text-6xl mb-2">$1.2M</div>
                <div className="font-label-sm text-on-primary-container uppercase tracking-widest">Community Reinvestment</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-section-padding bg-surface-bright">
        <div className="max-w-7xl mx-auto px-8">
          <div className="bg-secondary-container rounded-[48px] p-20 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="font-headline-xl text-headline-xl text-on-secondary-fixed mb-8 max-w-2xl mx-auto">Join the Circular Revolution.</h2>
              <p className="font-body-lg text-on-secondary-container mb-12 max-w-xl mx-auto">
                Whether you are a manufacturer, recycler, or community leader, your action defines the future of Ugandan production.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-primary-container text-white px-10 py-5 rounded-full font-bold hover:scale-[1.02] transition-all">
                  Become a Partner
                </button>
                <a href="/docs/GASP%20Strategy%20Roadmap%20and%20Portfolio%202023-2030.pdf" download className="bg-white text-primary px-10 py-5 rounded-full font-bold border border-outline-variant hover:bg-surface transition-all">
                  Download Portfolio
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}



