export default function SeccionContacto() {
  return (
    <section id="contacto" className="section">
    <h2>Contacto</h2>
    <form>
      <label htmlFor="nombre">Nombre:</label>
      <input type="text" id="nombre" name="nombre" placeholder="Tu nombre"></input>
      
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" placeholder="Tu correo electrónico"></input>

      <label htmlFor="mensaje">Mensaje:</label>
      <textarea id="mensaje" name="mensaje" placeholder="Escribe tu mensaje"></textarea>
      
      <input type="submit" value="Enviar"></input>
    </form>
  </section>

  )
}
