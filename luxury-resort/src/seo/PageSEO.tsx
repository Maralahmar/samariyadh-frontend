import { useLayoutEffect } from 'react'
import type { Locale } from '../i18n/strings'
import { applyPageMeta } from './domMeta'
import { OG_IMAGE_PATH, absoluteUrl, getSiteUrl } from './siteUrl'

type PageSEOProps = {
  locale: Locale
  title: string
  description: string
  path: string
  keywords?: string
  brandImageAlt: string
}

export function PageSEO({
  locale,
  title,
  description,
  path,
  keywords,
  brandImageAlt,
}: PageSEOProps) {
  useLayoutEffect(() => {
    const siteUrl = getSiteUrl()
    const origin = (siteUrl || window.location.origin).replace(/\/+$/, '')
    const pathname = path.startsWith('/') ? path : `/${path}`
    const canonicalUrl = `${origin}${pathname}`
    const ogUrl = canonicalUrl
    const ogImageUrl = absoluteUrl(origin, OG_IMAGE_PATH)
    const ogLocale = locale === 'ar' ? 'ar_SA' : 'en_US'

    applyPageMeta({
      title,
      description,
      keywords,
      canonicalUrl,
      ogUrl,
      ogImageUrl,
      ogImageAlt: brandImageAlt,
      ogLocale,
    })
  }, [locale, title, description, path, keywords, brandImageAlt])

  return null
}
