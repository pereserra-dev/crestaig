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
    <section id="galeria" className="bg-secondary py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-primary sm:text-4xl">Galeria</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Espais i productes cuidats, fotografiats amb estil premium perquè la teva experiència sigui clara i atractiva.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-[28px] bg-white shadow-lg ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-2xl">
              <img src={image.src} alt={image.alt} className="h-64 w-full object-cover transition duration-300 hover:scale-105" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
