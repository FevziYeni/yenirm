import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Project from "./pages/project";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";

import bgImage from "./assets/bgimage.jpg";
import { HelmetProvider } from "react-helmet-async";
import PageLoader from "./components/pageLoader";

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 2000); // 2 saniye sonra siteyi göster
    return () => clearTimeout(timeout);
  }, []);

  if (loading) return <PageLoader />;

  return (
    <HelmetProvider>
      <div
        className="relative min-h-screen w-full overflow-hidden bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Project />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </HelmetProvider>
  );
};

export default App;
