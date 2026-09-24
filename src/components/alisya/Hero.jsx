import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Image } from "@/components/ui/image";

const HERO_IMG = "https://media.base44.com/images/public/6ab42e4cfcbdddcd263ea556/ceba2938f_generated_31ef8868.jpg";

export default function Hero() {
  const scrollToAdvice = () => {
    const el = document.querySelector("#kleuradvies");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="top" className="relative h-screen min-h-[640px] w-full overflow-hidden grain">
      <div className="absolute inset-0">
        <Image
          src={HERO_IMG}
          alt="Minimalistisch Amsterdams interieur met perfect geschilderde muur in warm daglicht"
          fittingType="fill"
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
      </div>

      <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/80 text-xs sm:text-sm uppercase tracking-[0.4em] mb-6"
        >
          Schildersbedrijf · Nederland
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-heading text-white text-5xl sm:text-7xl md:text-8xl leading-[1.05] max-w-4xl text-balance"
        >
          Uw muren,<br />ons meesterwerk
        </motion.h1>
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          onClick={scrollToAdvice}
          className="group mt-12 inline-flex items-center gap-3 px-8 py-4 rounded-full text-white text-sm uppercase tracking-[0.2em] transition-all duration-300 hover:scale-105"
          style={{ backgroundColor: "hsl(18 49% 51%)" }}
        >
          Start uw transformatie
          <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
        </motion.button>
      </div>

      <div className="absolute bottom-8 left-6 md:left-12 vertical-text text-white/60 text-xs uppercase tracking-[0.3em] hidden sm:block">
        The Art of Precision
      </div>
    </section>
  );
}