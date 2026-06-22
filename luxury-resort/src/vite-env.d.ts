/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Production site origin, e.g. https://www.example.com — used for canonical URLs, OG images, and sitemap */
  readonly VITE_SITE_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
