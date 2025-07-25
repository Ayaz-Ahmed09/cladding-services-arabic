"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Ruler, Star } from "lucide-react";
import Image from "next/image";

type Project = {
  title: string;
  location: string;
  area: string;
  duration: string;
  type: string;
  image: string;
  status: string;
  rating: number;
  client: string;
};

export default function DynamicProjectGallery({
  projects,
}: {
  projects: Project[];
}) {
  return (
    <section className="py-20 px-4 relative z-0 overflow-hidden bg-white text-[var(--dark)]">
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="w-full h-full opacity-10 blur-sm"
          style={{
            backgroundImage: `
          linear-gradient(30deg, black 1px, transparent 1px),
          linear-gradient(150deg, black 2px, transparent 2px),
          linear-gradient(90deg, black 3px, transparent 3px)
        `,
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[var(--accent)] to-[var(--secondary)] text-white px-8 py-3 rounded-full text-sm font-bold mb-8 shadow-lg">
            <Star className="w-5 h-5" />
            <span>معرض أعمالنا المميزة</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-[var(--dark)] mb-8">
            <span className="block">مشاريع نفخر</span>
            <span className="text-gradient">بإنجازها</span>
          </h2>

          <p className="text-xl text-[var(--dark)]/70 max-w-4xl mx-auto leading-relaxed font-light">
            اكتشف مجموعة من أبرز مشاريعنا التي تعكس خبرتنا وإبداعنا في تحويل
            الرؤى المعمارية إلى واقع مذهل يفوق التوقعات
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-10 mb-16">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="project-card group overflow-hidden border-0 shadow-2xl bg-white/80 backdrop-blur-sm"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  loading="lazy"
                  width={600}
                  height={400}
                  className="w-full h-72 object-cover transition-all duration-700 group-hover:scale-110"
                />

                {/* Status Badge */}
                <div
                  className={`absolute top-6 right-6 px-4 py-2 rounded-full text-sm font-bold shadow-lg ${
                    project.status === "مكتمل"
                      ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white"
                      : "bg-gradient-to-r from-yellow-500 to-orange-500 text-white"
                  }`}
                >
                  {project.status}
                </div>

                {/* Rating */}
                <div className="absolute top-6 left-6 flex items-center gap-1 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  {[...Array(project.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3 h-3 text-[var(--accent)] fill-current"
                    />
                  ))}
                </div>
              </div>

              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-[var(--dark)] mb-3 group-hover:text-[var(--accent)] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-[var(--accent)] font-bold text-sm mb-2">
                    {project.type}
                  </p>
                  <p className="text-[var(--dark)]/60 text-sm font-medium">
                    {project.client}
                  </p>
                </div>

                {/* Project Details */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm text-[var(--dark)]/70">
                    <div className="w-8 h-8 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-lg flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium">{project.location}</span>
                  </div>

                  <div className="flex items-center gap-3 text-sm text-[var(--dark)]/70">
                    <div className="w-8 h-8 bg-gradient-to-br from-[var(--accent)] to-[var(--secondary)] rounded-lg flex items-center justify-center">
                      <Ruler className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium">المساحة: {project.area}</span>
                  </div>

                  <div className="flex items-center gap-3 text-sm text-[var(--dark)]/70">
                    <div className="w-8 h-8 bg-gradient-to-br from-[var(--secondary)] to-[var(--primary)] rounded-lg flex items-center justify-center">
                      <Calendar className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium">
                      مدة التنفيذ: {project.duration}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
