"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const FeaturesGrid = dynamic(() => import("@/components/FeaturesGrid"), {
  ssr: false,
});

const slides = [
  {
    title: "تركيب كلادينج",
    description: "نُقدّم أفضل حلول الكلادينج بتصاميم عصرية وجودة عالية.",
    image: "/s3.webp",
  },
  {
    title: "خدمات إعلانية",
    description: "لافتات ولوحات إعلانية تُلفت الانتباه وتُبرز علامتك التجارية.",
    image: "/s2.jpg",
  },
  {
    title: "حروف بارزة",
    description: "تصميم وتركيب حروف بارزة بإتقان ودقة عالية.",
    image: "/s1.jpg",
  },
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0 -z-10">
        {slides.map((slide, i) => (
          <Image
            key={i}
            src={slide.image}
            alt={slide.title}
            fill
            sizes="100vw"
            priority={i === 0}
            quality={75}
            className={`object-cover transition-opacity duration-500 absolute inset-0 ${
              i === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />
        ))}

        {/* ✅ Overlay: smooth and subtle */}
        <div className="absolute inset-0 bg-black/40 z-20" />
      </div>

      {/* Foreground Content */}
      <div className="container mx-auto px-4 py-20 relative z-30 text-white space-y-8">
        <h1 className="sr-only">
          تركيب كلادينج، حروف بارزة، خدمات إعلانية بالرياض
        </h1>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--accent)]">
          {slides[index].title}
        </h2>
        <p className="text-lg max-w-xl mx-auto font-light">
          {slides[index].description}
        </p>
        <div className="lg:mt-4 lg:absolute lg:-bottom-30 lg:left-2/2 transform lg:-translate-x-1/2 w-full max-w-4xl hidden sm:block">
          <FeaturesGrid />
        </div>
      </div>
    </section>
  );
}
