import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Project from "./pages/project";
import Navbar from "./components/Navbar";

// Arka plan görselini import et
import bgImage from "./assets/bgimage.jpg";

import { HelmetProvider } from "react-helmet-async";

// ...
const App: React.FC = () => {
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
          {/* Footer burada olabilir */}
        </Router>
      </div>
    </HelmetProvider>
  );
};

export default App;
