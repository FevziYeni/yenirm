import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  ExternalLink,
  FileSearch,
  Hammer,
  Landmark,
  MapPin,
  Scale,
  ShieldCheck,
  Users,
} from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import AnimatedSection from "../components/animatedSection";
import Seo, { SITE_URL } from "../components/Seo";
import heroImage from "../assets/optimized/bg_image-1920.jpg";
import inspectionImage from "../assets/optimized/hakkimizda-1400.jpg";
import projectImage from "../assets/projects/ürgüplü.jpg";

const whatsappHref =
  "https://wa.me/905323322960?text=Merhaba%2C%20Bayrampa%C5%9Fa%20kentsel%20d%C3%B6n%C3%BC%C5%9F%C3%BCm%20s%C3%BCreci%20hakk%C4%B1nda%20%C3%B6n%20g%C3%B6r%C3%BC%C5%9Fme%20yapmak%20istiyorum.";

const processSteps = [
  {
    icon: FileSearch,
    title: "Ön bilgi ve belge kontrolü",
    text: "Tapu, ada-parsel, mevcut yapı bilgileri, malik sayısı ve bilinen imar verileri ilk değerlendirme için bir araya getirilir.",
  },
  {
    icon: ClipboardCheck,
    title: "Riskli yapı tespiti",
    text: "6306 sayılı Kanun kapsamındaki resmî riskli yapı tespiti, Bakanlıkça lisanslandırılmış kurum ve kuruluşlar tarafından yapılır.",
  },
  {
    icon: Scale,
    title: "Tebligat ve malik süreci",
    text: "Tespit sonucu ilgili maliklere bildirilir. İtiraz ve karar süreçleri yürürlükteki mevzuata ve resmî tebligata göre takip edilir.",
  },
  {
    icon: Users,
    title: "Malik uzlaşması",
    text: "Yeni proje, paylaşım modeli, teknik şartname, teslim kapsamı ve sözleşme koşulları maliklerle şeffaf biçimde değerlendirilir.",
  },
  {
    icon: Building2,
    title: "Fizibilite ve proje",
    text: "İmar koşulları, arsa alanı, bağımsız bölüm sayısı, otopark, zemin ve mimari ihtiyaçlar birlikte ele alınır.",
  },
  {
    icon: Hammer,
    title: "Yıkım ve uygulama",
    text: "Gerekli izinler tamamlandıktan sonra yıkım, ruhsat ve yapım süreçleri iş güvenliği ve teknik standartlarla yürütülür.",
  },
  {
    icon: BadgeCheck,
    title: "Teslim ve yeni yaşam",
    text: "Yapı tamamlandıktan sonra kontrol, iskan ve teslim adımlarıyla güvenli ve çağdaş yaşam alanına geçiş sağlanır.",
  },
];

const evaluationFactors = [
  { factor: "Taşıyıcı sistem", priority: 100, color: "#dc2626" },
  { factor: "Zemin ve temel", priority: 95, color: "#ea580c" },
  { factor: "Beton ve donatı", priority: 90, color: "#f97316" },
  { factor: "Yapısal düzensizlik", priority: 85, color: "#eab308" },
  { factor: "Proje / uygulama", priority: 80, color: "#ca8a04" },
  { factor: "Hasar ve bakım", priority: 65, color: "#B79645" },
];

const reasons = [
  {
    title: "Can güvenliği",
    text: "Deprem tehlikesi bulunan İstanbul’da temel amaç, riskli yapı stokunu azaltmak ve güvenli yaşam alanları oluşturmaktır.",
  },
  {
    title: "Güncel yapı standartları",
    text: "Yeni yapıların güncel deprem, yangın, enerji verimliliği, erişilebilirlik ve yapı güvenliği kurallarına uygun tasarlanması hedeflenir.",
  },
  {
    title: "Yaşam kalitesi",
    text: "Doğru planlanan dönüşüm; otopark, asansör, yalıtım, ortak alanlar ve işlevsel daire planlarıyla yaşam kalitesini artırabilir.",
  },
  {
    title: "Gayrimenkul değeri",
    text: "Konumu ve projesi doğru değerlendirilen yeni bir yapı, kullanım güvenliğiyle birlikte gayrimenkul değerini de destekleyebilir.",
  },
];

const faqItems = [
  {
    question: "Binanın eski olması otomatik olarak riskli olduğu anlamına gelir mi?",
    answer:
      "Hayır. Bina yaşı önemli bir ön bilgi olsa da tek başına riskli yapı kararı verdirmez. Taşıyıcı sistem, zemin, beton ve donatı özellikleri, proje uygunluğu, yapısal düzensizlikler ve mevcut hasarlar mühendislik incelemesiyle değerlendirilmelidir.",
  },
  {
    question: "Riskli yapı tespitini kim yapabilir?",
    answer:
      "6306 sayılı Kanun kapsamındaki resmî riskli yapı tespiti, Bakanlık tarafından lisanslandırılmış kurum ve kuruluşlarca yapılır. Hızlı tarama veya ön inceleme, resmî riskli yapı tespitiyle aynı işlem değildir.",
  },
  {
    question: "Bayrampaşa’da kentsel dönüşüm için ilk adım nedir?",
    answer:
      "Tapu ve ada-parsel bilgilerinin, mevcut yapı ve bağımsız bölüm sayısının, malik yapısının ve bilinen imar bilgilerinin toplanmasıyla ön fizibilite yapılması en doğru başlangıçtır.",
  },
  {
    question: "Kat karşılığı model her bina için uygun mudur?",
    answer:
      "Hayır. Arsa büyüklüğü, imar hakkı, mevcut bağımsız bölüm sayısı, proje maliyeti, satış potansiyeli ve malik beklentileri birlikte incelenmelidir. Bazı yapılarda kat karşılığı, bazılarında maliyet paylaşımı veya farklı finansman modelleri daha uygulanabilir olabilir.",
  },
  {
    question: "Kentsel dönüşüm ne kadar sürer?",
    answer:
      "Süre; malik uzlaşması, riskli yapı süreci, tahliye, yıkım, mimari proje, ruhsat, zemin koşulları ve yapım kapsamına göre değişir. Yerinde inceleme ve belge kontrolü olmadan kesin süre verilmesi sağlıklı değildir.",
  },
  {
    question: "Devlet desteği veya kira yardımı var mı?",
    answer:
      "Kira yardımı, kredi veya faiz desteği ve dönemsel kampanyalar yürürlükteki mevzuata, başvuru şartlarına ve proje konumuna göre değişebilir. Güncel tutarlar ve uygunluk koşulları Kentsel Dönüşüm Başkanlığı ile ilgili resmî kanallardan doğrulanmalıdır.",
  },
];

const officialSources = [
  {
    title: "6306 sayılı Kanun",
    description:
      "Afet Riski Altındaki Alanların Dönüştürülmesi Hakkında Kanun.",
    href: "https://www.mevzuat.gov.tr/MevzuatMetin/1.5.6306.pdf",
  },
  {
    title: "Kentsel Dönüşüm Başkanlığı",
    description:
      "Güncel duyurular, uygulamalar ve resmî kentsel dönüşüm bilgileri.",
    href: "https://kentseldonusum.gov.tr/",
  },
  {
    title: "İBB Bina Tespiti",
    description:
      "İstanbul için hızlı tarama yöntemi, başvuru ve sonuç süreçleri.",
    href: "https://binatespiti.ibb.istanbul/",
  },
];

const UrbanTransformationPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Bayrampaşa Kentsel Dönüşüm Rehberi",
    description:
      "Bayrampaşa kentsel dönüşüm süreci, riskli yapı tespiti, kat karşılığı inşaat, malik kararları ve proje aşamaları hakkında kapsamlı rehber.",
    dateModified: "2026-06-23",
    datePublished: "2026-06-23",
    author: {
      "@type": "Organization",
      name: "Yeni RM İnşaat",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Yeni RM İnşaat",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/favicon.png`,
      },
    },
    mainEntityOfPage: `${SITE_URL}/bayrampasa-kentsel-donusum`,
    image: `${SITE_URL}/favicon.png`,
    about: [
      "Bayrampaşa kentsel dönüşüm",
      "riskli yapı tespiti",
      "kat karşılığı inşaat",
      "Bayrampaşa müteahhit",
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Ana Sayfa",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Bayrampaşa Kentsel Dönüşüm",
        item: `${SITE_URL}/bayrampasa-kentsel-donusum`,
      },
    ],
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
        title="Bayrampaşa Kentsel Dönüşüm Rehberi | Yeni RM İnşaat"
        description="Bayrampaşa kentsel dönüşüm süreci, riskli yapı tespiti, kat karşılığı inşaat, malik kararları, maliyetler ve proje aşamaları hakkında kapsamlı rehber."
        path="/bayrampasa-kentsel-donusum"
        keywords="Bayrampaşa kentsel dönüşüm, Bayrampaşa riskli yapı, kentsel dönüşüm süreci, Bayrampaşa kat karşılığı inşaat, Bayrampaşa müteahhit"
        jsonLd={[articleSchema, breadcrumbSchema, faqSchema]}
      />

      <article className="pb-24 text-white">
        <section className="relative flex min-h-[720px] items-end overflow-hidden pb-16 pt-32 md:min-h-[760px]">
          <img
            src={heroImage}
            alt="Bayrampaşa kentsel dönüşüm ve güvenli yapı rehberi"
            className="absolute inset-0 h-full w-full object-cover"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/30" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-zinc-950/90 to-transparent" />

          <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="mb-6 flex flex-wrap items-center gap-3 text-sm">
                <Link to="/" className="text-white/60 transition hover:text-gold">
                  Ana Sayfa
                </Link>
                <span className="text-white/35">/</span>
                <span className="text-gold">Kentsel Dönüşüm</span>
              </div>
              <span className="inline-flex rounded-full border border-gold/40 bg-black/35 px-4 py-2 text-sm font-semibold text-gold backdrop-blur">
                Bayrampaşa özelinde kapsamlı rehber
              </span>
              <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-7xl">
                Kentsel dönüşüm: güvenli bir yapıya giden yol.
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-white/82 md:text-lg">
                Riskli yapı tespitinden malik kararlarına, proje
                fizibilitesinden yapım ve teslime kadar Bayrampaşa’da kentsel
                dönüşüm sürecini anlaşılır şekilde inceleyin.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#surec"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-gold px-6 py-3 font-bold text-black transition hover:bg-white"
                >
                  Süreci İncele
                  <ArrowRight size={18} />
                </a>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md border border-white/35 bg-black/25 px-6 py-3 font-bold text-white backdrop-blur transition hover:border-gold hover:text-gold"
                >
                  Ön Görüşme Talep Et
                </a>
              </div>
              <p className="mt-5 text-xs text-white/50">
                Son güncelleme: 23 Haziran 2026
              </p>
            </div>
          </div>
        </section>

        <AnimatedSection className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wide text-gold">
                Temel bilgiler
              </span>
              <h2 className="mt-3 text-4xl font-bold md:text-5xl">
                Kentsel dönüşüm nedir?
              </h2>
              <div className="mt-6 space-y-5 text-base leading-8 text-white/75">
                <p>
                  Kentsel dönüşüm; afet riski taşıyan yapıların ve alanların
                  güvenli, sağlıklı ve güncel standartlara uygun hale
                  getirilmesini amaçlayan hukuki, teknik ve sosyal bir süreçtir.
                  Türkiye’de temel yasal çerçeve 6306 sayılı Kanun ile
                  belirlenir.
                </p>
                <p>
                  Süreç yalnızca eski binanın yıkılıp yenisinin yapılması
                  değildir. Risk tespiti, malik kararları, imar ve proje
                  fizibilitesi, finansman modeli, tahliye, yıkım, ruhsat, yapım
                  ve teslim adımlarının birlikte yönetilmesini gerektirir.
                </p>
                <p>
                  Bayrampaşa gibi yapı yoğunluğu yüksek ilçelerde her parselin
                  imar hakkı, malik yapısı ve ekonomik uygulanabilirliği
                  farklıdır. Bu nedenle dönüşüm kararı, belge ve yerinde
                  inceleme yapılmadan yalnızca bina yaşına bakılarak
                  verilmemelidir.
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src={inspectionImage}
                alt="Bayrampaşa riskli yapı ön inceleme ve kentsel dönüşüm çalışması"
                className="h-[440px] w-full rounded-lg object-cover shadow-2xl"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute -bottom-6 left-5 right-5 rounded-lg border border-white/10 bg-black/75 p-5 shadow-2xl backdrop-blur-md">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="mt-1 shrink-0 text-gold" size={22} />
                  <p className="text-sm leading-6 text-white/75">
                    Hızlı tarama, gözlemsel inceleme veya bina yaşı tek başına
                    6306 kapsamındaki resmî riskli yapı tespiti yerine geçmez.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="border-y border-white/10 bg-black/35 px-6 py-20 backdrop-blur-md">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 max-w-3xl">
              <span className="text-sm font-semibold uppercase tracking-wide text-gold">
                Neden gerekli?
              </span>
              <h2 className="mt-3 text-4xl font-bold md:text-5xl">
                Kentsel dönüşüm neden şart?
              </h2>
              <p className="mt-5 leading-8 text-white/70">
                Dönüşümün önceliği can güvenliğidir. Bunun yanında doğru
                planlanan projeler yaşam kalitesi, enerji verimliliği ve
                gayrimenkul değeri açısından da önemli kazanımlar sağlayabilir.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {reasons.map((reason, index) => (
                <div
                  key={reason.title}
                  className="rounded-lg border border-white/10 bg-zinc-950/50 p-6"
                >
                  <span className="text-3xl font-extrabold text-gold/40">
                    0{index + 1}
                  </span>
                  <h3 className="mt-5 text-xl font-semibold">{reason.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/65">
                    {reason.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection
          className="mx-auto max-w-7xl px-6 py-24 lg:px-8"
        >
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wide text-gold">
                Yapı güvenliği
              </span>
              <h2 className="mt-3 text-4xl font-bold md:text-5xl">
                Bir binanın sağlamlığı nasıl değerlendirilir?
              </h2>
              <p className="mt-6 leading-8 text-white/72">
                Mühendislik değerlendirmesi tek bir göstergeye dayanmaz.
                Taşıyıcı sistem, temel ve zemin, beton ve donatı özellikleri,
                yapısal düzensizlikler, proje ile uygulama uyumu ve mevcut
                hasarlar birlikte incelenir.
              </p>
              <div className="mt-6 rounded-lg border border-gold/30 bg-gold/10 p-5">
                <p className="text-sm leading-7 text-white/78">
                  <strong className="text-gold">Önemli:</strong> Bu grafik
                  eğitim amaçlı bir inceleme önceliği görselleştirmesidir.
                  Binanızın deprem performansını veya riskli yapı sonucunu
                  göstermez.
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-white/10 bg-black/40 p-4 shadow-2xl backdrop-blur-md md:p-6">
              <h3 className="mb-6 text-xl font-semibold md:text-2xl">
                Yapısal incelemede kritik başlıklar
              </h3>
              <ResponsiveContainer width="100%" height={360}>
                <BarChart
                  data={evaluationFactors}
                  layout="vertical"
                  margin={{ top: 0, right: 15, left: 20, bottom: 0 }}
                >
                  <CartesianGrid
                    stroke="rgba(255,255,255,0.08)"
                    horizontal={false}
                  />
                  <XAxis
                    type="number"
                    domain={[0, 100]}
                    hide
                  />
                  <YAxis
                    type="category"
                    dataKey="factor"
                    width={125}
                    tick={{ fill: "rgba(255,255,255,0.78)", fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip
                    cursor={{ fill: "rgba(255,255,255,0.04)" }}
                    formatter={(value) => [`${value}`, "İnceleme önceliği"]}
                    contentStyle={{
                      backgroundColor: "#111",
                      border: "1px solid rgba(255,255,255,0.15)",
                      borderRadius: "6px",
                    }}
                  />
                  <Bar dataKey="priority" radius={[0, 4, 4, 0]}>
                    {evaluationFactors.map((entry) => (
                      <Cell key={entry.factor} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection
          id="surec"
          className="border-y border-white/10 bg-black/35 px-6 py-24 backdrop-blur-md"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-3xl">
              <span className="text-sm font-semibold uppercase tracking-wide text-gold">
                Adım adım
              </span>
              <h2 className="mt-3 text-4xl font-bold md:text-5xl">
                Kentsel dönüşüm süreci nasıl işler?
              </h2>
              <p className="mt-5 leading-8 text-white/70">
                Her proje kendine özgüdür; ancak sağlıklı bir dönüşüm süreci
                genel olarak aşağıdaki adımlar üzerinden ilerler.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {processSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.title}
                    className="flex gap-5 rounded-lg border border-white/10 bg-zinc-950/50 p-6"
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
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <img
              src={projectImage}
              alt="Yeni RM İnşaat Bayrampaşa kat karşılığı kentsel dönüşüm proje referansı"
              className="h-[460px] w-full rounded-lg object-cover shadow-2xl"
              loading="lazy"
              decoding="async"
            />

            <div>
              <span className="text-sm font-semibold uppercase tracking-wide text-gold">
                Bayrampaşa özelinde
              </span>
              <h2 className="mt-3 text-4xl font-bold md:text-5xl">
                Her parsel için ayrı fizibilite gerekir.
              </h2>
              <p className="mt-6 leading-8 text-white/72">
                Bayrampaşa’da yoğun yapılaşma, mevcut bağımsız bölüm sayısı,
                parsel ölçüleri, yol ve otopark koşulları ile imar hakları
                projenin uygulanabilirliğini doğrudan etkileyebilir.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  "Ada-parsel ve tapu bilgileri",
                  "Mevcut bağımsız bölüm ve malik yapısı",
                  "İmar hakkı ve mimari yerleşim",
                  "Zemin, temel ve yapısal koşullar",
                  "Kat karşılığı veya maliyet paylaşım modeli",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="shrink-0 text-gold" size={20} />
                    <span className="text-white/78">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="rounded-lg border border-white/10 bg-black/35 p-6 backdrop-blur-md">
              <Landmark className="text-gold" size={28} />
              <h3 className="mt-5 text-xl font-semibold">
                Maliyet ve finansman
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/67">
                Maliyet; toplam inşaat alanı, zemin, bodrum ve otopark,
                malzeme seviyesi, yıkım, ruhsat ve teknik sistemlere göre
                değişir. Belge incelemeden verilen tek rakam güvenilir değildir.
              </p>
            </div>
            <div className="rounded-lg border border-white/10 bg-black/35 p-6 backdrop-blur-md">
              <Scale className="text-gold" size={28} />
              <h3 className="mt-5 text-xl font-semibold">
                Sözleşme ve malik hakları
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/67">
                Paylaşım modeli, teknik şartname, teslim süresi, teminat,
                cezai şartlar ve ortak alanlar sözleşmede açıkça yazılmalıdır.
                Hukuki belgeler uzman desteğiyle incelenmelidir.
              </p>
            </div>
            <div className="rounded-lg border border-white/10 bg-black/35 p-6 backdrop-blur-md">
              <ShieldCheck className="text-gold" size={28} />
              <h3 className="mt-5 text-xl font-semibold">
                Resmî destekler
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/67">
                Kira yardımı, kredi, faiz desteği ve dönemsel kampanyaların
                şartları değişebilir. Güncel tutarlar yalnızca resmî kurumların
                duyurularından doğrulanmalıdır.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="border-y border-white/10 bg-black/35 px-6 py-24 backdrop-blur-md">
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 text-center">
              <span className="text-sm font-semibold uppercase tracking-wide text-gold">
                Merak edilenler
              </span>
              <h2 className="mt-3 text-4xl font-bold md:text-5xl">
                Kentsel dönüşüm hakkında sıkça sorulan sorular
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

        <AnimatedSection className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wide text-gold">
                Bilgi güvenliği
              </span>
              <h2 className="mt-3 text-4xl font-bold">
                Resmî kaynaklardan doğrulayın.
              </h2>
              <p className="mt-5 leading-8 text-white/68">
                Mevzuat, destek tutarları ve başvuru şartları değişebilir.
                Karar vermeden önce güncel resmî metinleri ve yetkili kurum
                açıklamalarını kontrol edin.
              </p>
            </div>

            <div className="space-y-4">
              {officialSources.map((source) => (
                <a
                  key={source.title}
                  href={source.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-5 rounded-lg border border-white/10 bg-black/35 p-5 transition hover:border-gold/60"
                >
                  <div>
                    <h3 className="font-semibold text-gold">{source.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/65">
                      {source.description}
                    </p>
                  </div>
                  <ExternalLink className="shrink-0 text-white/50" size={20} />
                </a>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-lg border border-gold/30 bg-zinc-950 p-8 shadow-2xl md:p-12">
            <div className="absolute right-0 top-0 h-full w-1/3 bg-gold/5" />
            <div className="relative z-10 max-w-3xl">
              <div className="flex items-center gap-3 text-gold">
                <MapPin size={24} />
                <span className="font-semibold">Bayrampaşa / İstanbul</span>
              </div>
              <h2 className="mt-5 text-3xl font-bold md:text-5xl">
                Binanız için ilk adımı birlikte değerlendirelim.
              </h2>
              <p className="mt-5 leading-8 text-white/70">
                Tapu, ada-parsel ve mevcut yapı bilgilerinizi paylaşın.
                Bayrampaşa özelinde kentsel dönüşüm ve kat karşılığı inşaat
                seçeneklerini ön görüşmede ele alalım.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-gold px-6 py-3 font-bold text-black transition hover:bg-white"
                >
                  WhatsApp ile Ön Görüşme
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-md border border-white/30 px-6 py-3 font-bold text-white transition hover:border-gold hover:text-gold"
                >
                  İletişim Bilgileri
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </article>
    </>
  );
};

export default UrbanTransformationPage;
