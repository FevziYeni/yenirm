import React from "react";
import hakkimizda from "../assets/hakkımızda.jpg";
import AnimatedSection from "./animatedSection";
import { useNavigate } from "react-router-dom";

const AboutSection = () => {
  const navigate = useNavigate();
  return (
    <AnimatedSection>
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-24 text-white md:grid-cols-2 lg:px-8">
        <div className="flex flex-col justify-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-gold">
            Kurumsal yaklaşım
          </span>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">
            Hakkımızda
          </h1>
          <p className="mt-6 leading-8 text-white/82">
            Bayrampaşa ve İstanbul’da 17 yılı aşkın süredir faaliyet gösteren
            Yeni RM İnşaat, kentsel dönüşüm ve kat karşılığı projelerde öncü bir
            firma olarak birçok büyük ölçekli projeyi başarıyla tamamlamıştır.
            Kaliteden ödün vermeyen anlayışımız ve sürdürülebilir yapı
            yaklaşımımızla, yalnızca binalar değil; güven, memnuniyet ve uzun
            ömürlü yaşam alanları inşa ediyoruz.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              className="rounded-md bg-gold px-6 py-3 font-semibold text-black transition hover:bg-white"
              onClick={() => navigate("/about")}
              aria-label="Hakkımızda sayfasına git"
            >
              Daha Fazla Bilgi
            </button>
            <button
              className="rounded-md border border-white/35 px-6 py-3 font-semibold text-white transition hover:border-gold hover:bg-gold hover:text-black"
              onClick={() => navigate("/contact")}
              aria-label="İletişim sayfasına git"
            >
              İletişime Geç
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src={hakkimizda}
            alt="Yeni RM İnşaat Bayrampaşa Hakkımızda Görseli"
            className="h-[420px] w-full rounded-lg object-cover shadow-2xl"
          />
        </div>
      </div>
    </AnimatedSection>
  );
};

export default AboutSection;
