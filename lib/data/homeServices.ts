// src/lib/data/homeServices.ts
import { Layers, Megaphone, Type } from "lucide-react";

export const services = [
  {
    icon: Layers,
    title: "تركيب كلادينج",
    description:
      "نُقدّم حلول كلادينج متطورة تضيف لمسة عصرية وجاذبية للمباني، باستخدام خامات عالية الجودة ومقاومة للعوامل الجوية.",
    link: "/services/cladding",
    gradient: "from-sky-400 to-blue-600",
    bgGradient: "from-sky-400 to-blue-100",
    features: [
      "تصاميم عصرية وفاخرة",
      "مقاومة للحرارة والرطوبة",
      "سهولة الصيانة والتنظيف",
      "خامات مستوردة عالية الجودة",
    ],
  },
  {
    icon: Megaphone,
    title: "خدمات إعلانية",
    description:
      "نُقدّم خدمات متكاملة في تصميم وتنفيذ اللوحات الإعلانية الخارجية بأعلى معايير الجودة والابتكار لتمييز علامتك التجارية.",
    link: "/services/advertisement",
    gradient: "from-gray-100 to-sky-600",
    bgGradient: "from-sky-50 to-sky-500",
    features: [
      "تصاميم مخصصة جذابة",
      "تنفيذ سريع ومهني",
      "إضاءة LED اختياري",
      "تحمل الظروف المناخية",
    ],
  },
  {
    icon: Type,
    title: "حروف بارزة",
    description:
      "نُنفّذ الحروف البارزة بأعلى دقة باستخدام تقنيات حديثة لتقديم واجهة تميز مشروعك باحترافية وأناقة.",
    link: "/services/raised-letters",
    gradient: "from-purple-200 to-purple-600",
    bgGradient: "from-purple-200 to-purple-400",
    features: [
      "أشكال وخامات متنوعة (أكريليك، ستانلس)",
      "تشطيب احترافي ومظهر لامع",
      "إمكانية الإضاءة الخلفية",
      "ثبات طويل الأمد",
    ],
  },
];
