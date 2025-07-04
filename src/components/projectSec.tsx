import React from "react";
import { motion } from "framer-motion";

import Yeni from "../assets/görsel.jpeg";
import Insaat from "../assets/insaat.jpg";
import { Card } from "../components/ui/Card";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const ProjectsSection: React.FC = () => {
  return (
    <motion.section
      className="mx-auto px-4 py-16"
      {...fadeInUp}
      viewport={{ once: true }}
    >
      <h1 className="text-2xl font-bold text-center mb-8 text-white">
        Projelerimiz
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[Yeni, Insaat, Yeni].map((img, i) => (
          <motion.div
            key={i}
            className="rounded-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="rounded-lg">
              <img
                src={img}
                alt={`Proje ${i + 1}`}
                className="w-full h-[300px] object-cover rounded-lg"
              />
              <div className="pt-4 text-left">
                <h2 className="text-lg font-semibold text-black">Subheading</h2>
                <p className="text-gray-600">
                  Body text for whatever you'd like to describe.
                </p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default ProjectsSection;
