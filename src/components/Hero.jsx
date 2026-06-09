import { Hammer, Shield, Award, BadgeCheck } from "lucide-react";

export default function Hero({ t }) {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
    >
      <img
        src="/images/hero.png"
        alt="Woodcraft"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 pt-32 md:pt-52 pb-40 md:pb-52">
        <p className="text-[#c9a27c] uppercase tracking-[0.3em] text-xs mb-6">
          {t.heroBadge}
        </p>

        <h1 className="hero-title text-white text-5xl md:text-7xl lg:text-8xl max-w-4xl leading-tight">
          {t.heroTitle}
        </h1>

        <p className="text-gray-300 text-base md:text-xl max-w-xl md:max-w-2xl mt-6 md:mt-8">
          {t.heroText}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-10 max-w-md">
          <a
            href="#contact"
            className="bg-[#c9a27c] text-black text-center px-8 py-4 rounded-xl font-medium hover:scale-105 transition"
          >
            {t.heroBtn1}
          </a>

          <a
            href="#works"
            className="border border-[#c9a27c] text-white text-center px-8 py-4 rounded-xl hover:bg-[#c9a27c] hover:text-black transition"
          >
            {t.heroBtn2}
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full bg-black/80 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-6 md:py-8 grid grid-cols-2 md:grid-cols-4 gap-6">

          <div className="flex items-center gap-3">
            <Hammer
              size={20}
              className="text-[#c9a27c] shrink-0"
            />
            <span className="text-gray-300 text-sm md:text-base">
              {t.heroFeature1}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Award
              size={20}
              className="text-[#c9a27c] shrink-0"
            />
            <span className="text-gray-300 text-sm md:text-base">
              {t.heroFeature2}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Shield
              size={20}
              className="text-[#c9a27c] shrink-0"
            />
            <span className="text-gray-300 text-sm md:text-base">
              {t.heroFeature3}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <BadgeCheck
              size={20}
              className="text-[#c9a27c] shrink-0"
            />
            <span className="text-gray-300 text-sm md:text-base">
              {t.heroFeature4}
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}