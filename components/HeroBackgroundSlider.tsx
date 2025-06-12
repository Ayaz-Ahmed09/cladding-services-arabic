"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type SliderProps = {
  images: string[];
};

export default function HeroBackgroundSlider({ images }: SliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentIndex((prev) => (prev + 1) % images.length),
      3000
    );
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="absolute inset-0 z-0">
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 w-full h-full"
      >
        <Image
          src={images[currentIndex]}
          alt={`Background ${currentIndex + 1}`}
          fill
          sizes="100vw"
          className="object-cover brightness-50"
          priority={currentIndex === 0}
        />
      </motion.div>
    </div>
  );
}
