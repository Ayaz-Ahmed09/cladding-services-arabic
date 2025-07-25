"use client";

import { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Building } from "./Building";
import { claddingMaterials } from "@/lib/data/claddingMaterials";
import { Building2, RotateCcw, Download, Share2, ClubIcon } from "lucide-react";
import LoadingSpinner from "./LoadingSipnner";
import CustomEnvironment from "@/lib/data/CustomEnvironment";
import { useInView } from "react-intersection-observer";

export default function BuildingVisualizer() {
  const [selectedMaterial, setSelectedMaterial] =
    useState<keyof typeof claddingMaterials>("glass");
  const [isRotating, setIsRotating] = useState(true);

  const { ref: viewerRef, inView: viewerInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleDownload = () => {
    alert("سيتم تحميل النموذج ثلاثي الأبعاد قريباً!");
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "نموذج ثلاثي الأبعاد - الكسوة المتقدمة",
          text: `شاهد هذا النموذج ثلاثي الأبعاد للمبنى مع ${claddingMaterials[selectedMaterial].name}`,
          url: window.location.href,
        })
        .catch(() => {
          alert("حدث خطأ أثناء مشاركة الرابط.");
        });
    } else if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard
        .writeText(window.location.href)
        .then(() => {
          alert("تم نسخ الرابط!");
        })
        .catch(() => {
          alert("حدث خطأ أثناء نسخ الرابط. الرجاء المحاولة مرة أخرى.");
        });
    } else {
      alert("المتصفح لا يدعم النسخ أو المشاركة.");
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, var(--primary) 2px, transparent 2px)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white px-8 py-3 rounded-full text-sm font-bold mb-8 shadow-lg">
            <ClubIcon className="w-5 h-5" />
            <span>المصور ثلاثي الأبعاد</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-[var(--dark)] mb-8">
            <span className="block">تصور مبناك</span>
            <span className="text-gradient">بتقنية ثلاثية الأبعاد</span>
          </h2>
          <p className="text-xl text-[var(--dark)]/70 max-w-4xl mx-auto leading-relaxed font-light">
            اكتشف كيف سيبدو مبناك مع خيارات الكسوة المختلفة. تفاعل مع النموذج
            واختر المواد التي تناسب رؤيتك
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="overflow-hidden border-0 shadow-2xl bg-white/80 backdrop-blur-sm rounded-xl">
              <div className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] p-6 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Building2 className="w-6 h-6" />
                    <div>
                      <h3 className="text-xl font-bold">
                        مصور المباني التفاعلي
                      </h3>
                      <p className="text-sm opacity-90">
                        اختر نوع الكسوة وشاهد النتيجة فوراً
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      className="border border-white/30 text-white hover:bg-white/20 p-2 rounded"
                      onClick={() => setIsRotating(!isRotating)}
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                    <button
                      className="border border-white/30 text-white hover:bg-white/20 p-2 rounded"
                      onClick={handleDownload}
                    >
                      <Download className="w-4 h-4" />
                    </button>
                    <button
                      className="border border-white/30 text-white hover:bg-white/20 p-2 rounded"
                      onClick={handleShare}
                    >
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
              <div ref={viewerRef} className="w-full h-[500px]">
                {viewerInView ? (
                  <Suspense fallback={<LoadingSpinner />}>
                    <Canvas
                      camera={{ position: [8, 6, 8], fov: 50 }}
                      className="rounded-b-xl"
                    >
                      <ambientLight intensity={0.6} />
                      <directionalLight position={[10, 10, 5]} intensity={1} />
                      <CustomEnvironment />
                      <Building
                        material={selectedMaterial}
                        isRotating={isRotating}
                      />
                      <OrbitControls
                        autoRotate={isRotating}
                        enablePan={false}
                      />
                    </Canvas>
                  </Suspense>
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <LoadingSpinner />
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {Object.entries(claddingMaterials).map(
              ([key, mat]: [
                keyof typeof claddingMaterials,
                (typeof claddingMaterials)[keyof typeof claddingMaterials]
              ]) => (
                <button
                  key={key}
                  onClick={() =>
                    setSelectedMaterial(key as keyof typeof claddingMaterials)
                  }
                  className={`block w-full p-4 text-right rounded shadow hover:bg-[var(--primary)]/10 border transition-all duration-300 text-[var(--dark)] ${
                    selectedMaterial === key
                      ? "bg-[var(--primary)]/20 border-[var(--primary)]"
                      : "bg-white border-gray-200"
                  }`}
                >
                  <h4 className="font-bold text-lg">{mat.name}</h4>
                  <p className="text-sm text-[var(--dark)]/70">
                    {mat.description}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1 text-xs text-[var(--dark)]/50">
                    {mat.features.map((f, i) => (
                      <span
                        key={i}
                        className="bg-[var(--accent)]/10 px-2 py-1 rounded-full"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
