import { useLayoutEffect } from 'react'
import { CONTACT_PHONE_E164 } from '../constants/contact'
import type { Locale } from '../i18n/strings'
import { translations } from '../i18n/strings'
import { OG_IMAGE_PATH, absoluteUrl, getSiteUrl } from './siteUrl'

const SCRIPT_ID = 'json-ld-lodging-business'

/** Coordinates from MAPS_EMBED_SRC in constants/contact.ts */
const GEO_LAT = 24.806739
const GEO_LNG = 46.414611

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
    const arName = translations.ar.brandShort
    const enName = translations.en.brandShort

    const payload = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'LodgingBusiness',
          '@id': `${url}/#lodging`,
          name,
          alternateName: locale === 'ar' ? [enName, arName] : [arName, enName],
          description,
          url,
          telephone: `+${CONTACT_PHONE_E164}`,
          image: [logoUrl],
          geo: {
            '@type': 'GeoCoordinates',
            latitude: GEO_LAT,
            longitude: GEO_LNG,
          },
          address: {
            '@type': 'PostalAddress',
            streetAddress: locale === 'ar' ? 'حي العمارية' : 'Al Ammariyah District',
            addressLocality: locale === 'ar' ? 'الرياض' : 'Riyadh',
            addressRegion: locale === 'ar' ? 'منطقة الرياض' : 'Riyadh Province',
            addressCountry: 'SA',
          },
          areaServed: {
            '@type': 'City',
            name: locale === 'ar' ? 'الرياض' : 'Riyadh',
          },
          knowsLanguage: ['ar', 'en'],
          amenityFeature: [
            {
              '@type': 'LocationFeatureSpecification',
              name: locale === 'ar' ? 'مجلس ضيافة لـ ٥٠ ضيفًا' : 'Majlis hosting up to 50 guests',
              value: true,
            },
            {
              '@type': 'LocationFeatureSpecification',
              name: locale === 'ar' ? 'صالة طعام لـ ٤٠ ضيفًا' : 'Dining hall for 40 guests',
              value: true,
            },
            {
              '@type': 'LocationFeatureSpecification',
              name: locale === 'ar' ? 'مساحات خارجية وحدائق' : 'Outdoor grounds and gardens',
              value: true,
            },
            {
              '@type': 'LocationFeatureSpecification',
              name: locale === 'ar' ? 'مواقف خاصة' : 'Private parking',
              value: true,
            },
            {
              '@type': 'LocationFeatureSpecification',
              name: locale === 'ar' ? 'مطبخ ضيافة متكامل' : 'Full catering kitchen',
              value: true,
            },
          ],
        },
        {
          '@type': 'WebSite',
          '@id': `${url}/#website`,
          name,
          alternateName: locale === 'ar' ? enName : arName,
          url,
          inLanguage: ['ar-SA', 'en-SA'],
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
