import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import AnimatedSection from "./animatedSection";

const Footer: React.FC = () => {
  return (
    <AnimatedSection className="bg-gradient-to-r from-white via-gold to-white text-black px-6 pt-8 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        {/* Şirket Bilgisi */}
        <div>
          <h3 className="text-xl font-bold mb-3 text-yellow-500">
            YENİRM MÜHENDİSLİK
          </h3>
          <p className="text-sm">
            İstanbul/Bayrampaşa'da yer alan ofisimiz, ulaşım açısından oldukça
            elverişli bir konumda yer almaktadır.
          </p>
        </div>

        {/* Sayfalar */}
        <div>
          <h4 className="text-lg font-semibold mb-2 text-yellow-500">
            Sayfalar
          </h4>
          <ul className="space-y-1 text-sm">
            <li>
              <Link to="/" className="hover:underline">
                Anasayfa
              </Link>
            </li>
            <li>
              <Link to="/projeler" className="hover:underline">
                Projeler
              </Link>
            </li>
            <li>
              <Link to="/hakkimizda" className="hover:underline">
                Hakkımızda
              </Link>
            </li>
            <li>
              <Link to="/iletisim" className="hover:underline">
                İletişim
              </Link>
            </li>
          </ul>
        </div>

        {/* İletişim Bilgileri */}
        <div>
          <h4 className="text-lg font-semibold mb-2 text-yellow-500">
            İletişim
          </h4>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="tel:+905323322960" className="hover:underline">
                +90 (532) 332 29 60
              </a>
            </li>
            <li>
              <a
                href="mailto:yenirminsaat@hotmail.com"
                className="hover:underline"
              >
                yenirminsaat@hotmail.com
              </a>
            </li>
            <li>Bayrampaşa / İstanbul</li>
          </ul>
        </div>

        {/* Sosyal Medya */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Bizi Takip Edin</h4>
          <div className="flex space-x-4 text-xl text-gray-800">
            <a href="#" aria-label="Facebook" className="hover:text-blue-600">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-pink-600">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-blue-400">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" aria-label="Github" className="hover:text-black">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
      </div>

      {/* Alt Bilgi */}
      <div className="border-t border-gray-300 pt-4 text-center text-sm text-gray-700">
        © {new Date().getFullYear()} Yeni RM İnşaat. Tüm hakları saklıdır.
      </div>
    </AnimatedSection>
  );
};

export default Footer;
