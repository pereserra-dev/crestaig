import React from 'react';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow-lg transition-all duration-300">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Crestaig Logo" className="h-10 w-auto" />
          <span className="ml-2 text-xl font-bold text-primary">Crestaig</span>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#inici" className="text-primary hover:text-accent transition-colors">Inici</a>
          <a href="#producte" className="text-primary hover:text-accent transition-colors">Producte</a>
          <a href="#galeria" className="text-primary hover:text-accent transition-colors">Galeria</a>
          <a href="#ressenyes" className="text-primary hover:text-accent transition-colors">Ressenyes</a>
          <a href="#contacte" className="text-primary hover:text-accent transition-colors">Contacte</a>
        </nav>
        <a href="https://wa.me/34612345678" className="bg-accent text-white px-4 py-2 rounded-full hover:bg-primary transition-colors">
          Contacta'ns
        </a>
      </div>
    </header>
  );
};

export default Header;