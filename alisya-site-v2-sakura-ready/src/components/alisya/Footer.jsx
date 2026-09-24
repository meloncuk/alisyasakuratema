import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer id="contact" className="relative" style={{ backgroundColor: "hsl(0 0% 10%)" }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-6">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-heading text-white text-5xl md:text-7xl leading-[1.05] text-balance"
            >
              Klaar om uw<br />ruimte te schilderen?
            </motion.h2>
            <a
              href="#kleuradvies"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#kleuradvies")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-3 mt-10 px-8 py-4 rounded-full text-sm uppercase tracking-[0.2em] transition-transform hover:scale-105"
              style={{ backgroundColor: "hsl(18 49% 51%)", color: "hsl(40 33% 98%)" }}
            >
              Start uw transformatie
            </a>
          </div>

          <div className="md:col-span-6 grid grid-cols-2 gap-8">
            <div>
              <p className="text-white/40 text-xs uppercase tracking-[0.3em] mb-4">Contact</p>
              <a href="mailto:info@alisya.nl" className="block text-white text-lg hover:text-white/70 transition-colors mb-2">info@alisya.nl</a>
              <a href="tel:+31201234567" className="block text-white text-lg hover:text-white/70 transition-colors">+31 20 123 4567</a>
            </div>
            <div>
              <p className="text-white/40 text-xs uppercase tracking-[0.3em] mb-4">Atelier</p>
              <p className="text-white text-lg leading-relaxed">Prinsengracht 123<br />1015 RK Amsterdam<br />Nederland</p>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-heading text-2xl tracking-[0.2em] text-white">ALISYA</span>
          <div className="flex flex-wrap gap-6 text-white/50 text-sm">
            <a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="hover:text-white transition-colors">Home</a>
            <a href="#projecten" onClick={(e) => { e.preventDefault(); document.querySelector("#projecten")?.scrollIntoView({ behavior: "smooth" }); }} className="hover:text-white transition-colors">Projecten</a>
            <a href="#vakmanschap" onClick={(e) => { e.preventDefault(); document.querySelector("#vakmanschap")?.scrollIntoView({ behavior: "smooth" }); }} className="hover:text-white transition-colors">Vakmanschap</a>
            <a href="#kleuradvies" onClick={(e) => { e.preventDefault(); document.querySelector("#kleuradvies")?.scrollIntoView({ behavior: "smooth" }); }} className="hover:text-white transition-colors">Kleuradvies</a>
          </div>
          <p className="text-white/40 text-sm">© {new Date().getFullYear()} Alisya — The Art of Precision</p>
        </div>
      </div>
    </footer>
  );
}