// portfolio personal hecho con sanity.io

// ./schemas/localeStringType.ts # esquema para manejar strings en varios idiomas

import {defineType} from 'sanity'
import {supportedLanguages} from '../utils/locale'

export const localeString = defineType({
  title: 'Localized string',
  name: 'localeString',
  type: 'object',
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: {collapsible: true},
    },
  ],
  fields: supportedLanguages.map((lang) => ({
    title: lang.title,
    name: lang.id,
    type: 'string',
    fieldset: lang.isDefault ? undefined : 'translations',
  })),
})

// ./schemas/projectType.ts # esquema para manejar proyectos
