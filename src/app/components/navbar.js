"use client";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full flex items-center justify-center bg-white/90 backdrop-blur-md z-50">
      <div className="w-full max-w-7xl flex items-center justify-between px-12 h-16">
        {/* Left - Logo */}
        <Link href="/" className="flex items-center h-full">
          <Image
            src="/keyline.logo.svg"
            alt="Keyline Logo"
            width={140}
            height={140}
            className="object-contain"
            priority
          />
        </Link>

        {/* Center - Nav Links */}
        <div className="flex items-center space-x-10">
          <Link
            href="/features"
            className="text-black hover:text-cyan-500 transition-all duration-300"
          >
            Features
          </Link>
          <Link
            href="/survey"
            className="text-black hover:text-cyan-500 transition-all duration-300"
          >
            Survey
          </Link>
          <Link
            href="#"
            className="text-black hover:text-cyan-500 transition-all duration-300"
          >
            #
          </Link>
        </div>

        {/* Right - CTA Button (optional) */}
        <Link
          href="/contact"
          className=" text-black px-4 py-2 rounded-lg border border-black font-semibold hover:bg-cyan-500 transition-all duration-300"
        >
          Book a Call
        </Link>
      </div>
    </nav>
  );
}
