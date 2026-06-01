import React from "react";
import AnimatedSection from "../components/animatedSection";
import Seo from "../components/Seo";

const AboutPage: React.FC = () => {
  return (
    <>
      <Seo
        title="Hakkımızda | Yeni RM İnşaat"
        description="Yeni RM İnşaat, Bayrampaşa ve İstanbul’da kentsel dönüşüm, kat karşılığı ve güvenli konut projelerinde 17 yılı aşkın deneyime sahiptir."
        path="/about"
        keywords="Yeni RM İnşaat hakkında, Bayrampaşa müteahhit, İstanbul inşaat firması, güvenli konut projeleri"
      />

      <AnimatedSection className="px-6 pb-20 pt-32 text-white">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-8 text-center bg-gradient-to-r from-white via-gold to-white bg-clip-text text-transparent">
          Hakkımızda
        </h1>

        <div className="max-w-4xl mx-auto space-y-6 text-lg md:text-xl leading-relaxed">
          <p>
            Sahip olduğumuz deneyim, geleceğin yapılarını inşa ediyor. Firmamız,
            17 yılı aşkın süredir inşaat ve müteahhitlik sektöründe güvenin,
            kalitenin ve sürdürülebilirliğin temsilcisi olmuştur.
          </p>

          <p>
            Kurulduğumuz günden bu yana hem kamu hem de özel sektörde birçok
            büyük ölçekli projeyi başarıyla hayata geçirerek güçlü bir referans
            ağı oluşturduk. Yüksek mühendislik standartları, iş güvenliğine
            verdiğimiz önem ve detaylara gösterdiğimiz özen ile projelerimizi
            zamanında ve eksiksiz teslim ediyoruz.
          </p>

          <p>
            Her projemizi sadece teknik bir süreç olarak değil, bir vizyonun
            hayata geçmesi olarak görüyoruz. Bu nedenle, işimizi sadece
            tamamlamakla kalmıyor; bulunduğumuz bölgelere katma değer sağlamayı,
            çevreye duyarlı çözümler üretmeyi ve estetik ile fonksiyonelliği bir
            araya getirmeyi amaçlıyoruz.
          </p>

          <p>
            Bugüne kadar edindiğimiz bilgi birikimi ve deneyimle, geleceğe daha
            güçlü adımlarla ilerliyoruz. Kaliteli, güvenli ve uzun ömürlü yaşam
            alanları inşa etme misyonumuzla müşterilerimizin memnuniyetini ön
            planda tutuyoruz.
          </p>
        </div>
      </AnimatedSection>
    </>
  );
};

export default AboutPage;
