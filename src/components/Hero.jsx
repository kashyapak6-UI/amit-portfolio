import { Component, Suspense, lazy, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HiArrowDown } from "react-icons/hi";

import Button from "./Button";
import { scrollToHash } from "./Navbar";
import { profile } from "../constants/content";

gsap.registerPlugin(ScrollTrigger);
const HeroScene = lazy(() => import("./HeroScene"));

// If WebGL is unavailable, hide the 3D scene instead of crashing the whole page
class SceneBoundary extends Component {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? null : this.props.children;
  }
}

const Hero = () => {
  const root = useRef(null);

  useGSAP(
    () => {
      // Intro: 3D line flip-in
      gsap.from(".hero-line", {
        yPercent: 110,
        rotateX: -80,
        opacity: 0,
        transformOrigin: "50% 100% -100px",
        stagger: 0.15,
        duration: 1.3,
        ease: "power4.out",
        delay: 0.2,
      });
      gsap.from(".hero-fade", { y: 30, opacity: 0, stagger: 0.1, duration: 1, delay: 0.8, ease: "power3.out" });

      // Scroll: frame clips into a tilted polygon (clip-path trick from the reference Hero)
      gsap.set("#hero-frame", { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", borderRadius: "0% 0% 0% 0%" });
      gsap.to("#hero-frame", {
        clipPath: "polygon(10% 0%, 88% 0%, 80% 88%, 2% 96%)",
        borderRadius: "0% 0% 30% 8%",
        ease: "power1.inOut",
        scrollTrigger: { trigger: "#hero-frame", start: "center center", end: "bottom center", scrub: true },
      });
      gsap.to(".hero-copy", {
        yPercent: -40,
        opacity: 0.2,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
      });
    },
    { scope: root }
  );

  return (
    <section id="hero" ref={root} className="relative h-dvh w-full overflow-x-hidden">
      <div id="hero-frame" className="grain relative z-10 h-dvh w-full overflow-hidden bg-[radial-gradient(ellipse_at_top,#1d1440_0%,#0b0b12_55%,#07070a_100%)]">
        <SceneBoundary>
          <Suspense fallback={null}>
            <HeroScene />
          </Suspense>
        </SceneBoundary>

        <div className="hero-copy pointer-events-none absolute inset-0 z-10 flex flex-col justify-between section-pad pb-10 pt-28">
          <div className="hero-fade flex items-center gap-3">
            <span className="size-2 animate-pulse rounded-full bg-lime-300" />
            <span className="eyebrow">{profile.available}</span>
          </div>

          <div style={{ perspective: "1200px" }}>
            <p className="hero-fade mb-3 font-display text-2xl font-bold text-lime-300 md:text-3xl">{profile.greeting}</p>
            <p className="hero-fade mb-4 font-grotesk text-sm uppercase tracking-[0.35em] text-white/60">
              {profile.role}
            </p>
            {profile.heroLines.map((line, i) => (
              <div key={line} className="overflow-hidden">
                <h1 className={`hero-line hero-heading ${i === 1 ? "outline-text" : ""}`}>{line}</h1>
              </div>
            ))}
          </div>

          <div className="hero-fade pointer-events-auto flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <p className="max-w-md font-body text-base text-white/70 md:text-lg">{profile.tagline}</p>
            <div className="flex gap-3">
              <Button title="See my work" href="#work" onClick={(e) => scrollToHash(e, "#work")} rightIcon={<HiArrowDown />} />
              <Button
                title="Contact"
                href="#contact"
                onClick={(e) => scrollToHash(e, "#contact")}
                containerClass="!bg-white/10 !text-cream-50 border border-white/20 backdrop-blur"
              />
            </div>
          </div>
        </div>
      </div>

      {/* revealed behind the clipped frame */}
      <h1 className="hero-heading absolute bottom-10 right-5 text-lime-300 sm:right-10">{profile.role.split(" ")[0]}</h1>
    </section>
  );
};

export default Hero;
