import React from 'react';
import carns from '../assets/optimized/carns.jpg';
import sobrasades from '../assets/optimized/sobrassades.jpg';

const products = [
  {
    title: 'Carn fresca',
    description: 'Peces seleccionades cada dia per cuinar amb qualitat i confiança.',
    image: carns
  },
  {
    title: 'Embotits artesans',
    description: 'Receptes mallorquines, curació precisa i sabor profund.',
    image: sobrasades
  },
  {
    title: 'Sobrassada',
    description: 'La nostra especialitat: intensa, equilibrada i feta com toca.',
    image: sobrasades
  },
  {
    title: 'Elaborats propis',
    description: 'Preparats de casa per resoldre el dinar sense renunciar al gust.',
    image: carns
  }
];

const Products = () => {
  return (
    <section id="productes" className="scroll-mt-28 bg-secondary py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Selecció</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-primary sm:text-5xl">Producte honest, presència premium.</h2>
          <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
            Menys promeses, més criteri: carns, embotits i elaborats pensats per menjar bé cada dia.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <article key={product.title} className="group overflow-hidden rounded-2xl border border-primary/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10">
              <div className="aspect-[4/5] overflow-hidden bg-primary/5">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  width="640"
                  height="800"
                  loading={index === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold tracking-tight text-primary">{product.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{product.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
