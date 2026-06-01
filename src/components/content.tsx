import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faBuilding,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { useInView } from "react-intersection-observer";
import AnimatedSection from "./animatedSection";

const ProjectsSection = () => {
  const [projects, setProjects] = useState(0);
  const [experience, setExperience] = useState(0);
  const [team, setTeam] = useState(0);

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (!inView) return;

    const animateCount = (
      target: number,
      setter: React.Dispatch<React.SetStateAction<number>>,
      duration = 1500
    ) => {
      const fps = 60;
      const totalSteps = Math.floor((duration / 1000) * fps);
      const increment = target / totalSteps;
      let current = 0;
      let step = 0;

      const interval = setInterval(() => {
        step++;
        current += increment;
        if (step >= totalSteps) {
          setter(target);
          clearInterval(interval);
        } else {
          setter(Math.floor(current));
        }
      }, 1000 / fps);
    };

    animateCount(15, setProjects);
    animateCount(17, setExperience);
    animateCount(56, setTeam);
  }, [inView]);

  return (
    <AnimatedSection className="mx-auto py-16">
      <section
        ref={ref}
        className="w-full bg-zinc-950/85 py-12 text-white backdrop-blur"
        aria-label="Bayrampaşa ve İstanbul Kentsel Dönüşüm Projeleri İstatistikleri"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-6 px-6 text-center md:grid-cols-3 lg:px-8">
          <div className="flex flex-col items-center justify-center rounded-lg border border-white/10 p-6">
            <FontAwesomeIcon
              icon={faBuilding}
              size="2x"
              className="mb-3 text-gold"
              aria-hidden="true"
            />
            <h3
              className="mb-2 text-base text-white/75"
              aria-label="Toplam Bayrampaşa kentsel dönüşüm projesi sayısı"
            >
              Toplam Bayrampaşa Kentsel Dönüşüm Projesi
            </h3>
            <h2 className="mb-1 text-4xl font-bold text-gold">{projects}+</h2>
          </div>

          <div className="flex flex-col items-center justify-center rounded-lg border border-white/10 p-6">
            <FontAwesomeIcon
              icon={faBriefcase}
              size="2x"
              className="mb-3 text-gold"
              aria-hidden="true"
            />
            <h3
              className="mb-2 text-base text-white/75"
              aria-label="Yeni RM İnşaat tecrübe yılı"
            >
              İstanbul’da Güvenli İnşaat Tecrübesi
            </h3>
            <h2 className="mb-1 text-4xl font-bold text-gold">
              {experience}+ Yıl
            </h2>
          </div>

          <div className="flex flex-col items-center justify-center rounded-lg border border-white/10 p-6">
            <FontAwesomeIcon
              icon={faUsers}
              size="2x"
              className="mb-3 text-gold"
              aria-hidden="true"
            />
            <h3
              className="mb-2 text-base text-white/75"
              aria-label="Bayrampaşa ve İstanbul kentsel dönüşüm ekibi"
            >
              Kat Karşılığı ve Kentsel Dönüşüm Ekibi
            </h3>
            <h2 className="mb-1 text-4xl font-bold text-gold">{team}</h2>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default ProjectsSection;
