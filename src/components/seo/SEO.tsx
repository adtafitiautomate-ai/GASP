import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  absoluteUrl,
  getPageSeo,
  isArticleRoute,
  setLink,
  setMeta,
  setStructuredData,
  SITE_URL,
} from '../../lib/seo';

export default function SEO() {
  const location = useLocation();

  useEffect(() => {
    // Single news articles set their own title, description and Article schema.
    if (isArticleRoute(location.pathname)) return;

    const isStudio = location.pathname.startsWith('/studio');
    const seo = getPageSeo(location.pathname);
    const canonical = absoluteUrl(seo.path);
    const image = absoluteUrl(seo.image || '/images/portfolio feature image.jpg');
    const robots = isStudio ? 'noindex, nofollow' : 'index, follow, max-image-preview:large';

    document.title = isStudio ? 'GASP Studio' : seo.title;

    setMeta('name', 'description', seo.description);
    setMeta('name', 'keywords', seo.keywords?.join(', ') || 'GASP Uganda, EPR Uganda, circular economy Uganda');
    setMeta('name', 'robots', robots);
    setMeta('name', 'theme-color', '#063f2d');

    setLink('canonical', canonical);

    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:site_name', 'GASP Uganda');
    setMeta('property', 'og:title', seo.title);
    setMeta('property', 'og:description', seo.description);
    setMeta('property', 'og:url', canonical);
    setMeta('property', 'og:image', image);
    setMeta('property', 'og:locale', 'en_UG');

    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', seo.title);
    setMeta('name', 'twitter:description', seo.description);
    setMeta('name', 'twitter:image', image);

    if (!isStudio) {
      setStructuredData({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Organization',
            '@id': `${SITE_URL}/#organization`,
            name: 'GASP Uganda',
            alternateName: 'Green Action for Sustainable Production',
            url: SITE_URL,
            logo: absoluteUrl('/images/logo.png'),
            email: 'info@gasp.co.ug',
            telephone: '+256753444777',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Plot 90 Kanjokya Street, Kanjokya House',
              addressLocality: 'Kampala',
              addressCountry: 'UG',
            },
            sameAs: [
              'https://www.linkedin.com/company/green-action-for-sustainable-production-gasp/',
              'https://x.com/GASP_Uganda',
              'https://instagram.com/GASP_Uganda',
              'https://www.facebook.com/profile.php?id=61564996892668',
            ],
          },
          {
            '@type': 'WebSite',
            '@id': `${SITE_URL}/#website`,
            url: SITE_URL,
            name: 'GASP Uganda',
            publisher: { '@id': `${SITE_URL}/#organization` },
            inLanguage: 'en-UG',
          },
          {
            '@type': 'WebPage',
            '@id': `${canonical}#webpage`,
            url: canonical,
            name: seo.title,
            description: seo.description,
            isPartOf: { '@id': `${SITE_URL}/#website` },
            about: { '@id': `${SITE_URL}/#organization` },
            primaryImageOfPage: {
              '@type': 'ImageObject',
              url: image,
            },
            inLanguage: 'en-UG',
          },
        ],
      });
    }
  }, [location.pathname]);

  return null;
}
