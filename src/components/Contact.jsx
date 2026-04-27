import React from 'react';
import instagramLogo from '../assets/instagram-logo.png';
import facebookLogo from '../assets/facebook-logo.png';
import whatsappLogo from '../assets/whatsapp-logo.png';

const Contact = () => {
  return (
    <section id="contacte" className="bg-secondary py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-primary sm:text-4xl">Contacte</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Més a prop de tu amb un apartat de contacte net i directe, pensat per a dispositius mòbils i desktop.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.95fr_0.85fr]">
          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-slate-900">Vine a visitar-nos</h3>
            <p className="mt-6 text-sm leading-7 text-slate-700">
              Carrer Major, 25<br />Sa Pobla, Mallorca
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700">Tel: <a href="tel:+34971123456" className="font-semibold text-primary">+34 971 12 34 56</a></p>
            <p className="mt-4 text-sm leading-7 text-slate-700">Horari: Dilluns a dissabte, 8:00 - 14:00 i 16:00 - 20:00</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href="tel:+34971123456" className="inline-flex w-full items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary sm:w-auto">Truca'ns</a>
              <a href="https://wa.me/34612345678" className="inline-flex w-full items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 sm:w-auto">WhatsApp</a>
              <a href="https://www.google.com/maps/place/Crestaig.+Carns+i+embotits+artesans./@39.7701477,3.0210356,159m/data=!3m1!1e3!4m6!3m5!1s0x1297cdfc5ba2c095:0x34408c42984ab64f!8m2!3d39.7703083!4d3.0209361!16s%2Fg%2F1thjq9sm?entry=ttu&g_ep=EgoyMDI2MDQyMC4wIKXMDSoASAFQAw%3D%3D" className="inline-flex w-full items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 sm:w-auto">Google Maps</a>
            </div>
          </div>

          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-slate-900">Segueix-nos</h3>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <a href="#" className="flex items-center gap-3 rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
                <img src={instagramLogo} alt="Instagram" className="h-5 w-5 object-contain" />
                Instagram
              </a>
              <a href="#" className="flex items-center gap-3 rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
                <img src={facebookLogo} alt="Facebook" className="h-5 w-5 object-contain" />
                Facebook
              </a>
              <a href="https://wa.me/34612345678" className="flex items-center gap-3 rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
                <img src={whatsappLogo} alt="WhatsApp" className="h-5 w-5 object-contain" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
