import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const projects = [
  
  {
    title: 'Tablero Horno Continuo de Pan',
    desc: `• Construcción de tablero de control.
• Programación de variadores.
• Instalación y puesta en marcha en planta.`,
    images: [
      '/images/horno_continuo_1.png',
      '/images/horno_continuo_2.png',
    ],
  },
  {
    title: 'Tablero Horno Rotativo de Pan',
    desc: `• Construcción de tablero de control.
• Programación de PLC y HMI.
• Control y Monitoreo remoto del horno por medio de aplicacion Web.
• Instalación y puesta en marcha en planta.`,

    images: [
      '/images/horno_rotativo_1.jpg',
      '/images/horno_rotativo_2.jpg',
      '/images/horno_rotativo_3.jpg',
    ],
  },
  {
    title: 'Construcción e Instalación de Máquinas para Mosaicos',
    desc: `• Máquina Cortadora Automática de mosaicos.
• Restauración y montaje de pulidora.
• Construcción de dosificador de cementos y granitos.
• Sistema de impresión, transporte y lustrado de baldosas calcáreas.`,
    images: [
      '/images/mosaicos_1.jpg',
      '/images/mosaicos_2.png',
      '/images/mosaicos_3.png',
    ],
  },
  
  {
    title: 'Armadoras Automáticas de Cajas',
    desc: `• Diseño y automatización de máquinas armadoras.
• Mantenimiento preventivo y correctivo de líneas automáticas.`,
    images: [
      '/images/armadora_1.png',
      '/images/armadora_2.png',
    ],
  },
  {
    title: 'Plantas Extrusoras y Extractora de Aceite',
    desc: `• Construcción de tableros de control.
• Programación de PLC.
• Puesta en marcha en planta.`,
    images: [
      '/images/extrusora_1.png',
      '/images/extrusora_2.png',
      '/images/extrusora_3.jpg',
    ],
  },
  {
    title: 'Banco Automático de Capacitores',
    desc: `• Construcción de tablero de manejo de capacitores.
• Programación de regulador de energía reactiva.`,
    images: [
      '/images/capacitores_1.png',
      '/images/capacitores_2.png',
    ],
  },
  {
    title: 'Automatización de Fresadora-Rectificadora',
    desc: `• Construcción de tablero de control.
• Programación de PLC.
• Puesta en marcha en planta.`,
    images: [
      '/images/fresadora_1.png',
      '/images/fresadora_2.png',
      '/images/fresadora_3.png', // ← hasta 10
    ],
  },
  {
    title: 'Diseño y Automatización – Tronzadora de Pack de Madera',
    desc: `• Diseño eléctrico completo.
• Automatización y puesta en marcha de máquina tronzadora.`,
    images: [
      '/images/tronzadora_1.png',
      '/images/tronzadora_2.png',
    ],
  },
];


export default function Projects() {
  const [selected, setSelected] = useState(null);   // proyecto activo
  const [photo, setPhoto] = useState(0);            // índice de foto

  const open = (p) => {
    setSelected(p);
    setPhoto(0);
  };
  const close = () => setSelected(null);

  const next = () =>
    setPhoto((i) => (i + 1) % (selected?.images?.length || 1));
  const prev = () =>
    setPhoto((i) =>
      (i - 1 + (selected?.images?.length || 1)) %
      (selected?.images?.length || 1)
    );

  return (
    <section id="projects" className="py-24 bg-secondary/10">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* ▼ Título más grande y con peso */}
        <h2 className="text-4xl font-bold text-primary mb-14">
          Proyectos Destacados
        </h2>

        {/* grid de cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <figure
              key={i}
              onClick={() => open(p)}
              className="rounded-2xl overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-all"
            >
              <img src={p.images[0]} alt={p.title} className="w-full h-60 object-cover" />
              <figcaption className="py-3 bg-white text-base font-semibold text-primary">
                {p.title}
              </figcaption>
            </figure>
          ))}
        </div>

        {/* ▼ MODAL mejorado */}
        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gradient-to-br from-black/50 via-black/60 to-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={close}
            >
              <motion.div
                className="bg-white rounded-2xl md:flex w-full max-w-5xl shadow-2xl overflow-hidden border border-secondary/20 relative"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* flecha izq */}
                {selected.images.length > 1 && (
                  <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow">
                    <ChevronLeft size={28} />
                  </button>
                )}

                {/* img grande */}
                <div className="md:w-1/2 w-full">
                  <img src={selected.images[photo]} alt="" className="w-full h-full object-cover" />
                </div>

                {/* texto – Mejorado: centra vertical y agranda fuente */}
                  <div className="md:w-1/2 w-full flex flex-col justify-center h-full p-10 bg-secondary/5 rounded-xl">
                    <h3 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center md:text-left">
                      {selected.title}
                    </h3>
                    <p className="whitespace-pre-line text-accent text-lg md:text-xl leading-relaxed mb-10 text-center md:text-left">
                      {selected.desc}
                    </p>
                    {/* thumbnails redondos */}
                    {selected.images.length > 1 && (
                      <div className="flex gap-3 mt-6 justify-center md:justify-start">
                        {selected.images.map((img, idx) => (
                          <img
                            key={idx}
                            src={img}
                            onClick={() => setPhoto(idx)}
                            className={`h-16 w-16 object-cover cursor-pointer rounded-full border-2 ${
                              idx === photo ? 'border-primary' : 'border-transparent opacity-60'
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>


                {/* flecha der */}
                {selected.images.length > 1 && (
                  <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow">
                    <ChevronRight size={28} />
                  </button>
                )}

                {/* cerrar */}
                <button onClick={close} className="absolute top-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full shadow">
                  <X size={24} />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}