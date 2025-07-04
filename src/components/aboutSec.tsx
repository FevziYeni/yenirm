import React from "react";

const AboutSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-white p-8">
      <img
        src="https://picsum.photos/600/400"
        alt="Hakkımızda"
        className="w-full h-auto rounded-lg shadow-md"
      />
      <div>
        <h1 className="text-3xl font-bold mb-6">Hakkımızda</h1>
        <p className="mb-4">
          Şirketimiz, 20 yılı aşkın süredir inşaat sektöründe faaliyet
          göstermektedir...
        </p>
        <p className="mb-4">
          Projelerimizde en son teknolojileri kullanarak çevre dostu yapılar
          inşa ediyoruz.
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
  );
};

export default AboutSection;
