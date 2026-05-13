import { defineField, defineType } from 'sanity';

export const testimonialType = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({ name: 'reviewerName', title: 'Reviewer name',   type: 'string' }),
    defineField({ name: 'area',         title: 'Area / town',     type: 'string' }),
    defineField({ name: 'service',      title: 'Service',         type: 'string',
      options: { list: ['BLOCKED', 'CCTV', 'REPAIR', 'RELINING', 'JETTING', 'EMERGENCY', 'SEPTIC', 'SURVEY'] } }),
    defineField({ name: 'stars',        title: 'Star rating',     type: 'number',
      options: { list: [5, 4, 3, 2, 1] } }),
    defineField({ name: 'text',         title: 'Review text',     type: 'text' }),
    defineField({ name: 'source',       title: 'Review source',   type: 'string',
      options: { list: ['Google', 'Trustpilot', 'Facebook', 'Checkatrade', 'Direct'] } }),
    defineField({ name: 'publishedAt',  title: 'Published date',  type: 'date' }),
    defineField({ name: 'photo',        title: 'Job photo',       type: 'image', options: { hotspot: true } }),
    defineField({ name: 'featured',     title: 'Featured review', type: 'boolean', initialValue: false }),
  ],
  preview: {
    select: { title: 'reviewerName', subtitle: 'area', media: 'photo' },
  },
});
