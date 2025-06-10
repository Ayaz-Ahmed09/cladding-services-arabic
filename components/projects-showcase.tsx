"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Calendar, Ruler, Star } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "مجمع الأعمال التجاري الذكي",
    location: "الرياض، حي الملك عبدالله المالي",
    area: "3,500 م²",
    duration: "6 أشهر",
    type: "واجهة زجاجية تفاعلية",
    image: "/p1.jpg?height=400&width=600",
    status: "مكتمل",
    rating: 5,
    client: "شركة التطوير العقاري",
  },
  {
    title: "برج السكن الفاخر المعاصر",
    location: "جدة، كورنيش البحر الأحمر",
    area: "2,800 م²",
    duration: "4 أشهر",
    type: "كسوة معدنية متطورة",
    image: "/p2.jpg?height=400&width=600",
    status: "قيد التنفيذ",
    rating: 5,
    client: "مجموعة الإسكان الراقي",
  },
  {
    title: "مركز التسوق والترفيه الكبير",
    location: "الدمام، منطقة الأعمال المركزية",
    area: "5,200 م²",
    duration: "8 أشهر",
    type: "واجهة مركبة مبتكرة",
    image: "/p3.jpg?height=400&width=600",
    status: "مكتمل",
    rating: 5,
    client: "شركة المراكز التجارية",
  },
  {
    title: "مركز المدينة للإعلانات البصرية",
    location: "الخبر، طريق الملك عبدالعزيز",
    area: "1,200 م²",
    duration: "3 أشهر",
    type: "حروف بارزة ثلاثية الأبعاد بإضاءة خلفية",
    image: "/p4.jpg?height=400&width=600",
    status: "مكتمل",
    rating: 5,
    client: "مؤسسة الحلول الإبداعية للإعلان",
  },
  {
    title: "مركز الخدمات الذكية",
    location: "الرياض، حي النخيل",
    area: "1,600 م²",
    duration: "2.5 أشهر",
    type: "ديكورات داخلية باستخدام تقنية CNC",
    image: "/p5.jpg?height=400&width=600",
    status: "قيد التنفيذ",
    rating: 5,
    client: "شركة التقنية المتقدمة",
  },
  {
    title: "مبنى المقر الرئيسي لشركة برايم",
    location: "جدة، حي الشاطئ",
    area: "2,000 م²",
    duration: "3.5 أشهر",
    type: "حروف مرفوعة لواجهة الشركة ولوحات داخلية",
    image: "/p6.jpg?height=400&width=600",
    status: "مكتمل",
    rating: 5,
    client: "شركة برايم للخدمات اللوجستية",
  },
];

export default function ProjectsShowcase() {
  return (
    <section className="py-20 bg-gradient-to-br from-[var(--light)] to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[var(--primary)]/10 to-[var(--accent)]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-[var(--accent)]/10 to-[var(--secondary)]/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative">
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

                {/* Overlay */}
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
                  <div className="p-6 text-white w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <Button
                      size="sm"
                      className="bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm"
                    >
                      عرض دراسة الحالة
                      <ArrowLeft className="w-4 h-4 mr-2" />
                    </Button>
                  </div>
                </div> */}
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

        {/* Bottom CTA */}
        {/* <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-[var(--accent)] to-[var(--secondary)] hover:from-[var(--secondary)] hover:to-[var(--primary)] text-white px-16 py-6 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            استعرض جميع المشاريع والإنجازات
            <ArrowLeft className="w-6 h-6 mr-3" />
          </Button>
        </div> */}
      </div>
    </section>
  );
}
