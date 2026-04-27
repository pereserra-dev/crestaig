import React from 'react';
import interiorLocal from '../assets/interior-local.png';

const FeaturedSection = () => {
  return (
    <section className="bg-primary text-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-semibold sm:text-4xl">Tradició i qualitat des de 1950</h2>
            <p className="mt-6 text-base leading-8 text-slate-100 sm:text-lg">
              Des de fa més de setanta anys Crestaig és sinònim de qualitat i confiança a Sa Pobla. La nostra botiga combina la tradició amb una cura premium en cada producte.
            </p>
            <p className="mt-5 text-base leading-8 text-slate-100 sm:text-lg">
              Treballem cada dia per mantenir viu l'esperit artesanal, seleccionant les millors matèries primeres i aplicant tècniques que garanteixen una experiència excepcional.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <div className="overflow-hidden rounded-[32px] bg-slate-900/10 shadow-2xl ring-1 ring-white/10">
              <img src={interiorLocal} alt="Interior Crestaig" className="h-72 w-full object-cover sm:h-96" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
