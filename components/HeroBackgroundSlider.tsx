"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

type SliderProps = {
  images: string[];
};

export default function HeroBackgroundSlider({ images }: SliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex(currentIndex);
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Previous Image (fades out) */}
      <AnimatePresence>
        <motion.div
          key={`prev-${prevIndex}`}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={images[prevIndex]}
            alt={`Background ${prevIndex + 1}`}
            fill
            sizes="100vw"
            className="object-cover brightness-50 transition-opacity duration-1000"
          />
        </motion.div>
      </AnimatePresence>

      {/* Current Image (fades in) */}
      <motion.div
        key={`current-${currentIndex}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 w-full h-full"
      >
        <Image
          src={images[currentIndex]}
          alt={`Background ${currentIndex + 1}`}
          fill
          sizes="100vw"
          priority={currentIndex === 0}
          className="object-cover brightness-50 transition-opacity duration-1000"
        />
      </motion.div>
    </div>
  );
}
