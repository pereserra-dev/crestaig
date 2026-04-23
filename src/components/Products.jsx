import React from 'react';
import carns from '../assets/carns.png';
import sobrasades from '../assets/sobrassades.png';

const Products = () => {
  const products = [
    {
      title: 'Carn fresca seleccionada',
      description: 'Les millors peces de carn, seleccionades amb cura per garantir la màxima qualitat i sabor.',
      image: carns
    },
    {
      title: 'Embotits artesans',
      description: 'Elaborats seguint receptes tradicionals mallorquines, amb ingredients locals i processos artesanals.',
      image: sobrasades
    },
    {
      title: 'Sobrassada',
      description: 'La nostra especialitat: sobrassada mallorquina elaborada amb carn de porc local i espècies autèntiques.',
      image: sobrasades
    },
    {
      title: 'Elaborats propis',
      description: 'Una selecció de productes elaborats a la nostra botiga, amb receptes familiars i ingredients frescos.',
      image: carns
    }
  ];

  return (
    <section id="producte" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-primary text-center mb-12">Els nostres productes</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-secondary rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">{product.title}</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;