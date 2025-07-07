import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import AnimatedSection from "./animatedSection";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/Card";

const RiskChartSection = () => {
  const RiskData = [
    { age: "0-10 yıl", Risk: 5 },
    { age: "10-20 yıl", Risk: 25 },
    { age: "20-30 yıl", Risk: 40 },
    { age: "30-40 yıl", Risk: 65 },
    { age: "40+ yıl", Risk: 90 },
  ];

  const getRiskColor = (value: number) => {
    if (value < 25) return "#16a34a";
    if (value <= 37) return "#facc15";
    if (value <= 50) return "#eab308";
    if (value <= 75) return "#f97316";
    return "#dc2626";
  };

  return (
    <AnimatedSection className="py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gold to-white bg-clip-text text-transparent">
            Kentsel Dönüşüm Neden Şart?
          </h2>
          <p className="text-lg mb-6 text-white">
            Türkiye’nin büyük kısmı deprem riski altındadır. Eski yapılar,
            özellikle 20 yıl ve üzeri binalar, depremde ciddi yıkılma riski
            taşır. Kentsel dönüşüm, güvenli bir gelecek için zorunluluktur.
          </p>
          <p className="text-base text-white/90">
            Aşağıda, bina yaşına göre olası yıkılma risk yüzdesi yer almaktadır.
          </p>
        </div>

        <Card className="shadow-lg text-white">
          <CardHeader>
            <CardTitle className="text-3xl font-bold mb-6 bg-gradient-to-r from-white via-gold to-white bg-clip-text text-transparent">
              Bina Yaşı ve Yıkılma Riski Grafiği
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={RiskData}>
                <XAxis
                  dataKey="age"
                  stroke="white"
                  tick={{ fill: "white", fontSize: 12 }}
                />
                <YAxis
                  stroke="white"
                  domain={[0, 100]}
                  tickFormatter={(val) => `${val}%`}
                />
                <Tooltip formatter={(value) => `${value}%`} />
                <Bar dataKey="Risk">
                  {RiskData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={getRiskColor(entry.Risk)}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </AnimatedSection>
  );
};

export default RiskChartSection;
