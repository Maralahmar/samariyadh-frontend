import { AnimatePresence, motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import type { GalleryCategory } from '../data/galleryImages'
import { getFacilityGalleryPairs } from '../data/facilityGallery'
import { useLanguage } from '../context/LanguageContext'

const specKeys = [
  'specMajlis',
  'specBathrooms',
  'specSinks',
  'specKitchen',
  'specDining',
  'specOutdoor',
  'specParking',
  'specArea',
] as const

const filters: { id: GalleryCategory; labelKey: string }[] = [
  { id: 'all', labelKey: 'galleryAll' },
  { id: 'outdoor', labelKey: 'galleryOutdoor' },
  { id: 'interiors', labelKey: 'galleryInteriors' },
  { id: 'dining', labelKey: 'galleryDining' },
  { id: 'events', labelKey: 'galleryEvents' },
]

const pairs = getFacilityGalleryPairs()

export function ExperienceSection() {
  const { t } = useLanguage()
  const [active, setActive] = useState<GalleryCategory>('all')
  const [lightbox, setLightbox] = useState<string | null>(null)

  const filtered = useMemo(() => {
    if (active === 'all') return pairs
    return pairs.filter((row) => row.categories.includes(active))
  }, [active])

  return (
    <section id="experience" className="scroll-mt-24 border-t border-brand-lavender/35 bg-brand-soft lg:scroll-mt-28">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20 lg:px-8 lg:py-26">
        <header className="mx-auto max-w-3xl text-center lg:mx-0 lg:max-w-2xl lg:text-start">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-purple">{t('experienceEyebrow')}</p>
          <div className="mt-5 space-y-4 lg:mt-6">
            <h2 className="font-display text-3xl leading-[1.12] text-brand-deep md:text-4xl lg:text-[2.65rem]">
              {t('facilitiesTitle')}
            </h2>
            <p className="text-base leading-[1.75] text-gray-700 md:text-lg md:leading-[1.8]">{t('experienceLead')}</p>
          </div>
        </header>

        <div className="mt-14 rounded-[28px] border border-brand-purple/15 bg-white p-6 shadow-xl sm:p-8 lg:mt-16 lg:p-10 xl:p-12">
          <div className="flex flex-col gap-8 border-b border-brand-lavender/20 pb-10 lg:flex-row lg:items-end lg:justify-between lg:gap-10 lg:pb-12">
            <div className="max-w-2xl space-y-3">
              <h3 className="font-display text-2xl leading-tight text-brand-deep md:text-3xl">{t('galleryTitle')}</h3>
              <p className="text-[15px] leading-[1.7] text-gray-700 md:text-base md:leading-[1.75]">{t('gallerySubtitle')}</p>
            </div>
            <div
              role="tablist"
              aria-label={t('galleryTitle')}
              className="flex w-full min-w-0 flex-nowrap gap-2 overflow-x-auto overscroll-x-contain scroll-ps-3 scroll-pe-3 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-3 sm:scroll-ps-4 sm:scroll-pe-4 lg:w-auto lg:justify-end [&::-webkit-scrollbar]:hidden"
            >
              {filters.map((f) => {
                const isActive = active === f.id
                return (
                  <motion.button
                    key={f.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActive(f.id)}
                    layout
                    whileTap={{ scale: 0.94 }}
                    whileHover={isActive ? { scale: 1.02 } : { scale: 1.03, y: -2 }}
                    transition={{ type: 'spring', stiffness: 420, damping: 26 }}
                    className={`inline-flex shrink-0 touch-manipulation select-none items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold tracking-wide transition-colors duration-300 md:min-h-11 md:px-6 md:text-[0.9375rem] ${
                      isActive
                        ? 'bg-brand-deep text-white shadow-[0_6px_22px_-4px_rgb(62_42_34/0.45),0_2px_10px_-4px_rgb(62_42_34/0.28)] ring-2 ring-inset ring-white/25'
                        : 'border-2 border-brand-lavender/70 bg-brand-soft text-gray-800 shadow-sm ring-0 hover:border-brand-purple hover:bg-white hover:shadow-[0_8px_20px_-8px_rgb(62_42_34/0.2)] active:bg-brand-soft/90'
                    }`}
                  >
                    {t(f.labelKey)}
                  </motion.button>
                )
              })}
            </div>
          </div>

          <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-2 sm:gap-7 lg:mt-12 lg:grid-cols-3 lg:gap-8">
            <AnimatePresence mode="popLayout">
              {filtered.map((row) => (
                <motion.article
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.28 }}
                  key={row.captionKey}
                  className="group overflow-hidden rounded-[24px] border border-brand-lavender/35 bg-brand-beige shadow-md lg:rounded-[26px]"
                >
                  <button
                    type="button"
                    onClick={() => setLightbox(row.imageSrc)}
                    className="relative block w-full overflow-hidden text-start outline-none ring-brand-purple focus-visible:ring-2"
                  >
                    <img
                      src={row.imageSrc}
                      alt={t(row.captionKey)}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-deep/55 via-brand-deep/10 to-transparent opacity-90 transition group-hover:opacity-100" />
                    <p className="absolute bottom-4 start-4 end-4 text-start font-display text-lg font-semibold text-white md:text-xl">
                      {t(row.captionKey)}
                    </p>
                  </button>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          <div className="mt-14 overflow-hidden rounded-[26px] border border-brand-lavender/40 bg-white shadow-lg lg:mt-16 lg:rounded-[28px]">
            <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(300px,0.92fr)]">
              <div className="flex flex-col justify-center gap-7 border-b border-brand-lavender/20 p-8 sm:p-10 lg:border-b-0 lg:border-e lg:p-12 lg:pb-14">
                <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-purple">{t('specsEyebrow')}</p>
                  <h3 className="font-display text-2xl leading-tight text-brand-deep md:text-3xl lg:text-[2rem]">{t('specsTitle')}</h3>
                </div>
                <ul className="grid gap-3 sm:grid-cols-2 sm:gap-3.5">
                  {specKeys.map((key) => (
                    <li
                      key={key}
                      className="flex gap-3.5 rounded-2xl border border-brand-purple/12 bg-brand-soft/70 px-4 py-4 text-[15px] font-medium leading-snug text-gray-800"
                    >
                      <span className="mt-[0.45rem] h-2.5 w-2.5 shrink-0 rounded-full bg-brand-emerald" />
                      <span>{t(key)}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative min-h-[240px] sm:min-h-[280px]">
                <img
                  src="/gallery/gallery-11.png"
                  alt={t('experienceGallery11')}
                  className="h-full min-h-[240px] w-full object-cover sm:min-h-[280px] lg:absolute lg:inset-0 lg:min-h-full"
                  loading="lazy"
                  decoding="async"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-deep/60 via-brand-deep/15 to-transparent lg:bg-gradient-to-tr lg:from-brand-deep/55 lg:via-transparent lg:to-transparent" />
                <p className="absolute bottom-6 start-6 end-6 text-start text-[15px] font-semibold leading-snug text-white sm:bottom-7 sm:start-7 sm:end-7 md:text-lg lg:bottom-9 lg:start-10 lg:end-10">
                  {t('experienceGallery11')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/75 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            role="presentation"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 220, damping: 24 }}
              className="relative max-h-[90vh] max-w-5xl overflow-hidden rounded-[28px] border border-white/20 bg-black shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={lightbox} alt="" className="max-h-[88vh] w-full object-contain" />
              <button
                type="button"
                className="absolute end-4 top-4 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-brand-deep shadow"
                onClick={() => setLightbox(null)}
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
