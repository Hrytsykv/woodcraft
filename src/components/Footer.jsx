export default function Footer({ t }) {
  return (
    <footer className="bg-black border-t border-[#222]">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">

          <div>
            <h2 className="text-white text-2xl md:text-3xl font-semibold mb-4">
              WOODCRAFT
            </h2>

            <p className="text-gray-500 leading-relaxed">
              {t.footerText}
            </p>
          </div>

          <div>
            <h3 className="text-white text-lg mb-4">
              {t.footerContacts}
            </h3>

            <div className="space-y-3 text-gray-400">

              <a
                href="tel:+420777123456"
                className="block hover:text-white transition"
              >
                📞 +420 777 123 456
              </a>

              <a
                href="mailto:info.woodcraft@seznam.cz"
                className="block hover:text-white transition"
              >
                ✉️ info.woodcraft@seznam.cz
              </a>

              <p>
                📍 Praha, Czech Republic
              </p>

            </div>
          </div>

          <div>
            <h3 className="text-white text-lg mb-4">
              {t.footerSocials}
            </h3>

            <div className="space-y-3 text-gray-400">

              <a
                href="#"
                className="block hover:text-white transition"
              >
                Facebook
              </a>

              <a
                href="#"
                className="block hover:text-white transition"
              >
                Instagram
              </a>

              <a
                href="#"
                className="block hover:text-white transition"
              >
                TikTok
              </a>

            </div>
          </div>

        </div>

        <div className="border-t border-[#222] mt-10 md:mt-12 pt-6 md:pt-8 flex flex-col md:flex-row gap-4 justify-between items-center">

          <p className="text-gray-500 text-sm text-center md:text-left">
            {t.footerRights}
          </p>

          <p className="text-gray-600 text-sm">
            {t.footerMade}
          </p>

        </div>

      </div>
    </footer>
  );
}