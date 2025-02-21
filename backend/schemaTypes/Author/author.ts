export default {
    name: 'author',
    type: 'document',
    title: 'Author',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name',
      },
      {
        name: 'avatar',
        type: 'image',
        title: 'Avatar',
        options: {
          hotspot: true,
        },
      },
    ],
  };
  