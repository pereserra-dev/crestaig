import React from 'react';
import entradaLocal from '../assets/optimized/entrada-local.jpg';

const Hero = () => {
  return (
    <section id="inici" className="relative isolate min-h-[100svh] scroll-mt-28 overflow-hidden bg-primary text-white">
      <div className="absolute inset-0">
        <img
          src={entradaLocal}
          alt="Façana de Crestaig a Sa Pobla"
          className="h-full w-full object-cover object-center"
          width="1600"
          height="1200"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,32,25,0.94)_0%,rgba(12,32,25,0.82)_34%,rgba(12,32,25,0.38)_66%,rgba(12,32,25,0.08)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_48%,rgba(12,32,25,0.82)_0%,rgba(12,32,25,0.58)_28%,transparent_56%)]" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-primary/70 to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl items-center px-5 pb-14 pt-28 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <p className="reveal-up mb-6 text-xs font-semibold uppercase tracking-[0.34em] text-accent">
            Carns i embotits artesans · Sa Pobla
          </p>

          <h1 className="reveal-up-delay max-w-4xl text-5xl font-semibold leading-[0.98] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            Carns i embotits artesans amb gust de veritat.
          </h1>

          <p className="reveal-up-delay mt-6 max-w-2xl text-base leading-8 text-white/88 sm:text-xl">
            Producte propi, proximitat i ofici de mostrador.
          </p>

          <div className="reveal-up-delay mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="tel:+34971123456"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-accent px-7 py-3 text-sm font-semibold text-primary shadow-2xl shadow-black/20 transition duration-300 hover:-translate-y-0.5 hover:bg-[#d7ad6d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/75 sm:w-auto"
            >
              Trucar ara
            </a>
            <a
              href="#productes"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/45 bg-white/12 px-7 py-3 text-sm font-semibold text-white shadow-xl shadow-black/10 transition duration-300 hover:-translate-y-0.5 hover:bg-white/18 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 sm:w-auto"
            >
              Veure productes
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
