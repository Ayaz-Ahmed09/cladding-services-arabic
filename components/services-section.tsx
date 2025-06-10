// "use client";

// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import {
//   ArrowLeft,
//   Layers,
//   Shield,
//   Award,
//   Zap,
//   Settings,
//   Wrench,
// } from "lucide-react";

// const services = [
//   {
//     icon: Layers,
//     title: "الكسوة",
//     description:
//       "نقدم أنظمة كسوة خارجية عصرية للمباني، تجمع بين التصميم الجمالي والحماية العالية من العوامل البيئية، مع تشكيلة واسعة من المواد والتشطيبات.",
//     features: [
//       "تصاميم حديثة وأنيقة",
//       "مقاومة للعوامل الجوية",
//       "مواد متعددة وتشطيبات متنوعة",
//       "تركيب سريع وآمن",
//     ],
//     gradient: "from-blue-400 to-cyan-400",
//     bgGradient: "from-blue-50 to-cyan-50",
//   },
//   {
//     icon: Shield,
//     title: "الصلب والزنك",
//     description:
//       "أنظمة واجهات معدنية مصنوعة من الصلب والزنك بتقنيات عالية الجودة، مقاومة للتآكل وتتميز بالصلابة والمتانة مع مظهر عصري جذاب.",
//     features: [
//       "مقاومة عالية للتآكل والصدأ",
//       "تحمل درجات الحرارة القاسية",
//       "عمر افتراضي طويل",
//       "تشطيبات معدنية أنيقة",
//     ],
//     gradient: "from-gray-500 to-slate-600",
//     bgGradient: "from-gray-50 to-slate-50",
//   },
//   {
//     icon: Award,
//     title: "حروف مرفوعة",
//     description:
//       "تنفيذ حروف بارزة ثلاثية الأبعاد بأعلى معايير الجودة والدقة، تعكس هوية علامتك التجارية بشكل مميز وتجذب الأنظار بأسلوب احترافي.",
//     features: [
//       "تصميم مخصص لكل نشاط",
//       "إضاءة خلفية اختيارية",
//       "مواد مقاومة للعوامل الخارجية",
//       "تركيب احترافي دقيق",
//     ],
//     gradient: "from-amber-500 to-orange-500",
//     bgGradient: "from-amber-50 to-orange-50",
//   },
//   {
//     icon: Zap,
//     title: "القطع بالليزر – CNC",
//     description:
//       "تقنية متقدمة للقطع بالليزر والـ CNC لإنتاج أشكال معمارية دقيقة وديكورات معدنية فريدة، مع إمكانيات مخصصة حسب الطلب.",
//     features: [
//       "دقة متناهية في التفاصيل",
//       "تصاميم معمارية معقدة",
//       "إمكانية تخصيص عالية",
//       "تناسب واجهات وديكورات داخلية",
//     ],
//     gradient: "from-purple-500 to-pink-500",
//     bgGradient: "from-purple-50 to-pink-50",
//   },
// ];

// export default function ServicesSection() {
//   return (
//     <section className="py-20 bg-white relative overflow-hidden">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-5">
//         <div
//           className="absolute inset-0"
//           style={{
//             backgroundImage: `radial-gradient(circle at 50% 50%, var(--primary) 1px, transparent 1px)`,
//             backgroundSize: "30px 30px",
//           }}
//         ></div>
//       </div>

//       <div className="container mx-auto px-4 relative">
//         {/* Section Header */}
//         <div className="text-center mb-20">
//           <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white px-8 py-3 rounded-full text-sm font-bold mb-8 shadow-lg">
//             <Layers className="w-5 h-5" />
//             <span>خدماتنا المتخصصة</span>
//           </div>

//           <h2 className="text-4xl md:text-6xl font-black text-[var(--dark)] mb-8">
//             <span className="block">حلول شاملة</span>
//             <span className="text-gradient">لجميع احتياجات الكسوة</span>
//           </h2>

//           <p className="text-xl text-[var(--dark)]/70 max-w-4xl mx-auto leading-relaxed font-light">
//             نقدم مجموعة متكاملة من الخدمات المتخصصة في مجال الكسوة والواجهات، مع
//             التركيز على الجودة والابتكار والالتزام بالمواعيد المحددة
//           </p>
//         </div>

//         {/* Services Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
//           {services.map((service, index) => (
//             <Card
//               key={index}
//               className="service-card group cursor-pointer h-full overflow-hidden"
//             >
//               <CardContent className="p-8 h-full flex flex-col relative">
//                 {/* Background Gradient */}
//                 <div
//                   className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
//                 ></div>

//                 {/* Content */}
//                 <div className="relative z-10 flex-1">
//                   {/* Icon */}
//                   <div
//                     className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}
//                   >
//                     <service.icon className="w-10 h-10 text-white" />
//                   </div>

//                   {/* Title */}
//                   <h3 className="text-2xl font-bold text-[var(--dark)] mb-4 group-hover:text-[var(--accent)] transition-colors duration-300">
//                     {service.title}
//                   </h3>

//                   {/* Description */}
//                   <p className="text-[var(--dark)]/70 mb-6 leading-relaxed font-light">
//                     {service.description}
//                   </p>

//                   {/* Features */}
//                   <ul className="space-y-3 mb-8">
//                     {service.features.map((feature, featureIndex) => (
//                       <li
//                         key={featureIndex}
//                         className="flex items-center gap-3 text-sm text-[var(--dark)]/80"
//                       >
//                         <div className="w-2 h-2 bg-[var(--accent)] rounded-full flex-shrink-0"></div>
//                         <span className="font-medium">{feature}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 {/* CTA */}
//                 <Button
//                   variant="outline"
//                   className="w-full border-2 border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition-all duration-300 group-hover:scale-105 relative z-10 font-bold"
//                 >
//                   استكشف المزيد
//                   <ArrowLeft className="w-4 h-4 mr-2" />
//                 </Button>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         {/* Bottom CTA */}
//         <div className="text-center">
//           <Button
//             size="lg"
//             className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] hover:from-[var(--accent)] hover:to-[var(--secondary)] text-white px-16 py-6 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
//           >
//             احجز استشارة مجانية مع خبرائنا
//             <ArrowLeft className="w-6 h-6 mr-3" />
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Layers,
  Shield,
  Award,
  Zap,
  Settings,
  Wrench,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Layers,
    title: "الكسوة",
    description:
      "نقدم أنظمة كسوة خارجية عصرية للمباني، تجمع بين التصميم الجمالي والحماية العالية من العوامل البيئية، مع تشكيلة واسعة من المواد والتشطيبات.",
    features: [
      "تصاميم حديثة وأنيقة",
      "مقاومة للعوامل الجوية",
      "مواد متعددة وتشطيبات متنوعة",
      "تركيب سريع وآمن",
    ],
    gradient: "from-blue-400 to-cyan-400",
    bgGradient: "from-blue-50 to-cyan-50",
  },
  {
    icon: Shield,
    title: "الصلب والزنك",
    description:
      "أنظمة واجهات معدنية مصنوعة من الصلب والزنك بتقنيات عالية الجودة، مقاومة للتآكل وتتميز بالصلابة والمتانة مع مظهر عصري جذاب.",
    features: [
      "مقاومة عالية للتآكل والصدأ",
      "تحمل درجات الحرارة القاسية",
      "عمر افتراضي طويل",
      "تشطيبات معدنية أنيقة",
    ],
    gradient: "from-gray-500 to-slate-600",
    bgGradient: "from-gray-50 to-slate-50",
  },
  {
    icon: Award,
    title: "حروف مرفوعة",
    description:
      "تنفيذ حروف بارزة ثلاثية الأبعاد بأعلى معايير الجودة والدقة، تعكس هوية علامتك التجارية بشكل مميز وتجذب الأنظار بأسلوب احترافي.",
    features: [
      "تصميم مخصص لكل نشاط",
      "إضاءة خلفية اختيارية",
      "مواد مقاومة للعوامل الخارجية",
      "تركيب احترافي دقيق",
    ],
    gradient: "from-amber-500 to-orange-500",
    bgGradient: "from-amber-50 to-orange-50",
  },
  {
    icon: Zap,
    title: "القطع بالليزر – CNC",
    description:
      "تقنية متقدمة للقطع بالليزر والـ CNC لإنتاج أشكال معمارية دقيقة وديكورات معدنية فريدة، مع إمكانيات مخصصة حسب الطلب.",
    features: [
      "دقة متناهية في التفاصيل",
      "تصاميم معمارية معقدة",
      "إمكانية تخصيص عالية",
      "تناسب واجهات وديكورات داخلية",
    ],
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, var(--primary) 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white px-8 py-3 rounded-full text-sm font-bold mb-8 shadow-lg">
            <Layers className="w-5 h-5" />
            <span>خدماتنا المتخصصة</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-[var(--dark)] mb-8">
            <span className="block">حلول شاملة</span>
            <span className="text-gradient">لجميع احتياجات الكسوة</span>
          </h2>

          <p className="text-xl text-[var(--dark)]/70 max-w-4xl mx-auto leading-relaxed font-light">
            نقدم مجموعة متكاملة من الخدمات المتخصصة في مجال الكسوة والواجهات، مع
            التركيز على الجودة والابتكار والالتزام بالمواعيد المحددة
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className="service-card group cursor-pointer h-full overflow-hidden"
            >
              <CardContent className="p-8 h-full flex flex-col relative">
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>

                {/* Content */}
                <div className="relative z-10 flex-1">
                  {/* Icon */}
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}
                  >
                    <service.icon className="w-10 h-10 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-[var(--dark)] mb-4 group-hover:text-[var(--accent)] transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[var(--dark)]/70 mb-6 leading-relaxed font-light">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-3 text-sm text-[var(--dark)]/80"
                      >
                        <div className="w-2 h-2 bg-[var(--accent)] rounded-full flex-shrink-0"></div>
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col gap-3 relative z-10">
                  {/* WhatsApp Button - for all cards */}
                  <a
                    href="https://wa.me/966500000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold transition duration-300 group-hover:scale-105">
                      تواصل عبر واتساب
                      <MessageCircle className="w-4 h-4 mr-2" />
                    </Button>
                  </a>

                  {/* Extra Buttons only for "حروف مرفوعة" */}
                  {service.title === "حروف مرفوعة" && (
                    <>
                      <Link href="/services/raised-letters" className="w-full">
                        <Button
                          variant="outline"
                          className="w-full border-2 border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition-all duration-300 group-hover:scale-105 font-bold"
                        >
                          استكشف المزيد
                          <ArrowLeft className="w-4 h-4 mr-2" />
                        </Button>
                      </Link>
                      {/* <Button
                        variant="ghost"
                        className="text-[var(--primary)] hover:text-[var(--accent)] underline font-semibold transition duration-300 group-hover:scale-105"
                      >
                        عرض التفاصيل
                      </Button> */}
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        {/* <div className="text-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] hover:from-[var(--accent)] hover:to-[var(--secondary)] text-white px-16 py-6 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              احجز استشارة مجانية مع خبرائنا
              <ArrowLeft className="w-6 h-6 mr-3" />
            </Button>
          </div> */}
      </div>
    </section>
  );
}
