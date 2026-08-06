import { useEffect, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Calendar, Clock, User } from 'lucide-react';
import ArticleBody from '../components/news/ArticleBody';
import NewsCard from '../components/news/NewsCard';
import { estimateReadingMinutes, formatArticleDate, useNewsArticles } from '../lib/news';
import { absoluteUrl, setLink, setMeta, setStructuredData, SITE_URL } from '../lib/seo';
import type { NewsArticle as NewsArticleType } from '../sanity/lib/queries';

function useArticleSeo(article: NewsArticleType | undefined, slug: string | undefined) {
  useEffect(() => {
    if (!article) return;

    const canonical = absoluteUrl(`/news/${article.slug}`);
    const image = absoluteUrl(article.coverImage || '/images/portfolio feature image.jpg');

    document.title = `${article.title} | GASP Uganda`;

    setMeta('name', 'description', article.excerpt);
    setMeta('name', 'keywords', `GASP Uganda, ${article.category}, EPR Uganda, circular economy Uganda`);
    setMeta('name', 'robots', 'index, follow, max-image-preview:large');
    setMeta('name', 'theme-color', '#063f2d');

    setLink('canonical', canonical);

    setMeta('property', 'og:type', 'article');
    setMeta('property', 'og:site_name', 'GASP Uganda');
    setMeta('property', 'og:title', article.title);
    setMeta('property', 'og:description', article.excerpt);
    setMeta('property', 'og:url', canonical);
    setMeta('property', 'og:image', image);
    setMeta('property', 'og:locale', 'en_UG');

    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', article.title);
    setMeta('name', 'twitter:description', article.excerpt);
    setMeta('name', 'twitter:image', image);

    setStructuredData({
      '@context': 'https://schema.org',
      '@type': 'NewsArticle',
      headline: article.title,
      description: article.excerpt,
      image: [image],
      datePublished: article.publishedAt,
      articleSection: article.category,
      mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
      author: article.author?.name
        ? { '@type': 'Person', name: article.author.name }
        : { '@type': 'Organization', name: 'GASP Uganda' },
      publisher: {
        '@type': 'Organization',
        name: 'GASP Uganda',
        url: SITE_URL,
        logo: { '@type': 'ImageObject', url: absoluteUrl('/images/logo.png') },
      },
      inLanguage: 'en-UG',
    });
  }, [article, slug]);
}

export default function NewsArticle() {
  const { slug } = useParams<{ slug: string }>();
  const { articles, isLoading } = useNewsArticles();

  const article = useMemo(() => articles.find((item) => item.slug === slug), [articles, slug]);

  const related = useMemo(
    () => articles.filter((item) => item.slug !== slug).slice(0, 3),
    [articles, slug],
  );

  useArticleSeo(article, slug);

  if (!article) {
    return (
      <div className="pt-20">
        <section className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-start justify-center px-8 py-32">
          {isLoading ? (
            <p className="font-headline-md text-2xl text-primary">Loading update…</p>
          ) : (
            <>
              <span className="mb-6 inline-flex rounded-full bg-primary-fixed px-4 py-2 font-label-sm uppercase text-on-primary-fixed-variant">
                Not found
              </span>
              <h1 className="mb-6 font-headline-xl text-4xl text-primary md:text-5xl">
                We could not find that update.
              </h1>
              <p className="mb-10 font-body-lg text-lg leading-8 text-on-surface-variant">
                It may have been renamed or removed. Browse the full archive to find what you were looking for.
              </p>
              <Link
                to="/news"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-black text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-secondary"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to news
              </Link>
            </>
          )}
        </section>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Article header */}
      <section className="relative overflow-hidden px-8 pb-16 pt-40">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-container/10 to-background" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <Link
            to="/news"
            className="mb-10 inline-flex items-center gap-2 rounded-full border border-outline-variant bg-white px-5 py-3 font-label-sm uppercase text-primary shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            All updates
          </Link>

          <span className="mb-6 inline-flex rounded-full bg-primary-fixed px-4 py-2 font-label-sm uppercase text-on-primary-fixed-variant">
            {article.category}
          </span>

          <h1 className="mb-8 font-display-lg text-4xl leading-[1.05] text-primary md:text-6xl">{article.title}</h1>

          <p className="mb-10 max-w-3xl font-body-lg text-xl leading-9 text-on-surface-variant">{article.excerpt}</p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-outline-variant pt-7 font-label-sm uppercase text-on-surface-variant">
            {article.author?.name && (
              <span className="flex items-center gap-2">
                <User className="h-4 w-4 text-secondary" />
                {article.author.name}
                {article.author.role && <span className="text-on-surface-variant/70">· {article.author.role}</span>}
              </span>
            )}
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-secondary" />
              {formatArticleDate(article.publishedAt)}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-secondary" />
              {estimateReadingMinutes(article)} min read
            </span>
          </div>
        </div>
      </section>

      {/* Cover image */}
      {article.coverImage && (
        <section className="mx-auto max-w-6xl px-8 pb-16">
          <div className="aspect-[16/9] overflow-hidden rounded-[2rem] border border-outline-variant bg-surface-variant shadow-sm">
            <img
              src={article.coverImage}
              alt={article.coverAlt || article.title}
              className="h-full w-full object-cover"
            />
          </div>
        </section>
      )}

      {/* Body */}
      <section className="px-8 pb-28">
        <div className="mx-auto max-w-3xl">
          <ArticleBody value={article.body} />

          <div className="mt-16 flex flex-col gap-6 rounded-[2rem] border border-outline-variant bg-surface-container p-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <span className="font-label-sm uppercase text-on-surface-variant">Published by</span>
              <p className="mt-2 font-headline-md text-xl text-primary">{article.author?.name || 'GASP Uganda'}</p>
              {article.author?.role && (
                <p className="mt-1 font-body-md text-on-surface-variant">{article.author.role}</p>
              )}
            </div>
            <Link
              to="/contact"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-black text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-secondary"
            >
              Get in touch
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-surface-container py-28">
          <div className="mx-auto max-w-7xl px-8">
            <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <span className="mb-4 inline-flex rounded-full bg-primary-container px-4 py-2 font-label-sm uppercase text-on-primary-container">
                  Keep reading
                </span>
                <h2 className="font-headline-xl text-4xl text-primary md:text-5xl">More updates.</h2>
              </div>
              <Link
                to="/news"
                className="inline-flex w-fit items-center gap-2 rounded-full border border-outline-variant bg-white px-6 py-3 font-label-sm uppercase text-primary shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary"
              >
                View archive
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <NewsCard key={item._id} article={item} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
