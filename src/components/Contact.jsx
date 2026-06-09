import emailjs from "@emailjs/browser";
import { useState } from "react";

export default function Contact({ t }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_fncnczg",
        "template_5glbzon",
        {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
        },
        "bvUTIZEar5UOzNCxF"
      )
      .then(() => {
        setSuccess(true);

        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error(error);
        alert(t.errorMessage);
      });
  };

  return (
    <section
      id="contact"
      className="bg-[#f8f7f4] py-20 md:py-40"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8">

        <div className="max-w-4xl mx-auto text-center">

          <p className="uppercase tracking-[0.3em] text-gray-500 text-xs mb-4">
            {t.contactBadge}
          </p>

          <h2 className="hero-title text-black text-4xl md:text-7xl mb-6 md:mb-8">
            {t.contactTitle}
          </h2>

          <p className="text-gray-600 text-base md:text-xl max-w-2xl mx-auto mb-10 md:mb-16">
            {t.contactText}
          </p>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-[24px] md:rounded-[40px] shadow-2xl p-6 md:p-12 mt-8 md:mt-12"
          >

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

              <input
                type="text"
                placeholder={t.name}
                value={formData.name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: e.target.value,
                  })
                }
                className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-5 text-black"
              />

              <input
                type="tel"
                placeholder={t.phone}
                value={formData.phone}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    phone: e.target.value,
                  })
                }
                className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-5 text-black"
              />

            </div>

            <input
              type="email"
              placeholder={t.email}
              value={formData.email}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value,
                })
              }
              className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-5 text-black mb-6"
            />

            <textarea
              rows="6"
              placeholder={t.message}
              value={formData.message}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  message: e.target.value,
                })
              }
              className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-5 text-black mb-8 resize-none"
            />

            <button
              type="submit"
              className="
              w-full md:w-auto
              bg-[#c9a27c]
              text-black
              px-12
              py-5
              rounded-2xl
              font-semibold
              hover:scale-105
              transition
              "
            >
              {t.send}
            </button>

            {success && (
              <p className="text-green-600 mt-6 font-medium">
                {t.successMessage}
              </p>
            )}

          </form>

        </div>

      </div>
    </section>
  );
}