export default function Process({ t }) {
  const steps = [
    {
      number: "01",
      title: t.step1,
      text: t.step1Text,
    },
    {
      number: "02",
      title: t.step2,
      text: t.step2Text,
    },
    {
      number: "03",
      title: t.step3,
      text: t.step3Text,
    },
    {
      number: "04",
      title: t.step4,
      text: t.step4Text,
    },
    {
      number: "05",
      title: t.step5,
      text: t.step5Text,
    },
  ];

  return (
    <section className="bg-[#0b0b0b] py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        <p className="uppercase tracking-[0.3em] text-gray-500 text-xs mb-4">
          {t.processBadge}
        </p>

        <h2 className="hero-title text-white text-4xl md:text-5xl mb-20">
          {t.processTitle}
        </h2>

        <div className="grid md:grid-cols-5 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-[#141414] rounded-3xl p-8 border border-white/5 hover:border-[#c9a27c]/30 transition"
            >
              <div className="text-[#c9a27c] text-5xl font-light mb-8">
                {step.number}
              </div>

              <h3 className="text-white text-xl mb-4">
                {step.title}
              </h3>

              <p className="text-gray-500">
                {step.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}