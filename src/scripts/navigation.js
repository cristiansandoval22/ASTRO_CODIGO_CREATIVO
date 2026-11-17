/* ==========================================================
   NAVEGACIÓN — abre y cierra el menú en móvil
   ========================================================== */

// 1. Buscamos los elementos en la página
const botonMenu = document.querySelector(".header__boton-menu")
const menu = document.querySelector(".header__nav")
const enlaces = document.querySelectorAll(".header__nav a")

// 2. Funciones
const abrirMenu = () => {
  menu.classList.add("is-abierto")
  botonMenu.setAttribute("aria-expanded", "true")
  botonMenu.setAttribute("aria-label", "Cerrar menú")
}

const cerrarMenu = () => {
  menu.classList.remove("is-abierto")
  botonMenu.setAttribute("aria-expanded", "false")
  botonMenu.setAttribute("aria-label", "Abrir menú")
}

const alternarMenu = () => {
  const estaAbierto = menu.classList.contains("is-abierto")

  if (estaAbierto) {
    cerrarMenu()
  } else {
    abrirMenu()
  }
}

// 3. Eventos: qué hacer cuando la persona interactúa

// Clic en la hamburguesa → abre o cierra
botonMenu.addEventListener("click", alternarMenu)

// Clic en cualquier enlace del menú → se cierra
for (let enlace of enlaces) {
  enlace.addEventListener("click", cerrarMenu)
}

// Tecla Escape → se cierra (accesibilidad con teclado)
document.addEventListener("keydown", (evento) => {
  if (evento.key === "Escape") {
    cerrarMenu()
  }
})