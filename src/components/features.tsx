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
    <AnimatedSection className="py-10 text-black bg-gradient-to-r from-white via-gold to-white px-0 rounded-md">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="flex flex-col items-center justify-center px-4">
          <FontAwesomeIcon
            icon={faSmile}
            size="2x"
            className="text-yellow-400 mb-2"
          />
          <h3 className="text-lg font-semibold mb-1">%100 Memnuniyet</h3>
          <p className="text-sm">
            Müşteri memnuniyetini her zaman ön planda tutarak projelerimizi
            tamamlıyoruz.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center px-4">
          <FontAwesomeIcon
            icon={faBolt}
            size="2x"
            className="text-yellow-400 mb-2"
          />
          <h3 className="text-lg font-semibold mb-1">Hızlı Teslimat</h3>
          <p className="text-sm">
            Belirlenen zaman çizelgesine sadık kalarak hızlı ve kaliteli
            çözümler sunuyoruz.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center px-4">
          <FontAwesomeIcon
            icon={faShieldAlt}
            size="2x"
            className="text-yellow-400 mb-2"
          />
          <h3 className="text-lg font-semibold mb-1">Güvenilirlik</h3>
          <p className="text-sm">
            20+ yıllık tecrübemizle sektörümüzde güvenin simgesi olduk.
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default FeaturesSection;
