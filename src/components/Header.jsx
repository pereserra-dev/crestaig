import React, { useState } from 'react';
import logo from '../assets/logo.png';

const navLinks = [
  { href: '#inici', label: 'Inici' },
  { href: '#producte', label: 'Producte' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#ressenyes', label: 'Ressenyes' },
  { href: '#contacte', label: 'Contacte' }
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#inici" className="flex items-center gap-3">
          <img src={logo} alt="Crestaig Logo" className="h-9 w-auto" />
          <span className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-950">Crestaig</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
          {navLinks.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors duration-200 hover:text-accent">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/34612345678"
            className="hidden sm:inline-flex items-center justify-center rounded-full border border-slate-200 bg-accent px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-primary"
            target="_blank"
            rel="noreferrer"
          >
            Contacte
          </a>

          <button
            type="button"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Tanca menú' : 'Obre menú'}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-sm transition hover:border-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 md:hidden"
          >
            <span className="sr-only">Menú</span>
            <div className="flex h-5 w-5 flex-col justify-between">
              <span className={`block h-0.5 w-5 bg-slate-900 transition-transform duration-300 ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`block h-0.5 w-5 bg-slate-900 transition-opacity duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`block h-0.5 w-5 bg-slate-900 transition-transform duration-300 ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      <div
        className={`absolute inset-x-4 top-full z-40 overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-2xl shadow-slate-900/10 transition-all duration-300 md:hidden ${
          menuOpen ? 'max-h-[480px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col gap-4 px-5 py-5">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={handleLinkClick}
              className="rounded-3xl px-4 py-4 text-base font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://wa.me/34612345678"
            onClick={handleLinkClick}
            className="mt-1 inline-flex w-full items-center justify-center rounded-3xl bg-accent px-4 py-4 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition hover:bg-primary"
            target="_blank"
            rel="noreferrer"
          >
            Contacta'ns
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
