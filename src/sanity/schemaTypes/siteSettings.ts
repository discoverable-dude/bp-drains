import { defineField, defineType } from 'sanity';

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'phone',   title: 'Phone number',  type: 'string' }),
    defineField({ name: 'email',   title: 'Email address', type: 'string' }),
    defineField({ name: 'address', title: 'Address',       type: 'text' }),
    defineField({ name: 'heroHeadline', title: 'Hero headline', type: 'string' }),
    defineField({ name: 'heroSubtext',  title: 'Hero subtext',  type: 'text' }),
    defineField({ name: 'stats', title: 'Stats row', type: 'array', of: [{
      type: 'object',
      fields: [
        { name: 'value', title: 'Value', type: 'string' },
        { name: 'label', title: 'Label', type: 'string' },
      ],
      preview: { select: { title: 'value', subtitle: 'label' } },
    }]}),
    defineField({ name: 'accreditations', title: 'Accreditations', type: 'array', of: [{
      type: 'object',
      fields: [
        { name: 'name',    title: 'Name',    type: 'string' },
        { name: 'sub',     title: 'Sub',     type: 'string' },
        { name: 'mark',    title: 'Mark',    type: 'string' },
        { name: 'logo',    title: 'Logo',    type: 'image' },
      ],
      preview: { select: { title: 'name', media: 'logo' } },
    }]}),
  ],
  preview: { select: { title: 'phone' } },
});
