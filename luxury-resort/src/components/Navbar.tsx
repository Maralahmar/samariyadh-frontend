import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { LuxuryLogo } from './LuxuryLogo'
import { useLanguage } from '../context/LanguageContext'
import { whatsAppLink } from '../constants/contact'

const links = [
  { hash: '#intro', key: 'navAbout' },
  { hash: '#experience', key: 'navExperience' },
  { hash: '#discover', key: 'navDiscover' },
  { hash: '#book', key: 'navBook' },
] as const

export function Navbar() {
  const { locale, setLocale, t } = useLanguage()
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const homePath = pathname === '/' ? '' : '/'

  const bookHref = whatsAppLink(
    locale === 'ar'
      ? 'مرحبًا، أرغب بحجز استراحة سمار الرياض العمارية.'
      : 'Hello, I would like to book Samar Riyadh Al Ammariyah Rest.',
  )

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-40 border-b border-white/40 bg-brand-beige/80 backdrop-blur-xl"
    >
      <div className="relative mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-x-3 gap-y-2 px-4 py-3 md:py-4 lg:gap-x-4 lg:px-8">
        <Link
          to={`${homePath}#intro`}
          className="flex min-w-0 items-center justify-self-start lg:min-w-[10rem]"
          aria-label={t('brandShort')}
        >
          <LuxuryLogo
            className="max-h-[5rem] shrink-0 md:max-h-[5.5rem] lg:max-h-[6rem]"
            alt=""
          />
        </Link>

        <nav
          aria-label="Primary"
          className="pointer-events-none hidden min-w-0 flex-wrap items-center justify-center gap-x-4 gap-y-1 lg:pointer-events-auto lg:flex lg:gap-x-5 xl:gap-x-8"
        >
          {links.map((l) => (
            <a
              key={l.key}
              href={`${homePath}${l.hash}`}
              className="whitespace-nowrap text-sm font-medium tracking-wide text-gray-700 transition hover:text-brand-purple"
            >
              {t(l.key)}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center justify-self-end gap-2 md:gap-3">
          <div
            dir="ltr"
            lang="en"
            className="flex shrink-0 rounded-full border border-brand-lavender/60 bg-white/70 p-1 text-xs font-semibold shadow-sm"
          >
            <button
              type="button"
              onClick={() => setLocale('en')}
              className={`rounded-full px-3 py-1 transition ${locale === 'en' ? 'bg-brand-purple text-white shadow' : 'text-gray-600'}`}
              aria-pressed={locale === 'en'}
              aria-label="English"
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLocale('ar')}
              className={`rounded-full px-3 py-1 transition ${locale === 'ar' ? 'bg-brand-purple text-white shadow' : 'text-gray-600'}`}
              aria-pressed={locale === 'ar'}
              aria-label="العربية"
            >
              عربي
            </button>
          </div>

          <a
            href={bookHref}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-brand-forest px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-brand-forest/30 transition hover:bg-brand-purple md:inline-flex"
          >
            {t('navBook')}
          </a>

          <button
            type="button"
            className="inline-flex rounded-xl border border-brand-purple/30 bg-white p-2 lg:hidden"
            aria-expanded={open}
            aria-label={t('navMenu')}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <svg className="h-6 w-6 text-brand-deep" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-brand-lavender/40 bg-brand-beige/95 px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.key}
                href={`${homePath}${l.hash}`}
                className="rounded-xl px-3 py-2 text-base font-medium text-gray-800 hover:bg-white"
                onClick={() => setOpen(false)}
              >
                {t(l.key)}
              </a>
            ))}
            <a
              href={bookHref}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-brand-forest px-4 py-3 text-center font-semibold text-white hover:bg-brand-purple"
              onClick={() => setOpen(false)}
            >
              {t('navBook')}
            </a>
          </div>
        </div>
      )}
    </motion.header>
  )
}
