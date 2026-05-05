import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Grid, Play, X } from 'lucide-react';
import { sanityClient } from '../sanity/lib/client';
import { EVENT_IMAGES_QUERY, EVENT_VIDEOS_QUERY, type EventImage, type EventVideo } from '../sanity/lib/queries';

const fallbackAlbums: EventImage[] = [
  { _id: 'local-gulu-kickoff', title: 'Gulu Marathon Kick-off', event: 'Gulu Marathon', image: '/images/Gulu marathon kick-off.jpg' },
  { _id: 'local-community-outreach', title: 'Community Outreach', event: 'Community Outreach', image: '/images/community_outreach.jpg' },
  { _id: 'local-circular-strategy', title: 'Circular Strategy Round', event: 'Stakeholder Engagement', image: '/images/portfolio feature image.jpg' },
  { _id: 'local-recovery-education', title: 'Recovery Education', event: 'Awareness Campaign', image: '/images/elephant with plastic bottles recycle.jpg' },
  { _id: 'local-marathon-start', title: 'Marathon Start', event: 'Gulu Marathon', image: '/images/marathon start.jpg' },
  { _id: 'local-field-leadership', title: 'Field Leadership', event: 'Stakeholder Engagement', image: '/images/man standing on car with uganda flag.jpg' },
  { _id: 'local-sorting-moment', title: 'Sorting Moment', event: 'Awareness Campaign', image: '/images/TRJ_8792.jpg' },
  { _id: 'local-partner-activation', title: 'Partner Activation', event: 'Community Outreach', image: '/images/TRJ_8793.jpg' },
];

const fallbackVideos: EventVideo[] = [
  { _id: 'local-video-circular-story', title: 'GASP Circular Economy Story', event: 'Impact Story', youtubeId: 'dQw4w9WgXcQ', thumbnail: '/images/circular economy.jpg' },
  { _id: 'local-video-community', title: 'Community Action Highlights', event: 'Community Outreach', youtubeId: 'dQw4w9WgXcQ', thumbnail: '/images/community_outreach.jpg' },
  { _id: 'local-video-partner-network', title: 'Partner Network in Motion', event: 'Stakeholder Engagement', youtubeId: 'dQw4w9WgXcQ', thumbnail: '/images/portfolio feature image.jpg' },
];

const IMAGES_PER_PAGE = 6;

function getYouTubeId(value: string) {
  const trimmed = value.trim();

  if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) {
    return trimmed;
  }

  try {
    const url = new URL(trimmed);

    if (url.hostname.includes('youtu.be')) {
      return url.pathname.split('/').filter(Boolean)[0] || '';
    }

    if (url.searchParams.has('v')) {
      return url.searchParams.get('v') || '';
    }

    const embedMatch = url.pathname.match(/\/(embed|shorts)\/([a-zA-Z0-9_-]{11})/);
    return embedMatch?.[2] || '';
  } catch {
    return '';
  }
}

export default function GalleryEvents() {
  const [activeEvent, setActiveEvent] = useState('All Events');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedAlbum, setSelectedAlbum] = useState<EventImage | null>(null);
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);
  const [albums, setAlbums] = useState<EventImage[]>(fallbackAlbums);
  const [videos, setVideos] = useState<EventVideo[]>(fallbackVideos);

  useEffect(() => {
    let isMounted = true;

    async function loadEventsContent() {
      try {
        const [cmsAlbums, cmsVideos] = await Promise.all([
          sanityClient.fetch<EventImage[]>(EVENT_IMAGES_QUERY),
          sanityClient.fetch<EventVideo[]>(EVENT_VIDEOS_QUERY),
        ]);

        if (!isMounted) return;

        if (cmsAlbums.length > 0) {
          setAlbums(cmsAlbums.filter((album) => album.image));
        }

        if (cmsVideos.length > 0) {
          setVideos(cmsVideos.filter((video) => getYouTubeId(video.youtubeId)));
        }
      } catch (error) {
        console.warn('Using local Events fallback content because Sanity content could not be loaded.', error);
      }
    }

    loadEventsContent();

    return () => {
      isMounted = false;
    };
  }, []);

  const events = ['All Events', ...Array.from(new Set(albums.map((album) => album.event)))];
  const filteredAlbums = activeEvent === 'All Events' ? albums : albums.filter((album) => album.event === activeEvent);
  const pageCount = Math.max(1, Math.ceil(filteredAlbums.length / IMAGES_PER_PAGE));
  const visiblePage = Math.min(currentPage, pageCount);
  const pageStart = (visiblePage - 1) * IMAGES_PER_PAGE;
  const paginatedAlbums = filteredAlbums.slice(pageStart, pageStart + IMAGES_PER_PAGE);

  return (
    <div className="pt-20">
      <section className="relative overflow-hidden px-8 pb-24 pt-40">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-container/10 to-background" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-4xl">
              <span className="mb-6 inline-flex rounded-full bg-primary-fixed px-4 py-2 font-label-sm uppercase text-on-primary-fixed-variant">Event Albums</span>
              <h1 className="mb-8 font-display-lg text-5xl leading-none text-primary md:text-7xl">Capturing the circular movement.</h1>
              <p className="max-w-2xl font-body-lg text-lg leading-8 text-on-surface-variant">
                Visual insights into our work and impact
              </p>
            </div>
            <div className="flex items-center gap-4 rounded-full border border-outline-variant bg-white px-5 py-3 text-primary shadow-sm">
              <Grid className="h-5 w-5 text-secondary" />
              <span className="font-label-sm uppercase">{filteredAlbums.length} images</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-8 pb-28">
        <div className="mb-10 flex gap-3 overflow-x-auto pb-2">
          {events.map((event) => (
            <button
              key={event}
              type="button"
              onClick={() => {
                setActiveEvent(event);
                setCurrentPage(1);
              }}
              className={`shrink-0 rounded-full border px-5 py-3 font-label-sm uppercase transition-all ${
                activeEvent === event
                  ? 'border-primary bg-primary text-white shadow-sm'
                  : 'border-outline-variant bg-white text-on-surface-variant hover:border-primary hover:text-primary'
              }`}
            >
              {event}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {paginatedAlbums.map((album) => (
            <button
              key={album._id}
              type="button"
              onClick={() => setSelectedAlbum(album)}
              className="group overflow-hidden rounded-2xl border border-outline-variant bg-white text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(0,23,14,0.12)]"
            >
              <div className="aspect-[4/3] overflow-hidden bg-surface-variant">
                <img className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0" alt={album.alt || album.title} src={album.image} />
              </div>
              <div className="p-5">
                <span className="mb-3 inline-flex rounded-full bg-primary-fixed px-3 py-1 font-label-sm uppercase text-on-primary-fixed-variant">{album.event}</span>
                <h3 className="font-headline-md text-xl text-primary">{album.title}</h3>
              </div>
            </button>
          ))}
        </div>
        {pageCount > 1 && (
          <nav className="mt-12 flex flex-col items-center justify-between gap-5 rounded-[2rem] border border-outline-variant bg-white px-5 py-4 shadow-sm sm:flex-row" aria-label="Event image pages">
            <p className="font-label-sm uppercase text-on-surface-variant">
              Page {visiblePage} of {pageCount}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => setCurrentPage(Math.max(1, visiblePage - 1))}
                disabled={visiblePage === 1}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-outline-variant text-primary transition-all hover:border-primary hover:bg-primary hover:text-white disabled:pointer-events-none disabled:opacity-35"
                aria-label="Previous image page"
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
                  aria-label={`Go to image page ${page}`}
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
                aria-label="Next image page"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </nav>
        )}
      </section>

      <section className="bg-surface-container py-28">
        <div className="mx-auto max-w-7xl px-8">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="mb-4 inline-flex rounded-full bg-primary-container px-4 py-2 font-label-sm uppercase text-on-primary-container">Videos</span>
              <h2 className="font-headline-xl text-4xl text-primary md:text-5xl">Event videos and impact stories.</h2>
            </div>
            <p className="max-w-md font-body-md text-on-surface-variant">
              Stories, moments, and milestones from our journey.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {videos.map((video) => {
              const isPlaying = activeVideoId === video._id;
              const youtubeId = getYouTubeId(video.youtubeId);

              return (
                <article key={video._id} className="overflow-hidden rounded-2xl border border-outline-variant bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(0,23,14,0.12)]">
                  <div className="relative aspect-video overflow-hidden bg-primary-container">
                    {isPlaying ? (
                      <iframe
                        className="h-full w-full"
                        src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    ) : (
                      <button
                        type="button"
                        onClick={() => setActiveVideoId(video._id)}
                        className="group/video relative h-full w-full text-left"
                        aria-label={`Play ${video.title}`}
                      >
                        <img src={video.thumbnail || '/images/circular economy.jpg'} alt={video.alt || video.title} className="h-full w-full object-cover grayscale transition-all duration-700 group-hover/video:scale-105 group-hover/video:grayscale-0" />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary-container/90 via-primary-container/24 to-transparent" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="flex h-20 w-20 items-center justify-center rounded-full border border-white/25 bg-white/14 text-white shadow-[0_18px_60px_rgba(0,23,14,0.34)] backdrop-blur-xl transition-all duration-300 group-hover/video:scale-105 group-hover/video:bg-secondary">
                            <Play className="ml-1 h-8 w-8 fill-current" />
                          </span>
                        </div>
                        <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                          <span className="font-label-sm uppercase text-white/72">Watch on page</span>
                        </div>
                      </button>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="mb-4 flex items-center gap-2 text-secondary">
                      <Play className="h-4 w-4 fill-current" />
                      <span className="font-label-sm uppercase">{video.event}</span>
                    </div>
                    <h3 className="font-headline-md text-2xl text-primary">{video.title}</h3>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {selectedAlbum && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/88 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedAlbum(null)}
        >
          <button
            type="button"
            aria-label="Close image viewer"
            onClick={() => setSelectedAlbum(null)}
            className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/12 text-white backdrop-blur-xl transition-all hover:bg-white/24"
          >
            <X className="h-5 w-5" />
          </button>

          <figure className="relative max-h-[90vh] max-w-[92vw]" onClick={(event) => event.stopPropagation()}>
            <img src={selectedAlbum.image} alt={selectedAlbum.alt || selectedAlbum.title} className="max-h-[90vh] max-w-[92vw] object-contain shadow-[0_30px_100px_rgba(0,0,0,0.45)]" />
            <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/78 via-black/26 to-transparent p-6 text-white">
              <span className="mb-2 block font-label-sm uppercase text-white/72">{selectedAlbum.event}</span>
              <h2 className="font-headline-md text-2xl sm:text-3xl">{selectedAlbum.title}</h2>
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}





