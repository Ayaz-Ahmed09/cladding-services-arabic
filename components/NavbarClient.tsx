"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const services = [
  { name: "تركيب كلادينج", path: "/services/cladding" },
  { name: " إعلان", path: "/services/advertisement" },
  { name: "حروف مرفوعة", path: "/services/raised-letters" },
];

export default function NavbarClient() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center gap-8">
        <Link
          href="/"
          className="text-[#8b4513;] hover:text-[var(--accent)] font-medium transition-colors"
        >
          الرئيسية
        </Link>

        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-1 text-[#8b4513;] hover:text-[var(--accent)] font-medium transition-colors">
            خدماتنا
            <ChevronDown className="w-4 h-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-60 glass-navbar border-[var(--primary)]/20">
            {services.map((service, index) => (
              <DropdownMenuItem key={index} asChild>
                <Link
                  href={service.path}
                  className="block w-full hover:text-[var(--dark)] text-[#8b4513;] px-2 py-1"
                >
                  {service.name}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <Link
          href="/Contact-Us"
          className="text-[#8b4513;] hover:text-[var(--accent)] font-medium transition-colors"
        >
          تواصل معنا
        </Link>
        <Link
          href="/About-Us"
          className="text-[#8b4513;] hover:text-[var(--accent)] font-medium transition-colors"
        >
          معلومات عنا
        </Link>
      </div>
      {/* CTA Button */}
      <div className="hidden lg:flex items-center gap-4">
        <div className="text-left" dir="ltr">
          <div className="text-sm text-[var(--accent)]">اتصل الآن</div>
          <div className="font-bold text-[var(--dark)]">‎+966 59 665 6906</div>
        </div>
        <a
          href="https://wa.me/‎+966 59 665 6906"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] hover:from-[var(--accent)] hover:to-[var(--secondary)] text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105">
            <Phone className="w-4 h-4 ml-2" />
            استشارة مجانية
          </Button>
        </a>
      </div>
      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden relative p-2  hover:text-[var(--accent)] transition-colors"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>
      {/* Mobile Menu */}

      {isOpen && (
        <div className="lg:hidden absolute top-0 left-0 bg-gray-600/40 rounded-2xl mt-2 p-6 space-y-6">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="block text-[#ffffff] hover:text-[var(--accent)] font-bold py-2"
          >
            الرئيسية
          </Link>

          <div className="space-y-2">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-[#ffffff] hover:text-[var(--accent)] font-bold transition-colors">
                خدماتنا
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-80 glass-navbar border-[var(--primary)]/20">
                {services.map((service, index) => (
                  <DropdownMenuItem key={index} asChild>
                    <Link
                      href={service.path}
                      onClick={() => setIsOpen(false)}
                      className="block w-full font-bold hover:text-[var(--dark)] text-[#ffffff] px-2 py-1"
                    >
                      {service.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <Link
            href="/Contact-Us"
            onClick={() => setIsOpen(false)}
            className="block text-[#ffffff] hover:text-[var(--accent)] font-bold py-2"
          >
            تواصل معنا
          </Link>
          <Link
            href="/About-Us"
            className="text-[#fff] hover:text-[var(--accent)] font-medium transition-colors"
          >
            معلومات عنا
          </Link>
          <div className="">
            {" "}
            <a
              href="https://wa.me/‎+966 59 665 6906"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
            >
              <Button className="bg-gradient-to-r from-[var(--primary)]  to-[var(--accent)] hover:from-[var(--accent)] hover:to-[var(--secondary)] text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105">
                <Phone className="w-4 h-4 ml-2" />
                استشارة مجانية
              </Button>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
