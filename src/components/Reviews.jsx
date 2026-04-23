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
    <section id="ressenyes" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-primary text-center mb-12">Ressenyes dels nostres clients</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-secondary p-6 rounded-lg shadow-lg">
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-accent text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4">"{review.text}"</p>
              <p className="font-semibold text-primary">- {review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;