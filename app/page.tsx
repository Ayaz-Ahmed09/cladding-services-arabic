import HeroSection from "@/components/home-layout/Hero-section";
import HomeServicesSection from "@/components/home-layout/Home-Services";
import React from "react";
import CounterCard from "@/components/home-layout/Counter-Card";
import ProjectGlimpseSection from "@/components/home-layout/Project-Decks";
import TrustedClientsSection from "@/components/home-layout/Trusted-clients";
import WhyChooseUsSection from "@/components/home-layout/WhyChooseUsSection";
import TestimonialSlider from "@/components/TestimonialSection";
import ContactSection from "@/components/home-layout/ContactSection";

const page = () => {
  const testimonials = [
    {
      name: "سعود الجهني",
      jobTitle: "مدير عام لشركة مقاولات",
      comment:
        "تعاونّا معهم في تنفيذ كلادينج واجهة المبنى، وكانت النتيجة مذهلة، جودة تشطيب عالية ودقة في المواعيد.",
      rating: 5,
    },
    {
      name: "نوف السبيعي",
      jobTitle: "مديرة تسويق في شركة أزياء",
      comment:
        "الإعلانات الخارجية التي نفذوها رفعت من ظهور العلامة التجارية بشكل احترافي وجذاب، أنصح بالتعامل معهم بشدة.",
      rating: 4.5,
    },
    {
      name: "بدر العلي",
      jobTitle: "صاحب معرض سيارات",
      comment:
        "الحروف البارزة أعطت واجهة المعرض طابع فخم وراقي، وتم تنفيذ المشروع باحترافية عالية.",
      rating: 5,
    },
    {
      name: "أمل الحربي",
      jobTitle: "مصممة داخلية",
      comment:
        "خدمة مميزة في تنفيذ الحروف والإعلانات، الفريق متعاون جدًا ويهتم بأدق التفاصيل.",
      rating: 4,
    },
    {
      name: "خالد العتيبي",
      jobTitle: "رئيس قسم المشاريع في مؤسسة تجارية",
      comment:
        "نفذوا لنا مشروع كلادينج كامل مع الإعلانات، وفعلاً أثبتوا أنهم الأفضل من ناحية الجودة والسعر.",
      rating: 5,
    },
  ];

  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <HomeServicesSection />
      <ProjectGlimpseSection />
      <CounterCard />
      <TrustedClientsSection />
      <WhyChooseUsSection />
      <TestimonialSlider testimonials={testimonials} />
      <ContactSection />
    </main>
  );
};

export default page;
