import React from 'react';
import whatsappLogo from '../assets/whatsapp-logo.png';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/34612345678"
      aria-label="Contacta Crestaig per WhatsApp"
      title="Contacta per WhatsApp"
      className="fixed bottom-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#22b75a] text-white shadow-xl shadow-slate-900/20 transition duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 md:bottom-6 md:right-6 md:h-14 md:w-14"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={whatsappLogo} alt="WhatsApp" className="h-6 w-6 object-contain" />
    </a>
  );
};

export default WhatsAppButton;
