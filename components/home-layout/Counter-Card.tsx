// "use client";

// import { useEffect, useRef, useState } from "react";
// import { useInView } from "framer-motion";

// const counters = [
//   {
//     value: 250,
//     prefix: "+",
//     label: " مشروع مكتمل",
//   },
//   {
//     value: 10,
//     prefix: "+",
//     label: " سنوات خبرة",
//   },
//   {
//     value: 100,
//     prefix: "+",
//     label: " عميل راضٍ",
//   },
// ];

// const CounterCard = ({
//   value,
//   label,
//   prefix,
//   start,
// }: {
//   value: number;
//   label: string;
//   prefix: string;
//   start: boolean;
// }) => {
//   const [display, setDisplay] = useState(0);

//   useEffect(() => {
//     if (!start) return;

//     let startTime: number | null = null;
//     const duration = 2000; // 2 seconds

//     const animate = (timestamp: number) => {
//       if (!startTime) startTime = timestamp;
//       const progress = timestamp - startTime;
//       const ratio = Math.min(progress / duration, 1);
//       setDisplay(Math.floor(ratio * value));
//       if (progress < duration) requestAnimationFrame(animate);
//     };

//     requestAnimationFrame(animate);
//   }, [start, value]);

//   return (
//     <div className="glass-navbar w-full md:w-1/3 p-6 rounded-2xl text-center shadow-xl bg-gradient-to-bl from-black/10 to-gray-300/20">
//       <span className="block text-4xl md:text-5xl font-bold text-[var(--primary)] number-display">
//         {prefix}
//         {display}
//       </span>
//       <p className="mt-2 text-[var(--dark)] text-lg md:text-xl font-semibold">
//         {label}
//       </p>
//     </div>
//   );
// };

// export default function AnimatedCounter() {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <section
//       ref={ref}
//       className="py-20 relative z-10"
//       style={{
//         background: "linear-gradient(to bottom right, #fffaf3, #f0f0f0)",
//       }}
//     >
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--dark)] mb-8">
//           إنجازاتنا في
//         </h2>
//         <div className="flex flex-col md:flex-row justify-center items-center gap-8">
//           {counters.map((counter, idx) => (
//             <CounterCard
//               key={idx}
//               value={counter.value}
//               prefix={counter.prefix}
//               label={counter.label}
//               start={isInView}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
/// code  22222222222222222222222222222

"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Building2, Clock3, Smile, ShieldCheck } from "lucide-react";
import { Award } from "lucide-react";
const counters = [
  {
    value: 250,
    prefix: "+",
    label: "مشروع مكتمل",
    icon: Building2,
    color: "#d4a574",
  },
  {
    value: 10,
    prefix: "+",
    label: "سنوات خبرة",
    icon: Clock3,
    color: "#5e9273",
  },
  {
    value: 100,
    prefix: "+",
    label: "عميل راضٍ",
    icon: Smile,
    color: "#cd853f",
  },
  {
    value: 50,
    prefix: "+",
    label: "مشاريع مميزة",
    icon: ShieldCheck,
    color: "#8b4513",
  },
];

const CounterCard = ({
  value,
  label,
  prefix,
  icon: Icon,
  color,
  start,
}: {
  value: number;
  label: string;
  prefix: string;
  icon: any;
  color: string;
  start: boolean;
}) => {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    const duration = 2000;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const ratio = Math.min(progress / duration, 1);
      setDisplay(Math.floor(ratio * value));
      if (progress < duration) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [start, value]);

  return (
    <div className="w-full sm:w-[48%] lg:w-[22%] p-5 rounded-2xl shadow-md bg-white/60 backdrop-blur-md flex items-center gap-4 hover:shadow-xl transition duration-300">
      {/* Icon */}
      <div
        className="w-16 h-16 rounded-xl flex items-center justify-center"
        style={{
          backgroundColor: color,
        }}
      >
        <Icon className="w-8 h-8 text-white" />
      </div>

      {/* Count and label */}
      <div className="text-right">
        <p className="text-3xl font-bold text-[var(--primary)] leading-tight">
          {prefix}
          {display}
        </p>
        <p className="text-[var(--dark)] text-sm font-semibold mt-1">{label}</p>
      </div>
    </div>
  );
};

export default function AnimatedCounter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-20 relative z-10  overflow-hidden bg-white"
    >
      {/* Background texture */}
      {/* <div className="absolute inset-0 opacity-5 z-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(360deg, white 0.8px, transparent 1px),
             
              linear-gradient( black 1px, transparent 1px)
            `,
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div> */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white px-8 py-3 rounded-full text-sm font-bold shadow-lg">
          <Award className="w-5 h-5" />
          <span>أرقام تُثبت التميّز والاحترافية</span>
        </div>
      </div>
      <div className="relative z-10 container mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-black text-[var(--dark)] mb-8 text-center">
          <span className="block">إنجازاتنا في </span>
          <span className="text-gradient">عالم الواجهات والحلول الإعلانية</span>
        </h2>
        <p className="text-xl text-[var(--dark)]/70 max-w-4xl mx-auto leading-relaxed font-light mb-12 text-center">
          تفخر شركتنا بإنجازات ملموسة تعكس التزامنا بالجودة والابتكار، من مشاريع
          مكتملة إلى سنوات من الخبرة ورضا العملاء في جميع أنحاء المملكة.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {counters.map((counter, idx) => (
            <CounterCard
              key={idx}
              value={counter.value}
              prefix={counter.prefix}
              label={counter.label}
              icon={counter.icon}
              color={counter.color}
              start={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
