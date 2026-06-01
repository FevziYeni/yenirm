import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const phone = "905323322960";
const message =
  "Merhaba, Yeni RM İnşaat hakkında bilgi almak istiyorum.";

const WhatsAppButton: React.FC = () => {
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Yeni RM İnşaat WhatsApp hattı ile iletişime geç"
      className="fixed bottom-6 right-6 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_18px_45px_rgba(0,0,0,0.35)] ring-4 ring-white/20 transition hover:-translate-y-1 hover:bg-[#1ebe5d] focus:outline-none focus-visible:ring-4 focus-visible:ring-gold"
    >
      <FontAwesomeIcon icon={faWhatsapp} className="text-3xl" />
      <span className="sr-only">WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;
