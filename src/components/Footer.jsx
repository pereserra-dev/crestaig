import React from 'react';
import logo from '../assets/logo.png';
import instagramLogo from '../assets/instagram-logo.png';
import facebookLogo from '../assets/facebook-logo.png';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <img src={logo} alt="Crestaig Logo" className="h-10 w-auto mb-4" />
            <p className="text-sm leading-7 text-slate-100">Carns i embotits artesans de Sa Pobla</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-slate-100">Contacte</h4>
            <p className="text-sm leading-7 text-slate-200 mb-2">Carrer Major, 25</p>
            <p className="text-sm leading-7 text-slate-200 mb-2">Sa Pobla, Mallorca</p>
            <p className="text-sm leading-7 text-slate-200">+34 971 12 34 56</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-slate-100">Enllaços ràpids</h4>
            <ul className="space-y-2 text-sm text-slate-200">
              <li><a href="#inici" className="transition hover:text-accent">Inici</a></li>
              <li><a href="#producte" className="transition hover:text-accent">Producte</a></li>
              <li><a href="#galeria" className="transition hover:text-accent">Galeria</a></li>
              <li><a href="#contacte" className="transition hover:text-accent">Contacte</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-slate-100">Segueix-nos</h4>
            <div className="flex flex-col gap-3 text-sm text-slate-200">
              <a href="#" className="flex items-center gap-2 transition hover:text-accent">
                <img src={instagramLogo} alt="Instagram" className="h-5 w-5 object-contain" />
                Instagram
              </a>
              <a href="#" className="flex items-center gap-2 transition hover:text-accent">
                <img src={facebookLogo} alt="Facebook" className="h-5 w-5 object-contain" />
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/20 pt-8 text-center text-sm text-slate-200">
          <p>&copy; {new Date().getFullYear()} Crestaig. Tots els drets reservats.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
