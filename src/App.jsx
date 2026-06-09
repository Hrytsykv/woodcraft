import { useState } from "react";
import { translations } from "./translations/translations.js";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Works from "./components/Works";
import About from "./components/About";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


export default function App() {
  const [lang, setLang] = useState("cs");


  const t = translations[lang];


  return (
    <>
      <Header t={t} lang={lang} setLang={setLang} />
      <Hero t={t} />
      <Works t={t} />
      <About t={t} />
      <Process t={t} />
      <Testimonials t={t} />
      <Contact t={t} />
      <Footer t={t} />
    </>
  );
}