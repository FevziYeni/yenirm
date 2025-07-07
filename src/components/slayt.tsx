import React from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/bg_image.jpg";
import AnimatedSection from "./animatedSection";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full h-[600px] overflow-hidden">
      <div className="relative w-full h-full">
        <img
          src={bgImage}
          alt="Landing Page Visual"
          className="w-full h-full object-cover scale-110 transition-transform duration-[8s] ease-out hover:scale-100"
        />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/40 to-transparent z-10 pointer-events-none" />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center mx-4 z-20 font-bold">
        <AnimatedSection>
          <h1
            className="text-6xl font-extrabold text-transparent"
            style={{
              WebkitTextStroke: "2px white",
              textShadow: "0 0 10px rgba(255,255,255,0.4)",
            }}
          >
            YUVANIZI YENİLEYİN
          </h1>
        </AnimatedSection>
        <AnimatedSection>
          <p className="text-lg mt-4 text-white">
            Projelerimiz hakkında daha fazla bilgi edinin.
          </p>
        </AnimatedSection>
        <AnimatedSection>
          <div className="mt-4">
            <button
              onClick={() => navigate("/projects")}
              className="px-6 py-2 border border-white text-white rounded-lg hover:bg-white hover:text-black transition"
            >
              Projelerimiz
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default HeroSection;
