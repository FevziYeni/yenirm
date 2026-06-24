import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import WhatsAppButton from "./components/WhatsAppButton";

import bgImage from "./assets/optimized/bgimage-1920.jpg";
import { HelmetProvider } from "react-helmet-async";

const About = React.lazy(() => import("./pages/About"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Project = React.lazy(() => import("./pages/project"));
const UrbanTransformation = React.lazy(
  () => import("./pages/UrbanTransformation"),
);
const BayrampasaConstruction = React.lazy(
  () => import("./pages/BayrampasaConstruction"),
);
const BuildForLand = React.lazy(() => import("./pages/BuildForLand"));
const CostEstimate = React.lazy(() => import("./pages/CostEstimate"));

const App: React.FC = () => {
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
              <Suspense
                fallback={
                  <div className="min-h-screen bg-zinc-950" aria-hidden="true" />
                }
              >
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/projects" element={<Project />} />
                  <Route
                    path="/bayrampasa-kentsel-donusum"
                    element={<UrbanTransformation />}
                  />
                  <Route
                    path="/bayrampasa-insaat-firmasi"
                    element={<BayrampasaConstruction />}
                  />
                  <Route
                    path="/bayrampasa-kat-karsiligi-insaat"
                    element={<BuildForLand />}
                  />
                  <Route
                    path="/insaat-maliyet-hesaplama"
                    element={<CostEstimate />}
                  />
                </Routes>
              </Suspense>
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
