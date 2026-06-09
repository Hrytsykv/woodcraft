import { useState } from "react";

export default function Works({ t }) {
  const [showGallery, setShowGallery] = useState(false);

  const works = [
    {
      title: t.kitchens,
      image: "/images/kitchen.png",
    },
    {
      title: t.stairs,
      image: "/images/stairs.png",
    },
    {
      title: t.tables,
      image: "/images/table.png",
    },
    {
      title: t.wardrobes,
      image: "/images/wardrobe.png",
    },
  ];

  return (
    <section
      id="works"
      className="bg-[#080808] py-20 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-12 md:mb-16">

          <div>
            <p className="uppercase tracking-[0.3em] text-[#c9a27c] text-xs mb-4">
              {t.worksBadge}
            </p>

            <h2 className="text-white text-4xl md:text-6xl hero-title">
              {t.worksTitle}
            </h2>
          </div>

          <button
            onClick={() => setShowGallery(true)}
            className="text-[#c9a27c] hover:text-white transition"
          >
            {t.viewAll} →
          </button>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {works.map((work, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[24px] h-[420px] md:h-[520px] border border-[#1e1e1e]"
            >
              <img
                src={work.image}
                alt={work.title}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8">

                <h3 className="text-white text-3xl md:text-4xl hero-title">
                  {work.title}
                </h3>

                <p className="text-[#c9a27c] mt-3">
                  {t.viewWorks}
                </p>

              </div>
            </div>
          ))}

        </div>
      </div>

      {showGallery && (
        <div className="fixed inset-0 bg-black/95 z-[100] overflow-y-auto">

          <div className="max-w-7xl mx-auto p-4 md:p-8">

            <div className="flex justify-between items-center mb-8 md:mb-10">

              <h2 className="text-white text-3xl md:text-5xl hero-title">
                {t.galleryTitle}
              </h2>

              <button
                onClick={() => setShowGallery(false)}
                className="text-white text-4xl"
              >
                ×
              </button>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

              <img src="/images/kitchen.png" className="rounded-3xl w-full h-[350px] object-cover" />
              <img src="/images/stairs.png" className="rounded-3xl w-full h-[350px] object-cover" />
              <img src="/images/table.png" className="rounded-3xl w-full h-[350px] object-cover" />
              <img src="/images/wardrobe.png" className="rounded-3xl w-full h-[350px] object-cover" />
              <img src="/images/kitchen.png" className="rounded-3xl w-full h-[350px] object-cover" />
              <img src="/images/table.png" className="rounded-3xl w-full h-[350px] object-cover" />

            </div>

          </div>

        </div>
      )}
    </section>
  );
}