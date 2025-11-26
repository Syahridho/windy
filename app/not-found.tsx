import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          {/* 404 Animation */}
          <div className="relative">
            <h1 className="text-9xl md:text-[200px] font-bold text-primary">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-8xl animate-bounce opacity-20">
                🔍
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Halaman Tidak Ditemukan
            </h2>
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              Oops! Halaman yang Anda cari tidak ada. Mungkin telah dipindahkan atau dihapus.
            </p>
          </div>

          {/* Actions */}
          <div className="flex gap-4 justify-center flex-wrap pt-4">
            <Button size="lg" className="group hover:scale-105 transition-all duration-300" asChild>
              <Link href="/">
                <Home className="mr-2 group-hover:rotate-12 transition-transform" />
                Kembali ke Beranda
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="group hover:scale-105 transition-all duration-300" asChild>
              <Link href="/#projects">
                <Search className="mr-2 group-hover:rotate-12 transition-transform" />
                Jelajahi Proyek
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
