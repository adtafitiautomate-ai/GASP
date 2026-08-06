import { Link } from 'react-router-dom';
import { ArrowUpRight, Clock } from 'lucide-react';
import type { NewsArticle } from '../../sanity/lib/queries';
import { estimateReadingMinutes, formatArticleDate } from '../../lib/news';

export default function NewsCard({ article }: { article: NewsArticle }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-outline-variant bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(0,23,14,0.12)]">
      <Link to={`/news/${article.slug}`} className="flex h-full flex-col">
        <div className="aspect-[16/10] overflow-hidden bg-surface-variant">
          <img
            src={article.coverImage}
            alt={article.coverAlt || article.title}
            loading="lazy"
            className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
          />
        </div>

        <div className="flex flex-1 flex-col p-6">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="inline-flex rounded-full bg-primary-fixed px-3 py-1 font-label-sm uppercase text-on-primary-fixed-variant">
              {article.category}
            </span>
            <span className="font-label-sm uppercase text-on-surface-variant">{formatArticleDate(article.publishedAt)}</span>
          </div>

          <h3 className="mb-3 font-headline-md text-xl leading-snug text-primary transition-colors group-hover:text-secondary">
            {article.title}
          </h3>

          <p className="mb-6 line-clamp-3 font-body-md text-on-surface-variant">{article.excerpt}</p>

          <div className="mt-auto flex items-center justify-between border-t border-outline-variant pt-5">
            <span className="flex items-center gap-2 font-label-sm uppercase text-on-surface-variant">
              <Clock className="h-4 w-4" />
              {estimateReadingMinutes(article)} min read
            </span>
            <span className="flex items-center gap-1 font-label-sm uppercase text-secondary">
              Read
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
