import { defineField, defineType } from 'sanity';

export const serviceType = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({ name: 'title',    title: 'Short title (nav)',  type: 'string' }),
    defineField({ name: 'slug',     title: 'Slug',               type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'seoTitle', title: 'SEO title',          type: 'string' }),
    defineField({ name: 'h1',       title: 'Page H1',            type: 'string' }),
    defineField({ name: 'intro',    title: 'Intro paragraph',    type: 'text' }),
    defineField({ name: 'body',     title: 'Body (markdown)',     type: 'text',
      description: 'Paste markdown — headings, bullet lists, bold all supported.' }),
    defineField({ name: 'heroImage', title: 'Hero image',        type: 'image', options: { hotspot: true } }),
    defineField({ name: 'order',    title: 'Display order',      type: 'number' }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'slug.current' },
  },
});
