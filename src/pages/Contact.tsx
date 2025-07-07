import React from "react";
import AnimatedSection from "../components/animatedSection";

const ContactPage: React.FC = () => {
  return (
    <AnimatedSection className="py-10 px-12 text-white">
      <h1 className="text-4xl font-bold mb-12 text-center">İletişim</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* İletişim Bilgileri */}
        <div className="space-y-6">
          <div>
            <h2 className="font-semibold text-lg">Adres</h2>
            <p>Bayrampaşa / İstanbul</p>
          </div>
          <div>
            <h2 className="font-semibold text-lg">Telefon</h2>
            <a
              href="tel:+905323322960"
              className="text-blue-300 hover:underline"
            >
              +90 (532) 332 29 60
            </a>
          </div>
          <div>
            <h2 className="font-semibold text-lg">E-posta</h2>
            <a
              href="mailto:yenirminsaat@hotmail.com"
              className="text-blue-300 hover:underline"
            >
              yenirminsaat@hotmail.com
            </a>
          </div>

          <div className="flex gap-4 mt-4">
            <a
              href="tel:+905323322960"
              className="bg-black text-white px-6 py-2 rounded-md hover:bg-gold transition"
            >
              Ara
            </a>
            <a
              href="mailto:yenirminsaat@hotmail.com"
              className="border border-white text-white px-6 py-2 rounded-md hover:bg-gold hover:text-white transition"
            >
              E-posta Gönder
            </a>
          </div>
        </div>

        {/* Harita */}
        <div className="rounded-lg overflow-hidden shadow-lg pb-20">
          <iframe
            title="Yenir İnşaat Konumu"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.5223772259897!2d28.898350674991203!3d41.057572816389744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab07ea082e8e9%3A0x1d0b3843b0dd3de7!2zS2FydGFsdGVwZSwgw5xyZ8O8cGzDvCBDZC4sIDM0MDQwIEJheXJhbXBhxZ9hL8Swc3RhbmJ1bA!5e0!3m2!1str!2str!4v1751897095025!5m2!1str!2str"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ContactPage;
