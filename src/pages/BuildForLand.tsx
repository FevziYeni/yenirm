import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  FileCheck2,
  Handshake,
  Map,
  Scale,
  WalletCards,
} from "lucide-react";
import AnimatedSection from "../components/animatedSection";
import Seo, { SITE_URL } from "../components/Seo";
import heroImage from "../assets/optimized/bg_image-1920.jpg";
import projectImage from "../assets/projects/ürgüplü.jpg";

const whatsappHref =
  "https://wa.me/905323322960?text=Merhaba%2C%20Bayrampa%C5%9Fa%27da%20kat%20kar%C5%9F%C4%B1l%C4%B1%C4%9F%C4%B1%20in%C5%9Faat%20i%C3%A7in%20%C3%B6n%20fizibilite%20g%C3%B6r%C3%BC%C5%9Fmesi%20yapmak%20istiyorum.";

const steps = [
  {
    icon: Map,
    title: "Parsel ve imar incelemesi",
    text: "Ada-parsel, arsa alanı, yol durumu ve bilinen imar hakları üzerinden proje kapasitesi değerlendirilir.",
  },
  {
    icon: Building2,
    title: "Mevcut yapı analizi",
    text: "Bağımsız bölüm sayısı, mevcut kullanım, malik yapısı ve dönüşüm ihtiyaçları belirlenir.",
  },
  {
    icon: WalletCards,
    title: "Ekonomik fizibilite",
    text: "Toplam inşaat alanı, yapım maliyeti, paylaşım dengesi ve satış potansiyeli birlikte incelenir.",
  },
  {
    icon: Handshake,
    title: "Paylaşım ve uzlaşma",
    text: "Malik beklentileri, yüklenici payı, daire dağılımı ve ortak alanlar anlaşılır bir modelde ele alınır.",
  },
  {
    icon: FileCheck2,
    title: "Sözleşme ve teknik şartname",
    text: "Teslim kapsamı, malzeme standardı, süre, teminatlar ve sorumluluklar yazılı hale getirilir.",
  },
  {
    icon: CheckCircle2,
    title: "Proje, uygulama ve teslim",
    text: "Ruhsat, saha uygulaması, kalite kontrol ve teslim aşamaları planlı şekilde yürütülür.",
  },
];

const faqItems = [
  {
    question: "Kat karşılığı inşaat ne demektir?",
    answer:
      "Arsa veya mevcut yapı maliklerinin arsayı yükleniciyle belirli bir paylaşım modeli üzerinden değerlendirdiği; yüklenicinin projeyi yapıp sözleşmede belirlenen bağımsız bölümleri taraflara teslim ettiği modeldir.",
  },
  {
    question: "Her parsel kat karşılığı inşaata uygun mudur?",
    answer:
      "Hayır. İmar hakkı, arsa alanı, mevcut bağımsız bölüm sayısı, yapım maliyeti, satış potansiyeli ve malik beklentileri ekonomik uygulanabilirliği belirler.",
  },
  {
    question: "Paylaşım oranı nasıl belirlenir?",
    answer:
      "Sabit bir oran yoktur. Projenin toplam değeri, maliyeti, arsa konumu, imar hakkı, teknik zorluklar ve piyasa koşulları üzerinden fizibilite yapılır.",
  },
  {
    question: "Sözleşmede hangi başlıklar bulunmalı?",
    answer:
      "Bağımsız bölüm paylaşımı, teknik şartname, teslim süresi, teminat, cezai şart, kira ve tahliye koşulları, ruhsat ve iskan sorumlulukları açıkça düzenlenmelidir.",
  },
];

const BuildForLandPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Bayrampaşa Kat Karşılığı İnşaat",
    serviceType: "Kat karşılığı inşaat ve proje geliştirme",
    provider: {
      "@type": "GeneralContractor",
      name: "Yeni RM İnşaat",
      url: SITE_URL,
      telephone: "+905323322960",
    },
    areaServed: "Bayrampaşa, İstanbul",
    url: `${SITE_URL}/bayrampasa-kat-karsiligi-insaat`,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <Seo
        title="Bayrampaşa Kat Karşılığı İnşaat | Yeni RM İnşaat"
        description="Bayrampaşa kat karşılığı inşaat süreci, arsa ve imar fizibilitesi, paylaşım modeli, sözleşme ve proje aşamaları için Yeni RM İnşaat ile görüşün."
        path="/bayrampasa-kat-karsiligi-insaat"
        keywords="Bayrampaşa kat karşılığı inşaat, Bayrampaşa kat karşılığı müteahhit, arsa karşılığı inşaat Bayrampaşa, Yeni RM İnşaat"
        jsonLd={[serviceSchema, faqSchema]}
      />

      <article className="pb-24 text-white">
        <section className="relative flex min-h-[680px] items-end overflow-hidden pb-16 pt-32">
          <img
            src={heroImage}
            alt="Bayrampaşa kat karşılığı inşaat ve proje fizibilitesi"
            className="absolute inset-0 h-full w-full object-cover"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/30" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-zinc-950/90 to-transparent" />

          <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
            <div className="max-w-4xl">
              <span className="inline-flex rounded-full border border-gold/40 bg-black/35 px-4 py-2 text-sm font-semibold text-gold backdrop-blur">
                Bayrampaşa arsa ve yapı sahipleri için
              </span>
              <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-7xl">
                Kat karşılığı inşaat doğru fizibiliteyle başlar.
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-white/82 md:text-lg">
                Arsanızın imar hakkı, mevcut bağımsız bölümler, proje maliyeti
                ve paylaşım modeli birlikte değerlendirilmeden sağlıklı teklif
                oluşturulamaz.
              </p>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center rounded-md bg-gold px-6 py-3 font-bold text-black transition hover:bg-white"
              >
                Ön Fizibilite Talep Et
              </a>
            </div>
          </div>
        </section>

        <AnimatedSection className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wide text-gold">
                Modelin temeli
              </span>
              <h2 className="mt-3 text-4xl font-bold md:text-5xl">
                Kat karşılığı inşaat nasıl çalışır?
              </h2>
              <p className="mt-6 leading-8 text-white/72">
                Kat karşılığı modelde malik veya arsa sahibi, proje geliştirme
                hakkını sözleşmeyle yükleniciye verir. Yüklenici yapım
                sorumluluğunu üstlenir; ortaya çıkan bağımsız bölümler
                fizibilite ve sözleşmedeki paylaşım esaslarına göre dağıtılır.
              </p>
              <p className="mt-4 leading-8 text-white/72">
                Başarılı bir modelin temelinde dengeli paylaşım, ayrıntılı teknik
                şartname, gerçekçi teslim süresi, güçlü teminat ve şeffaf
                iletişim bulunur.
              </p>
            </div>
            <img
              src={projectImage}
              alt="Yeni RM İnşaat Bayrampaşa kat karşılığı konut projesi"
              className="h-[430px] w-full rounded-lg object-cover shadow-2xl"
              loading="lazy"
              decoding="async"
            />
          </div>
        </AnimatedSection>

        <AnimatedSection className="border-y border-white/10 bg-black/35 px-6 py-24 backdrop-blur-md">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-3xl">
              <span className="text-sm font-semibold uppercase tracking-wide text-gold">
                Adım adım
              </span>
              <h2 className="mt-3 text-4xl font-bold md:text-5xl">
                Tekliften önce değerlendirilmesi gerekenler
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.title}
                    className="flex gap-5 rounded-lg border border-white/10 bg-zinc-950/55 p-6"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-gold/15 text-gold">
                      <Icon size={23} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gold/70">
                        ADIM {index + 1}
                      </p>
                      <h3 className="mt-2 text-lg font-semibold">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-white/65">
                        {step.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-lg border border-white/10 bg-black/35 p-6 backdrop-blur-md md:p-8">
              <Scale className="text-gold" size={30} />
              <h2 className="mt-5 text-3xl font-bold">
                Sözleşmede açıklık şart
              </h2>
              <div className="mt-6 space-y-4">
                {[
                  "Bağımsız bölüm ve arsa payı dağılımı",
                  "Malzeme ve uygulama teknik şartnamesi",
                  "Teslim süresi ve gecikme hükümleri",
                  "Teminatlar ve tarafların sorumlulukları",
                  "Ruhsat, iskan, vergi ve harç sorumlulukları",
                  "Tahliye, yıkım ve kira koşulları",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-1 shrink-0 text-gold"
                      size={19}
                    />
                    <span className="leading-7 text-white/72">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-white/10 bg-black/35 p-6 backdrop-blur-md md:p-8">
              <Handshake className="text-gold" size={30} />
              <h2 className="mt-5 text-3xl font-bold">
                Bayrampaşa için yerel değerlendirme
              </h2>
              <p className="mt-6 leading-8 text-white/72">
                Yapı yoğunluğu yüksek bölgelerde küçük parseller, mevcut daire
                sayısı, otopark koşulları ve malik yapısı proje modelini
                etkileyebilir. Bu nedenle internette görülen genel paylaşım
                oranları yerine parsele özel fizibilite yapılmalıdır.
              </p>
              <Link
                to="/bayrampasa-kentsel-donusum"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-gold"
              >
                Kentsel dönüşüm rehberini okuyun
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="border-y border-white/10 bg-black/35 px-6 py-24 backdrop-blur-md">
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 text-center">
              <span className="text-sm font-semibold uppercase tracking-wide text-gold">
                Sıkça sorulanlar
              </span>
              <h2 className="mt-3 text-4xl font-bold md:text-5xl">
                Kat karşılığı inşaat hakkında
              </h2>
            </div>
            <div className="space-y-4">
              {faqItems.map((item, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={item.question}
                    className="rounded-lg border border-white/10 bg-zinc-950/55"
                  >
                    <button
                      type="button"
                      className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      aria-expanded={isOpen}
                    >
                      <span className="font-semibold md:text-lg">
                        {item.question}
                      </span>
                      <span className="shrink-0 text-2xl text-gold">
                        {isOpen ? "-" : "+"}
                      </span>
                    </button>
                    {isOpen && (
                      <p className="px-5 pb-5 text-sm leading-7 text-white/68 md:text-base">
                        {item.answer}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="mx-auto max-w-7xl px-6 pt-24 lg:px-8">
          <div className="rounded-lg border border-gold/30 bg-zinc-950 p-8 shadow-2xl md:p-12">
            <h2 className="max-w-3xl text-3xl font-bold md:text-5xl">
              Arsanız veya binanız için uygulanabilir modeli hesaplayalım.
            </h2>
            <p className="mt-5 max-w-3xl leading-8 text-white/70">
              Ada-parsel, arsa alanı, mevcut bağımsız bölüm ve malik
              bilgileriyle bize ulaşın. Bayrampaşa özelinde ön fizibilite
              görüşmesi yapalım.
            </p>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-md bg-gold px-6 py-3 font-bold text-black transition hover:bg-white"
            >
              Ön Fizibilite İçin Yazın
            </a>
          </div>
        </AnimatedSection>
      </article>
    </>
  );
};

export default BuildForLandPage;
