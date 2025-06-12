import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import ProjectsShowcase from "@/components/projects-showcase";
import TechSpecs from "@/components/tech-specs";
import BuildingVisualizer from "@/components/building-visualizer";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* <Navbar /> */}

      <main>
        <HeroSection
          images={["/aluminiumum.jpg", "/stone.jpg", "/metal.jpg"]}
          badgeText={"الشركة الرائدة في المملكة العربية السعودية"}
          headingLines={["واجهات", "كلادينج", "عصرية"]}
          description={"تعكس فخامة مشروعك"}
        />

        <ServicesSection />
        <ProjectsShowcase />
        <TechSpecs />
        <BuildingVisualizer />
      </main>
    </div>
  );
}
