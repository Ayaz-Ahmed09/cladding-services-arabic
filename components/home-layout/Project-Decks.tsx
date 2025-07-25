// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import { Star } from "lucide-react";

// const services = [
//   {
//     title: "لمحة من الكلادينج",
//     description: "ألقِ نظرة على لمحات من أعمالنا المميزة في مجال الكلادينج",
//     images: [
//       "/cladding-p/1.jpg",
//       "/cladding-p/2.jpg",
//       "/cladding-p/3.jpg",
//       "/cladding-p/4.webp",
//     ],
//   },
//   {
//     title: "لمحة من الحروف البارزة",
//     description: "تصاميمنا الفريدة للحروف البارزة التي تميز كل مشروع",
//     images: [
//       "/letters/1.jpeg",
//       "/letters/2.jpeg",
//       "/letters/3.jpeg",
//       "/letters/4.jpeg",
//     ],
//   },
//   {
//     title: "لمحة من الإعلانات",
//     description: "إعلانات خارجية تلامس أعين الجمهور وتعكس هويتكم",
//     images: ["/ad/1.jpg", "/ad/2.jpg", "/ad/3.jpg", "/ad/4.jpg"],
//   },
// ];

// export default function ProjectGlimpseSection() {
//   return (
//     <section className="py-20 px-4 relative z-0 overflow-hidden bg-white text-[var(--dark)]">
//       {/* Background pattern */}
//       <div className="absolute inset-0 pointer-events-none z-0">
//         <div
//           className="w-full h-full opacity-10 blur-sm"
//           style={{
//             backgroundImage: `
//           linear-gradient(30deg, black 1px, transparent 1px),
//           linear-gradient(150deg, black 2px, transparent 2px),
//           linear-gradient(90deg, black 3px, transparent 3px)
//         `,
//             backgroundSize: "20px 20px",
//           }}
//         ></div>
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto">
//         {/* Tagline */}
//         <div className="text-center mb-8">
//           <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white px-8 py-3 rounded-full text-sm font-bold mb-8 shadow-lg">
//             <Star className="w-5 h-5" />
//             <span>إنجازاتنا وتميزنا</span>
//           </div>
//         </div>

//         <h2 className="text-4xl md:text-6xl font-black text-[var(--dark)] mb-8 text-center">
//           <span className="block">لمحات من أعمالنا</span>
//           <span className="text-gradient">
//             التي تعكس جودة التنفيذ وروعة التصميم
//           </span>
//         </h2>
//         <p className="text-xl text-[var(--dark)]/70 max-w-4xl mx-auto leading-relaxed font-light text-center mb-12">
//           نقدم لمحات مختارة من مشاريعنا في مجالات الكلادينج، الحروف البارزة،
//           والإعلانات الخارجية — حيث ندمج بين الإبداع والدقة لتحقيق أفضل النتائج
//           لعملائنا في جميع أنحاء المملكة.
//           <span className="block font-bold text-[var(--primary)] mt-4">
//             اضغط على أي بطاقة لمشاهدة الصور الخاصة بالمشروع
//           </span>
//         </p>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
//           {services.map((service, index) => (
//             <PolishedDeck
//               key={index}
//               title={service.title}
//               description={service.description}
//               images={service.images}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function PolishedDeck({
//   title,
//   description,
//   images,
// }: {
//   title: string;
//   description: string;
//   images: string[];
// }) {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const fullDeck = [
//     { type: "title" as const },
//     ...images.map((src) => ({ type: "image" as const, src })),
//   ];

//   const handleNext = () => {
//     setCurrentIndex((prev) => (prev + 1) % fullDeck.length);
//   };

//   return (
//     <div
//       onClick={handleNext}
//       className="relative w-72 sm:w-80 h-96 cursor-pointer group transition-transform duration-300"
//     >
//       {fullDeck.map((item, i) => {
//         const isActive = i === currentIndex;

//         if (item.type === "title") {
//           return (
//             <motion.div
//               key="title-card"
//               className="absolute top-0 left-0 w-full h-full rounded-2xl bg-white/70 text-[var(--primary)] text-center flex flex-col items-center justify-center px-4 shadow-2xl backdrop-blur-md"
//               style={{ zIndex: isActive ? 30 : i }}
//               animate={{
//                 scale: isActive ? 1 : 0.92,
//                 y: isActive ? 0 : (i - currentIndex) * 10,
//                 opacity: isActive ? 1 : 0.65,
//                 rotate: isActive ? 0.2 : (i - currentIndex) * 1.5,
//               }}
//               transition={{ duration: 0.35, ease: "easeInOut" }}
//             >
//               <h3 className="text-xl font-bold mb-2">{title}</h3>
//               <p className="text-sm text-[var(--dark)] leading-snug">
//                 {description}
//               </p>
//               <span className="text-xs mt-2 text-[var(--accent)] font-semibold">
//                 اضغط للمشاهدة
//               </span>
//             </motion.div>
//           );
//         }

//         return (
//           <motion.div
//             key={item.src}
//             className="absolute top-0 left-0 w-full h-full rounded-2xl overflow-hidden shadow-2xl"
//             style={{
//               zIndex: isActive ? 30 : i,
//               filter: isActive ? "none" : "blur(1px)",
//             }}
//             animate={{
//               scale: isActive ? 1 : 0.92,
//               y: isActive ? 0 : (i - currentIndex) * 10,
//               opacity: isActive ? 1 : 0.75,
//               rotate: isActive ? 0.2 : (i - currentIndex) * 1.5,
//             }}
//             transition={{ duration: 0.35, ease: "easeInOut" }}
//           >
//             <Image
//               src={item.src}
//               alt="Project"
//               width={320}
//               height={400}
//               className="object-cover w-full h-full transition-all duration-300"
//             />
//           </motion.div>
//         );
//       })}

//       {/* Top corner counter */}
//       <div className="absolute top-2 right-2 z-40 bg-white/70 text-xs text-[var(--dark)] px-2 py-1 rounded-full shadow backdrop-blur-md">
//         {currentIndex}/{fullDeck.length - 1}
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Star, ChevronRight, ChevronLeft } from "lucide-react";

const services = [
  {
    title: "لمحة من الكلادينج",
    description: "ألقِ نظرة على لمحات من أعمالنا المميزة في مجال الكلادينج",
    images: [
      "/cladding-p/1.jpg",
      "/cladding-p/2.jpg",
      "/cladding-p/3.jpg",
      "/cladding-p/6.webp",
      "/cladding-p/4.jpg",
    ],
  },
  {
    title: "لمحة من الحروف البارزة",
    description: "تصاميمنا الفريدة للحروف البارزة التي تميز كل مشروع",
    images: [
      "/letters/1.jpeg",
      "/letters/11.jpeg",
      "/letters/7.jpeg",
      "/letters/4.jpeg",
      "/letters/6.jpeg",
      "/letters/8.jpeg",
      "/letters/7.jpeg",
      "/letters/6.jpeg",
      "/letters/2.jpeg",
      "/letters/3.jpeg",
      "/letters/12.jpg",
    ],
  },
  {
    title: "لمحة من الإعلانات",
    description: "إعلانات خارجية تلامس أعين الجمهور وتعكس هويتكم",
    images: [
      "/ad/1.jpg",
      "/ad/2.jpg",
      "/ad/3.jpg",
      "/ad/4.jpg",
      "/ad/5.jpg",
      "/ad/6.jpg",
      "/ad/7.jpg",
      "/ad/8.jpg",
      "/ad/9.jpg",
      "/ad/10.jpg",
    ],
  },
];

export default function ProjectShowcaseSlider() {
  const [current, setCurrent] = useState(0);

  const nextService = () => setCurrent((prev) => (prev + 1) % services.length);
  const prevService = () =>
    setCurrent((prev) => (prev - 1 + services.length) % services.length);

  const currentService = services[current];

  return (
    <section className="relative py-20 px-4 bg-white text-[var(--dark)] overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(30deg, black 1px, transparent 1px),
              linear-gradient(150deg, black 2px, transparent 2px),
              linear-gradient(90deg, black 3px, transparent 3px)
            `,
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Header */}
        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white px-6 py-3 rounded-full text-sm font-bold mb-8 shadow-lg">
          <Star className="w-5 h-5" />
          <span>إنجازاتنا وتميزنا</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-black mb-4">
          لمحات من أعمالنا
        </h2>
        <p className="text-xl text-[var(--dark)]/70 max-w-3xl mx-auto font-light mb-12">
          نقدم نماذج مختارة من مشاريعنا الإبداعية والمنفذة بأعلى درجات
          الاحترافية.
        </p>

        {/* Slider controls */}
        <div className="flex justify-center items-center gap-4 mb-6">
          <button
            onClick={prevService}
            className="p-2 rounded-full bg-[var(--accent)] text-white hover:bg-[var(--primary)]"
          >
            <ChevronRight className="rotate-180" />
          </button>
          <span className="text-sm english-text font-semibold">
            {current + 1} / {services.length}
          </span>
          <button
            onClick={nextService}
            className="p-2 rounded-full bg-[var(--accent)] text-white hover:bg-[var(--primary)]"
          >
            <ChevronRight />
          </button>
        </div>

        {/* Animated service slide */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5 }}
            className="bg-white/70 shadow-xl rounded-2xl p-6 max-w-6xl mx-auto backdrop-blur-md"
          >
            <h3 className="text-2xl font-bold text-[var(--primary)] mb-2">
              {currentService.title}
            </h3>
            <p className="text-[var(--dark)]/80 mb-6">
              {currentService.description}
            </p>

            <div className="flex gap-4 overflow-x-auto scrollbar-thin px-2">
              {currentService.images.map((img, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="min-w-[250px] h-60 rounded-xl overflow-hidden shadow-lg flex-shrink-0"
                >
                  <Image
                    src={img}
                    alt="project image"
                    width={300}
                    height={240}
                    className="object-cover w-full h-full"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
