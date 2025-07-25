export interface MaterialProps {
  name: string;
  nameEn: string;
  color: string;
  metalness: number;
  roughness: number;
  transmission: number;
  opacity: number;
  price: string;
  features: string[];
  description: string;
}

export const claddingMaterials: Record<string, MaterialProps> = {
  glass: {
    name: "الواجهات الزجاجية",
    nameEn: "Glass Facade",
    color: "#87CEEB",
    metalness: 0.1,
    roughness: 0.1,
    transmission: 0.9,
    opacity: 0.3,
    price: "450 ريال/م²",
    features: [
      "عزل حراري متقدم",
      "شفافية عالية",
      "مقاومة الأشعة فوق البنفسجية",
      "سهولة التنظيف",
    ],
    description: "واجهات زجاجية حديثة بتقنيات العزل المتطورة",
  },
  metal: {
    name: "الكسوة المعدنية",
    nameEn: "Metal Cladding",
    color: "#C0C0C0",
    metalness: 0.9,
    roughness: 0.2,
    transmission: 0,
    opacity: 1,
    price: "320 ريال/م²",
    features: ["مقاومة التآكل", "متانة عالية", "تشطيبات متنوعة", "صيانة قليلة"],
    description: "كسوة معدنية عالية الجودة مقاومة للعوامل الجوية",
  },
  stone: {
    name: "الواجهات الحجرية",
    nameEn: "Stone Facade",
    color: "#D2B48C",
    metalness: 0.1,
    roughness: 0.8,
    transmission: 0,
    opacity: 1,
    price: "280 ريال/م²",
    features: [
      "مظهر طبيعي فاخر",
      "عزل طبيعي",
      "مقاومة الطقس",
      "عمر افتراضي طويل",
    ],
    description: "أحجار طبيعية فاخرة للمظهر الكلاسيكي الأنيق",
  },
  composite: {
    name: "الأنظمة المركبة",
    nameEn: "Composite Systems",
    color: "#8B4513",
    metalness: 0.3,
    roughness: 0.4,
    transmission: 0,
    opacity: 1,
    price: "380 ريال/م²",
    features: ["تقنيات مدمجة", "خفة الوزن", "مرونة التصميم", "كفاءة الطاقة"],
    description: "أنظمة مركبة مبتكرة تجمع بين الجمال والوظائف المتقدمة",
  },
  wood: {
    name: "الكسوة الخشبية",
    nameEn: "Wood Cladding",
    color: "#8B4513",
    metalness: 0.0,
    roughness: 0.9,
    transmission: 0,
    opacity: 1,
    price: "350 ريال/م²",
    features: ["مظهر دافئ طبيعي", "عزل حراري", "صديق للبيئة", "تصاميم متنوعة"],
    description: "كسوة خشبية طبيعية للمظهر الدافئ والمستدام",
  },
};
