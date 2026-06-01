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
    <AnimatedSection className="px-6 py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-sm font-semibold uppercase tracking-wide text-gold">
            Yapı güvenliği
          </span>
          <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl">
            Kentsel Dönüşüm Neden Şart?
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/85">
            Bayrampaşa ve İstanbul’daki eski binalar, özellikle 20 yıl ve üzeri
            yapılar, deprem riski taşır. Kentsel dönüşüm ve kat karşılığı
            projeleri ile güvenli ve modern yaşam alanları oluşturmak mümkündür.
          </p>
          <p className="mt-4 text-base text-white/70">
            Aşağıda, bina yaşına göre olası yıkılma risk yüzdesi yer almaktadır.
          </p>
        </div>

        <Card className="rounded-lg border border-white/10 bg-black/40 p-6 text-white shadow-2xl backdrop-blur-md">
          <CardHeader>
            <CardTitle className="mb-6 text-2xl font-bold text-white md:text-3xl">
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
