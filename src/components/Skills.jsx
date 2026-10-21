import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import AnimatedTitle from "./AnimatedTitle";
import Tilt from "./Tilt";
import { skills } from "../constants/content";

gsap.registerPlugin(ScrollTrigger);

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
      // animated level bars + numbers
      gsap.utils.toArray(".skill-card").forEach((card) => {
        const level = Number(card.dataset.level);
        const st = { trigger: card, start: "top 85%", toggleActions: "play none none reverse" };
        gsap.fromTo(card.querySelector(".skill-bar"), { scaleX: 0 }, { scaleX: level / 100, duration: 1.6, ease: "power3.out", delay: 0.4, scrollTrigger: st });
        gsap.fromTo(card.querySelector(".skill-num"), { textContent: 0 }, { textContent: level, duration: 1.6, delay: 0.4, snap: { textContent: 1 }, scrollTrigger: st });
      });
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
      <AnimatedTitle title="Skills &amp;<br />superpowers" containerClass="text-5xl md:text-8xl text-cream-50 mb-20" />

      <div className="skill-grid skill-stage grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s) => (
          <div key={s.name} className="skill-card" data-level={s.level} style={{ transformStyle: "preserve-3d" }}>
            <Tilt className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-ink-700/80 p-7" strength={12}>
              <div className="absolute -right-10 -top-10 size-40 rounded-full opacity-20 blur-2xl" style={{ background: s.color }} />
              <div className="flex items-center justify-between" style={{ transform: "translateZ(30px)" }}>
                <span
                  className="flex-center size-14 rounded-2xl border-2 font-display text-xl font-extrabold"
                  style={{ borderColor: s.color, color: s.color, background: `${s.color}1a` }}
                >
                  {s.short}
                </span>
                <span className="font-display text-4xl font-extrabold">
                  <span className="skill-num">{s.level}</span>
                  <span className="text-xl text-white/40">%</span>
                </span>
              </div>
              <h3 className="mt-8 font-display text-2xl font-bold uppercase">{s.name}</h3>
              <div className="mt-5 h-2 w-full overflow-hidden rounded-full bg-white/10">
                <div className="skill-bar h-full w-full origin-left rounded-full" style={{ background: s.color, transform: `scaleX(${s.level / 100})` }} />
              </div>
            </Tilt>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
