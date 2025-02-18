export default {
  name: "contentfilter",
  title: "Content Filter Settings",
  type: "document",
  fields: [
    {
      name: 'filterButton',
      type: 'boolean',
      title: 'Show Filter Buttons',
      description: 'Enable or disable the filter buttons',
    },
    {
      name: "search",
      type: "object",
      title: "Search Settings",
      fields: [
        {
          name: "enableSearch",
          type: "boolean",
          title: "Enable Search",
          description: "Enable or disable the search input"
        },
        {
          name: "searchPlaceholder",
          type: "string",
          title: "Search Placeholder",
          description: "Placeholder text for the search input",
          hidden: ({ parent }: { parent: { enableSearch?: boolean } }) => !parent?.enableSearch
        }
      ]
    }
  ]
};
