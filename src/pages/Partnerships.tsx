import LogoMarquee from '../components/LogoMarquee';
import { RefreshCw, Building2, Handshake, Globe2, Users, Lightbulb, Users2 } from 'lucide-react';

const partnershipCards = [
  {
    title: 'National & Local Government',
    label: '01 / Governance',
    image: '/images/man standing on car with uganda flag.jpg',
    icon: Building2,
    tone: 'bg-surface-container-low',
    text: 'Engage to partner with private sector voluntary in EPR development and national EPR legislation, regulation, compliance, and implementation support.',
  },
  {
    title: 'Business Membership Organisations (BMO)',
    label: '02 / Alliances',
    image: '/images/portfolio feature image.jpg',
    icon: Handshake,
    tone: 'bg-surface-container',
    text: 'Support BMO members as Uganda shifts to recycling and circular economy models through GASP membership, alignment, and shared opportunities.',
  },
  {
    title: 'International Partners',
    label: '03 / Global',
    image: '/images/portfolio feature image.jpg',
    icon: Globe2,
    tone: 'bg-tertiary-fixed',
    text: 'Create channels for global best practice exchange, grant funding, specialist resources, and technology access.',
  },
  {
    title: 'Consumer',
    label: '04 / End-user',
    image: '/images/community_outreach.jpg',
    icon: Users,
    tone: 'bg-primary-fixed',
    text: 'Run education and behavior-change campaigns that help consumers understand recycling, circular production, and sustainable brand choices.',
  },
  {
    title: 'Business Community',
    label: '05 / Innovation',
    image: '/images/circular economy.jpg',
    icon: Lightbulb,
    tone: 'bg-surface-container-high',
    text: 'Support innovators developing and commercialising products made from post-consumer waste materials.',
  },
  {
    title: 'General Public',
    label: '06 / Society',
    image: '/images/Gulu marathon kick-off.jpg',
    icon: Users2,
    tone: 'bg-secondary-container',
    text: 'Increase public awareness about how Uganda can improve environmental outcomes through recycling and circular economy action.',
  },
];

export default function Partnerships() {
  return (
    <div className="pt-20">
      <section className="mx-auto max-w-7xl px-8 pb-24 pt-28">
        <div className="grid grid-cols-1 items-end gap-12 md:grid-cols-12">
          <div className="md:col-span-8">
            <span className="mb-8 inline-block rounded-full bg-primary-fixed px-4 py-2 font-label-sm uppercase text-on-primary-fixed-variant">Partnership Ecosystem</span>
            <h1 className="mb-8 font-display-lg text-5xl leading-none text-primary md:text-7xl">Global action for circular production.</h1>
            <p className="max-w-2xl font-body-lg text-lg leading-8 text-on-surface-variant">
              We bridge the gap between industrial ambition and ecological reality. By uniting diverse stakeholders, GASP facilitates a closed-loop system where waste is eliminated and regeneration is the standard.
            </p>
          </div>
          <div className="flex justify-end pb-4 md:col-span-4">
            <div className="flex h-24 w-24 items-center justify-center rounded-full border border-outline animate-[spin_8s_linear_infinite]">
              <RefreshCw className="h-10 w-10 text-primary" />
            </div>
          </div>
        </div>
      </section>

      <LogoMarquee eyebrow="Current Partners" />

      <section className="mx-auto max-w-7xl px-8 py-28">
        <div className="mb-16">
          <span className="mb-4 block font-label-sm uppercase text-outline">Our Framework</span>
          <h2 className="mb-6 font-headline-xl text-4xl text-primary md:text-5xl">Approach to partnerships and engagement.</h2>
          <div className="h-1 w-20 rounded-full bg-primary" />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {partnershipCards.map((card) => {
            const Icon = card.icon;
            return (
              <article key={card.title} className={`${card.tone} group rounded-2xl border border-outline-variant p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(0,23,14,0.1)]`}>
                <img alt={card.title} className="mb-6 h-48 w-full rounded-xl object-cover" src={card.image} />
                <div className="mb-6 flex items-center gap-4">
                  <div className="rounded-xl bg-primary-container p-3 text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="font-label-sm uppercase text-outline">{card.label}</span>
                </div>
                <h3 className="mb-4 font-headline-md text-2xl text-primary">{card.title}</h3>
                <p className="font-body-md leading-relaxed text-on-surface-variant">{card.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden bg-primary-container py-32">
        <div className="relative z-10 mx-auto max-w-7xl px-8">
          <div className="max-w-3xl">
            <h2 className="mb-8 font-headline-xl text-5xl text-white">Architect the next era of production.</h2>
            <p className="mb-12 font-body-lg text-lg leading-8 text-white/70">Join a network of leaders committed to transforming industrial systems through practical, accountable circular production.</p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <button className="rounded-full bg-secondary px-10 py-5 font-bold text-white transition-transform duration-200 hover:scale-105">Apply for Partnership</button>
              <button className="rounded-full border border-white/30 px-10 py-5 font-bold text-white transition-colors hover:bg-white/10">Download Partnership Kit</button>
            </div>
          </div>
        </div>
      </section>

      <LogoMarquee eyebrow="Trusted by Industry Leaders" />
    </div>
  );
}

