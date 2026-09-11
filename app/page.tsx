"use client";

import Image from "next/image";
import { personalInfo, skills, projects, certificates } from "@/data/portfolio";
import Navigation from "@/components/Navigation";
import SkillCard from "@/components/SkillCard";
import ProjectCard from "@/components/ProjectCard";
import CertificateCard from "@/components/CertificateCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaLaravel, 
  FaDatabase,
  FaGithub,
  FaWhatsapp,
  FaEnvelope
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { ArrowDown, Sparkles, CreditCard } from "lucide-react";

const skillIcons: Record<string, React.ReactNode> = {
  "HTML": <FaHtml5 className="text-orange-600" />,
  "CSS": <FaCss3Alt className="text-blue-600" />,
  "Tailwind CSS": <SiTailwindcss className="text-cyan-500" />,
  "React": <FaReact className="text-blue-400" />,
  "Laravel": <FaLaravel className="text-red-600" />,
  "MySQL": <FaDatabase className="text-blue-700" />,
  "Midtrans": <CreditCard className="text-green-600" />
};

// Helper function to get icon safely
const getSkillIcon = (skillName: string) => {
  return skillIcons[skillName] || null;
};

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl animate-spin-slow" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-8 pt-24">
            {/* Profile Image */}
            <div className="relative inline-block group">
              <div className="w-48 h-48 mx-auto rounded-full bg-primary p-1 overflow-hidden relative">
                <Image
                  src={personalInfo.image}
                  alt={personalInfo.name}
                  fill
                  className="object-cover rounded-full group-hover:scale-105 transition-transform duration-300"
                  priority
                  sizes="(max-width: 768px) 192px, 192px"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-accent text-accent-foreground rounded-full p-3 shadow-lg animate-bounce">
                <Sparkles className="w-6 h-6" />
              </div>
            </div>

            {/* Name & Title */}
            <div className="space-y-4 animate-fade-in-up">
              <h1 className="text-5xl md:text-7xl font-bold text-primary">
                {personalInfo.name}
              </h1>
              <p className="text-2xl md:text-3xl text-muted-foreground font-medium">
                {personalInfo.title}
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {personalInfo.bio}
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center items-center flex-wrap">
              <Button size="lg" className="group hover:scale-105 transition-all duration-300">
                <FaGithub className="mr-2 group-hover:rotate-12 transition-transform" />
                GitHub
              </Button>
              <a href={personalInfo.whatsapp} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="secondary" className="group hover:scale-105 transition-all duration-300">
                  <FaWhatsapp className="mr-2 group-hover:rotate-12 transition-transform" />
                  WhatsApp
                </Button>
              </a>
              <Button size="lg" variant="outline" className="group hover:scale-105 transition-all duration-300">
                <FaEnvelope className="mr-2 group-hover:rotate-12 transition-transform" />
                Hubungi Saya
              </Button>
            </div>

            {/* Scroll Indicator */}
            <div className="pt-12 animate-bounce">
              <ArrowDown className="w-8 h-8 mx-auto text-muted-foreground" />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 space-y-4 animate-fade-in-up">
              <Badge variant="outline" className="text-sm px-4 py-2">
                Keahlian Saya
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-primary">
                Keterampilan & Teknologi
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Mahir dalam teknologi pengembangan web modern dengan fokus pada pembuatan aplikasi yang scalable dan performan
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <SkillCard
                    name={skill.name}
                    category={skill.category}
                    icon={getSkillIcon(skill.name)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 space-y-4 animate-fade-in-up">
              <Badge variant="outline" className="text-sm px-4 py-2">
                Portofolio
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-primary">
                Proyek Unggulan
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Showcase karya terbaru dan proyek personal saya
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    slug={project.slug}
                    technologies={project.technologies}
                    image={project.image}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 space-y-4 animate-fade-in-up">
              <Badge variant="outline" className="text-sm px-4 py-2">
                Sertifikasi
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-primary">
                Sertifikat Profesional
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Sertifikasi terverifikasi yang menunjukkan keahlian dan pembelajaran berkelanjutan
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certificates.map((cert, index) => (
                <div
                  key={cert.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CertificateCard
                    title={cert.title}
                    issuer={cert.issuer}
                    date={cert.date}
                    image={cert.image}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-8">
              <div className="space-y-4 animate-fade-in-up">
                <Badge variant="outline" className="text-sm px-4 py-2">
                  Hubungi Saya
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-primary">
                  Mari Bekerja Sama
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Punya proyek dalam pikiran? Saya selalu terbuka untuk mendiskusikan peluang dan kolaborasi baru.
                </p>
              </div>

              <div className="flex gap-4 justify-center items-center flex-wrap animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="group hover:scale-105 transition-all duration-300">
                    <FaGithub className="mr-2 group-hover:rotate-12 transition-transform" />
                    GitHub
                  </Button>
                </a>
                <a href={personalInfo.whatsapp} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="secondary" className="group hover:scale-105 transition-all duration-300">
                    <FaWhatsapp className="mr-2 group-hover:rotate-12 transition-transform" />
                    WhatsApp
                  </Button>
                </a>
                <a href={`mailto:${personalInfo.email}`}>
                  <Button size="lg" variant="outline" className="group hover:scale-105 transition-all duration-300">
                    <FaEnvelope className="mr-2 group-hover:rotate-12 transition-transform" />
                    {personalInfo.email}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center space-y-4">
            <p className="text-muted-foreground">
              © 2025 {personalInfo.name}.
            </p>
            <div className="flex gap-6 justify-center">
              <a href={personalInfo.github} className="text-muted-foreground hover:text-primary transition-colors">
                <FaGithub className="w-6 h-6" />
              </a>
              <a href={personalInfo.whatsapp} className="text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="w-6 h-6" />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                <FaEnvelope className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}
