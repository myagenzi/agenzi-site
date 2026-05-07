import { defineType, defineField } from "sanity";

export const service = defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({ name: "title",       type: "string", title: "Title",       validation: (r) => r.required() }),
    defineField({ name: "slug",        type: "slug",   title: "Slug",        options: { source: "title" } }),
    defineField({ name: "number",      type: "string", title: "Number",      description: 'e.g. "{01}"' }),
    defineField({ name: "description", type: "text",   title: "Description" }),
    defineField({ name: "tags",        type: "array",  title: "Tags",        of: [{ type: "string" }] }),
    defineField({ name: "order",       type: "number", title: "Order" }),
  ],
});
