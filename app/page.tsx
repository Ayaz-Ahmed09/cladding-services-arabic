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
        <HeroSection />
        <ServicesSection />
        <ProjectsShowcase />
        <TechSpecs />
        <BuildingVisualizer />
      </main>
    </div>
  );
}
