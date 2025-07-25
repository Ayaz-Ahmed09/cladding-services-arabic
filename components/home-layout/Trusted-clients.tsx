// // "use client";

// // import { motion, useAnimation } from "framer-motion";
// // import { useEffect, useRef } from "react";
// // import Image from "next/image";
// // import { useMediaQuery } from "usehooks-ts";

// // // Replace with your actual 28 logo paths
// // const logos = [
// //   "/clients/L1.png",
// //   "/clients/L2.png",
// //   "/clients/L3.png",
// //   "/clients/L4.png",
// //   "/clients/L5.png",
// //   "/clients/L6.png",
// //   "/clients/L7.png",
// //   "/clients/L8.png",
// //   "/clients/L9.png",
// //   "/clients/L10.png",
// //   "/clients/L11.png",
// //   "/clients/logo12.png",
// //   "/clients/logo13.png",
// //   "/clients/logo14.png",
// //   "/clients/logo15.png",
// //   "/clients/logo16.png",
// //   "/clients/logo17.png",
// //   "/clients/logo18.png",
// //   "/clients/logo19.png",
// //   "/clients/logo20.png",
// //   "/clients/logo21.png",
// //   "/clients/logo22.png",
// //   "/clients/logo23.png",
// //   "/clients/logo24.png",
// //   "/clients/logo25.png",
// //   "/clients/logo26.png",
// //   "/clients/logo27.png",
// //   "/clients/logo28.png",
// // ];

// // function InfiniteSliderRow({
// //   logos,
// //   reverse = false,
// //   speed = 30,
// // }: {
// //   logos: string[];
// //   reverse?: boolean;
// //   speed?: number;
// // }) {
// //   const containerRef = useRef<HTMLDivElement>(null);
// //   const animationControls = useAnimation();

// //   const dir = reverse ? -1 : 1;

// //   useEffect(() => {
// //     const animate = async () => {
// //       const container = containerRef.current;
// //       if (!container) return;

// //       const totalWidth = container.scrollWidth / 2;
// //       const duration = totalWidth / speed; // pixels per second

// //       await animationControls.start({
// //         x: [0, -dir * totalWidth],
// //         transition: {
// //           ease: "linear",
// //           duration,
// //           repeat: Infinity,
// //         },
// //       });
// //     };

// //     animate();
// //   }, [animationControls, dir, speed]);

// //   return (
// //     <div className="relative overflow-hidden w-full">
// //       <motion.div
// //         ref={containerRef}
// //         animate={animationControls}
// //         className="flex gap-8 w-max"
// //       >
// //         {[...logos, ...logos].map((src, i) => (
// //           <Image
// //             key={i}
// //             src={src}
// //             alt={`Client Logo ${i}`}
// //             width={160}
// //             height={80}
// //             className="w-[160px] h-[80px] object-contain grayscale hover:grayscale-0 hover:scale-105 transition duration-300"
// //           />
// //         ))}
// //       </motion.div>
// //     </div>
// //   );
// // }

// // export default function TrustedClientsSection() {
// //   const isDesktop = useMediaQuery("(min-width: 1024px)");

// //   return (
// //     <section className="relative py-20 px-4 glass-navbar">
// //       <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--primary)] py-8 mb-12">
// //         عملاؤنا الموثوقون
// //       </h2>

// //       {/* Fade Overlays */}
// //       <div className="absolute left-0 top-32 h-[60%] w-12 bg-gradient-to-r from-[var(--primary)] via-transparent to-transparent backdrop-blur-sm z-10 pointer-events-none" />
// //       <div className="absolute right-0 top-32 h-[60%] w-12 bg-gradient-to-l from-[var(--primary)] via-transparent to-transparent backdrop-blur-sm z-10 pointer-events-none" />

// //       <div className="space-y-6">
// //         <InfiniteSliderRow logos={logos} reverse={false} speed={40} />
// //         <InfiniteSliderRow logos={logos} reverse={true} speed={40} />
// //         {isDesktop && (
// //           <InfiniteSliderRow logos={logos} reverse={false} speed={40} />
// //         )}
// //       </div>
// //     </section>
// //   );
// // }

// /// code 2 (trying fitting slider as i want )
// // "use client";

// // import { motion, useAnimation } from "framer-motion";
// // import { useEffect } from "react";
// // import Image from "next/image";

// // // Dynamic 28 logos
// // const logos = [
// //   "/clients/L1.png",
// //   "/clients/L2.png",
// //   "/clients/L3.png",
// //   "/clients/L4.png",
// //   "/clients/L5.png",
// //   "/clients/logo6.png",
// //   "/clients/logo7.png",
// //   "/clients/logo8.png",
// //   "/clients/logo9.png",
// //   "/clients/logo10.png",
// //   "/clients/logo11.png",
// //   "/clients/logo12.png",
// //   "/clients/logo13.png",
// //   "/clients/logo14.png",
// //   "/clients/logo15.png",
// //   "/clients/logo16.png",
// //   "/clients/logo17.png",
// //   "/clients/logo18.png",
// //   "/clients/logo19.png",
// //   "/clients/logo20.png",
// //   "/clients/logo21.png",
// //   "/clients/logo22.png",
// //   "/clients/logo23.png",
// //   "/clients/logo24.png",
// //   "/clients/logo25.png",
// //   "/clients/logo26.png",
// //   "/clients/logo27.png",
// //   "/clients/logo28.png",
// // ];

// // const rowVariants = {
// //   animate: {
// //     x: ["0%", "-50%"],
// //     transition: {
// //       repeat: Infinity,
// //       ease: "linear",
// //       duration: 30, // Speed
// //     },
// //   },
// // };

// // function InfiniteRow({ reverse = false }: { reverse?: boolean }) {
// //   const animation = useAnimation();

// //   useEffect(() => {
// //     animation.start("animate");
// //   }, [animation]);

// //   const fullRow = [...logos, ...logos];

// //   return (
// //     <div className="overflow-hidden relative w-full">
// //       <motion.div
// //         className={`flex gap-8 w-max ${reverse ? "flex-row-reverse" : ""}`}
// //         variants={rowVariants}
// //         animate={animation}
// //       >
// //         {fullRow.map((src, i) => (
// //           <Image
// //             key={i}
// //             src={src}
// //             alt="client logo"
// //             width={160}
// //             height={80}
// //             className="w-[160px] h-[80px] object-contain hover:scale-105 transition-transform duration-300"
// //           />
// //         ))}
// //       </motion.div>
// //     </div>
// //   );
// // }

// // export default function TrustedClientsSection() {
// //   return (
// //     <section className="relative py-20 px-4 glass-navbar">
// //       <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--primary)] py-8 mb-12">
// //         عملاؤنا الموثوقون
// //       </h2>

// //       {/* Gradient overlays */}
// //       <div className="absolute left-0 top-32 h-[60%] w-12 bg-gradient-to-r from-[var(--primary)] via-transparent to-transparent backdrop-blur-sm z-10 pointer-events-none" />
// //       <div className="absolute right-0 top-32 h-[60%] w-12 bg-gradient-to-l from-[var(--primary)] via-transparent to-transparent backdrop-blur-sm z-10 pointer-events-none" />

// //       {/* Responsive rows */}
// //       <div className="space-y-8">
// //         <div className="block md:hidden space-y-8">
// //           <InfiniteRow reverse={false} />
// //           <InfiniteRow reverse={true} />
// //         </div>
// //         <div className="hidden md:block space-y-8">
// //           <InfiniteRow reverse={false} />
// //           <InfiniteRow reverse={true} />
// //           <InfiniteRow reverse={false} />
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }
// //////////////////////////////// code 3 trying new design //////////////////////////////////////////

// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";

// const logos = Array.from({ length: 28 }, (_, i) => `/clients/L${i + 1}.png`);

// const container = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.08,
//     },
//   },
// };

// const item = {
//   hidden: { opacity: 0, scale: 0.9 },
//   show: {
//     opacity: 1,
//     scale: 1,
//     transition: { duration: 0.5, ease: "easeOut" },
//   },
// };

// export default function TrustedClientsSection() {
//   return (
//     <section className="relative py-20 px-4 glass-navbar overflow-hidden">
//       <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--primary)] py-8 mb-12">
//         عملاؤنا الموثوقون
//       </h2>

//       {/* Left Glow Effect */}
//       <div className="absolute left-0 top-24 bottom-24 w-10 bg-gradient-to-r from-[var(--primary)] to-transparent blur-lg opacity-30 pointer-events-none z-10" />

//       {/* Right Glow Effect */}
//       <div className="absolute right-0 top-24 bottom-24 w-10 bg-gradient-to-l from-[var(--primary)] to-transparent blur-lg opacity-30 pointer-events-none z-10" />

//       <motion.div
//         variants={container}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true }}
//         className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-6 justify-items-center relative z-20"
//       >
//         {logos.map((src, i) => (
//           <motion.div
//             key={i}
//             variants={item}
//             className="w-[160px] h-[80px]  transition"
//           >
//             <Image
//               src={src}
//               alt={`client logo ${i + 1}`}
//               width={160}
//               height={80}
//               className="w-full shadow-xl h-full object-contain"
//               loading="lazy"
//             />
//           </motion.div>
//         ))}
//       </motion.div>
//     </section>
//   );
// }
///////////////////////code 22222222222222///////////////////

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck } from "lucide-react"; // Changed icon here ✅

const logos = Array.from({ length: 28 }, (_, i) => `/clients/L${i + 1}.png`);

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function TrustedClientsSection() {
  return (
    <section className="relative py-20 px-4 bg-white text-[var(--dark)] overflow-hidden z-0">
      {/* ✅ Texture background pattern like Project Glimpse */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="w-full h-full opacity-10 blur-sm"
          style={{
            backgroundImage: `
              linear-gradient(30deg, black 1px, transparent 1px),
              linear-gradient(150deg, black 2px, transparent 2px),
              linear-gradient(90deg, black 3px, transparent 3px)
            `,
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* ✅ Updated tagline and icon */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white px-8 py-3 rounded-full text-sm font-bold mb-8 shadow-lg">
            <ShieldCheck className="w-5 h-5" />
            <span>عملاء يثقون بنا دائمًا</span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-black text-center mb-6">
          <span className="block">عملاؤنا الموثوقون</span>
          <span className="text-gradient">
            شركاء نجاحنا في جميع أنحاء المملكة
          </span>
        </h2>

        {/* Description */}
        <p className="text-xl text-[var(--dark)]/70 max-w-4xl mx-auto leading-relaxed font-light text-center mb-16">
          نفتخر بثقة عملائنا من مختلف القطاعات — مؤسسات، شركات، وأفراد — والذين
          شاركونا رحلة النجاح من خلال مشاريع مميزة تعكس الجودة والاحترافية.
        </p>

        {/* Logo Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-6 justify-items-center relative z-20"
        >
          {logos.map((src, i) => (
            <motion.div
              key={i}
              variants={item}
              className="w-[160px] h-[80px] transition"
            >
              <Image
                src={src}
                alt={`client logo ${i + 1}`}
                width={160}
                height={80}
                className="w-full h-full object-contain  hover:scale-105 transition duration-300"
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
