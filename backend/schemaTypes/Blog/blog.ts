export default {
    name: 'blog',
    type: 'document',
    title: 'Blog Post',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
      },
      {
        name: 'publishedDate',
        type: 'datetime',
        title: 'Published Date',
      },
      {
        name: 'readTime',
        type: 'string',
        title: 'Read Time',
      },
      {
        name: 'author',
        type: 'reference',
        title: 'Author',
        to: [{ type: 'author' }],
      },
      {
        name: 'excerpt',
        type: 'array',
        title: 'Excerpt',
        of: [{ type: 'block' }],
      },
      {
        name: 'thumbnail',
        type: 'image',
        title: 'Thumbnail',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'content',
        type: 'array',
        title: 'Content',
        of: [
          {
            type: 'object',
            name: 'contentBlock',
            fields: [
              {
                name: 'description',
                type: 'array',
                title: 'Description',
                of: [{ type: 'block' }],
              },
              {
                name: 'image',
                type: 'image',
                title: 'Image',
                options: {
                  hotspot: true,
                },
              },
            ],
          },
        ],
      },
      {
        name: 'category',
        type: 'string',
        title: 'Category',
      },
    ],
  };
  