import { RefreshCw, CheckCircle, Store, QrCode, Package } from 'lucide-react';

export default function ValueChain() {
  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="max-w-[1440px] mx-auto px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-end">
          <div className="md:col-span-8">
            <span className="inline-block py-1 px-4 mb-6 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm uppercase tracking-widest">Global Ecosystem</span>
            <h1 className="font-display-lg text-display-lg text-primary-container mb-8">The Regenerative Value Chain.</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">A closed-loop framework connecting ten critical stakeholder categories to drive accountability, industrial precision, and biological restoration across the global production landscape.</p>
          </div>
          <div className="md:col-span-4 hidden md:flex justify-end">
            <div className="h-48 w-48 rounded-full border border-outline/20 flex items-center justify-center animate-[spin_8s_linear_infinite]">
              <RefreshCw className="text-primary-container w-16 h-16" />
            </div>
          </div>
        </div>
      </section>

      {/* Marquee / Loop (Social Proof) */}
      <div className="w-full bg-primary-container py-6 overflow-hidden mb-24 whitespace-nowrap">
        <div className="inline-block animate-[marquee_30s_linear_infinite]">
          <span className="font-headline-md text-headline-md text-primary-fixed-dim uppercase mx-12">Closed Loop</span>
          <span className="font-headline-md text-headline-md text-primary-fixed-dim uppercase mx-12">Zero Waste</span>
          <span className="font-headline-md text-headline-md text-primary-fixed-dim uppercase mx-12">Regenerative Design</span>
          <span className="font-headline-md text-headline-md text-primary-fixed-dim uppercase mx-12">Accountability</span>
          <span className="font-headline-md text-headline-md text-primary-fixed-dim uppercase mx-12">Circular Economy</span>
          {/* Duplicates */}
          <span className="font-headline-md text-headline-md text-primary-fixed-dim uppercase mx-12">Closed Loop</span>
          <span className="font-headline-md text-headline-md text-primary-fixed-dim uppercase mx-12">Zero Waste</span>
          <span className="font-headline-md text-headline-md text-primary-fixed-dim uppercase mx-12">Regenerative Design</span>
        </div>
      </div>

      {/* Stakeholder Grid */}
      <section className="max-w-[1440px] mx-auto px-8 space-y-32">
        {/* 01. Raw Material Suppliers */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
          <div className="md:col-span-5 order-2 md:order-1">
            <div className="mb-4 flex items-center gap-4">
              <span className="font-display-lg text-5xl text-primary/10">01</span>
              <span className="px-3 py-1 bg-surface-container text-on-surface-variant rounded-full font-label-sm">ANNUAL VOLUME</span>
            </div>
            <h2 className="font-headline-xl text-headline-xl text-primary-container mb-6">Raw Material Suppliers</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">Providers of primary natural inputs or recycled feedstock that form the foundation of the production cycle.</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-on-primary-container mt-1" />
                <span className="font-body-md text-body-md text-on-surface">Strategic supply chain resilience and ESG compliance auditing.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-on-primary-container mt-1" />
                <span className="font-body-md text-body-md text-on-surface">Mandatory reporting of extraction metrics and biodiversity impact.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-on-primary-container mt-1" />
                <span className="font-body-md text-body-md text-on-surface">Incentives for regenerative farming and sustainable mining practices.</span>
              </li>
            </ul>
          </div>
          <div className="md:col-span-7 order-1 md:order-2">
            <div className="aspect-[16/9] w-full overflow-hidden rounded-xl border border-outline-variant">
              <img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Raw Materials" src="/images/Raw Material Suppliers.png"/>
            </div>
          </div>
        </div>

        {/* 02. Convertors */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
          <div className="md:col-span-7">
            <div className="aspect-[16/9] w-full overflow-hidden rounded-xl border border-outline-variant">
              <img className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Convertors" src="/images/Convetor.png"/>
            </div>
          </div>
          <div className="md:col-span-5 md:pl-12">
            <div className="mb-4 flex items-center gap-4">
              <span className="font-display-lg text-5xl text-primary/10">02</span>
              <span className="px-3 py-1 bg-surface-container text-on-surface-variant rounded-full font-label-sm">FIXED RATE</span>
            </div>
            <h2 className="font-headline-xl text-headline-xl text-primary-container mb-6">Convertors</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">Specialists who transform raw inputs into intermediate components or semi-finished materials.</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-on-primary-container mt-1" />
                <span className="font-body-md text-body-md text-on-surface">Optimization of energy-intensive processes via carbon offsets.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-on-primary-container mt-1" />
                <span className="font-body-md text-body-md text-on-surface">Transitioning to 100% renewable energy for transformation lines.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-on-primary-container mt-1" />
                <span className="font-body-md text-body-md text-on-surface">Data integration for real-time lifecycle assessment tracking.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bento Section for Middle Chain */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 03. Manufacturers */}
          <div className="p-8 border border-outline-variant rounded-xl bg-surface-container-low flex flex-col">
            <div className="mb-6 flex justify-between items-start">
              <span className="font-display-lg text-4xl text-primary/10">03</span>
              <span className="px-3 py-1 bg-white text-on-surface-variant rounded-full font-label-sm border border-outline-variant">ANNUAL VOLUME</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary-container mb-4">Manufacturers</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-grow">Primary producers creating final consumer goods using circular design principles.</p>
            <div className="h-40 overflow-hidden rounded-lg mb-6">
              <img className="w-full h-full object-cover" alt="Manufacturers" src="/images/Manufacturers.png"/>
            </div>
            <ul className="text-sm space-y-2 text-on-surface-variant">
              <li>• Modular design for repairability</li>
              <li>• Elimination of non-recyclable toxins</li>
              <li>• Extended producer responsibility</li>
            </ul>
          </div>

          {/* 04. Packers */}
          <div className="p-8 border border-outline-variant rounded-xl bg-surface-container-low flex flex-col">
            <div className="mb-6 flex justify-between items-start">
              <span className="font-display-lg text-4xl text-primary/10">04</span>
              <span className="px-3 py-1 bg-white text-on-surface-variant rounded-full font-label-sm border border-outline-variant">FIXED RATE</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary-container mb-4">Packers</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-grow">Entities responsible for primary and secondary packaging of finished goods.</p>
            <div className="h-40 overflow-hidden rounded-lg mb-6">
              <img className="w-full h-full object-cover" alt="Packers" src="/images/Packers.png"/>
            </div>
            <ul className="text-sm space-y-2 text-on-surface-variant">
              <li>• Zero-plastic packaging mandates</li>
              <li>• Space-efficient palletization</li>
              <li>• Biodegradable ink implementation</li>
            </ul>
          </div>

          {/* 05. Fillers */}
          <div className="p-8 border border-outline-variant rounded-xl bg-surface-container-low flex flex-col">
            <div className="mb-6 flex justify-between items-start">
              <span className="font-display-lg text-4xl text-primary/10">05</span>
              <span className="px-3 py-1 bg-white text-on-surface-variant rounded-full font-label-sm border border-outline-variant">ANNUAL VOLUME</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary-container mb-4">Fillers</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-grow">High-speed processing facilities that integrate products into containers.</p>
            <div className="h-40 overflow-hidden rounded-lg mb-6">
              <img className="w-full h-full object-cover" alt="Fillers" src="/images/Filler.png"/>
            </div>
            <ul className="text-sm space-y-2 text-on-surface-variant">
              <li>• Closed-loop water filtration systems</li>
              <li>• Spill mitigation and recovery protocols</li>
              <li>• Energy-recovery filling technology</li>
            </ul>
          </div>
        </div>

        {/* 06. Importers */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-5 order-2 md:order-1">
            <div className="mb-4 flex items-center gap-4">
              <span className="font-display-lg text-5xl text-primary/10">06</span>
              <span className="px-3 py-1 bg-surface-container text-on-surface-variant rounded-full font-label-sm">ANNUAL VOLUME</span>
            </div>
            <h2 className="font-headline-xl text-headline-xl text-primary-container mb-6">Importers</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">Managing the cross-border flow of goods while ensuring compliance with regional standards.</p>
            <div className="p-6 bg-white border border-outline-variant rounded-lg">
              <h4 className="font-bold text-[#0F2D21] mb-2">Strategic Responsibility:</h4>
              <p className="text-sm text-on-surface-variant">Importers act as the gatekeepers for circular integrity, ensuring that all incoming goods meet the rigorous GASP standard for material transparency and end-of-life recoverability.</p>
            </div>
          </div>
          <div className="md:col-span-7 order-1 md:order-2">
            <div className="aspect-video w-full overflow-hidden rounded-xl">
              <img className="w-full h-full object-cover" alt="Importers" src="/images/Importer.png"/>
            </div>
          </div>
        </div>

        {/* 07. Retail Traders */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-7">
            <div className="aspect-video w-full overflow-hidden rounded-xl">
              <img className="w-full h-full object-cover" alt="Retail Traders" src="/images/Retail Traders.png"/>
            </div>
          </div>
          <div className="md:col-span-5 md:pl-12">
            <div className="mb-4 flex items-center gap-4">
              <span className="font-display-lg text-5xl text-primary/10">07</span>
              <span className="px-3 py-1 bg-surface-container text-on-surface-variant rounded-full font-label-sm">FIXED RATE</span>
            </div>
            <h2 className="font-headline-xl text-headline-xl text-primary-container mb-6">Retail Traders</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">The final touchpoint for consumers, facilitating responsible consumption and take-back programs.</p>
            <div className="space-y-4">
              <div className="flex gap-4 items-center p-4 border-b border-outline-variant">
                <Store className="w-6 h-6 text-on-primary-container" />
                <span className="font-body-md">In-store collection points for packaging</span>
              </div>
              <div className="flex gap-4 items-center p-4 border-b border-outline-variant">
                <QrCode className="w-6 h-6 text-on-primary-container" />
                <span className="font-body-md">Consumer education via digital labeling</span>
              </div>
              <div className="flex gap-4 items-center p-4 border-b border-outline-variant">
                <Package className="w-6 h-6 text-on-primary-container" />
                <span className="font-body-md">Zero-waste shelf management</span>
              </div>
            </div>
          </div>
        </div>

        {/* Waste Management Section (8, 9, 10) */}
        <div className="bg-primary-container rounded-[2rem] p-12 md:p-24 text-white">
          <div className="max-w-3xl mb-16">
            <h2 className="font-display-lg text-5xl mb-6">The Closing Loop: Waste Stewardship</h2>
            <p className="font-body-lg text-on-primary-container">Recovering value from the post-consumer stream to fuel the next cycle of production.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* 08. Waste Collectors */}
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span className="font-display-lg text-4xl text-primary-fixed-dim">08</span>
                <span className="text-xs uppercase tracking-widest text-on-primary-container">FIXED RATE</span>
              </div>
              <div className="h-64 rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                <img className="w-full h-full object-cover" alt="Waste Collectors" src="/images/Waste Collectors.png"/>
              </div>
              <h3 className="font-headline-md text-2xl">Waste Collectors</h3>
              <p className="text-on-primary-container text-sm leading-relaxed">Infrastructure for the systematic gathering of post-consumer materials from urban and industrial centers.</p>
            </div>
            {/* 09. Waste Sorters */}
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span className="font-display-lg text-4xl text-primary-fixed-dim">09</span>
                <span className="text-xs uppercase tracking-widest text-on-primary-container">ANNUAL VOLUME</span>
              </div>
              <div className="h-64 rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                <img className="w-full h-full object-cover" alt="Waste Sorters" src="/images/Waste Sorters.png"/>
              </div>
              <h3 className="font-headline-md text-2xl">Waste Sorters</h3>
              <p className="text-on-primary-container text-sm leading-relaxed">High-tech facilities utilizing AI and optical sorting to purify material streams for high-grade recycling.</p>
            </div>
            {/* 10. Waste Recyclers */}
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span className="font-display-lg text-4xl text-primary-fixed-dim">10</span>
                <span className="text-xs uppercase tracking-widest text-on-primary-container">ANNUAL VOLUME</span>
              </div>
              <div className="h-64 rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                <img className="w-full h-full object-cover" alt="Waste Recyclers" src="/images/Waste Recyclers.png"/>
              </div>
              <h3 className="font-headline-md text-2xl">Waste Recyclers</h3>
              <p className="text-on-primary-container text-sm leading-relaxed">Processing centers that convert sorted waste back into industry-ready raw materials, completing the circle.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-[1440px] mx-auto px-8 my-32 text-center">
        <div className="py-24 border border-outline-variant rounded-3xl" style={{ background: "radial-gradient(circle at top right, #c9ead8 0%, transparent 70%)" }}>
          <h2 className="font-display-lg text-headline-xl text-primary-container mb-8">Ready to join the value chain?</h2>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <button className="bg-primary text-white px-12 py-4 rounded-full font-headline-md text-lg hover:scale-105 transition-transform">Download Standards</button>
            <button className="bg-secondary text-on-secondary px-12 py-4 rounded-full font-headline-md text-lg hover:scale-105 transition-transform">Inquire Membership</button>
          </div>
        </div>
      </section>
    </div>
  );
}


