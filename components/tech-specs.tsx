"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Shield,
  Award,
  CheckCircle,
  Star,
  Globe,
  Phone,
  MessageSquareText,
} from "lucide-react";

const achievements = [
  {
    number: "500+",
    label: "مشروع مكتمل بنجاح",
    icon: CheckCircle,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    number: "15+",
    label: "سنة خبرة متراكمة",
    icon: Award,
    gradient: "from-[var(--primary)] to-[var(--accent)]",
  },
  {
    number: "98%",
    label: "معدل رضا العملاء",
    icon: Star,
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    number: "24/7",
    label: "دعم فني متواصل",
    icon: Shield,
    gradient: "from-blue-500 to-cyan-500",
  },
];

const certifications = [
  { title: "ISO 9001:2015", desc: "إدارة الجودة", icon: Award },
  { title: "OSHA Standards", desc: "معايير السلامة", icon: Shield },
  { title: "Green Building", desc: "البناء المستدام", icon: Globe },
  { title: "CE Marking", desc: "المطابقة الأوروبية", icon: CheckCircle },
];

export default function TechSpecs() {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-[var(--light)] to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(45deg, var(--primary) 25%, transparent 25%), linear-gradient(-45deg, var(--primary) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, var(--primary) 75%), linear-gradient(-45deg, transparent 75%, var(--primary) 75%)`,
            backgroundSize: "20px 20px",
            backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Achievements Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white px-8 py-3 rounded-full text-sm font-bold mb-8 shadow-lg">
            <Star className="w-5 h-5" />
            <span>إنجازاتنا وتميزنا</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-[var(--dark)] mb-8">
            <span className="block">أرقام تتحدث</span>
            <span className="text-gradient">عن تميزنا</span>
          </h2>

          <p className="text-xl text-[var(--dark)]/70 max-w-3xl mx-auto leading-relaxed font-light mb-16">
            نفخر بإنجازاتنا المتميزة والثقة التي وضعها عملاؤنا فينا على مدار
            السنوات الماضية
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="border-0 bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 group cursor-pointer overflow-hidden"
              >
                <CardContent className="p-8 text-center relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  ></div>
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${achievement.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}
                  >
                    <achievement.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-5xl font-black text-[var(--dark)] mb-3 group-hover:scale-110 transition-transform duration-300 number-display">
                    {achievement.number}
                  </div>
                  <div className="text-[var(--dark)]/70 font-bold text-sm leading-tight">
                    {achievement.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Shop Location & Contact Buttons */}
        <div className="text-center mb-24" id="contact">
          <h3 className="text-3xl md:text-4xl font-bold text-[var(--dark)] mb-4">
            موقع المعرض والخدمة
          </h3>
          <p className="text-lg text-[var(--dark)]/70 max-w-2xl mx-auto mb-6 leading-relaxed">
            زورونا في مقرنا الرئيسي في الرياض، حي العليا - مقابل برج المملكة.
            نحن بانتظاركم بكل ترحيب!
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-8">
            <a
              href="https://wa.me/966500000000"
              target="_blank"
              className="inline-flex items-center gap-3 px-6 py-3 bg-green-500 text-white rounded-full shadow-md hover:bg-green-600 transition"
            >
              <MessageSquareText className="w-5 h-5" />
              تواصل واتساب
            </a>
            <a
              href="tel:+966500000000"
              className="inline-flex items-center gap-3 px-6 py-3 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition"
            >
              <Phone className="w-5 h-5" />
              اتصال مباشر
            </a>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-[var(--dark)] mb-6">
            شهادات الجودة والمعايير العالمية
          </h3>
          <p className="text-lg text-[var(--dark)]/70 max-w-3xl mx-auto leading-relaxed font-light mb-12">
            نلتزم بأعلى المعايير التقنية والمواصفات العالمية لضمان جودة وأمان
            مشاريعنا
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <cert.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-[var(--dark)] mb-2 group-hover:text-[var(--accent)] transition-colors english-text">
                    {cert.title}
                  </h4>
                  <p className="text-sm text-[var(--dark)]/70">{cert.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
