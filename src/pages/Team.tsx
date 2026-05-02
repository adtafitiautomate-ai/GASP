import { Users, Recycle, Wallet, Megaphone, Globe } from 'lucide-react';

const Team = () => {
  return (
    <div className="bg-background text-on-background font-body-md overflow-x-hidden pt-20">
      {/* Hero Section */}
      <header className="relative pt-40 pb-32 bg-primary-container overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #769686 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1 rounded-full bg-on-primary-container/10 text-on-primary-container font-label-sm uppercase mb-8">Our Collective Intelligence</span>
            <h1 className="font-display-lg text-4xl md:text-6xl text-emerald-50 mb-12">
              Teamwork is the ability to work together toward a common vision.
            </h1>
            <div className="w-24 h-1 bg-secondary mb-8"></div>
            <p className="font-body-lg text-lg text-on-primary-container max-w-2xl">
              Our leadership represents the intersection of industrial precision and biological regeneration, driving the circular economy forward through expert governance and shared purpose.
            </p>
          </div>
        </div>
      </header>

      {/* Marquee Logic (Sustainability Narrative) */}
      <section className="py-12 bg-surface-container border-y border-outline-variant/30 overflow-hidden">
        <div className="flex whitespace-nowrap gap-16 animate-[marquee_30s_linear_infinite]">
          <span className="font-headline-md text-emerald-900/10 uppercase tracking-widest flex items-center gap-4">
            Circular Economy <span className="w-3 h-3 rounded-full bg-emerald-500/20"></span>
            Regenerative Future <span className="w-3 h-3 rounded-full bg-emerald-500/20"></span>
            Social Enterprise <span className="w-3 h-3 rounded-full bg-emerald-500/20"></span>
            Mass Flow Management <span className="w-3 h-3 rounded-full bg-emerald-500/20"></span>
            EPR Models <span className="w-3 h-3 rounded-full bg-emerald-500/20"></span>
            Circular Economy <span className="w-3 h-3 rounded-full bg-emerald-500/20"></span>
            Regenerative Future <span className="w-3 h-3 rounded-full bg-emerald-500/20"></span>
            Social Enterprise <span className="w-3 h-3 rounded-full bg-emerald-500/20"></span>
            Mass Flow Management
          </span>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-8 py-24">
        {/* Board Team Section */}
        <section className="mb-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="font-headline-xl text-3xl md:text-5xl text-primary mb-4">Board of Directors</h2>
              <p className="font-body-md text-on-surface-variant max-w-lg">The governing body steering GASP toward high-impact sustainable development and ethical oversight.</p>
            </div>
            <div className="h-px bg-outline-variant flex-grow ml-12 hidden md:block mb-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {/* Tony Gadhoke */}
            <div className="group border border-outline-variant p-6 hover:bg-surface-container-low transition-all duration-300">
              <div className="aspect-square bg-surface-variant mb-6 relative overflow-hidden">
                <img 
                  src="/images/TRJ_8794.jpg" 
                  alt="Tony Gadhoke" 
                  className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500" 
                />
              </div>
              <h3 className="font-headline-md text-xl text-primary mb-1">Tony Gadhoke</h3>
              <p className="font-label-sm text-secondary uppercase tracking-widest text-xs">Board Chair</p>
            </div>
            
            {/* Kirunda Magoola */}
            <div className="group border border-outline-variant p-6 hover:bg-surface-container-low transition-all duration-300">
              <div className="aspect-square bg-surface-variant mb-6 relative overflow-hidden">
                <img 
                  src="/images/TRJ_8795.jpg" 
                  alt="Kirunda Magoola" 
                  className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500" 
                />
              </div>
              <h3 className="font-headline-md text-xl text-primary mb-1">Kirunda Magoola</h3>
              <p className="font-label-sm text-secondary uppercase tracking-widest text-xs">Board Vice Chair</p>
            </div>
            
            {/* Mahdi Mshaimesh */}
            <div className="group border border-outline-variant p-6 hover:bg-surface-container-low transition-all duration-300">
              <div className="aspect-square bg-surface-variant mb-6 relative overflow-hidden">
                <img 
                  src="/images/TRJ_8796.jpg" 
                  alt="Mahdi Mshaimesh" 
                  className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500" 
                />
              </div>
              <h3 className="font-headline-md text-xl text-primary mb-1">Mahdi Mshaimesh</h3>
              <p className="font-label-sm text-secondary uppercase tracking-widest text-xs">Board Member</p>
            </div>
            
            {/* Joram Bamwiine */}
            <div className="group border border-outline-variant p-6 hover:bg-surface-container-low transition-all duration-300">
              <div className="aspect-square bg-surface-variant mb-6 relative overflow-hidden">
                <img 
                  src="/images/TRJ_8799.jpg" 
                  alt="Joram Bamwiine" 
                  className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500" 
                />
              </div>
              <h3 className="font-headline-md text-xl text-primary mb-1">Joram Bamwiine</h3>
              <p className="font-label-sm text-secondary uppercase tracking-widest text-xs">Board Member</p>
            </div>
            
            {/* Suleiman Ngondi */}
            <div className="group border border-outline-variant p-6 hover:bg-surface-container-low transition-all duration-300">
              <div className="aspect-square bg-surface-variant mb-6 relative overflow-hidden">
                <img 
                  src="/images/TRJ_8800.jpg" 
                  alt="Suleiman Ngondi" 
                  className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500" 
                />
              </div>
              <h3 className="font-headline-md text-xl text-primary mb-1">Suleiman Ngondi</h3>
              <p className="font-label-sm text-secondary uppercase tracking-widest text-xs">Board Member</p>
            </div>
          </div>
        </section>

        {/* Bento Grid for Subcommittees */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Membership Committee */}
          <div className="md:col-span-4 bg-surface-container-low p-10 border border-outline-variant flex flex-col justify-between group">
            <div>
              <Users className="w-10 h-10 text-emerald-800 mb-8" />
              <h2 className="font-headline-md text-2xl text-primary mb-6">Membership Committee</h2>
              <ul className="space-y-4">
                <li className="flex items-center justify-between border-b border-outline-variant/30 pb-2">
                  <span className="font-body-md font-bold text-on-surface">Ali Karmali</span>
                  <span className="font-label-sm text-on-surface-variant text-xs">Lead</span>
                </li>
                <li className="flex items-center justify-between border-b border-outline-variant/30 pb-2">
                  <span className="font-body-md font-bold text-on-surface">Brenda Kobutungi</span>
                  <span className="font-label-sm text-on-surface-variant text-xs">Member</span>
                </li>
              </ul>
            </div>
            <div className="mt-12">
              <p className="font-label-sm text-secondary uppercase tracking-widest text-xs">Strategic Growth</p>
            </div>
          </div>

          {/* Recycling Subcommittee */}
          <div className="md:col-span-8 bg-primary-container p-10 relative overflow-hidden group">
            <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4">
              <Recycle className="w-[300px] h-[300px] text-white" />
            </div>
            <div className="relative z-10">
              <h2 className="font-headline-md text-2xl text-emerald-50 mb-8">Recycling Subcommittee</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                <div className="bg-white/5 backdrop-blur-sm p-6 border border-emerald-100/10">
                  <h4 className="font-body-md font-bold text-emerald-50">Samuel Kangave</h4>
                  <p className="font-label-sm text-on-primary-container uppercase mt-2 text-xs">Operations</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-6 border border-emerald-100/10">
                  <h4 className="font-body-md font-bold text-emerald-50">Isaac Nsibambi</h4>
                  <p className="font-label-sm text-on-primary-container uppercase mt-2 text-xs">Infrastructure</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-6 border border-emerald-100/10">
                  <h4 className="font-body-md font-bold text-emerald-50">Ali Karmali</h4>
                  <p className="font-label-sm text-on-primary-container uppercase mt-2 text-xs">Specialist</p>
                </div>
              </div>
              <div className="mt-12 max-w-md">
                <p className="font-body-md text-on-primary-container">Managing technical implementation of circularity loops and industrial processing standards across the network.</p>
              </div>
            </div>
          </div>

          {/* Admin & Finance */}
          <div className="md:col-span-7 bg-surface-container-highest p-10 border border-outline-variant flex flex-col justify-between">
            <div>
              <h2 className="font-headline-md text-2xl text-primary mb-8">Admin & Finance Subcommittee</h2>
              <div className="flex flex-wrap gap-4">
                <div className="px-6 py-4 bg-background border border-outline-variant">
                  <p className="font-body-md font-bold">Madhav Dhawal</p>
                </div>
                <div className="px-6 py-4 bg-background border border-outline-variant">
                  <p className="font-body-md font-bold">Steven Emorut</p>
                </div>
                <div className="px-6 py-4 bg-background border border-outline-variant">
                  <p className="font-body-md font-bold">Edgar Mugenyi</p>
                </div>
              </div>
            </div>
            <div className="mt-12 flex items-center gap-4">
              <Wallet className="w-6 h-6 text-secondary" />
              <p className="font-label-sm text-secondary uppercase tracking-widest text-xs">Financial Stewardship & Accountability</p>
            </div>
          </div>

          {/* Communications */}
          <div className="md:col-span-5 bg-secondary-container p-10 flex flex-col justify-between border border-outline-variant">
            <div>
              <h2 className="font-headline-md text-2xl text-on-secondary-container mb-8">Communications</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white shrink-0">
                    <Megaphone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-body-md font-bold text-on-secondary-container">Pearl Nimusiima</h4>
                    <p className="font-label-sm opacity-70 text-xs">Internal Relations</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white shrink-0">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-body-md font-bold text-on-secondary-container">Jemimah Akatekit</h4>
                    <p className="font-label-sm opacity-70 text-xs">Public Engagement</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <p className="font-body-md text-on-secondary-container/80 italic">Curating the global voice of regenerative production.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Team;
