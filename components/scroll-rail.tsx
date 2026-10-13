"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const sections = [["home", "Home"], ["about", "About"], ["skills", "Skills"], ["projects", "Projects"], ["experience", "Experience"], ["contact", "Contact"]] as const;

export function ScrollRail() {
  const [active, setActive] = useState("home");
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target.id);
    }, { rootMargin: "-30% 0px -55% 0px", threshold: [0.05, 0.35, 0.7] });
    sections.forEach(([sectionId]) => { const element = document.getElementById(sectionId); if (element) observer.observe(element); });
    return () => observer.disconnect();
  }, []);
  return <><motion.div className="scroll-progress" style={{ scaleY: progress }} aria-hidden="true"/><nav className="scroll-rail" aria-label="Section navigation">{sections.map(([sectionId, label], index) => <a className={`focus-ring scroll-rail-link ${active === sectionId ? "is-active" : ""}`} href={`#${sectionId}`} key={sectionId} aria-current={active === sectionId ? "location" : undefined}><span className="scroll-rail-number">0{index + 1}</span><span className="scroll-rail-label">{label}</span></a>)}</nav></>;
}
