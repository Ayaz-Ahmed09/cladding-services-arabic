import type React from "react";
import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import FloatingButton from "@/components/FloatingButton";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "خدمات الكسوة المتقدمة - حلول الواجهات الاحترافية",
  description:
    "شركة رائدة في تصميم وتنفيذ واجهات المباني الحديثة، نقدم حلول كسوة مبتكرة بأعلى معايير الجودة العالمية",
  keywords:
    "كسوة متقدمة, واجهات حديثة, تصميم معماري, كسوة زجاجية, واجهات معدنية",
  generator: "Next.js",
  authors: [{ name: "Ayaz Ahmad" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={cairo.className}>
      <body className="antialiased bg-slate-50">
        <Navbar />
        {children}
        <FloatingButton />
      </body>
    </html>
  );
}
