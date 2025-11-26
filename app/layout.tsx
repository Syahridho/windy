import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Windy Developer - Portfolio Full Stack Web Developer",
  description: "Portfolio profesional yang menampilkan proyek pengembangan web yang dibangun dengan Laravel, MySQL, Tailwind CSS, dan teknologi web modern. Jelajahi karya saya dan hubungi untuk kolaborasi.",
  keywords: ["web developer", "full stack developer", "Laravel", "MySQL", "Tailwind CSS", "portfolio"],
  authors: [{ name: "Windy Developer" }],
  openGraph: {
    title: "Windy Developer - Full Stack Web Developer",
    description: "Portfolio profesional yang menampilkan proyek pengembangan web",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
