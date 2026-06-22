import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const siteUrl = (env.VITE_SITE_URL || '').trim().replace(/\/+$/, '')
  const ogImage = siteUrl ? `${siteUrl}/restor%20logo.svg` : ''

  return {
    base: '/',
    plugins: [
      react({
        babel: {
          plugins: [['@locator/babel-jsx', { env: 'development' }]],
        },
      }),
      tailwindcss(),
      {
        name: 'inject-build-seo',
        transformIndexHtml(html) {
          if (!siteUrl) return html

          const canonical = `${siteUrl}/`
          const hreflang = ['ar-SA', 'en-SA', 'x-default']
            .map(
              (lang) =>
                `    <link rel="alternate" hreflang="${lang}" href="${canonical}" />`,
            )
            .join('\n')

          return html.replace(
            '</head>',
            `${hreflang}
    <link rel="canonical" href="${canonical}" />
    <meta property="og:url" content="${canonical}" />
    <meta name="twitter:card" content="summary_large_image" />${
      ogImage
        ? `
    <meta property="og:image" content="${ogImage}" />
    <meta property="og:image:alt" content="استراحة سمار الرياض العمارية" />
    <meta name="twitter:image" content="${ogImage}" />`
        : ''
    }
  </head>`,
          )
        },
      },
      {
        name: 'emit-robots-sitemap',
        closeBundle() {
          const distDir = path.resolve(__dirname, 'dist')
          if (!fs.existsSync(distDir)) return

          const robots = siteUrl
            ? `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`
            : `User-agent: *\nAllow: /\n`

          fs.writeFileSync(path.join(distDir, 'robots.txt'), robots)

          if (!siteUrl) return

          const paths = [
            { loc: `${siteUrl}/`, changefreq: 'weekly', priority: '1.0' },
            { loc: `${siteUrl}/privacy`, changefreq: 'monthly', priority: '0.5' },
            { loc: `${siteUrl}/policies`, changefreq: 'monthly', priority: '0.5' },
          ]

          const body = paths
            .map(
              (p) =>
                `  <url>\n    <loc>${p.loc}</loc>\n    <changefreq>${p.changefreq}</changefreq>\n    <priority>${p.priority}</priority>\n  </url>`,
            )
            .join('\n')

          const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`
          fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap)
        },
      },
    ],
  }
})
