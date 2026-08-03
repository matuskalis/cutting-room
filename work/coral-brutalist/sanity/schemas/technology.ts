import { defineType, defineField } from 'sanity'

export const technology = defineType({
  name: 'technology',
  title: 'Technology',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name' },
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Cloud Platform', value: 'cloud' },
          { title: 'Data Platform', value: 'data' },
          { title: 'Analytics & BI', value: 'analytics' },
          { title: 'Infrastructure', value: 'infrastructure' },
          { title: 'AI/ML', value: 'ai' },
        ],
      },
    }),
    defineField({
      name: 'partnerLevel',
      title: 'Partner Level',
      type: 'string',
      description: 'e.g., Premier Partner, Certified Partner',
    }),
  ],
})
