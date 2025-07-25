"use client";
import { motion } from "framer-motion";
import { CheckCircle, Award, Shield, Globe } from "lucide-react";

const reasons = [
  {
    title: "الخبرة والاحترافية",
    description:
      "لدينا فريق متمرس ذو خبرة طويلة في تنفيذ المشاريع باحترافية عالية وجودة متميزة.",
  },
  {
    title: "الجودة في التنفيذ",
    description:
      "نلتزم باستخدام أفضل المواد والمواصفات الفنية لضمان نتائج نهائية فائقة الجودة.",
  },
  {
    title: "الابتكار والتصميم",
    description:
      "نقدم حلولاً إبداعية تجمع بين الحداثة والجمالية بما يتناسب مع هوية العميل.",
  },
  {
    title: "الالتزام بالمواعيد",
    description:
      "نولي أهمية كبيرة للوقت ونلتزم بتسليم جميع المشاريع في الوقت المحدد بدون تأخير.",
  },
];

const certifications = [
  { title: "ISO 9001:2015", desc: "إدارة الجودة", icon: Award },
  { title: "OSHA Standards", desc: "معايير السلامة", icon: Shield },
  { title: "Green Building", desc: "البناء المستدام", icon: Globe },
  { title: "CE Marking", desc: "المطابقة الأوروبية", icon: CheckCircle },
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-20 px-4 bg-white relative overflow-hidden z-0">
      {/* ✅ Texture background like others */}
      {/* <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(30deg, black 1px, transparent 1px),
              linear-gradient(150deg, black 2px, transparent 2px),
              linear-gradient(90deg, black 3px, transparent 3px)
            `,
            backgroundSize: "20px 20px",
          }}
        />
      </div> */}

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* ✅ Heading Tagline */}
        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white px-8 py-3 rounded-full text-sm font-bold mb-8 shadow-lg">
          <CheckCircle className="w-5 h-5" />
          <span>نقاط تميزنا</span>
        </div>

        {/* ✅ Main Heading */}
        <h2 className="text-4xl md:text-6xl font-black text-[var(--dark)] mb-8">
          <span className="block">لماذا نحن؟</span>
          <span className="text-gradient">مميزات تجعلنا الخيار الأفضل</span>
        </h2>

        {/* ✅ Paragraph */}
        <p className="text-xl text-[var(--dark)]/70 max-w-4xl mx-auto leading-relaxed font-light text-center mb-16">
          نحن شركة رائدة في تنفيذ مشاريع الكلادينج، الإعلانات، والحروف البارزة.
          بخبرة تمتد لأكثر من عشر سنوات، نفخر بأننا أنجزنا العديد من المشاريع
          الناجحة مع شركات ومؤسسات كبرى في المملكة.
          <span className="block font-bold text-[var(--primary)] mt-4">
            التزامنا بالجودة والتسليم في الوقت المحدد هو ما يجعلنا الخيار الأول.
          </span>
        </p>

        {/* ✅ Reasons Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 border border-[var(--primary)] hover:shadow-xl transition-all duration-300 text-right"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="flex items-center justify-end mb-4 text-[var(--primary)]">
                <span className="ml-2 text-xl font-semibold">
                  {reason.title}
                </span>
                <CheckCircle size={24} />
              </div>
              <p className="text-[var(--dark)] text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ✅ Certification Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {certifications.map(({ title, desc, icon: Icon }, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl border border-[var(--accent)] p-6 shadow-md hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="flex items-center justify-center mb-4 text-[var(--accent)]">
                <Icon size={32} />
              </div>
              <h3 className="text-lg font-bold text-[var(--primary)] mb-1">
                {title}
              </h3>
              <p className="text-sm text-[var(--dark)]/70">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
