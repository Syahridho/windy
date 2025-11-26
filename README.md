# Portfolio Website - Windy Vivianosa

Website portfolio modern dan responsif yang dibangun menggunakan **Next.js**, **Tailwind CSS**, dan **Shadcn UI**. Website ini dirancang untuk menampilkan profil, keahlian, proyek, dan sertifikat dengan tampilan yang profesional dan interaktif.

## 🚀 Fitur Utama

- **Desain Modern**: Menggunakan prinsip desain yang bersih dengan warna biru solid yang profesional.
- **Responsif**: Tampilan optimal di semua perangkat (Desktop, Tablet, Mobile).
- **Animasi Halus**: Efek transisi, hover, dan loading skeleton yang interaktif.
- **Dynamic Routing**: Halaman detail proyek yang dinamis.
- **Image Optimization**: Menggunakan `next/image` untuk performa loading gambar yang cepat.
- **Accessibility**: Mendukung screen reader (contoh: pada modal sertifikat).

## 🛠️ Teknologi yang Digunakan

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) & [Lucide React](https://lucide.dev/)
- **Font**: [Inter](https://fonts.google.com/specimen/Inter) (Google Fonts)

## 📁 Struktur Folder Gambar

Pastikan Anda meletakkan gambar di folder `public` agar dapat diakses oleh website.

```
public/
├── profile.jpeg              # Foto profil utama
├── projects/                 # Gambar untuk proyek
│   ├── pgri.PNG
│   └── cms.jpg
└── certificates/             # Gambar untuk sertifikat
    └── seminar1.jpeg
```

> **Catatan**: Jika gambar tidak muncul, pastikan nama file dan ekstensi (jpg/jpeg/png) sesuai dengan yang ada di `data/portfolio.js`.

## ⚙️ Cara Menjalankan Project

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Jalankan Development Server**
   ```bash
   npm run dev
   ```
   Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

3. **Build untuk Production**
   ```bash
   npm run build
   npm start
   ```

## 📝 Mengubah Data Konten

Semua data konten (Profil, Skills, Projects, Certificates) tersimpan dalam satu file untuk kemudahan pengeditan.

**Lokasi File**: `data/portfolio.js`

Contoh format data:

```javascript
export const personalInfo = {
  name: "Nama Anda",
  title: "Web Developer",
  // ...
};

export const projects = [
  {
    title: "Nama Proyek",
    image: "/projects/nama-file.jpg", // Path gambar dari folder public
    // ...
  }
];
```

## 🎨 Kustomisasi Warna

Warna utama didefinisikan di `app/globals.css`. Website ini menggunakan tema warna biru (`primary`).

```css
:root {
  --primary: 217.2 91.2% 59.8%; /* Warna Biru Utama */
  /* ... */
}
```

## 📄 Lisensi

Dibuat oleh Windy Vivianosa.
