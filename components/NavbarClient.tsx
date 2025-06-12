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
  { name: "الكسوة", path: "/" },
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
          className="text-[#cd853f] hover:text-[var(--accent)] font-medium transition-colors"
        >
          الرئيسية
        </Link>

        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-1 text-[#cd853f] hover:text-[var(--accent)] font-medium transition-colors">
            خدماتنا
            <ChevronDown className="w-4 h-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-60 glass-navbar border-[var(--primary)]/20">
            {services.map((service, index) => (
              <DropdownMenuItem key={index} asChild>
                <Link
                  href={service.path}
                  className="block w-full hover:text-[var(--dark)] text-white px-2 py-1"
                >
                  {service.name}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <Link
          href="#contact"
          className="text-[#cd853f] hover:text-[var(--accent)] font-medium transition-colors"
        >
          تواصل معنا
        </Link>
      </div>
      {/* CTA Button */}
      <div className="hidden lg:flex items-center gap-4">
        <div className="text-left" dir="ltr">
          <div className="text-sm text-[var(--accent)]">اتصل الآن</div>
          <div className="font-bold text-[var(--dark)]">+966580157728</div>
        </div>
        <a
          href="https://wa.me/+966580157728"
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
        className="lg:hidden relative p-2 text-[#cd853f] hover:text-[var(--accent)] transition-colors"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>
      {/* Mobile Menu */}

      {isOpen && (
        <div className="lg:hidden absolute top-0 left-0 glass-navbar rounded-2xl mt-2 p-6 space-y-4">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="block text-[#d4a574] hover:text-[var(--accent)] font-medium py-2"
          >
            الرئيسية
          </Link>

          <div className="space-y-2">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-[#d4a574] hover:text-[var(--accent)] font-medium transition-colors">
                خدماتنا
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-80 glass-navbar border-[var(--primary)]/20">
                {services.map((service, index) => (
                  <DropdownMenuItem key={index} asChild>
                    <Link
                      href={service.path}
                      onClick={() => setIsOpen(false)}
                      className="block w-full hover:text-[var(--dark)] text-[#ffffff] px-2 py-1"
                    >
                      {service.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <Link
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block text-[#cd853f] hover:text-[var(--accent)] font-medium py-2"
          >
            تواصل معنا
          </Link>

          <a
            href="https://wa.me/+966580157728"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
          >
            <Button className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] hover:from-[var(--accent)] hover:to-[var(--secondary)] text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105">
              <Phone className="w-4 h-4 ml-2" />
              استشارة مجانية
            </Button>
          </a>
        </div>
      )}
    </>
  );
}
