import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedSection from "../components/animatedSection";
import { useInView } from "react-intersection-observer";
import hakkımızda from "../assets/hakkımızda.jpg";
import iletişim from "../assets/iletişim.jpg";

import Yeni from "../assets/görsel.jpeg";
import Insaat from "../assets/insaat.jpg";
import bgImage from "../assets/bg_image.jpg";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faBriefcase,
  faBuilding,
  faShieldAlt,
  faSmile,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

// Animasyon ayarları
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const Home: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3, // Elemanın %30'u görünür olunca tetiklenir
  });
  const navigate = useNavigate();
  const data = [
    { name: "Page", col2: "Page", col3: "Page" },
    { name: "Page", col2: "Page", col3: "Page" },
    { name: "Page", col2: "Page", col3: "Page" },
  ];
  const RiskData = [
    { age: "0-10 yıl", Risk: 5 },
    { age: "10-20 yıl", Risk: 25 },
    { age: "20-30 yıl", Risk: 40 },
    { age: "30-40 yıl", Risk: 65 },
    { age: "40+ yıl", Risk: 90 },
  ];

  // Sayaç state'leri
  const [projects, setProjects] = useState(0);
  const [experience, setExperience] = useState(0);
  const [team, setTeam] = useState(0);
  const getRiskColor = (value: number) => {
    if (value < 25) return "#16a34a"; // Yeşil
    if (value <= 37) return "#facc15"; // Açık Sarı
    if (value <= 50) return "#eab308"; // Koyu Sarı
    if (value <= 75) return "#f97316"; // Turuncu
    return "#dc2626";
  };

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

    animateCount(24, setProjects);
    animateCount(25, setExperience);
    animateCount(56, setTeam);
  }, [inView]);

  return (
    <div className="rounded-lg ">
      {/* Slayt Bölümü */}

      <section className="relative w-full h-[600px] overflow-hidden">
        {/* Görsel + Mask */}
        <div className="relative w-full h-full">
          <img
            src={bgImage}
            alt="Landing Page Visual"
            className="w-full h-full object-cover scale-110 transition-transform duration-[8s] ease-out hover:scale-100"
          />
          {/* Alt kısmı şeffaflaştıran overlay */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/40 to-transparent z-10 pointer-events-none" />
        </div>

        {/* Karartma Tüm Görsele */}
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />

        {/* Metin Katmanı */}
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

      <AnimatedSection className="py-24 px-6 ">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Sol - Bilgi */}
          <div>
            <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gold to-white  bg-clip-text  text-transparent">
              Kentsel Dönüşüm Neden Şart?
            </h2>
            <p className="text-lg mb-6 text-white">
              Türkiye’nin büyük kısmı deprem Riski altındadır. Eski yapılar,
              özellikle 20 yıl ve üzeri binalar, depremde ciddi yıkılma Riski
              taşır. Kentsel dönüşüm, güvenli bir gelecek için zorunluluktur.
            </p>
            <p className="text-base text-white/90">
              Aşağıda, bina yaşına göre olası yıkılma Risk yüzdesi yer
              almaktadır.
            </p>
          </div>

          {/* Sağ - Grafik */}
          <Card className="shadow-lg text-white">
            <CardHeader>
              <CardTitle className="text-3xl font-bold mb-6 bg-gradient-to-r from-white via-gold to-white  bg-clip-text  text-transparent">
                Bina Yaşı ve Yıkılma Riski Grafiği
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={RiskData}>
                  <XAxis
                    dataKey="age"
                    stroke="white"
                    tick={{ fill: "white", fontSize: 12 }}
                  />
                  <YAxis
                    stroke="white"
                    domain={[0, 100]}
                    tickFormatter={(val) => `${val}%`}
                  />
                  <Tooltip formatter={(value) => `${value}%`} />
                  <Bar dataKey="Risk">
                    {RiskData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={getRiskColor(entry.Risk)}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </AnimatedSection>

      <div className="">
        {/* Projelerimiz Bölümü */}
        <AnimatedSection className=" p-8 py-20">
          <h1 className="text-2xl font-bold text-center mb-8 text-white">
            Projelerimiz
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            {[Yeni, Insaat, Yeni].map((img, i) => (
              <Card className="rounded-lg">
                <img
                  src={img}
                  alt={`Proje ${i + 1}`}
                  className="w-full h-[300px] object-cover rounded-lg"
                />
                <div className="pt-4 text-left">
                  <h2 className="text-lg font-semibold">Subheading</h2>
                  <p>Body text for whatever you'd like to describe.</p>
                </div>
              </Card>
            ))}
          </div>
        </AnimatedSection>

        {/* Sayacı Buraya Ekledik */}
        <AnimatedSection className="mx-auto py-20">
          <section
            ref={ref}
            className="w-full bg-gradient-to-r from-white via-gold to-white text-black py-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center items-center">
              {/* Projeler */}
              <div className="flex flex-col items-center justify-center">
                <FontAwesomeIcon
                  icon={faBuilding}
                  size="2x"
                  className="text-yellow-600 mb-2"
                />
                <p className="text-base">Toplam Proje</p>
                <h2 className="text-4xl font-bold mb-1">{projects}</h2>
              </div>

              {/* Tecrübe */}
              <div className="flex flex-col items-center justify-center">
                <FontAwesomeIcon
                  icon={faBriefcase}
                  size="2x"
                  className="text-yellow-600 mb-2"
                />
                <p className="text-base">Yıl Tecrübe</p>
                <h2 className="text-4xl font-bold mb-1">{experience}</h2>
              </div>

              {/* Ekip */}
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

        {/* İletişim Bölümü */}
        <AnimatedSection className=" p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-white">
            <div>
              <h1 className="text-3xl font-bold mb-6">İletişim</h1>
              <div className="space-y-6">
                <div>
                  <h2 className="text-lg font-semibold">Adres</h2>
                  <p>
                    İstanbul'un merkezinde yer alan ofisimiz, ulaşım açısından
                    oldukça elverişli.
                  </p>
                </div>
                <div>
                  <h2 className="text-lg font-semibold">Telefon</h2>
                  <p>+90 (212) 123 45 67</p>
                </div>
                <div>
                  <h2 className="text-lg font-semibold">E-posta</h2>
                  <p>info@example.com</p>
                </div>
              </div>
              <div className="mt-6 space-x-4">
                <button className="bg-black text-white px-6 py-2 rounded-md">
                  Ara
                </button>
                <button className="border border-black text-black px-6 py-2 rounded-md">
                  E-posta Gönder
                </button>
              </div>
            </div>
            <img
              src={iletişim}
              alt="İletişim Görseli"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-10 text-black bg-gradient-to-r from-white via-gold to-white px-0 rounded-md">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center justify-center px-4">
              <FontAwesomeIcon
                icon={faSmile}
                size="2x"
                className="text-yellow-400 mb-2"
              />
              <h3 className="text-lg font-semibold mb-1">%100 Memnuniyet</h3>
              <p className="text-sm">
                Müşteri memnuniyetini her zaman ön planda tutarak projelerimizi
                tamamlıyoruz.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center px-4">
              <FontAwesomeIcon
                icon={faBolt}
                size="2x"
                className="text-yellow-400 mb-2"
              />
              <h3 className="text-lg font-semibold mb-1">Hızlı Teslimat</h3>
              <p className="text-sm">
                Belirlenen zaman çizelgesine sadık kalarak hızlı ve kaliteli
                çözümler sunuyoruz.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center px-4">
              <FontAwesomeIcon
                icon={faShieldAlt}
                size="2x"
                className="text-yellow-400 mb-2"
              />
              <h3 className="text-lg font-semibold mb-1">Güvenilirlik</h3>
              <p className="text-sm">
                20+ yıllık tecrübemizle sektörümüzde güvenin simgesi olduk.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Hakkımızda Bölümü */}
        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-white p-8 py-20">
            <img
              src={hakkımızda}
              alt="Hakkımızda"
              className="w-full h-auto rounded-lg shadow-md"
            />
            <div>
              <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gold to-white  bg-clip-text  text-transparent">
                Hakkımızda
              </h1>
              <p className="mb-4">
                Şirketimiz, 20 yılı aşkın süredir inşaat sektöründe faaliyet
                göstermektedir...
              </p>
              <p className="mb-4">
                Projelerimizde en son teknolojileri kullanarak çevre dostu
                yapılar inşa ediyoruz.
              </p>
              <div className="mt-6 space-x-4">
                <button className="bg-black px-6 py-2 rounded-md">
                  Daha Fazla Bilgi
                </button>
                <button className="border border-black px-6 py-2 rounded-md">
                  İletişime Geç
                </button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Tablo ve Sosyal İkonlar */}
      <motion.section
        className="text-black bg-gradient-to-r from-white via-gold to-white p-6"
        {...fadeInUp}
        viewport={{ once: true }}
      >
        <table className="w-full text-left text-sm ">
          <thead>
            <tr className="text-gray-600 font-semibold">
              <th className="p-2">Site name</th>
              <th className="p-2">Topic</th>
              <th className="p-2">Topic</th>
              <th className="p-2">Topic</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="text-gray-800">
                <td className="p-2">{row.name}</td>
                <td className="p-2">{row.col2}</td>
                <td className="p-2">{row.col3}</td>
                <td className="p-2">{row.col3}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex gap-4 mt-6 text-gray-600">
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faGithub} />
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
