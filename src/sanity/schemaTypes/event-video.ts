import {defineField, defineType} from 'sanity'
import {PlayIcon} from '@sanity/icons'

export const eventVideo = defineType({
  name: 'eventVideo',
  title: 'Event Video',
  type: 'document',
  icon: PlayIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Video Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'eventName',
      title: 'Event Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'youtubeId',
      title: 'YouTube Video URL or ID',
      description: 'Paste a full YouTube URL like https://youtu.be/abc123 or enter only the 11-character video ID.',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'thumbnail',
      title: 'Custom Thumbnail',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'fallbackThumbnailPath',
      title: 'Fallback Local Thumbnail Path',
      description: 'Optional local image path used until a Sanity thumbnail is uploaded.',
      type: 'string',
    }),
    defineField({
      name: 'orderRank',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'eventName',
      media: 'thumbnail',
    },
  },
})

