export default {
    name: 'navbar',
    type: 'document',
    title: 'Navbar',
    fields: [
      {
        name: 'logo',
        type: 'image',
        title: 'Logo',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'logoText',
        type: 'string',
        title: 'Logo Text',
      },
      {
        name: 'menuItems',
        type: 'array',
        title: 'Menu Items',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'title',
                type: 'string',
                title: 'Title',
              },
              {
                name: 'link',
                type: 'string',
                title: 'Link',
              },
            ],
          },
        ],
      },
    ],
  };
  