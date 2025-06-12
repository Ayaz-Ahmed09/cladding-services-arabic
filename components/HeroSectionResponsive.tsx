import HeroBackgroundSliderResponsive from "./HeroBackgroundSliderResponsive";
import FeaturesGrid from "./FeaturesGrid";

export default function HeroSectionResponsive({
  badgeText = "الشركة الرائدة في المملكة العربية السعودية",
  headingTop = "واجهات كلادينج",
  headingMiddle = "عصرية",
  headingBottom = "تعكس فخامة مشروعك",
  paragraph = "نحول الرؤى المعمارية إلى واقع مذهل. خبرة 15 عاماً في إبداع واجهات تحكي قصص النجاح وتعكس هوية المكان.",
  showFeatures = true,
}) {
  return (
    <section className="relative min-h-screen pt-16 sm:pt-20 overflow-hidden">
      {/* Responsive Background Slider */}
      <HeroBackgroundSliderResponsive />

      {/* Overlay Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center min-h-[70vh] sm:min-h-[80vh]">
          {/* Text Content */}
          <div className="space-y-6 sm:space-y-8">
            {badgeText && (
              <div className="inline-flex items-center gap-3 glass-navbar text-[var(--dark)] px-6 py-3 rounded-full text-sm font-medium animate-pulse">
                <span className="w-5 h-5 text-[var(--accent)]">★</span>
                <span>{badgeText}</span>
              </div>
            )}

            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight">
                <span className="block text-[var(--dark)] mb-2">
                  {headingTop}
                </span>
                <span className="block text-gradient text-5xl sm:text-7xl md:text-8xl font-black">
                  {headingMiddle}
                </span>
                <span className="block text-[var(--accent)] text-xl sm:text-2xl md:text-3xl font-light">
                  {headingBottom}
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed max-w-xl font-light">
                {paragraph}
              </p>
            </div>

            {showFeatures && <FeaturesGrid />}
          </div>

          {/* Optional Showcase Placeholder */}
          <div className="hidden lg:block relative project-showcase"></div>
        </div>
      </div>
    </section>
  );
}
