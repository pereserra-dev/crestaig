import React from 'react';
import interiorLocal from '../assets/interior-local.png';

const FeaturedSection = () => {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img src={interiorLocal} alt="Interior Crestaig" className="w-full rounded-lg shadow-2xl" />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-6">Tradició i qualitat des de 1950</h2>
            <p className="text-lg mb-6">
              Des de fa més de setanta anys, Crestaig és sinònim de qualitat i confiança a Sa Pobla.
              La nostra botiga és un espai on la tradició es combina amb la passió per oferir el millor
              producte als nostres clients.
            </p>
            <p className="text-lg">
              Cada dia, treballem per mantenir viu l'esperit artesanal que ens caracteritza,
              seleccionant les millors matèries primeres i aplicant tècniques tradicionals
              que garanteixen un producte excepcional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;