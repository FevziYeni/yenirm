import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Project from "./pages/project";
import UrbanTransformation from "./pages/UrbanTransformation";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import WhatsAppButton from "./components/WhatsAppButton";

import bgImage from "./assets/optimized/bgimage-1920.jpg";
import { HelmetProvider } from "react-helmet-async";
import PageLoader from "./components/pageLoader";

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timeout);
  }, []);

  if (loading) return <PageLoader />;

  return (
    <HelmetProvider>
      <div
        className="relative min-h-screen w-full overflow-hidden bg-zinc-950 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black/45" />
        <Router>
          <div className="relative z-10">
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/projects" element={<Project />} />
                <Route
                  path="/bayrampasa-kentsel-donusum"
                  element={<UrbanTransformation />}
                />
              </Routes>
            </main>
            <Footer />
            <WhatsAppButton />
          </div>
        </Router>
      </div>
    </HelmetProvider>
  );
};

export default App;
