import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'bookPage',
  title: 'Book Page',
  type: 'document',
  fields: [
    // ── Hero ──────────────────────────────────────────────────────────────
    defineField({ name: 'bookTitle', title: 'Book Title', type: 'string' }),
    defineField({ name: 'bookSubtitle', title: 'Book Subtitle', type: 'string' }),
    defineField({ name: 'bookCover', title: 'Book Cover Image', type: 'image', options: { hotspot: true } }),

    // ── Witness / About section ────────────────────────────────────────────
    defineField({ name: 'witnessHeadline', title: '"A Witness to History" Headline', type: 'string' }),
    defineField({
      name: 'witnessTextLeft',
      title: 'Witness Section — First Paragraph',
      type: 'text',
      description: 'First paragraph in the text column beside the photo slider',
    }),
    defineField({
      name: 'witnessTextRight',
      title: 'Witness Section — Second Paragraph',
      type: 'text',
      description: 'Second paragraph in the text column beside the photo slider',
    }),
    defineField({
      name: 'galleryImages',
      title: 'Witness Section — Slideshow Photos',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      description: 'Photos for the rotating slideshow in the Witness section',
    }),

    // ── Author section ────────────────────────────────────────────────────
    defineField({ name: 'authorName', title: 'Author Name', type: 'string' }),
    defineField({ name: 'authorPhoto', title: 'Author Photo', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'authorBio', title: 'Author Bio', type: 'array', of: [{ type: 'block' }] }),
    defineField({
      name: 'authorQuote',
      title: 'Author Quote (highlighted)',
      type: 'string',
      description: 'Short quote displayed with a gold border beneath the bio',
    }),

    // ── Pull Quote ────────────────────────────────────────────────────────
    defineField({
      name: 'pullQuote',
      title: 'Pull Quote',
      type: 'text',
      description: 'Large centred quote displayed over the landscape photo',
    }),

    // ── Key Themes ────────────────────────────────────────────────────────
    defineField({
      name: 'themes',
      title: 'Key Themes',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'title', type: 'string', title: 'Theme Title' },
          { name: 'description', type: 'text', title: 'Theme Description' },
        ],
      }],
    }),

    // ── Call to Action ────────────────────────────────────────────────────
    defineField({ name: 'ctaHeadline', title: 'CTA Headline', type: 'string' }),
    defineField({ name: 'ctaBuyLink', title: 'Order Now — Link URL', type: 'url' }),
    defineField({ name: 'ctaLearnLink', title: 'Learn More — Link URL', type: 'url' }),

    // ── Gallery Page ──────────────────────────────────────────────────────
    defineField({
      name: 'galleryPhotos',
      title: 'Gallery Page — Photos',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'image', title: 'Photo', type: 'image', options: { hotspot: true } },
          { name: 'title', title: 'Photo Title', type: 'string' },
          {
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
              list: [
                { title: 'Landscape', value: 'Landscape' },
                { title: 'People', value: 'People' },
                { title: 'Memorial', value: 'Memorial' },
                { title: 'Historical', value: 'Historical' },
              ],
            },
          },
        ],
      }],
      description: 'Photos displayed in the Gallery page grid, filterable by category',
    }),
  ],
})
