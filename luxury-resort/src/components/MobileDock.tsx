import { useLanguage } from '../context/LanguageContext'
import { TEL_LINK, whatsAppLink } from '../constants/contact'

export function MobileDock() {
  const { locale, t } = useLanguage()

  const wa = whatsAppLink(
    locale === 'ar'
      ? 'مرحبًا، أتواصل للاستفسار عن الحجز.'
      : 'Hello — inquiry about Samar Riyadh Al Ammariyah Rest bookings.',
  )

  return (
    <div className="fixed bottom-0 start-0 end-0 z-50 border-t border-brand-lavender/40 bg-white/95 px-3 py-3 backdrop-blur md:hidden pb-[max(0.75rem,env(safe-area-inset-bottom))]">
      <div className="mx-auto flex max-w-lg items-center justify-between gap-2 text-sm font-semibold text-brand-deep">
        <a href={TEL_LINK} className="flex flex-1 flex-col items-center rounded-2xl bg-brand-soft px-2 py-2 text-center">
          <span aria-hidden>📞</span>
          {t('phoneSticky')}
        </a>
        <a
          href={wa}
          target="_blank"
          rel="noreferrer"
          className="flex flex-[1.2] flex-col items-center rounded-2xl bg-brand-emerald px-2 py-2 text-center text-white shadow-lg"
        >
          <span aria-hidden>💬</span>
          {t('waSticky')}
        </a>
        <a href="#book" className="flex flex-1 flex-col items-center rounded-2xl bg-brand-soft px-2 py-2 text-center">
          <span aria-hidden>📅</span>
          {t('bookSticky')}
        </a>
      </div>
    </div>
  )
}
