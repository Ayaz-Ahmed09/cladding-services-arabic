"use client";

// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import {
//   ArrowLeft,
//   Play,
//   Star,
//   Award,
//   Zap,
//   Shield,
//   Eye,
//   Layers,
// } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// export default function HeroSection() {
//   return (
//     <section className="relative min-h-screen pt-20 overflow-hidden">
//       {/* Animated Background */}
//       <div className="absolute inset-0 hero-gradient"></div>

//       {/* Morphing Blobs */}
//       <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-[var(--primary)]/20 to-[var(--accent)]/20 morphing-blob blur-3xl"></div>
//       <div
//         className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-[var(--accent)]/20 to-[var(--secondary)]/20 morphing-blob blur-3xl"
//         style={{ animationDelay: "7s" }}
//       ></div>

//       <div className="relative container mx-auto px-4 py-20">
//         <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
//           {/* Content Section */}
//           <div className="space-y-8 z-10">
//             {/* Animated Badge */}
//             <div className="inline-flex items-center gap-3 glass-navbar text-[var(--dark)] px-6 py-3 rounded-full text-sm font-medium animate-pulse">
//               <Star className="w-5 h-5 text-[var(--accent)]" />
//               <span>الشركة الرائدة في المملكة العربية السعودية</span>
//             </div>
//             {/* Main Heading with Unique Typography */}
//             <div className="space-y-6">
//               <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
//                 <span className="block text-[var(--dark)] mb-2">نبني</span>
//                 <span className="block text-gradient text-8xl md:text-9xl font-black">
//                   أحلامك
//                 </span>
//                 <span className="block text-[var(--secondary)] text-3xl md:text-4xl font-light">
//                   بواجهات استثنائية
//                 </span>
//               </h2>

//               <p className="text-xl md:text-2xl text-[var(--dark)]/80 leading-relaxed max-w-2xl font-light">
//                 نحول الرؤى المعمارية إلى واقع مذهل. خبرة{" "}
//                 <span className="number-display text-[var(--accent)]">15</span>{" "}
//                 عاماً في إبداع واجهات تحكي قصص النجاح وتعكس هوية المكان.
//               </p>
//             </div>
//             {/* Redesigned Features Grid - Better Layout */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
//               {[
//                 {
//                   icon: Shield,
//                   text: "ضمان مدى الحياة",
//                   color: "from-green-500 to-emerald-500",
//                 },
//                 {
//                   icon: Zap,
//                   text: "تنفيذ في وقت قياسي",
//                   color: "from-yellow-500 to-orange-500",
//                 },
//                 {
//                   icon: Award,
//                   text: "جوائز عالمية",
//                   color: "from-purple-500 to-pink-500",
//                 },
//                 {
//                   icon: Eye,
//                   text: "تصاميم حصرية",
//                   color: "from-blue-500 to-cyan-500",
//                 },
//               ].map((feature, index) => (
//                 <div
//                   key={index}
//                   className="feature-card group cursor-pointer rounded-2xl p-6"
//                 >
//                   <div className="flex items-center gap-4">
//                     <div
//                       className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg`}
//                     >
//                       <feature.icon className="w-7 h-7 text-white" />
//                     </div>
//                     <div className="flex-1">
//                       <span className="font-bold text-[var(--dark)] group-hover:text-[var(--accent)] transition-colors duration-300 text-lg">
//                         {feature.text}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             {/* CTA Buttons */}
//             {/* // HAVE TO LINK WITH ROUTE */}
//             {/* <div className="flex flex-col sm:flex-row gap-6 pt-8">
//               <Link href="/instant-qoute">
//                 <Button
//                   size="lg"
//                   className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] hover:from-[var(--accent)] hover:to-[var(--secondary)] text-white px-10 py-6 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
//                 >
//                   احصل على تقييم مجاني فوري
//                   <ArrowLeft className="w-6 h-6 mr-3" />
//                 </Button>
//               </Link>
//               <Button
//                 variant="outline"
//                 size="lg"
//                 className="border-3 border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white px-10 py-6 rounded-2xl font-bold text-lg transition-all duration-300 group glass-navbar"
//               >
//                 <Play className="w-6 h-6 ml-3 group-hover:scale-125 transition-transform" />
//                 جولة افتراضية <span className="number-display">360°</span>
//               </Button>
//             </div> */}
//           </div>

//           {/* Visual Section - Completely Redesigned */}
//           <div className="relative project-showcase">
//             {/* Main Floating Cards */}
//             <div className="relative h-[600px]">
//               {/* Card 1 - Main Project */}
//               <Card className="floating-card absolute top-0 right-0 w-80 h-96 overflow-hidden border-0 shadow-2xl">
//                 <div className="relative h-full">
//                   <Image
//                     src="/placeholder.svg?height=400&width=320"
//                     alt="مشروع واجهة حديثة"
//                     width={320}
//                     height={400}
//                     className="w-full h-full object-cover"
//                     priority
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
//                   <div className="absolute bottom-6 left-6 right-6 text-white">
//                     <h3 className="text-xl font-bold mb-2">
//                       برج الأعمال الذكي
//                     </h3>
//                     <p className="text-sm opacity-90">واجهة تفاعلية - الرياض</p>
//                   </div>
//                   <div className="absolute top-4 right-4 glass-navbar rounded-full p-2">
//                     <Layers className="w-5 h-5 text-[var(--accent)]" />
//                   </div>
//                 </div>
//               </Card>

//               {/* Card 2 - Secondary Project */}
//               <Card className="floating-card absolute top-20 left-10 w-64 h-80 overflow-hidden border-0 shadow-xl">
//                 <div className="relative h-full">
//                   <Image
//                     src="/placeholder.svg?height=320&width=256"
//                     alt="مشروع كسوة معدنية"
//                     width={256}
//                     height={320}
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/80 via-transparent to-transparent"></div>
//                   <div className="absolute bottom-4 left-4 right-4 text-white">
//                     <h4 className="font-bold">مجمع تجاري فاخر</h4>
//                     <p className="text-xs opacity-90">كسوة معدنية - جدة</p>
//                   </div>
//                 </div>
//               </Card>

//               {/* Card 3 - Stats Card */}
//               <Card className="floating-card absolute bottom-0 right-20 w-48 h-32 glass-navbar border-[var(--primary)]/20">
//                 <CardContent className="p-6 text-center h-full flex flex-col justify-center">
//                   <div className="text-3xl font-black text-[var(--primary)] mb-1 number-display">
//                     500+
//                   </div>
//                   <div className="text-sm text-[var(--dark)] font-medium">
//                     مشروع مكتمل
//                   </div>
//                   <div className="flex justify-center mt-2">
//                     {[...Array(5)].map((_, i) => (
//                       <Star
//                         key={i}
//                         className="w-3 h-3 text-[var(--accent)] fill-current"
//                       />
//                     ))}
//                   </div>
//                 </CardContent>
//               </Card>

//               {/* Floating Elements */}
//               <div className="absolute top-40 left-0 w-20 h-20 bg-gradient-to-br from-[var(--accent)] to-[var(--secondary)] rounded-full opacity-60 blur-sm floating-card"></div>
//               <div
//                 className="absolute bottom-40 right-0 w-16 h-16 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-full opacity-40 blur-sm floating-card"
//                 style={{ animationDelay: "3s" }}
//               ></div>
//             </div>

//             {/* Background Decorative Grid */}
//             <div className="absolute inset-0 -z-10">
//               <div
//                 className="w-full h-full opacity-10"
//                 style={{
//                   backgroundImage: `radial-gradient(circle at 25% 25%, var(--primary) 2px, transparent 2px)`,

//                   backgroundSize: "50px 50px",
//                 }}
//               ></div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Stats Bar - Improved Typography */}
//         <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
//           {[
//             { number: "15+", label: "سنة خبرة", icon: Award },
//             { number: "500+", label: "مشروع منجز", icon: Layers },
//             { number: "98%", label: "رضا العملاء", icon: Star },
//             { number: "24/7", label: "دعم فني", icon: Shield },
//           ].map((stat, index) => (
//             <div key={index} className="text-center group">
//               <div className="w-16 h-16 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
//                 <stat.icon className="w-8 h-8 text-white" />
//               </div>
//               <div className="text-3xl font-black text-[var(--dark)] mb-1 number-display">
//                 {stat.number}
//               </div>
//               <div className="text-[var(--dark)]/70 font-medium">
//                 {stat.label}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

//// // Hero Section Component with slider and animated background
// "use client";

// "use client";

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import {
//   ArrowLeft,
//   Play,
//   Star,
//   Award,
//   Zap,
//   Shield,
//   Eye,
//   Layers,
// } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";

// export default function HeroSection() {
//   // Background slider logic
//   const images = ["/slide-1.jpeg", "/project-2.jpeg", "/project-3.jpeg"]; // Replace with your project images

//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % images.length);
//     }, 3000); // 5 seconds per slide
//     return () => clearInterval(interval);
//   }, [images.length]);

//   return (
//     <section className="relative min-h-screen pt-20 overflow-hidden">
//       {/* Background Slider */}
//       <div className="absolute inset-0 z-0">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentIndex}
//             initial={{ opacity: 0.5 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 1 }}
//             className="absolute inset-0 w-full h-full"
//           >
//             <Image
//               src={images[currentIndex]}
//               alt={`Background ${currentIndex + 1}`}
//               layout="fill"
//               objectFit="cover"
//               className="brightness-50"
//               priority
//             />
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       {/* Overlay Content */}
//       <div className="relative z-10 container mx-auto px-4 py-20">
//         <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
//           {/* Content Section */}
//           <div className="space-y-8">
//             {/* Your existing content */}
//             <div className="inline-flex items-center gap-3 glass-navbar text-[var(--dark)] px-6 py-3 rounded-full text-sm font-medium animate-pulse">
//               <Star className="w-5 h-5 text-[var(--accent)]" />
//               <span>الشركة الرائدة في المملكة العربية السعودية</span>
//             </div>

//             <div className="space-y-6">
//               <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
//                 <span className="block text-[var(--dark)] mb-2">نبني</span>
//                 <span className="block text-gradient text-8xl md:text-9xl font-black">
//                   أحلامك
//                 </span>
//                 <span className="block text-[var(--accent)] text-3xl md:text-4xl font-light">
//                   بواجهات استثنائية
//                 </span>
//               </h2>

//               <p className="text-xl md:text-2xl text-[var(--accent)] leading-relaxed max-w-2xl font-light">
//                 نحول الرؤى المعمارية إلى واقع مذهل. خبرة{" "}
//                 <span className="number-display text-[var(--accent)]">15</span>{" "}
//                 عاماً في إبداع واجهات تحكي قصص النجاح وتعكس هوية المكان.
//               </p>
//             </div>

//             {/* Features Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
//               {[
//                 {
//                   icon: Shield,
//                   text: "ضمان مدى الحياة",
//                   color: "from-green-500 to-emerald-500",
//                 },
//                 {
//                   icon: Zap,
//                   text: "تنفيذ في وقت قياسي",
//                   color: "from-yellow-500 to-orange-500",
//                 },
//                 {
//                   icon: Award,
//                   text: "جوائز عالمية",
//                   color: "from-purple-500 to-pink-500",
//                 },
//                 {
//                   icon: Eye,
//                   text: "تصاميم حصرية",
//                   color: "from-blue-500 to-cyan-500",
//                 },
//               ].map((feature, index) => (
//                 <div
//                   key={index}
//                   className="feature-card group cursor-pointer rounded-2xl p-6"
//                 >
//                   <div className="flex items-center gap-4">
//                     <div
//                       className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg`}
//                     >
//                       <feature.icon className="w-7 h-7 text-white" />
//                     </div>
//                     <div className="flex-1">
//                       <span className="font-bold text-[var(--dark)] group-hover:text-[var(--accent)] transition-colors duration-300 text-lg">
//                         {feature.text}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Visual Section - No changes here */}
//           <div className="relative project-showcase">
//             {/* Your existing visual cards */}
//             {/* ... (Keep as is) */}
//           </div>
//         </div>

//         {/* Bottom Stats Bar */}
//         <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
//           {[
//             { number: "15+", label: "سنة خبرة", icon: Award },
//             { number: "500+", label: "مشروع منجز", icon: Layers },
//             { number: "98%", label: "رضا العملاء", icon: Star },
//             { number: "24/7", label: "دعم فني", icon: Shield },
//           ].map((stat, index) => (
//             <div key={index} className="text-center group">
//               <div className="w-16 h-16 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
//                 <stat.icon className="w-8 h-8 text-white" />
//               </div>
//               <div className="text-3xl font-black text-[var(--dark)] mb-1 number-display">
//                 {stat.number}
//               </div>
//               <div className="text-[var(--dark)]/70 font-medium">
//                 {stat.label}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Star, Award, Zap, Shield, Eye, Layers } from "lucide-react";
// import Image from "next/image";

// export default function HeroSection() {
//   const images = ["/office.jpg", "/shop.jpg", "/house.jpg", "/board.jpg"];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % images.length);
//     }, 6000);
//     return () => clearInterval(interval);
//   }, [images.length]);

//   return (
//     <section className="relative min-h-screen pt-16 sm:pt-20 overflow-hidden">
//       {/* Background Slider */}
//       <div className="absolute inset-0 z-0 ">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentIndex}
//             initial={{ opacity: 0.5 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 1 }}
//             className="absolute inset-0 w-full h-full"
//           >
//             <Image
//               src={images[currentIndex]}
//               alt={`Background ${currentIndex + 1}`}
//               layout="fill"
//               objectFit="cover"
//               className="brightness-50"
//               priority
//             />
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       {/* Overlay Content */}
//       <div className="relative z-10 container mx-auto px-4 py-12 sm:py-20">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center min-h-[70vh] sm:min-h-[80vh]">
//           {/* Content Section */}
//           <div className="space-y-6 sm:space-y-8">
//             <div className="inline-flex items-center gap-2 sm:gap-3 glass-navbar text-[var(--dark)] px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium animate-pulse">
//               <Star className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--accent)]" />
//               <span>الشركة الرائدة في المملكة العربية السعودية</span>
//             </div>

//             <div className="space-y-4 sm:space-y-6">
//               <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight">
//                 <span className="block text-[var(--dark)] mb-2">
//                   واجهات كلادينج
//                 </span>
//                 <span className="block text-gradient text-5xl sm:text-7xl md:text-8xl font-black">
//                   عصرية
//                 </span>
//                 <span className="block text-[var(--accent)] text-xl sm:text-2xl md:text-3xl font-light">
//                   تعكس فخامة مشروعك
//                 </span>
//               </h1>

//               <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed max-w-xl font-light">
//                 نحول الرؤى المعمارية إلى واقع مذهل. خبرة{" "}
//                 <span className="number-display text-[var(--accent)]">15</span>{" "}
//                 عاماً في إبداع واجهات تحكي قصص النجاح وتعكس هوية المكان.
//               </p>
//             </div>

//             {/* Features Grid */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-xl">
//               {[
//                 {
//                   icon: Shield,
//                   text: "ضمان مدى الحياة",
//                   color: "from-green-500 to-emerald-500",
//                 },
//                 {
//                   icon: Zap,
//                   text: "تنفيذ في وقت قياسي",
//                   color: "from-yellow-500 to-orange-500",
//                 },
//                 {
//                   icon: Award,
//                   text: "جوائز عالمية",
//                   color: "from-purple-500 to-pink-500",
//                 },
//                 {
//                   icon: Eye,
//                   text: "تصاميم حصرية",
//                   color: "from-blue-500 to-cyan-500",
//                 },
//               ].map((feature, index) => (
//                 <div
//                   key={index}
//                   className="feature-card group cursor-pointer rounded-2xl p-4 sm:p-6"
//                 >
//                   <div className="flex items-center gap-3 sm:gap-4">
//                     <div
//                       className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg`}
//                     >
//                       <feature.icon className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
//                     </div>
//                     <span className="font-bold text-[var(--dark)] group-hover:text-[var(--accent)] transition-colors duration-300 text-base sm:text-lg">
//                       {feature.text}
//                     </span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Visual Section */}
//           <div className="relative project-showcase hidden lg:block">
//             {/* You can keep your visual cards here */}
//           </div>
//         </div>

//         {/* Bottom Stats Bar */}
//         <div className="mt-12 sm:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 text-center">
//           {[
//             { number: "15+", label: "سنة خبرة", icon: Award },
//             { number: "500+", label: "مشروع منجز", icon: Layers },
//             { number: "98%", label: "رضا العملاء", icon: Star },
//             { number: "24/7", label: "دعم فني", icon: Shield },
//           ].map((stat, index) => (
//             <div key={index} className="group">
//               <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
//                 <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
//               </div>
//               <div className="text-xl sm:text-2xl font-black text-[var(--dark)] mb-0.5 sm:mb-1 number-display">
//                 {stat.number}
//               </div>
//               <div className="text-[var(--dark)]/70 text-sm sm:text-base font-medium">
//                 {stat.label}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
// "use client";

// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Star, Award, Zap, Shield, Eye, Layers } from "lucide-react";
// import Image from "next/image";

// const images = ["/office.jpg", "/shop.jpg", "/house.jpg", "/board.jpg"];

// const features = [
//   {
//     icon: Shield,
//     text: "ضمان مدى الحياة",
//     color: "from-green-500 to-emerald-500",
//   },
//   {
//     icon: Zap,
//     text: "تنفيذ في وقت قياسي",
//     color: "from-yellow-500 to-orange-500",
//   },
//   { icon: Award, text: "جوائز عالمية", color: "from-purple-500 to-pink-500" },
//   { icon: Eye, text: "تصاميم حصرية", color: "from-blue-500 to-cyan-500" },
// ];

// const stats = [
//   { number: "15+", label: "سنة خبرة", icon: Award },
//   { number: "500+", label: "مشروع منجز", icon: Layers },
//   { number: "98%", label: "رضا العملاء", icon: Star },
//   { number: "24/7", label: "دعم فني", icon: Shield },
// ];

// export default function HeroSection() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(
//       () => setCurrentIndex((prev) => (prev + 1) % images.length),
//       6000
//     );
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative min-h-screen pt-16 sm:pt-20 overflow-hidden">
//       {/* Background Slider */}
//       <div className="absolute inset-0 z-0">
//         <motion.div
//           key={currentIndex}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//           className="absolute inset-0 w-full h-full"
//         >
//           <Image
//             src={images[currentIndex]}
//             alt={`Background ${currentIndex + 1}`}
//             fill
//             sizes="100vw"
//             className="object-cover brightness-50"
//             priority={currentIndex === 0}
//             loading={currentIndex === 0 ? "eager" : "lazy"}
//           />
//         </motion.div>
//       </div>

//       {/* Overlay Content */}
//       <div className="relative z-10 container mx-auto px-4 py-12 sm:py-20">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center min-h-[70vh] sm:min-h-[80vh]">
//           {/* Text Content */}
//           <div className="space-y-6 sm:space-y-8">
//             <div className="inline-flex items-center gap-3 glass-navbar text-[var(--dark)] px-6 py-3 rounded-full text-sm font-medium animate-pulse">
//               <Star className="w-5 h-5 text-[var(--accent)]" />
//               <span>الشركة الرائدة في المملكة العربية السعودية</span>
//             </div>

//             <div className="space-y-4 sm:space-y-6">
//               <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight">
//                 <span className="block text-[var(--dark)] mb-2">
//                   واجهات كلادينج
//                 </span>
//                 <span className="block text-gradient text-5xl sm:text-7xl md:text-8xl font-black">
//                   عصرية
//                 </span>
//                 <span className="block text-[var(--accent)] text-xl sm:text-2xl md:text-3xl font-light">
//                   تعكس فخامة مشروعك
//                 </span>
//               </h1>

//               <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed max-w-xl font-light">
//                 نحول الرؤى المعمارية إلى واقع مذهل. خبرة{" "}
//                 <span className="number-display text-[var(--accent)]">15</span>{" "}
//                 عاماً في إبداع واجهات تحكي قصص النجاح وتعكس هوية المكان.
//               </p>
//             </div>

//             {/* Feature Cards */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl">
//               {features.map(({ icon: Icon, text, color }, i) => (
//                 <div
//                   key={i}
//                   className="group rounded-2xl p-6 feature-card cursor-pointer"
//                 >
//                   <div className="flex items-center gap-4">
//                     <div
//                       className={`w-14 h-14 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg`}
//                     >
//                       <Icon className="w-7 h-7 text-white" />
//                     </div>
//                     <span className="font-bold text-[var(--dark)] group-hover:text-[var(--accent)] transition-colors duration-300 text-lg">
//                       {text}
//                     </span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Visual Right Side (Optional Showcase) */}
//           <div className="hidden lg:block relative project-showcase">
//             {/* You can place a building render or client logo carousel here later */}
//           </div>
//         </div>

//         {/* Stats Bar */}
//         <div className="mt-12 sm:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
//           {stats.map(({ icon: Icon, number, label }, i) => (
//             <div key={i} className="group">
//               <div className="w-16 h-16 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
//                 <Icon className="w-8 h-8 text-white" />
//               </div>
//               <div className="text-2xl font-black text-[var(--dark)] number-display">
//                 {number}
//               </div>
//               <div className="text-[var(--dark)]/70 text-base font-medium">
//                 {label}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// import HeroBackgroundSlider from "./HeroBackgroundSlider";
// import FeaturesGrid from "./FeaturesGrid";
// import StatsGrid from "./StatsGrid";

// export default function HeroSection() {
//   return (
//     <section className="relative min-h-screen pt-16 sm:pt-20 overflow-hidden">
//       {/* Background Slider */}
//       <HeroBackgroundSlider />

//       {/* Overlay Content */}
//       <div className="relative z-10 container mx-auto px-4 py-12 sm:py-20">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center min-h-[70vh] sm:min-h-[80vh]">
//           {/* Text Content */}
//           <div className="space-y-6 sm:space-y-8">
//             <div className="inline-flex items-center gap-3 glass-navbar text-[var(--dark)] px-6 py-3 rounded-full text-sm font-medium animate-pulse">
//               <span className="w-5 h-5 text-[var(--accent)]">★</span>
//               <span>الشركة الرائدة في المملكة العربية السعودية</span>
//             </div>

//             <div className="space-y-4 sm:space-y-6">
//               <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight">
//                 <span className="block text-[var(--dark)] mb-2">
//                   واجهات كلادينج
//                 </span>
//                 <span className="block text-gradient text-5xl sm:text-7xl md:text-8xl font-black">
//                   عصرية
//                 </span>
//                 <span className="block text-[var(--accent)] text-xl sm:text-2xl md:text-3xl font-light">
//                   تعكس فخامة مشروعك
//                 </span>
//               </h1>

//               <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed max-w-xl font-light">
//                 نحول الرؤى المعمارية إلى واقع مذهل. خبرة{" "}
//                 <span className="number-display text-[var(--accent)]">15</span>{" "}
//                 عاماً في إبداع واجهات تحكي قصص النجاح وتعكس هوية المكان.
//               </p>
//             </div>

//             <FeaturesGrid />
//           </div>

//           <div className="hidden lg:block relative project-showcase"></div>
//         </div>

//         {/* <StatsGrid /> */}
//       </div>
//     </section>
//   );
// }

// code snippt 3

import HeroBackgroundSlider from "./HeroBackgroundSlider";
import FeaturesGrid from "./FeaturesGrid";
import StatsGrid from "./StatsGrid";

type HeroSectionProps = {
  images: string[];
  badgeText: string;
  headingLines: [string, string, string]; // [topLine, middleLine (gradient), bottomLine (accent)]
  description: string;
};

export default function HeroSection({
  images,
  badgeText,
  headingLines,
  description,
}: HeroSectionProps) {
  return (
    <section className="relative min-h-screen pt-16 sm:pt-20 overflow-hidden">
      <HeroBackgroundSlider images={images} />

      <div className="relative z-10 container mx-auto px-4 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center min-h-[70vh] sm:min-h-[80vh]">
          {/* Text Content */}
          <div className="space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-3 glass-navbar text-[var(--dark)] px-4 py-2 rounded-full text-sm font-medium animate-pulse">
              <span className="w-5 h-5 text-[var(--accent)]">★</span>
              <span>{badgeText}</span>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black leading-tight">
                <span className="block text-[var(--dark)] mb-2">
                  {headingLines[0]}
                </span>
                <span className="block text-gradient text-4xl sm:text-5xl lg:text-7xl font-black">
                  {headingLines[1]}
                </span>
                <span className="block text-[var(--accent)] text-2xl sm:text-xl lg:text-3xl font-light">
                  {headingLines[2]}
                </span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-[#8b4513] leading-relaxed max-w-xl font-light">
                {description}
              </p>
            </div>

            <FeaturesGrid />
          </div>

          <div className="hidden lg:block relative project-showcase"></div>
        </div>

        {/* <StatsGrid /> */}
      </div>
    </section>
  );
}
