import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";

export default function Header({
  t,
  lang,
  setLang,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="backdrop-blur-xl bg-black/50 border-b border-white/10">

        <div className="max-w-7xl mx-auto px-6 md:px-8 h-20 md:h-24 flex items-center justify-between">

          <a
            href="#home"
            className="text-white text-2xl font-semibold tracking-wider"
          >
            WOODCRAFT
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-10 text-white text-sm">
              <div className="hidden md:flex items-center gap-3">



</div>

            <a href="#home" className="hover:text-[#c9a27c] transition">
              {t.navHome}
            </a>

            <a href="#works" className="hover:text-[#c9a27c] transition">
              {t.navWorks}
            </a>

            <a href="#about" className="hover:text-[#c9a27c] transition">
              {t.navAbout}
            </a>

            <a href="#contact" className="hover:text-[#c9a27c] transition">
              {t.navContact}
            </a>

          </nav>

          {/* Desktop Button */}
          <div className="hidden md:flex items-center gap-5">

  <a
    href="#contact"
    className="bg-[#c9a27c] text-black px-6 py-3 rounded-xl font-medium hover:scale-105 transition"
  >
    {t.orderQuote}
  </a>

  <div className="relative">

    <button
      onClick={() => setLangOpen(!langOpen)}
      className="
      flex
      items-center
      gap-2
      text-white
      hover:text-[#c9a27c]
      transition
      "
    >
      <Globe size={18} />

      {lang === "cs" && "🇨🇿"}
      {lang === "uk" && "🇺🇦"}
      {lang === "en" && "🇬🇧"}

      ▼
    </button>

    {langOpen && (
      <div
        className="
        absolute
        right-0
        top-10
        w-44
        bg-[#111]
        border
        border-[#333]
        rounded-xl
        overflow-hidden
        shadow-2xl
        "
      >

        <button
          onClick={() => {
            setLang("cs");
            setLangOpen(false);
          }}
          className="w-full text-left px-4 py-3 text-white hover:bg-[#1f1f1f]"
        >
          🇨🇿 Čeština
        </button>

        <button
          onClick={() => {
            setLang("uk");
            setLangOpen(false);
          }}
          className="w-full text-left px-4 py-3 text-white hover:bg-[#1f1f1f]"
        >
          🇺🇦 Українська
        </button>

        <button
          onClick={() => {
            setLang("en");
            setLangOpen(false);
          }}
          className="w-full text-left px-4 py-3 text-white hover:bg-[#1f1f1f]"
        >
          🇬🇧 English
        </button>

      </div>
    )}

  </div>

</div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-black/95 border-t border-white/10">

            <nav className="flex flex-col p-6 gap-5 text-white">

              <a href="#home" onClick={() => setIsOpen(false)}>
                {t.navHome}
              </a>

              <a href="#works" onClick={() => setIsOpen(false)}>
                {t.navWorks}
              </a>

              <a href="#about" onClick={() => setIsOpen(false)}>
                {t.navAbout}
              </a>

              <a href="#contact" onClick={() => setIsOpen(false)}>
                {t.navContact}
              </a>

              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="bg-[#c9a27c] text-black py-3 rounded-xl text-center font-medium"
              >
                {t.orderQuote}
              </a>

            </nav>

          </div>
        )}

      </div>
    </header>
  );
}