/* ==========================================================
   INFORMACIÓN GENERAL DEL SITIO
   Edita aquí los datos de la agencia. Todo el sitio los lee
   desde este archivo, así no tienes que buscarlos en el código.
   ========================================================== */

export const sitio = {
  nombre: "Código Creativo",
  slogan: "Soluciones creativas para un mundo digital",
  descripcion:
    "Agencia de marketing digital: edición de video, diseño gráfico, grabación de contenido y soporte SRT para streamers.",
}

/* Enlaces del menú principal.*/
export const menu = [
  { texto: "Inicio", url: "/" },
  { texto: "Nosotros", url: "/nosotros" },
  { texto: "Servicios", url: "/servicios" },
  { texto: "Proyectos", url: "/proyectos" },
]

/* Datos de contacto.
   WhatsApp: código de país + número, SIN "+", espacios ni guiones.
   Ejemplo Perú: "51987654321" */
export const contacto = {
  whatsapp: "51944584827",
  mensaje: "Hola, vengo de su página web y me gustaría más información.",
}

/* Arma el enlace de WhatsApp con un mensaje ya escrito.*/
export const crearEnlaceWhatsapp = (mensaje = contacto.mensaje) =>
  `https://wa.me/${contacto.whatsapp}?text=${encodeURIComponent(mensaje)

}`


/* Redes sociales.*/
export const redes = [
  { nombre: "Instagram", url: "https://www.instagram.com/" }, // ← CAMBIAR
  { nombre: "TikTok", url: "https://www.tiktok.com/" }, // ← CAMBIAR
  { nombre: "Facebook", url: "https://www.facebook.com/" }, // ← CAMBIAR
  { nombre: "YouTube", url: "https://www.youtube.com/" }, // ← CAMBIAR
]


/* Textos de la portada (Hero) de la página de inicio */
export const hero = {
  etiqueta: "Agencia de marketing digital",
  titulo: "Creamos contenido que",
  destacado: "conecta y vende",
  descripcion:
    "Edición de video, diseño gráfico, grabación de contenido y soporte SRT para tus transmisiones en vivo. Hacemos que tu marca destaque en el mundo digital.",
  botonPrincipal: "Cotiza tu proyecto",
  botonSecundario: "Ver proyectos",
}


/* Textos de la sección Nosotros */
export const nosotros = {
  etiqueta: "Nosotros",
  titulo: "Somos Código Creativo",
  parrafos: [
    "Somos una agencia de marketing digital que une creatividad y tecnología para ayudar a marcas, emprendedores y creadores de contenido a destacar en internet.",
    "Nos especializamos en edición de video, diseño gráfico, grabación de contenido y soporte técnico para transmisiones en vivo. Cada proyecto lo trabajamos como si fuera nuestro.",
  ],
  valores: [
    { titulo: "Creatividad", descripcion: "Ideas frescas para que tu marca no pase desapercibida." },
    { titulo: "Compromiso", descripcion: "Cumplimos tiempos y cuidamos cada detalle." },
    { titulo: "Resultados", descripcion: "Contenido pensado para conectar y vender." },
  ],
}