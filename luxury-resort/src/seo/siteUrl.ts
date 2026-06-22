/** Default OG / logo asset under `public/` */
export const OG_IMAGE_PATH = '/restor%20logo.svg'

export function getSiteUrl(): string {
  const raw = import.meta.env.VITE_SITE_URL?.trim()
  if (raw && /^https?:\/\//i.test(raw)) {
    return raw.replace(/\/+$/, '')
  }
  if (typeof window !== 'undefined' && window.location?.origin) {
    return window.location.origin.replace(/\/+$/, '')
  }
  return ''
}

export function absoluteUrl(siteUrl: string, pathOrUrl: string): string {
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl
  const base = siteUrl.replace(/\/+$/, '')
  const path = pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`
  return `${base}${path}`
}
