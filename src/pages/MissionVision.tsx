import { ClipboardCheck, Leaf, MapPin, Megaphone, Network, PackageCheck, Recycle, Users, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const programs = [
  {
    title: 'Producer Compliance Management',
    text: 'Simplified, real-time compliance tracking for producers. Monthly volume declarations, automatic levy calculations, and compliance certificates - all in one portal.',
    cta: 'Manage Compliance',
    to: '/impact',
    icon: ClipboardCheck,
  },
  {
    title: 'Recycler Network Development',
    text: "Building Uganda's formal recycling sector by certifying collectors, funding infrastructure, and connecting recyclers to offtake markets.",
    cta: 'Join the Network',
    to: '/partnerships',
    icon: Network,
  },
  {
    title: 'Circular Design Accelerator',
    text: 'Supporting Ugandan manufacturers in redesigning packaging for recyclability - from material selection to supplier engagement and eco-design audits.',
    icon: PackageCheck,
  },
  {
    title: 'GASP Youth Champions',
    text: 'Equipping university students and young professionals with recycling entrepreneurship skills across 10 Ugandan districts. The next generation of circular economy leaders.',
    cta: 'Get Involved',
    to: '/contact',
    icon: Users,
  },
  {
    title: 'Take-Back Collection Points',
    text: 'A growing network of registered plastic take-back points in supermarkets, schools, and fuel stations - making responsible disposal easy and accessible.',
    cta: 'Find a Point',
    to: '/contact',
    icon: MapPin,
  },
  {
    title: 'Consumer Awareness Campaigns',
    text: 'Radio, digital, and community-level campaigns promoting plastic sorting, reuse, and responsible disposal - in English, Luganda, Runyankole, and Luo.',
    cta: 'See Campaigns',
    to: '/gallery',
    icon: Megaphone,
  },
];

export default function MissionVision() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[800px] flex items-center overflow-hidden bg-primary-container">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover opacity-60 grayscale-[0.2]" 
            alt="Ugandan landscape" 
            src="/images/mission feature image.jpg"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-container via-primary-container/40 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <div className="max-w-3xl">
            <span className="inline-block font-label-sm text-label-sm text-on-primary-container bg-primary-fixed/20 px-4 py-2 rounded-full mb-8 uppercase tracking-widest">
              The Transition
            </span>
            <h1 className="font-display-lg text-display-lg text-white mb-8">
              Regenerating the <br/><span className="italic font-light">Circular Future.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-white/80 max-w-xl mb-12">
              GASP is orchestrating Uganda's shift from destructive linear consumption to a high-performance circular economy. We rebuild industrial precision through biological intelligence.
            </p>
            <div className="flex gap-6 items-center">
              <button className="bg-secondary text-on-secondary px-10 py-5 rounded-full font-label-sm text-label-sm uppercase hover:scale-105 transition-transform duration-200">
                Our Strategic Map
              </button>
              <div className="flex items-center gap-3 text-white/60 font-label-sm text-label-sm tracking-widest uppercase">
                <span className="w-12 h-[1px] bg-white/30"></span>
                Established 2023
              </div>
            </div>
          </div>
        </div>
        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
          <span className="font-label-sm text-[10px] text-white/40 uppercase tracking-[0.3em]">Discover</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-emerald-500 to-transparent"></div>
        </div>
      </section>

      {/* Our Purpose / Bento Grid */}
      <section className="py-section-padding px-8 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="font-headline-xl text-headline-xl text-primary mb-6">Our Purpose</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Uganda stands at a crossroads. By replacing the 'take-make-waste' model with systemic regeneration, we protect biodiversity while scaling sustainable production.
              </p>
            </div>
            <div className="text-right">
              <span className="font-display-lg text-display-lg text-primary-fixed-dim leading-none opacity-30">01</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            {/* Impact Card 1 */}
            <div className="md:col-span-8 group overflow-hidden relative rounded-xl border border-outline-variant bg-surface-container-low p-12 transition-all hover:border-primary/20">
              <div className="flex flex-col h-full justify-between gap-12">
                <div className="max-w-md">
                  <h3 className="font-headline-md text-headline-md text-primary mb-4">Eliminating Industrial Waste</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">We partner with local manufacturers to integrate closed-loop technologies that transform production by-products into high-value raw materials.</p>
                </div>
                <div className="flex items-end justify-between">
                  <div className="font-headline-xl text-headline-xl text-primary leading-none">85%<span className="text-headline-md font-light ml-2">Efficiency Gain</span></div>
                  <Recycle className="w-10 h-10 text-primary/20 group-hover:text-primary transition-colors" />
                </div>
              </div>
            </div>

            {/* Impact Card 2 */}
            <div className="md:col-span-4 group overflow-hidden relative rounded-xl border border-outline-variant bg-primary-container p-12 transition-all">
              <img 
                className="absolute inset-0 w-full h-full object-cover opacity-20 transition-transform duration-700 group-hover:scale-110" 
                alt="Regenerative Sourcing" 
                src="/images/Regenerative Sourcing.jpg"
              />
              <div className="relative z-10 flex flex-col h-full justify-between text-white">
                <Leaf className="w-10 h-10" />
                <div>
                  <h3 className="font-headline-md text-headline-md mb-2">Regenerative Sourcing</h3>
                  <p className="font-body-md text-white/70">100% trace-ability for organic textiles and bio-materials.</p>
                </div>
              </div>
            </div>

            {/* Impact Card 3 */}
            <div className="md:col-span-4 group rounded-xl border border-outline-variant bg-surface-container-highest p-12">
              <h3 className="font-label-sm text-label-sm text-primary mb-8 uppercase tracking-widest">Community Hubs</h3>
              <p className="font-headline-md text-headline-md text-primary mb-6">Empowering 50,000+ local producers with circular tech.</p>
              <div className="w-full h-1 bg-outline-variant relative overflow-hidden">
                <div className="absolute left-0 top-0 h-full w-2/3 bg-primary"></div>
              </div>
            </div>

            {/* Impact Card 4 */}
            <div className="md:col-span-8 group overflow-hidden relative rounded-xl bg-secondary-container p-12 flex items-center gap-12">
              <div className="flex-1">
                <h3 className="font-headline-md text-headline-md text-on-secondary-container mb-4">Circular Policy Advocacy</h3>
                <p className="font-body-md text-on-secondary-fixed-variant">Driving the legislative framework for Uganda’s sustainable industrial revolution.</p>
              </div>
              <div className="hidden md:flex w-48 h-48 rounded-full border-4 border-dashed border-on-secondary-container/20 animate-[spin_20s_linear_infinite] items-center justify-center">
                <Globe className="w-12 h-12 text-on-secondary-container" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-section-padding px-8 bg-surface-container">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 max-w-3xl">
            <span className="font-label-sm text-primary uppercase tracking-widest">Programs</span>
            <h2 className="font-headline-xl text-headline-xl text-primary mt-4">Programs That Drive Real Impact</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {programs.map((program) => {
              const Icon = program.icon;

              return (
                <article key={program.title} className="flex min-h-[360px] flex-col rounded-xl border border-outline-variant bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(0,23,14,0.10)]">
                  <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-fixed text-primary">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-headline-md text-2xl text-primary">{program.title}</h3>
                  <p className="mt-5 font-body-md text-on-surface-variant">{program.text}</p>
                  {program.cta && program.to && (
                    <Link to={program.to} className="mt-auto inline-flex items-center gap-2 pt-8 font-label-sm uppercase text-primary hover:text-secondary">
                      {program.cta} <span aria-hidden="true">-&gt;</span>
                    </Link>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Strategic Vision Section */}
      <section className="relative py-section-padding bg-primary-container text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full">
          <img 
            className="w-full h-full object-cover opacity-30" 
            style={{ maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)" }}
            alt="Strategic Vision" 
            src="/images/the loop of prosperity.jpg"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8">
          <div className="md:grid md:grid-cols-12 gap-gutter">
            <div className="md:col-span-7">
              <span className="font-label-sm text-label-sm text-emerald-400 mb-8 block uppercase tracking-widest">Strategic Vision 2030</span>
              <h2 className="font-display-lg text-display-lg mb-12">The Loop of <br/>Prosperity</h2>
              <div className="space-y-12">
                <div className="flex gap-8 group">
                  <div className="font-headline-md text-headline-md text-emerald-500/50 group-hover:text-emerald-400 transition-colors">01</div>
                  <div>
                    <h4 className="font-headline-md text-headline-md mb-3">Biological Restoration</h4>
                    <p className="font-body-lg text-white/60 max-w-md">Actively restoring 1M+ hectares of Ugandan soil through indigenous reforestation and bio-remediation protocols.</p>
                  </div>
                </div>
                <div className="flex gap-8 group">
                  <div className="font-headline-md text-headline-md text-emerald-500/50 group-hover:text-emerald-400 transition-colors">02</div>
                  <div>
                    <h4 className="font-headline-md text-headline-md mb-3">Zero-Waste Infrastructure</h4>
                    <p className="font-body-lg text-white/60 max-w-md">Deploying modular circular processing units in every major industrial corridor in Uganda.</p>
                  </div>
                </div>
                <div className="flex gap-8 group">
                  <div className="font-headline-md text-headline-md text-emerald-500/50 group-hover:text-emerald-400 transition-colors">03</div>
                  <div>
                    <h4 className="font-headline-md text-headline-md mb-3">Global Resilience</h4>
                    <p className="font-body-lg text-white/60 max-w-md">Exporting Ugandan-led circular models as the global gold standard for sustainable emerging markets.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Marquee */}
      <section className="py-24 bg-surface-container-low border-y border-outline-variant overflow-hidden">
        <div className="flex whitespace-nowrap gap-16 items-center">
          <div className="flex gap-16 items-center animate-[marquee_40s_linear_infinite]">
            <span className="font-headline-md text-headline-md text-primary/30 uppercase tracking-tighter">Ministry of Environment</span>
            <span className="w-2 h-2 rounded-full bg-primary/30"></span>
            <span className="font-headline-md text-headline-md text-primary/30 uppercase tracking-tighter">Uganda Circular Network</span>
            <span className="w-2 h-2 rounded-full bg-primary/30"></span>
            <span className="font-headline-md text-headline-md text-primary/30 uppercase tracking-tighter">Green Tech Hub</span>
            <span className="w-2 h-2 rounded-full bg-primary/30"></span>
            <span className="font-headline-md text-headline-md text-primary/30 uppercase tracking-tighter">Bio-Precision Labs</span>
            <span className="w-2 h-2 rounded-full bg-primary/30"></span>
            <span className="font-headline-md text-headline-md text-primary/30 uppercase tracking-tighter">Global Impact Alliance</span>
            <span className="w-2 h-2 rounded-full bg-primary/30"></span>
          </div>
          {/* Duplicate for seamless loop */}
          <div className="flex gap-16 items-center animate-[marquee_40s_linear_infinite]">
            <span className="font-headline-md text-headline-md text-primary/30 uppercase tracking-tighter">Ministry of Environment</span>
            <span className="w-2 h-2 rounded-full bg-primary/30"></span>
            <span className="font-headline-md text-headline-md text-primary/30 uppercase tracking-tighter">Uganda Circular Network</span>
            <span className="w-2 h-2 rounded-full bg-primary/30"></span>
            <span className="font-headline-md text-headline-md text-primary/30 uppercase tracking-tighter">Green Tech Hub</span>
            <span className="w-2 h-2 rounded-full bg-primary/30"></span>
            <span className="font-headline-md text-headline-md text-primary/30 uppercase tracking-tighter">Bio-Precision Labs</span>
            <span className="w-2 h-2 rounded-full bg-primary/30"></span>
            <span className="font-headline-md text-headline-md text-primary/30 uppercase tracking-tighter">Global Impact Alliance</span>
            <span className="w-2 h-2 rounded-full bg-primary/30"></span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-section-padding px-8">
        <div className="max-w-7xl mx-auto rounded-3xl bg-secondary-fixed p-16 md:p-32 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="font-display-lg text-display-lg text-on-secondary-fixed mb-8">Ready to join the <br/><span className="italic">revolution?</span></h2>
            <p className="font-body-lg text-body-lg text-on-secondary-fixed-variant mb-12 max-w-2xl mx-auto">
              Whether you are a manufacturer, policymaker, or impact investor, your role is vital in Uganda's transition to a circular future.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <button className="bg-primary-container text-white px-12 py-5 rounded-full font-label-sm text-label-sm uppercase hover:scale-105 transition-transform duration-200">
                Partner With Us
              </button>
              <button className="border border-on-secondary-fixed/20 text-on-secondary-fixed px-12 py-5 rounded-full font-label-sm text-label-sm uppercase hover:bg-on-secondary-fixed hover:text-white transition-all">
                Download Report
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


