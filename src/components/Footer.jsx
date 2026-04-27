import React from 'react';
import logo from '../assets/logo.png';
import instagramLogo from '../assets/instagram-logo.png';
import facebookLogo from '../assets/facebook-logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#102a22] py-12 text-white sm:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <img src={logo} alt="Crestaig" className="mb-4 h-10 w-auto" width="120" height="40" loading="lazy" decoding="async" />
            <p className="text-sm leading-7 text-white/70">Carns i embotits artesans de Sa Pobla</p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Contacte</h4>
            <p className="mb-2 text-sm leading-7 text-white/70">Carrer Major, 25</p>
            <p className="mb-2 text-sm leading-7 text-white/70">Sa Pobla, Mallorca</p>
            <p className="text-sm leading-7 text-white/70">+34 971 12 34 56</p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Enllaços ràpids</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#inici" className="transition hover:text-accent">Inici</a></li>
              <li><a href="#productes" className="transition hover:text-accent">Productes</a></li>
              <li><a href="#historia" className="transition hover:text-accent">Història</a></li>
              <li><a href="#galeria" className="transition hover:text-accent">Galeria</a></li>
              <li><a href="#contacte" className="transition hover:text-accent">Contacte</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Segueix-nos</h4>
            <div className="flex flex-col gap-3 text-sm text-white/70">
              <a href="#" className="flex items-center gap-2 transition hover:text-accent">
                <img src={instagramLogo} alt="" className="h-5 w-5 object-contain" loading="lazy" decoding="async" />
                Instagram
              </a>
              <a href="#" className="flex items-center gap-2 transition hover:text-accent">
                <img src={facebookLogo} alt="" className="h-5 w-5 object-contain" loading="lazy" decoding="async" />
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-8 text-center text-sm text-white/55">
          <p>&copy; {new Date().getFullYear()} Crestaig. Tots els drets reservats.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
