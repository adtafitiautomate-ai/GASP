import { Link } from 'react-router-dom';
import { Newspaper } from 'lucide-react';
import NewsCard from '../news/NewsCard';
import { useNewsArticles } from '../../lib/news';

/** Three most recent updates, shown as a teaser on the home page. */
export default function LatestNews() {
  const { articles } = useNewsArticles();
  const latest = articles.slice(0, 3);

  if (latest.length === 0) return null;

  return (
    <section className="py-section-padding bg-surface-container">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="font-label-sm text-on-secondary-fixed-variant uppercase tracking-widest">News &amp; Updates</span>
            <h2 className="font-headline-xl text-headline-xl text-primary mt-4">The latest from the scheme.</h2>
          </div>
          <Link
            to="/news"
            className="inline-flex items-center gap-2 rounded-full bg-primary-container px-7 py-4 font-label-sm uppercase text-white transition-all hover:-translate-y-0.5 hover:bg-primary"
          >
            <Newspaper className="h-5 w-5" />
            All Updates
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {latest.map((article) => (
            <NewsCard key={article._id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
