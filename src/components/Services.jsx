import { Cpu, PanelLeft, Radio } from 'lucide-react';
import { motion } from 'framer-motion';

const items = [
  {
    icon: <Cpu />,
    title: 'Automatización de Procesos',
    desc: 'Optimizamos y modernizamos máquinas y líneas industriales. Mejora la eficiencia y reduce errores.',
  },
  {
    icon: <PanelLeft />,
    title: 'Programación de PLC & HMI',
    desc: 'Desarrollamos sistemas de control robustos y pantallas intuitivas para manejo sencillo y seguro.',
  },
  {
    icon: <Radio />,
    title: 'Monitoreo Remoto (SCADA / IoT)',
    desc: 'Supervisá tu planta desde cualquier lugar. Alarmas, reportes y control al instante, sin complicaciones.',
  },
];


export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-primary mb-12">Servicios</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((s, i) => (
            <motion.div key={i} whileHover={{y:-6}} className="p-8 rounded-2xl shadow-lg border-t-4 border-secondary bg-secondary/5">
              <div className="text-secondary mb-4 mx-auto w-12 h-12">{s.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-accent text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
