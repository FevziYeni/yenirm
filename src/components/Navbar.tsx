import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LOGO from "../assets/LOGOK.png";
import { Button } from "../components/ui/Button";
import clsx from "clsx";
import { Separator } from "@radix-ui/react-separator";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setShow(true); // En üstteyken göster
      } else if (currentScrollY > lastScrollY) {
        setShow(true); // Aşağı kayıyorsa göster
      } else {
        setShow(false); // Yukarı kayıyorsa gizle
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={clsx(
        lastScrollY === 0
          ? "relative bg-black/60 shadow-none"
          : "fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md shadow-md transition-transform duration-300 ",
        show ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <header className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          <img
            src={LOGO}
            alt="Logo"
            className="h-16 cursor-pointer"
            onClick={() => navigate("/")}
          />

          <Separator orientation="vertical" className="h-16 w-px bg-gold" />
          <div
            className="flex flex-col leading-tight cursor-pointer"
            onClick={() => navigate("/")}
          >
            <span className="text-2xl font-bold  bg-gradient-to-r from-white via-gold to-white  bg-clip-text  text-transparent">
              YENİ RM
            </span>
            <span className="text-sm font-bold  bg-gradient-to-r from-white via-gold to-white  bg-clip-text  text-transparent tracking-wider">
              İNŞAAT
            </span>
          </div>
        </div>
        <div className="flex space-x-6">
          <Button
            onClick={() => navigate("/")}
            className="text-sm font-medium text-white  hover:bg-yellow-300 hover:text-black transition"
          >
            Anasayfa
          </Button>
          <Button
            onClick={() => navigate("/projects")}
            className="text-sm font-medium text-white  hover:bg-yellow-300 hover:text-black transition"
          >
            Projelerimiz
          </Button>
          <Button
            onClick={() => navigate("/about")}
            className="text-sm font-medium text-white  hover:bg-yellow-300 hover:text-black transition"
          >
            Hakkımızda
          </Button>
          <Button
            onClick={() => navigate("/contact")}
            className="text-sm font-medium text-white  hover:bg-yellow-300 hover:text-black transition"
          >
            İletişim
          </Button>
        </div>
      </header>
    </nav>
  );
};

export default Navbar;
