import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { CONTACT_PHONE_E164, DESIGNER_CREDIT_URL, TEL_LINK, whatsAppLink } from '../constants/contact'

function IconPhone({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
      />
    </svg>
  )
}

function IconWhatsApp({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

const contactCardBase =
  'group relative flex gap-4 rounded-[22px] border p-5 backdrop-blur transition duration-200 focus-visible:outline focus-visible:ring-2 focus-visible:ring-brand-lavender focus-visible:ring-offset-2 focus-visible:ring-offset-brand-deep hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/25'

const iconWrap =
  'flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/12 text-brand-lavender ring-1 ring-white/10 transition group-hover:bg-white/18 group-hover:ring-white/20'

export function Footer() {
  const { locale, t } = useLanguage()
  const year = new Date().getFullYear()

  const phoneDisplay = `0${CONTACT_PHONE_E164.slice(3)}`

  const waBook = whatsAppLink(
    locale === 'ar'
      ? `مرحبًا، أتواصل من الموقع بخصوص حجز استراحة سمار الرياض العمارية.`
      : `Hello — reaching out via the website regarding Samar Riyadh Al Ammariyah Rest bookings.`,
  )

  const formattedTel = `+966 ${CONTACT_PHONE_E164.slice(3, 5)} ${CONTACT_PHONE_E164.slice(5, 8)} ${CONTACT_PHONE_E164.slice(8)}`

  return (
    <footer
      id="book"
      className="relative scroll-mt-24 overflow-hidden border-t border-brand-lavender/30 bg-brand-deep text-white lg:scroll-mt-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(232,213,183,0.22),transparent_52%)]" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="space-y-12 py-16 lg:space-y-14 lg:py-20">
          <div className="text-center lg:text-start">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-lavender">{t('contactLabel')}</p>
            <h2 className="mt-4 font-display text-3xl leading-tight text-white md:text-4xl lg:text-[2.75rem]">
              {t('contactTitle')}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/90 md:text-lg lg:mx-0">
              {t('contactSubtitle')}
            </p>
          </div>

          <div className="rounded-[26px] border border-white/18 bg-white/6 p-1 shadow-inner shadow-black/20 backdrop-blur-sm">
            <div className="grid gap-3 sm:grid-cols-2">
              <a
                href={waBook}
                target="_blank"
                rel="noreferrer"
                className={`${contactCardBase} border-brand-emerald/50 bg-brand-emerald/18 hover:border-brand-emerald/80 hover:bg-brand-emerald/28`}
              >
                <span className={iconWrap}>
                  <IconWhatsApp className="h-6 w-6" />
                </span>
                <div className="min-w-0 flex-1 text-start">
                  <p className="text-lg font-semibold leading-snug text-white">{t('contactWaLead')}</p>
                  <p className="mt-2 text-sm leading-snug text-white/80">{t('contactWaNote')}</p>
                </div>
              </a>
              <a
                href={TEL_LINK}
                aria-label={`${t('phoneSticky')}: ${formattedTel}`}
                className={`${contactCardBase} border-white/28 bg-white/7 hover:border-white/45 hover:bg-white/12`}
              >
                <span className={iconWrap}>
                  <IconPhone className="h-6 w-6" />
                </span>
                <div className="min-w-0 flex-1 text-start">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-lavender">{t('phoneSticky')}</p>
                  <p className="mt-2 font-display text-xl font-medium leading-snug text-white md:text-2xl" dir="ltr">
                    {formattedTel}
                  </p>
                  <p className="mt-2 text-sm text-white/80" dir="ltr">
                    {phoneDisplay}
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 border-t border-white/12 py-9 text-[15px] text-white/75 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
          <p className="leading-relaxed">{t('footerRights').replace('{year}', String(year))}</p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
            <Link
              to="/privacy"
              className="font-medium text-white/88 underline-offset-4 transition hover:text-brand-lavender hover:underline"
            >
              {t('footerPrivacy')}
            </Link>
            <Link
              to="/policies"
              className="font-medium text-white/88 underline-offset-4 transition hover:text-brand-lavender hover:underline"
            >
              {t('footerTerms')}
            </Link>
          </div>
        </div>

        <p className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-1.5 gap-y-1 px-0 pb-12 text-center text-sm text-white/60">
          <span>{t('footerDesignedBy')}</span>
          <span aria-hidden className="text-brand-lavender">
            ♥
          </span>
          <a
            href={DESIGNER_CREDIT_URL}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-white/75 underline-offset-4 transition hover:text-brand-lavender hover:underline"
            aria-label={t('footerDesignerAria')}
          >
            M
          </a>
        </p>
      </div>
    </footer>
  )
}
