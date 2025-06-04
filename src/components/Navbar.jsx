import { Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed w-full backdrop-blur bg-white/70 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo clickable */}
        <a href="#home" className="flex items-center">
          <img
            src="/images/logo-aladio.png"
            alt="Logo Aladio Ingenierías"
            className="h-16 w-auto"
          />
        </a>
        <ul className="hidden md:flex gap-6 text-sm font-medium">
          <li><a href="#services" className="hover:text-secondary">Servicios</a></li>
          <li><a href="#projects" className="hover:text-secondary">Proyectos</a></li>
          <li><a href="#about"    className="hover:text-secondary">Nosotros</a></li>
          <li><a href="#contact"  className="hover:text-secondary">Contacto</a></li>
        </ul>
        <button className="md:hidden text-primary"><Menu /></button>
      </div>
    </nav>
  );
}
