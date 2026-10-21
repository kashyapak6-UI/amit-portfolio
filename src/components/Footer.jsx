import { profile, contact } from "../constants/content";

const Footer = () => (
  <footer className="w-full border-t border-white/10 bg-ink-900 section-pad py-10">
    <div className="flex flex-col items-center justify-between gap-4 font-grotesk text-xs uppercase tracking-widest text-white/40 md:flex-row">
      <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
      <p className="font-display text-base font-extrabold normal-case tracking-normal text-white/70">{profile.name} — {profile.role}</p>
      <div className="flex gap-5">
        {contact.socials.map((s) => (
          <a key={s.label} href={s.href} className="hover:text-lime-300">{s.label}</a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
