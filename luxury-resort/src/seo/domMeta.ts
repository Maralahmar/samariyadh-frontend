function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${CSS.escape(key)}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${CSS.escape(rel)}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
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

  upsertMeta('property', 'og:title', opts.title)
  upsertMeta('property', 'og:description', opts.description)
  upsertMeta('property', 'og:type', 'website')
  upsertMeta('property', 'og:url', opts.ogUrl)
  upsertMeta('property', 'og:image', opts.ogImageUrl)
  upsertMeta('property', 'og:image:alt', opts.ogImageAlt)
  upsertMeta('property', 'og:locale', opts.ogLocale)

  upsertMeta('name', 'twitter:card', opts.twitterCard ?? 'summary_large_image')
  upsertMeta('name', 'twitter:title', opts.title)
  upsertMeta('name', 'twitter:description', opts.description)
  upsertMeta('name', 'twitter:image', opts.ogImageUrl)
}
