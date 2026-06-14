import React from "react";
import AnimatedSection from "../components/animatedSection";
import Seo from "../components/Seo";
import aboutImage from "../assets/optimized/hakkimizda-1400.jpg";
import constructionImage from "../assets/insaat.jpg";
import projectImage from "../assets/projects/ürgüplü.jpg";

const values = [
  {
    title: "Yerel Tecrübe",
    text: "Bayrampaşa ve İstanbul yapı dinamiklerini bilen, proje geliştirme sürecini bölge gerçekleriyle ele alan bir yaklaşım.",
  },
  {
    title: "Şeffaf Süreç",
    text: "Kat karşılığı ve kentsel dönüşüm projelerinde malik beklentilerini, maliyetleri ve teslim sürecini anlaşılır şekilde yönetiriz.",
  },
  {
    title: "Güvenli Yapılar",
    text: "Deprem güvenliği, mühendislik disiplini ve uzun ömürlü kullanım hedefi her projemizin merkezinde yer alır.",
  },
];

const AboutPage: React.FC = () => {
  return (
    <>
      <Seo
        title="Hakkımızda | Yeni RM İnşaat"
        description="Yeni RM İnşaat, Bayrampaşa ve İstanbul’da kentsel dönüşüm, kat karşılığı ve güvenli konut projelerinde 17 yılı aşkın deneyime sahiptir."
        path="/about"
        keywords="Yeni RM İnşaat hakkında, Bayrampaşa müteahhit, İstanbul inşaat firması, güvenli konut projeleri"
      />

      <AnimatedSection className="px-6 pb-24 pt-32 text-white lg:px-8">
        <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wide text-gold">
              Hakkımızda
            </span>
            <h1 className="mt-3 text-4xl font-bold leading-tight md:text-6xl">
              Bayrampaşa’da güven veren inşaat ve dönüşüm tecrübesi.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/78 md:text-lg">
              Yeni RM İnşaat, 17 yılı aşkın saha deneyimiyle Bayrampaşa ve
              İstanbul’da kentsel dönüşüm, kat karşılığı inşaat ve modern konut
              projeleri geliştirir. Amacımız yalnızca bina üretmek değil; güvenli,
              değerli ve uzun ömürlü yaşam alanları oluşturmaktır.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-3 rounded-lg border border-white/10 bg-black/35 p-4 backdrop-blur-md">
              <div>
                <p className="text-2xl font-extrabold text-gold md:text-3xl">
                  17+
                </p>
                <p className="mt-1 text-xs text-white/65 md:text-sm">
                  Yıl deneyim
                </p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-gold md:text-3xl">
                  15+
                </p>
                <p className="mt-1 text-xs text-white/65 md:text-sm">
                  Proje referansı
                </p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-gold md:text-3xl">
                  56
                </p>
                <p className="mt-1 text-xs text-white/65 md:text-sm">
                  Ekip gücü
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src={aboutImage}
              alt="Yeni RM İnşaat Bayrampaşa kentsel dönüşüm ve müteahhitlik yaklaşımı"
              className="h-[420px] w-full rounded-lg object-cover shadow-2xl"
              loading="eager"
              decoding="async"
            />
            <div className="absolute -bottom-5 left-5 right-5 rounded-lg border border-white/10 bg-black/70 p-4 shadow-xl backdrop-blur-md">
              <p className="text-sm font-semibold text-gold">
                Bayrampaşa odaklı proje geliştirme
              </p>
              <p className="mt-1 text-sm text-white/75">
                Yerel ihtiyaçları, imar koşullarını ve malik beklentilerini
                birlikte değerlendiririz.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-24 grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-lg border border-white/10 bg-black/35 p-6 shadow-2xl backdrop-blur-md"
            >
              <h2 className="text-xl font-semibold text-gold">{value.title}</h2>
              <p className="mt-4 text-sm leading-7 text-white/72">
                {value.text}
              </p>
            </div>
          ))}
        </section>

        <section className="mx-auto mt-16 grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div className="grid grid-cols-2 gap-4">
            <img
              src={constructionImage}
              alt="Yeni RM İnşaat modern yapı ve güvenli inşaat çalışmaları"
              className="h-72 w-full rounded-lg object-cover shadow-2xl"
              loading="lazy"
              decoding="async"
            />
            <img
              src={projectImage}
              alt="Yeni RM İnşaat Bayrampaşa kat karşılığı proje referansı"
              className="mt-10 h-72 w-full rounded-lg object-cover shadow-2xl"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="rounded-lg border border-white/10 bg-black/35 p-6 shadow-2xl backdrop-blur-md md:p-8">
            <span className="text-sm font-semibold uppercase tracking-wide text-gold">
              Çalışma anlayışımız
            </span>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Her projede doğru analiz, doğru plan ve güçlü takip.
            </h2>
            <div className="mt-6 space-y-5 text-sm leading-7 text-white/74 md:text-base">
              <p>
                Projelerimizi teknik bir inşaat sürecinin ötesinde, bölgeye
                değer katacak uzun vadeli yatırımlar olarak ele alıyoruz.
              </p>
              <p>
                Maliklerle açık iletişim kurar, proje fizibilitesinden teslim
                aşamasına kadar süreci ölçülebilir, takip edilebilir ve anlaşılır
                hale getiririz.
              </p>
              <p>
                Bayrampaşa’da kentsel dönüşüm ve kat karşılığı inşaat arayan
                kullanıcılar için güvenilir, ulaşılabilir ve tecrübeli bir çözüm
                ortağı olmayı hedefliyoruz.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
};

export default AboutPage;
