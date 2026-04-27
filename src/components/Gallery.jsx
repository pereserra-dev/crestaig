import React from 'react';
import entradaLocal from '../assets/optimized/entrada-local.jpg';
import interiorLocal from '../assets/optimized/interior-local.jpg';
import sobrasades from '../assets/optimized/sobrassades.jpg';
import carns from '../assets/optimized/carns.jpg';

const images = [
  { src: entradaLocal, alt: 'Façana Crestaig', className: 'sm:col-span-2 lg:col-span-2' },
  { src: interiorLocal, alt: 'Interior de la botiga' },
  { src: sobrasades, alt: 'Embotits artesans' },
  { src: carns, alt: 'Carn fresca' },
  { src: interiorLocal, alt: 'Espai de venda', className: 'sm:col-span-2' }
];

const Gallery = () => {
  return (
    <section id="galeria" className="scroll-mt-28 bg-primary py-20 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Galeria</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">El producte, sense artifici.</h2>
          <p className="mt-5 text-base leading-8 text-white/72 sm:text-lg">
            Botiga, obrador i productes amb la mateixa exigència: netedat, presència i autenticitat.
          </p>
        </div>

        <div className="mt-12 grid auto-rows-[260px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((image, index) => (
            <figure key={`${image.alt}-${index}`} className={`group overflow-hidden rounded-2xl bg-white/5 shadow-2xl shadow-black/15 ring-1 ring-white/10 ${image.className || ''}`}>
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                width="900"
                height="650"
                loading="lazy"
                decoding="async"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
