// "use client";

// import { useState, useEffect } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import Image from "next/image";

// type SliderProps = {
//   images: string[];
// };

// export default function HeroBackgroundSlider({ images }: SliderProps) {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [prevIndex, setPrevIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setPrevIndex(currentIndex);
//       setCurrentIndex((prev) => (prev + 1) % images.length);
//     }, 2000);
//     return () => clearInterval(interval);
//   }, [currentIndex, images.length]);

//   return (
//     <div className="absolute inset-0 z-0 overflow-hidden">
//       {/* Previous Image (fades out) */}
//       <AnimatePresence>
//         <motion.div
//           key={`prev-${prevIndex}`}
//           initial={{ opacity: 1 }}
//           animate={{ opacity: 0 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 1 }}
//           className="absolute inset-0 w-full h-full"
//         >
//           <Image
//             src={images[prevIndex]}
//             alt={`Background ${prevIndex + 1}`}
//             fill
//             loading="eager"
//             sizes="100vw"
//             className="object-cover brightness-50 transition-opacity duration-1000"
//           />
//         </motion.div>
//       </AnimatePresence>

//       {/* Current Image (fades in) */}
//       <motion.div
//         key={`current-${currentIndex}`}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//         className="absolute inset-0 w-full h-full"
//       >
//         <Image
//           src={images[currentIndex]}
//           alt={`Background ${currentIndex + 1}`}
//           fill
//           sizes="100vw"
//           priority={currentIndex === 0}
//           className="object-cover brightness-50 transition-opacity duration-1000"
//         />
//       </motion.div>
//     </div>
//   );
// }
// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";

// type SliderProps = {
//   images: string[];
// };

// export default function HeroBackgroundSlider({ images }: SliderProps) {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % images.length);
//     }, 3000); // Throttled to 5 seconds
//     return () => clearInterval(interval);
//   }, [images.length]);

//   return (
//     <div className="absolute inset-0 z-0 overflow-hidden">
//       <Image
//         key={currentIndex}
//         src={images[currentIndex]}
//         alt={`Background ${currentIndex + 1}`}
//         fill
//         sizes="100vw"
//         priority={currentIndex === 0}
//         placeholder="blur"
//         blurDataURL="/placeholder.jpg" // Replace with a real low-quality image
//         className="object-cover brightness-50 transition-opacity duration-300"
//       />
//     </div>
//   );
// }

// code 3
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type SliderProps = {
  images: string[];
};

export default function HeroBackgroundSlider({ images }: SliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // Show image every 5 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-black">
      {/* Render all images, but only show the active one */}
      {images.map((img, index) => (
        <Image
          key={index}
          src={img}
          alt={`Background ${index + 1}`}
          fill
          sizes="100vw"
          priority={index === 0}
          className={`object-cover brightness-50 absolute inset-0 transition-opacity duration-300 ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />
      ))}
    </div>
  );
}
