import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import { MAPS_DIRECTIONS_URL, MAPS_EMBED_SRC } from '../constants/contact'

export function DiscoverSection() {
  const { locale, t } = useLanguage()

  const nearby =
    locale === 'ar'
      ? [
          'واجهة الدرعية الثقافية · ٣٥ د',
          'مطار الملك خالد الدولي · ٤٠ د',
          'بوليفارد الرياض · ٢٥ د',
        ]
      : [
          'Diriyah cultural quarter · 35 min',
          'King Khalid International Airport · 40 min',
          'Riyadh Boulevard · 25 min',
        ]

  const offerCards = [
    { titleKey: 'offerWeddingTitle', descKey: 'offerWeddingDesc', accent: 'from-brand-purple to-brand-deep' },
    { titleKey: 'offerCorporateTitle', descKey: 'offerCorporateDesc', accent: 'from-brand-emerald to-brand-forest' },
    { titleKey: 'offerSeasonTitle', descKey: 'offerSeasonDesc', accent: 'from-brand-deep to-brand-purple' },
  ]

  return (
    <section id="discover" className="scroll-mt-24 border-t border-brand-lavender/35 bg-brand-beige lg:scroll-mt-28">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20 lg:px-8 lg:py-26">
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-purple">{t('discoverEyebrow')}</p>
          <h2 className="mt-5 font-display text-3xl leading-[1.12] text-brand-deep md:text-4xl lg:mt-6 lg:text-[2.65rem]">
            {t('offersTitle')}
          </h2>
          <p className="mt-5 text-base leading-[1.75] text-gray-700 md:text-lg md:leading-[1.8] lg:mt-6">{t('discoverLead')}</p>
        </header>

        <div className="mt-14 grid gap-6 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {offerCards.map((card, idx) => (
            <motion.article
              key={card.titleKey}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              className="relative overflow-hidden rounded-[26px] border border-brand-lavender/40 bg-white shadow-lg"
            >
              <div className={`h-1.5 bg-gradient-to-r rtl:bg-gradient-to-l ${card.accent}`} />
              <div className="space-y-4 p-8 lg:p-9">
                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-brand-purple">{t('offersLabel')}</p>
                <h3 className="font-display text-xl leading-snug text-brand-deep md:text-2xl">{t(card.titleKey)}</h3>
                <p className="text-sm leading-[1.7] text-gray-700 md:text-base md:leading-[1.75]">{t(card.descKey)}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 mx-auto flex max-w-5xl flex-col gap-10 lg:mt-24"
        >
          <div className="space-y-4 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-purple">{t('locationLabel')}</p>
            <h3 className="font-display text-2xl leading-tight text-brand-deep md:text-3xl">{t('locationTitle')}</h3>
            <p className="mx-auto max-w-2xl text-base leading-[1.75] text-gray-700 md:text-lg md:leading-[1.8]">
              {t('locationSubtitle')}
            </p>
          </div>

          <div className="overflow-hidden rounded-[26px] border border-brand-lavender/40 shadow-2xl ring-1 ring-black/5">
            <iframe
              title={t('mapsEmbedTitle')}
              src={MAPS_EMBED_SRC}
              className="h-[300px] w-full sm:h-[340px] lg:h-[400px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 sm:gap-8">
            <div className="rounded-[24px] border border-brand-lavender/45 bg-white p-8 shadow-sm lg:p-9">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-purple">{t('metaDirectionsHelper')}</p>
              <p className="mt-4 text-lg font-semibold leading-[1.6] text-brand-deep md:text-xl">{t('addressLine')}</p>
              <a
                href={MAPS_DIRECTIONS_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex w-full min-h-11 items-center justify-center rounded-full bg-brand-purple px-7 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-brand-purple/25 transition hover:bg-brand-deep sm:w-auto sm:justify-start"
              >
                {t('directionsCta')}
              </a>
            </div>

            <div className="rounded-[24px] border border-brand-lavender/30 bg-brand-soft/60 p-8 lg:p-9">
              <p className="text-sm font-semibold text-brand-deep md:text-base">
                {t('discoverNearbyHeading')}
              </p>
              <ul className="mt-5 space-y-3.5 text-[15px] leading-[1.65] text-gray-700 md:text-base">
                {nearby.map((line) => (
                  <li key={line} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-emerald" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
