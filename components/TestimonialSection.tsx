"use client";

import { FC, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, MessageCircle } from "lucide-react";

type Testimonial = {
  name: string;
  jobTitle: string;
  comment: string;
  rating: number;
};

type Props = {
  testimonials: Testimonial[];
};

const TestimonialSlider: FC<Props> = ({ testimonials }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="relative py-20 px-4 overflow-hidden z-0 bg-[var(--light)]">
      {/* ✅ Section-wide texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
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

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* ✅ Tagline */}
        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white px-8 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
          <MessageCircle className="w-5 h-5" />
          <span>شهادات عملائنا</span>
        </div>

        {/* ✅ Main Heading */}
        <h2 className="text-4xl md:text-6xl font-black text-[var(--dark)] mb-8">
          <span className="block">آراء عملائنا</span>
          <span className="text-gradient">ثقة نعتز بها</span>
        </h2>

        {/* ✅ Description Paragraph */}
        <p className="text-xl text-[var(--dark)]/70 max-w-3xl mx-auto leading-relaxed font-light text-center mb-16">
          نفتخر بأننا نكسب ثقة عملائنا من خلال جودة العمل والالتزام، وهذه بعض من
          تجاربهم وانطباعاتهم عن خدماتنا.
        </p>

        {/* ✅ Testimonial Slider */}
        <div className="relative w-full max-w-xl mx-auto min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ rotateY: 90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: -90, opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/70 border border-white shadow-xl backdrop-blur-sm rounded-2xl p-6 sm:p-8 w-full absolute top-0 left-0"
              style={{ backfaceVisibility: "hidden", perspective: "1000px" }}
            >
              <p className="text-base sm:text-lg text-[var(--dark)] leading-relaxed mb-6">
                {testimonials[index].comment}
              </p>

              <div className="flex justify-center gap-1 mb-4 text-[var(--accent)]">
                {Array.from({ length: testimonials[index].rating }).map(
                  (_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  )
                )}
              </div>

              <div className="font-semibold text-[var(--primary)] text-lg sm:text-xl">
                {testimonials[index].name}
              </div>
              <div className="text-sm text-[var(--secondary)] mt-1">
                {testimonials[index].jobTitle}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
