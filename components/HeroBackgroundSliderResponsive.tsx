"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const responsiveSliderImages = [
  {
    desktop: "/images/d-p1.jpeg",
    mobile: "/images/m-p1.jpeg",
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
    }, 3000); // Slower transition
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 z-0 bg-black overflow-hidden">
      {responsiveSliderImages.map((img, index) => {
        const src = isMobile ? img.mobile : img.desktop;
        return (
          <Image
            key={index}
            src={src}
            alt={`Background ${index + 1}`}
            fill
            sizes="100vw"
            priority={index === 0}
            className={`object-cover brightness-50 absolute inset-0 transition-opacity duration-500 ease-in-out ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />
        );
      })}
    </div>
  );
}
