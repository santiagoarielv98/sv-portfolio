export default {
  name: 'social',
  title: 'Social',
  type: 'document',
  fields: [
    {
      name: 'platform',
      title: 'Platform',
      type: 'string',
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
