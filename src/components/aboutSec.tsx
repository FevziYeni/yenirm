import React from "react";

import hakkimizda from "../assets/hakkımızda.jpg";
import AnimatedSection from "./animatedSection";
import { useNavigate } from "react-router-dom";

const AboutSection = () => {
  const navigate = useNavigate();
  return (
    <AnimatedSection>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-white p-8 py-20">
        <img
          src={hakkimizda}
          alt="Hakkımızda"
          className="w-full h-auto rounded-lg shadow-md"
        />
        <div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gold to-white  bg-clip-text  text-transparent">
            Hakkımızda
          </h1>
          <p className="mb-4">
            Güvenle Yükselen Yapılar, 17 Yıllık Tecrübe ile 17 yılı aşkın
            süredir müteahhitlik sektöründe faaliyet gösteren firmamız, bugüne
            kadar birçok büyük ölçekli projeyi başarıyla tamamlamıştır.
            Kaliteden ödün vermeyen anlayışımız ve sürdürülebilir yapı
            yaklaşımımızla, yalnızca binalar değil; güven, memnuniyet ve uzun
            ömürlü yaşam alanları inşa ediyoruz.
          </p>
          <div className="mt-6 space-x-4">
            <button
              className="bg-black px-6 py-2 rounded-md"
              onClick={() => navigate("/about")}
            >
              Daha Fazla Bilgi
            </button>
            <button
              className="border border-black px-6 py-2 rounded-md"
              onClick={() => navigate("/contact")}
            >
              İletişime Geç
            </button>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default AboutSection;
