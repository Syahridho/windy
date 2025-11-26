// Data Portfolio
export const personalInfo = {
  name: "Windy Vivianosa",
  title: "Web Developer",
  bio: "Pengembang web yang bersemangat dengan keahlian dalam teknologi web modern. Saya menciptakan aplikasi web yang indah, responsif, dan mudah digunakan.",
  email: "wvivianosa@example.com",
  github: "https://github.com/Windyvivianosa5",
  whatsapp: "https://wa.me/6287810921648",
  image: "/profile.jpeg"
};

export const skills = [
  {
    name: "HTML",
    category: "Frontend"
  },
  {
    name: "CSS",
    category: "Frontend"
  },
  {
    name: "Tailwind CSS",
    category: "Frontend"
  },
  {
    name: "React",
    category: "Frontend"
  },
  {
    name: "Laravel",
    category: "Backend"
  },
  {
    name: "MySQL",
    category: "Database"
  },
  {
    name: "Midtrans",
    category: "Payment Gateway"
  }
];

export const certificates = [
  {
    id: "cert-1",
    title: "Seminar Developer",
    issuer: "HTML, CSS, JavaScript",
    date: "2025",
    image: "/certificates/seminar1.jpeg"
  },
 
];

export const projects = [
  {
    id: "iuran-pgri",
    title: "IURAN PGRI",
    slug: "iuran-pgri",
    description: "Platform pencatatan lengkap yang dibangun dengan Laravel dan React",
    longDescription: "Solusi pencatatan manual komprehensif dengan fitur dashboard admin. Dibangun dengan backend Laravel dan teknologi frontend modern.",
    image: "/projects/pgri.PNG",
    technologies: ["Laravel", "MySQL", "Tailwind CSS", "HTML", "CSS", "React"],
    liveUrl: "http://iuran-pgri.my.id/",
    githubUrl: "https://github.com/Windyvivianosa5/iuran-pgri",
    features: [
      "Autentikasi dan otorisasi pengguna",
      "Pencatatan iuran",
      "Dashboard admin untuk manajemen",
      "Pelacakan riwayat iuran"
    ],
    challenges: "Mengimplementasikan manajemen inventori real-time dan mengoptimalkan query database untuk katalog iuran yang besar.",
    outcome: "Berhasil meluncurkan platform yang melayani pengguna harian."
  },
  {
    id: "istana-siak",
    title: "Istana Siak",
    slug: "istana-siak",
    description: "Sistem Manajemen Untuk Pemesanan tiket",
    longDescription: "memudahkan dalam boking tiket di istana siak",
    image: "/projects/siak.png",
    technologies: ["Laravel", "MySQL", "HTML", "CSS", "Tailwind CSS"],
    liveUrl: "istanasiak.blk-pariwisata.my.id",
    githubUrl: "https://github.com/Windyvivianosa5/MagangGci",
    features: [
      "Pemesanan Tiket",
      "Boking Tiket",
      "Pembayaran online",
      "Dashboard Admin",
      "Lokasi Penginapan Terdekat"
    ],
    challenges: "Mengintegrasikan gateway pembayaran yang aman dan memastikan sistem validasi tiket (QR Code) berjalan real-time untuk menghindari antrean panjang.",
    outcome: "Meningkatkan efisiensi proses masuk pengunjung dengan sistem paperless dan memudahkan admin dalam merekap data pendapatan harian."
  },
];
