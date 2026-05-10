/** Saudi mobile without leading zero → full international without + */
export const CONTACT_PHONE_E164 = '966507026677'

export function whatsAppLink(prefill: string): string {
  return `https://wa.me/${CONTACT_PHONE_E164}?text=${encodeURIComponent(prefill)}`
}

export const TEL_LINK = `tel:+${CONTACT_PHONE_E164}`

/** Broad-area embed — replace with “Share → Embed” snippet when you pin exact coordinates */
export const MAPS_EMBED_SRC =
  'https://maps.google.com/maps?q=Al+Ammariyah+Riyadh+Saudi+Arabia&t=&z=13&ie=UTF8&iwloc=&output=embed'

export const MAPS_DIRECTIONS_URL =
  'https://www.google.com/maps/dir/?api=1&destination=Al+Ammariyah+Riyadh+Saudi+Arabia'

/** Footer «Designed by M» — replace with portfolio or social URL */
export const DESIGNER_CREDIT_URL = 'https://example.com'
