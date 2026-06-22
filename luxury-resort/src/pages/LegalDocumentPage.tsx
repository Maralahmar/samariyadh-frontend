import { Link } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { WhatsAppFab } from '../components/WhatsAppFab'
import { MobileDock } from '../components/MobileDock'
import { useLanguage } from '../context/LanguageContext'
import { privacyPolicy, resortPolicies, type LegalDocument } from '../i18n/legalContent'
import { PageSEO } from '../seo/PageSEO'

const LEGAL_LAST_UPDATED = new Date(2026, 4, 5)

function formatLegalDate(locale: 'en' | 'ar'): string {
  return LEGAL_LAST_UPDATED.toLocaleDateString(locale === 'ar' ? 'ar-SA' : 'en-SA', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

function LegalBody({ doc }: { doc: LegalDocument }) {
  return (
    <article className="prose prose-neutral prose-lg max-w-none text-brand-deep prose-headings:font-display prose-headings:text-brand-deep prose-p:text-brand-deep/90 prose-p:leading-relaxed">
      <p className="text-base leading-relaxed text-brand-deep/85 md:text-lg">{doc.intro}</p>
      <div className="mt-10 space-y-10">
        {doc.sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-2xl font-medium tracking-tight text-brand-deep md:text-[1.65rem]">{section.title}</h2>
            <div className="mt-4 space-y-4">
              {section.paragraphs.map((p, idx) => (
                <p key={idx} className="text-[15px] leading-[1.75] md:text-base">
                  {p}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </article>
  )
}

type Variant = 'privacy' | 'policies'

export function LegalDocumentPage({ variant }: { variant: Variant }) {
  const { locale, t } = useLanguage()
  const doc = variant === 'privacy' ? privacyPolicy[locale] : resortPolicies[locale]
  const updated = t('legalUpdated').replace('{date}', formatLegalDate(locale))
  const path = variant === 'privacy' ? '/privacy' : '/policies'
  const seoTitle =
    variant === 'privacy'
      ? `${t('seoPrivacyTitle')} · ${t('brandShort')}`
      : `${t('seoPoliciesTitle')} · ${t('brandShort')}`
  const seoDescription =
    variant === 'privacy' ? t('seoPrivacyDescription') : t('seoPoliciesDescription')

  return (
    <>
      <PageSEO
        locale={locale}
        title={seoTitle}
        description={seoDescription}
        path={path}
        brandImageAlt={t('brandShort')}
        siteName={t('brandShort')}
      />
      <Navbar />
      <main className="min-h-svh bg-brand-beige pb-28 md:pb-16">
        <div className="mx-auto max-w-3xl px-4 py-10 lg:px-8 lg:py-14">
          <Link
            to="/"
            className="inline-flex text-sm font-semibold text-brand-forest underline decoration-brand-lavender/60 underline-offset-4 transition hover:text-brand-purple hover:decoration-brand-purple"
          >
            {t('legalBackHome')}
          </Link>
          <header className="mt-8 border-b border-brand-lavender/40 pb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-purple">{t('brandShort')}</p>
            <h1 className="mt-4 font-display text-3xl leading-tight text-brand-deep md:text-4xl">{doc.pageTitle}</h1>
            <p className="mt-3 text-sm text-brand-deep/70">{updated}</p>
          </header>
          <div className="pt-10">
            <LegalBody doc={doc} />
          </div>
        </div>
        <Footer />
      </main>
      <WhatsAppFab />
      <MobileDock />
    </>
  )
}
