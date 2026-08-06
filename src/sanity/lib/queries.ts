import type {PortableTextBlock} from '@portabletext/types'

export type EventImage = {
  _id: string
  title: string
  event: string
  image: string
  alt?: string
}

export type EventVideo = {
  _id: string
  title: string
  event: string
  youtubeId: string
  thumbnail: string
  alt?: string
}

export const EVENT_IMAGES_QUERY = `*[_type == "eventMedia"] | order(coalesce(orderRank, 0) asc, _createdAt desc) {
  _id,
  title,
  "event": eventName,
  "image": coalesce(image.asset->url, fallbackImagePath),
  "alt": coalesce(image.alt, title)
}`

export const EVENT_VIDEOS_QUERY = `*[_type == "eventVideo"] | order(coalesce(orderRank, 0) asc, _createdAt desc) {
  _id,
  title,
  "event": eventName,
  youtubeId,
  "thumbnail": coalesce(thumbnail.asset->url, fallbackThumbnailPath),
  "alt": coalesce(thumbnail.alt, title)
}`

export type NewsAuthor = {
  name: string
  role?: string
  image?: string
}

export type NewsArticle = {
  _id: string
  title: string
  slug: string
  category: string
  excerpt: string
  coverImage: string
  coverAlt?: string
  publishedAt: string
  readingMinutes?: number
  featured?: boolean
  author?: NewsAuthor
  body: PortableTextBlock[]
}

/** Fields shared by the news list and the single-article view. */
const NEWS_ARTICLE_FIELDS = `
  _id,
  title,
  "slug": slug.current,
  category,
  excerpt,
  "coverImage": coalesce(coverImage.asset->url, fallbackCoverPath),
  "coverAlt": coalesce(coverImage.alt, title),
  "publishedAt": coalesce(publishedAt, _createdAt),
  readingMinutes,
  featured,
  "author": {
    "name": author.name,
    "role": author.role,
    "image": author.image.asset->url
  },
  body
`

export const NEWS_ARTICLES_QUERY = `*[_type == "newsArticle" && defined(slug.current)]
  | order(coalesce(publishedAt, _createdAt) desc) {${NEWS_ARTICLE_FIELDS}}`

export const NEWS_ARTICLE_BY_SLUG_QUERY = `*[_type == "newsArticle" && slug.current == $slug][0] {${NEWS_ARTICLE_FIELDS}}`

/** Recent articles excluding the one currently being read. */
export const RELATED_NEWS_QUERY = `*[_type == "newsArticle" && defined(slug.current) && slug.current != $slug]
  | order(coalesce(publishedAt, _createdAt) desc)[0...3] {${NEWS_ARTICLE_FIELDS}}`
