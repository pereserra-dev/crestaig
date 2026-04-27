import React from 'react';
import entradaLocal from '../assets/entrada-local.png';

const heroBadges = ['Producte artesanal', 'Qualitat premium', 'Tracte proper'];

const Hero = () => {
  return (
    <section id="inici" className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <img src={entradaLocal} alt="Façana Crestaig" className="h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/45 to-slate-950/95" />
      </div>

      <div className="relative mx-auto flex min-h-[72vh] max-w-7xl items-end px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="w-full max-w-3xl text-center sm:text-left">
          <p className="mb-4 inline-flex rounded-full bg-white/10 px-4 py-2 text-[0.68rem] uppercase tracking-[0.3em] text-slate-200 shadow-sm">
            Carns artesanes · Sa Pobla
          </p>

          <h1 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-5xl">
            Descobreix el sabor artesanal amb un toc premium.
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-200/90 sm:text-base">
            Productes carnis de qualitat elaborats amb tradició, ingredients locals i una presentació neta que parla de professionalitat.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-3">
            <a
              href="#producte"
              className="inline-flex w-full items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-accent/25 transition hover:bg-primary sm:w-auto"
            >
              Veure productes
            </a>
            <a
              href="#contacte"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/15 sm:w-auto"
            >
              Contacte ràpid
            </a>
          </div>

          <div className="mt-6 grid gap-3 text-xs sm:grid-cols-2">
            {heroBadges.map((label) => (
              <span key={label} className="rounded-full bg-white/10 px-4 py-3 text-slate-100 ring-1 ring-white/10">
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
