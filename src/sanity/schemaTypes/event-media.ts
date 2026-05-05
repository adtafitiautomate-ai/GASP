import {defineField, defineType} from 'sanity'
import {ImageIcon} from '@sanity/icons'

export const eventMedia = defineType({
  name: 'eventMedia',
  title: 'Event Image',
  type: 'document',
  icon: ImageIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Image Title',
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
      name: 'eventDate',
      title: 'Event Date',
      type: 'date',
    }),
    defineField({
      name: 'image',
      title: 'Image',
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
      name: 'fallbackImagePath',
      title: 'Fallback Local Image Path',
      description: 'Optional local image path used until a Sanity image is uploaded.',
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
      media: 'image',
    },
  },
})
