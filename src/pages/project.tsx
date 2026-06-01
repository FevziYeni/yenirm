import React, { useState } from "react";
import AnimatedSection from "../components/animatedSection";
import { Card } from "../components/ui/Card";
import Seo from "../components/Seo";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";

import image1 from "../assets/projects/iskom1.jpg";
import image2 from "../assets/projects/iskom2.jpg";
import image3 from "../assets/projects/iskom3.jpg";
import image4 from "../assets/projects/iskom4.jpg";
import image5 from "../assets/projects/iskom5.jpg";
import darphane from "../assets/projects/darphane.jpg";
import darphane1 from "../assets/projects/darphane1.jpg";
import kagıthane from "../assets/projects/kagıthane.jpg";
import kagıthane1 from "../assets/projects/kagıthane1.jpg";
import kagıthane2 from "../assets/projects/kagıthane2.jpg";
import istac from "../assets/projects/istac.jpg";
import istac1 from "../assets/projects/istac1.jpg";
import istac2 from "../assets/projects/istac2.jpg";
import istac3 from "../assets/projects/istac3.jpg";
import adapark from "../assets/projects/adapark.jpg";
import adapark1 from "../assets/projects/adapark1.jpg";
import adapark2 from "../assets/projects/adapark2.jpg";
import adapark3 from "../assets/projects/adapark3.jpg";
import hamidiye from "../assets/projects/hamidiye.jpg";
import hamidiye1 from "../assets/projects/hamidiye1.jpg";
import hamidiye2 from "../assets/projects/hamidiye2.jpg";
import hamidiye3 from "../assets/projects/hamidiye3.jpg";
import ürgüplü from "../assets/projects/ürgüplü.jpg";
import yeni from "../assets/projects/68.jpg";

const ourProjects = [
  {
    id: 1,
    title: "Ürgüplü Projesi",
    description: "Toplumsal Proje",
    date: "2024-06-15",
    images: [ürgüplü],
  },
  {
    id: 2,
    title: "İstanbul/Bayrampaşa",
    description: "Toplumsal Konut",
    date: "2023-11-02",
    images: [yeni],
  },
];

const partnerProjects = [
  {
    id: 1,
    title: "İSKOM – İstanbul Su Kontrol ve Otomasyon Merkezi",
    description: "Büyük ölçekli su kontrol ve otomasyon tesisi.",

    images: [image1, image2, image3, image4, image5],
  },
  {
    id: 2,
    title: "Darphane Genel Müdürlük Yangın Söndürme Sistemi",
    description: "Bina genelinde yangın güvenliği sistemi kurulumu.",
    date: "2022-01-01",
    images: [darphane, darphane1],
  },
  {
    id: 3,
    title: "Kağıthane Yaşam Evleri",
    description: "Toplumsal konut projesi.",

    images: [kagıthane, kagıthane1, kagıthane2],
  },
  {
    id: 4,
    title: "İSTAÇ Tıbbi Atık Sterilizasyon Tesisi",
    description: "Sterilizasyon tesisi altyapısı.",

    images: [istac, istac1, istac2, istac3],
  },
  {
    id: 5,
    title: "Bayrampaşa Aydınlatma Tesisi",
    description: "Sterilizasyon tesisi altyapısı.",

    images: [adapark, adapark1, adapark2, adapark3],
  },
  {
    id: 6,
    title: "Bayrampaşa Aydınlatma Tesisi",
    description: "Sterilizasyon tesisi altyapısı.",

    images: [hamidiye3, hamidiye1, hamidiye2, hamidiye],
  },
];

const ImageModal: React.FC<{
  src: string;
  alt: string;
  onClose: () => void;
}> = ({ src, alt, onClose }) => (
  <div
    onClick={onClose}
    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 cursor-pointer"
  >
    <img
      src={src}
      alt={alt}
      className="max-w-5xl max-h-[90vh] rounded-lg shadow-lg cursor-auto"
      onClick={(e) => e.stopPropagation()}
    />
    <button
      onClick={onClose}
      className="absolute top-5 right-5 text-white text-4xl font-bold"
    >
      &times;
    </button>
  </div>
);

const ProjectsPage: React.FC = () => {
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [modalAlt, setModalAlt] = useState<string>("");

  const openModal = (src: string, alt: string) => {
    setModalImage(src);
    setModalAlt(alt);
  };
  const closeModal = () => {
    setModalImage(null);
    setModalAlt("");
  };

  const renderProjectCard = (
    p: (typeof ourProjects)[0] | (typeof partnerProjects)[0]
  ) => (
    <Card
      key={p.id}
      className="overflow-hidden rounded-lg border border-white/10 bg-black/35 p-4 shadow-2xl backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-gold/60"
    >
      <Carousel className="w-full relative">
        <CarouselContent>
          {p.images.map((img, idx) => (
            <CarouselItem key={idx}>
              <img
                src={img}
                alt={`${p.title} ${idx + 1}`}
                className="mb-3 h-52 w-full cursor-pointer rounded-md object-cover md:h-64"
                onClick={() => openModal(img, `${p.title} ${idx + 1}`)}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white transition hover:bg-black">
          ‹
        </CarouselPrevious>
        <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white transition hover:bg-black">
          ›
        </CarouselNext>
      </Carousel>
      <h4 className="mt-2 text-lg font-bold text-white">{p.title}</h4>
      <p className="mb-1 mt-2 text-sm leading-6 text-white/70">
        {p.description}
      </p>
    </Card>
  );

  return (
    <>
      <Seo
        title="Projelerimiz | Yeni RM İnşaat"
        description="Yeni RM İnşaat’ın Bayrampaşa, İstanbul ve ortak proje referanslarını inceleyin. Kentsel dönüşüm, kat karşılığı ve modern konut projeleri."
        path="/projects"
        keywords="Yeni RM İnşaat projeleri, Bayrampaşa konut projeleri, kentsel dönüşüm referansları, kat karşılığı projeler"
      />
      <AnimatedSection className="mx-auto max-w-7xl px-6 pb-24 pt-32 text-white lg:px-8">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-gold">
            Tamamlanan işler
          </span>
          <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl">
            Projeler
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <h3 className="mb-6 text-2xl font-semibold">Projelerimiz</h3>
            <div className="space-y-6">
              {ourProjects.map(renderProjectCard)}
            </div>
          </div>
          <div>
            <h3 className="mb-6 text-2xl font-semibold">Ortak Projelerimiz</h3>
            <div className="space-y-6">
              {partnerProjects.map(renderProjectCard)}
            </div>
          </div>
        </div>
        {modalImage && (
          <ImageModal src={modalImage} alt={modalAlt} onClose={closeModal} />
        )}
      </AnimatedSection>
    </>
  );
};

export default ProjectsPage;
