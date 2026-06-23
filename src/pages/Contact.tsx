import React from "react";
import AnimatedSection from "../components/animatedSection";
import Seo from "../components/Seo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import contactImage from "../assets/optimized/iletisim-1400.jpg";

const ContactPage: React.FC = () => {
  const whatsappHref =
    "https://wa.me/905323322960?text=Merhaba%2C%20Yeni%20RM%20%C4%B0n%C5%9Faat%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.";

  return (
    <>
      <Seo
        title="İletişim | Yeni RM İnşaat Bayrampaşa"
        description="Yeni RM İnşaat ile telefon, e-posta veya WhatsApp üzerinden iletişime geçin. Bayrampaşa ve İstanbul kentsel dönüşüm projeleri için danışmanlık alın."
        path="/contact"
        keywords="Yeni RM İnşaat iletişim, Bayrampaşa inşaat firması telefon, kentsel dönüşüm danışmanlık"
      />

      <AnimatedSection className="px-6 pb-24 pt-32 text-white">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-gold">
            Bize ulaşın
          </span>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">
            İletişim
          </h1>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-12 md:grid-cols-2">
          <div className="rounded-lg border border-white/10 bg-black/35 p-6 shadow-2xl backdrop-blur-md md:p-8">
            <img
              src={contactImage}
              alt="Yeni RM İnşaat Bayrampaşa iletişim ve ofis görseli"
              className="mb-8 h-48 w-full rounded-md object-cover"
              loading="eager"
              decoding="async"
            />
            <div className="space-y-8">
              <div>
                <h2 className="mb-2 text-xl font-semibold text-gold">Adres</h2>
                <p className="text-white/80">Bayrampaşa / İstanbul</p>
              </div>
              <div>
                <h2 className="mb-2 text-xl font-semibold text-gold">
                  Telefon
                </h2>
                <a
                  href="tel:+905323322960"
                  className="text-white/80 transition hover:text-gold"
                >
                  +90 (532) 332 29 60
                </a>
              </div>
              <div>
                <h2 className="mb-2 text-xl font-semibold text-gold">
                  E-posta
                </h2>
                <a
                  href="mailto:info@yenirminsaat.com"
                  className="text-white/80 transition hover:text-gold"
                >
                  info@yenirminsaat.com
                </a>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#25D366] px-6 py-3 font-semibold text-white transition duration-300 hover:bg-[#1ebe5d]"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
                WhatsApp
              </a>
              <a
                href="tel:+905323322960"
                className="inline-flex justify-center rounded-md bg-gold px-6 py-3 font-semibold text-black transition duration-300 hover:bg-white"
              >
                Ara
              </a>
              <a
                href="mailto:info@yenirminsaat.com"
                className="inline-flex justify-center rounded-md border border-white/35 px-6 py-3 font-semibold text-white transition duration-300 hover:border-gold hover:bg-gold hover:text-black"
              >
                E-posta Gönder
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border border-white/10 shadow-2xl">
            <iframe
              title="Yeni RM İnşaat Konumu"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.5223772259897!2d28.898350674991203!3d41.057572816389744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab07ea082e8e9%3A0x1d0b3843b0dd3de7!2zS2FydGFsdGVwZSwgw5xyZ8O8cGzDvCBDZC4sIDM0MDQwIEJheXJhbXBhxZ9hL8Swc3RhbmJ1bA!5e0!3m2!1str!2str!4v1751897095025!5m2!1str!2str"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
};

export default ContactPage;
