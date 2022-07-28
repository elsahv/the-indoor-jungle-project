export default {
  name: 'postImage',
  title: 'Post Image',
  type: 'image',
  fields: [
    {
      name: 'caption',
      title: 'Caption',
      type: 'string',
      options: {
        isHightLight: true,
      },
    },
  ],
  options: {
    hotspot: true,
  },
}
