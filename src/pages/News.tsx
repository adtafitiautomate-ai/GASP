import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, Clock, Newspaper } from 'lucide-react';
import NewsCard from '../components/news/NewsCard';
import { estimateReadingMinutes, formatArticleDate, pickFeaturedArticle, useNewsArticles } from '../lib/news';

const ARTICLES_PER_PAGE = 6;
const ALL_CATEGORIES = 'All Updates';

export default function News() {
  const { articles } = useNewsArticles();
  const [activeCategory, setActiveCategory] = useState(ALL_CATEGORIES);
  const [currentPage, setCurrentPage] = useState(1);

  const featured = useMemo(() => pickFeaturedArticle(articles), [articles]);

  const categories = useMemo(
    () => [ALL_CATEGORIES, ...Array.from(new Set(articles.map((article) => article.category).filter(Boolean)))],
    [articles],
  );

  // The featured article gets its own panel above the grid, so keep it out of the list.
  const listArticles = useMemo(
    () => articles.filter((article) => article._id !== featured?._id),
    [articles, featured],
  );

  const filteredArticles = useMemo(
    () =>
      activeCategory === ALL_CATEGORIES
        ? listArticles
        : listArticles.filter((article) => article.category === activeCategory),
    [listArticles, activeCategory],
  );

  const pageCount = Math.max(1, Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE));
  const visiblePage = Math.min(currentPage, pageCount);
  const pageStart = (visiblePage - 1) * ARTICLES_PER_PAGE;
  const paginatedArticles = filteredArticles.slice(pageStart, pageStart + ARTICLES_PER_PAGE);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden px-8 pb-24 pt-40">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-container/10 to-background" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-4xl">
              <span className="mb-6 inline-flex rounded-full bg-primary-fixed px-4 py-2 font-label-sm uppercase text-on-primary-fixed-variant">
                News &amp; Updates
              </span>
              <h1 className="mb-8 font-display-lg text-5xl leading-none text-primary md:text-7xl">
                What we are building, measuring and learning.
              </h1>
              <p className="max-w-2xl font-body-lg text-lg leading-8 text-on-surface-variant">
                Announcements, field reports and research notes from the GASP secretariat and our partner network.
              </p>
            </div>
            <div className="flex items-center gap-4 rounded-full border border-outline-variant bg-white px-5 py-3 text-primary shadow-sm">
              <Newspaper className="h-5 w-5 text-secondary" />
              <span className="font-label-sm uppercase">{articles.length} updates</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured article */}
      {featured && (
        <section className="mx-auto max-w-7xl px-8 pb-24">
          <article className="group overflow-hidden rounded-[2rem] border border-outline-variant bg-white shadow-sm transition-all duration-300 hover:shadow-[0_30px_90px_rgba(0,23,14,0.14)]">
            <Link to={`/news/${featured.slug}`} className="grid grid-cols-1 lg:grid-cols-12">
              <div className="aspect-[16/10] overflow-hidden bg-surface-variant lg:col-span-7 lg:aspect-auto">
                <img
                  src={featured.coverImage}
                  alt={featured.coverAlt || featured.title}
                  className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
              </div>

              <div className="flex flex-col justify-center p-8 lg:col-span-5 lg:p-12">
                <div className="mb-6 flex flex-wrap items-center gap-3">
                  <span className="inline-flex rounded-full bg-primary-container px-4 py-2 font-label-sm uppercase text-on-primary-container">
                    Featured
                  </span>
                  <span className="inline-flex rounded-full bg-primary-fixed px-3 py-1 font-label-sm uppercase text-on-primary-fixed-variant">
                    {featured.category}
                  </span>
                </div>

                <h2 className="mb-5 font-headline-xl text-3xl leading-tight text-primary md:text-4xl">
                  {featured.title}
                </h2>

                <p className="mb-8 font-body-lg text-lg leading-8 text-on-surface-variant">{featured.excerpt}</p>

                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-label-sm uppercase text-on-surface-variant">
                  <span>{formatArticleDate(featured.publishedAt)}</span>
                  <span className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {estimateReadingMinutes(featured)} min read
                  </span>
                </div>

                <span className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-black text-white shadow-sm transition-all group-hover:-translate-y-0.5 group-hover:bg-secondary">
                  Read the full update
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          </article>
        </section>
      )}

      {/* Article grid */}
      <section className="bg-surface-container py-28">
        <div className="mx-auto max-w-7xl px-8">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="mb-4 inline-flex rounded-full bg-primary-container px-4 py-2 font-label-sm uppercase text-on-primary-container">
                Archive
              </span>
              <h2 className="font-headline-xl text-4xl text-primary md:text-5xl">All updates.</h2>
            </div>
            <p className="max-w-md font-body-md text-on-surface-variant">
              Filter by the kind of update you are looking for, from scheme announcements to data and field work.
            </p>
          </div>

          <div className="mb-10 flex gap-3 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => {
                  setActiveCategory(category);
                  setCurrentPage(1);
                }}
                className={`shrink-0 rounded-full border px-5 py-3 font-label-sm uppercase transition-all ${
                  activeCategory === category
                    ? 'border-primary bg-primary text-white shadow-sm'
                    : 'border-outline-variant bg-white text-on-surface-variant hover:border-primary hover:text-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {paginatedArticles.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {paginatedArticles.map((article) => (
                <NewsCard key={article._id} article={article} />
              ))}
            </div>
          ) : (
            <div className="rounded-[2rem] border border-dashed border-outline-variant bg-white px-8 py-20 text-center">
              <p className="font-headline-md text-xl text-primary">No updates in this category yet.</p>
              <p className="mt-3 font-body-md text-on-surface-variant">Check back soon, or browse all updates.</p>
            </div>
          )}

          {pageCount > 1 && (
            <nav
              className="mt-12 flex flex-col items-center justify-between gap-5 rounded-[2rem] border border-outline-variant bg-white px-5 py-4 shadow-sm sm:flex-row"
              aria-label="News article pages"
            >
              <p className="font-label-sm uppercase text-on-surface-variant">
                Page {visiblePage} of {pageCount}
              </p>

              <div className="flex flex-wrap items-center justify-center gap-2">
                <button
                  type="button"
                  onClick={() => setCurrentPage(Math.max(1, visiblePage - 1))}
                  disabled={visiblePage === 1}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-outline-variant text-primary transition-all hover:border-primary hover:bg-primary hover:text-white disabled:pointer-events-none disabled:opacity-35"
                  aria-label="Previous article page"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                {Array.from({ length: pageCount }, (_, index) => index + 1).map((page) => (
                  <button
                    key={page}
                    type="button"
                    onClick={() => setCurrentPage(page)}
                    className={`h-11 min-w-11 rounded-full px-4 font-label-sm transition-all ${
                      visiblePage === page
                        ? 'bg-primary text-white shadow-sm'
                        : 'border border-outline-variant bg-white text-primary hover:border-primary hover:bg-primary-fixed'
                    }`}
                    aria-label={`Go to article page ${page}`}
                    aria-current={visiblePage === page ? 'page' : undefined}
                  >
                    {page}
                  </button>
                ))}

                <button
                  type="button"
                  onClick={() => setCurrentPage(Math.min(pageCount, visiblePage + 1))}
                  disabled={visiblePage === pageCount}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-outline-variant text-primary transition-all hover:border-primary hover:bg-primary hover:text-white disabled:pointer-events-none disabled:opacity-35"
                  aria-label="Next article page"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </nav>
          )}
        </div>
      </section>

      {/* Stay in the loop */}
      <section className="relative overflow-hidden bg-primary-container py-28 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-secondary blur-[120px]" />
          <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-primary-fixed-dim blur-[120px]" />
        </div>
        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-8 lg:grid-cols-2">
          <div>
            <span className="mb-6 inline-flex rounded-full bg-white/10 px-4 py-2 font-label-sm uppercase text-white/80">
              Stay in the loop
            </span>
            <h2 className="mb-6 font-headline-xl text-4xl md:text-5xl">Get scheme updates as they are published.</h2>
            <p className="max-w-xl font-body-lg text-on-primary-container">
              Quarterly progress notes, mass-flow reporting and partnership announcements go out to members and
              subscribers before they appear anywhere else.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 lg:justify-end">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-black text-primary shadow-sm transition-all hover:-translate-y-0.5 hover:bg-primary-fixed"
            >
              Subscribe to updates
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/partnerships"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-4 text-sm font-black text-white transition-all hover:-translate-y-0.5 hover:bg-white/10"
            >
              Partner with us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
