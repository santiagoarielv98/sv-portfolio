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
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Name',
              type: 'string',
            },
            {
              name: 'level',
              title: 'Level',
              type: 'string',
              options: {
                list: [
                  {title: 'Beginner', value: 'beginner'},
                  {title: 'Intermediate', value: 'intermediate'},
                  {title: 'Advanced', value: 'advanced'},
                ],
              },
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'category',
    },
  },
})
