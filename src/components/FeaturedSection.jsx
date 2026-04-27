import React from 'react';
import interiorLocal from '../assets/optimized/interior-local.jpg';

const FeaturedSection = () => {
  return (
    <section className="scroll-mt-28 bg-primary py-20 text-white sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Des de 1950</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Tradició, ofici i qualitat constant.</h2>
          <p className="mt-6 text-base leading-8 text-white/75 sm:text-lg">
            Més de setanta anys de mostrador, selecció i elaboració pròpia. La nostra feina és mantenir viu el sabor de sempre amb una presentació més neta, actual i precisa.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl bg-white/5 shadow-2xl shadow-black/15 ring-1 ring-white/10">
          <img
            src={interiorLocal}
            alt="Interior Crestaig"
            className="aspect-[4/3] h-full w-full object-cover"
            width="960"
            height="720"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
