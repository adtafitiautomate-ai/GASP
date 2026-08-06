import { PortableText, type PortableTextComponents } from '@portabletext/react';
import type { PortableTextBlock } from '@portabletext/types';
import { Link } from 'react-router-dom';

/**
 * Portable Text renderer wired to the GASP type scale and colour tokens so that
 * article bodies authored in Sanity read like the rest of the site.
 */
const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mb-6 font-body-lg text-lg leading-8 text-on-surface-variant">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="mb-5 mt-14 font-headline-xl text-3xl leading-tight text-primary md:text-4xl">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="mb-4 mt-10 font-headline-md text-2xl leading-snug text-primary">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="mb-3 mt-8 font-headline-md text-xl leading-snug text-primary">{children}</h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-10 rounded-3xl border border-outline-variant bg-surface-container px-8 py-7">
        <p className="font-headline-md text-xl leading-relaxed text-primary md:text-2xl">{children}</p>
      </blockquote>
    ),
  },

  list: {
    bullet: ({ children }) => <ul className="mb-8 space-y-3">{children}</ul>,
    number: ({ children }) => <ol className="mb-8 space-y-3">{children}</ol>,
  },

  listItem: {
    bullet: ({ children }) => (
      <li className="relative pl-8 font-body-lg text-lg leading-8 text-on-surface-variant">
        <span className="absolute left-0 top-3.5 h-2 w-2 rounded-full bg-secondary" aria-hidden="true" />
        {children}
      </li>
    ),
    number: ({ children, index }) => (
      <li className="relative pl-11 font-body-lg text-lg leading-8 text-on-surface-variant">
        <span
          className="absolute left-0 top-1 flex h-7 w-7 items-center justify-center rounded-full bg-primary-fixed text-sm font-black text-on-primary-fixed-variant"
          aria-hidden="true"
        >
          {index + 1}
        </span>
        {children}
      </li>
    ),
  },

  marks: {
    strong: ({ children }) => <strong className="font-bold text-primary">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    underline: ({ children }) => <span className="underline underline-offset-4">{children}</span>,
    'strike-through': ({ children }) => <span className="line-through">{children}</span>,
    code: ({ children }) => (
      <code className="rounded bg-surface-container-high px-1.5 py-0.5 text-[0.9em] text-primary">{children}</code>
    ),
    link: ({ children, value }) => {
      const href = String(value?.href ?? '');
      const isInternal = href.startsWith('/');
      const className =
        'font-semibold text-secondary underline decoration-secondary/40 underline-offset-4 transition-colors hover:text-primary hover:decoration-primary';

      if (isInternal) {
        return (
          <Link to={href} className={className}>
            {children}
          </Link>
        );
      }

      return (
        <a href={href} target="_blank" rel="noreferrer" className={className}>
          {children}
        </a>
      );
    },
  },

  types: {
    image: ({ value }) => {
      const url = value?.asset?.url;
      if (!url) return null;

      return (
        <figure className="my-12">
          <div className="overflow-hidden rounded-3xl border border-outline-variant bg-surface-variant">
            <img src={url} alt={value.alt || ''} className="h-full w-full object-cover" loading="lazy" />
          </div>
          {value.caption && (
            <figcaption className="mt-4 font-label-sm uppercase text-on-surface-variant">{value.caption}</figcaption>
          )}
        </figure>
      );
    },
  },

  hardBreak: () => <br />,
};

export default function ArticleBody({ value }: { value: PortableTextBlock[] }) {
  if (!value?.length) return null;

  return (
    <div className="[&>*:first-child]:mt-0">
      <PortableText value={value} components={components} />
    </div>
  );
}
