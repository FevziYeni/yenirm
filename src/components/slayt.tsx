import React from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/bg_image.jpg";
import AnimatedSection from "./animatedSection";

const HeroSection = () => {
  const navigate = useNavigate();
  const whatsappHref =
    "https://wa.me/905323322960?text=Merhaba%2C%20Yeni%20RM%20%C4%B0n%C5%9Faat%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.";

  return (
    <section className="relative min-h-[680px] w-full overflow-hidden md:min-h-[760px]">
      <div className="absolute inset-0">
        <img
          src={bgImage}
          alt="Bayrampaşa Kat Karşılığı ve Kentsel Dönüşüm Projeleri"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/25" />
        <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-zinc-950/80 to-transparent" />
      </div>

      <div className="absolute inset-0 z-20 flex items-center">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-6 pt-16 text-white lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div className="max-w-3xl">
            <AnimatedSection>
              <span className="mb-5 inline-flex rounded-full border border-gold/40 bg-black/35 px-4 py-2 text-sm font-semibold text-gold backdrop-blur">
                Bayrampaşa ve İstanbul’da güvenilir dönüşüm ortağı
              </span>
            </AnimatedSection>

            <AnimatedSection>
              <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-7xl">
                Güvenli, modern ve değer kazandıran yaşam alanları.
              </h1>
            </AnimatedSection>

            <AnimatedSection>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
                Yeni RM İnşaat; kat karşılığı, kentsel dönüşüm ve konut
                projelerinde 17 yılı aşkın tecrübeyle şeffaf, sağlam ve
                zamanında teslim edilen yapılar üretir.
              </p>
            </AnimatedSection>

            <AnimatedSection>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={() => navigate("/projects")}
                  aria-label="Yeni RM İnşaat projelerini görüntüle"
                  className="rounded-md bg-gold px-7 py-3 text-sm font-bold uppercase tracking-wide text-black shadow-lg transition hover:bg-white"
                >
                  Projeleri İncele
                </button>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Yeni RM İnşaat WhatsApp hattına yaz"
                  className="rounded-md border border-white/40 bg-white/10 px-7 py-3 text-center text-sm font-bold uppercase tracking-wide text-white backdrop-blur transition hover:border-gold hover:bg-gold hover:text-black"
                >
                  WhatsApp ile Ulaş
                </a>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection>
            <div className="grid gap-4 rounded-lg border border-white/15 bg-black/35 p-5 shadow-2xl backdrop-blur-md sm:grid-cols-3 lg:mt-24 lg:grid-cols-1">
              <div>
                <p className="text-3xl font-extrabold text-gold">17+</p>
                <p className="mt-1 text-sm text-white/75">Yıl sektör deneyimi</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-gold">15+</p>
                <p className="mt-1 text-sm text-white/75">Tamamlanan proje</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-gold">56</p>
                <p className="mt-1 text-sm text-white/75">Uzman ekip gücü</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
