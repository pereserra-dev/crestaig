import React from 'react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <img src={logo} alt="Crestaig Logo" className="h-8 w-auto mb-4" />
            <p className="text-sm">Carns i embotits artesans de Sa Pobla</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contacte</h4>
            <p className="text-sm mb-2">Carrer Major, 25</p>
            <p className="text-sm mb-2">Sa Pobla, Mallorca</p>
            <p className="text-sm">+34 971 12 34 56</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Enllaços ràpids</h4>
            <ul className="text-sm space-y-2">
              <li><a href="#inici" className="hover:text-accent transition-colors">Inici</a></li>
              <li><a href="#producte" className="hover:text-accent transition-colors">Producte</a></li>
              <li><a href="#galeria" className="hover:text-accent transition-colors">Galeria</a></li>
              <li><a href="#contacte" className="hover:text-accent transition-colors">Contacte</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Segueix-nos</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent transition-colors">📷 Instagram</a>
              <a href="#" className="hover:text-accent transition-colors">📘 Facebook</a>
            </div>
          </div>
        </div>
        <div className="border-t border-white border-opacity-20 mt-8 pt-8 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Crestaig. Tots els drets reservats.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;