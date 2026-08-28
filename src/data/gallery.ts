export interface GalleryImage {
  id: string
  /** Path under `public/`. Replace the file at this path to swap the photo. */
  src: string
  /** Larger version used by the lightbox (falls back to `src`). */
  large?: string
  alt: string
  caption: string
  category: GalleryCategory
  /**
   * Grid span used by the masonry layout: 'tall' occupies an extra row.
   * Change these to re-balance the grid after swapping photos.
   */
  span?: 'tall' | 'normal'
}

export type GalleryCategory =
  | 'All'
  | 'Studio'
  | 'Sessions'
  | 'Meditation'
  | 'Wellness'
  | 'Workshops'

/**
 * ============================================================================
 *  GALLERY  —  ⚠  PLACEHOLDER IMAGES  ⚠
 * ============================================================================
 *
 *  >>>  OWNER: drop your own photos into `public/assets/gallery/` using the
 *  same file names (gallery-01.jpg … gallery-12.jpg) and they replace the
 *  placeholders automatically. Nothing in the code needs to change.
 *
 *  The current placeholders are a mix of brand photography and crops of it,
 *  so the grid reads like one cohesive photo set until real shots arrive.
 *
 *  When you swap a file, also update its `caption` / `category` below so the
 *  lightbox text stays truthful.
 *
 *  Recommended: JPEGs around 1200px on the long edge, quality ~80, roughly
 *  100–200 KB each.
 */
export const galleryImages: GalleryImage[] = [
  {
    id: 'g1',
    src: '/assets/gallery/gallery-01.jpg',
    alt: 'Sunlit yoga studio with cotton mats laid in rows and sheer lavender curtains',
    caption: 'Mats laid out, before the session begins',
    category: 'Studio',
    span: 'tall',
  },
  {
    id: 'g2',
    src: '/assets/gallery/gallery-02.jpg',
    alt: 'Person seated cross-legged practising pranayama with eyes gently closed',
    caption: 'Pranayama — beginning with the breath',
    category: 'Meditation',
  },
  {
    id: 'g3',
    src: '/assets/gallery/gallery-03.jpg',
    alt: 'Instructor kneeling beside a student, guiding the posture with both hands',
    caption: 'One-to-one, guided with care',
    category: 'Sessions',
  },
  {
    id: 'g4',
    src: '/assets/gallery/gallery-04.jpg',
    alt: 'Student resting on a bolster and folded blankets during a supported practice',
    caption: 'Restorative, supported by bolsters',
    category: 'Wellness',
  },
  {
    id: 'g5',
    src: '/assets/gallery/gallery-05.jpg',
    alt: 'Close-up of two hands held in a traditional mudra gesture on the lap',
    caption: 'Mudra practice',
    category: 'Meditation',
  },
  {
    id: 'g6',
    src: '/assets/gallery/gallery-06.jpg',
    alt: 'Folded cream and lavender blankets beside a rolled mat and a brass singing bowl',
    caption: 'Blankets ready for a restorative evening',
    category: 'Wellness',
  },
  {
    id: 'g7',
    src: '/assets/gallery/gallery-07.jpg',
    alt: 'Lavender meditation cushions and bolsters arranged along a cream wall',
    caption: 'The cushioned corner',
    category: 'Studio',
    span: 'tall',
  },
  {
    id: 'g8',
    src: '/assets/gallery/gallery-08.jpg',
    alt: 'Brass singing bowl with its mallet beside a sprig of eucalyptus',
    caption: 'Singing bowls, ready for sound healing',
    category: 'Wellness',
  },
  {
    id: 'g9',
    src: '/assets/gallery/gallery-09.jpg',
    alt: 'Wooden shelf with a lit brass oil lamp, frangipani flowers and incense',
    caption: 'The little altar',
    category: 'Studio',
    span: 'tall',
  },
  {
    id: 'g10',
    src: '/assets/gallery/gallery-10.jpg',
    alt: 'Sheer lavender curtains filtering soft morning light beside a tall window',
    caption: 'Morning light, lavender sheers',
    category: 'Studio',
    span: 'tall',
  },
  {
    id: 'g11',
    src: '/assets/gallery/gallery-11.jpg',
    alt: 'Person seated in meditation beside wooden shelves holding singing bowls',
    caption: 'Seated practice, mid-morning',
    category: 'Meditation',
  },
  {
    id: 'g12',
    src: '/assets/gallery/gallery-12.jpg',
    alt: 'Studio window with drifting sheer curtains and a soft view at dusk',
    caption: 'The window seat, at dusk',
    category: 'Studio',
  },
]

export const galleryCategories: GalleryCategory[] = [
  'All',
  'Studio',
  'Sessions',
  'Meditation',
  'Wellness',
  'Workshops',
]

/** Hero + section imagery — centralised so photos can be swapped in one place. */
export const siteImages = {
  hero: {
    src: '/assets/hero/hero-main.jpg',
    alt: 'A person practising yoga in soft morning light, calm and unhurried',
  },
  intro: {
    src: '/assets/about/intro.jpg',
    alt: 'Warm, softly lit Sthira studio interior with lavender cushions and plants',
  },
  philosophy: {
    src: '/assets/about/philosophy.jpg',
    alt: 'Hands resting gently in a mudra during a seated breathing practice',
  },
  approach: {
    src: '/assets/about/approach.jpg',
    alt: 'An instructor guiding a student through a gentle supported posture',
  },
  booking: {
    src: '/assets/hero/booking.jpg',
    alt: 'Folded blankets, a rolled mat and a small brass bowl in a quiet studio corner',
  },
} as const
