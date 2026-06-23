import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const buildDir = path.join(rootDir, "build");
const templatePath = path.join(buildDir, "index.html");
const siteUrl = "https://www.yenirminsaat.com";

const pages = [
  {
    path: "/",
    title: "Bayrampaşa İnşaat Firması | Yeni RM İnşaat",
    description:
      "Yeni RM İnşaat; Bayrampaşa’da kentsel dönüşüm, kat karşılığı inşaat, müteahhitlik ve modern konut projelerinde 17 yılı aşkın tecrübeyle hizmet verir.",
    heading: "Bayrampaşa İnşaat Firması Yeni RM İnşaat",
    paragraphs: [
      "Yeni RM İnşaat, Bayrampaşa ve İstanbul’da kentsel dönüşüm, kat karşılığı inşaat, müteahhitlik ve modern konut projeleri geliştirir.",
      "17 yılı aşkın tecrübemizle güvenli, şeffaf ve uzun ömürlü yapı çözümleri sunuyoruz.",
    ],
  },
  {
    path: "/bayrampasa-insaat-firmasi",
    title: "Bayrampaşa İnşaat Firması ve Müteahhit | Yeni RM",
    description:
      "Bayrampaşa inşaat firması Yeni RM; kentsel dönüşüm, kat karşılığı inşaat, müteahhitlik ve konut projelerinde 17 yılı aşkın tecrübeyle hizmet verir.",
    heading: "Bayrampaşa İnşaat Firması ve Müteahhitlik Hizmetleri",
    paragraphs: [
      "Yeni RM İnşaat, Bayrampaşa’da proje fizibilitesi, kentsel dönüşüm, kat karşılığı inşaat, müteahhitlik ve modern konut uygulamaları gerçekleştirir.",
      "Yerel yapı koşullarını, malik beklentilerini ve teknik uygulama süreçlerini birlikte değerlendirerek güvenli ve uzun ömürlü projeler geliştirir.",
    ],
  },
  {
    path: "/bayrampasa-kentsel-donusum",
    title: "Bayrampaşa Kentsel Dönüşüm Rehberi | Yeni RM İnşaat",
    description:
      "Bayrampaşa kentsel dönüşüm süreci, riskli yapı tespiti, kat karşılığı inşaat, malik kararları, maliyetler ve proje aşamaları hakkında kapsamlı rehber.",
    heading: "Bayrampaşa Kentsel Dönüşüm Rehberi",
    paragraphs: [
      "Riskli yapı tespitinden malik kararlarına, proje fizibilitesinden yıkım, ruhsat, yapım ve teslime kadar Bayrampaşa kentsel dönüşüm sürecini öğrenin.",
      "Bina yaşı tek başına risk sonucu vermez. Taşıyıcı sistem, zemin, beton, donatı, yapısal düzensizlikler ve mevcut hasarlar uzman mühendislerce değerlendirilmelidir.",
    ],
  },
  {
    path: "/bayrampasa-kat-karsiligi-insaat",
    title: "Bayrampaşa Kat Karşılığı İnşaat | Yeni RM İnşaat",
    description:
      "Bayrampaşa kat karşılığı inşaat süreci, arsa ve imar fizibilitesi, paylaşım modeli, sözleşme ve proje aşamaları için Yeni RM İnşaat ile görüşün.",
    heading: "Bayrampaşa Kat Karşılığı İnşaat",
    paragraphs: [
      "Kat karşılığı inşaatta arsa ve imar hakkı, mevcut bağımsız bölüm sayısı, yapım maliyeti, paylaşım dengesi ve malik beklentileri birlikte değerlendirilir.",
      "Yeni RM İnşaat Bayrampaşa’da ön fizibilite, teknik şartname, sözleşme, proje uygulaması ve teslim süreçlerinde hizmet verir.",
    ],
  },
  {
    path: "/projects",
    title: "Bayrampaşa İnşaat Projeleri | Yeni RM İnşaat",
    description:
      "Yeni RM İnşaat’ın Bayrampaşa kentsel dönüşüm, kat karşılığı inşaat, modern konut ve ortak proje referanslarını inceleyin.",
    heading: "Yeni RM İnşaat Projeleri",
    paragraphs: [
      "Bayrampaşa ve İstanbul’daki konut, kentsel dönüşüm, kat karşılığı inşaat ve ortak proje referanslarımızı inceleyin.",
    ],
  },
  {
    path: "/about",
    title: "Yeni RM İnşaat Hakkında | Bayrampaşa Müteahhit",
    description:
      "Yeni RM İnşaat’ın Bayrampaşa ve İstanbul’daki 17 yılı aşkın inşaat, müteahhitlik ve kentsel dönüşüm deneyimini keşfedin.",
    heading: "Yeni RM İnşaat Hakkında",
    paragraphs: [
      "Yeni RM İnşaat, Bayrampaşa ve İstanbul’da güvenli yapı, kentsel dönüşüm, kat karşılığı inşaat ve müteahhitlik alanlarında faaliyet gösterir.",
    ],
  },
  {
    path: "/contact",
    title: "Yeni RM İnşaat İletişim | Bayrampaşa",
    description:
      "Bayrampaşa kentsel dönüşüm, kat karşılığı inşaat ve müteahhitlik projeleri için Yeni RM İnşaat ile telefon, e-posta veya WhatsApp üzerinden iletişime geçin.",
    heading: "Yeni RM İnşaat İletişim",
    paragraphs: [
      "Bayrampaşa’daki inşaat ve kentsel dönüşüm projeniz için Yeni RM İnşaat ile iletişime geçin.",
    ],
  },
];

const escapeHtml = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

const replaceOrInsert = (html, pattern, replacement) => {
  if (pattern.test(html)) {
    return html.replace(pattern, replacement);
  }
  return html.replace("</head>", `${replacement}</head>`);
};

const renderFallback = (page) => {
  const links = [
    ["/bayrampasa-insaat-firmasi", "Bayrampaşa İnşaat Firması"],
    ["/bayrampasa-kentsel-donusum", "Bayrampaşa Kentsel Dönüşüm"],
    ["/bayrampasa-kat-karsiligi-insaat", "Kat Karşılığı İnşaat"],
    ["/projects", "Projeler"],
    ["/contact", "İletişim"],
  ];

  return `<main style="max-width:960px;margin:0 auto;padding:40px 24px;font-family:Arial,sans-serif;color:#111">
    <header>
      <p>Yeni RM İnşaat · Bayrampaşa / İstanbul</p>
      <h1>${escapeHtml(page.heading)}</h1>
    </header>
    ${page.paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}
    <nav aria-label="Hizmet sayfaları">
      <ul>
        ${links
          .map(
            ([href, label]) =>
              `<li><a href="${href}">${escapeHtml(label)}</a></li>`,
          )
          .join("")}
      </ul>
    </nav>
    <p>Telefon: <a href="tel:+905323322960">+90 (532) 332 29 60</a></p>
  </main>`;
};

if (!fs.existsSync(templatePath)) {
  throw new Error("build/index.html bulunamadı. Önce react-scripts build çalıştırılmalı.");
}

const template = fs.readFileSync(templatePath, "utf8");

for (const page of pages) {
  const canonicalUrl = `${siteUrl}${page.path === "/" ? "/" : page.path}`;
  let html = template;

  html = replaceOrInsert(
    html,
    /<title>.*?<\/title>/i,
    `<title>${escapeHtml(page.title)}</title>`,
  );
  html = replaceOrInsert(
    html,
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="description" content="${escapeHtml(page.description)}"/>`,
  );
  html = replaceOrInsert(
    html,
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i,
    `<link rel="canonical" href="${canonicalUrl}"/>`,
  );
  html = replaceOrInsert(
    html,
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:title" content="${escapeHtml(page.title)}"/>`,
  );
  html = replaceOrInsert(
    html,
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:description" content="${escapeHtml(page.description)}"/>`,
  );
  html = replaceOrInsert(
    html,
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:url" content="${canonicalUrl}"/>`,
  );
  html = html.replace(
    '<div id="root"></div>',
    `<div id="root">${renderFallback(page)}</div>`,
  );

  const outputDir =
    page.path === "/"
      ? buildDir
      : path.join(buildDir, page.path.replace(/^\//, ""));
  fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(path.join(outputDir, "index.html"), html);
}

fs.copyFileSync(
  path.join(buildDir, "index.html"),
  path.join(buildDir, "404.html"),
);

console.log(`SEO HTML oluşturuldu: ${pages.length} sayfa`);
