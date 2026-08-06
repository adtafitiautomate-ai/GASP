import {defineArrayMember, defineField, defineType} from 'sanity'
import {DocumentTextIcon} from '@sanity/icons'

export const NEWS_CATEGORIES = [
  'Announcement',
  'Field Report',
  'Partnership',
  'Research',
  'Capacity Building',
  'Education',
  'Policy',
  'Event',
] as const

export const newsArticle = defineType({
  name: 'newsArticle',
  title: 'News Article',
  type: 'document',
  icon: DocumentTextIcon,
  groups: [
    {name: 'content', title: 'Content', default: true},
    {name: 'meta', title: 'Meta'},
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Headline',
      type: 'string',
      group: 'content',
      validation: (rule) => rule.required().max(140),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      description: 'Appears in the article address, for example /news/epr-roadmap-2026.',
      type: 'slug',
      group: 'content',
      options: {source: 'title', maxLength: 96},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      description: 'Used for the filter pills on the news page.',
      type: 'string',
      group: 'content',
      options: {list: [...NEWS_CATEGORIES]},
      initialValue: 'Announcement',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Summary',
      description: 'One or two sentences shown on cards, previews and social shares.',
      type: 'text',
      rows: 3,
      group: 'content',
      validation: (rule) => rule.required().min(60).max(260),
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      group: 'content',
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
      name: 'fallbackCoverPath',
      title: 'Fallback Local Cover Path',
      description: 'Optional local image path used until a cover image is uploaded, e.g. /images/home.jpg.',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'body',
      title: 'Article Body',
      type: 'array',
      group: 'content',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [
            {title: 'Paragraph', value: 'normal'},
            {title: 'Heading', value: 'h2'},
            {title: 'Subheading', value: 'h3'},
            {title: 'Small Heading', value: 'h4'},
            {title: 'Pull Quote', value: 'blockquote'},
          ],
          lists: [
            {title: 'Bulleted', value: 'bullet'},
            {title: 'Numbered', value: 'number'},
          ],
          marks: {
            decorators: [
              {title: 'Bold', value: 'strong'},
              {title: 'Italic', value: 'em'},
              {title: 'Underline', value: 'underline'},
              {title: 'Code', value: 'code'},
            ],
            annotations: [
              defineArrayMember({
                name: 'link',
                title: 'Link',
                type: 'object',
                fields: [
                  defineField({
                    name: 'href',
                    title: 'URL',
                    description: 'An external URL, or an internal path such as /partnerships.',
                    type: 'string',
                    validation: (rule) => rule.required(),
                  }),
                ],
              }),
            ],
          },
        }),
        defineArrayMember({
          type: 'image',
          title: 'Inline Image',
          options: {hotspot: true},
          fields: [
            defineField({name: 'alt', title: 'Alternative Text', type: 'string'}),
            defineField({name: 'caption', title: 'Caption', type: 'string'}),
          ],
        }),
      ],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'object',
      group: 'meta',
      fields: [
        defineField({name: 'name', title: 'Name', type: 'string'}),
        defineField({name: 'role', title: 'Role', type: 'string'}),
        defineField({
          name: 'image',
          title: 'Portrait',
          type: 'image',
          options: {hotspot: true},
        }),
      ],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Publish Date',
      description: 'Controls the ordering of the news list.',
      type: 'date',
      group: 'meta',
      initialValue: () => new Date().toISOString().slice(0, 10),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'readingMinutes',
      title: 'Reading Time (minutes)',
      description: 'Leave empty to estimate automatically from the article body.',
      type: 'number',
      group: 'meta',
      validation: (rule) => rule.min(1).max(90),
    }),
    defineField({
      name: 'featured',
      title: 'Feature at the top of the news page',
      description: 'If several articles are featured, the most recent one is used.',
      type: 'boolean',
      group: 'meta',
      initialValue: false,
    }),
  ],
  orderings: [
    {
      title: 'Publish Date, newest first',
      name: 'publishedAtDesc',
      by: [{field: 'publishedAt', direction: 'desc'}],
    },
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      publishedAt: 'publishedAt',
      media: 'coverImage',
    },
    prepare({title, category, publishedAt, media}) {
      return {
        title,
        subtitle: [category, publishedAt].filter(Boolean).join(' · '),
        media,
      }
    },
  },
})
