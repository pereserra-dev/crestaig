import React from 'react';
import entradaLocal from '../assets/entrada-local.png';

const Hero = () => {
  return (
    <section id="inici" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={entradaLocal} alt="Façana Crestaig" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 fade-in">Crestaig</h1>
        <p className="text-xl md:text-2xl mb-8 fade-in">Carns i embotits artesans de Sa Pobla</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a href="#producte" className="bg-accent text-white px-8 py-3 rounded-full text-lg hover:bg-primary transition-colors">Descobreix els nostres productes</a>
          <a href="#contacte" className="border-2 border-white text-white px-8 py-3 rounded-full text-lg hover:bg-white hover:text-primary transition-colors">Contacta'ns</a>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full">Producte artesanal</span>
          <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full">Qualitat premium</span>
          <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full">De Sa Pobla</span>
          <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full">Tracte proper</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;