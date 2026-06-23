import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ClipboardList,
  HardHat,
  MapPin,
  ShieldCheck,
  Users,
} from "lucide-react";
import AnimatedSection from "../components/animatedSection";
import Seo, { SITE_URL } from "../components/Seo";
import heroImage from "../assets/optimized/hakkimizda-1400.jpg";
import projectImage from "../assets/projects/68.jpg";

const whatsappHref =
  "https://wa.me/905323322960?text=Merhaba%2C%20Bayrampa%C5%9Fa%27daki%20in%C5%9Faat%20projem%20hakk%C4%B1nda%20%C3%B6n%20g%C3%B6r%C3%BC%C5%9Fme%20yapmak%20istiyorum.";

const services = [
  {
    icon: Building2,
    title: "Kentsel dönüşüm",
    text: "Riskli yapı sürecinden fizibilite, sözleşme, proje ve teslime kadar Bayrampaşa odaklı dönüşüm yaklaşımı.",
    href: "/bayrampasa-kentsel-donusum",
  },
  {
    icon: Users,
    title: "Kat karşılığı inşaat",
    text: "Arsa, imar hakkı, malik yapısı ve paylaşım modelinin birlikte değerlendirildiği proje geliştirme hizmeti.",
    href: "/bayrampasa-kat-karsiligi-insaat",
  },
  {
    icon: HardHat,
    title: "Müteahhitlik ve uygulama",
    text: "Planlama, saha koordinasyonu, teknik uygulama, kalite kontrol ve teslim süreçlerinin tek merkezden yönetimi.",
    href: "/projects",
  },
];

const selectionCriteria = [
  "Bayrampaşa ve yakın çevrede gerçek proje deneyimi",
  "Açık ve ayrıntılı teknik şartname",
  "Şeffaf paylaşım, maliyet ve teslim koşulları",
  "Ulaşılabilir teknik ve idari ekip",
  "Tamamlanan projeler ve doğrulanabilir referanslar",
  "Sözleşmede teminat, süre ve sorumlulukların açıklığı",
];

const BayrampasaConstructionPage: React.FC = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Bayrampaşa İnşaat Firması ve Müteahhitlik Hizmetleri",
    serviceType:
      "Kentsel dönüşüm, kat karşılığı inşaat ve müteahhitlik hizmetleri",
    provider: {
      "@type": "GeneralContractor",
      name: "Yeni RM İnşaat",
      url: SITE_URL,
      telephone: "+905323322960",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bayrampaşa",
        addressRegion: "İstanbul",
        addressCountry: "TR",
      },
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Bayrampaşa, İstanbul",
    },
    url: `${SITE_URL}/bayrampasa-insaat-firmasi`,
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
        name: "Bayrampaşa İnşaat Firması",
        item: `${SITE_URL}/bayrampasa-insaat-firmasi`,
      },
    ],
  };

  return (
    <>
      <Seo
        title="Bayrampaşa İnşaat Firması ve Müteahhit | Yeni RM"
        description="Bayrampaşa inşaat firması Yeni RM; kentsel dönüşüm, kat karşılığı inşaat, müteahhitlik ve konut projelerinde 17 yılı aşkın tecrübeyle hizmet verir."
        path="/bayrampasa-insaat-firmasi"
        keywords="Bayrampaşa inşaat firması, Bayrampaşa müteahhit, Bayrampaşa yapı firması, Bayrampaşa konut projesi, Yeni RM İnşaat"
        jsonLd={[serviceSchema, breadcrumbSchema]}
      />

      <article className="pb-24 text-white">
        <section className="relative flex min-h-[680px] items-end overflow-hidden pb-16 pt-32">
          <img
            src={heroImage}
            alt="Bayrampaşa inşaat firması Yeni RM İnşaat proje ve müteahhitlik hizmetleri"
            className="absolute inset-0 h-full w-full object-cover"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/35" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-zinc-950/90 to-transparent" />

          <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
            <div className="max-w-4xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-black/35 px-4 py-2 text-sm font-semibold text-gold backdrop-blur">
                <MapPin size={16} />
                Bayrampaşa / İstanbul
              </span>
              <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-7xl">
                Bayrampaşa inşaat firması ararken güveni ve tecrübeyi birlikte değerlendirin.
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-white/82 md:text-lg">
                Yeni RM İnşaat; Bayrampaşa’da kentsel dönüşüm, kat karşılığı
                inşaat, müteahhitlik ve modern konut projelerinde yerel bilgiyle
                teknik disiplini bir araya getirir.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-gold px-6 py-3 font-bold text-black transition hover:bg-white"
                >
                  Projenizi Görüşelim
                </a>
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-white/35 bg-black/25 px-6 py-3 font-bold backdrop-blur transition hover:border-gold hover:text-gold"
                >
                  Referansları İncele
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <AnimatedSection className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wide text-gold">
                Yerel uzmanlık
              </span>
              <h2 className="mt-3 text-4xl font-bold md:text-5xl">
                Bayrampaşa’da doğru inşaat firması ne sağlar?
              </h2>
              <p className="mt-6 leading-8 text-white/72">
                Yerel bir projede yalnızca yapım kabiliyeti yeterli değildir.
                Parsel yapısı, mevcut bağımsız bölümler, malik beklentileri,
                bölgenin yapı yoğunluğu ve proje ekonomisi birlikte
                değerlendirilmelidir.
              </p>
              <p className="mt-4 leading-8 text-white/72">
                Yeni RM İnşaat, projenin ilk fizibilitesinden teknik uygulama ve
                teslim aşamasına kadar anlaşılır iletişim, düzenli takip ve
                uzun ömürlü yapı hedefiyle çalışır.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
              {[
                { value: "17+", label: "Yıl sektör deneyimi" },
                { value: "15+", label: "Proje referansı" },
                { value: "56", label: "Ekip gücü" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg border border-white/10 bg-black/35 p-6 text-center shadow-xl backdrop-blur-md"
                >
                  <p className="text-4xl font-extrabold text-gold">
                    {stat.value}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-white/65">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="border-y border-white/10 bg-black/35 px-6 py-24 backdrop-blur-md">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-3xl">
              <span className="text-sm font-semibold uppercase tracking-wide text-gold">
                Hizmetlerimiz
              </span>
              <h2 className="mt-3 text-4xl font-bold md:text-5xl">
                Projenize uygun çalışma modeli
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <Link
                    key={service.title}
                    to={service.href}
                    className="group rounded-lg border border-white/10 bg-zinc-950/55 p-6 transition hover:-translate-y-1 hover:border-gold/60"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-gold/15 text-gold">
                      <Icon size={24} />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-white/65">
                      {service.text}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold">
                      Detayları İncele
                      <ArrowRight
                        size={16}
                        className="transition group-hover:translate-x-1"
                      />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <img
              src={projectImage}
              alt="Yeni RM İnşaat Bayrampaşa modern konut ve inşaat projesi"
              className="h-[460px] w-full rounded-lg object-cover shadow-2xl"
              loading="lazy"
              decoding="async"
            />
            <div>
              <span className="text-sm font-semibold uppercase tracking-wide text-gold">
                Firma seçimi
              </span>
              <h2 className="mt-3 text-4xl font-bold md:text-5xl">
                Müteahhit seçerken yalnızca teklife bakmayın.
              </h2>
              <div className="mt-8 space-y-4">
                {selectionCriteria.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-1 shrink-0 text-gold"
                      size={20}
                    />
                    <span className="leading-7 text-white/75">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                icon: ClipboardList,
                title: "Ön fizibilite",
                text: "Tapu, ada-parsel, yapı ve malik bilgileri üzerinden uygulanabilir modelin ilk değerlendirmesi.",
              },
              {
                icon: ShieldCheck,
                title: "Teknik güven",
                text: "Mühendislik, iş güvenliği, malzeme seçimi ve kalite kontrol başlıklarının birlikte yönetimi.",
              },
              {
                icon: BadgeCheck,
                title: "Teslim disiplini",
                text: "Planlama, saha takibi, bilgilendirme ve teslim koşullarının açık şekilde yürütülmesi.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-lg border border-white/10 bg-black/35 p-6 backdrop-blur-md"
                >
                  <Icon className="text-gold" size={28} />
                  <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/65">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </AnimatedSection>

        <AnimatedSection className="mx-auto max-w-7xl px-6 pt-24 lg:px-8">
          <div className="rounded-lg border border-gold/30 bg-zinc-950 p-8 shadow-2xl md:p-12">
            <h2 className="max-w-3xl text-3xl font-bold md:text-5xl">
              Bayrampaşa’daki projeniz için ilk değerlendirmeyi yapalım.
            </h2>
            <p className="mt-5 max-w-3xl leading-8 text-white/70">
              Projenizin konumu, arsa ve mevcut yapı bilgileriyle bize ulaşın.
              Uygun çalışma modelini ön görüşmede birlikte değerlendirelim.
            </p>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-md bg-gold px-6 py-3 font-bold text-black transition hover:bg-white"
            >
              WhatsApp ile İletişime Geç
            </a>
          </div>
        </AnimatedSection>
      </article>
    </>
  );
};

export default BayrampasaConstructionPage;
