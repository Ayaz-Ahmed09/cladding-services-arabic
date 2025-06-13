"use client";

import { FC, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

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
    <section className=" py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[var(--dark)] mb-12">
          آراء عملائنا
        </h2>

        <div className="relative w-full max-w-xl mx-auto min-h-[300px] ">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ rotateY: 90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: -90, opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white border border-white shadow-xl rounded-2xl p-6 bg-[#d4a574]/10 sm:p-8 w-full absolute top-0 left-0"
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
