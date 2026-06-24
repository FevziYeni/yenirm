import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgePercent,
  BarChart3,
  Building2,
  Calculator,
  CheckCircle2,
  ClipboardList,
  Hammer,
  HelpCircle,
  MessageCircle,
  ShieldAlert,
  TrendingUp,
} from "lucide-react";
import Seo, { SITE_URL } from "../components/Seo";
import AnimatedSection from "../components/animatedSection";

type EstimateInput = {
  projectType: "urban" | "landShare" | "residential" | "mixed";
  region: "bayrampasa" | "istanbulEuro" | "istanbul" | "other";
  area: number;
  units: number;
  floors: number;
  basements: number;
  quality: "economic" | "standard" | "qualified" | "premium";
  parking: "none" | "open" | "closed";
  elevators: number;
  soil: "normal" | "study" | "improvement" | "retaining";
  demolition: "none" | "light" | "standard" | "heavy";
  planning: "clear" | "partial" | "uncertain";
};

type EstimateDraftInput = {
  [Key in keyof EstimateInput]: EstimateInput[Key] | "";
};

const baseRates: Record<EstimateInput["projectType"], number> = {
  urban: 31000,
  landShare: 29500,
  residential: 28500,
  mixed: 33500,
};

const projectLabels: Record<EstimateInput["projectType"], string> = {
  urban: "Kentsel dönüşüm konut projesi",
  landShare: "Kat karşılığı inşaat",
  residential: "Yeni konut / apartman",
  mixed: "Konut + ticari karma proje",
};

const regionMultipliers: Record<EstimateInput["region"], number> = {
  bayrampasa: 1.05,
  istanbulEuro: 1.03,
  istanbul: 1,
  other: 0.92,
};

const regionLabels: Record<EstimateInput["region"], string> = {
  bayrampasa: "Bayrampaşa",
  istanbulEuro: "İstanbul Avrupa Yakası",
  istanbul: "İstanbul geneli",
  other: "İstanbul dışı / diğer",
};

const qualityMultipliers: Record<EstimateInput["quality"], number> = {
  economic: 0.82,
  standard: 1,
  qualified: 1.23,
  premium: 1.55,
};

const qualityLabels: Record<EstimateInput["quality"], string> = {
  economic: "Ekonomik",
  standard: "Standart",
  qualified: "Nitelikli",
  premium: "Üst segment",
};

const parkingMultipliers: Record<EstimateInput["parking"], number> = {
  none: 1,
  open: 1.03,
  closed: 1.1,
};

const parkingLabels: Record<EstimateInput["parking"], string> = {
  none: "Otopark yok / sınırlı",
  open: "Açık otopark",
  closed: "Kapalı otopark",
};

const soilMultipliers: Record<EstimateInput["soil"], number> = {
  normal: 1,
  study: 1.05,
  improvement: 1.14,
  retaining: 1.22,
};

const soilLabels: Record<EstimateInput["soil"], string> = {
  normal: "Normal zemin varsayımı",
  study: "Detaylı zemin etüdü gerekli",
  improvement: "Zemin iyileştirme olabilir",
  retaining: "İksa / derin kazı ihtimali",
};

const demolitionRates: Record<EstimateInput["demolition"], number> = {
  none: 0,
  light: 450,
  standard: 750,
  heavy: 1100,
};

const demolitionLabels: Record<EstimateInput["demolition"], string> = {
  none: "Yıkım yok",
  light: "Basit yıkım",
  standard: "Standart yıkım",
  heavy: "Yoğun çevre güvenliği / zor yıkım",
};

const planningMultipliers: Record<EstimateInput["planning"], number> = {
  clear: 0.97,
  partial: 1,
  uncertain: 1.08,
};

const planningLabels: Record<EstimateInput["planning"], string> = {
  clear: "İmar ve proje verisi net",
  partial: "Bazı bilgiler yaklaşık",
  uncertain: "İmar / ruhsat durumu belirsiz",
};

const initialInput: EstimateDraftInput = {
  projectType: "",
  region: "",
  area: "",
  units: "",
  floors: "",
  basements: "",
  quality: "",
  parking: "",
  elevators: "",
  soil: "",
  demolition: "",
  planning: "",
};

const yarisiBizdenSupport = {
  grantPerResidence: 875000,
  creditPerResidence: 875000,
  movingSupportPerResidence: 125000,
  workplaceGrant: 437500,
  workplaceCredit: 437500,
  workplaceMovingSupport: 125000,
  deadline: "31 Aralık 2026",
  sourceUrl: "https://csb.gov.tr/haberler/istanbul-icin-yarisi-bizden-kampanyasi-302278",
};

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
    maximumFractionDigits: 0,
  }).format(value);

const formatNumber = (value: number) =>
  new Intl.NumberFormat("tr-TR", { maximumFractionDigits: 0 }).format(value);

const clampNumber = (value: number, min: number, max: number) => {
  if (!Number.isFinite(value)) {
    return min;
  }
  return Math.min(Math.max(value, min), max);
};

const getFloorMultiplier = (floors: number) => {
  if (floors >= 12) {
    return 1.08;
  }
  if (floors >= 8) {
    return 1.05;
  }
  if (floors <= 3) {
    return 0.96;
  }
  return 1;
};

const calculateEstimate = (input: EstimateInput) => {
  const area = clampNumber(input.area, 1, 50000);
  const units = clampNumber(input.units, 1, 600);
  const floors = clampNumber(input.floors, 1, 60);
  const basements = clampNumber(input.basements, 0, 8);
  const elevators = clampNumber(input.elevators, 0, 12);

  const rate =
    baseRates[input.projectType] *
    regionMultipliers[input.region] *
    qualityMultipliers[input.quality] *
    parkingMultipliers[input.parking] *
    soilMultipliers[input.soil] *
    planningMultipliers[input.planning] *
    getFloorMultiplier(floors) *
    (1 + basements * 0.07) *
    (1 + elevators * 0.025);

  const buildCost = rate * area;
  const demolitionCost = demolitionRates[input.demolition] * area;
  const projectAndSiteCosts = buildCost * 0.08;
  const reserve = (buildCost + demolitionCost + projectAndSiteCosts) * 0.1;

  const expected = buildCost + demolitionCost + projectAndSiteCosts + reserve;
  const low = buildCost * 0.88 + demolitionCost * 0.85 + projectAndSiteCosts * 0.9;
  const high =
    buildCost * 1.22 + demolitionCost * 1.3 + projectAndSiteCosts * 1.18 + reserve;

  return {
    area,
    units,
    floors,
    basements,
    elevators,
    rate,
    buildCost,
    demolitionCost,
    projectAndSiteCosts,
    reserve,
    expected,
    low,
    high,
    unitAverage: expected / units,
    lowRate: low / area,
    highRate: high / area,
  };
};

type SelectFieldProps = {
  id: keyof EstimateDraftInput;
  label: string;
  value: string;
  options: Array<{ value: string; label: string }>;
  placeholder: string;
  onChange: (id: keyof EstimateDraftInput, value: string) => void;
};

const SelectField: React.FC<SelectFieldProps> = ({
  id,
  label,
  value,
  options,
  placeholder,
  onChange,
}) => (
  <label className="block">
    <span className="mb-2 block text-sm font-semibold text-white/80">
      {label}
    </span>
    <select
      value={value}
      onChange={(event) => onChange(id, event.target.value)}
      className="h-12 w-full rounded-md border border-white/15 bg-zinc-950/80 px-3 text-sm text-white outline-none transition focus:border-gold"
    >
      <option value="">{placeholder}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </label>
);

type NumberFieldProps = {
  id: keyof EstimateDraftInput;
  label: string;
  value: number | "";
  min: number;
  max: number;
  step?: number;
  suffix?: string;
  placeholder?: string;
  onChange: (id: keyof EstimateDraftInput, value: number | "") => void;
};

const NumberField: React.FC<NumberFieldProps> = ({
  id,
  label,
  value,
  min,
  max,
  step = 1,
  suffix,
  placeholder,
  onChange,
}) => (
  <label className="block">
    <span className="mb-2 block text-sm font-semibold text-white/80">
      {label}
    </span>
    <div className="flex h-12 items-center rounded-md border border-white/15 bg-zinc-950/80 px-3 transition focus-within:border-gold">
      <input
        type="number"
        value={value}
        min={min}
        max={max}
        step={step}
        placeholder={placeholder}
        onChange={(event) => {
          const rawValue = event.target.value;
          onChange(id, rawValue === "" ? "" : Number(rawValue));
        }}
        className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none"
      />
      {suffix && <span className="ml-2 text-xs text-white/45">{suffix}</span>}
    </div>
  </label>
);

const CostEstimate: React.FC = () => {
  const [input, setInput] = useState<EstimateDraftInput>(initialInput);
  const [hasCalculated, setHasCalculated] = useState(false);
  const [formError, setFormError] = useState("");

  const parsedInput = useMemo<EstimateInput | null>(() => {
    const values = Object.values(input);
    if (values.some((value) => value === "")) {
      return null;
    }

    return input as EstimateInput;
  }, [input]);

  const estimate = useMemo(
    () => (parsedInput ? calculateEstimate(parsedInput) : null),
    [parsedInput],
  );

  const updateSelect = (id: keyof EstimateDraftInput, value: string) => {
    setInput((current) => ({ ...current, [id]: value }));
    setHasCalculated(false);
    setFormError("");
  };

  const updateNumber = (id: keyof EstimateDraftInput, value: number | "") => {
    setInput((current) => ({ ...current, [id]: value }));
    setHasCalculated(false);
    setFormError("");
  };

  const handleCalculate = () => {
    if (!parsedInput || !estimate) {
      setHasCalculated(false);
      setFormError("Lütfen hesaplama için tüm alanları doldurun.");
      return;
    }

    setFormError("");
    setHasCalculated(true);
  };

  const isIstanbulProject =
    parsedInput &&
    ["bayrampasa", "istanbulEuro", "istanbul"].includes(parsedInput.region);
  const canShowYarisiBizden =
    Boolean(isIstanbulProject) && parsedInput?.projectType === "urban";
  const potentialGrant = estimate
    ? estimate.units * yarisiBizdenSupport.grantPerResidence
    : 0;
  const potentialCredit = estimate
    ? estimate.units * yarisiBizdenSupport.creditPerResidence
    : 0;
  const potentialMovingSupport = estimate
    ? estimate.units * yarisiBizdenSupport.movingSupportPerResidence
    : 0;
  const potentialTotalSupport =
    potentialGrant + potentialCredit + potentialMovingSupport;
  const unitAfterGrant = estimate
    ? Math.max(0, estimate.unitAverage - yarisiBizdenSupport.grantPerResidence)
    : 0;
  const unitAfterGrantAndCredit = estimate
    ? Math.max(
        0,
        estimate.unitAverage -
          yarisiBizdenSupport.grantPerResidence -
          yarisiBizdenSupport.creditPerResidence -
          yarisiBizdenSupport.movingSupportPerResidence,
      )
    : 0;

  const whatsappText = encodeURIComponent(
    `Merhaba, inşaat maliyet hesaplama sayfasından ön aralık aldım.
Proje: ${parsedInput ? projectLabels[parsedInput.projectType] : ""}
Bölge: ${parsedInput ? regionLabels[parsedInput.region] : ""}
Alan: ${estimate ? formatNumber(estimate.area) : ""} m2
Kat: ${estimate?.floors ?? ""}, Bodrum: ${estimate?.basements ?? ""}, Daire/bağımsız bölüm: ${estimate?.units ?? ""}
Kalite: ${parsedInput ? qualityLabels[parsedInput.quality] : ""}
Zemin: ${parsedInput ? soilLabels[parsedInput.soil] : ""}
Ön aralık: ${estimate ? `${formatCurrency(estimate.low)} - ${formatCurrency(estimate.high)}` : ""}
Daire başı tahmini: ${
      estimate
        ? canShowYarisiBizden
          ? `${formatCurrency(unitAfterGrant)} hibe sonrası kalan tahmini maliyet`
          : formatCurrency(estimate.unitAverage)
        : ""
    }
Yarısı Bizden potansiyel destek notu: ${
      canShowYarisiBizden && estimate
        ? `${formatCurrency(potentialGrant)} hibe + ${formatCurrency(potentialCredit)} kredi + ${formatCurrency(potentialMovingSupport)} taşınma/tahliye desteği`
        : "Uygunluk resmi başvuru ve riskli yapı sürecine bağlıdır."
    }
Detaylı görüşme yapmak istiyorum.`,
  );

  const whatsappHref = `https://wa.me/905323322960?text=${whatsappText}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "İnşaat Maliyet Hesaplama ve Ortalama Teklif Aracı",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: `${SITE_URL}/insaat-maliyet-hesaplama`,
      provider: {
        "@type": "GeneralContractor",
        name: "Yeni RM İnşaat",
        url: SITE_URL,
        telephone: "+905323322960",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Bayrampaşa",
          addressRegion: "İstanbul",
          addressCountry: "TR",
        },
      },
      areaServed: "İstanbul",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Bu hesaplama kesin teklif midir?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Hayır. Sayfadaki sonuç; alan, kalite, zemin, bodrum, otopark, asansör ve proje belirsizliklerine göre oluşturulan yaklaşık ön aralıktır. Kesin teklif için yerinde keşif, imar kontrolü, mimari proje ve teknik şartname gerekir.",
          },
        },
        {
          "@type": "Question",
          name: "Kentsel dönüşüm maliyetini en çok ne değiştirir?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Toplam kapalı inşaat alanı, zemin koşulu, bodrum ve otopark çözümü, cephe ve iç malzeme kalitesi, yıkım koşulları, imar durumu ve piyasa maliyetleri sonucu doğrudan etkiler.",
          },
        },
        {
          "@type": "Question",
          name: "Yarısı Bizden Kampanyası kapsamında ne kadar destek veriliyor?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Çevre, Şehircilik ve İklim Değişikliği Bakanlığı duyurusuna göre İstanbul'da bina bazlı dönüşüm desteğinde konut başına 875 bin TL hibe, 875 bin TL kredi ve 125 bin TL taşınma/tahliye desteği açıklanmıştır. Uygunluk resmi başvuru ve riskli yapı sürecine bağlıdır.",
          },
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Ana Sayfa",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "İnşaat Maliyet Hesaplama",
          item: `${SITE_URL}/insaat-maliyet-hesaplama`,
        },
      ],
    },
  ];

  const costBars = estimate
    ? [
        {
          label: "Yapım",
          value: estimate.buildCost,
          icon: Hammer,
          color: "bg-gold",
          width: 100,
        },
        {
          label: "Proje ve şantiye",
          value: estimate.projectAndSiteCosts,
          icon: ClipboardList,
          color: "bg-sky-400",
          width: Math.max(
            12,
            (estimate.projectAndSiteCosts / estimate.buildCost) * 100,
          ),
        },
        {
          label: "Yıkım",
          value: estimate.demolitionCost,
          icon: ShieldAlert,
          color: "bg-rose-400",
          width: estimate.demolitionCost
            ? Math.max(10, (estimate.demolitionCost / estimate.buildCost) * 100)
            : 6,
        },
        {
          label: "Beklenmeyen pay",
          value: estimate.reserve,
          icon: BadgePercent,
          color: "bg-emerald-400",
          width: Math.max(12, (estimate.reserve / estimate.buildCost) * 100),
        },
      ]
    : [];

  return (
    <>
      <Seo
        title="İnşaat Maliyet Hesaplama | Ortalama Teklif Al | Yeni RM"
        description="Bayrampaşa ve İstanbul için kentsel dönüşüm, kat karşılığı inşaat ve konut projelerinde yaklaşık maliyet aralığı hesaplayın. Yarısı Bizden hibe ve kredi desteği hakkında bilgi alın."
        path="/insaat-maliyet-hesaplama"
        keywords="inşaat maliyet hesaplama, ortalama inşaat teklifi, Bayrampaşa kentsel dönüşüm maliyeti, Yarısı Bizden hibe kredi, kentsel dönüşüm devlet desteği, kat karşılığı inşaat maliyeti"
        jsonLd={jsonLd}
      />

      <article className="pb-24 pt-28 text-white">
        <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-20">
          <AnimatedSection className="max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-black/35 px-4 py-2 text-sm font-semibold text-gold backdrop-blur">
              <Calculator size={16} />
              Ortalama teklif aracı
            </span>
            <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              İnşaat projeniz için yaklaşık maliyet aralığını hesaplayın.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-white/75 md:text-lg">
              Kentsel dönüşüm, kat karşılığı veya yeni konut projelerinde
              maliyet; yalnızca m² ile değil, zemin, bodrum, otopark, kalite,
              yıkım ve ruhsat belirsizlikleriyle birlikte değişir. Bu araç size
              görüşmeye başlamadan önce gerçekçi bir ön aralık verir.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                "2026 İstanbul piyasa varsayımı",
                "Geniş aralıkla güvenli ön hesap",
                "WhatsApp ile hızlı görüşme",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-md border border-white/10 bg-black/35 px-4 py-3 text-sm text-white/75 backdrop-blur"
                >
                  <CheckCircle2 size={17} className="shrink-0 text-gold" />
                  {item}
                </div>
              ))}
            </div>
          </AnimatedSection>

        </section>

        <AnimatedSection className="border-y border-white/10 bg-black/38 px-6 py-16 backdrop-blur-md">
          <div className="mx-auto max-w-7xl space-y-8">
            <div className="rounded-lg border border-white/10 bg-zinc-950/70 p-5 shadow-xl sm:p-6">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-gold/15 text-gold">
                  <Building2 size={22} />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-gold">
                    Proje bilgileri
                  </p>
                  <h2 className="text-2xl font-bold">Bilgileri girin</h2>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <SelectField
                  id="projectType"
                  label="Proje tipi"
                  value={input.projectType}
                  onChange={updateSelect}
                  placeholder="Proje tipini seçin"
                  options={[
                    { value: "urban", label: projectLabels.urban },
                    { value: "landShare", label: projectLabels.landShare },
                    { value: "residential", label: projectLabels.residential },
                    { value: "mixed", label: projectLabels.mixed },
                  ]}
                />
                <SelectField
                  id="region"
                  label="Bölge"
                  value={input.region}
                  onChange={updateSelect}
                  placeholder="Bölge seçin"
                  options={[
                    { value: "bayrampasa", label: regionLabels.bayrampasa },
                    {
                      value: "istanbulEuro",
                      label: regionLabels.istanbulEuro,
                    },
                    { value: "istanbul", label: regionLabels.istanbul },
                    { value: "other", label: regionLabels.other },
                  ]}
                />
                <NumberField
                  id="area"
                  label="Toplam kapalı inşaat alanı"
                  value={input.area}
                  min={1}
                  max={50000}
                  step={50}
                  suffix="m²"
                  placeholder="Örn. 2200"
                  onChange={updateNumber}
                />
                <NumberField
                  id="units"
                  label="Bağımsız bölüm / daire sayısı"
                  value={input.units}
                  min={1}
                  max={600}
                  placeholder="Örn. 24"
                  onChange={updateNumber}
                />
                <NumberField
                  id="floors"
                  label="Toplam kat sayısı"
                  value={input.floors}
                  min={1}
                  max={60}
                  placeholder="Örn. 6"
                  onChange={updateNumber}
                />
                <NumberField
                  id="basements"
                  label="Bodrum kat sayısı"
                  value={input.basements}
                  min={0}
                  max={8}
                  placeholder="Örn. 1"
                  onChange={updateNumber}
                />
                <SelectField
                  id="quality"
                  label="Malzeme / bitiş seviyesi"
                  value={input.quality}
                  onChange={updateSelect}
                  placeholder="Kalite seviyesini seçin"
                  options={[
                    { value: "economic", label: qualityLabels.economic },
                    { value: "standard", label: qualityLabels.standard },
                    { value: "qualified", label: qualityLabels.qualified },
                    { value: "premium", label: qualityLabels.premium },
                  ]}
                />
                <SelectField
                  id="parking"
                  label="Otopark çözümü"
                  value={input.parking}
                  onChange={updateSelect}
                  placeholder="Otopark durumunu seçin"
                  options={[
                    { value: "none", label: parkingLabels.none },
                    { value: "open", label: parkingLabels.open },
                    { value: "closed", label: parkingLabels.closed },
                  ]}
                />
                <NumberField
                  id="elevators"
                  label="Asansör sayısı"
                  value={input.elevators}
                  min={0}
                  max={12}
                  placeholder="Örn. 1"
                  onChange={updateNumber}
                />
                <SelectField
                  id="soil"
                  label="Zemin / kazı durumu"
                  value={input.soil}
                  onChange={updateSelect}
                  placeholder="Zemin durumunu seçin"
                  options={[
                    { value: "normal", label: soilLabels.normal },
                    { value: "study", label: soilLabels.study },
                    { value: "improvement", label: soilLabels.improvement },
                    { value: "retaining", label: soilLabels.retaining },
                  ]}
                />
                <SelectField
                  id="demolition"
                  label="Yıkım durumu"
                  value={input.demolition}
                  onChange={updateSelect}
                  placeholder="Yıkım durumunu seçin"
                  options={[
                    { value: "none", label: demolitionLabels.none },
                    { value: "light", label: demolitionLabels.light },
                    { value: "standard", label: demolitionLabels.standard },
                    { value: "heavy", label: demolitionLabels.heavy },
                  ]}
                />
                <SelectField
                  id="planning"
                  label="İmar / ruhsat netliği"
                  value={input.planning}
                  onChange={updateSelect}
                  placeholder="İmar durumunu seçin"
                  options={[
                    { value: "clear", label: planningLabels.clear },
                    { value: "partial", label: planningLabels.partial },
                    { value: "uncertain", label: planningLabels.uncertain },
                  ]}
                />
              </div>

              <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm leading-6 text-white/60">
                  Bilgileri kontrol ettikten sonra hesapla butonuna basın.
                  Sonuç aşağıda yaklaşık aralık olarak açılır.
                  {formError && (
                    <span className="mt-2 block font-semibold text-red-300">
                      {formError}
                    </span>
                  )}
                </p>
                <button
                  type="button"
                  onClick={handleCalculate}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-bold text-black transition hover:bg-white"
                >
                  <Calculator size={18} />
                  Hesapla
                </button>
              </div>
            </div>

            {hasCalculated && estimate && (
              <div className="rounded-lg border border-white/12 bg-zinc-950/82 p-4 shadow-2xl backdrop-blur-md sm:p-6">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-gold">
                      Hesaplama sonucu
                    </p>
                    <h2 className="mt-2 text-2xl font-bold">
                      Ön maliyet aralığı
                    </h2>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-gold/15 text-gold">
                    <BarChart3 size={24} />
                  </div>
                </div>

                <div className="rounded-lg border border-gold/30 bg-gold/10 p-5">
                  <p className="text-sm font-semibold uppercase tracking-wide text-gold">
                    Tahmini teklif aralığı
                  </p>
                  <h3 className="mt-3 text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                    {formatCurrency(estimate.low)} ile{" "}
                    {formatCurrency(estimate.high)} arası
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-white/68">
                    Bu aralık, girilen proje bilgilerine göre oluşan yaklaşık
                    toplam yapım bütçesidir. Kesin teklif için keşif, imar
                    kontrolü ve teknik şartname gerekir.
                  </p>
                </div>

                <div className="mt-5 grid grid-cols-1 gap-3 lg:grid-cols-3">
                  <div className="rounded-md border border-white/10 bg-black/30 p-4">
                    <p className="text-xs uppercase tracking-wide text-white/45">
                      Alt tahmin
                    </p>
                    <p className="mt-2 text-xl font-bold text-white">
                      {formatCurrency(estimate.low)}
                    </p>
                    <p className="mt-2 text-xs leading-5 text-white/48">
                      Koşulların net ve maliyetlerin kontrollü olduğu senaryo.
                    </p>
                  </div>
                  <div className="rounded-md border border-gold/30 bg-gold/10 p-4">
                    <p className="text-xs uppercase tracking-wide text-gold">
                      Beklenen seviye
                    </p>
                    <p className="mt-2 text-2xl font-extrabold text-gold">
                      {formatCurrency(estimate.expected)}
                    </p>
                    <p className="mt-2 text-xs leading-5 text-white/58">
                      Görüşmeye başlamak için en gerçekçi orta değer.
                    </p>
                  </div>
                  <div className="rounded-md border border-white/10 bg-black/30 p-4">
                    <p className="text-xs uppercase tracking-wide text-white/45">
                      Üst tahmin
                    </p>
                    <p className="mt-2 text-xl font-bold text-white">
                      {formatCurrency(estimate.high)}
                    </p>
                    <p className="mt-2 text-xs leading-5 text-white/48">
                      Zemin, bodrum, kalite veya piyasa farkı artarsa oluşabilir.
                    </p>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div className="rounded-md border border-white/10 bg-black/30 p-4">
                    <p className="text-xs uppercase tracking-wide text-white/45">
                      m² başına aralık
                    </p>
                    <p className="mt-2 text-lg font-bold text-white">
                      {formatCurrency(estimate.lowRate)} -{" "}
                      {formatCurrency(estimate.highRate)}
                    </p>
                  </div>
                  <div className="rounded-md border border-white/10 bg-black/30 p-4">
                    <p className="text-xs uppercase tracking-wide text-white/45">
                      {canShowYarisiBizden
                        ? "Daire başı hibe sonrası"
                        : "Bağımsız bölüm başı ortalama"}
                    </p>
                    <p className="mt-2 text-lg font-bold text-white">
                      {canShowYarisiBizden
                        ? formatCurrency(unitAfterGrant)
                        : formatCurrency(estimate.unitAverage)}
                    </p>
                    <p className="mt-2 text-xs leading-5 text-white/48">
                      {canShowYarisiBizden
                        ? `Normal ortalama ${formatCurrency(
                            estimate.unitAverage,
                          )}. 875 bin TL hibe düşülerek gösterildi.`
                        : "Toplam beklenen maliyetin bağımsız bölüm sayısına bölünmüş halidir."}
                    </p>
                  </div>
                </div>

                {canShowYarisiBizden && (
                  <div className="mt-5 rounded-lg border border-emerald-400/30 bg-emerald-500/10 p-5">
                    <div className="flex items-start gap-3">
                      <BadgePercent
                        size={22}
                        className="mt-1 shrink-0 text-emerald-300"
                      />
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-200">
                          Yarısı Bizden desteği
                        </p>
                        <h3 className="mt-1 text-xl font-bold text-white">
                          Konut başına 875 bin TL hibe + 875 bin TL kredi
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-white/70">
                          Bakanlık duyurusuna göre İstanbul'da bina bazlı
                          dönüşüm desteğinde her bir konut için ayrıca 125 bin
                          TL taşınma/tahliye desteği bulunur. Bu bilgiler
                          resmi başvuru ve uygunluk şartlarına bağlıdır.
                        </p>
                      </div>
                    </div>
                    <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
                      <div className="rounded-md bg-black/25 p-4">
                        <p className="text-xs text-white/50">Potansiyel hibe</p>
                        <p className="mt-2 text-lg font-bold text-emerald-200">
                          {formatCurrency(potentialGrant)}
                        </p>
                      </div>
                      <div className="rounded-md bg-black/25 p-4">
                        <p className="text-xs text-white/50">Potansiyel kredi</p>
                        <p className="mt-2 text-lg font-bold text-emerald-200">
                          {formatCurrency(potentialCredit)}
                        </p>
                      </div>
                      <div className="rounded-md bg-black/25 p-4">
                        <p className="text-xs text-white/50">
                          Taşınma/tahliye
                        </p>
                        <p className="mt-2 text-lg font-bold text-emerald-200">
                          {formatCurrency(potentialMovingSupport)}
                        </p>
                      </div>
                    </div>
                    <div className="mt-3 rounded-md border border-emerald-300/20 bg-black/25 p-4">
                      <p className="text-xs text-white/50">
                        Hibe + kredi + taşınma/tahliye toplam potansiyel
                        finansman
                      </p>
                      <p className="mt-2 text-xl font-extrabold text-emerald-200">
                        {formatCurrency(potentialTotalSupport)}
                      </p>
                    </div>
                    <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <div className="rounded-md border border-emerald-300/20 bg-black/25 p-4">
                        <p className="text-xs text-white/50">
                          Daire sakini tahmini kalan maliyet
                        </p>
                        <p className="mt-2 text-xl font-extrabold text-white">
                          {formatCurrency(unitAfterGrant)}
                        </p>
                        <p className="mt-2 text-xs leading-5 text-white/50">
                          Sadece 875 bin TL hibe düşülerek hesaplandı.
                        </p>
                      </div>
                      <div className="rounded-md border border-emerald-300/20 bg-black/25 p-4">
                        <p className="text-xs text-white/50">
                          Kredi de kullanılırsa ilk nakit ihtiyacı
                        </p>
                        <p className="mt-2 text-xl font-extrabold text-white">
                          {formatCurrency(unitAfterGrantAndCredit)}
                        </p>
                        <p className="mt-2 text-xs leading-5 text-white/50">
                          Kredi düşülmüş gibi gösterilir; kredi geri ödenecek
                          borçtur.
                        </p>
                      </div>
                    </div>
                    <p className="mt-4 text-xs leading-5 text-white/50">
                      Bu tutarlar daire sayısı konut kabul edilerek hesaplanan
                      bilgilendirme amaçlı toplamdır; kesin hak ediş değildir.
                      Kampanyadan yararlanma koşulları resmi kurumlarca
                      değerlendirilir.
                    </p>
                  </div>
                )}

                <div className="mt-6 space-y-4">
                  {costBars.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label}>
                        <div className="mb-2 flex items-center justify-between gap-3 text-sm">
                          <span className="flex items-center gap-2 text-white/75">
                            <Icon size={16} className="text-gold" />
                            {item.label}
                          </span>
                          <span className="font-semibold text-white">
                            {formatCurrency(item.value)}
                          </span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-white/10">
                          <div
                            className={`h-full rounded-full ${item.color}`}
                            style={{ width: `${Math.min(item.width, 100)}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>

                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#25D366] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#1ebe5d]"
                >
                  <MessageCircle size={18} />
                  Bu Bilgilerle WhatsApp'tan Görüş
                </a>

                <p className="mt-4 text-xs leading-5 text-white/45">
                  Bu sonuç resmi teklif değildir. KDV, arsa bedeli, finansman,
                  tapu/harç kalemleri, belediye masrafları ve nihai teknik
                  şartnameye bağlı kalemler ayrıca değerlendirilmelidir.
                </p>
              </div>
            )}

            <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
              <div className="rounded-lg border border-white/10 bg-zinc-950/70 p-6 shadow-xl">
                <div className="flex items-center gap-3">
                  <TrendingUp size={22} className="text-gold" />
                  <h2 className="text-2xl font-bold">Sonucu ne etkiler?</h2>
                </div>
                <div className="mt-6 space-y-4">
                  {[
                    "Kapalı otopark ve bodrum kat, kazı, iksa ve su yalıtımı nedeniyle maliyeti yükseltebilir.",
                    "Zemin iyileştirme, fore kazık, perde/iksa gibi kararlar kesin proje ve zemin raporuyla netleşir.",
                    "Cephe, doğrama, ıslak hacim, mekanik ve elektrik markaları kalite seviyesini doğrudan değiştirir.",
                    "Kentsel dönüşümde yıkım, tahliye, malik mutabakatı ve ruhsat süreci ayrıca planlanmalıdır.",
                  ].map((item) => (
                    <div key={item} className="flex gap-3">
                      <CheckCircle2
                        size={18}
                        className="mt-1 shrink-0 text-gold"
                      />
                      <p className="text-sm leading-7 text-white/70">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-gold/25 bg-gold/10 p-6">
                <div className="flex items-center gap-3">
                  <HelpCircle size={22} className="text-gold" />
                  <h2 className="text-xl font-bold">Neden aralık veriyoruz?</h2>
                </div>
                <p className="mt-4 text-sm leading-7 text-white/70">
                  İnşaat maliyetinde tek rakam çoğu zaman yanıltıcıdır. Aynı m²
                  alan; zemin, bodrum, cephe, malzeme sınıfı, ruhsat koşulları
                  ve piyasa oynaklığı nedeniyle farklı bütçelere çıkabilir. Bu
                  yüzden araç sonucu alt-üst bant şeklinde verir.
                </p>
              </div>

              <div className="rounded-lg border border-emerald-400/25 bg-emerald-500/10 p-6">
                <div className="flex items-center gap-3">
                  <BadgePercent size={22} className="text-emerald-300" />
                  <h2 className="text-xl font-bold">
                    Devletten alınabilecek destek
                  </h2>
                </div>
                <div className="mt-5 space-y-3 text-sm leading-7 text-white/72">
                  <p>
                    İstanbul'daki Yarısı Bizden Kampanyası kapsamında bina
                    bazlı dönüşümde konut başına 875 bin TL hibe, 875 bin TL
                    kredi ve 125 bin TL taşınma/tahliye desteği açıklanmıştır.
                  </p>
                  <p>
                    İşyeri için ilk hak sahipliğinde 437 bin 500 TL hibe, 437
                    bin 500 TL kredi ve 125 bin TL taşınma desteği belirtilir.
                  </p>
                  <p>
                    31 Aralık 2026'ya kadar 6306 sayılı Kanun kapsamında riskli
                    yapı ilan edilen bağımsız bölümler için başvuru imkanı
                    duyurulmuştur.
                  </p>
                </div>
                <a
                  href={yarisiBizdenSupport.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-200 hover:text-white"
                >
                  Resmi duyuruyu incele
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <span className="text-sm font-semibold uppercase tracking-wide text-gold">
                Bilgi rehberi
              </span>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Ortalama teklif alırken hangi bilgiler hazırlanmalı?
              </h2>
              <p className="mt-5 leading-8 text-white/70">
                Daha sağlıklı bir görüşme için yalnızca daire sayısı değil,
                toplam inşaat alanı, imar durumu ve teknik beklentiler de
                birlikte değerlendirilmelidir.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 lg:col-span-2 md:grid-cols-2">
              {[
                {
                  title: "Arsa ve imar bilgisi",
                  text: "Ada/parsel, emsal, yükseklik, çekme mesafeleri ve varsa plan notları projenin gerçek kapasitesini belirler.",
                },
                {
                  title: "Mevcut bina bilgisi",
                  text: "Kentsel dönüşümde mevcut bağımsız bölüm sayısı, bina yaşı, yıkım koşulu ve malik dağılımı süreci etkiler.",
                },
                {
                  title: "Kapalı alan hesabı",
                  text: "Daire net/brüt alanları, ortak alanlar, bodrumlar, otopark ve teknik hacimler maliyetin ana kalemidir.",
                },
                {
                  title: "Teknik beklenti",
                  text: "Cephe sistemi, asansör, ısıtma/soğutma, peyzaj, jeneratör ve malzeme sınıfı teklif aralığını değiştirir.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="rounded-lg border border-white/10 bg-black/35 p-6 backdrop-blur"
                >
                  <h3 className="text-xl font-semibold text-gold">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/68">
                    {card.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="border-y border-white/10 bg-zinc-950/82 px-6 py-20">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wide text-gold">
                Kaynak yaklaşımı
              </span>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Hesaplama nasıl oluşturuldu?
              </h2>
              <p className="mt-5 leading-8 text-white/70">
                Model; güncel İstanbul piyasa varsayımı, resmi yapı süreçleri,
                yapı denetimi, zemin ve proje belirsizliği gibi başlıkları
                birlikte ele alır. Nihai teklif için yerinde keşif ve teknik
                şartname hazırlanması gerekir.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {[
                {
                  title: "TÜİK",
                  text: "İnşaat ve konut verileri, maliyet endeksi takibi.",
                  href: "https://veriportali.tuik.gov.tr/Kategori/GetKategori?p=Insaat-ve-Konut-116",
                },
                {
                  title: "Yapı İşleri",
                  text: "Yapı denetimi, mevzuat ve uygulama başlıkları.",
                  href: "https://yapiisleri.csb.gov.tr/",
                },
                {
                  title: "Kentsel Dönüşüm",
                  text: "Riskli yapı ve İstanbul dönüşüm destekleri.",
                  href: "https://kentseldonusum.gov.tr/",
                },
                {
                  title: "Yarısı Bizden",
                  text: "İstanbul için hibe, kredi ve taşınma desteği duyurusu.",
                  href: yarisiBizdenSupport.sourceUrl,
                },
              ].map((source) => (
                <a
                  key={source.title}
                  href={source.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-white/10 bg-black/35 p-5 transition hover:border-gold/50"
                >
                  <p className="text-lg font-bold text-gold">{source.title}</p>
                  <p className="mt-3 text-sm leading-6 text-white/65">
                    {source.text}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8">
          <h2 className="mx-auto max-w-3xl text-3xl font-bold md:text-5xl">
            Yaklaşık aralığı net teklife çevirmek için projeyi birlikte
            inceleyelim.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/70">
            Bayrampaşa ve İstanbul’daki kentsel dönüşüm, kat karşılığı inşaat
            veya yeni konut projeleriniz için ön fizibilite görüşmesi
            yapabiliriz.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-gold px-6 py-3 font-bold text-black transition hover:bg-white"
            >
              WhatsApp ile Teklif Konuş
              <ArrowRight size={18} />
            </a>
            <Link
              to="/bayrampasa-kentsel-donusum"
              className="inline-flex items-center justify-center rounded-md border border-white/25 bg-black/25 px-6 py-3 font-bold transition hover:border-gold hover:text-gold"
            >
              Kentsel Dönüşüm Rehberi
            </Link>
          </div>
        </AnimatedSection>
      </article>
    </>
  );
};

export default CostEstimate;
