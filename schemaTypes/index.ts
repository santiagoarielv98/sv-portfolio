import {defineField, defineType} from 'sanity'

// Base language configuration
export const supportedLanguages = [
  {id: 'es', title: 'Spanish', isDefault: true},
  {id: 'en', title: 'English'},
]

// Base types for localization
export const localeString = defineType({
  title: 'Texto Traducible',
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
  title: 'Texto Largo Traducible',
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

// Esquema simplificado para iconos
export const icon = defineType({
  name: 'icon',
  title: 'Iconos',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'icon',
      type: 'string',
      description: 'Nombre del icono (ej: FaGithub)',
      validation: (Rule) => Rule.required(),
    },
  ],
})

// Modificar los tipos que usan iconos para usar referencias
const iconReference = {
  name: 'icon',
  type: 'reference',
  to: [{type: 'icon'}],
}

// Base content type with common fields
const baseContent = defineField({
  name: 'baseContent',
  type: 'object',
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
})

// Agregar después de los tipos base y antes de los tipos principales
export const action = defineType({
  name: 'action',
  title: 'Acción',
  type: 'document',
  fields: [
    {
      name: 'label',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'type',
      type: 'string',
      options: {
        list: [
          {title: 'Botón Primario', value: 'primary'},
          {title: 'Botón Secundario', value: 'secondary'},
          {title: 'Enlace', value: 'link'},
          {title: 'Ancla', value: 'anchor'},
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    iconReference,
    {
      name: 'action',
      type: 'string',
      options: {
        list: [
          {title: 'Ir a sección', value: 'goto'},
          {title: 'Descargar', value: 'download'},
          {title: 'Enlace externo', value: 'external'},
          {title: 'Contacto', value: 'contact'},
        ],
      },
    },
    {
      name: 'target',
      type: 'string',
      description: 'URL, ID de sección o email dependiendo del tipo de acción',
    },
  ],
  preview: {
    select: {
      label: 'label.es',
      type: 'type',
      action: 'action',
    },
    prepare({label, type, action}) {
      const typeEmojis: Record<string, string> = {
        primary: '🔵',
        secondary: '⚪',
        link: '🔗',
        anchor: '⚓',
      }
      return {
        title: `${typeEmojis[type] || '📎'} ${label}`,
        subtitle: `${type} • ${action}`,
      }
    },
  },
})

export const social = defineType({
  name: 'social',
  title: 'Redes Sociales',
  type: 'document',
  fields: [
    {
      name: 'platform',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'url',
      type: 'url',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'tooltip',
      type: 'localeString',
    },
    iconReference,
  ],
  preview: {
    select: {
      platform: 'platform',
    },
    prepare({platform}) {
      return {
        title: platform,
      }
    },
  },
})

// Main portfolio content types
export const profile = defineType({
  name: 'profile',
  title: 'Perfil Personal',
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
      name: 'greeting',
      type: 'localeString',
    },
    {
      name: 'topSkills',
      type: 'object',
      fields: [
        {
          name: 'title',
          type: 'localeString',
        },
        {
          name: 'skills',
          type: 'array',
          of: [{type: 'reference', to: [{type: 'skill'}]}],
        },
      ],
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
          of: [{type: 'reference', to: [{type: 'social'}]}],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title.es',
      subtitle: 'role.es',
      media: 'avatar',
      email: 'contact.email.value',
    },
    prepare({title, subtitle, media, email}) {
      return {
        title: title || 'Perfil sin nombre',
        subtitle: `${subtitle || 'Sin rol'} • ${email || 'Sin email'}`,
        media,
      }
    },
  },
})

export const experience = defineType({
  name: 'experience',
  title: 'Experiencia Profesional',
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
  preview: {
    select: {
      org: 'organization',
      role: 'role.es',
      type: 'type',
      start: 'dateRange.start',
      end: 'dateRange.end',
      isCurrent: 'dateRange.isCurrent',
    },
    prepare({org, role, type, start, end, isCurrent}) {
      const typeLabels: Record<string, string> = {
        work: '💼 Trabajo',
        education: '🎓 Educación',
        volunteer: '🤝 Voluntariado',
      }
      const dateEnd = isCurrent ? 'Presente' : new Date(end).getFullYear()
      const dateRange = `${new Date(start).getFullYear()} - ${dateEnd}`
      return {
        title: `${org} • ${role || 'Sin cargo'}`,
        subtitle: `${typeLabels[type] || 'Sin tipo'} | ${dateRange}`,
      }
    },
  },
})

export const project = defineType({
  name: 'project',
  title: 'Proyectos',
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
  preview: {
    select: {
      title: 'title.es',
      description: 'description.es',
      media: 'thumbnail',
      featured: 'featured',
    },
    prepare({title, description, media, featured}) {
      return {
        title: `${featured ? '⭐ ' : ''}${title}`,
        subtitle: description?.slice(0, 50) + (description?.length > 50 ? '...' : ''),
        media,
      }
    },
  },
})

// Actualizar skill para usar el nuevo esquema de icono
export const skill = defineType({
  name: 'skill',
  title: 'Habilidades',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'localeString',
    },
    iconReference,
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
  preview: {
    select: {
      title: 'name.es',
      icon: 'icon',
      proficiency: 'proficiency',
    },
    prepare({title, proficiency}) {
      const levels: Record<number, string> = {
        1: '⚪ Básico',
        2: '🔵 Intermedio',
        3: '🟢 Avanzado',
        4: '⭐ Experto',
      }
      return {
        title: `${title}`,
        subtitle: levels[proficiency] || 'Sin nivel',
      }
    },
  },
})

// Actualizar skillCategory para permitir iconos
export const skillCategory = defineType({
  name: 'skillCategory',
  title: 'Categorías de Habilidades',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'localeString',
    },
    iconReference,
    {
      name: 'skills',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'skill'}]}],
    },
  ],
  preview: {
    select: {
      title: 'name.es',
      skills: 'skills',
      icon: 'icon',
    },
    prepare({title, skills = []}) {
      return {
        title: `${title}`,
        subtitle: `${skills.length} habilidades`,
      }
    },
  },
})

export const availabilityStatus = defineType({
  name: 'availabilityStatus',
  title: 'Estado de Disponibilidad',
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
  preview: {
    select: {
      status: 'status',
      message: 'message.es',
    },
    prepare({status, message}) {
      const statusEmoji: Record<string, string> = {
        available: '🟢',
        open: '🟡',
        unavailable: '🔴',
      }
      return {
        title: `${statusEmoji[status] || '⚪'} ${message || 'Sin mensaje'}`,
        subtitle: status,
      }
    },
  },
})

export const section = defineType({
  name: 'section',
  title: 'Secciones del Portfolio',
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
      name: 'subtitle',
      type: 'localeString',
    },
    {
      name: 'type',
      type: 'string',
      options: {
        list: [
          {title: 'Hero', value: 'hero'},
          {title: 'Sobre mí', value: 'about'},
          {title: 'Experiencia', value: 'experience'},
          {title: 'Proyectos', value: 'projects'},
          {title: 'Habilidades', value: 'skills'},
          {title: 'Contacto', value: 'contact'},
        ],
      },
    },
    {
      name: 'actions',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'action'}],
        },
      ],
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
  preview: {
    select: {
      title: 'title.es',
      type: 'type',
      layout: 'layout',
      order: 'order',
    },
    prepare({title, type, layout, order}) {
      const typeEmojis: Record<string, string> = {
        hero: '👋',
        about: '📝',
        experience: '💼',
        projects: '🚀',
        skills: '💪',
        contact: '📬',
      }
      return {
        title: `${typeEmojis[type] || '📄'} ${title || 'Sin título'}`,
        subtitle: `${type} • ${layout} • Orden: ${order || 'No definido'}`,
      }
    },
  },
})

export const schemaTypes = [
  localeString,
  localeText,
  icon,
  action,
  profile,
  experience,
  project,
  skill,
  skillCategory,
  availabilityStatus,
  section,
  social,
]
