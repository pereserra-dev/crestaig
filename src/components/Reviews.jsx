import React from 'react';

const reviews = [
  {
    name: 'Maria Antònia',
    text: 'Embotits amb gust autèntic i una atenció impecable. Sempre hi torn.',
    rating: 5
  },
  {
    name: 'Joan Pere',
    text: 'La meva carnisseria de confiança. Qualitat constant i molt bon criteri.',
    rating: 5
  },
  {
    name: 'Caterina',
    text: 'La sobrassada és excel.lent: equilibrada, intensa i feta amb ofici.',
    rating: 5
  }
];

const Reviews = () => {
  return (
    <section id="ressenyes" className="scroll-mt-28 bg-secondary py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Ressenyes</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-primary sm:text-5xl">Clients que compren amb confiança.</h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-muted lg:ml-auto">
            Una experiència de barri, amb nivell de producte i tracte cuidat.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <article key={review.name} className="rounded-2xl border border-primary/10 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10">
              <div className="flex items-center gap-1 text-base text-accent" aria-label={`${review.rating} de 5 estrelles`}>
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} aria-hidden="true">★</span>
                ))}
              </div>
              <p className="mt-5 text-base leading-8 text-ink">"{review.text}"</p>
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-primary">{review.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
