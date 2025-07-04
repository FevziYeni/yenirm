import React from "react";
import AnimatedSection from "../components/animatedSection";

const AboutPage: React.FC = () => {
  return (
    <AnimatedSection className="py-20 px-6 text-white">
      <h1 className="text-4xl font-bold mb-6 text-center">Hakkımızda</h1>
      <div className="max-w-3xl mx-auto space-y-4">
        <p>
          YENİ RM İnşaat olarak 20 yılı aşkın süredir sektörde faaliyet
          göstermekteyiz. Müşteri memnuniyetini ön planda tutarak çevreye
          duyarlı, estetik ve dayanıklı yapılar inşa ediyoruz.
        </p>
        <p>
          Misyonumuz; kaliteli malzeme, tecrübeli ekip ve sürdürülebilir
          çözümlerle yapı sektöründe fark yaratmak.
        </p>
      </div>
    </AnimatedSection>
  );
};

export default AboutPage;
