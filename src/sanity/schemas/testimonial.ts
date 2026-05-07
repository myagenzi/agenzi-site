import { defineType, defineField } from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({ name: "name",     type: "string",  title: "Name",    validation: (r) => r.required() }),
    defineField({ name: "role",     type: "string",  title: "Role" }),
    defineField({ name: "company",  type: "string",  title: "Company" }),
    defineField({ name: "photo",    type: "image",   title: "Photo",   fields: [defineField({ name: "alt", type: "string", title: "Alt text" })] }),
    defineField({ name: "quote",    type: "text",    title: "Quote",   validation: (r) => r.required() }),
    defineField({ name: "videoUrl", type: "url",     title: "Video URL" }),
    defineField({ name: "featured", type: "boolean", title: "Featured", initialValue: false }),
    defineField({ name: "order",    type: "number",  title: "Order" }),
  ],
});
