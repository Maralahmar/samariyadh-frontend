import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import { whatsAppLink } from '../constants/contact'

export function WhatsAppFab() {
  const { locale, t } = useLanguage()
  const href = whatsAppLink(
    locale === 'ar'
      ? 'مرحبًا، أود الحجز في استراحة سمار الرياض العمارية.'
      : 'Hello — I would like to book Samar Riyadh Al Ammariyah Rest.',
  )

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0.85, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: 'spring', stiffness: 220 }}
      className="fixed bottom-10 z-[55] hidden h-14 w-14 items-center justify-center rounded-full bg-brand-emerald text-2xl text-white shadow-2xl shadow-brand-emerald/40 md:flex"
      style={{ insetInlineEnd: 'max(1rem, env(safe-area-inset-right))' }}
      aria-label={t('waSticky')}
    >
      <span aria-hidden>💬</span>
    </motion.a>
  )
}
