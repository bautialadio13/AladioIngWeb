export default function ContactForm() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-primary mb-6">Contacto</h2>
        <form
          action="https://formsubmit.co/bautialadio13@gmail.com"
          method="POST"
          className="space-y-4 text-left bg-secondary/10 p-6 rounded-xl shadow-lg"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-secondary"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="E‑mail"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-secondary"
            required
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Mensaje"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-secondary"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-primary hover:bg-secondary text-white px-6 py-3 rounded-full w-full md:w-auto"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}
