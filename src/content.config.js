/* ==========================================================
   CONFIGURACIÓN DE CONTENIDO
   Define qué datos debe tener cada proyecto (.md).
   ========================================================== */
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const proyectos = defineCollection({
  // Dónde están los archivos: todos los .md de esta carpeta
  loader: glob({ pattern: "**/*.md", base: "./src/content/proyectos" }),

  // Qué datos debe tener cada proyecto
  schema: ({ image }) =>
    z.object({
      titulo: z.string(),
      descripcion: z.string(),
      fecha: z.coerce.date(),
      categoria: z.string(),
      portada: image().optional(), // opcional: si no hay, se muestra el isotipo
      enlace: z.string().optional(), // opcional: link a la web real
      destacado: z.boolean().default(false), // true = aparece en el Inicio
    }),
});

export const collections = { proyectos };