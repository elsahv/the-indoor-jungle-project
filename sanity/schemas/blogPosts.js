export default {
    name: 'blogPosts',
    title: 'Blog Posts',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
      },
   
      {
        name: 'mainImage',
        title: 'Main image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'publishedAt',
        title: 'Published at',
        type: 'datetime',
        options: {
          dateFormat: 'YYYY-MM-DD',
          // calendarTodayLabel: 'Today'
        }
      },
      {
        name: 'images',
        title: 'Images',
        type: 'array',
        of: [{ type: 'postImage' }],
      },
      {
        name: 'body',
        title: 'Body',
        type: 'blockContent',
      },
    ],
    
  }
  