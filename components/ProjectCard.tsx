"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  slug: string;
  technologies: string[];
  image: string;
}

export default function ProjectCard({ title, description, slug, technologies, image }: ProjectCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-none bg-white dark:bg-gray-800">
      <div className="relative h-48 overflow-hidden bg-gray-100">
        {/* Skeleton Loading */}
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse">
            <div className="absolute inset-0 flex items-center justify-center">
              <Briefcase className="w-16 h-16 text-gray-300" />
            </div>
          </div>
        )}
        
        {/* Project Image */}
        {!imageError ? (
          <Image
            src={image}
            alt={title}
            fill
            className={`object-cover transition-all duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'} group-hover:scale-110`}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
          />
        ) : (
          // Fallback jika gambar error
          <div className="absolute inset-0 bg-primary">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white text-6xl opacity-20 group-hover:opacity-30 transition-opacity">
                💼
              </div>
            </div>
          </div>
        )}
      </div>
      
      <CardHeader>
        <CardTitle className="group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {technologies.slice(0, 3).map((tech, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
          {technologies.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{technologies.length - 3}
            </Badge>
          )}
        </div>
      </CardContent>
      
      <CardFooter>
        <Link href={`/${slug}`} className="w-full">
          <Button className="w-full group-hover:bg-primary group-hover:scale-105 transition-all duration-300">
            Lihat Detail
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
