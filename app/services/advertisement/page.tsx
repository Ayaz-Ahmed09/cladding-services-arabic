"use client";
import React from "react";
import HeroSection from "@/components/hero-section";
import DynamicServices from "@/components/DynamicServices";
import DynamicProjectGallery from "@/components/DynamicProjectGallery.tsx";

import {
  Type,
  Lightbulb,
  Crop,
  Layers,
  Bold,
  MapPin,
  Sparkles,
} from "lucide-react";
import TechSpecs from "@/components/tech-specs";
import TestimonialSlider from "@/components/TestimonialSection";

const AdServices = [
  {
    icon: Type,
    title: "حروف بارزة أكريليك",
    description: "حروف بارزة مصنوعة من الأكريليك لإطلالة عصرية وشفافة",
    features: ["إضاءة خلفية", "ألوان متعددة", "مظهر احترافي"],
    gradient: "from-pink-400 to-red-400",
    bgGradient: "from-pink-50 to-red-50",
  },
  {
    icon: Lightbulb,
    title: "لوحات إعلانية LED",
    description: "لوحات بإضاءة LED قوية لجذب الانتباه في جميع الأوقات",
    features: ["إضاءة عالية", "مقاومة للطقس", "تحكم ذكي"],
    gradient: "from-yellow-400 to-orange-500",
    bgGradient: "from-yellow-50 to-orange-50",
  },
  {
    icon: Crop,
    title: "تصميم شعارات ثلاثية الأبعاد",
    description: "شعارات بارزة تعبر عن احترافية وهُوية النشاط التجاري",
    features: ["طباعة UV", "تصميم مخصص", "تنفيذ دقيق"],
    gradient: "from-sky-500 to-blue-600",
    bgGradient: "from-sky-50 to-blue-50",
  },
  {
    icon: Layers,
    title: "لوحات ترحيبية داخلية",
    description: "لوحات ترحيبية أنيقة تعزز من جمالية المدخل الداخلي",
    features: ["تصميم جذاب", "إضاءة هادئة", "تناسب بيئة العمل"],
    gradient: "from-teal-400 to-cyan-500",
    bgGradient: "from-teal-50 to-cyan-50",
  },
  {
    icon: MapPin,
    title: "لافتات خارجية للطرق والمباني",
    description: "لافتات خارجية واضحة وقوية لتحسين الرؤية والتميز",
    features: ["رؤية بعيدة", "مواد متينة", "مقاومة الظروف الجوية"],
    gradient: "from-lime-400 to-emerald-500",
    bgGradient: "from-lime-50 to-emerald-50",
  },
  {
    icon: Sparkles,
    title: "ديكورات إعلانية داخلية",
    description: "ديكورات جدارية إبداعية تبرز العلامة التجارية داخل المنشأة",
    features: ["ألوان متناسقة", "لمسة فنية", "تركيب أنيق"],
    gradient: "from-purple-500 to-fuchsia-500",
    bgGradient: "from-purple-50 to-fuchsia-50",
  },
];
const Projects = [
  {
    title: "لوحة إعلانية مضيئة - صيدلية النهدي",
    location: "الرياض، حي اليرموك",
    area: "20 م²",
    duration: "6 أيام",
    type: "لوحة أكريليك بإضاءة LED",
    image: "/a-projects/ad-1.jpg?height=400&width=600",
    status: "مكتمل",
    rating: 5,
    client: "صيدلية النهدي",
  },
  {
    title: "حروف بارزة ثلاثية الأبعاد - متجر كاجوال ستايل",
    location: "جدة، الأندلس مول",
    area: "14 م²",
    duration: "5 أيام",
    type: "حروف بلاستيكية مع دهان لامع",
    image: "/a-projects/ad-2.jpg?height=400&width=600",
    status: "مكتمل",
    rating: 4,
    client: "كاجوال ستايل للملابس",
  },
  {
    title: "لوحة تسويقية على الواجهة - مركز أسنان الابتسامة",
    location: "الدمام، حي المزروعية",
    area: "17 م²",
    duration: "7 أيام",
    type: "لوحة UV مطبوعة على كلادينج",
    image: "/a-projects/ad-3.jpg?height=400&width=600",
    status: "قيد التنفيذ",
    rating: 4,
    client: "مركز الابتسامة لطب الأسنان",
  },
  {
    title: "لوحة إعلانات رقمية - سوبرماركت الخير",
    location: "الخبر، حي الراكة",
    area: "10 م²",
    duration: "4 أيام",
    type: "شاشة LED خارجية عالية الدقة",
    image: "/a-projects/ad-4.jpg?height=400&width=600",
    status: "مكتمل",
    rating: 5,
    client: "سوبرماركت الخير",
  },
];
const testimonials = [
  {
    name: "راكان الدوسري",
    jobTitle: "صاحب شركة تسويق",
    comment:
      "الإعلانات كانت فعّالة جداً وبتصميم جذاب، ساعدتنا في جذب عملاء جدد خلال وقت قصير.",
    rating: 5,
  },
  {
    name: "نوف القحطاني",
    jobTitle: "مديرة متجر إلكتروني",
    comment:
      "فريق مميز وتصاميم إبداعية. الإعلان على الواجهة زاد من المبيعات بنسبة ملحوظة.",
    rating: 5,
  },
  {
    name: "تركي العتيبي",
    jobTitle: "مدير معرض سيارات",
    comment: "الإعلان الخارجي كان واضح وملفت جداً، وكل من يمر بالشارع يلاحظه.",
    rating: 4,
  },
  {
    name: "حنين العبدالله",
    jobTitle: "أخصائية تسويق",
    comment: "الخدمة سريعة والتنسيق ممتاز، وفريقهم فاهم السوق المحلي تمامًا.",
    rating: 5,
  },
];

const advertisementPage = () => {
  return (
    <section>
      <title>
        تصميم وتنفيذ لوحات إعلانية وحروف بارزة مضيئة بجودة عالية في السعودية
      </title>
      <meta
        name="description"
        content="احصل على أفضل خدمات تصميم وتنفيذ اللوحات الإعلانية في السعودية، حروف بارزة مضيئة، حروف أكريليك، حروف ستانلس ستيل، لوحات محلات، لوحات ذهبية، تنفيذ سريع بأسعار تنافسية. خبرة في تنفيذ مشاريع في الرياض، جدة، مكة، الدمام، المدينة المنورة"
      />
      <HeroSection
        images={["/a-1.jpg", "/a-2.jpg", "/a-3.jpg"]}
        badgeText={"الشركة الرائدة في المملكة العربية السعودية"}
        headingLines={["لوحات ", "إعلانية", " وحروف بارزة"]}
        description={"تصاميم احترافية"}
      />
      <DynamicServices
        services={AdServices}
        sectionTitle="خدمات الواجهات"
        sectionSubtitle="خدمات متقدمة للمباني الحديثة"
        ctaText="احصل على استشارة مجانية"
        ctaLink="#contact"
      />
      <DynamicProjectGallery projects={Projects} />
      <TechSpecs />
      <TestimonialSlider testimonials={testimonials} />
    </section>
  );
};

export default advertisementPage;
