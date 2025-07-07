import React from "react";
import AnimatedSection from "../components/animatedSection";

const AboutPage: React.FC = () => {
  return (
    <AnimatedSection className="py-20 px-6 text-white">
      <h1 className="text-4xl font-bold mb-6 text-center">Hakkımızda</h1>
      <div className="max-w-3xl mx-auto space-y-4">
        Sahip Olduğumuz Deneyim, Geleceğin Yapılarını İnşa Ediyor Firmamız, 17
        yılı aşkın süredir inşaat ve müteahhitlik sektöründe güvenin, kalitenin
        ve sürdürülebilirliğin temsilcisi olmuştur. Kurulduğumuz günden bu yana,
        hem kamu hem de özel sektörde birçok büyük ölçekli projeyi başarıyla
        hayata geçirerek güçlü bir referans ağı oluşturduk. Yüksek mühendislik
        standartları, iş güvenliğine verdiğimiz önem ve detaylara gösterdiğimiz
        özen ile projelerimizi zamanında ve eksiksiz teslim ediyor; yalnızca
        binalar değil, aynı zamanda yaşamın temelini oluşturan güvenli ve
        kaliteli yapılar inşa ediyoruz. Her projemizi sadece teknik bir süreç
        olarak değil, bir vizyonun hayata geçmesi olarak görüyoruz. Bu nedenle,
        işimizi sadece tamamlamakla kalmıyor; bulunduğumuz bölgelere katma değer
        sağlamayı, çevreye duyarlı çözümler üretmeyi ve estetik ile
        fonksiyonelliği bir araya getirmeyi amaçlıyoruz. Bugüne kadar
        edindiğimiz bilgi birikimi ve deneyimle, geleceğe daha güçlü adımlarla
        ilerliyoruz
      </div>
    </AnimatedSection>
  );
};

export default AboutPage;
