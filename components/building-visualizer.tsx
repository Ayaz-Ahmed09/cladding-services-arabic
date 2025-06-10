"use client";

import { Suspense, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, Html } from "@react-three/drei";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CuboidIcon as Cube,
  Palette,
  RotateCcw,
  Download,
  Share2,
  Eye,
  Layers,
  Building2,
  Sparkles,
  Camera,
} from "lucide-react";
import * as THREE from "three";

// Cladding material configurations
const claddingMaterials = {
  glass: {
    name: "الواجهات الزجاجية",
    nameEn: "Glass Facade",
    color: "#87CEEB",
    metalness: 0.1,
    roughness: 0.1,
    transmission: 0.9,
    opacity: 0.3,
    price: "450 ريال/م²",
    features: [
      "عزل حراري متقدم",
      "شفافية عالية",
      "مقاومة الأشعة فوق البنفسجية",
      "سهولة التنظيف",
    ],
    description: "واجهات زجاجية حديثة بتقنيات العزل المتطورة",
  },
  metal: {
    name: "الكسوة المعدنية",
    nameEn: "Metal Cladding",
    color: "#C0C0C0",
    metalness: 0.9,
    roughness: 0.2,
    transmission: 0,
    opacity: 1,
    price: "320 ريال/م²",
    features: ["مقاومة التآكل", "متانة عالية", "تشطيبات متنوعة", "صيانة قليلة"],
    description: "كسوة معدنية عالية الجودة مقاومة للعوامل الجوية",
  },
  stone: {
    name: "الواجهات الحجرية",
    nameEn: "Stone Facade",
    color: "#D2B48C",
    metalness: 0.1,
    roughness: 0.8,
    transmission: 0,
    opacity: 1,
    price: "280 ريال/م²",
    features: [
      "مظهر طبيعي فاخر",
      "عزل طبيعي",
      "مقاومة الطقس",
      "عمر افتراضي طويل",
    ],
    description: "أحجار طبيعية فاخرة للمظهر الكلاسيكي الأنيق",
  },
  composite: {
    name: "الأنظمة المركبة",
    nameEn: "Composite Systems",
    color: "#8B4513",
    metalness: 0.3,
    roughness: 0.4,
    transmission: 0,
    opacity: 1,
    price: "380 ريال/م²",
    features: ["تقنيات مدمجة", "خفة الوزن", "مرونة التصميم", "كفاءة الطاقة"],
    description: "أنظمة مركبة مبتكرة تجمع بين الجمال والوظائف المتقدمة",
  },
  wood: {
    name: "الكسوة الخشبية",
    nameEn: "Wood Cladding",
    color: "#8B4513",
    metalness: 0.0,
    roughness: 0.9,
    transmission: 0,
    opacity: 1,
    price: "350 ريال/م²",
    features: ["مظهر دافئ طبيعي", "عزل حراري", "صديق للبيئة", "تصاميم متنوعة"],
    description: "كسوة خشبية طبيعية للمظهر الدافئ والمستدام",
  },
};

// 3D Building Component
function Building({ material = "glass", rotation = [0, 0, 0] }) {
  const buildingRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (buildingRef.current) {
      buildingRef.current.rotation.y += 0.002;
    }
  });

  const materialConfig = claddingMaterials[material];

  const buildingMaterial = new THREE.MeshPhysicalMaterial({
    color: materialConfig.color,
    metalness: materialConfig.metalness,
    roughness: materialConfig.roughness,
    transmission: materialConfig.transmission,
    opacity: materialConfig.opacity,
    transparent: materialConfig.transmission > 0,
    clearcoat: 0.3,
    clearcoatRoughness: 0.1,
  });

  return (
    <group ref={buildingRef} rotation={rotation}>
      {/* Main Building Structure */}
      <mesh
        position={[0, 2, 0]}
        material={buildingMaterial}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
        scale={hovered ? 1.02 : 1}
      >
        <boxGeometry args={[3, 4, 2]} />
      </mesh>

      {/* Building Floors */}
      {[...Array(8)].map((_, i) => (
        <mesh
          key={i}
          position={[0, i * 0.5 + 0.25, 0]}
          material={buildingMaterial}
        >
          <boxGeometry args={[3.1, 0.1, 2.1]} />
        </mesh>
      ))}

      {/* Windows Grid */}
      {[...Array(6)].map((_, floor) =>
        [...Array(4)].map((_, window) => (
          <mesh
            key={`${floor}-${window}`}
            position={[-1.2 + window * 0.8, 0.5 + floor * 0.6, 1.01]}
          >
            <planeGeometry args={[0.6, 0.4]} />
            <meshPhysicalMaterial
              color="#1a1a2e"
              transmission={0.8}
              opacity={0.3}
              transparent
            />
          </mesh>
        ))
      )}

      {/* Base/Foundation */}
      <mesh position={[0, -0.2, 0]}>
        <boxGeometry args={[3.5, 0.4, 2.5]} />
        <meshStandardMaterial color="#666666" />
      </mesh>

      {/* Roof */}
      <mesh position={[0, 4.3, 0]}>
        <boxGeometry args={[3.2, 0.2, 2.2]} />
        <meshStandardMaterial color="#444444" />
      </mesh>

      {/* Material Label */}
      <Html position={[0, 5, 0]} center>
        <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 shadow-lg border border-[var(--primary)]/20">
          <div className="text-sm font-bold text-[var(--dark)] english-text">
            {materialConfig.nameEn}
          </div>
          <div className="text-xs text-[var(--accent)]">
            {materialConfig.name}
          </div>
        </div>
      </Html>
    </group>
  );
}

// Loading Component
function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-[var(--primary)] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-[var(--dark)] font-medium">
          جاري تحميل النموذج ثلاثي الأبعاد...
        </p>
      </div>
    </div>
  );
}

export default function BuildingVisualizer() {
  const [selectedMaterial, setSelectedMaterial] = useState("glass");
  const [isRotating, setIsRotating] = useState(true);
  const [viewMode, setViewMode] = useState("3d");

  const handleMaterialChange = (material) => {
    setSelectedMaterial(material);
  };

  const handleDownload = () => {
    // Simulate download functionality
    alert("سيتم تحميل النموذج ثلاثي الأبعاد قريباً!");
  };

  const handleShare = () => {
    // Simulate share functionality
    if (navigator.share) {
      navigator.share({
        title: "نموذج ثلاثي الأبعاد - الكسوة المتقدمة",
        text: `شاهد هذا النموذج ثلاثي الأبعاد للمبنى مع ${claddingMaterials[selectedMaterial].name}`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("تم نسخ الرابط!");
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 relative overflow-hidden">
      {/* Background Elements */}
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
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white px-8 py-3 rounded-full text-sm font-bold mb-8 shadow-lg">
            <Cube className="w-5 h-5" />
            <span>المصور ثلاثي الأبعاد</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-[var(--dark)] mb-8">
            <span className="block">تصور مبناك</span>
            <span className="text-gradient">بتقنية ثلاثية الأبعاد</span>
          </h2>

          <p className="text-xl text-[var(--dark)]/70 max-w-4xl mx-auto leading-relaxed font-light">
            اكتشف كيف سيبدو مبناك مع خيارات الكسوة المختلفة. تفاعل مع النموذج
            ثلاثي الأبعاد واختر المواد التي تناسب رؤيتك
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* 3D Viewer */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
              <CardContent className="p-0">
                {/* Viewer Header */}
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
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-white/30 text-white hover:bg-white/20"
                        onClick={() => setIsRotating(!isRotating)}
                      >
                        <RotateCcw className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-white/30 text-white hover:bg-white/20"
                        onClick={handleDownload}
                      >
                        <Download className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-white/30 text-white hover:bg-white/20"
                        onClick={handleShare}
                      >
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* 3D Canvas */}
                <div className="h-[500px] bg-gradient-to-br from-sky-100 to-blue-200 relative">
                  <Suspense fallback={<LoadingSpinner />}>
                    <Canvas camera={{ position: [8, 6, 8], fov: 50 }}>
                      <ambientLight intensity={0.6} />
                      <directionalLight
                        position={[10, 10, 5]}
                        intensity={1}
                        castShadow
                      />
                      <pointLight position={[-10, -10, -10]} intensity={0.3} />

                      <Building material={selectedMaterial} />

                      <OrbitControls
                        enablePan={true}
                        enableZoom={true}
                        enableRotate={true}
                        autoRotate={isRotating}
                        autoRotateSpeed={1}
                        minDistance={5}
                        maxDistance={20}
                      />

                      <Environment preset="city" />
                    </Canvas>
                  </Suspense>

                  {/* Overlay Controls */}
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                    <Badge className="bg-white/90 text-[var(--dark)] border-0">
                      <Eye className="w-4 h-4 mr-2" />
                      <span className="english-text">عرض تفاعلي 360°</span>
                    </Badge>
                    <Badge className="bg-[var(--accent)] text-white border-0">
                      <Sparkles className="w-4 h-4 mr-2" />
                      {claddingMaterials[selectedMaterial].name}
                    </Badge>
                  </div>
                </div>

                {/* Current Material Info */}
                <div className="p-6 bg-gradient-to-r from-[var(--light)] to-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-bold text-[var(--dark)] mb-1">
                        {claddingMaterials[selectedMaterial].name}
                      </h4>
                      <p className="text-[var(--dark)]/70 text-sm">
                        {claddingMaterials[selectedMaterial].description}
                      </p>
                    </div>
                    <div className="text-left">
                      <div className="text-2xl font-black text-[var(--accent)] number-display">
                        {claddingMaterials[selectedMaterial].price}
                      </div>
                      <div className="text-sm text-[var(--dark)]/70">
                        السعر التقديري
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Material Selection Panel */}
          <div className="space-y-6">
            <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-xl flex items-center justify-center">
                    <Palette className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--dark)]">
                      خيارات الكسوة
                    </h3>
                    <p className="text-sm text-[var(--dark)]/70">
                      اختر نوع المادة
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {Object.entries(claddingMaterials).map(([key, material]) => (
                    <button
                      key={key}
                      onClick={() => handleMaterialChange(key)}
                      className={`w-full p-4 rounded-xl border-2 transition-all duration-300 text-right ${
                        selectedMaterial === key
                          ? "border-[var(--accent)] bg-[var(--accent)]/10 shadow-lg"
                          : "border-gray-200 hover:border-[var(--primary)] hover:bg-[var(--primary)]/5"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-8 h-8 rounded-lg border-2 border-white shadow-md"
                          style={{ backgroundColor: material.color }}
                        ></div>
                        <div className="flex-1">
                          <div className="font-bold text-[var(--dark)] text-sm">
                            {material.name}
                          </div>
                          <div className="text-xs text-[var(--dark)]/70 number-display">
                            {material.price}
                          </div>
                        </div>
                        {selectedMaterial === key && (
                          <div className="w-6 h-6 bg-[var(--accent)] rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Material Features */}
            <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
              <CardContent className="p-6">
                <h4 className="text-lg font-bold text-[var(--dark)] mb-4 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-[var(--accent)]" />
                  مميزات المادة المختارة
                </h4>
                <ul className="space-y-3">
                  {claddingMaterials[selectedMaterial].features.map(
                    (feature, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-3 text-sm"
                      >
                        <div className="w-2 h-2 bg-[var(--accent)] rounded-full flex-shrink-0"></div>
                        <span className="text-[var(--dark)]/80">{feature}</span>
                      </li>
                    )
                  )}
                </ul>
              </CardContent>
            </Card>

            {/* CTA */}
            {/* <Card className="border-0 shadow-xl bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] text-white">
              <CardContent className="p-6 text-center">
                <Camera className="w-12 h-12 mx-auto mb-4 opacity-80" />
                <h4 className="text-lg font-bold mb-2">أعجبك التصميم؟</h4>
                <p className="text-sm opacity-90 mb-4">
                  احصل على عرض سعر مخصص لمشروعك
                </p>
                <Button className="w-full bg-white text-[var(--primary)] hover:bg-gray-100 font-bold">
                  طلب عرض سعر مجاني
                </Button>
              </CardContent>
            </Card> */}
          </div>
        </div>

        {/* Bottom Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
            <Sparkles className="w-5 h-5 text-[var(--accent)]" />
            <span className="text-[var(--dark)] font-medium">
              تقنية ثلاثية الأبعاد متقدمة لتصور دقيق ومفصل
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
