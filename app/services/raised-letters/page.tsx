"use client";

import HeroSectionResponsive from "@/components/HeroSectionResponsive";
import { useEffect } from "react";
import DynamicServices from "@/components/DynamicServices";
import { Type, Lightbulb, Crop, Layers, Bold } from "lucide-react";
import DynamicProjectGallery from "@/components/DynamicProjectGallery.tsx";
import TechSpecs from "@/components/tech-specs";
import TestimonialSlider from "@/components/TestimonialSection";
const raisedLetterServices = [
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
    title: "حروف بارزة مضيئة",
    description: "حروف بارزة بإضاءة LED للظهور الليلي اللافت",
    features: ["إضاءة موفرة للطاقة", "رؤية واضحة ليلاً", "ألوان إضاءة متنوعة"],
    gradient: "from-yellow-400 to-orange-400",
    bgGradient: "from-yellow-50 to-orange-50",
  },
  {
    icon: Crop,
    title: "حروف بارزة ستانلس ستيل",
    description: "تصميم أنيق وعصري باستخدام الفولاذ المقاوم للصدأ",
    features: [
      "مقاومة للعوامل الجوية",
      "لمعان دائم",
      "مثالية للأماكن الخارجية",
    ],
    gradient: "from-gray-400 to-zinc-500",
    bgGradient: "from-gray-50 to-zinc-50",
  },
  {
    icon: Layers,
    title: "حروف بارزة ثلاثية الأبعاد",
    description: "حروف مجسمة تعطي عمقاً وبروزاً للتصميم",
    features: ["تصميم مخصص", "خيارات حجم متنوعة", "تجربة بصرية فريدة"],
    gradient: "from-purple-400 to-indigo-500",
    bgGradient: "from-purple-50 to-indigo-50",
  },
  {
    icon: Bold,
    title: "حروف بارزة من الفوم",
    description: "حروف خفيفة الوزن وسهلة التركيب باستخدام الفوم",
    features: ["اقتصادية", "مرنة في التصميم", "خفيفة الوزن"],
    gradient: "from-green-400 to-emerald-500",
    bgGradient: "from-green-50 to-emerald-50",
  },
];
const Projects = [
  {
    title: "لوحة حروف بارزة - فندق الأفق",
    location: "الرياض، حي العليا",
    area: "25 م²",
    duration: "10 أيام",
    type: "حروف بارزة من الستانلس ستيل",
    image: "/projects-img/p-1.jpg?height=400&width=600",
    status: "مكتمل",
    rating: 5,
    client: "فندق الأفق الحديث",
  },
  {
    title: "حروف بارزة مضيئة - معرض سيارات النخبة",
    location: "جدة، شارع التحلية",
    area: "18 م²",
    duration: "7 أيام",
    type: "حروف أكريليك مضيئة بإنارة LED",
    image: "/projects-img/p-2.jpg?height=400&width=600",
    status: "مكتمل",
    rating: 4,
    client: "معرض النخبة للسيارات",
  },
  {
    title: "لوحة حروف بارزة ذهبية - مجوهرات الراقي",
    location: "الدمام، مركز النخيل",
    area: "12 م²",
    duration: "5 أيام",
    type: "حروف بارزة مطلية بالذهب",
    image: "/projects-img/p-3.jpg?height=400&width=600",
    status: "مكتمل",
    rating: 5,
    client: "مجوهرات الراقي",
  },
  {
    title: "شعار ثلاثي الأبعاد - شركة حلول الأعمال",
    location: "الخبر، حي الحزام",
    area: "20 م²",
    duration: "8 أيام",
    type: "شعار بارز مع طباعة UV",
    image: "/projects-img/p-4.jpg?height=400&width=600",
    status: "قيد التنفيذ",
    rating: 4,
    client: "شركة حلول الأعمال المتقدمة",
  },
  {
    title: "لوحة ترحيبية - مستشفى الشفاء",
    location: "مكة المكرمة، حي النزهة",
    area: "15 م²",
    duration: "6 أيام",
    type: "حروف بارزة مضيئة داخلية",
    image: "/projects-img/p-5.jpg?height=400&width=600",
    status: "مكتمل",
    rating: 5,
    client: "مستشفى الشفاء التخصصي",
  },
  {
    title: "حروف بارزة خارجية - مطعم مذاق الشرق",
    location: "المدينة المنورة، طريق المطار",
    area: "22 م²",
    duration: "9 أيام",
    type: "حروف ألمنيوم مطلية",
    image: "/projects-img/p-6.jpg?height=400&width=600",
    status: "قيد التنفيذ",
    rating: 5,
    client: "مطاعم مذاق الشرق",
  },
];
const testimonials = [
  {
    name: "عبدالعزيز المطيري",
    jobTitle: "صاحب محل تجاري",
    comment:
      "الحروف المرفوعة أضافت لمسة فخامة لواجهة المحل، فعلاً جودة عالية واحترافية.",
    rating: 5,
  },
  {
    name: "لمياء الخالد",
    jobTitle: "مصممة شعارات",
    comment:
      "فريق مبدع نفذ الشعار بحروف مرفوعة بشكل مطابق تمامًا للتصميم وبإضاءة جذابة.",
    rating: 4.5,
  },
  {
    name: "فيصل الحربي",
    jobTitle: "مدير مشروع تجاري",
    comment:
      "التنفيذ دقيق وسريع، والحروف المرفوعة جذبت انتباه الزوار من أول نظرة.",
    rating: 4,
  },
  {
    name: "أماني العتيبي",
    jobTitle: "مالكة كافيه",
    comment: "حبيت النتيجة! واجهة الكافيه بالحروف المرفوعة صارت مميزة جداً.",
    rating: 5,
  },
];

export default function RaisedLettersPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <title>تصميم وتركيب حروف مرفوعة مميزة – معرض أعمالنا</title>
      <meta
        name="description"
        content="استعرض أحدث مشاريعنا في تصميم وتركيب الحروف المرفوعة للأسماء التجارية والواجهات. نقدم جودة عالية ولمسات احترافية تناسب مختلف أنواع الأنشطة التجارية."
      />
      <HeroSectionResponsive
        headingTop="حروف بارزة"
        headingMiddle="بتصميم احترافي"
        headingBottom="تميز علامتك التجارية"
        paragraph="نقدم لك خبرة تمتد لأكثر من 15 عامًا في تنفيذ حروف مرفوعة جذابة وعصرية تعزز حضورك البصري."
      />
      <DynamicServices
        services={raisedLetterServices}
        sectionTitle="خدمات الواجهات"
        sectionSubtitle="خدمات متقدمة للمباني الحديثة"
        ctaText="احصل على استشارة مجانية"
        ctaLink="/contact"
      />
      <DynamicProjectGallery projects={Projects} />
      <TechSpecs />
      <TestimonialSlider testimonials={testimonials} />
    </>
  );
}
