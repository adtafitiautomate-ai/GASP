import { Play, Grid, Filter } from 'lucide-react';

export default function GalleryEvents() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary-container/10 to-background"></div>
        </div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-end justify-between gap-12">
            <div className="lg:w-2/3">
              <h1 className="font-display-lg text-display-lg text-primary mb-8">
                Capturing the Circular Movement
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                Through the lens of environmental urgency and technological precision, we document the evolution of Ugandan recycling and community-led circular economy initiatives.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="text-right">
                <p className="font-headline-md text-headline-md text-primary-container">12.4k</p>
                <p className="font-label-sm text-label-sm uppercase text-outline">Images Captured</p>
              </div>
              <div className="w-px h-12 bg-outline-variant"></div>
              <div className="text-right">
                <p className="font-headline-md text-headline-md text-primary-container">85+</p>
                <p className="font-label-sm text-label-sm uppercase text-outline">Workshops Held</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Loop */}
      <div className="w-full bg-primary-container py-6 overflow-hidden flex whitespace-nowrap mb-32">
        <div className="flex animate-[marquee_30s_linear_infinite] gap-12 text-on-primary-container font-headline-md uppercase tracking-widest opacity-80">
          <span>Circular Economy</span>
          <span>•</span>
          <span>Uganda Regeneration</span>
          <span>•</span>
          <span>Impact Stories</span>
          <span>•</span>
          <span>Sustainable Future</span>
          <span>•</span>
          <span>Circular Economy</span>
          <span>•</span>
          <span>Uganda Regeneration</span>
        </div>
      </div>

      {/* Section 1: Photo Gallery (Masonry Layout) */}
      <section className="max-w-7xl mx-auto px-8 mb-40">
        <div className="flex justify-between items-center mb-16">
          <div>
            <span className="bg-surface-container-highest px-4 py-1 rounded-full font-label-sm text-primary mb-4 inline-block">THE GALLERY</span>
            <h2 className="font-headline-xl text-headline-xl text-primary">Visualizing Resilience</h2>
          </div>
          <div className="flex gap-4">
            <button className="w-12 h-12 rounded-full border border-outline flex items-center justify-center hover:bg-primary-container hover:text-white transition-all">
              <Grid className="w-5 h-5" />
            </button>
            <button className="w-12 h-12 rounded-full border border-outline flex items-center justify-center hover:bg-primary-container hover:text-white transition-all">
              <Filter className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
          {/* 1. Tall Item */}
          <div className="lg:row-span-2 group relative overflow-hidden rounded-xl border border-outline-variant">
            <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110" alt="Sorting Hub A-12" src="/images/elephant with plastic bottles recycle.jpg"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
              <span className="text-white font-label-sm mb-2">INDUSTRIAL PRECISION</span>
              <h3 className="text-white font-headline-md text-xl">Sorting Hub A-12</h3>
            </div>
          </div>
          
          {/* 2. Standard Item */}
          <div className="group relative overflow-hidden rounded-xl border border-outline-variant">
            <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110" alt="Material Innovation" src="/images/TRJ_8792.jpg"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
              <span className="text-white font-label-sm mb-2">WORKSHOPS</span>
              <h3 className="text-white font-headline-md text-xl">Material Innovation</h3>
            </div>
          </div>
          
          {/* 3. Wide Item */}
          <div className="md:col-span-2 group relative overflow-hidden rounded-xl border border-outline-variant">
            <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110" alt="Circular Strategy Round" src="/images/portfolio feature image.jpg"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
              <span className="text-white font-label-sm mb-2">COMMUNITY</span>
              <h3 className="text-white font-headline-md text-xl">Circular Strategy Round</h3>
            </div>
          </div>
          
          {/* 4. Standard Item */}
          <div className="group relative overflow-hidden rounded-xl border border-outline-variant">
            <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110" alt="Riverbed Recovery" src="/images/Gulu marathon kick-off.jpg"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
              <span className="text-white font-label-sm mb-2">ACTION</span>
              <h3 className="text-white font-headline-md text-xl">Riverbed Recovery</h3>
            </div>
          </div>
          
          {/* 5. Tall Item */}
          <div className="lg:row-span-2 group relative overflow-hidden rounded-xl border border-outline-variant">
            <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110" alt="Efficiency Tracking" src="/images/TRJ_8793.jpg"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
              <span className="text-white font-label-sm mb-2">DATA</span>
              <h3 className="text-white font-headline-md text-xl">Efficiency Tracking</h3>
            </div>
          </div>
          
          {/* 6. Standard Item */}
          <div className="group relative overflow-hidden rounded-xl border border-outline-variant">
            <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110" alt="Regeneration Voices" src="/images/man standing on car with uganda flag.jpg"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
              <span className="text-white font-label-sm mb-2">LEADERSHIP</span>
              <h3 className="text-white font-headline-md text-xl">Regeneration Voices</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Media & Videos */}
      <section className="bg-surface-container py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <span className="bg-primary-container text-on-primary-container px-4 py-1 rounded-full font-label-sm mb-4 inline-block">FILM & MEDIA</span>
              <h2 className="font-headline-xl text-headline-xl text-primary">Documenting Change</h2>
            </div>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">
              Watch our latest documentaries and impact stories detailing the transition to sustainable production systems across East Africa.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Video Card 1 */}
            <div className="group cursor-pointer">
              <div className="relative aspect-video rounded-xl overflow-hidden mb-6 border border-outline-variant">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="The Kampala Loop" src="/images/elephant with plastic bottles recycle.jpg"/>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-secondary/90 text-on-secondary rounded-full flex items-center justify-center backdrop-blur-md group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 fill-current" />
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-headline-md text-2xl text-primary mb-2">The Kampala Loop: A Documentary</h4>
                  <p className="font-body-md text-on-surface-variant">Exploring the intricate web of formal and informal recycling economies in Uganda's capital.</p>
                </div>
                <span className="font-label-sm text-outline border border-outline px-3 py-1 rounded-full">24:15</span>
              </div>
            </div>
            
            {/* Video Card 2 */}
            <div className="group cursor-pointer">
              <div className="relative aspect-video rounded-xl overflow-hidden mb-6 border border-outline-variant">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Bio-Tech & The Circular Link" src="/images/community_outreach.jpg"/>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-secondary/90 text-on-secondary rounded-full flex items-center justify-center backdrop-blur-md group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 fill-current" />
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-headline-md text-2xl text-primary mb-2">Bio-Tech & The Circular Link</h4>
                  <p className="font-body-md text-on-surface-variant">A technical look at how we utilize biological systems to regenerate industrial materials.</p>
                </div>
                <span className="font-label-sm text-outline border border-outline px-3 py-1 rounded-full">12:08</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats CTA */}
      <section className="max-w-7xl mx-auto px-8 my-40">
        <div className="bg-primary-container rounded-3xl p-16 flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10 lg:w-1/2">
            <h2 className="font-display-lg text-4xl text-on-primary-container mb-6">Experience the action firsthand.</h2>
            <p className="text-on-primary-container/80 text-body-lg mb-8">Join our next circular workshop or community event and become part of the movement redefining production.</p>
            <button className="bg-secondary text-on-secondary px-10 py-4 rounded-full font-headline-md hover:scale-105 active:scale-95 transition-all flex items-center gap-4 text-sm uppercase">
              Register for Events
            </button>
          </div>
          <div className="grid grid-cols-2 gap-8 relative z-10 w-full lg:w-auto">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl">
              <h3 className="text-on-primary-container font-display-lg text-5xl mb-2">12</h3>
              <p className="text-on-primary-container/60 font-label-sm uppercase tracking-widest">Upcoming Events</p>
            </div>
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl">
              <h3 className="text-on-primary-container font-display-lg text-5xl mb-2">45k</h3>
              <p className="text-on-primary-container/60 font-label-sm uppercase tracking-widest">Active Members</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
