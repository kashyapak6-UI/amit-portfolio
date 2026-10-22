import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HiOutlineAcademicCap, HiOutlineTrophy } from "react-icons/hi2";

import AnimatedTitle from "./AnimatedTitle";
import Tilt from "./Tilt";
import { experience, education, achievements } from "../constants/content";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const root = useRef(null);

  useGSAP(
    () => {
      // timeline spine draws itself with scroll
      gsap.fromTo(
        ".exp-line",
        { scaleY: 0 },
        { scaleY: 1, ease: "none", scrollTrigger: { trigger: ".exp-list", start: "top 70%", end: "bottom 70%", scrub: true } }
      );
      // each job card swings out of a tilted 3D plane
      gsap.utils.toArray(".exp-item").forEach((item, i) => {
        const fromLeft = i % 2 === 0;
        gsap.fromTo(
          item.querySelector(".exp-card"),
          { rotateY: fromLeft ? -50 : 50, rotateX: 20, z: -300, x: fromLeft ? -80 : 80, opacity: 0 },
          {
            rotateY: 0,
            rotateX: 0,
            z: 0,
            x: 0,
            opacity: 1,
            ease: "power2.out",
            scrollTrigger: { trigger: item, start: "top 92%", end: "top 55%", scrub: 1 },
          }
        );
        gsap.fromTo(
          item.querySelector(".exp-dot"),
          { scale: 0 },
          { scale: 1, ease: "back.out(3)", duration: 0.6, scrollTrigger: { trigger: item, start: "top 70%", toggleActions: "play none none reverse" } }
        );
      });
      gsap.fromTo(
        ".edu-card",
        { rotateX: -60, y: 80, opacity: 0, transformOrigin: "50% 0%" },
        { rotateX: 0, y: 0, opacity: 1, stagger: 0.15, duration: 1.1, ease: "power3.out", scrollTrigger: { trigger: ".edu-grid", start: "top 85%", toggleActions: "play none none reverse" } }
      );
    },
    { scope: root }
  );

  return (
    <section id="experience" ref={root} className="relative w-full bg-ink-900 section-pad py-32">
      <p className="eyebrow mb-6">Experience</p>
      <AnimatedTitle title="Where I've<br />worked" containerClass="text-5xl md:text-8xl text-cream-50 mb-6" />
      <p className="mb-20 font-grotesk text-sm text-white/50">All roles in Ludhiana unless marked remote.</p>

      <div className="exp-list relative" style={{ perspective: "1400px" }}>
        <div className="exp-line absolute left-4 top-0 h-full w-[2px] origin-top bg-gradient-to-b from-lime-300 via-violet-300 to-transparent md:left-1/2" />
        <div className="space-y-14">
          {experience.map((job, i) => (
            <div key={job.company} className={`exp-item relative flex md:w-1/2 ${i % 2 === 0 ? "md:pr-14" : "md:ml-auto md:pl-14"}`}>
              <span
                className={`exp-dot absolute left-[9px] top-8 size-4 rounded-full bg-lime-300 shadow-[0_0_20px_#d4ff3f] ${
                  i % 2 === 0 ? "md:left-auto md:right-[-8px]" : "md:left-[-8px]"
                }`}
              />
              <div className="exp-card w-full pl-12 md:pl-0" style={{ transformStyle: "preserve-3d" }}>
                <Tilt className="rounded-3xl border border-white/10 bg-ink-800/90 p-7" strength={6}>
                  <p className="font-grotesk text-xs uppercase tracking-widest text-lime-300">{job.period}</p>
                  <h3 className="mt-3 font-display text-2xl font-bold uppercase md:text-3xl">{job.role}</h3>
                  <p className="mt-1 font-grotesk text-sm text-white/55">
                    {job.company}
                    {job.location && ` · ${job.location}`}
                  </p>
                  <ul className="mt-5 space-y-2">
                    {job.points.map((pt) => (
                      <li key={pt} className="flex gap-3 font-body text-sm text-white/70">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-violet-300" /> {pt}
                      </li>
                    ))}
                  </ul>
                </Tilt>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="edu-grid mt-32 grid gap-6 md:grid-cols-2" style={{ perspective: "1200px" }}>
        <div className="edu-card rounded-[2rem] border border-white/10 bg-gradient-to-br from-violet-400/25 to-ink-800 p-8">
          <p className="eyebrow mb-6 flex items-center gap-2">
            <HiOutlineAcademicCap className="text-lg" /> Education
          </p>
          <div className="space-y-6">
            {education.map((e) => (
              <div key={e.title}>
                {e.period && <p className="font-grotesk text-xs uppercase tracking-widest text-white/45">{e.period}</p>}
                <h3 className="mt-1 font-display text-xl font-bold uppercase">{e.title}</h3>
                <p className="font-grotesk text-sm text-white/60">{e.place}</p>
                {e.detail && <p className="mt-1 font-body text-sm text-white/50">{e.detail}</p>}
              </div>
            ))}
          </div>
        </div>
        <div className="edu-card rounded-[2rem] border border-white/10 bg-gradient-to-br from-lime-300/15 to-ink-800 p-8">
          <p className="eyebrow mb-6 flex items-center gap-2">
            <HiOutlineTrophy className="text-lg" /> Achievements
          </p>
          <ul className="space-y-4">
            {achievements.map((a) => (
              <li key={a} className="flex gap-3 font-body text-base text-white/75">
                <span className="font-display text-lime-300">✦</span> {a}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
