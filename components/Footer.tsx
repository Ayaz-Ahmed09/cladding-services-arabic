// components/Footer.tsx
"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Building2 } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="text-white py-14 px-6 relative z-10"
      style={{
        backgroundImage: `
          linear-gradient(30deg, black 1px, transparent 1px),
          linear-gradient(150deg, black 2px, transparent 2px),
          linear-gradient(90deg, black 3px, transparent 3px)
        `,
        backgroundSize: "20px 20px",
        backgroundColor: "#1a1a1a",
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand & CTA */}
        <div className="space-y-4 text-right ">
          <h3 className="text-2xl font-bold text-[var(--primary)]">
            <Building2 className="w-8 h-8" />
            جولدن ليتر
          </h3>
          <p className="text-sm text-gray-300 leading-loose">
            نحن نقدم خدمات احترافية في مجال الإعلانات، الحروف المرفوعة،
            والكلادينج في المملكة العربية السعودية.
          </p>
          <a
            href="https://wa.me/966596656906"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] hover:opacity-90 transition text-white px-5 py-2 rounded-lg text-sm"
          >
            استشارة مجانية عبر الواتساب
          </a>
        </div>

        {/* Quick Links */}
        <nav className="text-right space-y-3">
          <h4 className="text-xl font-bold text-[var(--primary)] mb-2">
            روابط سريعة
          </h4>
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className="hover:text-[var(--accent)] transition-colors"
              >
                الرئيسية
              </Link>
            </li>
            <li>
              <Link
                href="/About-Us"
                className="hover:text-[var(--accent)] transition-colors"
              >
                معلومات عنا
              </Link>
            </li>
            <li>
              <Link
                href="/Contact-Us"
                className="hover:text-[var(--accent)] transition-colors"
              >
                تواصل معنا
              </Link>
            </li>
            <li>
              <Link
                href="/services/cladding"
                className="hover:text-[var(--accent)] transition-colors"
              >
                تركيب كلادينج
              </Link>
            </li>
            <li>
              <Link
                href="/services/advertisement"
                className="hover:text-[var(--accent)] transition-colors"
              >
                إعلان
              </Link>
            </li>
            <li>
              <Link
                href="/services/raised-letters"
                className="hover:text-[var(--accent)] transition-colors"
              >
                حروف مرفوعة
              </Link>
            </li>
          </ul>
        </nav>

        {/* Contact Info */}
        <address className="not-italic text-right space-y-4">
          <h4 className="text-xl font-bold text-[var(--primary)] mb-2">
            معلومات التواصل
          </h4>
          <div className="flex items-center justify-end gap-2">
            <Phone className="w-4 h-4 text-[var(--accent)]" />
            <span dir="ltr">+966 59 665 6906</span>
          </div>
          <div className="flex items-center justify-end gap-2">
            <Mail className="w-4 h-4 text-[var(--accent)]" />
            <span dir="ltr">goldenletter1@gmail.com</span>
          </div>
          <div className="flex items-center justify-end gap-2">
            <MapPin className="w-4 h-4 text-[var(--accent)]" />
            <span>
              مجمع وسط التجاري مقابل سالم زجاج, الرياض 12662، المملكة العربية
              السعودية
            </span>
          </div>
        </address>
      </div>

      {/* Bottom Strip */}
      <div className="border-t border-white/10 mt-12 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} جولدن ليتر. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
}
