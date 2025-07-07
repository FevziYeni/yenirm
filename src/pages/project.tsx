import React, { useState } from "react";
import AnimatedSection from "../components/animatedSection";
import { Card } from "../components/ui/Card";
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
    date: "2019-01-01",
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
    date: "2019-01-01",
    images: [kagıthane, kagıthane1, kagıthane2],
  },
  {
    id: 4,
    title: "İSTAÇ Tıbbi Atık Sterilizasyon Tesisi",
    description: "Sterilizasyon tesisi altyapısı.",
    date: "2013-01-01",
    images: [istac, istac1, istac2, istac3],
  },
  {
    id: 5,
    title: "Bayrampaşa Aydınlatma Tesisi",
    description: "Sterilizasyon tesisi altyapısı.",
    date: "2013-01-01",
    images: [adapark, adapark1, adapark2, adapark3],
  },
  {
    id: 6,
    title: "Bayrampaşa Aydınlatma Tesisi",
    description: "Sterilizasyon tesisi altyapısı.",
    date: "2013-01-01",
    images: [hamidiye3, hamidiye1, hamidiye2, hamidiye],
  },
];

// Basit Modal Bileşeni
const ImageModal: React.FC<{
  src: string;
  alt: string;
  onClose: () => void;
}> = ({ src, alt, onClose }) => {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 cursor-pointer"
    >
      <img
        src={src}
        alt={alt}
        className="max-w-4xl max-h-[90vh] rounded-lg shadow-lg cursor-auto"
        onClick={(e) => e.stopPropagation()}
      />
      <button
        onClick={onClose}
        className="absolute top-5 right-5 text-white text-3xl font-bold cursor-pointer"
        aria-label="Close modal"
      >
        &times;
      </button>
    </div>
  );
};

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

  return (
    <AnimatedSection className="py-20 px-6 text-white">
      <h2 className="text-6xl font-bold  bg-gradient-to-r from-white via-gold to-white  bg-clip-text  text-transparent text-center ">
        Projeler
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10">
        {/* Kendi Projelerimiz */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Projelerimiz</h3>
          <div className="space-y-6">
            {ourProjects.map((p) => (
              <Card
                key={p.id}
                className="bg-white/10 backdrop-blur rounded-lg p-4 hover:shadow-lg transition"
              >
                <Carousel className="w-full relative">
                  <CarouselContent>
                    {p.images.map((img, idx) => (
                      <CarouselItem key={idx}>
                        <img
                          src={img}
                          alt={`${p.title} ${idx + 1}`}
                          className="w-full h-40 object-cover rounded-md mb-3 cursor-pointer"
                          onClick={() =>
                            openModal(img, `${p.title} ${idx + 1}`)
                          }
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black bg-opacity-50 p-1 text-white hover:bg-opacity-75 transition">
                    ‹
                  </CarouselPrevious>
                  <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black bg-opacity-50 p-1 text-white hover:bg-opacity-75 transition">
                    ›
                  </CarouselNext>
                </Carousel>

                <h4 className="text-lg font-bold mt-2">{p.title}</h4>
                <p className="text-sm text-gray-300 mb-1">{p.description}</p>
                <p className="text-xs text-gray-400">
                  Tarih: {new Date(p.date).toLocaleDateString("tr-TR")}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Ortak Projelerimiz */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Ortak Projelerimiz</h3>
          <div className="space-y-6">
            {partnerProjects.map((p) => (
              <Card
                key={p.id}
                className="bg-white/10 backdrop-blur rounded-lg p-4 hover:shadow-lg transition"
              >
                <Carousel className="w-full relative">
                  <CarouselContent>
                    {p.images.map((img, idx) => (
                      <CarouselItem key={idx}>
                        <img
                          src={img}
                          alt={`${p.title} ${idx + 1}`}
                          className="w-full h-40 object-cover rounded-md mb-3 cursor-pointer"
                          onClick={() =>
                            openModal(img, `${p.title} ${idx + 1}`)
                          }
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black bg-opacity-50 p-1 text-white hover:bg-opacity-75 transition">
                    ‹
                  </CarouselPrevious>
                  <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black bg-opacity-50 p-1 text-white hover:bg-opacity-75 transition">
                    ›
                  </CarouselNext>
                </Carousel>

                <h4 className="text-lg font-bold mt-2">{p.title}</h4>
                <p className="text-sm text-gray-300 mb-1">{p.description}</p>
                <p className="text-xs text-gray-400">
                  Tarih: {new Date(p.date).toLocaleDateString("tr-TR")}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalImage && (
        <ImageModal src={modalImage} alt={modalAlt} onClose={closeModal} />
      )}
    </AnimatedSection>
  );
};

export default ProjectsPage;
