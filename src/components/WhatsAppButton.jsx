import React from 'react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/34612345678"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="text-2xl">W</span>
    </a>
  );
};

export default WhatsAppButton;