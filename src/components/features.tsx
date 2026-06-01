import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSmile,
  faBolt,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";
import AnimatedSection from "./animatedSection";

const FeaturesSection = () => {
  return (
    <AnimatedSection className="px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="mb-10 max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wide text-gold">
            Neden Yeni RM?
          </span>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            Dönüşüm sürecinde güven veren çalışma disiplini.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-lg border border-white/10 bg-black/35 p-6 shadow-2xl backdrop-blur-md transition hover:-translate-y-1 hover:border-gold/60">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-gold/15 text-gold">
              <FontAwesomeIcon
                icon={faSmile}
                size="lg"
                aria-hidden="true"
              />
            </div>
            <h3
              className="mb-3 text-lg font-semibold"
              aria-label="Müşteri memnuniyeti Bayrampaşa kentsel dönüşüm"
            >
              Memnuniyet Odaklı Süreç
            </h3>
            <p className="text-sm leading-6 text-white/72">
              Bayrampaşa ve İstanbul’daki kat karşılığı ve kentsel dönüşüm
              projelerinde, işin her adımını anlaşılır ve şeffaf şekilde
              yönetiyoruz.
            </p>
          </div>

          <div className="rounded-lg border border-white/10 bg-black/35 p-6 shadow-2xl backdrop-blur-md transition hover:-translate-y-1 hover:border-gold/60">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-gold/15 text-gold">
              <FontAwesomeIcon icon={faBolt} size="lg" aria-hidden="true" />
            </div>
            <h3
              className="mb-3 text-lg font-semibold"
              aria-label="Hızlı teslimat ve proje süresi"
            >
              Planlı Teslimat
            </h3>
            <p className="text-sm leading-6 text-white/72">
              Proje planlama, saha koordinasyonu ve teslim sürecini düzenli
              takip ederek zamanında ve kaliteli sonuç üretmeye odaklanıyoruz.
            </p>
          </div>

          <div className="rounded-lg border border-white/10 bg-black/35 p-6 shadow-2xl backdrop-blur-md transition hover:-translate-y-1 hover:border-gold/60">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-gold/15 text-gold">
              <FontAwesomeIcon
                icon={faShieldAlt}
                size="lg"
                aria-hidden="true"
              />
            </div>
            <h3
              className="mb-3 text-lg font-semibold"
              aria-label="Güvenilir müteahhit ve inşaat firması"
            >
              Tecrübeli Müteahhitlik
            </h3>
            <p className="text-sm leading-6 text-white/72">
              17+ yıllık tecrübemizle güvenli yapı, doğru maliyet ve uzun
              ömürlü kullanım beklentisini birlikte ele alıyoruz.
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default FeaturesSection;
