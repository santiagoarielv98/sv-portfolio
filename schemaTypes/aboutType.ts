import {defineType} from 'sanity'

export const aboutType = defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'aboutMe',
      title: 'About Me',
      type: 'localeText',
    },
    {
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: {hotspot: true},
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'profileImage',
    },
  },
})
