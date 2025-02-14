import {defineType} from 'sanity'

// Base language configuration
export const supportedLanguages = [
  {id: 'es', title: 'Spanish', isDefault: true},
  {id: 'en', title: 'English'},
]

// Base types for localization
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

export const localeText = defineType({
  title: 'Localized text',
  name: 'localeText',
  type: 'object',
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: {collapsible: true, collapsed: true},
    },
  ],
  fields: supportedLanguages.map((lang) => ({
    title: lang.title,
    name: lang.id,
    type: 'text',
    fieldset: lang.isDefault ? undefined : 'translations',
  })),
})

// Base content type with common fields
const baseContent = {
  fields: [
    {
      name: 'title',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      type: 'localeText',
    },
    {
      name: 'slug',
      type: 'slug',
      options: {source: 'title.es'},
    },
  ],
}

// Main portfolio content types
export const profile = defineType({
  name: 'profile',
  title: 'Perfil',
  type: 'document',
  fields: [
    ...baseContent.fields,
    {
      name: 'role',
      title: 'Rol Profesional',
      type: 'localeString',
    },
    {
      name: 'avatar',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'resume',
      type: 'file',
    },
    {
      name: 'skills',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'skillCategory'}]}],
    },
    {
      name: 'availability',
      type: 'reference',
      to: [{type: 'availabilityStatus'}],
    },
    {
      name: 'contact',
      type: 'object',
      fields: [
        {
          name: 'email',
          type: 'object',
          fields: [
            {name: 'label', type: 'localeString'},
            {name: 'value', type: 'string'},
          ],
        },
        {
          name: 'phone',
          type: 'object',
          fields: [
            {name: 'label', type: 'localeString'},
            {name: 'value', type: 'string'},
          ],
        },
        {
          name: 'location',
          type: 'object',
          fields: [
            {name: 'label', type: 'localeString'},
            {name: 'value', type: 'localeString'},
          ],
        },
        {
          name: 'socials',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {name: 'platform', type: 'string'},
                {name: 'url', type: 'url'},
                {name: 'tooltip', type: 'localeString'},
              ],
            },
          ],
        },
      ],
    },
  ],
})

export const experience = defineType({
  name: 'experience',
  title: 'Experiencia',
  type: 'document',
  fields: [
    ...baseContent.fields,
    {
      name: 'organization',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'role',
      type: 'localeString',
    },
    {
      name: 'type',
      type: 'string',
      options: {
        list: [
          {title: 'Trabajo', value: 'work'},
          {title: 'Educación', value: 'education'},
          {title: 'Voluntariado', value: 'volunteer'},
        ],
      },
    },
    {
      name: 'dateRange',
      type: 'object',
      fields: [
        {name: 'start', type: 'date'},
        {name: 'end', type: 'date'},
        {name: 'isCurrent', type: 'boolean'},
      ],
    },
    {
      name: 'highlights',
      type: 'array',
      of: [{type: 'localeText'}],
    },
    {
      name: 'skills',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'skill'}]}],
    },
    {
      name: 'location',
      type: 'localeString',
    },
  ],
})

export const project = defineType({
  name: 'project',
  title: 'Proyecto',
  type: 'document',
  fields: [
    ...baseContent.fields,
    {
      name: 'thumbnail',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'gallery',
      type: 'array',
      of: [{type: 'image'}],
    },
    {
      name: 'skills',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'skill'}]}],
    },
    {
      name: 'links',
      type: 'object',
      fields: [
        {name: 'live', type: 'url'},
        {name: 'source', type: 'url'},
        {name: 'documentation', type: 'url'},
      ],
    },
    {
      name: 'featured',
      type: 'boolean',
    },
  ],
})

export const skill = defineType({
  name: 'skill',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'localeString',
    },
    {
      name: 'icon',
      type: 'image',
    },
    {
      name: 'tooltip',
      title: 'Descripción al pasar el mouse',
      type: 'localeText',
      description: 'Breve descripción que aparecerá al pasar el mouse sobre la skill',
    },
    {
      name: 'proficiency',
      type: 'number',
      options: {
        list: [
          {title: 'Básico', value: 1},
          {title: 'Intermedio', value: 2},
          {title: 'Avanzado', value: 3},
          {title: 'Experto', value: 4},
        ],
      },
    },
  ],
})

export const skillCategory = defineType({
  name: 'skillCategory',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'localeString',
    },
    {
      name: 'skills',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'skill'}]}],
    },
  ],
})

export const availabilityStatus = defineType({
  name: 'availabilityStatus',
  type: 'document',
  fields: [
    {
      name: 'status',
      type: 'string',
      options: {
        list: [
          {title: 'Disponible', value: 'available'},
          {title: 'Abierto a ofertas', value: 'open'},
          {title: 'No disponible', value: 'unavailable'},
        ],
      },
    },
    {
      name: 'message',
      type: 'localeString',
    },
  ],
})

export const section = defineType({
  name: 'section',
  type: 'document',
  fields: [
    {
      name: 'identifier',
      type: 'slug',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'title',
      type: 'localeString',
    },
    {
      name: 'type',
      type: 'string',
      options: {
        list: [
          {title: 'Hero', value: 'hero'},
          {title: 'Experiencia', value: 'experience'},
          {title: 'Proyectos', value: 'projects'},
          {title: 'Habilidades', value: 'skills'},
          {title: 'Contacto', value: 'contact'},
        ],
      },
    },
    {
      name: 'content',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'profile'}, {type: 'experience'}, {type: 'project'}, {type: 'skillCategory'}],
        },
      ],
    },
    {
      name: 'layout',
      type: 'string',
      options: {
        list: [
          {title: 'Grid', value: 'grid'},
          {title: 'Lista', value: 'list'},
          {title: 'Timeline', value: 'timeline'},
        ],
      },
    },
    {
      name: 'order',
      type: 'number',
    },
  ],
})

export const schemaTypes = [
  localeString,
  localeText,
  profile,
  experience,
  project,
  skill,
  skillCategory,
  availabilityStatus,
  section,
]
