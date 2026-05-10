export type GalleryCategory = 'all' | 'outdoor' | 'interiors' | 'dining' | 'events'

export interface GalleryItem {
  src: string
  categories: Exclude<GalleryCategory, 'all'>[]
}

const cats = ['outdoor', 'interiors', 'dining', 'events'] as const

export const galleryItems: GalleryItem[] = Array.from({ length: 20 }, (_, i) => {
  const n = String(i + 1).padStart(2, '0')
  const category = cats[i % cats.length]
  const secondary = cats[(i + 2) % cats.length]
  return {
    src: `/gallery/gallery-${n}.png`,
    categories: i % 3 === 0 ? [category] : [category, secondary],
  }
})
