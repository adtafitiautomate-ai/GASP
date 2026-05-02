import { RefreshCw, Building2, Handshake, Globe2, Users, Lightbulb, Users2 } from 'lucide-react';

export default function Partnerships() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="pt-28 pb-32 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-8">
            <span className="font-label-sm text-label-sm text-on-primary-container bg-primary-fixed px-4 py-1.5 rounded-full inline-block mb-8">PARTNERSHIP ECOSYSTEM</span>
            <h1 className="font-display-lg text-display-lg text-primary leading-tight mb-8">Global Action for Circular Production.</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">We bridge the gap between industrial ambition and ecological reality. By uniting diverse stakeholders, GASP facilitates a closed-loop system where waste is eliminated and regeneration is the standard.</p>
          </div>
          <div className="md:col-span-4 flex justify-end pb-4">
            <div className="w-24 h-24 rounded-full border border-outline flex items-center justify-center animate-[spin_8s_linear_infinite]">
              <RefreshCw className="text-primary w-10 h-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Approach to Partnerships & Engagement Section */}
      <section className="px-8 max-w-7xl mx-auto pb-40">
        <div className="mb-16">
          <span className="font-label-sm text-label-sm text-outline uppercase tracking-widest block mb-4">OUR FRAMEWORK</span>
          <h2 className="font-display-lg text-headline-xl text-primary mb-6">Approach to Partnerships & Engagement</h2>
          <div className="w-20 h-1 bg-primary rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 1. National & Local Government */}
          <div className="bg-surface-container-low rounded-xl p-8 border border-outline-variant hover:border-primary transition-all duration-300 group">
            <img alt="Government and sustainability" className="w-full h-48 object-cover rounded-lg mb-6" src="/images/man standing on car with uganda flag.jpg"/>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-primary-container p-3 rounded-lg">
                <Building2 className="text-white w-6 h-6" />
              </div>
              <span className="font-label-sm text-outline">01 / GOVERNANCE</span>
            </div>
            <h3 className="font-headline-md text-2xl text-primary mb-4">National & Local Government</h3>
            <p className="font-body-md text-on-surface-variant leading-relaxed">Engage to partner with private sector voluntary in EPR development & for national EPR legislation & regulation. Engage to support stakeholders at all levels to ensure GASP members are ahead of regulation, compliance.</p>
          </div>

          {/* 2. Business Membership Organisations */}
          <div className="bg-surface-container rounded-xl p-8 border border-outline-variant hover:border-secondary transition-all duration-300 group">
            <img alt="Business alliances" className="w-full h-48 object-cover rounded-lg mb-6" src="/images/TRJ_8793.jpg"/>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-secondary p-3 rounded-lg">
                <Handshake className="text-white w-6 h-6" />
              </div>
              <span className="font-label-sm text-outline">02 / ALLIANCES</span>
            </div>
            <h3 className="font-headline-md text-2xl text-primary mb-4">Business Membership Organisations (BMO)</h3>
            <p className="font-body-md text-on-surface-variant leading-relaxed">Engage to provide value to BMO members through GASP membership to align with PRO and EPR voluntary & mandatory regulations and understand & engage in opportunities as Uganda shifts to the Recycling and Circular Economy.</p>
          </div>

          {/* 3. International Partners */}
          <div className="bg-tertiary-fixed rounded-xl p-8 border border-outline-variant hover:border-tertiary transition-all duration-300 group">
            <img alt="International collaboration" className="w-full h-48 object-cover rounded-lg mb-6" src="/images/portfolio feature image.jpg"/>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-tertiary p-3 rounded-lg">
                <Globe2 className="text-white w-6 h-6" />
              </div>
              <span className="font-label-sm text-outline">03 / GLOBAL</span>
            </div>
            <h3 className="font-headline-md text-2xl text-primary mb-4">International Partners</h3>
            <p className="font-body-md text-on-surface-variant leading-relaxed">Engage to partner for cross-sharing global best practices & grant funding to subsidise specialist & technical resources & technology access.</p>
          </div>

          {/* 4. Consumer */}
          <div className="bg-primary-fixed rounded-xl p-8 border border-outline-variant hover:border-primary transition-all duration-300 group">
            <img alt="Sustainable consumer behavior" className="w-full h-48 object-cover rounded-lg mb-6" src="/images/community_outreach.jpg"/>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-primary p-3 rounded-lg">
                <Users className="text-white w-6 h-6" />
              </div>
              <span className="font-label-sm text-on-primary-fixed-variant">04 / END-USER</span>
            </div>
            <h3 className="font-headline-md text-2xl text-primary mb-4">Consumer</h3>
            <p className="font-body-md text-on-primary-fixed-variant leading-relaxed">Consumer means the end user of a product. GASP will provide to consumers through media platforms education & awareness of the need to shift from a Linear to a Recycling & Circular Economy, including awareness of sustainable brands & supply chain partners, and invitation to participate in environment impact activities. GASP will run behaviour change campaigns.</p>
          </div>

          {/* 5. Business Community */}
          <div className="bg-surface-container-high rounded-xl p-8 border border-outline-variant hover:border-on-secondary-container transition-all duration-300 group">
            <img alt="Circular economy innovation" className="w-full h-48 object-cover rounded-lg mb-6" src="/images/TRJ_8792.jpg"/>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-on-secondary-container p-3 rounded-lg">
                <Lightbulb className="text-white w-6 h-6" />
              </div>
              <span className="font-label-sm text-outline">05 / INNOVATION</span>
            </div>
            <h3 className="font-headline-md text-2xl text-primary mb-4">Business Community</h3>
            <p className="font-body-md text-on-surface-variant leading-relaxed">This community includes innovators in developing & commercialising products made from post-consumer waste materials. GASP aims to support this community through the formation of a business development support mechanism.</p>
          </div>

          {/* 6. General Public */}
          <div className="bg-secondary-container rounded-xl p-8 border border-outline-variant hover:border-secondary transition-all duration-300 group">
            <img alt="Public sustainability awareness" className="w-full h-48 object-cover rounded-lg mb-6" src="/images/Gulu marathon kick-off.jpg"/>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-secondary-fixed-dim p-3 rounded-lg">
                <Users2 className="text-on-secondary-fixed w-6 h-6" />
              </div>
              <span className="font-label-sm text-on-secondary-fixed-variant">06 / SOCIETY</span>
            </div>
            <h3 className="font-headline-md text-2xl text-primary mb-4">General Public</h3>
            <p className="font-body-md text-on-secondary-fixed-variant leading-relaxed">GASP will increase awareness & education about how Uganda's environment can be improved by adopting Recycling & Circular Economy Models, and showcase individuals, companies and regulators who are making this happen in Uganda.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-container py-32 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="max-w-3xl">
            <h2 className="font-headline-xl text-headline-xl text-white mb-8">Architect the next era of production.</h2>
            <p className="font-body-lg text-body-lg text-white/70 mb-12">We are currently accepting applications for the 2024 Global Partnership Cohort. Join a network of leaders committed to transforming industrial systems.</p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="bg-secondary text-white px-10 py-5 rounded-full font-['Space_Grotesk'] font-bold text-lg hover:scale-105 transition-transform duration-200">
                  Apply for Partnership
              </button>
              <button className="border border-white/30 text-white px-10 py-5 rounded-full font-['Space_Grotesk'] font-bold text-lg hover:bg-white/10 transition-colors">
                  Download Partnership Kit
              </button>
            </div>
          </div>
        </div>
        {/* Abstract circular motif background */}
        <div className="absolute -right-64 -bottom-64 w-[800px] h-[800px] border-[60px] border-emerald-500/10 rounded-full"></div>
        <div className="absolute -right-32 -bottom-32 w-[400px] h-[400px] border-[20px] border-emerald-500/5 rounded-full"></div>
      </section>

      {/* Partners Marquee */}
      <section className="py-24 border-y border-outline-variant">
        <div className="max-w-7xl mx-auto px-8 mb-12">
          <span className="font-label-sm text-label-sm text-outline uppercase tracking-widest">TRUSTED BY INDUSTRY LEADERS</span>
        </div>
        <div className="flex overflow-hidden whitespace-nowrap">
          <div className="flex animate-[marquee_30s_linear_infinite] space-x-12 items-center text-primary/30 font-headline-md italic py-4">
            <span className="mx-12">BIO-LUMINA</span>
            <span className="mx-12">TERRA-FAB</span>
            <span className="mx-12">ORBITAL TEXTILES</span>
            <span className="mx-12">NOVA-THREADS</span>
            <span className="mx-12">CIRCULUS</span>
            {/* Duplicates */}
            <span className="mx-12">BIO-LUMINA</span>
            <span className="mx-12">TERRA-FAB</span>
            <span className="mx-12">ORBITAL TEXTILES</span>
            <span className="mx-12">NOVA-THREADS</span>
            <span className="mx-12">CIRCULUS</span>
          </div>
        </div>
      </section>
    </div>
  );
}
