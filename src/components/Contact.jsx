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
      <AnimatedTitle title={contact.heading.replace("something ", "something<br />")} containerClass="text-5xl md:text-8xl text-cream-50 mb-8" />
      <p className="mb-16 max-w-xl font-body text-lg text-white/65 md:text-xl">{contact.cta}</p>

      <div className="contact-panel grid gap-10 rounded-[2rem] border border-white/10 bg-gradient-to-br from-violet-400/30 via-ink-800 to-ink-800 p-6 md:grid-cols-5 md:p-12">
        <div className="flex flex-col justify-between gap-10 md:col-span-2">
          <div className="space-y-5">
            <a href={`mailto:${contact.email}`} className="contact-link flex items-center gap-3 break-all font-display text-lg font-bold hover:text-lime-300 md:text-xl">
              <HiOutlineEnvelope className="shrink-0 text-lime-300" /> {contact.email}
            </a>
            {contact.phones.map((ph) => (
              <a key={ph} href={`tel:${ph.startsWith("+") ? ph.replace(/-/g, "") : "+91" + ph}`} className="contact-link flex items-center gap-3 font-grotesk text-white/70 hover:text-lime-300">
                <HiOutlinePhone className="text-lime-300" /> {ph}
              </a>
            ))}
          </div>
        </div>

        <form onSubmit={onSubmit} className="grid gap-4 md:col-span-3 md:grid-cols-2">
          <input required name="name" placeholder="Your name" className="input-field" />
          <input required type="email" name="email" placeholder="Email address" className="input-field" />
          <select name="type" className="input-field md:col-span-2" defaultValue="">
            <option value="" disabled>Project type</option>
            <option>Social Media Creatives</option>
            <option>Branding</option>
            <option>Website UI</option>
            <option>Mobile App UI</option>
            <option>AI Images / Videos / Reels</option>
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
