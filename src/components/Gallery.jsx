import React from 'react';
import entradaLocal from '../assets/entrada-local.png';
import interiorLocal from '../assets/interior-local.png';
import sobrasades from '../assets/sobrassades.png';
import carns from '../assets/carns.png';

const Gallery = () => {
  const images = [
    { src: entradaLocal, alt: 'Façana Crestaig' },
    { src: interiorLocal, alt: 'Interior de la botiga' },
    { src: sobrasades, alt: 'Embotits artesans' },
    { src: carns, alt: 'Carn fresca' },
    { src: entradaLocal, alt: 'Vista exterior' },
    { src: interiorLocal, alt: 'Espai de venda' }
  ];

  return (
    <section id="galeria" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-primary text-center mb-12">Galeria</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <img src={image.src} alt={image.alt} className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;