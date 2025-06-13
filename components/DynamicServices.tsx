"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageCircle } from "lucide-react";
import Link from "next/link";

type Service = {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  gradient: string;
  bgGradient: string;
  link?: string;
};

type ServicesSectionProps = {
  services: Service[];
  sectionTitle?: string;
  sectionSubtitle?: string;
  headerIcon?: React.ElementType;
  ctaText?: string;
  ctaLink?: string;
};

export default function ServicesSection({
  services,
  sectionTitle = "خدماتنا المتخصصة",
  sectionSubtitle = "حلول شاملة لجميع احتياجات تركيب الكسوة",
  headerIcon: HeaderIcon = ArrowLeft,
  ctaText,
  ctaLink,
}: ServicesSectionProps) {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, var(--primary) 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white px-8 py-3 rounded-full text-sm font-bold mb-8 shadow-lg">
            <HeaderIcon className="w-5 h-5" />
            <span>{sectionTitle}</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-[var(--dark)] mb-8">
            <span className="block">{sectionSubtitle?.split(" ")[0]}</span>
            <span className="text-gradient">
              {sectionSubtitle?.split(" ").slice(1).join(" ")}
            </span>
          </h2>

          <p className="text-xl text-[var(--dark)]/70 max-w-4xl mx-auto leading-relaxed font-light">
            نقدم مجموعة متكاملة من الخدمات المتخصصة في مجال تركيب الكسوة
            والواجهات، مع التركيز على الجودة والابتكار والالتزام بالمواعيد
            المحددة
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className="service-card group cursor-pointer h-full overflow-hidden"
            >
              <CardContent className="p-8 h-full flex flex-col relative">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

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
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 text-sm text-[var(--dark)]/80"
                      >
                        <div className="w-2 h-2 bg-[var(--accent)] rounded-full flex-shrink-0" />
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col gap-3 relative z-10">
                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/+966580157728"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold transition duration-300 group-hover:scale-105">
                      تواصل عبر واتساب
                      <MessageCircle className="w-4 h-4 mr-2" />
                    </Button>
                  </a>

                  {/* Optional link */}
                  {service.link && (
                    <Link href={service.link} className="w-full">
                      <Button
                        variant="outline"
                        className="w-full border-2 border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition-all duration-300 group-hover:scale-105 font-bold"
                      >
                        استكشف المزيد
                        <ArrowLeft className="w-4 h-4 mr-2" />
                      </Button>
                    </Link>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        {ctaText && ctaLink && (
          <div className="text-center">
            <Link href={ctaLink}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] hover:from-[var(--accent)] hover:to-[var(--secondary)] text-white px-16 py-6 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                {ctaText}
                <ArrowLeft className="w-6 h-6 mr-3" />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
