"use client";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full flex items-center justify-between px-8 py-4 bg-black/60 backdrop-blur-md border-b border-white/10 z-50">
            {/* Left Section- Logo */}
            <div className="text-2xl fibt-bold text-white tracking-wide hover:drop-shadow-[0_0_10px_#00ffff} transition-all duration-300">
                <Link href="/">PresencePage</Link>
            </div>

            {/* Center - Links */}
            <div className="flex space-x-8">
                <Link
                   href="/apps"
                   className="text-white hover:text-gray-500 hover:drop-shadow-gray-700 transition-all duration-300"
                   >
                    Survey
                   </Link>
                <Link
                   href="/apps"
                   className="text-white hover:text-cyan-300 hover:drop-shadow-cyan-900 transition-all duration-300"
                   >
                    Pricing
                   </Link>
            </div>

            {/* Right - Call Us Button */}
            <Link
                href="/contact"
                className="px-4 py-2 rounded-xl border border-white text-white font-semibold hover:bg-gray-500 hover:text-black hover:drop-shadow-gray-700 transition-all duration-300"
                >
                 Book a call
                </Link>
            </nav>
    );
};

export default Navbar;