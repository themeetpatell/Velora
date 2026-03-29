"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { href: "/solutions", label: "Solutions" },
  { href: "/pricing", label: "Pricing" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuPath, setMobileMenuPath] = useState<string | null>(null);
  const pathname = usePathname();
  const mobileOpen = mobileMenuPath === pathname;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-3 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="w-7 h-7 rounded-sm gradient-neon flex items-center justify-center">
                <span className="text-[#050505] font-black text-sm">V</span>
              </div>
              <div className="absolute inset-0 rounded-sm gradient-neon blur-md opacity-40 group-hover:opacity-70 transition-opacity" />
            </div>
            <span className="text-white font-bold text-xl tracking-tight">
              velora
              <span className="text-[#00E5FF]">.</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-md group ${
                    isActive ? "text-white" : "text-[#6B7280] hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-white/5 rounded-md"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/contact" className="text-sm text-[#6B7280] hover:text-white transition-colors font-medium">
              Contact
            </Link>
            <Link
              href="/contact"
              className="btn-neon text-sm"
            >
              Get a Free Lead Audit
              <ArrowUpRight size={14} />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() =>
              setMobileMenuPath((currentPath) =>
                currentPath === pathname ? null : pathname
              )
            }
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-white/10 text-white hover:border-[#00E5FF]/30 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#050505]/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col h-full pt-24 px-6 pb-10">
              <nav className="flex flex-col gap-2 flex-1">
                {links.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuPath(null)}
                      className={`block py-4 text-2xl font-bold border-b border-white/5 transition-colors ${
                        pathname === link.href ? "text-[#00E5FF]" : "text-white/70 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: links.length * 0.07, duration: 0.3 }}
                >
                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuPath(null)}
                    className="block py-4 text-2xl font-bold border-b border-white/5 text-white/70 hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </motion.div>
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
              >
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuPath(null)}
                  className="btn-neon w-full justify-center text-base"
                >
                  Get a Free Lead Audit
                  <ArrowUpRight size={16} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
