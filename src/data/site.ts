/**
 * ============================================================================
 *  STHIRA YOGA & WELLNESS — CENTRAL SITE CONFIGURATION
 * ============================================================================
 *
 *  >>>  OWNER: EDIT THIS FILE TO UPDATE CONTACT DETAILS  <<<
 *
 *  Everything the site shows about *where to find you* and *how to reach you*
 *  lives here. Change a value, save, and it updates everywhere — navbar,
 *  contact section, footer, WhatsApp button, SEO meta tags and schema.
 *
 *  Values marked `PLACEHOLDER` are temporary and MUST be replaced before the
 *  site goes live.
 */

export const studioInfo = {
  /** Studio / brand name — used in the header, footer, schema and SEO tags. */
  name: 'Sthira Yoga & Wellness',

  /** One-line positioning statement. */
  tagline: 'Find stillness. Build strength. Live better.',

  /** Short brand description — used in the footer and meta description. */
  description:
    'Sthira Yoga & Wellness is a calm, welcoming studio for yoga therapy, pranayama, meditation and mindful movement — with sessions for children, adults, expecting mothers and senior citizens.',

  /** Longer "about" line used where a little more context helps. */
  longDescription:
    'A space dedicated to holistic wellbeing through yoga, therapeutic practices, breathwork, meditation and mindful movement — adapted to every age, body and stage of life.',

  /* -----------------------------------------------------------------------
   *  LOGO
  *  Replace the file at `public/assets/logo/Sthira_logo.png` with your own
   *  logo (SVG, PNG or JPG) and update `src` if the file name changes.
   *  Set `showWordmark: false` if your logo already includes the studio name.
   * --------------------------------------------------------------------- */
  logo: {
    src: '/assets/logo/Sthira_logo.png',
    alt: 'Sthira Yoga & Wellness — lotus emblem',
    /** Displayed height in pixels; width scales automatically. */
    height: 44,
    showWordmark: true,
    /** Small line shown under the name. Set to '' to hide. */
    wordmarkSub: 'Yoga · Therapy · Mindful Living',
  },

  /* -----------------------------------------------------------------------
   *  CONTACT DETAILS  (PLACEHOLDERS — replace before launch)
   * --------------------------------------------------------------------- */

  /** PLACEHOLDER — Studio street address. */
  address: {
    line1: 'Studio Address — Coming Soon',
    line2: '',
    city: 'Chennai',
    region: 'Tamil Nadu',
    country: 'India',
    /** Full single-line version used by map links + schema. */
    full: 'Studio Address — Coming Soon, Chennai, Tamil Nadu, India',
    /**
     * Google Maps place query / embed id.
     * Once the address is final, set this to the place name or the `place_id`
     * and the contact section will swap the placeholder tile for a real map.
     * Example: 'Sthira Yoga & Wellness Chennai' or 'ChIJa...'
     */
    mapsQuery: '',
    /** Optional direct Google Maps embed `src`. Leave empty to show the placeholder. */
    mapsEmbedUrl: '',
    /** Optional lat/lng for a static "coming soon" pin. */
    lat: 0,
    lng: 0,
  },

  /** PLACEHOLDER — Display phone number. */
  phone: '+91 90000 00000',
  /** Dial-able version of the phone number (digits only, with country code). */
  phoneDial: '+919000000000',

  /** PLACEHOLDER — WhatsApp number, digits only with country code. */
  whatsapp: '+919000000000',
  /** Prefilled WhatsApp message. */
  whatsappMessage: 'Hello Sthira Yoga & Wellness, I would like to know more about your classes.',

  /** PLACEHOLDER — Public email address. */
  email: 'hello@sthira-yoga.com',

  /** PLACEHOLDER — Working hours. */
  hours: [
    { days: 'Monday – Friday', time: '6:00 AM – 12:00 PM  ·  4:00 PM – 8:00 PM' },
    { days: 'Saturday', time: '6:00 AM – 1:00 PM' },
    { days: 'Sunday', time: '7:00 AM – 10:00 AM' },
  ],

  /* -----------------------------------------------------------------------
   *  SOCIAL LINKS  (PLACEHOLDERS — '#' renders a disabled state)
   * --------------------------------------------------------------------- */
  social: {
    instagram: '#',
    facebook: '#',
    youtube: '#',
  },

  /* -----------------------------------------------------------------------
   *  BOOKING
   * --------------------------------------------------------------------- */
  booking: {
    /**
     * Where the booking form should send data once a backend exists.
     * Leave empty to keep the form in "demo" mode (it validates and shows a
     * confirmation, but nothing is transmitted).
     *
     * Supported: any HTTPS endpoint that accepts JSON POST.
     */
    endpoint: '',
    /** Heading shown above the form. */
    heading: 'Begin Your Practice',
    /** Confirmation shown after a successful submission. */
    successMessage:
      "Thank you for reaching out to Sthira Yoga & Wellness. We'll get back to you shortly.",
  },

  /* -----------------------------------------------------------------------
   *  SEO
   * --------------------------------------------------------------------- */
  seo: {
    title: 'Sthira Yoga & Wellness | Yoga & Holistic Wellness',
    description:
      'Sthira Yoga & Wellness offers yoga therapy, mudra and varma therapy, pranayama, meditation, prenatal, children and senior citizen yoga — in studio, at home or online. Personalised, gentle and mindful practices for every stage of life.',
    url: 'https://www.sthira-yoga.com',
    locale: 'en_IN',
  },

  /** Copyright year shown in the footer. */
  copyrightYear: 2026,
} as const

export type StudioInfo = typeof studioInfo

/* ---------------------------------------------------------------------------
 *  Convenience helpers (import these instead of hand-building URLs)
 * ------------------------------------------------------------------------- */

const digits = (value: string) => value.replace(/[^\d]/g, '')

export const contactLinks = {
  tel: () => `tel:${digits(studioInfo.phoneDial)}`,
  mail: (subject: string = 'Enquiry from the Sthira website') =>
    `mailto:${studioInfo.email}?subject=${encodeURIComponent(subject)}`,
  whatsapp: (message: string = studioInfo.whatsappMessage) =>
    `https://wa.me/${digits(studioInfo.whatsapp)}?text=${encodeURIComponent(message)}`,
  maps: () =>
    studioInfo.address.mapsQuery
      ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
          studioInfo.address.mapsQuery || studioInfo.address.full,
        )}`
      : '#',
}

/** True when the studio address is still the "coming soon" placeholder. */
export const hasRealAddress = (): boolean =>
  !studioInfo.address.full.toLowerCase().includes('coming soon')
