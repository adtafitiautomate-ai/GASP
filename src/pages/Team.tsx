import { ArrowUpRight, BriefcaseBusiness, UsersRound } from 'lucide-react';

const teamMembers = [
  {
    name: 'Gyaviira Morgan Bonna',
    role: 'CEO',
    image: '/images/team/Gyaviira Morgan Bonna- CEO.jpeg',
  },
  {
    name: 'Tony Gadhoke',
    role: 'Board Member',
    image: '/images/team/Tony Gadhoke- Board Member.jpeg',
  },
  {
    name: 'Kirunda Magoola',
    role: 'Board Member',
    image: '/images/team/Kirunda Magoola-Board Member.jpeg',
  },
  {
    name: 'Sheila Sabune',
    role: 'Board Member',
    image: '/images/team/Sheila Sabune-Board Member.jpeg',
  },
  {
    name: 'Joram Bamwine',
    role: 'Board Member',
    image: '/images/team/Joram Bamwine- Bord Member.jpeg',
  },
];

export default function Team() {
  const [leader, ...boardMembers] = teamMembers;

  return (
    <div className="overflow-x-hidden bg-background text-on-background">
      <header className="relative overflow-hidden bg-primary-container px-8 pb-24 pt-32 text-white">
        <div className="absolute inset-0 opacity-25" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #adcebc 1px, transparent 0)', backgroundSize: '36px 36px' }} />
        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-14 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <span className="mb-8 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 font-label-sm uppercase text-on-primary-container backdrop-blur-xl">
              GASP Leadership
            </span>
            <h1 className="mb-8 max-w-4xl font-display-lg text-5xl leading-none text-white md:text-7xl">
              The people steering Uganda's circular production platform.
            </h1>
            <p className="max-w-2xl font-body-lg text-lg leading-8 text-on-primary-container">
              A focused leadership team connecting governance, producers, recyclers, and communities around transparent EPR action.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="glass-panel rounded-[2rem] p-5">
              <div className="aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-primary">
                <img src={leader.image} alt={leader.name} className="h-full w-full object-cover" />
              </div>
              <div className="mt-5 flex items-end justify-between gap-4">
                <div>
                  <p className="font-label-sm uppercase text-on-primary-container">Executive Lead</p>
                  <h2 className="mt-1 font-headline-md text-2xl text-white">{leader.name}</h2>
                  <p className="mt-1 font-body-md text-on-primary-container">{leader.role}</p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-primary">
                  <BriefcaseBusiness className="h-5 w-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-8 py-24">
        <section className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <span className="mb-4 inline-flex rounded-full bg-primary-fixed px-4 py-2 font-label-sm uppercase text-on-primary-fixed-variant">
              Board of Directors
            </span>
            <h2 className="font-headline-xl text-4xl text-primary md:text-5xl">Governance with field perspective.</h2>
          </div>
          <div className="flex items-center gap-3 text-on-surface-variant">
            <UsersRound className="h-5 w-5 text-secondary" />
            <span className="font-body-md">The people driving our mission forward.</span>
          </div>
        </section>

        <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {boardMembers.map((member) => (
            <article key={member.name} className="group overflow-hidden rounded-[1.5rem] border border-outline-variant bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(0,23,14,0.12)]">
              <div className="aspect-[4/5] overflow-hidden bg-surface-variant">
                <img src={member.image} alt={member.name} className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0" />
              </div>
              <div className="p-6">
                <div className="mb-5 flex items-center justify-between">
                  <span className="rounded-full bg-surface-container px-3 py-1 font-label-sm uppercase text-on-surface-variant">{member.role}</span>
                  <ArrowUpRight className="h-5 w-5 text-outline transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-secondary" />
                </div>
                <h3 className="font-headline-md text-2xl text-primary">{member.name}</h3>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}

