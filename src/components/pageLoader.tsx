import { useEffect, useState } from "react";

import LOGO from "../assets/LOGOK.png"; // Logo dosyanı buraya koy
import { Progress } from "./ui/progress";

const PageLoader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[9999]">
      <img
        src={LOGO}
        alt="Yükleniyor"
        className="w-48 h-24 mb-6 animate-pulse"
      />
      <Progress value={progress} className="w-1/2" />
    </div>
  );
};

export default PageLoader;
