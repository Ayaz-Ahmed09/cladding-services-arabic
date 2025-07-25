// "use client";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import ProjectsShowcase from "@/components/projects-showcase";
import TechSpecs from "@/components/tech-specs";
import BuildingVisualizer from "@/components/building-visualizer";
import TestimonialSection from "@/components/TestimonialSection";
import ClientOnlyBuildingVisualizer from "@/components/client-only-building-visualizer";
export default function Home() {
  const testimonials = [
    {
      name: "عبدالله السبيعي",
      jobTitle: "مالك مبنى تجاري",
      comment:
        "طلبت تركيب كلادينج للمبنى، والنتيجة كانت مذهلة. تشطيب راقٍ وجودة ممتازة.",
      rating: 5,
    },
    {
      name: "نورة الزهراني",
      jobTitle: "مهندسة تصميم داخلي",
      comment:
        "الكلادينج أعطى المبنى طابع عصري وأنيق. أنصح بالتعامل مع هذا الفريق الرائع.",
      rating: 5,
    },
    {
      name: "خالد الشهراني",
      jobTitle: "مقاول مشاريع",
      comment:
        "الكلادينج تم تركيبه باحترافية عالية. الدقة في التفاصيل والالتزام بالمواعيد كانت ممتازة.",
      rating: 4,
    },
    {
      name: "أمينة العتيبي",
      jobTitle: "مالكة عيادة تجميل",
      comment: "كل من يشاهد الواجهة يسأل عن الكلادينج! شكل جميل وجودة مبهرة.",
      rating: 5,
    },
    {
      name: "بدر الحربي",
      jobTitle: "صاحب مؤسسة بناء",
      comment:
        "تعاملت مع عدة شركات لكن تنفيذ الكلادينج من هذه الشركة كان الأفضل.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      <main>
        <HeroSection
          images={[
            "/cladding/aluminiumum.jpg",
            "/cladding/c-1.webp",
            "/cladding/c-5.jpg",
          ]}
          badgeText={"    مقاول تركيب واجهات في الرياض     "}
          headingLines={["تركيب", "كلادينج", "عصرية"]}
          description={"تعكس فخامة مشروعك"}
        />
        <ServicesSection />
        <ProjectsShowcase />
        <TechSpecs />
        <TestimonialSection testimonials={testimonials} />
        <ClientOnlyBuildingVisualizer />
      </main>
    </div>
  );
}
