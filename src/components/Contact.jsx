import React from 'react';
import instagramLogo from '../assets/instagram-logo.png';
import facebookLogo from '../assets/facebook-logo.png';
import whatsappLogo from '../assets/whatsapp-logo.png';

const Contact = () => {
  return (
    <section className="bg-cream py-20 sm:py-24">
      <div id="contacte" className="scroll-mt-24 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl bg-primary text-white shadow-2xl shadow-primary/20">
          <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="p-8 sm:p-12 lg:p-16">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Contacte</p>
              <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">Vols encarregar o venir avui?</h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-white/76 sm:text-lg">
                Truca'ns, escriu-nos per WhatsApp o obre la ruta. Tot el que importa queda a un toc.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a href="tel:+34971123456" className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-primary shadow-xl shadow-black/10 transition duration-300 hover:-translate-y-0.5 hover:bg-[#d7ad6d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/75 sm:w-auto">
                  Trucar ara
                </a>
                <a href="https://wa.me/34612345678" className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/25 bg-white/8 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/14 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 sm:w-auto" target="_blank" rel="noreferrer">
                  WhatsApp
                </a>
                <a href="https://www.google.com/maps/place/Crestaig.+Carns+i+embotits+artesans./@39.7701477,3.0210356,159m/data=!3m1!1e3!4m6!3m5!1s0x1297cdfc5ba2c095:0x34408c42984ab64f!8m2!3d39.7703083!4d3.0209361!16s%2Fg%2F1thjq9sm?entry=ttu&g_ep=EgoyMDI2MDQyMC4wIKXMDSoASAFQAw%3D%3D" className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/25 bg-transparent px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 sm:w-auto" target="_blank" rel="noreferrer">
                  Com arribar-hi
                </a>
              </div>
            </div>

            <aside className="border-t border-white/10 bg-white/[0.06] p-8 sm:p-12 lg:border-l lg:border-t-0 lg:p-14">
              <h3 className="text-2xl font-semibold tracking-tight">Crestaig</h3>
              <p className="mt-6 text-sm leading-7 text-white/76">
                Carrer Major, 25<br />Sa Pobla, Mallorca
              </p>
              <p className="mt-4 text-sm leading-7 text-white/76">
                <a href="tel:+34971123456" className="font-semibold text-white transition hover:text-accent">+34 971 12 34 56</a>
              </p>
              <p className="mt-4 text-sm leading-7 text-white/76">Dilluns a dissabte<br />8:00 - 14:00 i 16:00 - 20:00</p>

              <div className="mt-8 flex gap-3">
                <a href="#" aria-label="Instagram" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/8 transition hover:-translate-y-0.5 hover:bg-white/14">
                  <img src={instagramLogo} alt="" className="h-5 w-5 object-contain" loading="lazy" decoding="async" />
                </a>
                <a href="#" aria-label="Facebook" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/8 transition hover:-translate-y-0.5 hover:bg-white/14">
                  <img src={facebookLogo} alt="" className="h-5 w-5 object-contain" loading="lazy" decoding="async" />
                </a>
                <a href="https://wa.me/34612345678" aria-label="WhatsApp" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/8 transition hover:-translate-y-0.5 hover:bg-white/14" target="_blank" rel="noreferrer">
                  <img src={whatsappLogo} alt="" className="h-5 w-5 object-contain" loading="lazy" decoding="async" />
                </a>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
