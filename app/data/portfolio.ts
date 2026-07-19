export type Project = {
  number: string;
  name: string;
  category: string;
  description: string;
  technologies: string[];
  role: string;
  result: string;
  image?: {
    src: string;
    alt: string;
  };
  demoUrl?: string;
  sourceUrl?: string;
};

export const profile = {
  name: "Raka Pratama",
  initials: "RP",
  role: "Product-minded Frontend Developer",
  location: "Jakarta, Indonesia",
  availability: "Available for selected projects",
  email: "hello@rakapratama.dev",
  hero: "Saya merancang dan membangun antarmuka digital yang tenang, cepat, dan terasa jelas sejak interaksi pertama.",
  about:
    "Frontend developer dengan perhatian besar pada detail, sistem desain, dan pengalaman pengguna. Saya membantu tim mengubah kebutuhan bisnis yang rumit menjadi produk web yang mudah digunakan.",
  skills: [
    "Frontend architecture",
    "Design systems",
    "React & Next.js",
    "UX implementation",
    "Performance",
    "Technical direction",
  ],
  stats: [
    { value: "05+", label: "tahun membangun produk" },
    { value: "18", label: "rilis digital" },
    { value: "12", label: "kolaborasi tim" },
  ],
  socialLinks: [
    { label: "GitHub", href: "https://github.com/your-username" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/your-username" },
  ],
} as const;

export const navigation = [
  { label: "Tentang", href: "#tentang" },
  { label: "Proyek", href: "#proyek" },
  { label: "Pengalaman", href: "#pengalaman" },
  { label: "Kontak", href: "#kontak" },
] as const;

export const projects: Project[] = [
  {
    number: "01",
    name: "NusaPay Dashboard",
    category: "Financial operations platform",
    description:
      "Menyederhanakan alur monitoring transaksi dan rekonsiliasi untuk tim operasional dalam satu dashboard yang cepat dibaca.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Charting"],
    role: "Lead frontend & design-system partner",
    result:
      "Memangkas waktu pengecekan harian melalui alur kerja yang lebih terstruktur.",
    image: {
      src: "/projects/nusapay-dashboard.svg",
      alt: "Visual abstrak antarmuka dashboard NusaPay",
    },
  },
  {
    number: "02",
    name: "RuangKerja",
    category: "Workspace management SaaS",
    description:
      "Membangun pengalaman onboarding dan pengelolaan ruang kerja yang memberi konteks tepat pada setiap langkah pengguna.",
    technologies: ["React", "Next.js", "REST API", "Figma"],
    role: "Frontend developer",
    result:
      "Membantu tim merilis fondasi produk baru dalam siklus yang lebih singkat.",
  },
  {
    number: "03",
    name: "Karsa Studio",
    category: "Creative studio website",
    description:
      "Situs editorial yang menempatkan karya dan sudut pandang studio sebagai pusat pengalaman, tanpa elemen yang berlebihan.",
    technologies: ["Next.js", "Contentful", "Framer Motion", "Vercel"],
    role: "Independent developer",
    result:
      "Meningkatkan keterbacaan konten dan memberi tim ruang untuk memperbarui cerita mereka sendiri.",
    image: {
      src: "/projects/karsa-studio.svg",
      alt: "Visual abstrak komposisi kreatif untuk Karsa Studio",
    },
  },
];

export const experience = [
  {
    period: "2023 — sekarang",
    title: "Senior Frontend Developer",
    company: "Independent & product teams",
    description:
      "Berkolaborasi dengan founder, designer, dan engineer untuk merilis pengalaman web yang skalabel dan siap dipakai.",
  },
  {
    period: "2021 — 2023",
    title: "Frontend Developer",
    company: "Digital product studio",
    description:
      "Menerjemahkan strategi produk dan sistem desain menjadi antarmuka yang konsisten di berbagai perangkat.",
  },
  {
    period: "2019 — 2021",
    title: "Web Developer",
    company: "Agency & freelance practice",
    description:
      "Membangun fondasi teknis untuk brand, kampanye, dan platform internal dengan fokus pada kualitas implementasi.",
  },
] as const;

export const process = [
  {
    number: "01",
    title: "Menyelaraskan konteks",
    description:
      "Memahami tujuan, pengguna, dan batasan sebelum memutuskan solusi.",
  },
  {
    number: "02",
    title: "Membuat sistem yang jelas",
    description:
      "Menerjemahkan arah produk menjadi komponen, prioritas, dan keputusan teknis.",
  },
  {
    number: "03",
    title: "Merilis dengan rapi",
    description:
      "Memperhatikan performa, aksesibilitas, dan detail yang terasa saat produk digunakan.",
  },
] as const;
