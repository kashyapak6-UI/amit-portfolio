import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HiArrowUpRight } from "react-icons/hi2";

import AnimatedTitle from "./AnimatedTitle";
import Tilt from "./Tilt";
import { projects } from "../constants/content";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const root = useRef(null);

  useGSAP(
    () => {
      gsap.utils.toArray(".work-card").forEach((card, i) => {
        const fromLeft = i % 2 === 0;
        // 3D scroll reveal: card swings up from a tilted plane while its clip-path opens
        gsap.fromTo(
          card,
          {
            rotateX: -65,
            rotateY: fromLeft ? 18 : -18,
            z: -400,
            y: 160,
            opacity: 0,
            clipPath: "polygon(10% 40%, 90% 40%, 90% 60%, 10% 60%)",
          },
          {
            rotateX: 0,
            rotateY: 0,
            z: 0,
            y: 0,
            opacity: 1,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "power2.out",
            scrollTrigger: { trigger: card, start: "top 95%", end: "top 45%", scrub: 1 },
          }
        );
        // inner image parallax + zoom-out
        gsap.fromTo(
          card.querySelector(".work-img"),
          { scale: 1.35, yPercent: -8 },
          { scale: 1, yPercent: 8, ease: "none", scrollTrigger: { trigger: card, start: "top bottom", end: "bottom top", scrub: true } }
        );
      });

      gsap.from(".work-count", {
        textContent: 0,
        duration: 1.5,
        snap: { textContent: 1 },
        scrollTrigger: { trigger: ".work-count", start: "top 85%" },
      });
    },
    { scope: root }
  );

  return (
    <section id="work" ref={root} className="relative w-full bg-ink-900 section-pad pb-32 pt-40">
      <div className="mb-20 flex flex-col justify-between gap-10 md:flex-row md:items-end">
        <div>
          <p className="eyebrow mb-6">Selected work</p>
          <AnimatedTitle title="Projects that<br />speak loud" containerClass="text-5xl md:text-8xl text-cream-50" />
        </div>
        <p className="max-w-sm font-body text-white/60">
          <span className="work-count font-display text-6xl font-extrabold text-lime-300">{projects.length}</span>
          <span className="ml-2 font-display text-6xl font-extrabold text-lime-300">+</span>
          <br />
          Featured pieces across branding, posters, packaging, UI, logos and illustration.
        </p>
      </div>

      <div className="work-stage grid gap-x-10 gap-y-20 md:grid-cols-2">
        {projects.map((p, i) => (
          <article key={p.title} className={`work-card ${i % 2 === 1 ? "md:mt-40" : ""}`}>
            <Tilt className="group relative cursor-pointer" strength={6}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-ink-700">
                <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${p.accent}55, #16161f)` }} />
                <img src={p.image} alt={p.title} loading="lazy" className="work-img absolute inset-0 size-full object-cover opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <span
                  className="absolute left-5 top-5 rounded-full px-4 py-1.5 font-grotesk text-[11px] font-semibold uppercase tracking-widest text-ink-900"
                  style={{ background: p.accent }}
                >
                  {p.category}
                </span>
                <span className="flex-center absolute right-5 top-5 size-12 rotate-45 rounded-full bg-white/15 text-xl text-white opacity-0 backdrop-blur transition duration-500 group-hover:rotate-0 group-hover:opacity-100">
                  <HiArrowUpRight />
                </span>
                <span className="absolute bottom-4 right-6 font-display text-7xl font-extrabold text-white/15" style={{ transform: "translateZ(40px)" }}>
                  0{i + 1}
                </span>
              </div>
              <div className="mt-6 flex items-start justify-between gap-6">
                <div>
                  <h3 className="font-display text-2xl font-bold uppercase md:text-3xl">{p.title}</h3>
                  <p className="mt-2 max-w-md font-body text-sm text-white/55">{p.description}</p>
                </div>
                <span className="font-grotesk text-sm text-white/40">{p.year}</span>
              </div>
            </Tilt>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Work;
