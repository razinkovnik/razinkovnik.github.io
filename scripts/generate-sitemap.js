// scripts/generate-sitemap.js
import { writeFileSync } from 'fs'

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://ваш-сайт.com/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`

writeFileSync('./dist/sitemap.xml', sitemap)
console.log('Sitemap generated successfully!')