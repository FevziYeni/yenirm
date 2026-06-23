import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import AnimatedSection from "./animatedSection";

const Footer: React.FC = () => {
  const whatsappHref =
    "https://wa.me/905323322960?text=Merhaba%2C%20Yeni%20RM%20%C4%B0n%C5%9Faat%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.";

  return (
    <AnimatedSection className="bg-zinc-950 px-6 pb-8 pt-12 text-white">
      <div className="mx-auto mb-8 grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-4">
        <div>
          <h3 className="mb-3 text-xl font-bold text-gold">
            YENİ RM İNŞAAT
          </h3>
          <p className="text-sm leading-6 text-white/70">
            İstanbul/Bayrampaşa merkezli müteahhit firmamız, kat karşılığı ve
            kentsel dönüşüm projelerinde güvenle hizmet vermektedir.
          </p>
        </div>

        <div>
          <h4 className="mb-2 text-lg font-semibold text-gold">
            Sayfalar
          </h4>
          <ul className="space-y-2 text-sm text-white/75">
            <li>
              <Link to="/" className="hover:text-gold" aria-label="Anasayfa">
                Anasayfa
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="hover:text-gold"
                aria-label="Projelerimiz"
              >
                Projeler
              </Link>
            </li>
            <li>
              <Link
                to="/bayrampasa-kentsel-donusum"
                className="hover:text-gold"
                aria-label="Bayrampaşa Kentsel Dönüşüm Rehberi"
              >
                Kentsel Dönüşüm
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-gold"
                aria-label="Hakkımızda"
              >
                Hakkımızda
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-gold"
                aria-label="İletişim"
              >
                İletişim
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-2 text-lg font-semibold text-gold">
            İletişim
          </h4>
          <ul className="space-y-2 text-sm text-white/75">
            <li>
              <a
                href="tel:+905323322960"
                className="hover:text-gold"
                aria-label="Telefon"
              >
                +90 (532) 332 29 60
              </a>
            </li>
            <li>
              <a
                href="mailto:yenirminsaat@hotmail.com"
                className="hover:text-gold"
                aria-label="E-posta"
              >
                yenirminsaat@hotmail.com
              </a>
            </li>
            <li>Bayrampaşa / İstanbul</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-2 text-lg font-semibold text-gold">Hızlı Ulaşım</h4>
          <p className="mb-4 text-sm leading-6 text-white/70">
            Projeniz için ön görüşme almak isterseniz doğrudan WhatsApp
            hattımıza yazabilirsiniz.
          </p>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Yeni RM İnşaat WhatsApp hattı"
            className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#1ebe5d]"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
            WhatsApp
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-7xl border-t border-white/10 pt-4 text-center text-sm text-white/55">
        © {new Date().getFullYear()} Yeni RM İnşaat | Bayrampaşa, İstanbul. Kat
        karşılığı ve kentsel dönüşüm projelerinde güvenle hizmet vermektedir.
        Tüm hakları saklıdır.
      </div>
    </AnimatedSection>
  );
};

export default Footer;
