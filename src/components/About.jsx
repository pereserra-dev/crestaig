import React from 'react';
import interiorLocal from '../assets/optimized/interior-local.jpg';

const About = () => {
  return (
    <section className="bg-cream py-20 sm:py-24">
      <div id="qui-som" className="scroll-mt-0 mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.92fr_1fr] lg:items-center lg:px-8">
        <div className="overflow-hidden rounded-2xl bg-primary/5 shadow-2xl shadow-primary/10">
          <img
            src={interiorLocal}
            alt="Interior de la botiga Crestaig"
            className="aspect-[4/5] h-full w-full object-cover"
            width="900"
            height="1125"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="max-w-xl lg:ml-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Qui som</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-primary sm:text-5xl">Una carnisseria amb memòria i mirada d'avui.</h2>
          <p className="mt-6 text-base leading-8 text-muted sm:text-lg">
            A Crestaig treballem des de Sa Pobla amb una idea senzilla: que cada producte tengui origen, ofici i gust de veritat.
          </p>
          <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
            Seleccionam bones peces, elaboram embotits tradicionals i cuidam el tracte de mostrador: proper, clar i sense presses.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;