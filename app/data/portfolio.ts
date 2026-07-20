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
  name: "Muhammad Alauddin Azhary",
  initials: "AZ",
  role: "Software Engineer",
  location: "Bogor, Indonesia",
  availability: "Open to works",
  email: "alauddinazhary05@gmail.com",
  hero: "Saya mengembangkan aplikasi web dan mobile dari frontend hingga backend dengan fokus pada performa, kualitas, dan pengalaman pengguna.",
  about:
    "Saya seorang fullstack dan mobile developer yang berfokus pada pengembangan aplikasi end-to-end, mulai dari frontend dan backend hingga pengalaman pengguna. Saya senang menyederhanakan proses dan kebutuhan bisnis menjadi produk digital yang efisien, scalable, dan nyaman digunakan.",
  skills: ["Mobile Development", "Frontend Development", "Backend Development"],
  stats: [
    { value: "2+", label: "tahun membangun produk" },
    { value: "18", label: "rilis digital" },
    { value: "12", label: "kolaborasi tim" },
  ],
  socialLinks: [
    { label: "GitHub", href: "https://github.com/aldnazr" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/aldnazr" },
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
    name: "Ahsan Xpress",
    category: "Logistik dan Transportasi",
    description:
      "Memperbarui seluruh ekosistem mulai dari mobile apps (customer & driver), dan juga web admin.",
    technologies: ["Next.js", "Flutter"],
    role: "Lead frontend & design-system partner",
    result:
      "Pengguna merasa puas dengan aplikasi tampilan dan desain sistem yang baru.",
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
    period: "Oktober 2025 — sekarang",
    title: "Fullstack & Mobile Developer",
    company: "PT. Shidiq Membangun Indonesia",
    description:
      "Berkolaborasi dengan founder, designer, dan engineer untuk merilis aplikasi mobile dan web yang sesuai kebutuhan bisnis user.",
  },
  {
    period: "Agustus 2024 — Februari 2025",
    title: "Frontend Developer",
    company: "PPTA Universitas Dinamika",
    description:
      "Memperbarui website PPTA (pusat pelayanan tugas akhir) untuk meningkatkan aksesibilitas pengguna.",
  },
  {
    period: "Februari 2024 — Juni 2024",
    title: "Mobile Development Learning Path",
    company: "Bangkit Academy",
    description:
      "Bangkit Academy adalah program akademi talenta teknologi eksklusif yang dipimpin oleh Google, GoTo, dan Traveloka serta merupakan salah satu program Kampus Merdeka (MSIB).",
  },
  {
    period: "Februari 2023 — Juni 2023",
    title: "UI/UX Designer",
    company: "CV. Aikari Harvest",
    description: "Merancang tampilan aplikasi inventory internal perusahaan.",
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
      "Menerjemahkan kebutuhan bisnis menjadi komponen, prioritas, dan keputusan teknis.",
  },
  {
    number: "03",
    title: "Merilis dengan rapi",
    description:
      "Memperhatikan performa, aksesibilitas, dan detail yang terasa saat produk digunakan.",
  },
] as const;
