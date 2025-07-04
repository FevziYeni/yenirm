// HeroSection.tsx
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/bg_image.jpg";
import { Button } from "../components/ui/Button";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full h-[500px] overflow-hidden">
      <motion.img
        src={bgImage}
        alt="Landing Page Visual"
        className="w-full h-full object-cover scale-110"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
      />

      <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center mx-4 z-20 font-bold">
        <motion.h1
          className="text-6xl font-extrabold text-transparent"
          style={{
            WebkitTextStroke: "2px white",
            textShadow: "0 0 10px rgba(255,255,255,0.4)",
          }}
          {...fadeInUp}
          viewport={{ once: true }}
        >
          YUVANIZI YENİLEYİN
        </motion.h1>

        <motion.p
          className="text-lg mt-4 text-white"
          {...fadeInUp}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Projelerimiz hakkında daha fazla bilgi edinin.
        </motion.p>

        <motion.div
          className="mt-4"
          {...fadeInUp}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Button
            onClick={() => navigate("/project")}
            className="px-6 py-2 border border-white text-white rounded-lg hover:bg-white hover:text-black transition"
          >
            Projelerimiz
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
