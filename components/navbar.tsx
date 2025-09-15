// "use client";

// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { Menu, X, Phone, Building2, ChevronDown } from "lucide-react";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

// const services = [
//   { name: "تركيب الكسوة", path: "" },
//   { name: "الصلب والزنك", path: "" },
//   { name: "حروف مرفوعة", path: "/services/raised-letters" },
//   { name: "القطع بالليزر – CNC", path: "" },
// ];

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [hasMounted, setHasMounted] = useState(false);

//   useEffect(() => {
//     setHasMounted(true);
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   if (!hasMounted) {
//     return null;
//   }

//   return (
//     <nav
//       className={`fixed top-0 w-full z-50 transition-all duration-300 ${
//         scrolled ? "glass-navbar" : "bg-transparent"
//       }`}
//     >
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-20">
//           {/* Logo */}
//           <div className="flex items-center gap-3">
//             <div className="w-12 h-12 bg-gradient-to-br from-[#d4a574] to-[#cd853f]  flex items-center justify-center shadow-lg">
//               <Building2 className="w-7 h-7 text-white" />
//             </div>
//             <div className="hidden sm:block">
//               <div className="font-bold text-xl text-[var(--dark)]">
//                 تركيب الكسوة المتقدمة
//               </div>
//               <div className="text-sm text-[var(--accent)]">
//                 حلول معمارية احترافية
//               </div>
//             </div>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden lg:flex items-center gap-8 ">
//             <Link
//               href="/"
//               className="text-[#cd853f] hover:text-[var(--accent)] font-medium transition-colors"
//             >
//               الرئيسية
//             </Link>

//             <DropdownMenu>
//               <DropdownMenuTrigger className="flex items-center gap-1 text-[#cd853f] hover:text-[var(--accent)] font-medium transition-colors">
//                 خدماتنا
//                 <ChevronDown className="w-4 h-4" />
//               </DropdownMenuTrigger>
//               <DropdownMenuContent className="w-64 glass-navbar border-[var(--primary)]/20">
//                 {services.map((service, index) => (
//                   <DropdownMenuItem key={index} asChild>
//                     <Link
//                       href={service.path}
//                       className="block w-full hover:text-[var(--dark)] text-[var(--accent)] px-2 py-1"
//                     >
//                       {service.name}
//                     </Link>
//                   </DropdownMenuItem>
//                 ))}
//               </DropdownMenuContent>
//             </DropdownMenu>

//             <Link
//               href="#contact"
//               className="text-[#cd853f] hover:text-[var(--accent)] font-medium transition-colors"
//             >
//               تواصل معنا
//             </Link>
//           </div>

//           {/* CTA Button */}
//           <div className="hidden lg:flex items-center gap-4">
//             <div className="text-left" dir="ltr">
//               <div className="text-sm text-[var(--accent)]">اتصل الآن</div>
//               <div className="font-bold text-[var(--dark)]">‎+966 59 665 6906</div>
//             </div>
//             <a
//               href="https://wa.me/‎+966 59 665 6906"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <Button className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] hover:from-[var(--accent)] hover:to-[var(--secondary)] text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105">
//                 <Phone className="w-4 h-4 ml-2" />
//                 استشارة مجانية
//               </Button>
//             </a>
//           </div>

//           {/* Mobile Menu Toggle */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="lg:hidden p-2 text-[#cd853f] hover:text-[var(--accent)] transition-colors"
//           >
//             {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <div className="lg:hidden glass-navbar rounded-2xl mt-2 p-6 space-y-4">
//             <Link
//               href="/"
//               className="block text-[#cd853f] hover:text-[var(--accent)] font-medium py-2"
//             >
//               الرئيسية
//             </Link>
//             <div className="space-y-2">
//               <DropdownMenu>
//                 <DropdownMenuTrigger className="flex items-center gap-1 text-[#cd853f] hover:text-[var(--accent)] font-medium transition-colors">
//                   خدماتنا
//                   <ChevronDown className="w-4 h-4" />
//                 </DropdownMenuTrigger>
//                 <DropdownMenuContent className="w-80 glass-navbar border-[var(--primary)]/20">
//                   {services.map((service, index) => (
//                     <DropdownMenuItem key={index} asChild>
//                       <Link
//                         href={service.path}
//                         className="block w-full hover:text-[var(--dark)] text-[#cd853f] px-2 py-1"
//                       >
//                         {service.name}
//                       </Link>
//                     </DropdownMenuItem>
//                   ))}
//                 </DropdownMenuContent>
//               </DropdownMenu>
//             </div>
//             <Link
//               href="#contact"
//               className="block text-[#cd853f] hover:text-[var(--accent)] font-medium py-2"
//             >
//               تواصل معنا
//             </Link>
//             <a
//               href="https://wa.me/‎+966 59 665 6906"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <Button className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] hover:from-[var(--accent)] hover:to-[var(--secondary)] text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105">
//                 <Phone className="w-4 h-4 ml-2" />
//                 استشارة مجانية
//               </Button>
//             </a>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }

//code 2 for use client
import Link from "next/link";
import NavbarClient from "./NavbarClient";
import { Building2 } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 p-2 m-2">
      <div className="container mx-auto px-4 glass-navbar rounded-full ">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-[#d4a574] to-[#cd853f] flex items-center justify-center shadow-lg rounded-xl">
              <Building2 className="w-7 h-7 text-white" />
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-xl text-[var(--accent)]">
                جولدن ليتر
              </div>
              <div className="text-sm text-[var(--secondary)]">
                حلول معمارية احترافية
              </div>
            </div>
          </div>

          {/* Client-rendered part */}
          <NavbarClient />
        </div>
      </div>
    </nav>
  );
}
