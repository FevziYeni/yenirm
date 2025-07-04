import React from "react";
import AnimatedSection from "../components/animatedSection";

const ContactPage: React.FC = () => {
  return (
    <AnimatedSection className="py-20 px-6 text-white">
      <h1 className="text-4xl font-bold mb-6 text-center">İletişim</h1>
      <div className="max-w-3xl mx-auto space-y-6">
        <div>
          <h2 className="font-semibold">Adres</h2>
          <p>İstanbul, Türkiye</p>
        </div>
        <div>
          <h2 className="font-semibold">Telefon</h2>
          <p>+90 (212) 123 45 67</p>
        </div>
        <div>
          <h2 className="font-semibold">E-posta</h2>
          <p>info@yenirm.com</p>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ContactPage;
