/** Saudi mobile without leading zero → full international without + */
export const CONTACT_PHONE_E164 = '966507026677'

export function whatsAppLink(prefill: string): string {
  return `https://wa.me/${CONTACT_PHONE_E164}?text=${encodeURIComponent(prefill)}`
}

export const TEL_LINK = `tel:+${CONTACT_PHONE_E164}`

/** Pinned location from Google Maps share link */
export const MAPS_PLACE_URL = 'https://maps.app.goo.gl/WbyRgB4dRaGkXLdH6?g_st=aw'

/** Embed uses coordinates from MAPS_PLACE_URL (short links do not work in iframes) */
export const MAPS_EMBED_SRC =
  'https://www.google.com/maps?q=24.806739,46.414611&z=17&output=embed'

export const MAPS_DIRECTIONS_URL = MAPS_PLACE_URL

/** Footer «Designed by M» — replace with portfolio or social URL */
export const DESIGNER_CREDIT_URL = 'https://github.com/Maralahmar'
