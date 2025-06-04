import { Mail, MapPin, Phone, Search, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-white py-12 text-sm">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        {/* Logo + Empresa */}
        <div className="flex flex-col items-start justify-start gap-8">
          <img src="/images/logo-aladio.png" alt="Logo Aladio" className="h-auto w-auto" />
          
        </div>
        

        {/* Productos o Búsqueda */}
        <div>
          <h4 className="text-white font-semibold mb-4">Servicios</h4>
          <div>
             <p className="text-gray-300 leading-relaxed">
            Con más de 25 años de experiencia, ayudamos a empresas a modernizar y optimizar sus procesos industriales con tecnología confiable, atención personalizada y soporte técnico cercano en cada etapa del proyecto.
          </p>
          </div>
        </div>

        {/* Novedades o Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Proyectos</h4>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-white flex items-center gap-2">
              <ArrowRight size={14} /> Horno Tunel Industrial
            </li>
            <li className="hover:text-white flex items-center gap-2">
              <ArrowRight size={14} /> Planta Extruzado de Soja
            </li>
            <li className="hover:text-white flex items-center gap-2">
              <ArrowRight size={14} /> Bancos de Capacitores
            </li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contacto</h4>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-1" />
              <span>Paraná, Entre Ríos, Argentina</span>
            </li>
            <li className="flex items-start gap-2">
              <Mail size={16} className="mt-1" />
              <span>jbaaladio@gmail.com</span>
            </li>
            <li className="flex items-start gap-2">
              <Phone size={16} className="mt-1" />
              <span>+54 343 4 62 9959</span>
            </li>
          </ul>
        </div>
      </div>

      {/* WhatsApp */}
      <a
        href="https://wa.me/543434629959"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 rounded-full p-3 shadow-lg z-50"
      >
        <img src="/images/whatsapp-icon.png" alt="WhatsApp" className="h-10 w-10" />
      </a>

      {/* Pie */}
      <div className="text-center text-gray-500 text-xs mt-12">
        © {new Date().getFullYear()} Aladio Ingenierías · Todos los derechos reservados.
      </div>
    </footer>
  );
}
