"use client";

import HeroSectionResponsive from "@/components/HeroSectionResponsive";

// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";

// // Responsive slider image set
// const responsiveSliderImages = [
//   {
//     desktop: "/images/p1-desktop.jpeg",
//     mobile: "/images/m-p1.jpg",
//   },
//   {
//     desktop: "/images/p20.jpeg",
//     mobile: "/images/mobile/p2-mobile.jpg",
//   },
//   {
//     desktop: "/images/raised-letters/hero3.jpg",
//     mobile: "/images/mobile/hero3-mobile.jpg",
//   },
// ];

// const galleryImages = [
//   "/images/raised-letters/gallery1.jpg",
//   "/images/raised-letters/gallery2.jpg",
//   "/images/raised-letters/gallery3.jpg",
//   "/images/raised-letters/gallery4.jpg",
//   "/images/raised-letters/gallery5.jpg",
// ];

// export default function RaisedLettersPage() {
//   const [current, setCurrent] = useState(0);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     // Auto-switching images every 4 seconds
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % responsiveSliderImages.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     // Check screen size to set isMobile
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };
//     handleResize(); // Run once on mount
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const currentImage = isMobile
//     ? responsiveSliderImages[current].mobile
//     : responsiveSliderImages[current].desktop;

//   return (
//     <>
//       <title>تصميم وتركيب حروف مرفوعة مميزة – معرض أعمالنا</title>
//       <meta
//         name="description"
//         content="استعرض أحدث مشاريعنا في تصميم وتركيب الحروف المرفوعة للأسماء التجارية والواجهات. نقدم جودة عالية ولمسات احترافية تناسب مختلف أنواع الأنشطة التجارية."
//       />
//       <div className="w-full">
//         {/* Hero Slider */}
//         <div className="relative w-full h-[80vh] overflow-hidden">
//           <AnimatePresence>
//             <motion.div
//               key={currentImage}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 1 }}
//               className="absolute w-full h-full"
//             >
//               <Image
//                 src={currentImage}
//                 alt={`صورة ${current + 1}`}
//                 fill
//                 className="object-cover"
//               />
//               <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
//                 <motion.h1
//                   initial={{ y: 30, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   transition={{ duration: 0.8, delay: 0.5 }}
//                   className="text-white text-3xl md:text-5xl font-bold text-center"
//                 >
//                   حروف بارزة – معرض المشاريع
//                 </motion.h1>
//               </div>
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         {/* Project Gallery */}
//         <section className="py-12 px-4 md:px-16 bg-white">
//           <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-black">
//             بعض من أعمالنا في الحروف البارزة
//           </h2>
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//             {galleryImages.map((src, i) => (
//               <div
//                 key={i}
//                 className="relative w-full aspect-square overflow-hidden rounded-xl shadow-md group"
//               >
//                 <Image
//                   src={src}
//                   alt={`معرض حروف بارزة ${i + 1}`}
//                   fill
//                   className="object-cover group-hover:scale-105 transition-transform duration-500"
//                 />
//               </div>
//             ))}
//           </div>
//         </section>
//       </div>
//     </>
//   );
// }

// This code is commented out to prevent execution in the current environment.
// It is intended to be used in a Next.js application with Framer Motion and Next Image for animations and responsive images.
// The code implements a responsive image slider and a gallery for raised letters projects, with animations and mobile responsiveness.
// The above code is a complete implementation of a page that showcases raised letters projects with a responsive image slider and a gallery. It uses React hooks for state management and effects, Framer Motion for animations, and Next.js Image component for optimized image loading.
// The code is structured to handle both desktop and mobile views, automatically switching images in the slider and displaying a gallery of project images. It includes metadata for SEO purposes.
// The code is ready to be integrated into a Next.js application, providing a visually appealing and interactive experience for users interested in raised letters projects.
// code 2
// "use client";

// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";

// // Responsive slider images for desktop and mobile
// const responsiveSliderImages = [
//   {
//     desktop: "/images/p1-desktop.jpeg",
//     mobile: "/images/m-p1.jpg",
//   },
//   {
//     desktop: "/images/p20.jpeg",
//     mobile: "/images/m-p2.jpg",
//   },
//   {
//     desktop: "/images/raised-letters/hero3.jpg",
//     mobile: "/images/m-p3.jpg",
//   },
// ];

// // Gallery images
// const galleryImages = [
//   "/images/raised-letters/gallery1.jpg",
//   "/images/raised-letters/gallery2.jpg",
//   "/images/raised-letters/gallery3.jpg",
//   "/images/raised-letters/gallery4.jpg",
//   "/images/raised-letters/gallery5.jpg",
// ];

// export default function RaisedLettersPage() {
//   const [current, setCurrent] = useState(0);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % responsiveSliderImages.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const currentImage = isMobile
//     ? responsiveSliderImages[current].mobile
//     : responsiveSliderImages[current].desktop;

//   return (
//     <>
//       <title>تصميم وتركيب حروف مرفوعة مميزة – معرض أعمالنا</title>
//       <meta
//         name="description"
//         content="استعرض أحدث مشاريعنا في تصميم وتركيب الحروف المرفوعة للأسماء التجارية والواجهات. نقدم جودة عالية ولمسات احترافية تناسب مختلف أنواع الأنشطة التجارية."
//       />
//       <div className="w-full">
//         {/* Hero Slider */}
//         <div className="relative w-full h-[80vh] overflow-hidden">
//           <AnimatePresence>
//             <motion.div
//               key={currentImage}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 1 }}
//               className="absolute w-full h-full"
//             >
//               <div className="relative w-full h-full">
//                 <Image
//                   src={currentImage}
//                   alt={`صورة ${current + 1}`}
//                   fill
//                   sizes="(max-width: 768px) 100vw, 100vw"
//                   className="object-cover w-full h-full"
//                   priority
//                 />
//               </div>
//               <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
//                 <motion.h1
//                   initial={{ y: 30, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   transition={{ duration: 0.8, delay: 0.5 }}
//                   className="text-white text-3xl md:text-5xl font-bold text-center px-4"
//                 >
//                   حروف بارزة – معرض المشاريع
//                 </motion.h1>
//               </div>
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         {/* Project Gallery */}
//         <section className="py-12 px-4 md:px-16 bg-white">
//           <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-black">
//             بعض من أعمالنا في الحروف البارزة
//           </h2>
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//             {galleryImages.map((src, i) => (
//               <div
//                 key={i}
//                 className="relative w-full aspect-square overflow-hidden rounded-xl shadow-md group"
//               >
//                 <Image
//                   src={src}
//                   alt={`معرض حروف بارزة ${i + 1}`}
//                   fill
//                   className="object-cover group-hover:scale-105 transition-transform duration-500"
//                 />
//               </div>
//             ))}
//           </div>
//         </section>
//       </div>
//     </>
//   );
// }
// code 3
// "use client";

// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";

// // Responsive slider images for desktop and mobile
// const responsiveSliderImages = [
//   {
//     desktop: "/images/d-p1.jpeg",
//     mobile: "/images/m-p1.jpg",
//   },
//   {
//     desktop: "/images/d-p2.jpeg",
//     mobile: "/images/m-p2.jpg",
//   },
//   {
//     desktop: "/images/d-p3.jpeg",
//     mobile: "/images/m-p3.jpg",
//   },
// ];

// // Gallery images
// const galleryImages = [
//   "/project-gallery/project-1.jpeg",
//   "/project-gallery/project-2.jpeg",
//   "/project-gallery/project-3.jpeg",
//   "/project-gallery/project-4.jpeg",
//   // "/images/raised-letters/gallery5.jpg",
// ];

// export default function RaisedLettersPage() {
//   const [current, setCurrent] = useState(0);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % responsiveSliderImages.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const currentImage = isMobile
//     ? responsiveSliderImages[current].mobile
//     : responsiveSliderImages[current].desktop;

//   return (
//     <>
//       <title>تصميم وتركيب حروف مرفوعة مميزة – معرض أعمالنا</title>
//       <meta
//         name="description"
//         content="استعرض أحدث مشاريعنا في تصميم وتركيب الحروف المرفوعة للأسماء التجارية والواجهات. نقدم جودة عالية ولمسات احترافية تناسب مختلف أنواع الأنشطة التجارية."
//       />
//       <div className="w-full">
//         {/* Hero Slider */}
//         <div className="relative w-full h-[85vh] overflow-hidden">
//           <AnimatePresence>
//             <motion.div
//               key={currentImage}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 1 }}
//               className="absolute w-full h-full"
//             >
//               <div className="relative w-full h-full">
//                 <Image
//                   src={currentImage}
//                   alt={`صورة ${current + 1}`}
//                   fill
//                   sizes="(max-width: 768px) 100vw, 100vw"
//                   className="object-cover w-full h-full"
//                   priority
//                 />
//               </div>
//               <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
//                 <motion.h1
//                   initial={{ y: 30, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   transition={{ duration: 0.8, delay: 0.5 }}
//                   className="text-white text-3xl md:text-5xl font-bold text-center px-4"
//                 >
//                   حروف بارزة – معرض المشاريع
//                 </motion.h1>
//               </div>
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         {/* About Section */}
//         <section className="py-12 px-4 md:px-16 bg-gray-50">
//           <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
//             <div>
//               <h1 className="text-2xl md:text-3xl font-bold mb-4 text-black">
//                 تصميم الحروف البارزة – جودة وأناقة في واجهتك التجارية
//               </h1>
//               <p className="text-gray-700 leading-loose">
//                 تعتبر الحروف البارزة من أهم عناصر تصميم الواجهات التجارية، حيث
//                 تضيف مظهرًا احترافيًا وجذابًا للمكان. نحن في شركتنا نحرص على
//                 تقديم تصاميم مميزة وعصرية باستخدام أجود المواد مثل الألومنيوم،
//                 الستانلس ستيل، الأكريليك، مع الإضاءة الخلفية أو بدونها. نعمل مع
//                 مختلف أنواع الأنشطة التجارية لتقديم أفضل الحلول التي تبرز
//                 العلامة التجارية وتجذب العملاء.
//               </p>
//             </div>
//             <div className="w-full h-64 md:h-80 relative rounded-xl overflow-hidden shadow-lg">
//               <Image
//                 src="/about-us.jpg"
//                 alt="عن الحروف البارزة"
//                 fill
//                 className="object-cover"
//               />
//             </div>
//           </div>
//         </section>

//         {/* Project Gallery */}
//         <section className="py-12 px-4 md:px-16 bg-white">
//           <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-black">
//             بعض من أعمالنا في الحروف البارزة
//           </h2>
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//             {galleryImages.map((src, i) => (
//               <div
//                 key={i}
//                 className="relative w-full aspect-square overflow-hidden rounded-xl shadow-md group"
//               >
//                 <Image
//                   src={src}
//                   alt={`معرض حروف بارزة ${i + 1}`}
//                   fill
//                   className="object-cover group-hover:scale-105 transition-transform duration-500"
//                 />
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* WhatsApp & Call Cards */}
//         <section className="py-10 px-6 md:px-16 bg-gray-100 flex flex-col md:flex-row items-center justify-center gap-6">
//           <Link
//             href="https://wa.me/+966580157728"
//             className="bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-xl shadow-md flex items-center gap-3 w-full md:w-auto text-center justify-center"
//             target="_blank"
//           >
//             <span className="text-lg font-semibold">تواصل عبر الواتساب</span>
//           </Link>

//           <Link
//             href="tel:+966580157728"
//             className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-xl shadow-md flex items-center gap-3 w-full md:w-auto text-center justify-center"
//           >
//             <span className="text-lg font-semibold">اتصل بنا الآن</span>
//           </Link>
//         </section>
//       </div>
//     </>
//   );
// }

import DynamicServices from "@/components/DynamicServices";
import { Type, Lightbulb, Crop, Layers, Bold } from "lucide-react";
import DynamicProjectGallery from "@/components/DynamicProjectGallery.tsx";
import TechSpecs from "@/components/tech-specs";
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

export default function RaisedLettersPage() {
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
    </>
  );
}
