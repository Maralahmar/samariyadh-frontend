import type { GalleryCategory } from './galleryImages'

/** i18n keys for each resort experience card; order matches gallery-01.png … gallery-13.png */
export const EXPERIENCE_GALLERY_KEYS = [
  'experienceGallery01',
  'experienceGallery02',
  'experienceGallery03',
  'experienceGallery04',
  'experienceGallery05',
  'experienceGallery06',
  'experienceGallery07',
  'experienceGallery08',
  'experienceGallery09',
  'experienceGallery10',
  'experienceGallery11',
  'experienceGallery12',
  'experienceGallery13',
] as const

export type ExperienceGalleryKey = (typeof EXPERIENCE_GALLERY_KEYS)[number]

type Cat = Exclude<GalleryCategory, 'all'>

/** Filter tags aligned with gallery-01 … gallery-13 image content */
const CATEGORY_MATRIX: Cat[][] = [
  ['interiors', 'dining'],
  ['outdoor', 'interiors'],
  ['outdoor'],
  ['dining', 'events'],
  ['interiors'],
  ['interiors', 'events'],
  ['outdoor'],
  ['interiors', 'events'],
  ['interiors', 'events'],
  ['outdoor'],
  ['interiors', 'events'],
  ['outdoor'],
  ['outdoor'],
]

export interface FacilityGalleryPair {
  captionKey: ExperienceGalleryKey
  imageSrc: string
  categories: Cat[]
}

export function getFacilityGalleryPairs(): FacilityGalleryPair[] {
  return EXPERIENCE_GALLERY_KEYS.map((captionKey, i) => ({
    captionKey,
    imageSrc: `/gallery/gallery-${String(i + 1).padStart(2, '0')}.png`,
    categories: CATEGORY_MATRIX[i] ?? ['outdoor'],
  }))
}
