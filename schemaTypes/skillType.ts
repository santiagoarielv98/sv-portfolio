import {defineType} from 'sanity'

export const skillType = defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Frontend', value: 'frontend'},
          {title: 'Backend', value: 'backend'},
          {title: 'Cloud', value: 'cloud'},
        ],
        layout: 'radio', // Opcional: para mostrar como botones de selección
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'localeString',
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'iconType'}]}],
    },
  ],
  preview: {
    select: {
      title: 'category',
    },
  },
})
