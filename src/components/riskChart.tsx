import React from "react";
import { Link } from "react-router-dom";
import { AlertTriangle, ArrowRight, Building2, ShieldCheck } from "lucide-react";
import AnimatedSection from "./animatedSection";

const RiskChartSection: React.FC = () => {
  return (
    <AnimatedSection className="px-6 py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div>
          <span className="text-sm font-semibold uppercase tracking-wide text-gold">
            Yapı güvenliği
          </span>
          <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl">
            Kentsel Dönüşüm Neden Şart?
          </h2>
          <p className="mt-6 text-lg leading-8 text-white">
            İstanbul’da güvenli yapı stoğunun artırılması, deprem riskinin
            azaltılması ve güncel standartlara uygun yaşam alanlarının
            oluşturulması için kentsel dönüşüm kritik öneme sahiptir.
          </p>
          <p className="mt-4 text-base leading-7 text-white">
            Bina yaşı tek başına risk sonucu vermez. Taşıyıcı sistem, zemin,
            beton ve donatı, yapısal düzensizlikler ve mevcut hasarlar uzman
            mühendislerce birlikte değerlendirilmelidir.
          </p>
          <Link
            to="/bayrampasa-kentsel-donusum"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 font-bold text-black transition hover:bg-white"
          >
            Kapsamlı Rehberi İncele
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid gap-4">
          <div className="flex gap-4 rounded-lg border border-white/10 bg-black/40 p-5 shadow-xl backdrop-blur-md">
            <ShieldCheck className="shrink-0 text-gold" size={28} />
            <div>
              <h3 className="font-semibold text-white">Can güvenliği</h3>
              <p className="mt-2 text-sm leading-6 text-white/65">
                Öncelik, yapıların deprem etkileri karşısındaki gerçek
                performansının uzman yöntemlerle değerlendirilmesidir.
              </p>
            </div>
          </div>
          <div className="flex gap-4 rounded-lg border border-white/10 bg-black/40 p-5 shadow-xl backdrop-blur-md">
            <Building2 className="shrink-0 text-gold" size={28} />
            <div>
              <h3 className="font-semibold text-white">Güncel standartlar</h3>
              <p className="mt-2 text-sm leading-6 text-white/65">
                Yeni yapılar deprem, yangın, yalıtım, erişilebilirlik ve
                enerji verimliliği gereklilikleriyle birlikte ele alınır.
              </p>
            </div>
          </div>
          <div className="flex gap-4 rounded-lg border border-gold/25 bg-gold/10 p-5">
            <AlertTriangle className="shrink-0 text-gold" size={28} />
            <div>
              <h3 className="font-semibold text-white">Doğru tespit</h3>
              <p className="mt-2 text-sm leading-6 text-white/70">
                Hızlı tarama ve ön inceleme yol gösterir; resmî riskli yapı
                tespiti yalnızca yetkili lisanslı kuruluşlarca yapılır.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default RiskChartSection;
