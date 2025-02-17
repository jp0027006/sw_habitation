export default {
  name: 'footer',
  type: 'document',
  title: 'Footer',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
      description: 'Main heading of the footer',
    },
    {
      name: 'emailPlaceholder',
      type: 'string',
      title: 'Email Input Placeholder',
      description: 'Text shown inside the email input field',
    },
    {
      name: 'buttonText',
      type: 'string',
      title: 'Submit Button Text',
      description: 'Text for the submit button',
    },
    {
      name: 'socialLinks',
      type: 'array',
      title: 'Social Links',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'platform', type: 'string', title: 'Platform'},
            {name: 'url', type: 'url', title: 'URL'},
          ],
        },
      ],
    },
    {
      name: 'footerLinks',
      type: 'array',
      title: 'Footer Links',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'label', type: 'string', title: 'Label'},
            {name: 'link', type: 'string', title: 'Link'},
          ],
        },
      ],
    },
    {
      name: 'backToTop',
      type: 'boolean',
      title: 'Show Back to Top Button',
      description: 'Enable or disable the back-to-top button',
    },
  ],
}
