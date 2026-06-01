import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LOGO from "../assets/LOGOK.png";
import { Button } from "../components/ui/Button";
import clsx from "clsx";
import { Separator } from "@radix-ui/react-separator";
import { Menu, PhoneCall } from "lucide-react";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerClose,
} from "../components/ui/drawer";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const whatsappHref =
    "https://wa.me/905323322960?text=Merhaba%2C%20Yeni%20RM%20%C4%B0n%C5%9Faat%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.";

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setShow(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 120) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleNavigate = (path: string) => {
    navigate(path);
    setDrawerOpen(false);
  };

  return (
    <>
      <div className="relative z-[9999] flex flex-col justify-between pointer-events-auto">
        <nav
          className={clsx(
            "fixed top-0 left-0 w-full z-[9999] pointer-events-auto border-b border-white/10 backdrop-blur-md transition-transform duration-300",
            lastScrollY === 0 ? "bg-black/45" : "bg-black/75 shadow-lg",
            show ? "translate-y-0" : "-translate-y-full"
          )}
        >
          <header className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">
            <div className="flex min-w-0 items-center gap-3 sm:gap-4">
              <img
                src={LOGO}
                alt="Yeni RM İnşaat Logo"
                className="h-10 shrink-0 cursor-pointer pointer-events-auto sm:h-12 md:h-14"
                onClick={() => handleNavigate("/")}
              />

              <Separator
                orientation="vertical"
                className="h-16 w-px bg-gold hidden sm:block"
              />

              <div
                className="flex min-w-0 flex-col leading-tight cursor-pointer pointer-events-auto"
                onClick={() => handleNavigate("/")}
              >
                <span className="text-xl font-bold bg-gradient-to-r from-white via-gold to-white bg-clip-text text-transparent sm:text-2xl">
                  YENİ RM
                </span>
                <span className="text-sm font-bold bg-gradient-to-r from-white via-gold to-white bg-clip-text text-transparent tracking-wider">
                  İNŞAAT
                </span>
              </div>
            </div>

            {/* Masaüstü Menü */}
            <div className="hidden items-center gap-2 md:flex pointer-events-auto">
              <Button
                type="button"
                onClick={() => handleNavigate("/")}
                variant="ghost"
                className="text-sm text-white hover:bg-white/10 hover:text-gold transition cursor-pointer pointer-events-auto"
              >
                Anasayfa
              </Button>

              <Button
                type="button"
                onClick={() => handleNavigate("/projects")}
                variant="ghost"
                className="text-sm text-white hover:bg-white/10 hover:text-gold transition cursor-pointer pointer-events-auto"
              >
                Projelerimiz
              </Button>

              <Button
                type="button"
                onClick={() => handleNavigate("/about")}
                variant="ghost"
                className="text-sm text-white hover:bg-white/10 hover:text-gold transition cursor-pointer pointer-events-auto"
              >
                Hakkımızda
              </Button>

              <Button
                type="button"
                onClick={() => handleNavigate("/contact")}
                variant="ghost"
                className="text-sm text-white hover:bg-white/10 hover:text-gold transition cursor-pointer pointer-events-auto"
              >
                İletişim
              </Button>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 inline-flex items-center gap-2 rounded-md bg-gold px-4 py-2 text-sm font-bold text-black transition hover:bg-white cursor-pointer pointer-events-auto"
                aria-label="Yeni RM İnşaat WhatsApp hattına yaz"
              >
                <PhoneCall size={16} />
                Teklif Al
              </a>
            </div>

            {/* Mobil Hamburger Menü */}
            <div className="md:hidden pointer-events-auto">
              <button
                type="button"
                onClick={() => setDrawerOpen(true)}
                className="relative z-[10000] rounded-md border border-white/20 p-2 text-white cursor-pointer pointer-events-auto"
                aria-label="Menüyü aç"
              >
                <Menu size={28} />
              </button>
            </div>
          </header>
        </nav>

        {/* Mobil Drawer Menü */}
        <Drawer
          open={drawerOpen}
          onOpenChange={setDrawerOpen}
          direction="right"
        >
          <DrawerContent className="bg-black text-white w-full max-w-xs z-[10000] pointer-events-auto">
            <DrawerHeader>
              <DrawerTitle className="text-white text-xl font-bold">
                Menü
              </DrawerTitle>
            </DrawerHeader>

            <div className="flex flex-col gap-4 px-6 pb-6 pointer-events-auto">
              <Button
                type="button"
                variant="ghost"
                className="justify-start text-white hover:text-yellow-300 cursor-pointer pointer-events-auto"
                onClick={() => handleNavigate("/")}
              >
                Anasayfa
              </Button>

              <Button
                type="button"
                variant="ghost"
                className="justify-start text-white hover:text-yellow-300 cursor-pointer pointer-events-auto"
                onClick={() => handleNavigate("/projects")}
              >
                Projelerimiz
              </Button>

              <Button
                type="button"
                variant="ghost"
                className="justify-start text-white hover:text-yellow-300 cursor-pointer pointer-events-auto"
                onClick={() => handleNavigate("/about")}
              >
                Hakkımızda
              </Button>

              <Button
                type="button"
                variant="ghost"
                className="justify-start text-white hover:text-yellow-300 cursor-pointer pointer-events-auto"
                onClick={() => handleNavigate("/contact")}
              >
                İletişim
              </Button>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-gold px-4 py-3 text-sm font-bold text-black cursor-pointer pointer-events-auto"
              >
                <PhoneCall size={16} />
                WhatsApp ile Ulaş
              </a>

              <DrawerClose asChild>
                <Button
                  type="button"
                  variant="outline"
                  className="mt-6 border-white text-white hover:bg-yellow-300 hover:text-black cursor-pointer pointer-events-auto"
                >
                  Kapat
                </Button>
              </DrawerClose>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
};

export default Navbar;
