import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LOGO from "../assets/LOGOK.png";
import { Button } from "../components/ui/Button";
import clsx from "clsx";
import { Separator } from "@radix-ui/react-separator";
import { Menu } from "lucide-react";

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

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY === 0) {
        setShow(true);
      } else if (currentScrollY > lastScrollY) {
        setShow(true);
      } else {
        setShow(false);
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
      <div className="relative z-10  flex flex-col justify-between">
        <nav
          className={clsx(
            lastScrollY === 0
              ? "relative bg-black/60 shadow-none"
              : "fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md shadow-md transition-transform duration-300",
            show ? "translate-y-0" : "-translate-y-full"
          )}
        >
          <header className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
            <div className="flex items-center gap-4">
              <img
                src={LOGO}
                alt="Logo"
                className="h-14 cursor-pointer"
                onClick={() => handleNavigate("/")}
              />

              <Separator
                orientation="vertical"
                className="h-16 w-px bg-gold hidden sm:block"
              />

              {/* Başlık: Hem mobil hem masaüstü görünür */}
              <div
                className="flex flex-col leading-tight cursor-pointer"
                onClick={() => handleNavigate("/")}
              >
                <span className="text-2xl font-bold bg-gradient-to-r from-white via-gold to-white bg-clip-text text-transparent">
                  YENİ RM
                </span>
                <span className="text-sm font-bold bg-gradient-to-r from-white via-gold to-white bg-clip-text text-transparent tracking-wider">
                  İNŞAAT
                </span>
              </div>
            </div>

            {/* Masaüstü menü */}
            <div className="hidden md:flex space-x-6">
              <Button
                onClick={() => handleNavigate("/")}
                className="text-sm text-white hover:bg-yellow-300 hover:text-black transition"
              >
                Anasayfa
              </Button>
              <Button
                onClick={() => handleNavigate("/projects")}
                className="text-sm text-white hover:bg-yellow-300 hover:text-black transition"
              >
                Projelerimiz
              </Button>
              <Button
                onClick={() => handleNavigate("/about")}
                className="text-sm text-white hover:bg-yellow-300 hover:text-black transition"
              >
                Hakkımızda
              </Button>
              <Button
                onClick={() => handleNavigate("/contact")}
                className="text-sm text-white hover:bg-yellow-300 hover:text-black transition"
              >
                İletişim
              </Button>
            </div>

            {/* Hamburger Menü (Mobil) */}
            <div className="md:hidden">
              <button
                onClick={() => setDrawerOpen(true)}
                className="text-white"
              >
                <Menu size={28} />
              </button>
            </div>
          </header>
        </nav>

        {/* Drawer */}
        <Drawer
          open={drawerOpen}
          onOpenChange={setDrawerOpen}
          direction="right"
        >
          <DrawerContent className="bg-black text-white w-full max-w-xs">
            <DrawerHeader>
              <DrawerTitle className="text-white text-xl font-bold">
                Menü
              </DrawerTitle>
            </DrawerHeader>
            <div className="flex flex-col gap-4 px-6 pb-6">
              <Button
                variant="ghost"
                className="justify-start text-white hover:text-yellow-300"
                onClick={() => handleNavigate("/")}
              >
                Anasayfa
              </Button>
              <Button
                variant="ghost"
                className="justify-start text-white hover:text-yellow-300"
                onClick={() => handleNavigate("/projects")}
              >
                Projelerimiz
              </Button>
              <Button
                variant="ghost"
                className="justify-start text-white hover:text-yellow-300"
                onClick={() => handleNavigate("/about")}
              >
                Hakkımızda
              </Button>
              <Button
                variant="ghost"
                className="justify-start text-white hover:text-yellow-300"
                onClick={() => handleNavigate("/contact")}
              >
                İletişim
              </Button>
              <DrawerClose asChild>
                <Button
                  variant="outline"
                  className="mt-6 border-white text-white hover:bg-yellow-300 hover:text-black"
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
