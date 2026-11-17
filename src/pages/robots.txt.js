/* ==========================================================
   ROBOTS.TXT → /robots.txt
   Le dice a Google y otros buscadores qué pueden revisar.
   ========================================================== */

export const GET = () => {
  const texto = `User-agent: *
Allow: /
`

  return new Response(texto, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  })
}