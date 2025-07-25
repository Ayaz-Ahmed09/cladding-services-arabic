"use client";

import HeroBackgroundSlider from "./HeroBackgroundSlider";
import FeaturesGrid from "./FeaturesGrid";

type HeroSectionProps = {
  images: string[];
  badgeText: string;
  headingLines: [string, string, string]; // [topLine, middleLine (gradient), bottomLine (accent)]
  description: string;
};

export default function HeroSection({
  images,
  badgeText,
  headingLines,
  description,
}: HeroSectionProps) {
  return (
    <section className="relative min-h-screen pt-16 sm:pt-20 overflow-hidden">
      <HeroBackgroundSlider images={images} />

      <div className="relative z-10 container mx-auto px-4 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center min-h-[70vh] sm:min-h-[80vh]">
          {/* Text Content */}
          <div className="space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-3 glass-navbar text-[#d4a574] px-4 py-2 rounded-full text-sm font-medium">
              <span className="w-5 h-5 text-[var(--accent)]">★</span>
              <span>{badgeText}</span>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black leading-tight">
                <span className="block text-[#d4a574] mb-2">
                  {headingLines[0]}
                </span>
                <span className="block text-gradient text-4xl sm:text-5xl lg:text-7xl font-black">
                  {headingLines[1]}
                </span>
                <span className="block text-[var(--accent)] text-2xl sm:text-xl lg:text-3xl font-light">
                  {headingLines[2]}
                </span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-[#d4a574] leading-relaxed max-w-xl font-light">
                {description}
              </p>
            </div>

            <FeaturesGrid />
          </div>

          <div className="hidden lg:block relative project-showcase"></div>
        </div>

        {/* <StatsGrid /> */}
      </div>
    </section>
  );
}
