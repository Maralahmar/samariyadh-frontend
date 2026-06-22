function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${CSS.escape(key)}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel: string, href: string, extra?: Record<string, string>) {
  const extraKey = extra ? Object.entries(extra).map(([k, v]) => `[${k}="${CSS.escape(v)}"]`).join('') : ''
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${CSS.escape(rel)}"]${extraKey}`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    if (extra) {
      for (const [k, v] of Object.entries(extra)) el.setAttribute(k, v)
    }
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

function syncHreflang(canonicalUrl: string) {
  document.head.querySelectorAll('link[rel="alternate"][hreflang]').forEach((el) => el.remove())

  for (const hreflang of ['ar-SA', 'en-SA', 'x-default']) {
    const link = document.createElement('link')
    link.setAttribute('rel', 'alternate')
    link.setAttribute('hreflang', hreflang)
    link.setAttribute('href', canonicalUrl)
    document.head.appendChild(link)
  }
}

export function applyPageMeta(opts: {
  title: string
  description: string
  keywords?: string
  canonicalUrl: string
  ogUrl: string
  ogImageUrl: string
  ogImageAlt: string
  ogLocale: string
  ogLocaleAlternate?: string
  ogSiteName?: string
  twitterCard?: 'summary' | 'summary_large_image'
}) {
  document.title = opts.title

  upsertMeta('name', 'description', opts.description)

  const existingKw = document.head.querySelector('meta[name="keywords"]')
  if (opts.keywords) {
    upsertMeta('name', 'keywords', opts.keywords)
  } else if (existingKw) {
    existingKw.remove()
  }

  upsertLink('canonical', opts.canonicalUrl)
  syncHreflang(opts.canonicalUrl)

  upsertMeta('property', 'og:title', opts.title)
  upsertMeta('property', 'og:description', opts.description)
  upsertMeta('property', 'og:type', 'website')
  upsertMeta('property', 'og:url', opts.ogUrl)
  upsertMeta('property', 'og:image', opts.ogImageUrl)
  upsertMeta('property', 'og:image:alt', opts.ogImageAlt)
  upsertMeta('property', 'og:locale', opts.ogLocale)

  const existingAlt = document.head.querySelector('meta[property="og:locale:alternate"]')
  if (opts.ogLocaleAlternate) {
    upsertMeta('property', 'og:locale:alternate', opts.ogLocaleAlternate)
  } else if (existingAlt) {
    existingAlt.remove()
  }

  if (opts.ogSiteName) {
    upsertMeta('property', 'og:site_name', opts.ogSiteName)
  }

  upsertMeta('name', 'twitter:card', opts.twitterCard ?? 'summary_large_image')
  upsertMeta('name', 'twitter:title', opts.title)
  upsertMeta('name', 'twitter:description', opts.description)
  upsertMeta('name', 'twitter:image', opts.ogImageUrl)
}
