import React from 'react';

const Contact = () => {
  return (
    <section id="contacte" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Contacte</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Vine a visitar-nos</h3>
            <p className="mb-4">Carrer Major, 25<br />Sa Pobla, Mallorca</p>
            <p className="mb-4">Tel: +34 971 12 34 56</p>
            <p className="mb-6">Horari: Dilluns a dissabte, 8:00 - 14:00 i 16:00 - 20:00</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+34971123456" className="bg-accent text-white px-6 py-3 rounded-full text-center hover:bg-secondary hover:text-primary transition-colors">
                Truca'ns
              </a>
              <a href="https://wa.me/34612345678" className="bg-secondary text-primary px-6 py-3 rounded-full text-center hover:bg-white transition-colors">
                WhatsApp
              </a>
              <a href="https://www.google.com/maps/place/Crestaig.+Carns+i+embotits+artesans./@39.7701477,3.0210356,159m/data=!3m1!1e3!4m6!3m5!1s0x1297cdfc5ba2c095:0x34408c42984ab64f!8m2!3d39.7703083!4d3.0209361!16s%2Fg%2F1thjq9sm?entry=ttu&g_ep=EgoyMDI2MDQyMC4wIKXMDSoASAFQAw%3D%3D" className="bg-secondary text-primary px-6 py-3 rounded-full text-center hover:bg-white transition-colors">
                Google Maps
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6">Segueix-nos</h3>
            <div className="flex space-x-4">
              <a href="#" className="bg-secondary text-primary p-3 rounded-full hover:bg-white transition-colors">
                <span className="text-xl">📷</span> Instagram
              </a>
              <a href="#" className="bg-secondary text-primary p-3 rounded-full hover:bg-white transition-colors">
                <span className="text-xl">📘</span> Facebook
              </a>
              <a href="https://wa.me/34612345678" className="bg-secondary text-primary p-3 rounded-full hover:bg-white transition-colors">
                <span className="text-xl">💬</span> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;