import { defineField, defineType } from 'sanity';

export const areaType = defineType({
  name: 'area',
  title: 'Area',
  type: 'document',
  fields: [
    defineField({ name: 'name',     title: 'Area name',        type: 'string' }),
    defineField({ name: 'slug',     title: 'Slug',             type: 'slug', options: { source: 'name' } }),
    defineField({ name: 'seoTitle', title: 'SEO title',        type: 'string' }),
    defineField({ name: 'h1',       title: 'Page H1',          type: 'string' }),
    defineField({ name: 'intro',    title: 'Intro paragraph',  type: 'text' }),
    defineField({ name: 'body',     title: 'Body (markdown)',   type: 'text',
      description: 'Paste markdown — headings, bullet lists, bold all supported.' }),
    defineField({ name: 'heroImage', title: 'Hero image',      type: 'image', options: { hotspot: true } }),
    defineField({ name: 'county',   title: 'County',           type: 'string', initialValue: 'Kent' }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'slug.current' },
  },
});
