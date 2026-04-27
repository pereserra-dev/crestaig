import React from 'react';

const Reviews = () => {
  const reviews = [
    {
      name: 'Maria Antònia',
      text: 'Els millors embotits de Mallorca. Sempre frescos i amb un sabor autèntic. No hi ha comparació!',
      rating: 5
    },
    {
      name: 'Joan Pere',
      text: 'Crestaig és la meva carnisseria de confiança des de fa anys. Qualitat i tracte excepcional.',
      rating: 5
    },
    {
      name: 'Caterina',
      text: 'La sobrassada és increïble. Elaborada amb tradició i passió. Recomanable al 100%.',
      rating: 5
    }
  ];

  return (
    <section id="ressenyes" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-primary sm:text-4xl">Ressenyes dels nostres clients</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Opinions reals que reflecteixen la confiança, la qualitat i el tracte proper de Crestaig.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((review, index) => (
            <article key={index} className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-center gap-2 text-accent text-lg">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-700">"{review.text}"</p>
              <p className="mt-5 font-semibold text-slate-900">- {review.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
