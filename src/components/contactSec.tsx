import React from "react";
import iletişim from "../assets/optimized/iletisim-1400.jpg";
import AnimatedSection from "./animatedSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const ContactSection = () => {
  const whatsappHref =
    "https://wa.me/905323322960?text=Merhaba%2C%20Yeni%20RM%20%C4%B0n%C5%9Faat%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.";

  return (
    <AnimatedSection>
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-24 text-white md:grid-cols-2 lg:px-8">
        <div className="rounded-lg border border-white/10 bg-black/35 p-6 shadow-2xl backdrop-blur-md md:p-8">
          <span className="text-sm font-semibold uppercase tracking-wide text-gold">
            Hızlı danışmanlık
          </span>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">
            İletişim
          </h1>
          <div className="mt-8 space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-gold">Adres</h2>
              <p
                className="mt-1 text-white/80"
                aria-label="Yeni RM İnşaat Bayrampaşa Ofisi Adresi"
              >
                İstanbul/Bayrampaşa’da yer alan ofisimiz, ulaşım açısından
                oldukça elverişli.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gold">Telefon</h2>
              <p className="mt-1 text-white/80" aria-label="Telefon Numarası">
                +90 (532) 332 29 60
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gold">E-posta</h2>
              <p className="mt-1 text-white/80" aria-label="E-posta Adresi">
                yenirminsaat@hotmail.com
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp ile iletişime geç"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[#25D366] px-6 py-3 font-semibold text-white transition hover:bg-[#1ebe5d]"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
              WhatsApp
            </a>
            <a
              href="tel:+905323322960"
              aria-label="Telefonla aramak için tıkla"
              className="inline-flex justify-center rounded-md bg-gold px-6 py-3 font-semibold text-black transition hover:bg-white"
            >
              Ara
            </a>
            <a
              href="mailto:yenirminsaat@hotmail.com"
              aria-label="E-posta göndermek için tıkla"
              className="inline-flex justify-center rounded-md border border-white/35 px-6 py-3 font-semibold text-white transition hover:border-gold hover:bg-gold hover:text-black"
            >
              E-posta Gönder
            </a>
          </div>
        </div>
        <img
          src={iletişim}
          alt="Yeni RM İnşaat Bayrampaşa Ofisi İletişim Görseli"
          className="h-[420px] w-full rounded-lg object-cover shadow-2xl"
          loading="lazy"
          decoding="async"
        />
      </div>
    </AnimatedSection>
  );
};

export default ContactSection;
