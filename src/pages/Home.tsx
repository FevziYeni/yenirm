import React from "react";

import AboutSection from "../components/aboutSec";
import ContactSection from "../components/contactSec";
import ProjectsSection from "../components/content";
import FeaturesSection from "../components/features";
import ProjectCardsSection from "../components/projectSec";
import RiskChartSection from "../components/riskChart";
import Seo, { SITE_URL } from "../components/Seo";
import HeroSection from "../components/slayt";
import ScrollToTopButton from "../components/scrollToUp";

const Home: React.FC = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Yeni RM İnşaat",
    url: SITE_URL,
    image: `${SITE_URL}/favicon.png`,
    telephone: "+905323322960",
    email: "yenirminsaat@hotmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bayrampaşa",
      addressRegion: "İstanbul",
      addressCountry: "TR",
    },
    areaServed: ["Bayrampaşa", "İstanbul"],
  };

  return (
    <>
      <Seo
        title="Yeni RM İnşaat | Bayrampaşa Kentsel Dönüşüm ve Kat Karşılığı"
        description="Yeni RM İnşaat, Bayrampaşa ve İstanbul’da kentsel dönüşüm, kat karşılığı ve modern konut projelerinde 17 yılı aşkın tecrübeyle hizmet verir."
        keywords="Yeni RM İnşaat, Bayrampaşa kentsel dönüşüm, Bayrampaşa müteahhit, kat karşılığı inşaat, İstanbul konut projeleri"
        jsonLd={organizationSchema}
      />

      <div>
        <HeroSection />
        <RiskChartSection />
        <ProjectCardsSection />
        <ProjectsSection />
        <ContactSection />
        <FeaturesSection />
        <AboutSection />
        <ScrollToTopButton />
      </div>
    </>
  );
};

export default Home;
