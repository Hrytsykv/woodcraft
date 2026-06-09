export default function Testimonials({ t }) {
  const reviews = [
    {
      name: "Martin Novák",
      text: t.review1,
    },
    {
      name: "Jana Svobodová",
      text: t.review2,
    },
    {
      name: "Petr Dvořák",
      text: t.review3,
    },
  ];

  return (
    <section className="bg-[#111111] py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        <p className="uppercase tracking-[0.3em] text-gray-500 text-xs mb-4">
          {t.reviewsBadge}
        </p>

        <h2 className="hero-title text-white text-4xl md:text-5xl mb-20">
          {t.reviewsTitle}
        </h2>

        <div className="grid lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-[#181818] rounded-3xl p-10 border border-white/5"
            >
              <div className="text-[#c9a27c] text-xl mb-6">
                ★★★★★
              </div>

              <p className="text-gray-300 leading-relaxed text-lg mb-8">
                "{review.text}"
              </p>

              <div className="text-white font-medium">
                {review.name}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}