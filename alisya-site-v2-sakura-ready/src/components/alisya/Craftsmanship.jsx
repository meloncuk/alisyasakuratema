import React from "react";
import { motion } from "framer-motion";

const STEPS = [
  {
    num: "01",
    title: "Voorbereiding",
    desc: "Elk meesterwerk begint met een leeg doek. Wij ontstaan reinigen, schuren en gronden — de basis voor een afwerking die jaren meegaat.",
  },
  {
    num: "02",
    title: "Precisie",
    desc: "Strakke lijnen, naadloze overgangen. Onze vakmensen werken met uiterste concentratie en het fijnste gereedschap om elk detail recht te doen.",
  },
  {
    num: "03",
    title: "Perfectie",
    desc: "Duurzame, milieubewuste verf met diepe pigmenten. Het resultaat: een oppervlak dat niet alleen mooi is, maar ook blijft.",
  },
];


function SakuraDecor() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <svg
        className="absolute -left-12 -top-10 w-[360px] md:w-[520px] opacity-[0.18]"
        viewBox="0 0 520 360"
        fill="none"
      >
        <path d="M-20 42C95 68 135 117 217 154C292 188 369 171 510 265" stroke="hsl(18 32% 38%)" strokeWidth="2.2" strokeLinecap="round"/>
        <path d="M126 111C157 86 179 58 190 22M216 153C252 123 275 94 287 59M319 183C357 158 383 129 400 94" stroke="hsl(18 32% 38%)" strokeWidth="1.5" strokeLinecap="round"/>
        {[
          [121,108],[151,82],[188,28],[211,151],[250,124],[284,63],
          [315,181],[354,159],[398,98],[438,218],[471,239]
        ].map(([x,y], i) => (
          <g key={i} transform={`translate(${x} ${y})`} opacity="0.9">
            <ellipse rx="8" ry="4" transform="rotate(-25)" fill="hsl(18 49% 65%)"/>
            <ellipse rx="8" ry="4" transform="rotate(47)" fill="hsl(18 49% 72%)"/>
            <ellipse rx="8" ry="4" transform="rotate(119)" fill="hsl(18 49% 76%)"/>
            <ellipse rx="8" ry="4" transform="rotate(191)" fill="hsl(18 49% 70%)"/>
            <circle r="2.1" fill="hsl(18 49% 45%)"/>
          </g>
        ))}
      </svg>

      <svg
        className="absolute -right-16 bottom-[-30px] w-[330px] md:w-[500px] opacity-[0.14]"
        viewBox="0 0 520 360"
        fill="none"
      >
        <path d="M540 320C431 287 394 240 321 218C249 197 184 212 25 93" stroke="hsl(18 32% 38%)" strokeWidth="2.2" strokeLinecap="round"/>
        <path d="M411 275C386 301 368 327 361 354M320 218C291 245 273 274 263 310M211 195C179 218 158 245 145 279" stroke="hsl(18 32% 38%)" strokeWidth="1.5" strokeLinecap="round"/>
        {[
          [415,276],[384,301],[361,349],[321,219],[291,245],[264,306],
          [213,196],[180,219],[146,276],[102,151],[62,123]
        ].map(([x,y], i) => (
          <g key={i} transform={`translate(${x} ${y})`} opacity="0.9">
            <ellipse rx="8" ry="4" transform="rotate(-25)" fill="hsl(18 49% 65%)"/>
            <ellipse rx="8" ry="4" transform="rotate(47)" fill="hsl(18 49% 72%)"/>
            <ellipse rx="8" ry="4" transform="rotate(119)" fill="hsl(18 49% 76%)"/>
            <ellipse rx="8" ry="4" transform="rotate(191)" fill="hsl(18 49% 70%)"/>
            <circle r="2.1" fill="hsl(18 49% 45%)"/>
          </g>
        ))}
      </svg>

      <div className="absolute left-[7%] top-[42%] h-2 w-2 rounded-full bg-accent/10 rotate-45" />
      <div className="absolute right-[12%] top-[22%] h-3 w-1.5 rounded-full bg-accent/10 rotate-[28deg]" />
      <div className="absolute right-[30%] bottom-[12%] h-2 w-1 rounded-full bg-accent/10 -rotate-[32deg]" />
    </div>
  );
}

export default function Craftsmanship() {
  return (
    <section id="vakmanschap" className="relative py-24 md:py-32 overflow-hidden grain bg-[hsl(40_28%_96%)]">
      <SakuraDecor />
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="mb-16 md:mb-24">
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Vakmanschap</span>
          <h2 className="font-heading text-4xl md:text-6xl mt-4 max-w-2xl text-balance">
            Waarom Alisya anders is
          </h2>
        </div>

        <div className="space-y-20 md:space-y-28">
          {STEPS.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-start"
            >
              <div className="md:col-span-5 relative">
                <span className="font-heading text-7xl md:text-9xl leading-none relative inline-block">
                  <span className="relative z-10 text-foreground/15">{step.num}</span>
                  <motion.span
                    initial={{ height: 0 }}
                    whileInView={{ height: "100%" }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="absolute bottom-0 left-0 right-0 overflow-hidden"
                  >
                    <span
                      className="font-heading text-7xl md:text-9xl leading-none block"
                      style={{ color: "hsl(18 49% 51%)" }}
                    >
                      {step.num}
                    </span>
                  </motion.span>
                </span>
              </div>
              <div className="md:col-span-7 md:pt-4">
                <h3 className="font-heading text-3xl md:text-5xl mb-4">{step.title}</h3>
                <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}