export default function About({ t }) {
  return (
    <section id="about" className="bg-[#f5f5f3] py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">

          <div>

            <p className="uppercase tracking-[0.3em] text-gray-500 text-xs mb-4">
              {t.aboutBadge}
            </p>

            <h2 className="hero-title text-black text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 md:mb-8">
              {t.aboutTitle}
            </h2>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 md:mb-10">
              {t.aboutText}
            </p>

            <a
              href="#contact"
              className="
              bg-[#c9a27c]
              text-black
              px-8
              py-4
              rounded-xl
              font-medium
              hover:scale-105
              transition
              inline-block
              "
            >
              {t.contactUs}
            </a>

          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1400"
              alt=""
              className="
              rounded-3xl
              w-full
              h-[400px]
              md:h-[500px]
              lg:h-[650px]
              object-cover
              "
            />
          </div>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 mt-16 md:mt-24 pt-12 md:pt-16 border-t border-gray-300">

          <div>
            <h3 className="text-black text-3xl md:text-5xl font-light">
              10+
            </h3>

            <p className="text-gray-500 mt-3 text-sm md:text-base">
              {t.yearsExperience}
            </p>
          </div>

          <div>
            <h3 className="text-black text-3xl md:text-5xl font-light">
              500+
            </h3>

            <p className="text-gray-500 mt-3 text-sm md:text-base">
              {t.completedProjects}
            </p>
          </div>

          <div>
            <h3 className="text-black text-3xl md:text-5xl font-light">
              100%
            </h3>

            <p className="text-gray-500 mt-3 text-sm md:text-base">
              {t.satisfiedClients}
            </p>
          </div>

          <div>
            <h3 className="text-black text-3xl md:text-5xl font-light">
              24м
            </h3>

            <p className="text-gray-500 mt-3 text-sm md:text-base">
              {t.warranty}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}