import { defineType, defineField } from "sanity";

export const settings = defineType({
  name: "settings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "siteTitle",       type: "string", title: "Site Title" }),
    defineField({ name: "siteDescription", type: "text",   title: "Site Description" }),
    defineField({ name: "ogImage",         type: "image",  title: "OG Image" }),
    defineField({ name: "email",           type: "string", title: "Email" }),
    defineField({ name: "phone",           type: "string", title: "Phone" }),
    defineField({ name: "address",         type: "string", title: "Address" }),
    defineField({
      name: "socialLinks",
      type: "array",
      title: "Social Links",
      of: [{
        type: "object",
        fields: [
          defineField({ name: "platform", type: "string", title: "Platform" }),
          defineField({ name: "url",      type: "url",    title: "URL" }),
        ],
      }],
    }),
    defineField({ name: "heroHeadline", type: "string", title: "Hero Headline" }),
    defineField({ name: "heroSubline",  type: "text",   title: "Hero Subline" }),
  ],
});
