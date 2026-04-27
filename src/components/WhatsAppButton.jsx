import React from 'react';
import whatsappLogo from '../assets/whatsapp-logo.png';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/34612345678"
      aria-label="Contacta Crestaig per WhatsApp"
      title="Contacta per WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#22b75a] text-white shadow-2xl shadow-primary/25 ring-1 ring-white/20 transition duration-300 hover:-translate-y-1 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 md:bottom-7 md:right-7 md:h-16 md:w-16"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={whatsappLogo} alt="" className="h-7 w-7 object-contain" width="28" height="28" />
    </a>
  );
};

export default WhatsAppButton;
