// src/data/projects.ts

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const ourProjects = [
  {
    id: 1,
    title: "YENİKÖY KONUT PROJESİ",
    description: "Modern yaşam alanlarıyla yeni bir başlangıç.",
    date: "2024-06-15",
    image: "https://picsum.photos/id/1011/600/300",
  },
  {
    id: 2,
    title: "MARMARA EVLERİ",
    description: "Deniz manzaralı, çevreci konutlar.",
    date: "2023-11-02",
    image: "https://picsum.photos/id/1015/600/300",
  },
];

export const partnerProjects = [
  {
    id: 1,
    title: "İSKOM – İstanbul Su Kontrol ve Otomasyon Merkezi",
    description: "Büyük ölçekli su kontrol ve otomasyon tesisi.",
    date: "2019-01-01",
    image: "https://avmmimarlik.com/wp-content/uploads/.../iskom-1.jpg",
  },
  {
    id: 2,
    title: "Darphane Genel Müdürlük Binası – Yangın Söndürme Sistemi",
    description: "Bina genelinde yangın güvenliği sistemi kurulumu.",
    date: "2022-01-01",
    image:
      "https://avmmimarlik.com/wp-content/uploads/.../darphane-yangin-sondurme-1.jpg",
  },
  {
    id: 3,
    title: "Kağıthane Yaşam Evleri",
    description: "Toplumsal konut projesi.",
    date: "2019-01-01",
    image:
      "https://avmmimarlik.com/wp-content/uploads/.../kagithane-yasam-evleri-1.jpg",
  },
  {
    id: 4,
    title: "İSTAÇ Tıbbi Atık Sterilizasyon Tesisi",
    description: "Tıbbi atık sterilizasyon tesisi.",
    date: "2013-01-01",
    image:
      "https://avmmimarlik.com/wp-content/uploads/.../istac-tibbi-atik-tesisi-1.jpg",
  },
  {
    id: 5,
    title: "Darphane Ek Hizmet Binası – Renovasyon ve Teras Uygulaması",
    description: "Dana bina renovasyonu ve teras uygulaması.",
    date: "2020-01-01",
    image:
      "https://avmmimarlik.com/wp-content/uploads/.../darphane-ek-hizmet-binasi-bakim-1.jpg",
  },
  {
    id: 6,
    title: "Bayrampaşa Aydınlatma Tesisi",
    description: "Şehir aydınlatma tesisi kurulumu.",
    date: "2019-01-01",
    image:
      "https://avmmimarlik.com/wp-content/uploads/.../bayrampasa-aydinlatma-tesisi-1.jpg",
  },
  {
    id: 7,
    title: "Asfalt Kaplama ve Yangın Hydrant Hattı Yapımı",
    description: "Ulaşım ve yangın hattı çalışmaları.",
    date: "2022-01-01",
    image:
      "https://avmmimarlik.com/wp-content/uploads/.../asfalt-kaplama-yangin-hidrant-hatti-1.jpg",
  },
  {
    id: 8,
    title: "İETT Kurtköy Otobüs Garajı",
    description: "Toplu taşıma garaj yapım işi.",
    date: "2015-01-01",
    image:
      "https://avmmimarlik.com/wp-content/uploads/.../iett-kurtkoy-otobus-garaji-1.jpg",
  },
  {
    id: 9,
    title: "Şile – Kömürcüoda Elleçleme ve Solidifikasyon Tesisleri",
    description: "Atık işleme ve katılaştırma tesisi.",
    date: "2015-01-01",
    image:
      "https://avmmimarlik.com/wp-content/uploads/.../komurcuoda-ellecme-solidifikasyon-tesisleri-1.jpg",
  },
  {
    id: 10,
    title: "Darphane Çevre Düzenlemesi ve Peyzaj İşleri",
    description: "Peyzaj ve çevre düzenlemesi çalışması.",
    date: "2021-01-01",
    image:
      "https://avmmimarlik.com/wp-content/uploads/.../darphane-cevre-duzenlemesi-peyzaj-1.jpg",
  },
];
