export default {
    name: "contentfilter",
    title: "Content Filter Settings",
    type: "document",
    fields: [
      {
        name: "buttons",
        type: "array",
        title: "Buttons",
        of: [
          {
            type: "object",
            title: "Button",
            fields: [
              {
                name: "enabled",
                type: "boolean",
                title: "Enable Button",
                description: "Enable or disable this button"
              },
              {
                name: "buttonText",
                type: "string",
                title: "Button Text",
                description: "Text displayed on this button",
                hidden: ({ parent }: { parent: { enabled?: boolean } }) => !parent?.enabled
              }
            ]
          }
        ]
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
  