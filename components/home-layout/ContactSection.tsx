// "use client";

// import { useState } from "react";
// import { toast } from "sonner";
// import {
//   Phone,
//   Mail,
//   MapPin,
//   MessageCircle,
//   SendHorizonal,
// } from "lucide-react";

// export default function ContactSection() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!formData.name || !formData.email || !formData.message) {
//       toast.error("يرجى تعبئة جميع الحقول");
//       return;
//     }

//     const phone = "966580157728";
//     const text = `👤 الاسم: ${formData.name}%0A📩 البريد: ${formData.email}%0A📝 الرسالة: ${formData.message}`;
//     window.open(`https://wa.me/${phone}?text=${text}`, "_blank");

//     toast.success("تم فتح تطبيق الواتساب لإرسال رسالتك");
//     setFormData({ name: "", email: "", message: "" });
//   };

//   return (
//     <section className="relative py-28 px-4 bg-[var(--light)] text-[var(--dark)] overflow-hidden">
//       {/* Animated glow sides */}
//       <div className="absolute left-0 top-1/3 w-32 h-64 bg-[var(--primary)] blur-3xl opacity-20 animate-pulse rounded-full"></div>
//       <div className="absolute right-0 bottom-1/4 w-32 h-64 bg-[var(--secondary)] blur-3xl opacity-20 animate-pulse rounded-full"></div>

//       {/* Background pattern */}
//       <div className="absolute inset-0 opacity-5 z-0">
//         <div
//           className="absolute inset-0"
//           style={{
//             backgroundImage: `linear-gradient(45deg, var(--primary) 25%, transparent 25%),
//                               linear-gradient(-45deg, var(--primary) 25%, transparent 25%),
//                               linear-gradient(45deg, transparent 75%, var(--primary) 75%),
//                               linear-gradient(-45deg, transparent 75%, var(--primary) 75%)`,
//             backgroundSize: "20px 20px",
//             backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
//           }}
//         ></div>
//       </div>

//       <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
//         {/* Contact Info Cards */}
//         <div className="space-y-6">
//           <h2 className="text-3xl font-bold text-[var(--primary)] mb-6 relative inline-block">
//             تواصل معنا
//             <span className="absolute -bottom-1 left-0 w-full h-1 bg-[var(--primary)] rounded-full blur-md opacity-60"></span>
//           </h2>

//           <ContactCard
//             icon={<Phone className="w-5 h-5" />}
//             title="رقم الهاتف"
//             info={<span dir="ltr">+966 580157728</span>}
//           />
//           <ContactCard
//             icon={<Mail className="w-5 h-5" />}
//             title="البريد الإلكتروني"
//             info={<span dir="ltr">goldenletter1@gmail.com</span>}
//           />
//           <ContactCard
//             icon={<MapPin className="w-5 h-5" />}
//             title="الموقع"
//             info="المملكة العربية السعودية - الرياض"
//           />
//         </div>

//         {/* Contact Form */}
//         <form
//           onSubmit={handleSubmit}
//           className="glass-card rounded-2xl p-6 md:p-8 space-y-5 backdrop-blur-lg shadow-xl border border-white/10 bg-white/10"
//         >
//           <h3 className="text-xl font-bold text-[var(--primary)] text-right mb-2">
//             أرسل رسالتك عبر الواتساب
//           </h3>

//           <input
//             type="text"
//             placeholder="الاسم"
//             value={formData.name}
//             onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//             className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-right bg-white/30 backdrop-blur placeholder:text-sm"
//           />
//           <input
//             type="email"
//             placeholder="البريد الإلكتروني"
//             value={formData.email}
//             onChange={(e) =>
//               setFormData({ ...formData, email: e.target.value })
//             }
//             className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-right bg-white/30 backdrop-blur placeholder:text-sm"
//           />
//           <textarea
//             placeholder="رسالتك"
//             rows={5}
//             value={formData.message}
//             onChange={(e) =>
//               setFormData({ ...formData, message: e.target.value })
//             }
//             className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-right bg-white/30 backdrop-blur placeholder:text-sm"
//           />

//           <button
//             type="submit"
//             className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] hover:opacity-90 transition-all text-white px-6 py-3 rounded-lg w-full flex items-center justify-center gap-2"
//           >
//             <MessageCircle className="w-5 h-5" />
//             إرسال إلى الواتساب
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }

// function ContactCard({
//   icon,
//   title,
//   info,
// }: {
//   icon: React.ReactNode;
//   title: string;
//   info: React.ReactNode;
// }) {
//   return (
//     <div className="glass-card flex items-center gap-4 p-5 rounded-xl shadow-lg border border-white/10 backdrop-blur bg-white/10 hover:scale-[1.02] transition-all">
//       <div className="text-[var(--primary)] bg-white/30 p-3 rounded-full shadow-inner backdrop-blur-md">
//         {icon}
//       </div>
//       <div className="text-right">
//         <p className="font-semibold text-[var(--primary)]">{title}</p>
//         <p className="text-sm">{info}</p>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("يرجى تعبئة جميع الحقول");
      return;
    }

    const phone = "966580157728";
    const text = `👤 الاسم: ${formData.name}%0A📩 البريد: ${formData.email}%0A📝 الرسالة: ${formData.message}`;
    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");

    toast.success("تم فتح تطبيق الواتساب لإرسال رسالتك");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="relative py-20 px-4 overflow-hidden underline-offset-4 underline-black z-0 bg-[var(--light)]">
      {/* ✅ Section-wide texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
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
      </div>
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Contact Info Cards */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-[var(--primary)] mb-6 relative inline-block">
            تواصل معنا
            <span className="absolute -bottom-1 left-0 w-full h-1 bg-[var(--primary)] rounded-full blur-md opacity-60"></span>
          </h2>

          <ContactCard
            icon={<Phone className="w-5 h-5" />}
            title="رقم الهاتف"
            info={<span dir="ltr">+966596656906</span>}
          />
          <ContactCard
            icon={<Mail className="w-5 h-5" />}
            title="البريد الإلكتروني"
            info={<span dir="ltr">goldenletter1@gmail.com</span>}
          />
          <ContactCard
            icon={<MapPin className="w-5 h-5 text-red-600" />}
            title="الموقع"
            info={
              <a
                href="https://www.google.com/maps/place/مجمع+وسط+التجاري,+الرياض+12662,+السعودية"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-sm"
              >
                مجمع وسط التجاري، مقابل سالم زجاج، الرياض 12662، المملكة العربية
                السعودية
              </a>
            }
          />
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="glass-card rounded-2xl p-6 md:p-8 space-y-5 backdrop-blur-lg shadow-xl border border-white/10 bg-white/10"
        >
          <h3 className="text-xl font-bold text-[var(--primary)] text-right mb-2">
            أرسل رسالتك عبر الواتساب
          </h3>

          <input
            type="text"
            placeholder="الاسم"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-right bg-white/30 backdrop-blur placeholder:text-sm"
          />
          <input
            type="email"
            placeholder="البريد الإلكتروني"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-right bg-white/30 backdrop-blur placeholder:text-sm"
          />
          <textarea
            placeholder="رسالتك"
            rows={5}
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-right bg-white/30 backdrop-blur placeholder:text-sm"
          />

          <button
            type="submit"
            className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] hover:opacity-90 transition-all text-white px-6 py-3 rounded-lg w-full flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            إرسال إلى الواتساب
          </button>
        </form>
      </div>
    </section>
  );
}

function ContactCard({
  icon,
  title,
  info,
}: {
  icon: React.ReactNode;
  title: string;
  info: React.ReactNode;
}) {
  return (
    <div className="glass-card flex items-center gap-4 p-5 rounded-xl shadow-lg border border-white/10 backdrop-blur bg-white/10 hover:scale-[1.02] transition-all">
      <div className="text-[var(--primary)] bg-white/30 p-3 rounded-full shadow-inner backdrop-blur-md">
        {icon}
      </div>
      <div className="text-right">
        <p className="font-semibold text-[var(--primary)]">{title}</p>
        <p className="text-sm">{info}</p>
      </div>
    </div>
  );
}
