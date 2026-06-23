import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, Handshake, ShieldCheck } from "lucide-react";
import AnimatedSection from "./animatedSection";

const services = [
  {
    icon: Building2,
    title: "Bayrampaşa İnşaat Firması",
    text: "Müteahhitlik, modern konut ve proje geliştirme hizmetlerimizi inceleyin.",
    href: "/bayrampasa-insaat-firmasi",
  },
  {
    icon: ShieldCheck,
    title: "Bayrampaşa Kentsel Dönüşüm",
    text: "Riskli yapı, malik süreci, fizibilite ve dönüşüm aşamalarını öğrenin.",
    href: "/bayrampasa-kentsel-donusum",
  },
  {
    icon: Handshake,
    title: "Bayrampaşa Kat Karşılığı İnşaat",
    text: "Arsa fizibilitesi, paylaşım modeli ve sözleşme sürecini inceleyin.",
    href: "/bayrampasa-kat-karsiligi-insaat",
  },
];

const LocalServiceLinks: React.FC = () => (
  <AnimatedSection className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
    <div className="mb-10 max-w-3xl">
      <span className="text-sm font-semibold uppercase tracking-wide text-gold">
        Bayrampaşa hizmetleri
      </span>
      <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl">
        Projeniz için doğru bilgiye ulaşın.
      </h2>
    </div>
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {services.map((service) => {
        const Icon = service.icon;
        return (
          <Link
            key={service.title}
            to={service.href}
            className="group rounded-lg border border-white/10 bg-black/35 p-6 text-white shadow-xl backdrop-blur-md transition hover:-translate-y-1 hover:border-gold/60"
          >
            <Icon className="text-gold" size={28} />
            <h3 className="mt-5 text-xl font-semibold">{service.title}</h3>
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
  </AnimatedSection>
);

export default LocalServiceLinks;
