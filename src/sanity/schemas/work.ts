import { defineType, defineField } from "sanity";

export const work = defineType({
  name: "work",
  title: "Work",
  type: "document",
  fields: [
    defineField({ name: "title",      type: "string",   title: "Title",       validation: (r) => r.required() }),
    defineField({ name: "slug",       type: "slug",     title: "Slug",        options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "client",     type: "string",   title: "Client" }),
    defineField({ name: "category",   type: "string",   title: "Category" }),
    defineField({ name: "year",       type: "string",   title: "Year" }),
    defineField({ name: "coverImage", type: "image",    title: "Cover Image", fields: [defineField({ name: "alt", type: "string", title: "Alt text" })] }),
    defineField({ name: "videoUrl",   type: "url",      title: "Video URL" }),
    defineField({ name: "description",type: "text",     title: "Description" }),
    defineField({ name: "tags",       type: "array",    title: "Tags",        of: [{ type: "string" }] }),
    defineField({ name: "featured",   type: "boolean",  title: "Featured",    initialValue: false }),
    defineField({ name: "order",      type: "number",   title: "Order" }),
  ],
  orderings: [{ title: "Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
});
