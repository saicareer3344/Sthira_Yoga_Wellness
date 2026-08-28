export interface Trainer {
  id: string
  name: string
  /** Path under `public/` — swap the file at this path, no code change needed. */
  image: string
  /** Alt text for the trainer photo. */
  imageAlt: string
  specialization: string
  bio: string
  /** Optional short list of focus areas shown as pills. */
  focus?: string[]
}

/**
 * ============================================================================
 *  TRAINERS
 * ============================================================================
 *  >>>  OWNER: replace `bio` and `specialization` with the real details.  <<<
 *
 *  These bios are intentional placeholders. They deliberately avoid invented
 *  certifications, years of experience, awards or qualifications.
 *
 *  Photos live in `public/assets/trainers/`. Drop in a new file with the same
 *  name (e.g. `uma.jpg`) and it updates everywhere — no code changes.
 */
export const trainers: Trainer[] = [
  {
    id: 'uma',
    name: 'Uma',
    image: '/assets/trainers/uma.jpg',
    imageAlt: 'Uma, founder and yoga instructor at Sthira Yoga & Wellness',
    specialization: 'Yoga & Wellness',
    bio: 'Yoga instructor focused on creating accessible and mindful practices for students of different needs and experience levels. Uma teaches with patience and warmth, and likes to keep sessions unhurried and easy to follow.',
    focus: ['Yoga Therapy', 'Pranayama', 'One-to-one'],
  },
  {
    id: 'prav',
    name: 'Prav',
    image: '/assets/trainers/prav.jpg',
    imageAlt: 'Prav, yoga instructor at Sthira Yoga & Wellness',
    specialization: 'Yoga & Mindful Movement',
    bio: 'Yoga instructor focused on creating accessible and mindful practices for students of different needs and experience levels. Prav keeps classes steady and encouraging, with plenty of room to rest and ask questions.',
    focus: ['Group Classes', 'Chair Yoga', 'Workshops'],
  },
  {
    id: 'sl',
    name: 'SL',
    image: '/assets/trainers/sl.jpg',
    imageAlt: 'SL, yoga instructor at Sthira Yoga & Wellness',
    specialization: 'Breathwork & Meditation',
    bio: 'Yoga instructor focused on creating accessible and mindful practices for students of different needs and experience levels. SL guides breathing and meditation sessions in a plain, practical way that beginners find easy to settle into.',
    focus: ['Meditation', 'Sound Healing', 'Restorative'],
  },
]

export const founder = {
  name: 'Uma',
  role: 'Founder',
  image: '/assets/founder/uma.jpg',
  imageAlt: 'Uma, founder of Sthira Yoga & Wellness',
  intro:
    'Uma founded Sthira Yoga & Wellness with a vision of creating a welcoming space where yoga and holistic wellness could become a meaningful part of everyday life.',
  paragraphs: [
    'Her interest in yoga grew quietly, alongside everyday life — and with it the conviction that a practice should fit around a person, rather than the other way around. Sthira was built on that idea: a calm room where beginners, older adults, expecting mothers and children can all find something that suits them.',
    'Sessions at Sthira are gentle, clearly explained and unhurried. Nothing is forced, and nothing is performed. The aim is simply to leave feeling a little steadier than when you arrived.',
  ],
  /** Set to '' to hide the "Learn More About Uma" link. */
  learnMoreLabel: 'Learn More About Uma',
  learnMoreHref: '#trainers',
} as const
