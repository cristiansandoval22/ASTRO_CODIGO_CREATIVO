/* ==========================================================
   ROBOTS.TXT → /robots.txt
   Le dice a Google y otros buscadores qué pueden revisar
   y dónde está el mapa del sitio.
   ========================================================== */

export const GET = ({ site }) => {
  // Arma la dirección completa del mapa usando "site" de astro.config.mjs
  const mapaDelSitio = new URL("sitemap-index.xml", site).href

  const texto = `User-agent: *
Allow: /

Sitemap: ${mapaDelSitio}
`

  return new Response(texto, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  })
}