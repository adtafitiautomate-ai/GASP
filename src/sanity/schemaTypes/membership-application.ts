import {UserIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const membershipApplication = defineType({
  name: 'membershipApplication',
  title: 'Membership Application',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'reference',
      title: 'Application Reference',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: ['New', 'Under Review', 'Approved', 'Rejected'],
      },
      initialValue: 'New',
    }),
    defineField({
      name: 'submittedAt',
      title: 'Submitted At',
      type: 'datetime',
    }),
    defineField({
      name: 'organisation',
      title: 'Organisation Details',
      type: 'object',
      fields: [
        defineField({name: 'companyName', title: 'Registered Company Name', type: 'string'}),
        defineField({name: 'registrationNumber', title: 'Certificate of Incorporation No.', type: 'string'}),
        defineField({name: 'tin', title: 'Tax Identification Number', type: 'string'}),
        defineField({name: 'incorporationDate', title: 'Date of Incorporation', type: 'date'}),
        defineField({name: 'nemaNumber', title: 'NEMA Registration No.', type: 'string'}),
        defineField({name: 'street', title: 'Street / Plot Address', type: 'string'}),
        defineField({name: 'district', title: 'District', type: 'string'}),
        defineField({name: 'poBox', title: 'P.O. Box', type: 'string'}),
        defineField({name: 'organisationEmail', title: 'Organisation Email', type: 'string'}),
        defineField({name: 'website', title: 'Website', type: 'url'}),
        defineField({name: 'description', title: 'Business Activities', type: 'text'}),
      ],
    }),
    defineField({
      name: 'operations',
      title: 'Operations & Contact',
      type: 'object',
      fields: [
        defineField({name: 'category', title: 'Primary Category', type: 'string'}),
        defineField({name: 'annualTonnage', title: 'Annual Plastic Volume', type: 'string'}),
        defineField({name: 'plasticTypes', title: 'Plastic Types Handled', type: 'array', of: [{type: 'string'}]}),
        defineField({name: 'contactName', title: 'Contact Full Name', type: 'string'}),
        defineField({name: 'contactTitle', title: 'Contact Title', type: 'string'}),
        defineField({name: 'contactPhone', title: 'Contact Phone', type: 'string'}),
        defineField({name: 'contactEmail', title: 'Contact Email', type: 'string'}),
      ],
    }),
    defineField({
      name: 'membership',
      title: 'Membership',
      type: 'object',
      fields: [
        defineField({name: 'tier', title: 'Tier', type: 'string'}),
        defineField({name: 'paymentMethod', title: 'Preferred Payment Method', type: 'string'}),
      ],
    }),
    defineField({
      name: 'declaration',
      title: 'Declaration',
      type: 'object',
      fields: [
        defineField({name: 'confirmAccuracy', title: 'Confirmed Accuracy', type: 'boolean'}),
        defineField({name: 'confirmRules', title: 'Accepted Rules & EPR Obligations', type: 'boolean'}),
        defineField({name: 'confirmRenewal', title: 'Understands Annual Renewal', type: 'boolean'}),
        defineField({name: 'signatoryName', title: 'Signatory Name', type: 'string'}),
        defineField({name: 'signatoryTitle', title: 'Signatory Title', type: 'string'}),
        defineField({name: 'applicationDate', title: 'Application Date', type: 'date'}),
        defineField({name: 'capacity', title: 'Capacity', type: 'string'}),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'organisation.companyName',
      subtitle: 'reference',
    },
  },
})
