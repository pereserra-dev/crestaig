import React from 'react';
import carns from '../assets/carns.png';
import sobrasades from '../assets/sobrassades.png';

const Products = () => {
  const products = [
    {
      title: 'Carn fresca seleccionada',
      description: 'Les millors peces de carn seleccionades amb cura per garantir la màxima qualitat i sabor.',
      image: carns
    },
    {
      title: 'Embotits artesans',
      description: 'Elaborats seguint receptes mallorquines i ingredients locals per un sabor autèntic.',
      image: sobrasades
    },
    {
      title: 'Sobrassada premium',
      description: 'La nostra especialitat amb carn de porc local i espècies autèntiques.',
      image: sobrasades
    },
    {
      title: 'Elaborats propis',
      description: 'Productes exclusius de la nostra botiga, cuinats amb receptes familiars i ingredients frescos.',
      image: carns
    }
  ];

  return (
    <section id="producte" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-primary sm:text-4xl">Els nostres productes</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Una selecció neta i premium que combina carns fresques i embotits artesans, amb una presentació cuidada per a cada paladar.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <div key={index} className="rounded-[28px] border border-slate-200 bg-slate-50 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <img src={product.image} alt={product.title} className="h-56 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900">{product.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
