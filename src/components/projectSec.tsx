import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import AnimatedSection from "./animatedSection";
import image1 from "../assets/projects/iskom1.jpg";
import image2 from "../assets/projects/iskom2.jpg";
import image3 from "../assets/projects/iskom3.jpg";
import image4 from "../assets/projects/iskom4.jpg";
import image5 from "../assets/projects/iskom5.jpg";
import kagıthane from "../assets/projects/kagıthane.jpg";
import kagıthane1 from "../assets/projects/kagıthane1.jpg";
import kagıthane2 from "../assets/projects/kagıthane2.jpg";
import ürgüplü from "../assets/projects/ürgüplü.jpg";
import { Card } from "./ui/Card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const projects = [
  {
    title: "Ürgüplü Projesi",
    description: "Bayrampaşa’da kat karşılığı toplumsal konut projesi.",
    location: "Bayrampaşa",
    service: "kat karşılığı inşaat ve kentsel dönüşüm",
    images: [ürgüplü],
  },
  {
    id: 3,
    title: "Kağıthane Yaşam Evleri",
    description:
      "İstanbul Kağıthane’de güvenli ve modern kentsel dönüşüm projeleri.",
    location: "Kağıthane, İstanbul",
    service: "modern konut ve kentsel dönüşüm",
    date: "2019-01-01",
    images: [kagıthane, kagıthane1, kagıthane2],
  },
  {
    id: 1,
    title: "İSKOM – İstanbul Su Kontrol ve Otomasyon Merkezi (Ortak Projeler)",
    description:
      "Büyük ölçekli su kontrol ve otomasyon tesisi projeleri. Kat karşılığı ve kentsel dönüşüm alanında referanslarımızdandır.",
    location: "İstanbul",
    service: "ortak proje ve altyapı referansı",
    date: "2019-01-01",
    images: [image1, image2, image3, image4, image5],
  },
];

const ProjectCardsSection = () => {
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [modalAlt, setModalAlt] = useState<string>("");
  const navigate = useNavigate();

  const openModal = (src: string, alt: string) => {
    setModalImage(src);
    setModalAlt(alt);
  };

  const closeModal = () => {
    setModalImage(null);
    setModalAlt("");
  };

  return (
    <AnimatedSection className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="mb-10 text-center">
        <span className="text-sm font-semibold uppercase tracking-wide text-gold">
          Referanslarımız
        </span>
        <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">
          Projelerimiz
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-8 text-white md:grid-cols-3">
        {projects.map((project, i) => (
          <Card
            className="overflow-hidden rounded-lg border border-white/10 bg-black/35 p-4 shadow-2xl backdrop-blur-md transition hover:-translate-y-1 hover:border-gold/60"
            key={i}
          >
            <Carousel className="w-full relative">
              <CarouselContent>
                {project.images.map((img, idx) => (
                  <CarouselItem key={idx}>
                    <img
                      src={img}
                      alt={`${project.location} ${project.title} ${
                        idx + 1
                      } - Yeni RM İnşaat ${project.service} referansı`}
                      className="h-[300px] w-full cursor-pointer rounded-md object-cover"
                      loading={idx === 0 ? "eager" : "lazy"}
                      decoding="async"
                      width={640}
                      height={360}
                      onClick={() =>
                        openModal(
                          img,
                          `${project.location} ${project.title} ${
                            idx + 1
                          } - Yeni RM İnşaat ${project.service} referansı`
                        )
                      }
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-1 text-white transition hover:bg-black">
                ‹
              </CarouselPrevious>
              <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-1 text-white transition hover:bg-black">
                ›
              </CarouselNext>
            </Carousel>

            <div className="pt-4 text-left">
              <h2 className="text-lg font-semibold text-white">
                {project.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-white/72">
                {project.description}
              </p>
            </div>
          </Card>
        ))}
      </div>

      {/* Modal */}
      {modalImage && (
        <div
          onClick={closeModal}
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 cursor-pointer"
        >
          <img
            src={modalImage}
            alt={modalAlt}
            className="max-w-4xl max-h-[90vh] rounded-lg shadow-lg cursor-auto"
            loading="eager"
            decoding="async"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={closeModal}
            className="absolute top-5 right-5 text-white text-3xl font-bold cursor-pointer"
            aria-label="Kapat"
          >
            &times;
          </button>
        </div>
      )}

      {/* Projelerimiz Butonu */}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => navigate("/projects")}
          aria-label="Bayrampaşa ve İstanbul Kentsel Dönüşüm Projelerimizi Görüntüle"
          className="inline-block w-full rounded-md bg-gold py-4 text-center text-lg font-semibold text-black shadow-lg transition-colors duration-300 hover:bg-white md:w-2/3"
        >
          Projelerimiz
        </button>
      </div>
    </AnimatedSection>
  );
};

export default ProjectCardsSection;
