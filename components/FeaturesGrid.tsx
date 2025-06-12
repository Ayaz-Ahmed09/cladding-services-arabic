import { Shield, Zap, Award, Eye } from "lucide-react";

const features = [
  {
    icon: Shield,
    text: "ضمان مدى الحياة",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Zap,
    text: "تنفيذ في وقت قياسي",
    color: "from-yellow-500 to-orange-500",
  },
  { icon: Award, text: "جوائز عالمية", color: "from-purple-500 to-pink-500" },
  { icon: Eye, text: "تصاميم حصرية", color: "from-blue-500 to-cyan-500" },
];

export default function FeaturesGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-full sm:max-w-xl">
      {features.map(({ icon: Icon, text, color }, i) => (
        <div
          key={i}
          className="group rounded-xl sm:rounded-2xl p-4 sm:p-6 feature-card cursor-pointer"
        >
          <div className="flex items-center gap-3 sm:gap-4">
            <div
              className={`w-10 sm:w-14 h-10 sm:h-14 bg-gradient-to-br ${color} rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg`}
            >
              <Icon className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
            </div>
            <span className="font-semibold sm:font-bold text-gray-400 group-hover:text-[var(--accent)] transition-colors duration-300 text-sm sm:text-lg">
              {text}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
