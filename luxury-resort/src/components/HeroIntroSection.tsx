import { useState } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import { whatsAppLink } from '../constants/contact'

const HERO_VIDEO_SOURCES = [
  encodeURI('/video/WhatsApp Video 2026-05-05 at 15.08.25.mp4'),
  encodeURI('/video/WhatsApp Video 2026-05-05 at 15.08.26.mp4'),
] as const

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export function HeroIntroSection() {
  const { locale, t } = useLanguage()
  const [videoIndex, setVideoIndex] = useState(0)

  const wa = whatsAppLink(
    locale === 'ar'
      ? 'مرحبًا، أود الاستفسار عن مواعيد استراحة سمار الرياض العمارية.'
      : 'Hello, I would like to inquire about Samar Riyadh Al Ammariyah Rest availability.',
  )

  const stats = [
    { value: '1.2k+', labelKey: 'statVisitors' },
    { value: '24', labelKey: 'statFacilities' },
    { value: '4.9★', labelKey: 'statReviews' },
    { value: '8+', labelKey: 'statYears' },
  ]

  const pillars = [
    { titleKey: 'aboutPrivacy', descKey: 'aboutPrivacyDesc' },
    { titleKey: 'aboutFamily', descKey: 'aboutFamilyDesc' },
    { titleKey: 'aboutLuxury', descKey: 'aboutLuxuryDesc' },
  ]

  return (
    <section id="intro" className="scroll-mt-24 lg:scroll-mt-28">
      <div className="relative isolate min-h-[82vh] overflow-hidden lg:min-h-[85vh]">
        <video
          key={videoIndex}
          className="absolute inset-0 h-full w-full object-cover"
          src={HERO_VIDEO_SOURCES[videoIndex]}
          autoPlay
          muted
          playsInline
          preload="auto"
          poster="/gallery/gallery-01.png"
          aria-hidden
          onEnded={() => setVideoIndex((i) => (i + 1) % HERO_VIDEO_SOURCES.length)}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-deep/88 via-brand-deep/52 to-brand-deep/75" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-brand-beige via-brand-beige/85 to-transparent" />

        <div className="relative mx-auto flex min-h-[82vh] max-w-7xl flex-col justify-end px-4 pb-28 pt-28 lg:min-h-[85vh] lg:pb-36 lg:pt-32 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl space-y-6 text-white"
          >
            <div className="flex flex-wrap items-center gap-3">
              <p
                className={`inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-1.5 font-semibold text-brand-lavender ${
                  locale === 'ar' ? 'text-xs tracking-normal' : 'text-[11px] uppercase tracking-[0.32em]'
                }`}
              >
                {t('introEyebrow')}
              </p>
              <span className="hidden text-xs font-medium text-white/75 sm:inline md:text-sm">{t('introTrustLine')}</span>
            </div>
            <h1
              className={`leading-[1.08] md:text-5xl lg:text-6xl ${locale === 'en' ? 'font-accent-en text-4xl md:text-6xl lg:text-7xl' : 'font-display text-3xl md:text-5xl lg:text-6xl'}`}
            >
              {t('heroTitle')}
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-brand-soft/95 md:text-lg lg:text-xl">
              {t('heroSubtitle')}
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#book"
                className="rounded-full bg-white px-7 py-3 text-center text-sm font-semibold text-brand-deep shadow-xl shadow-brand-deep/25 transition hover:bg-brand-lavender"
              >
                {t('heroBook')}
              </a>
              <a
                href={wa}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/45 bg-white/10 px-7 py-3 text-center text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/18"
              >
                {t('heroWhatsApp')}
              </a>
              <a
                href="#experience"
                className="rounded-full px-5 py-3 text-center text-sm font-semibold text-white/90 underline-offset-4 transition hover:text-white hover:underline"
              >
                {t('heroExplore')}
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative bg-brand-beige pb-16 pt-10 lg:pb-24 lg:pt-14">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65 }}
            className="-mt-16 relative z-10 overflow-hidden rounded-[28px] border border-brand-lavender/45 bg-white shadow-2xl shadow-brand-purple/10 lg:-mt-24 lg:rounded-[36px]"
          >
            <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)]">
              {/* Image above copy on small screens; text leads on large screens */}
              <div className="relative order-1 min-h-[200px] sm:min-h-[240px] lg:order-2 lg:min-h-0">
                <img
                  src="/gallery/gallery-06.png"
                  alt=""
                  className="h-full w-full object-cover sm:max-h-[320px] lg:absolute lg:inset-0 lg:max-h-none"
                  loading="lazy"
                  decoding="async"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-brand-deep/40 via-transparent to-brand-emerald/20 lg:from-brand-deep/35" />
              </div>

              <div className="order-2 flex flex-col gap-10 p-8 sm:p-10 lg:order-1 lg:gap-12 lg:p-14 lg:pb-16">
                <div className="space-y-5 border-b border-brand-lavender/25 pb-10 lg:space-y-6 lg:pb-12">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-purple">{t('aboutLabel')}</p>
                  <h2 className="font-display text-3xl leading-[1.12] text-brand-deep md:text-4xl lg:text-[2.75rem]">
                    {t('aboutTitle')}
                  </h2>
                  <p className="max-w-xl text-base leading-[1.75] text-gray-700 md:text-lg md:leading-[1.8]">
                    {t('aboutLead')}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-4 lg:gap-5">
                  {stats.map((s) => (
                    <div
                      key={s.labelKey}
                      className="flex min-h-[5.5rem] flex-col items-center justify-center rounded-2xl border border-brand-purple/15 bg-white px-2 py-5 text-center shadow-sm sm:min-h-0 lg:py-6"
                    >
                      <p className="font-display text-2xl text-brand-purple lg:text-3xl">{s.value}</p>
                      <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-wide text-gray-600 lg:text-[11px]">
                        {t(s.labelKey)}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="grid gap-4 sm:grid-cols-3 sm:gap-5 lg:gap-6">
                  {pillars.map((p) => (
                    <div
                      key={p.titleKey}
                      className="flex flex-col rounded-2xl border border-brand-lavender/35 bg-brand-soft/80 px-5 py-6 lg:px-6"
                    >
                      <p className="font-semibold text-brand-deep">{t(p.titleKey)}</p>
                      <p className="mt-3 flex-1 text-sm leading-[1.7] text-gray-600 md:text-[15px]">{t(p.descKey)}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mx-auto mt-10 max-w-2xl text-center text-sm text-gray-600 lg:mt-14 lg:hidden"
          >
            {t('introTrustLine')}
          </motion.p>
        </div>
      </div>
    </section>
  )
}
