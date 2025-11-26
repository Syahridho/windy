"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/portfolio";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github, CheckCircle2, Lightbulb, Target } from "lucide-react";
import { notFound } from "next/navigation";

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const project = projects.find(p => p.slug === slug);
  
  if (!project) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-background pt-16">
      {/* Back Button */}
      <div className="container mx-auto px-4 pt-8">
        <Link href="/">
          <Button variant="ghost" className="group hover:scale-105 transition-all duration-300">
            <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Kembali ke Beranda
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Project Header */}
          <div className="space-y-6 animate-fade-in-up">
            <Badge variant="secondary" className="text-sm px-4 py-2">
              Proyek Unggulan
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-bold text-primary">
              {project.title}
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              {project.longDescription}
            </p>

            {/* Action Buttons */}
            <div className="flex gap-4 flex-wrap">
              {project.liveUrl && (
                <Button size="lg" className="group hover:scale-105 transition-all duration-300">
                  <ExternalLink className="mr-2 group-hover:rotate-12 transition-transform" />
                  Lihat Demo Live
                </Button>
              )}
              {project.githubUrl && (
                <Button size="lg" variant="outline" className="group hover:scale-105 transition-all duration-300">
                  <Github className="mr-2 group-hover:rotate-12 transition-transform" />
                  Lihat Source Code
                </Button>
              )}
            </div>
          </div>

          {/* Project Image */}
          <div 
            className="relative h-96 rounded-2xl overflow-hidden shadow-2xl animate-fade-in-up bg-gray-100"
            style={{ animationDelay: '200ms' }}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Technologies */}
          <Card 
            className="md:col-span-3 border-none shadow-xl hover:shadow-2xl transition-all duration-300 animate-fade-in-up"
            style={{ animationDelay: '300ms' }}
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                Teknologi yang Digunakan
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="text-sm px-4 py-2 hover:scale-110 transition-transform cursor-pointer"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Features */}
          <Card 
            className="md:col-span-2 border-none shadow-xl hover:shadow-2xl transition-all duration-300 animate-fade-in-up"
            style={{ animationDelay: '400ms' }}
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                Fitur Utama
              </CardTitle>
              <CardDescription>
                Fungsionalitas dan kemampuan utama
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li 
                    key={index} 
                    className="flex items-start gap-3 group"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Challenges & Outcome */}
          <div className="space-y-8">
            <Card 
              className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: '500ms' }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <div className="p-2 bg-blue-500/10 rounded-lg">
                    <Lightbulb className="w-5 h-5 text-blue-600" />
                  </div>
                  Tantangan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.challenges}
                </p>
              </CardContent>
            </Card>

            <Card 
              className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 bg-primary/5 animate-fade-in-up"
              style={{ animationDelay: '600ms' }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <div className="p-2 bg-green-500/10 rounded-lg">
                    <Target className="w-5 h-5 text-green-600" />
                  </div>
                  Hasil
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.outcome}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 pb-24">
        <div className="max-w-4xl mx-auto">
          <Card className="border-none shadow-2xl bg-primary text-primary-foreground overflow-hidden">
            <div className="absolute inset-0 bg-black/10" />
            <CardContent className="relative p-12 text-center space-y-6">
              <h3 className="text-3xl font-bold">
                Tertarik untuk bekerja sama?
              </h3>
              <p className="text-lg opacity-90 max-w-2xl mx-auto">
                Saya selalu terbuka untuk mendiskusikan proyek baru, ide kreatif, atau peluang untuk menjadi bagian dari visi Anda.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link href="/">
                  <Button size="lg" variant="secondary" className="hover:scale-105 transition-all duration-300">
                    Lihat Proyek Lainnya
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border-white/20 hover:scale-105 transition-all duration-300">
                  Hubungi Saya
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      </div>
    </>
  );
}
