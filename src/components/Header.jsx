import React, { useState } from 'react';
import logo from '../assets/logo.png';

const navLinks = [
  { href: '#inici', label: 'Inici' },
  { href: '#productes', label: 'Productes' },
  { href: '#historia', label: 'Història' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#contacte', label: 'Contacte' }
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-primary/10 bg-white text-primary shadow-[0_10px_30px_rgba(23,63,49,0.08)]">
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-4 px-5 sm:px-6 lg:px-8">
        <a href="#inici" onClick={closeMenu} className="flex items-center gap-3" aria-label="Crestaig inici">
          <img src={logo} alt="Crestaig" className="h-11 w-auto" width="120" height="44" />
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">Crestaig</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-semibold text-primary md:flex" aria-label="Navegació principal">
          {navLinks.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors duration-200 hover:text-accent">
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Tanca menú' : 'Obre menú'}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary/15 bg-white text-primary shadow-sm transition hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 md:hidden"
        >
          <span className="sr-only">Menú</span>
          <div className="flex h-5 w-5 flex-col justify-between">
            <span className={`block h-0.5 w-5 bg-primary transition-transform duration-300 ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block h-0.5 w-5 bg-primary transition-opacity duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`block h-0.5 w-5 bg-primary transition-transform duration-300 ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
          </div>
        </button>
      </div>

      <div
        className={`absolute inset-x-4 top-full z-40 mt-2 overflow-hidden rounded-2xl border border-primary/10 bg-white shadow-2xl shadow-primary/15 transition-all duration-300 md:hidden ${
          menuOpen ? 'max-h-[520px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col gap-2 px-3 py-3" aria-label="Navegació mòbil">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="rounded-xl px-4 py-4 text-base font-semibold text-primary transition hover:bg-primary/5"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
