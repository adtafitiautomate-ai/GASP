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
