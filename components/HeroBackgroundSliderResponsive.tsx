"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const responsiveSliderImages = [
  {
    desktop: "/images/d-p1.jpeg",
    mobile: "/images/m-p1.jpg",
  },
  {
    desktop: "/images/d-p2.jpeg",
    mobile: "/images/m-p2.jpg",
  },
  {
    desktop: "/images/d-p3.jpeg",
    mobile: "/images/m-p3.jpg",
  },
];

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateMedia = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    updateMedia();
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, [breakpoint]);

  return isMobile;
}

export default function HeroBackgroundSliderResponsive() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % responsiveSliderImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentImage = isMobile
    ? responsiveSliderImages[currentIndex].mobile
    : responsiveSliderImages[currentIndex].desktop;

  return (
    <div className="absolute inset-0 z-0">
      <motion.div
        key={currentImage}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 w-full h-full"
      >
        <Image
          src={currentImage}
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
