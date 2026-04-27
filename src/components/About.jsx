import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-secondary py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-primary sm:text-4xl">Qui som</h2>
          <p className="mt-6 text-base leading-8 text-slate-700 sm:text-lg">
            A Crestaig som una carnisseria artesanal de Sa Pobla que ofereix productes de qualitat superior amb una presentació moderna i molt cuidada.
          </p>
          <p className="mt-4 text-base leading-8 text-slate-700 sm:text-lg">
            Treballem amb cura i passió per seleccionar les millors carns i elaborar embotits tradicionals mallorquins. Tot el nostre procés combina tradició, proximitat i una cura exquisida pels detalls.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
