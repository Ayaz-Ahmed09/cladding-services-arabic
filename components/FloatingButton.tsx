"use client";

import { MessageSquareText, Phone } from "lucide-react";
import Link from "next/link";

export default function FloatingButton() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <Link
        href="https://wa.me/‎+966 59 665 6906"
        target="_blank"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquareText className="w-6 h-6" />
      </Link>

      {/* Call Button */}
      <Link
        href="tel:‎+966 59 665 6906"
        className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center"
        aria-label="Call us"
      >
        <Phone className="w-6 h-6" />
      </Link>
    </div>
  );
}
