import { Rule } from "sanity";

export default {
  name: "homepage",
  type: "document",
  title: "Homepage",
  fields: [
    {
      name: "visitorCount",
      type: "number",
      title: "Monthly Visitor Count",
      description: "Number of visitors displayed on the homepage badge.",
      validation: (Rule: Rule) => Rule.required().min(0),
    },
    {
      name: "visitorMessage",
      type: "string",
      title: "Visitor Message",
      description: "Text next to the visitor count badge.",
    },
    {
      name: "title",
      type: "string",
      title: "Main Title",
      description: "Main heading of the homepage.",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "subtitle",
      type: "string",
      title: "Subtitle",
      description: "A short description below the main title.",
    },
    {
      name: 'leftBGImage',
      type: 'image',
      title: 'Left Background Image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'rightBGImage',
      type: 'image',
      title: 'Right Background Image',
      options: {
        hotspot: true,
      },
    },
  ],
};
