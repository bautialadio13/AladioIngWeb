import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-secondary/20 to-white">
      <div className="text-center space-y-6 p-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold text-primary"
        >
          Automatización Industrial&nbsp;
          <span className="text-secondary">4.0</span>
        </motion.h1>
        <p className="max-w-xl mx-auto text-xl text-accent font-semibold">
          Más de 25 años de experiencia ayudando a empresas a modernizar y optimizar sus procesos industriales.<br />
          Soluciones confiables, atención personalizada y soporte técnico cercano.
        </p>
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="#contact"
          className="inline-block bg-primary hover:bg-secondary text-white px-6 py-3 rounded-full shadow-lg"
        >
          Contactarse
        </motion.a>
      </div>
    </section>
  );
}
