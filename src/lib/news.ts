import { useEffect, useState } from 'react';
import { sanityClient } from '../sanity/lib/client';
import { NEWS_ARTICLES_QUERY, type NewsArticle } from '../sanity/lib/queries';
import { fallbackNewsArticles } from '../data/news';

const WORDS_PER_MINUTE = 220;

export function formatArticleDate(value: string) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) return '';

  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

/** Rough word count over Portable Text spans, used when no manual estimate is set. */
export function estimateReadingMinutes(article: NewsArticle) {
  if (article.readingMinutes) return article.readingMinutes;

  const words = (article.body || []).reduce((total, block) => {
    const children = (block as { children?: Array<{ text?: string }> }).children;
    if (!Array.isArray(children)) return total;

    return total + children.reduce((count, child) => count + (child.text?.trim().split(/\s+/).length || 0), 0);
  }, 0);

  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

/** Newest article flagged as featured, otherwise simply the newest one. */
export function pickFeaturedArticle(articles: NewsArticle[]) {
  return articles.find((article) => article.featured) || articles[0];
}

/**
 * Loads published articles from Sanity, falling back to the local design
 * content until `newsArticle` documents exist in the dataset.
 */
export function useNewsArticles() {
  const [articles, setArticles] = useState<NewsArticle[]>(fallbackNewsArticles);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadNews() {
      try {
        const cmsArticles = await sanityClient.fetch<NewsArticle[]>(NEWS_ARTICLES_QUERY);

        if (!isMounted) return;

        if (cmsArticles?.length > 0) {
          setArticles(cmsArticles);
        }
      } catch (error) {
        console.warn('Using local News fallback content because Sanity content could not be loaded.', error);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }

    loadNews();

    return () => {
      isMounted = false;
    };
  }, []);

  return { articles, isLoading };
}
