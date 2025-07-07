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
    <AnimatedSection className="mx-auto py-20">
      <section
        ref={ref}
        className="w-full bg-gradient-to-r from-white via-gold to-white text-black py-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center items-center">
          <div className="flex flex-col items-center justify-center">
            <FontAwesomeIcon
              icon={faBuilding}
              size="2x"
              className="text-yellow-600 mb-2"
            />
            <p className="text-base">Toplam Proje</p>
            <h2 className="text-4xl font-bold mb-1">{projects}</h2>
          </div>

          <div className="flex flex-col items-center justify-center">
            <FontAwesomeIcon
              icon={faBriefcase}
              size="2x"
              className="text-yellow-600 mb-2"
            />
            <p className="text-base">Yıl Tecrübe</p>
            <h2 className="text-4xl font-bold mb-1">{experience}</h2>
          </div>

          <div className="flex flex-col items-center justify-center">
            <FontAwesomeIcon
              icon={faUsers}
              size="2x"
              className="text-yellow-600 mb-2"
            />
            <p className="text-base">Ekip Üyesi</p>
            <h2 className="text-4xl font-bold mb-1">{team}</h2>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default ProjectsSection;
