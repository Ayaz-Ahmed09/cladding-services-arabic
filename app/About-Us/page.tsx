"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Target, Building2, Users, Layers2 } from "lucide-react";
import Image from "next/image";

export default function AboutUsPage() {
  const highlights = [
    {
      icon: Building2,
      title: "من نحن",
      description:
        "نحن مؤسسة حروف الذهب، مركز متكامل لتوريد وتركيب حلول الإعلانات والكلادينج والحروف البارزة في المملكة العربية السعودية، بخبرة تمتد لأكثر من 15 عامًا. نعمل كموزّع ومصنّع ومركّب لاحتياجات مختلف القطاعات التجارية والصناعية.",
    },
    {
      icon: Target,
      title: "رؤيتنا",
      description:
        "نهدف إلى أن نكون الخيار الأول في مجال خدمات الإعلانات والكلادينج في المملكة، من خلال تقديم منتجات مبتكرة عالية الجودة، وتنفيذ مشاريع احترافية تلبي أعلى معايير السوق المحلي والدولي.",
    },
    {
      icon: Users,
      title: "علاقتنا بالعملاء",
      description:
        "نحن نؤمن بأن نجاحنا ينبع من رضا عملائنا، لذلك نولي اهتمامًا كبيرًا لكل عميل، ونلتزم بالجودة والموعد المحدد، ونوفر استشارات فنية وحلولًا مخصصة تلائم متطلباتهم.",
    },
    {
      icon: Lightbulb,
      title: "ماذا نقدم",
      description:
        "نقدّم خدمات متكاملة تشمل تصميم وتنفيذ واجهات الكلادينج، حروف بارزة ثلاثية الأبعاد، لوحات إعلانية، خدمات صيانة دورية، وتنفيذ مشاريع بمقاييس عالمية بأيدي فريق سعودي محترف.",
    },
  ];

  return (
    <section className="relative py-32 px-4 md:px-10 overflow-hidden bg-white text-black">
      {/* Subtle Gray Texture */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
        repeating-linear-gradient(
          45deg,
          rgba(128, 128, 128, 0.05),
          rgba(128, 128, 128, 0.05) 1px,
          transparent 6px,
          transparent 20px
        ),
        repeating-linear-gradient(
          -45deg,
          rgba(128, 128, 128, 0.05),
          rgba(128, 128, 128, 0.05) 1px,
          transparent 6px,
          transparent 20px
        )
      `,
          backgroundSize: "60px 60px",
          backdropFilter: "blur(2px)",
          WebkitBackdropFilter: "blur(2px)",
        }}
      ></div>
      <div className="max-w-7xl mx-auto relative z-10">
        {/* ✅ Title + Intro */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white px-6 py-2 rounded-full text-sm font-bold shadow-md">
            <Layers2 className="w-5 h-5" />
            <span>من نحن</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-[var(--dark)] mt-6 mb-6">
            <span className="block">الاحترافية والابتكار</span>
            <span className="text-gradient">في كل مشروع ننفذه</span>
          </h1>
          <p className="text-lg md:text-xl text-[var(--dark)]/70 font-light leading-relaxed max-w-3xl mx-auto mb-10">
            مؤسسة رائدة متخصصة في تنفيذ حلول الإعلان والديكور الخارجي باستخدام
            الكلادينج والحروف البارزة. نعمل على تحويل أفكار العملاء إلى واقع
            ملموس بتصاميم مبتكرة وتنفيذ دقيق بأعلى جودة.
          </p>

          {/* ✅ 25 Years Legacy */}
          <div className="space-y-4 text-[var(--dark)] text-lg leading-relaxed font-light max-w-4xl mx-auto px-4 sm:px-0">
            <p>
              على مدى ما يقارب{" "}
              <span className="font-bold text-[var(--primary)]">25 عامًا</span>،
              كانت جولدن ليترز علامة مميزة في عالم الإعلانات والديكور الخارجي في
              المملكة. من بداية متواضعة إلى اسم يُشار إليه بالبنان، بنينا سمعتنا
              بثقة، جودة، ومشاريع ناجحة غيّرت واجهات وأسقف وشوارع كاملة.
            </p>
            <p>
              سنوات من الخبرة علمتنا أن كل مشروع له قصته الخاصة، ونحن نعرف كيف
              نستمع لها ونجعلها تُحكى بصريًا من خلال تصاميمنا وتنفيذنا الدقيق.
              نحن لا نكرر الأفكار، بل نبتكر ما يعكس هوية كل عميل وطموحه.
            </p>
          </div>
        </div>

        {/* ✅ Grid of Highlights */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <Card
              key={item.title}
              className="border-0 bg-white/80 backdrop-blur-md hover:shadow-2xl transition-all duration-500 group cursor-pointer overflow-hidden"
            >
              <CardContent className="p-6 text-center relative">
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-md">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[var(--dark)] mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--dark)]/70 leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* ✅ How We Work Section */}
        <div className="mt-32 mb-32 max-w-5xl mx-auto px-4 sm:px-0">
          <h2 className="text-3xl font-extrabold text-[var(--dark)] text-center mb-8">
            كيف نتعامل مع كل مشروع؟
          </h2>
          <div className="space-y-6 text-[var(--dark)] text-lg leading-relaxed font-light">
            <p>
              كل مشروع جديد يبدأ بجلسة استماع وتحليل. نحن نستفسر، نناقش، ونفهم
              التفاصيل الدقيقة لرؤية العميل، والمكان، والجمهور المستهدف.
            </p>
            <p>
              بعد ذلك، يبدأ فريقنا الهندسي والتصميمي بوضع خطة متكاملة، تشمل
              التصميم الأولي، اختيار المواد، دراسة الموقع، وتقديم نموذج مقترح
              يحاكي النتيجة النهائية.
            </p>
            <p>
              نحرص على الالتزام التام بالمعايير الهندسية والفنية، سواء في الحروف
              البارزة أو الكلادينج أو التركيبات الخاصة. التنفيذ يتم بإشراف مباشر
              من فريق سعودي بخبرة ميدانية قوية.
            </p>
            <p>
              وبعد التسليم، لا ينتهي دورنا. نوفر دعمًا فنيًا مستمرًا، وصيانة عند
              الحاجة، لأننا نؤمن أن ثقة العميل لا تُبنى فقط بالنتيجة، بل
              بالاستمرارية.
            </p>
          </div>
        </div>

        {/* ✅ Team Image */}
        <div className="mb-24 flex justify-center">
          <Image
            src="/about-us/team.webp"
            alt="فريق العمل السعودي"
            loading="eager"
            width={900}
            height={600}
            className="rounded-3xl shadow-xl object-cover w-full max-w-5xl"
            priority
          />
        </div>

        {/* ✅ Final Company Overview */}
        <div className="space-y-6 max-w-5xl mx-auto text-[var(--dark)] text-lg leading-relaxed font-light px-4 sm:px-0">
          <p>
            نحن في{" "}
            <span className="font-bold text-[var(--primary)]">جولدن ليترز</span>{" "}
            نمتلك خبرة تتجاوز <span className="font-bold">15 عامًا</span> في
            تقديم خدمات احترافية تشمل{" "}
            <span className="font-bold">تنفيذ الكلادينج</span> الخارجي والداخلي،{" "}
            <span className="font-bold">الحروف البارزة</span> ثلاثية الأبعاد
            والمضيئة، وتصميم وتنفيذ{" "}
            <span className="font-bold">الإعلانات الخارجية</span> بجودة عالية.
          </p>

          <p>
            نستخدم أفضل المواد والتقنيات الحديثة في تنفيذ المشاريع، مع الالتزام
            الصارم بالجودة والدقة في التفاصيل. يتم تنفيذ كل مشروع تحت إشراف
            مباشر من فريق فني محترف.
          </p>

          <p>
            نقدم حلولاً متكاملة تناسب احتياجات الشركات والمطاعم والمعارض
            والمؤسسات التجارية، بدءًا من
            <span className="font-bold"> التصميم</span> وحتى{" "}
            <span className="font-bold">التركيب النهائي</span> على أرض الواقع.
          </p>

          <p>
            رؤيتنا هي أن نكون الرواد في مجال{" "}
            <span className="font-bold">
              حلول اللوحات الإعلانية والديكور الخارجي
            </span>{" "}
            في المملكة العربية السعودية، من خلال الابتكار المستمر وتقديم خدمات
            تفوق توقعات العملاء.
          </p>

          <p>
            نعتز بثقة شركائنا، ونعمل على بناء علاقات طويلة الأمد معهم من خلال
            الالتزام بالمواعيد والدقة والشفافية.
          </p>
        </div>
      </div>
    </section>
  );
}
