import type React from "react";
import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import FloatingButton from "@/components/FloatingButton";
import { Toaster } from "sonner";
import Footer from "@/components/Footer";
import Script from "next/script";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["200", "300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "جولدن ليتر | خدمات تركيب كلادينج وحروف بارزة وإعلانات بالرياض",
  description:
    "جولدن ليتر – أفضل شركة تركيب كلادينج، حروف بارزة، حلول إعلانية في الرياض. خبرة +15 سنة، تنفيذ احترافي، جودة عالية، خدمة عملاء مميزة.",
  keywords: [
    // Cladding (كسوة/كلادينج) services
    "تركيب كلادينج الرياض",
    "أفضل شركة كلادينج بالرياض",
    "تشطيب واجهات الكلادينج",
    "كلادينج مقاوم للحريق الرياض",
    // Raised Letter (حروف بارزة)
    "لوحات حروف بارزة الرياض",
    "حروف بارزة مضيئة الرياض",
    "تصنيع حروف بارزة ثلاثية الأبعاد",
    // Advertisement (إعلانات)
    "لوحات إعلانية بالرياض",
    "تصميم لوحات إعلانية الرياض",
    "خدمات الإعلان الخارجي السعودية",
    // High-conversion modifiers
    "بيع تركيب كلادينج",
    "عرض سعر حروف بارزة",
    "استشارة مجانية كلادينج",
    "تركيب إعلان احترافي الرياض",
    // Location targeting
    "خدمات كلادينج الرياض السعودية",
    "إعلانات وحروف بارزة في السعودية",
  ].join(", "),
  generator: "Next.js",
  authors: [{ name: "Ayaz Ahmad" }],
  icons: {
    icon: "/building-2.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={cairo.className}>
      <body className="antialiased bg-slate-50">
        <Script
          id="gtm"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
     new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
     j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
     'https://www.googletagmanager.com/gtm.js?id=GTM-5JNBGLVG'+dl;f.parentNode.insertBefore(j,f);
   })(window,document,'script','dataLayer','GTM-5JNBGLVG');`,
          }}
        />

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5JNBGLVG"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Navbar />
        {children}
        <Toaster richColors position="top-center" />
        <FloatingButton />
        <Footer />
      </body>
    </html>
  );
}
