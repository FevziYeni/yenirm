import React from "react";
import iletişim from "../assets/iletişim.jpg";
import AnimatedSection from "./animatedSection";

const ContactSection = () => {
  return (
    <AnimatedSection>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-white p-8 py-20">
        <div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gold to-white bg-clip-text text-transparent">
            İletişim
          </h1>
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold">Adres</h2>
              <p>
                İstanbul/Bayrampaşa da yer alan ofisimiz, ulaşım açısından
                oldukça elverişli.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Telefon</h2>
              <p>+90 (532) 332 29 60</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold">E-posta</h2>
              <p>yenirminsaat@hotmail.com</p>
            </div>
          </div>
          <div className="mt-6 space-x-4">
            <a href="tel:+905323322960">
              <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gold transition">
                Ara
              </button>
            </a>
            <a href="mailto:yenirminsaat@hotmail.com">
              <button className="border border-white text-white px-6 py-2 rounded-md hover:bg-gold hover:text-black transition">
                E-posta Gönder
              </button>
            </a>
          </div>
        </div>
        <img
          src={iletişim}
          alt="İletişim Görseli"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
    </AnimatedSection>
  );
};

export default ContactSection;
