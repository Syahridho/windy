"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Award, Calendar } from "lucide-react";

interface CertificateCardProps {
  title: string;
  issuer: string;
  date: string;
  image: string;
}

export default function CertificateCard({
  title,
  issuer,
  date,
  image
}: CertificateCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <>
      <Card 
        className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-none bg-white dark:bg-gray-800"
        onClick={() => setIsOpen(true)}
      >
        <div className="relative h-32 bg-gray-100 overflow-hidden">
          {/* Skeleton Loading untuk Thumbnail */}
          {!imageLoaded && !imageError && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse">
              <div className="absolute inset-0 flex items-center justify-center">
                <Award className="w-8 h-8 text-gray-300" />
              </div>
            </div>
          )}

          {/* Thumbnail Image */}
          {!imageError ? (
            <Image
              src={image}
              alt={title}
              fill
              className={`object-cover transition-all duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'} group-hover:scale-110`}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            // Fallback jika gambar error
            <div className="absolute inset-0 bg-primary flex items-center justify-center">
              <Award className="w-12 h-12 text-white/30" />
            </div>
          )}

          <div className="absolute top-3 right-3 z-10">
            <Badge variant="secondary" className="bg-white/90 text-blue-700 text-xs shadow-sm backdrop-blur-sm">
              {date}
            </Badge>
          </div>
        </div>
        
        <CardHeader className="p-4">
          <CardTitle className="group-hover:text-primary transition-colors line-clamp-2 text-sm">
            {title}
          </CardTitle>
          <CardDescription className="flex items-center gap-1 text-xs">
            <Calendar className="w-3 h-3" />
            {issuer}
          </CardDescription>
        </CardHeader>
      </Card>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          <DialogTitle className="sr-only">{title}</DialogTitle>
          <div className="relative w-full aspect-[4/3] bg-gray-100">
            {/* Modal Image */}
            <Image
              src={image}
              alt={title}
              fill
              className="object-contain"
              priority
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
