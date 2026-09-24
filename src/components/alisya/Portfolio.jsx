import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Image } from "@/components/ui/image";

const PROJECTS = [
  {
    img: "https://media.base44.com/images/public/6ab42e4cfcbdddcd263ea556/d754f9397_generated_facb6615.jpg",
    title: "Woonkamer",
    detail: "Matte Kalkverf — Linnen",
  },
  {
    img: "https://media.base44.com/images/public/6ab42e4cfcbdddcd263ea556/f7298603f_generated_3c441452.jpg",
    title: "Hoek & Overgang",
    detail: "Okermuur — Diep Pigment",
  },
  {
    img: "https://media.base44.com/images/public/6ab42e4cfcbdddcd263ea556/d7c7aa9e8_generated_4165728b.jpg",
    title: "Kleurverloop",
    detail: "Salie Grijs — Gebroken Wit",
  },
  {
    img: "https://media.base44.com/images/public/6ab42e4cfcbdddcd263ea556/5557029b2_generated_edfabf78.jpg",
    title: "Accentmuur",
    detail: "Matte Verf — Diep Blauw",
  },
  {
    img: "https://media.base44.com/images/public/6ab42e4cfcbdddcd263ea556/4659752aa_generated_245e696c.jpg",
    title: "Het Detail",
    detail: "Strakke Lijn — Handwerk",
  },
];

export default function Portfolio() {
  const trackRef = useRef(null);

  const scrollLeft = () => {
    trackRef.current?.scrollBy({ left: -window.innerWidth * 0.8, behavior: "smooth" });
  };
  const scrollRight = () => {
    trackRef.current?.scrollBy({ left: window.innerWidth * 0.8, behavior: "smooth" });
  };

  return (
    <section id="projecten" className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-12 flex items-end justify-between">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Portfolio</span>
          <h2 className="font-heading text-4xl md:text-6xl mt-4 text-balance">
            Elk detail vertelt een verhaal
          </h2>
        </div>
        <div className="hidden md:flex gap-3">
          <button onClick={scrollLeft} className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-colors" aria-label="Vorige">←</button>
          <button onClick={scrollRight} className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-colors" aria-label="Volgende">→</button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory px-6 md:px-12 pb-4"
      >
        {PROJECTS.map((p, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            className="group relative shrink-0 w-[80vw] sm:w-[55vw] md:w-[38vw] lg:w-[30vw] snap-start"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src={p.img}
                alt={p.title}
                fittingType="fill"
                className="w-full h-full transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <div className="text-white">
                  <p className="font-heading text-2xl">{p.title}</p>
                  <p className="text-sm tracking-wide mt-1 text-white/80">{p.detail}</p>
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm uppercase tracking-[0.2em] text-muted-foreground">{p.title}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}