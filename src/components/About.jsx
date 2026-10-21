import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import AnimatedTitle from "./AnimatedTitle";
import { about, profile } from "../constants/content";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const root = useRef(null);

  useGSAP(
    () => {
      // Pinned clip-path expansion (pattern from the reference repo's About)
      const tl = gsap.timeline({
        scrollTrigger: { trigger: "#about-clip", start: "center center", end: "+=900 center", scrub: 0.5, pin: true, pinSpacing: true },
      });
      tl.to(".about-mask", { width: "100vw", height: "100vh", borderRadius: 0, rotateX: 0, rotateZ: 0 }, 0)
        .to(".about-img", { scale: 1 }, 0)
        .to(".about-overlay-text", { opacity: 1, y: 0 }, 0.4);

      gsap.utils.toArray(".about-stat").forEach((el) => {
        gsap.from(el.querySelector(".stat-num"), {
          textContent: 0,
          duration: 1.6,
          ease: "power2.out",
          snap: { textContent: 1 },
          scrollTrigger: { trigger: el, start: "top 90%" },
        });
      });
      gsap.from(".about-para", {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        scrollTrigger: { trigger: ".about-para", start: "top 85%" },
      });
    },
    { scope: root }
  );

  return (
    <section id="about" ref={root} className="relative w-full bg-ink-900">
      <div className="section-pad flex flex-col items-center gap-6 pt-24 text-center">
        <p className="eyebrow">About me</p>
        <AnimatedTitle title={about.heading.replace(/ /g, " ") + "<br />I shape ideas"} containerClass="text-5xl md:text-8xl text-cream-50 items-center" lineClass="justify-center" />
      </div>

      <div id="about-clip" className="relative h-dvh w-full" style={{ perspective: "1000px" }}>
        <div
          className="about-mask absolute-center overflow-hidden rounded-[2rem]"
          style={{ width: "min(24rem, 80vw)", height: "60vh", transform: "translate(-50%,-50%) rotateX(12deg) rotateZ(-4deg)" }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#7c5cff,#d4ff3f)]" />
          <img src={about.image} alt={`${profile.name} studio`} className="about-img absolute inset-0 size-full scale-125 object-cover" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="about-overlay-text absolute-center w-full translate-y-10 px-6 text-center opacity-0">
            <p className="font-display text-4xl font-extrabold uppercase md:text-7xl">
              Every pixel <span className="text-lime-300">matters</span>
            </p>
          </div>
        </div>
      </div>

      <div className="section-pad grid gap-14 py-28 md:grid-cols-2">
        <div className="space-y-6">
          {about.paragraphs.map((p) => (
            <p key={p} className="about-para font-body text-lg leading-relaxed text-white/70 md:text-xl">{p}</p>
          ))}
        </div>
        <div className="about-stats grid gap-4 self-end">
          {about.stats.map((s) => (
            <div key={s.label} className="about-stat min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="stat-value font-display font-extrabold text-lime-300">
                <span className="stat-num">{s.value}</span>
                {s.suffix}
              </p>
              <p className="stat-label mt-2 font-grotesk text-xs uppercase text-white/50">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
