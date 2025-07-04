import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const ContactSection: React.FC = () => {
  return (
    <motion.section
      className="container mx-auto px-4 py-12"
      {...fadeInUp}
      viewport={{ once: true }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl font-bold text-black mb-6">İletişim</h1>
          <div className="space-y-6 text-gray-600">
            <div>
              <h2 className="text-lg font-semibold text-black">Adres</h2>
              <p>
                İstanbul'un merkezinde yer alan ofisimiz, ulaşım açısından
                oldukça elverişli.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-black">Telefon</h2>
              <p>+90 (212) 123 45 67</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-black">E-posta</h2>
              <p>info@example.com</p>
            </div>
          </div>
          <div className="mt-6 space-x-4">
            <button className="bg-black text-white px-6 py-2 rounded-md">
              Ara
            </button>
            <button className="border border-black text-black px-6 py-2 rounded-md">
              E-posta Gönder
            </button>
          </div>
        </div>
        <img
          src="https://picsum.photos/600/400"
          alt="İletişim Görseli"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
    </motion.section>
  );
};

export default ContactSection;
