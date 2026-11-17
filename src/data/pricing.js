/* ==========================================================
   PRECIOS
   - moneda: cámbiala aquí y se actualiza en todos los planes.
   - destacado: true → ese plan se resalta como "Más popular".
     Solo uno debería estar destacado.
   ========================================================== */

export const moneda = "S/."

export const planes = [
  {
    nombre: "Básico",
    precio: 300, // ← CAMBIAR
    periodo: "mes",
    descripcion: "Ideal para emprendedores que están empezando en redes.",
    beneficios: [
      "4 videos editados", // ← CAMBIAR todos los beneficios
      "8 diseños para redes",
      "1 revisión por pieza",
      "Soporte por WhatsApp",
    ],
    destacado: false,
  },
  {
    nombre: "Profesional",
    precio: 600,
    periodo: "mes",
    descripcion: "Para marcas que quieren crecer con contenido constante.",
    beneficios: [
      "8 videos editados",
      "15 diseños para redes",
      "1 sesión de grabación",
      "2 revisiones por pieza",
      "Soporte prioritario",
    ],
    destacado: true,
  },
  {
    nombre: "Premium",
    precio: 1000,
    periodo: "mes",
    descripcion: "Solución completa para negocios y creadores de contenido.",
    beneficios: [
      "Videos editados ilimitados",
      "Diseños ilimitados",
      "2 sesiones de grabación",
      "Soporte SRT para tus lives",
      "Revisiones ilimitadas",
    ],
    destacado: false,
  },
]