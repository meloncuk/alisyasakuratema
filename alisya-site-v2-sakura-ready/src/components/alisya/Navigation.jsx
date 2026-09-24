import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", href: "#top" },
  { label: "Projecten", href: "#projecten" },
  { label: "Vakmanschap", href: "#vakmanschap" },
  { label: "Kleuradvies", href: "#kleuradvies" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const handleNav = (href) => {
    setOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "py-4 bg-background/80 backdrop-blur-md" : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
          <a
            href="#top"
            onClick={(e) => { e.preventDefault(); handleNav("#top"); }}
            className="font-heading text-2xl tracking-[0.2em] text-foreground"
          >
            ALISYA
          </a>
          <button
            onClick={() => setOpen(true)}
            className="flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-foreground hover:text-accent transition-colors"
            aria-label="Menu openen"
          >
            <span className="hidden sm:inline">Menu</span>
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[60]"
            style={{ backgroundColor: "hsl(150 6% 57%)" }}
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between px-6 md:px-12 py-6">
                <span className="font-heading text-2xl tracking-[0.2em] text-white">ALISYA</span>
                <button
                  onClick={() => setOpen(false)}
                  className="text-white hover:opacity-70 transition-opacity"
                  aria-label="Menu sluiten"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <nav className="flex-1 flex flex-col justify-center px-6 md:px-12 gap-2">
                {NAV_ITEMS.map((item, i) => (
                  <motion.button
                    key={item.label}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                    onClick={() => handleNav(item.href)}
                    className="text-left font-heading text-5xl md:text-7xl text-white hover:translate-x-4 transition-transform duration-300 py-2"
                  >
                    {item.label}
                  </motion.button>
                ))}
              </nav>
              <div className="px-6 md:px-12 pb-10 text-white/80 text-sm tracking-wide">
                <a href="mailto:info@alisya.nl" className="hover:text-white transition-colors">info@alisya.nl</a>
                <span className="mx-3">·</span>
                <a href="tel:+31201234567" className="hover:text-white transition-colors">+31 20 123 4567</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}