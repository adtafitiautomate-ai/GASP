export const SITE_URL = (import.meta.env.VITE_SITE_URL || 'https://gasp.co.ug').replace(/\/$/, '');

export type PageSeo = {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
};

export const defaultSeo: PageSeo = {
  title: 'GASP Uganda | Circular Economy and EPR Systems',
  description:
    'GASP Uganda builds transparent extended producer responsibility systems, circular value chains, recycling partnerships, and sustainable production models across Uganda.',
  path: '/',
  image: '/images/portfolio feature image.jpg',
  keywords: [
    'GASP Uganda',
    'extended producer responsibility Uganda',
    'EPR Uganda',
    'circular economy Uganda',
    'sustainable production Uganda',
    'plastic recycling Uganda',
  ],
};

export const pageSeo: Record<string, PageSeo> = {
  '/': defaultSeo,
  '/mission': {
    title: 'Mission and Vision | GASP Uganda',
    description:
      'Learn how GASP Uganda advances sustainable production, circular economy collaboration, and producer responsibility for a cleaner material future.',
    path: '/mission',
    image: '/images/mission feature image.jpg',
    keywords: ['GASP mission', 'sustainable production Uganda', 'circular economy mission'],
  },
  '/impact': {
    title: 'Impact and EPR | GASP Uganda',
    description:
      'Explore GASP Uganda impact work, EPR coordination, awareness building, recovery systems, and measurable circular economy outcomes.',
    path: '/impact',
    image: '/images/impact feature pic.jpg',
    keywords: ['EPR impact Uganda', 'producer responsibility impact', 'recycling impact Uganda'],
  },
  '/value-chain': {
    title: 'Circular Value Chain | GASP Uganda',
    description:
      'See how GASP connects raw material suppliers, manufacturers, importers, traders, collectors, sorters, and recyclers in a circular value chain.',
    path: '/value-chain',
    image: '/images/the loop of prosperity.jpg',
    keywords: ['circular value chain Uganda', 'recycling value chain', 'waste collectors Uganda'],
  },
  '/partnerships': {
    title: 'Partner With GASP | Circular Economy Partnerships Uganda',
    description:
      'Partner with GASP to support EPR implementation, recycling capacity, circular economy education, and sustainable production in Uganda.',
    path: '/partnerships',
    image: '/images/community_outreach.jpg',
    keywords: ['GASP partnerships', 'EPR partnerships Uganda', 'sustainability partners Uganda'],
  },
  '/gallery': {
    title: 'Events and Gallery | GASP Uganda',
    description:
      'Browse GASP Uganda event albums, community outreach images, circular economy campaigns, and embedded impact videos.',
    path: '/gallery',
    image: '/images/Gulu marathon kick-off.jpg',
    keywords: ['GASP events', 'GASP gallery', 'circular economy events Uganda'],
  },
  '/contact': {
    title: 'Contact GASP Uganda | EPR and Sustainability Partnerships',
    description:
      'Contact GASP Uganda for circular economy partnerships, EPR collaboration, media inquiries, and sustainable production programs.',
    path: '/contact',
    image: '/images/mission feature image.jpg',
    keywords: ['contact GASP Uganda', 'EPR partnership contact', 'sustainability Uganda contact'],
  },
  '/portfolio': {
    title: 'GASP Portfolio and Roadmap | 2023-2030 Strategy',
    description:
      'Download and explore the GASP strategy roadmap and portfolio for sustainable production, EPR systems, and circular economy growth.',
    path: '/portfolio',
    image: '/images/portfolio feature image.jpg',
    keywords: ['GASP portfolio', 'GASP roadmap', 'EPR strategy Uganda'],
  },
  '/team': {
    title: 'GASP Team | Leadership and Board',
    description:
      'Meet the GASP Uganda leadership and board advancing producer responsibility, circular economy systems, and sustainable production.',
    path: '/team',
    image: '/images/team/Gyaviira Morgan Bonna- CEO.jpeg',
    keywords: ['GASP team', 'GASP CEO', 'GASP board Uganda'],
  },
  '/mass-flows': {
    title: 'Mass Flows | GASP Uganda',
    description:
      'Understand material mass flows, collection pathways, recovery systems, and data-led EPR planning with GASP Uganda.',
    path: '/mass-flows',
    image: '/images/recycling economy.jpg',
    keywords: ['mass flows Uganda', 'material recovery data', 'EPR mass balance'],
  },
  '/epr-models': {
    title: 'EPR Models | GASP Uganda',
    description:
      'Explore extended producer responsibility models for financing awareness, collection, recycling, and circular production in Uganda.',
    path: '/epr-models',
    image: '/images/circular economy.jpg',
    keywords: ['EPR models Uganda', 'extended producer responsibility', 'producer responsibility schemes'],
  },
};

export function getPageSeo(pathname: string) {
  const cleanPath = pathname === '/' ? '/' : pathname.replace(/\/$/, '');
  return pageSeo[cleanPath] || defaultSeo;
}

export function absoluteUrl(path: string) {
  if (path.startsWith('http')) return path;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}
