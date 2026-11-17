/* ==========================================================
   LLMS.TXT → /llms.txt
   Resumen del sitio para asistentes de inteligencia artificial.
   Se arma solo con los datos de site.js, services.js y proyectos.
   ========================================================== */
import { getCollection } from "astro:content";
import { sitio, menu } from "../data/site.js";
import { servicios } from "../data/services.js";

export const GET = async () => {
  const proyectos = await getCollection("proyectos");

  // 1. Título y descripción
  let texto = `# ${sitio.nombre}\n\n`;
  texto = texto + `> ${sitio.descripcion}\n\n`;

  // 2. Servicios
  texto = texto + `## Servicios\n\n`;
  for (let servicio of servicios) {
    texto = texto + `- ${servicio.titulo}: ${servicio.descripcion}\n`;
  }

  // 3. Páginas principales
  texto = texto + `\n## Páginas\n\n`;
  for (let enlace of menu) {
    texto = texto + `- [${enlace.texto}](${enlace.url})\n`;
  }
  texto = texto + `- [Contacto](/contacto)\n`;

  // 4. Proyectos
  texto = texto + `\n## Proyectos\n\n`;
  for (let proyecto of proyectos) {
    texto = texto + `- [${proyecto.data.titulo}](/proyectos/${proyecto.id}): ${proyecto.data.descripcion}\n`;
  }

  return new Response(texto, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};