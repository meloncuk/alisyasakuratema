import React, { useEffect, useState } from "react";
import Navigation from "@/components/alisya/Navigation";
import Hero from "@/components/alisya/Hero";
import Portfolio from "@/components/alisya/Portfolio";
import Craftsmanship from "@/components/alisya/Craftsmanship";
import ColorAdvice from "@/components/alisya/ColorAdvice";
import Footer from "@/components/alisya/Footer";

export default function Home() {
  const [bgTint, setBgTint] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.body.scrollHeight - window.innerHeight;
      const ratio = Math.min(1, window.scrollY / max);
      setBgTint(ratio);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const bgColor = (() => {
    const r = bgTint;
    const start = { h: 40, s: 33, l: 98 };
    const end = { h: 150, s: 6, l: 57 };
    const h = start.h + (end.h - start.h) * r;
    const s = start.s + (end.s - start.s) * r;
    const l = start.l + (end.l - start.l) * r;
    return `hsl(${h} ${s}% ${l}%)`;
  })();

  return (
    <div className="relative min-h-screen" style={{ backgroundColor: bgColor, transition: "background-color 0.3s linear" }}>
      <Navigation />
      <main>
        <Hero />
        <Portfolio />
        <Craftsmanship />
        <ColorAdvice />
      </main>
      <Footer />
    </div>
  );
}