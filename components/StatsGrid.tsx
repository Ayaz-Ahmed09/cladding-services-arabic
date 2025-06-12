"use client";

import { Award, Layers, Star, Shield } from "lucide-react";

const stats = [
  { number: "15+", label: "سنة خبرة", icon: Award },
  { number: "500+", label: "مشروع منجز", icon: Layers },
  { number: "98%", label: "رضا العملاء", icon: Star },
  { number: "24/7", label: "دعم فني", icon: Shield },
];

export default function StatsGrid() {
  return (
    <div className="mt-12 sm:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
      {stats.map(({ icon: Icon, number, label }, i) => (
        <div key={i} className="group">
          <div className="w-16 h-16 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-8 h-8 text-white" />
          </div>
          <div className="text-2xl font-black text-[var(--dark)] number-display">
            {number}
          </div>
          <div className="text-[var(--dark)]/70 text-base font-medium">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}
