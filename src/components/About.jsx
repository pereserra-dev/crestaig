import React from 'react';

const About = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-primary mb-8">Qui som</h2>
          <p className="text-lg text-gray-700 mb-6">
            A Crestaig, som una carnisseria artesanal de Sa Pobla dedicada a oferir productes de la màxima qualitat.
            Des de fa generacions, treballem amb cura i passió per seleccionar les millors carns i elaborar embotits
            tradicionals mallorquins.
          </p>
          <p className="text-lg text-gray-700">
            La nostra filosofia es basa en la qualitat, la tradició i el tracte proper als nostres clients.
            Cada producte que oferim és fruit d'un procés artesanal que respecta les tècniques ancestrals
            i utilitza ingredients locals de primera qualitat.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;