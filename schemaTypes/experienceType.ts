import {defineType} from 'sanity'

export const experienceType = defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: 'company',
      title: 'Company',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'position',
      title: 'Position',
      type: 'localeString',
    },
    {
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
    },
    {
      name: 'endDate',
      title: 'End Date',
      type: 'date',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'localeString'}],
    },
    {
      name: 'technologies',
      title: 'Technologies Used',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'iconType'}]}],
    },
  ],
  preview: {
    // titulo + (fecha de inicio - fecha de fin)
    select: {
      title: 'company',
      startDate: 'startDate',
      endDate: 'endDate',
    },
    prepare({title, startDate, endDate}) {
      const start = new Date(startDate).getFullYear()
      const end = new Date(endDate).getFullYear()
      return {
        title: `${title} (${start} - ${end})`,
      }
    },
  },
})
