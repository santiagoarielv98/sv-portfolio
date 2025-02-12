import {defineType} from 'sanity'

export const iconType = defineType({
  name: 'iconType',
  title: 'Icons',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
})
