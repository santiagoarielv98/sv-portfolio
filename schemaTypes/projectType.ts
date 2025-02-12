import {defineField, defineType} from 'sanity'

export const projectType = defineType({
  title: 'Project',
  name: 'project',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'title',
      type: 'localeString',
    }),
    defineField({
      name: 'description',
      type: 'localeString',
    }),
    defineField({
      name: 'content',
      type: 'localeText',
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: {hotspot: true},
    }),
    // repo link
    defineField({
      name: 'repo',
      type: 'url',
    }),
    // demo link
    defineField({
      name: 'demo',
      type: 'url',
    }),
    // technologies
    defineField({
      name: 'technologies',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'iconType'}]}],
    }),
    // date
    defineField({
      name: 'date',
      type: 'datetime',
    }),
  ],
  preview: {
    select: {
      title: `name`,
    },
  },
})
