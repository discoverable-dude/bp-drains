import { defineField, defineType } from 'sanity';

export const galleryImageType = defineType({
  name: 'galleryImage',
  title: 'Gallery Image',
  type: 'document',
  fields: [
    defineField({ name: 'image',    title: 'Image',           type: 'image', options: { hotspot: true } }),
    defineField({ name: 'caption',  title: 'Caption',         type: 'string' }),
    defineField({ name: 'service',  title: 'Service type',    type: 'string',
      options: { list: ['Blocked Drains', 'CCTV Survey', 'Drain Lining', 'Drain Repair', 'Gutter Cleaning', 'Emergency', 'Excavation', 'Other'] } }),
    defineField({ name: 'area',     title: 'Area / town',     type: 'string' }),
    defineField({ name: 'featured', title: 'Featured (show first)', type: 'boolean', initialValue: false }),
    defineField({ name: 'order',    title: 'Sort order',      type: 'number' }),
    defineField({ name: 'beforeAfter', title: 'Before/after pair', type: 'object', fields: [
      { name: 'role',  title: 'Role',  type: 'string', options: { list: ['before', 'after', 'none'] }, initialValue: 'none' },
      { name: 'pairId', title: 'Pair ID (match before + after)', type: 'string' },
    ]}),
  ],
  preview: {
    select: { title: 'caption', subtitle: 'service', media: 'image' },
  },
});
