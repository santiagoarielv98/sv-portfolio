import {defineType} from 'sanity'

// schemas/supportedLanguages.js
export const supportedLanguages = [
  {id: 'es', title: 'Spanish', isDefault: true},
  {id: 'en', title: 'English'},
  // Agrega más idiomas según necesites
]

// schemas/localeString.js
export const localeString = defineType({
  title: 'Localized string',
  name: 'localeString',
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

// schemas/personalInfo.js
export const personalInfo = defineType({
  name: 'personalInfo',
  title: 'Información Personal',
  type: 'document',
  fields: [
    {
      name: 'fullName',
      title: 'Nombre Completo',
      type: 'localeString',
    },
    {
      name: 'greating',
      title: 'Saludo',
      type: 'localeString',
    },
    {
      name: 'professionalTitle',
      title: 'Título Profesional',
      type: 'localeString',
    },
    {
      name: 'bio',
      title: 'Biografía',
      type: 'localeText', // Deberías crear un localeText similar al localeString pero con type: 'text'
    },
    {
      name: 'profileImage',
      title: 'Foto de Perfil',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'resume',
      title: 'Currículum',
      type: 'file',
    },
    {
      name: 'socialMedia',
      title: 'Redes Sociales',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'socialMedia'}]}],
    },
    {
      name: 'skillCategory',
      title: 'Categoría',
      type: 'reference',
      to: [{type: 'skillCategory'}],
    },
  ],
  preview: {
    select: {
      title: 'fullName.es',
      subtitle: 'professionalTitle.es',
      media: 'profileImage',
    },
  },
})

// schemas/workExperience.js
export const workExperience = defineType({
  name: 'workExperience',
  title: 'Experiencia Laboral',
  type: 'document',
  fields: [
    {
      name: 'company',
      title: 'Empresa',
      type: 'string',
    },
    {
      name: 'position',
      title: 'Cargo',
      type: 'localeString',
    },
    {
      name: 'startDate',
      title: 'Fecha de Inicio',
      type: 'date',
    },
    {
      name: 'endDate',
      title: 'Fecha de Finalización',
      type: 'date',
    },
    {
      name: 'location',
      title: 'Ubicación',
      type: 'localeString',
    },
    {
      name: 'description',
      title: 'Descripción',
      type: 'array',
      of: [{type: 'localeText'}],
    },
    {
      name: 'technologies',
      title: 'Tecnologías Utilizadas',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'skill'}]}],
    },
  ],
  preview: {
    select: {
      title: 'company',
      subtitle: 'position.es',
      media: 'logo',
      startDate: 'startDate',
      endDate: 'endDate',
    },
    prepare({title, subtitle, media, endDate, startDate}) {
      const dateRange = `${new Date(startDate).getFullYear()} - ${new Date(endDate).getFullYear()}`
      return {
        title,
        subtitle: `${subtitle} (${dateRange})`,
        media,
      }
    },
  },
})

// schemas/education.js
export const education = defineType({
  name: 'education',
  title: 'Educación',
  type: 'document',
  fields: [
    {
      name: 'institution',
      title: 'Institución',
      type: 'string',
    },
    {
      name: 'degree',
      title: 'Título',
      type: 'localeString',
    },
    {
      name: 'startDate',
      title: 'Fecha de Inicio',
      type: 'date',
    },
    {
      name: 'endDate',
      title: 'Fecha de Finalización',
      type: 'date',
    },
    {
      name: 'description',
      title: 'Descripción',
      type: 'localeText',
    },
    {
      name: 'achievements',
      title: 'Logros',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'skill'}]}],
    },
  ],
  preview: {
    select: {
      title: 'institution',
      subtitle: 'degree.es',
      startDate: 'startDate',
      endDate: 'endDate',
    },
    prepare({title, subtitle, startDate, endDate}) {
      const dateRange = `${new Date(startDate).getFullYear()} - ${new Date(endDate).getFullYear()}`
      return {
        title,
        subtitle: `${subtitle} (${dateRange})`,
      }
    },
  },
})

// schemas/skills.js
export const skill = defineType({
  name: 'skill',
  title: 'Habilidad',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nombre',
      type: 'localeString',
    },
    {
      name: 'level',
      title: 'Nivel',
      type: 'number',
      options: {
        list: [
          {title: 'Básico', value: 1},
          {title: 'Intermedio', value: 2},
          {title: 'Avanzado', value: 3},
          {title: 'Experto', value: 4},
          {title: 'Especialista', value: 5},
        ],
      },
    },
  ],
  preview: {
    select: {
      title: 'name.es',
      level: 'level',
    },
    prepare({title, level}) {
      return {
        title: title,
        subtitle: `Nivel: ${level}`,
      }
    },
  },
})

export const skillCategory = defineType({
  name: 'skillCategory',
  title: 'Categoría de Habilidad',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nombre',
      type: 'localeString',
    },
    {
      name: 'skills',
      title: 'Habilidades',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'skill'}]}],
    },
  ],
  preview: {
    select: {
      title: 'name.es',
    },
  },
})

// schemas/projects.js
export const project = defineType({
  name: 'project',
  title: 'Proyecto',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título',
      type: 'localeString',
    },
    {
      name: 'description',
      title: 'Descripción',
      type: 'localeText',
    },
    {
      name: 'technologies',
      title: 'Tecnologías',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'skill'}]}],
    },
    {
      name: 'links',
      title: 'Enlaces',
      type: 'object',
      fields: [
        {
          name: 'live',
          title: 'Demo',
          type: 'url',
        },
        {
          name: 'repo',
          title: 'Repositorio',
          type: 'url',
        },
      ],
    },
    {
      name: 'featuredImage',
      title: 'Imagen Destacada',
      type: 'image',
      options: {hotspot: true},
    },
  ],
  preview: {
    select: {
      title: 'title.es',
      media: 'featuredImage',
    },
  },
})

export const socialMedia = defineType({
  name: 'socialMedia',
  title: 'Red Social',
  type: 'document',
  fields: [
    {
      name: 'platform',
      title: 'Plataforma',
      type: 'string',
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
    },
    {
      name: 'tooltip',
      title: 'Tooltip',
      type: 'localeString',
    },
  ],
})

//schemas/availabilityStatus.js
export const availabilityStatus = defineType({
  name: 'availabilityStatus',
  title: 'Estado de Disponibilidad',
  type: 'document',
  fields: [
    {
      name: 'status',
      title: 'Estado',
      type: 'string',
      options: {
        list: [
          {title: 'Disponible Inmediatamente', value: 'available'},
          {title: 'Abierto a Oportunidades', value: 'open'},
          {title: 'No Disponible', value: 'unavailable'},
          {title: 'Disponible a partir de', value: 'availableFrom'},
        ],
      },
    },
    {
      name: 'date',
      title: 'Fecha de Disponibilidad',
      type: 'date',
      hidden: ({parent}) => parent.status !== 'availableFrom',
    },
  ],
})

// schemas/contact.js
export const contact = defineType({
  name: 'contact',
  title: 'Contacto',
  type: 'document',
  fields: [
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'phone',
      title: 'Teléfono',
      type: 'string',
    },
    {
      name: 'address',
      title: 'Dirección',
      type: 'localeString',
    },
    {
      name: 'socialMedia',
      title: 'Redes Sociales',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'socialMedia'}]}],
    },
    {
      name: 'availability',
      title: 'Disponibilidad',
      type: 'reference',
      to: [{type: 'availabilityStatus'}],
    },
  ],
})

// schemas/testimonials.js
export const testimonial = defineType({
  name: 'testimonial',
  title: 'Recomendaciones',
  type: 'document',
  fields: [
    {
      name: 'author',
      title: 'Autor',
      type: 'string',
    },
    {
      name: 'role',
      title: 'Cargo',
      type: 'localeString',
    },
    {
      name: 'company',
      title: 'Empresa',
      type: 'string',
    },
    {
      name: 'text',
      title: 'Texto',
      type: 'localeText',
    },
    {
      name: 'date',
      title: 'Fecha',
      type: 'string',
    },
  ],
})

// schemas/seo.js
export const seo = defineType({
  name: 'seo',
  title: 'SEO',
  type: 'document',
  fields: [
    {
      name: 'metaTitle',
      title: 'Meta Título',
      type: 'localeString',
    },
    {
      name: 'metaDescription',
      title: 'Meta Descripción',
      type: 'localeText',
    },
    {
      name: 'keywords',
      title: 'Palabras Clave',
      type: 'array',
      of: [{type: 'localeString'}],
    },
  ],
})

// schemas/section.js
export const section = defineType({
  name: 'section',
  title: 'Sección',
  type: 'document',
  fields: [
    {
      name: 'identifier',
      title: 'Identificador único',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      description: 'Usado para identificar la sección en el código',
      options: {
        source: 'title.en',
      },
    },
    {
      name: 'title',
      title: 'Título de la sección',
      type: 'localeString',
    },
    {
      name: 'subtitle',
      title: 'Subtítulo',
      type: 'localeString',
    },
    {
      name: 'description',
      title: 'Descripción',
      type: 'localeText',
    },
    {
      name: 'sectionType',
      title: 'Tipo de Sección',
      type: 'string',
      options: {
        list: [
          {title: 'Hero', value: 'hero'},
          {title: 'Acerca de', value: 'about'},
          {title: 'Experiencia Laboral', value: 'workExperience'},
          {title: 'Proyectos', value: 'projects'},
          {title: 'Habilidades', value: 'skills'},
          {title: 'Educación', value: 'education'},
          {title: 'Contacto', value: 'contact'},
          {title: 'Personalizado', value: 'custom'},
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'content',
      title: 'Contenido Dinámico',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'personalInfo'},
            {type: 'workExperience'},
            {type: 'project'},
            {type: 'skillCategory'},
            {type: 'education'},
            {type: 'contact'},
          ],
        },
      ],
      description: 'Contenido específico según el tipo de sección',
    },
    {
      name: 'layout',
      title: 'Diseño',
      type: 'string',
      options: {
        list: [
          {title: 'Grid', value: 'grid'},
          {title: 'Lista', value: 'list'},
          {title: 'Tarjetas', value: 'cards'},
          {title: 'Timeline', value: 'timeline'},
        ],
      },
    },
    {
      name: 'order',
      title: 'Orden de aparición',
      type: 'number',
      description: 'Número para ordenar las secciones',
    },
    {
      name: 'ctas',
      title: 'Botones de acción',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'text',
              title: 'Texto',
              type: 'localeString',
            },
            {
              name: 'action',
              title: 'Acción',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title.es',
      subtitle: 'sectionType',
    },
  },
})

export const schemaTypes = [
  localeString,
  localeText,
  personalInfo,
  workExperience,
  education,
  skill,
  skillCategory,
  project,
  contact,
  // testimonial,
  // seo,
  section,
  socialMedia,
  availabilityStatus,
]
