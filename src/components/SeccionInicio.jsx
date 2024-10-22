import imagen from '../assets/pepegrillo.webp'

export default function SeccionInicio() {
  return (
    <section id="inicio" className="section">
    <h2>Inicio</h2>
    <p>Esta es una página de ejemplo con más etiquetas de HTML y CSS para practicar la conversión a React.</p>
    <img src={imagen} width="200px" alt="Ejemplo de imagen"></img>
  </section>

  )
}
