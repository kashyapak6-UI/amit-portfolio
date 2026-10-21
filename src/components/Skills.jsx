import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import AnimatedTitle from "./AnimatedTitle";
import Tilt from "./Tilt";
import { tools, coreSkills } from "../constants/content";

gsap.registerPlugin(ScrollTrigger);

// Tools & core skills from the CV. The CV gives no proficiency levels, so none are shown.
const Skills = () => {
  const root = useRef(null);

  useGSAP(
    () => {
      // 3D card flip-in, staggered
      gsap.fromTo(
        ".skill-card",
        { rotateY: -95, rotateX: 25, z: -250, opacity: 0 },
        {
          rotateY: 0,
          rotateX: 0,
          z: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: { trigger: ".skill-grid", start: "top 80%", toggleActions: "play none none reverse" },
        }
      );
      // core skill rows swing in from a tilted plane
      gsap.fromTo(
        ".core-skill",
        { rotateX: -70, y: 60, opacity: 0, transformOrigin: "50% 0%" },
        {
          rotateX: 0,
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: { trigger: ".core-list", start: "top 85%", toggleActions: "play none none reverse" },
        }
      );
      // rotating 3D ring in the background
      gsap.to(".skill-ring", { rotateX: 70, rotateZ: 360, ease: "none", scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom top", scrub: true } });
    },
    { scope: root }
  );

  return (
    <section id="skills" ref={root} className="relative w-full overflow-hidden bg-ink-800 section-pad py-32">
      <div className="pointer-events-none absolute right-[-10rem] top-10 hidden md:block" style={{ perspective: "800px" }}>
        <div className="skill-ring size-[34rem] rounded-full border-[18px] border-violet-300/20" style={{ transform: "rotateX(55deg)" }} />
      </div>

      <p className="eyebrow mb-6">Toolbox</p>
      <AnimatedTitle title="Skills &amp;<br />tools" containerClass="text-5xl md:text-8xl text-cream-50 mb-20" />

      <h3 className="mb-6 font-grotesk text-xs uppercase tracking-[0.3em] text-white/50">Tools</h3>
      <div className="skill-grid skill-stage grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {tools.map((s) => (
          <div key={s.name} className="skill-card" style={{ transformStyle: "preserve-3d" }}>
            <Tilt className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-ink-700/80 p-7" strength={12}>
              <div className="absolute -right-10 -top-10 size-40 rounded-full opacity-20 blur-2xl" style={{ background: s.color }} />
              <span
                className="flex-center size-14 rounded-2xl border-2 font-display text-xl font-extrabold"
                style={{ borderColor: s.color, color: s.color, background: `${s.color}1a`, transform: "translateZ(30px)" }}
              >
                {s.short}
              </span>
              <h4 className="mt-8 font-display text-xl font-bold uppercase">{s.name}</h4>
              {s.note && <p className="mt-2 font-body text-sm text-white/50">{s.note}</p>}
            </Tilt>
          </div>
        ))}
      </div>

      <h3 className="mb-6 mt-20 font-grotesk text-xs uppercase tracking-[0.3em] text-white/50">Core skills</h3>
      <ul className="core-list grid gap-4 md:grid-cols-2" style={{ perspective: "1000px" }}>
        {coreSkills.map((c, i) => (
          <li key={c} className="core-skill flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 px-6 py-5">
            <span className="font-display text-2xl font-extrabold text-lime-300">0{i + 1}</span>
            <span className="font-display text-lg font-bold uppercase md:text-xl">{c}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
