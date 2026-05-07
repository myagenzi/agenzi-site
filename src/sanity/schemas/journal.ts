import { defineType, defineField } from "sanity";

export const journal = defineType({
  name: "journal",
  title: "Journal",
  type: "document",
  fields: [
    defineField({ name: "title",       type: "string",   title: "Title",         validation: (r) => r.required() }),
    defineField({ name: "slug",        type: "slug",     title: "Slug",          options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "publishedAt", type: "datetime", title: "Published At" }),
    defineField({ name: "author",      type: "string",   title: "Author" }),
    defineField({ name: "category",    type: "string",   title: "Category" }),
    defineField({ name: "coverImage",  type: "image",    title: "Cover Image",   fields: [defineField({ name: "alt", type: "string", title: "Alt text" })] }),
    defineField({ name: "excerpt",     type: "text",     title: "Excerpt" }),
    defineField({
      name: "body",
      type: "array",
      title: "Body",
      of: [
        { type: "block" },
        { type: "image", fields: [defineField({ name: "alt", type: "string", title: "Alt text" })] },
      ],
    }),
  ],
});
