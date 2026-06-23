import React from "react";

import AboutSection from "../components/aboutSec";
import ContactSection from "../components/contactSec";
import FaqSection, { bayrampasaFaqs } from "../components/FaqSection";
import LocalServiceLinks from "../components/LocalServiceLinks";
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
    "@type": "GeneralContractor",
    name: "Yeni RM İnşaat",
    url: SITE_URL,
    image: `${SITE_URL}/favicon.png`,
    description:
      "Yeni RM İnşaat, Bayrampaşa ve İstanbul’da kentsel dönüşüm, kat karşılığı inşaat ve modern konut projeleri geliştiren yerel inşaat firmasıdır.",
    telephone: "+905323322960",
    email: "info@yenirminsaat.com",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bayrampaşa",
      addressRegion: "İstanbul",
      addressCountry: "TR",
    },
    areaServed: ["Bayrampaşa", "İstanbul"],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Bayrampaşa kentsel dönüşüm",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Bayrampaşa kat karşılığı inşaat",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Bayrampaşa müteahhitlik hizmetleri",
        },
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: bayrampasaFaqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <Seo
        title="Bayrampaşa İnşaat Firması | Yeni RM İnşaat"
        description="Yeni RM İnşaat; Bayrampaşa’da kentsel dönüşüm, kat karşılığı inşaat, müteahhitlik ve modern konut projelerinde 17 yılı aşkın tecrübeyle hizmet verir."
        keywords="Bayrampaşa inşaat firması, Bayrampaşa kentsel dönüşüm, Bayrampaşa müteahhit, Bayrampaşa kat karşılığı inşaat, Yeni RM İnşaat"
        jsonLd={[organizationSchema, faqSchema]}
      />

      <div>
        <HeroSection />
        <LocalServiceLinks />
        <RiskChartSection />
        <ProjectCardsSection />
        <ProjectsSection />
        <ContactSection />
        <FeaturesSection />
        <FaqSection />
        <AboutSection />
        <ScrollToTopButton />
      </div>
    </>
  );
};

export default Home;
