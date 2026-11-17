/* ==========================================================
   ANIMACIONES — los elementos aparecen al hacer scroll
   ========================================================== */

// 1. Qué elementos queremos animar (puedes agregar o quitar selectores)
const selectores = [
  ".section-title",
  ".services__lista > li",
  ".projects__lista > li",
  ".pricing__lista > li",
  ".team__lista > li",
  ".about__valor",
  ".contact__tarjeta",
]

// 2. El "observador": avisa cuando un elemento entra en pantalla
const observador = new IntersectionObserver(
  (entradas) => {
    for (let entrada of entradas) {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("visible")
        observador.unobserve(entrada.target) // ya apareció: dejamos de vigilarlo
      }
    }
  },
  { threshold: 0.15 } // se activa cuando se ve el 15% del elemento
)

// 3. Preparamos cada elemento y lo empezamos a vigilar
const prepararElemento = (elemento) => {
  // Posición entre sus hermanos (0, 1, 2...) para aparecer en cascada
  const hermanos = Array.from(elemento.parentElement.children)
  const posicion = hermanos.indexOf(elemento)

  elemento.classList.add("animar")
  elemento.style.transitionDelay = `${posicion * 0.1}s`
  observador.observe(elemento)
}

for (let selector of selectores) {
  const elementos = document.querySelectorAll(selector)

  for (let elemento of elementos) {
    prepararElemento(elemento)
  }
}