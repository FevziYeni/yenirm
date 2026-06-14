import React, { useState } from "react";
import AnimatedSection from "./animatedSection";

export const bayrampasaFaqs = [
  {
    question: "Bayrampaşa’da kentsel dönüşüm süreci nasıl başlar?",
    answer:
      "İlk adım mevcut binanın yaşı, tapu durumu, arsa bilgisi ve risk durumunun ön değerlendirmesidir. Ardından imar durumu, malik beklentileri ve proje yapılabilirliği birlikte incelenir.",
  },
  {
    question: "Kat karşılığı inşaat için hangi bilgiler gerekir?",
    answer:
      "Arsa metrekaresi, ada-parsel bilgisi, mevcut daire sayısı, kat sayısı, tapu durumu ve bölgenin imar koşulları gerekir. Bu bilgilerle Bayrampaşa özelinde daha sağlıklı bir ön fizibilite hazırlanabilir.",
  },
  {
    question: "Yeni RM İnşaat hangi bölgelerde çalışıyor?",
    answer:
      "Yeni RM İnşaat öncelikli olarak Bayrampaşa ve İstanbul çevresinde kentsel dönüşüm, kat karşılığı inşaat ve konut projeleri üzerine çalışmalar yürütmektedir.",
  },
  {
    question: "Kentsel dönüşümde kesin maliyet hemen çıkar mı?",
    answer:
      "Kesin maliyet için imar durumu, zemin koşulları, proje alanı, malzeme seviyesi, ruhsat süreçleri ve yerinde keşif değerlendirilmelidir. İlk görüşmede yalnızca tahmini aralık ve yol haritası paylaşılabilir.",
  },
  {
    question: "Bayrampaşa’da müteahhit seçerken nelere dikkat edilmeli?",
    answer:
      "Firmanın tamamladığı projeler, teknik ekibi, şeffaf sözleşme yaklaşımı, iletişim süreci ve yerel bölge tecrübesi mutlaka incelenmelidir.",
  },
];

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <AnimatedSection className="mx-auto max-w-5xl px-6 py-24 text-white lg:px-8">
      <div className="mb-10 text-center">
        <span className="text-sm font-semibold uppercase tracking-wide text-gold">
          Sıkça sorulan sorular
        </span>
        <h2 className="mt-3 text-4xl font-bold md:text-5xl">
          Bayrampaşa kentsel dönüşüm ve kat karşılığı inşaat
        </h2>
      </div>

      <div className="space-y-4">
        {bayrampasaFaqs.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={item.question}
              className="rounded-lg border border-white/10 bg-black/35 shadow-2xl backdrop-blur-md"
            >
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
              >
                <span className="text-base font-semibold md:text-lg">
                  {item.question}
                </span>
                <span className="shrink-0 text-2xl text-gold">
                  {isOpen ? "-" : "+"}
                </span>
              </button>
              {isOpen && (
                <p className="px-5 pb-5 text-sm leading-7 text-white/72 md:text-base">
                  {item.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </AnimatedSection>
  );
};

export default FaqSection;
