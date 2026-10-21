import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { HiArrowUpRight, HiOutlineEnvelope, HiOutlinePhone } from "react-icons/hi2";

import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";
import { contact } from "../constants/content";

const Contact = () => {
  const root = useRef(null);
  const [sent, setSent] = useState(false);

  useGSAP(
    () => {
      gsap.fromTo(
        ".contact-panel",
        { rotateX: 35, y: 120, opacity: 0, transformOrigin: "50% 100%" },
        { rotateX: 0, y: 0, opacity: 1, ease: "power2.out", scrollTrigger: { trigger: ".contact-panel", start: "top 95%", end: "top 55%", scrub: 1 } }
      );
    },
    { scope: root }
  );

  // UI only — no backend. Hook this up to Formspree/EmailJS later if needed.
  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    e.target.reset();
  };

  return (
    <section id="contact" ref={root} className="relative w-full bg-ink-900 section-pad py-32" style={{ perspective: "1200px" }}>
      <p className="eyebrow mb-6">Contact</p>
      <AnimatedTitle title={contact.heading.replace("something ", "something<br />")} containerClass="text-5xl md:text-8xl text-cream-50 mb-16" />

      <div className="contact-panel grid gap-10 rounded-[2rem] border border-white/10 bg-gradient-to-br from-violet-400/30 via-ink-800 to-ink-800 p-6 md:grid-cols-5 md:p-12">
        <div className="flex flex-col justify-between gap-10 md:col-span-2">
          <div className="space-y-5">
            <a href={`mailto:${contact.email}`} className="flex items-center gap-3 font-display text-xl font-bold hover:text-lime-300 md:text-2xl">
              <HiOutlineEnvelope className="text-lime-300" /> {contact.email}
            </a>
            <p className="flex items-center gap-3 font-grotesk text-white/60">
              <HiOutlinePhone className="text-lime-300" /> {contact.phone}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {contact.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="group flex items-center gap-1 rounded-full border border-white/15 px-5 py-2.5 font-grotesk text-xs uppercase tracking-widest transition hover:border-lime-300 hover:bg-lime-300 hover:text-ink-900"
              >
                {s.label} <HiArrowUpRight className="transition group-hover:rotate-45" />
              </a>
            ))}
          </div>
        </div>

        <form onSubmit={onSubmit} className="grid gap-4 md:col-span-3 md:grid-cols-2">
          <input required name="name" placeholder="Your name" className="input-field" />
          <input required type="email" name="email" placeholder="Email address" className="input-field" />
          <select name="type" className="input-field md:col-span-2" defaultValue="">
            <option value="" disabled>Project type</option>
            <option>Branding</option>
            <option>Packaging</option>
            <option>Poster / Print</option>
            <option>UI Design</option>
            <option>Other</option>
          </select>
          <textarea required name="message" rows={5} placeholder="Tell me about your project" className="input-field md:col-span-2" />
          <div className="flex items-center gap-4 md:col-span-2">
            <Button type="submit" title="Send message" rightIcon={<HiArrowUpRight />} />
            {sent && <span className="font-grotesk text-sm text-lime-300">Thanks! (Demo form — not sent anywhere yet.)</span>}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
