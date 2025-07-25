"use client";

import { Mail, MapPin, Phone, MessageSquare } from "lucide-react";

export default function ContactUsPage() {
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
              rgba(128, 128, 128, 0.05) 2px,
              transparent 6px,
              transparent 20px
            ),
            repeating-linear-gradient(
              -45deg,
              rgba(128, 128, 128, 0.05),
              rgba(128, 128, 128, 0.05) 2px,
              transparent 6px,
              transparent 20px
            )
          `,
          backgroundSize: "60px 60px",
          backdropFilter: "blur(2px)",
          WebkitBackdropFilter: "blur(2px)",
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        {/* ✅ Heading */}
        <h2 className="text-4xl md:text-6xl font-black text-[var(--dark)] mb-4">
          تواصل معنا
        </h2>
        <p className="text-lg md:text-xl text-[var(--dark)]/70 font-light max-w-2xl mx-auto mb-16">
          نسعد بخدمتكم والرد على استفساراتكم عبر وسائل التواصل المختلفة. لا
          تترددوا في التواصل معنا للحصول على استشارة أو عرض سعر مجاني.
        </p>

        {/* ✅ Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Phone */}
          <a
            href="tel:+966580157728"
            className="bg-white/90 backdrop-blur shadow-md p-6 rounded-2xl text-center transition-all hover:shadow-2xl hover:scale-[1.02] duration-200 cursor-pointer block"
          >
            <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-full shadow-md">
              <Phone className="text-white w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-[var(--dark)] mb-1">
              الهاتف
            </h4>
            <p className="text-[var(--dark)]/70 text-sm">+966580157728</p>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/966580157728"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/90 backdrop-blur shadow-md p-6 rounded-2xl text-center transition-all hover:shadow-2xl hover:scale-[1.02] duration-200 cursor-pointer block"
          >
            <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-green-500 to-green-700 rounded-full shadow-md">
              <MessageSquare className="text-white w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-[var(--dark)] mb-1">
              واتساب
            </h4>
            <p className="text-[var(--dark)]/70 text-sm">+966580157728</p>
          </a>

          {/* Email */}
          <a
            href="mailto:goldenletter1@gmail.com"
            className="bg-white/90 backdrop-blur shadow-md p-6 rounded-2xl text-center transition-all hover:shadow-2xl hover:scale-[1.02] duration-200 cursor-pointer block"
          >
            <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-700 rounded-full shadow-md">
              <Mail className="text-white w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-[var(--dark)] mb-1">
              البريد الإلكتروني
            </h4>
            <p className="text-[var(--dark)]/70 text-sm break-words">
              goldenletter1@gmail.com
            </p>
          </a>

          {/* Location */}
          <a
            href="https://www.google.com/maps?q=24.6311265,46.7359748"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/90 backdrop-blur shadow-md p-6 rounded-2xl text-center transition-all hover:shadow-2xl hover:scale-[1.02] duration-200 cursor-pointer block"
          >
            <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-pink-500 to-rose-700 rounded-full shadow-md">
              <MapPin className="text-white w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-[var(--dark)] mb-1">
              الموقع
            </h4>
            <p className="text-[var(--dark)]/70 text-sm">
              مجمع وسط التجاري مقابل سالم زجاج, الرياض 12662، المملكة العربية
              السعودية
            </p>
          </a>
        </div>

        {/* ✅ Embedded Google Map */}
        <div className="rounded-3xl overflow-hidden shadow-xl h-[450px] w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3626.784058026829!2d46.73597480000001!3d24.631126500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f05c46f064845%3A0xaef7cdb6d50e3220!2sGolden%20Letters%20Advertisment!5e0!3m2!1sen!2s!4v1749721812542!5m2!1sen!2s"
            loading="lazy"
            title="Google Maps location of our office"
            className="w-full h-full border-0"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
