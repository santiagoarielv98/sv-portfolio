import {defineType} from 'sanity'

export const sectionType = defineType({
  title: 'Section',
  name: 'section',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'localeString',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title.en',
        maxLength: 96,
      },
    },
    {
      title: 'Description',
      name: 'description',
      type: 'localeText',
    },
    {
      title: 'Items',
      name: 'items',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'about'}, {type: 'experience'}, {type: 'project'}, {type: 'skill'}],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title.en',
    },
  },
})
