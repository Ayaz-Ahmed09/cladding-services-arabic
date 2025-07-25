"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Layers,
  Shield,
  Zap,
  Square,
  GlassWater,
  ArrowLeft,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Layers,
    title: "تركيب كلادينج ",
    description:
      "نقدم أنظمة كسوة خارجية عصرية للمباني، تجمع بين التصميم الجمالي والحماية العالية من العوامل البيئية، مع تشكيلة واسعة من المواد والتشطيبات.",
    features: [
      "تصاميم حديثة وأنيقة",
      "مقاومة للعوامل الجوية",
      "مواد متعددة وتشطيبات متنوعة",
      "تركيب سريع وآمن",
    ],
    gradient: "from-blue-400 to-cyan-400",
    bgGradient: "from-blue-50 to-cyan-50",
    link: "/services/cladding",
  },
  {
    icon: Shield,
    title: "الصلب والزنك",
    description:
      "أنظمة واجهات معدنية مصنوعة من الصلب والزنك بتقنيات عالية الجودة، مقاومة للتآكل وتتميز بالصلابة والمتانة مع مظهر عصري جذاب.",
    features: [
      "مقاومة عالية للتآكل والصدأ",
      "تحمل درجات الحرارة القاسية",
      "عمر افتراضي طويل",
      "تشطيبات معدنية أنيقة",
    ],
    gradient: "from-gray-500 to-slate-600",
    bgGradient: "from-gray-50 to-slate-50",
    link: "/services/steel-zinc",
  },
  {
    icon: Zap,
    title: "القطع بالليزر – CNC",
    description:
      "تقنية متقدمة للقطع بالليزر والـ CNC لإنتاج أشكال معمارية دقيقة وديكورات معدنية فريدة، مع إمكانيات مخصصة حسب الطلب.",
    features: [
      "دقة متناهية في التفاصيل",
      "تصاميم معمارية معقدة",
      "إمكانية تخصيص عالية",
      "تناسب واجهات وديكورات داخلية",
    ],
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50",
    link: "/services/laser-cnc",
  },
  {
    icon: Square,
    title: "الألومنيوم المركب (ACP)",
    description:
      "حل عصري ومثالي للواجهات الخارجية باستخدام ألواح الألومنيوم المركبة، يوفر عزل حراري ممتاز ومظهر أنيق يدوم طويلاً.",
    features: [
      "عزل حراري وصوتي عالي",
      "ألوان وتشطيبات متعددة",
      "مقاومة للحريق والتآكل",
      "وزن خفيف وسهل التركيب",
    ],
    gradient: "from-orange-400 to-yellow-500",
    bgGradient: "from-orange-50 to-yellow-50",
    link: "/services/acp",
  },
  {
    icon: GlassWater,
    title: "الزجاج المعماري",
    description:
      "تصاميم زجاجية حديثة لواجهات المباني تعزز الإضاءة الطبيعية والمظهر الفاخر، باستخدام أنواع زجاج مقاومة ومزودة بطبقات أمان.",
    features: [
      "زجاج عاكس أو مزدوج",
      "مظهر أنيق وعصري",
      "عزل حراري وضوضاء",
      "أمان عالي ومتانة",
    ],
    gradient: "from-sky-400 to-blue-500",
    bgGradient: "from-sky-50 to-blue-50",
    link: "/services/architectural-glass",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, var(--primary) 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white px-8 py-3 rounded-full text-sm font-bold mb-8 shadow-lg">
            <Layers className="w-5 h-5" />
            <span>خدماتنا المتخصصة</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-[var(--dark)] mb-8">
            <span className="block">حلول شاملة</span>
            <span className="text-gradient">لجميع احتياجات تركيب كلادينج</span>
          </h2>

          <p className="text-xl text-[var(--dark)]/70 max-w-4xl mx-auto leading-relaxed font-light">
            نقدم مجموعة متكاملة من الخدمات المتخصصة في مجال تركيب الكسوة
            والواجهات، مع التركيز على الجودة والابتكار والالتزام بالمواعيد
            المحددة
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8  mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className="service-card group cursor-pointer h-full overflow-hidden"
            >
              <CardContent className="p-8 h-full flex flex-col relative">
                {/* Hover Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>

                <div className="relative z-10 flex-1">
                  {/* Icon */}
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}
                  >
                    <service.icon className="w-10 h-10 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-[var(--dark)] mb-4 group-hover:text-[var(--accent)] transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[var(--dark)]/70 mb-6 leading-relaxed font-light">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-sm text-[var(--dark)]/80"
                      >
                        <div className="w-2 h-2 bg-[var(--accent)] rounded-full flex-shrink-0" />
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col gap-3 relative z-10 mt-auto">
                  {/* WhatsApp Button */}
                  <a
                    href="https://wa.me/966500000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold transition duration-300 group-hover:scale-105">
                      تواصل عبر واتساب
                      <MessageCircle className="w-4 h-4 mr-2" />
                    </Button>
                  </a>

                  {/* Link to Details Page */}
                  {/* <Link href={service.link}>
                    <Button
                      variant="outline"
                      className="w-full border-2 border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition-all duration-300 group-hover:scale-105 font-bold"
                    >
                      استكشف المزيد
                      <ArrowLeft className="w-4 h-4 mr-2" />
                    </Button>
                  </Link> */}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
