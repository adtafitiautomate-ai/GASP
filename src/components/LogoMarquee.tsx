const logos = [
  {
    name: 'CCBU',
    image: '/images/Partner%20Logos/CCBU%20logo-1.png',
  },
  {
    name: 'Crown Beverages',
    image: '/images/Partner%20Logos/Crown%20Beverages%20Logo.png',
  },
  {
    name: 'HARISS International Ltd',
    image: '/images/Partner%20Logos/HARISS%20International%20Ltd%20Logo%201.png',
  },
  {
    name: 'Mukwano',
    image: '/images/Partner%20Logos/mukwano%20logo.png',
  },
  {
    name: 'UBL',
    image: '/images/Partner%20Logos/UBL.png',
  },
];

const repeatedLogos = Array.from({ length: 3 }, () => logos).flat();

export default function LogoMarquee({ eyebrow = 'Partner Network' }: { eyebrow?: string }) {
  return (
    <section className="overflow-hidden border-y border-outline-variant bg-white py-10">
      <div className="mx-auto mb-8 flex max-w-7xl items-center justify-between gap-6 px-8">
        <span className="font-label-sm uppercase text-outline">{eyebrow}</span>
        <span className="hidden h-px flex-1 bg-outline-variant md:block" />
      </div>
      <div className="relative flex overflow-hidden whitespace-nowrap [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <div className="flex min-w-max animate-[marquee_34s_linear_infinite] items-center gap-8 pr-8">
          {repeatedLogos.map((logo, index) => (
            <div key={`${logo.name}-${index}`} className="flex h-24 w-56 items-center justify-center rounded-2xl border border-outline-variant bg-surface px-8 shadow-sm">
              <img src={logo.image} alt={`${logo.name} logo`} className="max-h-14 w-full object-contain" />
            </div>
          ))}
        </div>
        <div aria-hidden="true" className="flex min-w-max animate-[marquee_34s_linear_infinite] items-center gap-8 pr-8">
          {repeatedLogos.map((logo, index) => (
            <div key={`${logo.name}-copy-${index}`} className="flex h-24 w-56 items-center justify-center rounded-2xl border border-outline-variant bg-surface px-8 shadow-sm">
              <img src={logo.image} alt="" className="max-h-14 w-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
