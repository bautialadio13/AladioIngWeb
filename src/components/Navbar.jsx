import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#services', label: 'Servicios' },
    { href: '#projects', label: 'Proyectos' },
    { href: '#about', label: 'Nosotros' },
    { href: '#contact', label: 'Contacto' },
  ];

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
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-secondary">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button onClick={() => setOpen(!open)} className="md:hidden text-primary">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <ul className="md:hidden bg-white shadow-inner text-center space-y-2 py-4">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2 hover:text-secondary"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
