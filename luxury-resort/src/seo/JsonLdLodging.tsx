import { useLayoutEffect } from 'react'
import { CONTACT_PHONE_E164 } from '../constants/contact'
import type { Locale } from '../i18n/strings'
import { OG_IMAGE_PATH, absoluteUrl, getSiteUrl } from './siteUrl'

const SCRIPT_ID = 'json-ld-lodging-business'

type JsonLdLodgingProps = {
  locale: Locale
  name: string
  description: string
}

export function JsonLdLodging({ locale, name, description }: JsonLdLodgingProps) {
  useLayoutEffect(() => {
    const siteUrl = getSiteUrl()
    const url = siteUrl || window.location.origin
    const logoUrl = absoluteUrl(url, OG_IMAGE_PATH)

    const payload = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'LodgingBusiness',
          '@id': `${url}/#lodging`,
          name,
          description,
          url,
          telephone: `+${CONTACT_PHONE_E164}`,
          image: [logoUrl],
          address: {
            '@type': 'PostalAddress',
            streetAddress: locale === 'ar' ? 'حي العمارية' : 'Al Ammariyah District',
            addressLocality: locale === 'ar' ? 'الرياض' : 'Riyadh',
            addressRegion: locale === 'ar' ? 'منطقة الرياض' : 'Riyadh Province',
            addressCountry: 'SA',
          },
          amenityFeature: [
            {
              '@type': 'LocationFeatureSpecification',
              name: locale === 'ar' ? 'مجلس ضيافة' : 'Majlis hosting',
              value: true,
            },
            {
              '@type': 'LocationFeatureSpecification',
              name: locale === 'ar' ? 'صالة طعام' : 'Dining hall',
              value: true,
            },
            {
              '@type': 'LocationFeatureSpecification',
              name: locale === 'ar' ? 'مساحات خارجية' : 'Outdoor grounds',
              value: true,
            },
            {
              '@type': 'LocationFeatureSpecification',
              name: locale === 'ar' ? 'مواقف خاصة' : 'Private parking',
              value: true,
            },
          ],
        },
        {
          '@type': 'WebSite',
          '@id': `${url}/#website`,
          name,
          url,
          inLanguage: locale === 'ar' ? 'ar-SA' : 'en-SA',
          publisher: { '@id': `${url}/#lodging` },
        },
      ],
    }

    let script = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null
    if (!script) {
      script = document.createElement('script')
      script.type = 'application/ld+json'
      script.id = SCRIPT_ID
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(payload)

    return () => {
      script?.remove()
    }
  }, [locale, name, description])

  return null
}
