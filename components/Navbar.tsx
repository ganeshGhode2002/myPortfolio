"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#tech" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">

      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-between px-6 py-3 rounded-2xl 
                   bg-black/60 backdrop-blur-xl border border-white/10 shadow-xl"
      >
        {/* Logo */}
        <div className="text-lg font-bold tracking-wide">
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            GG
          </span>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-3">
          {navItems.map((item, index) => (
            <Link key={index} href={item.href}>
              <span className="px-4 py-2 text-sm rounded-lg text-gray-300 
                               hover:text-white hover:bg-white/10 transition-all duration-300">
                {item.name}
              </span>
            </Link>
          ))}
        </div>

        {/* Right Side Icon Placeholder */}
        <div className="text-yellow-400 text-lg cursor-pointer">
          ☀️
        </div>
      </motion.nav>
    </div>
  );
}
