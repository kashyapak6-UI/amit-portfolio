import { navItems, profile } from "../constants/content";
import { scrollToHash } from "./Navbar";

// Short footer: © line + nav links only (contact details live in Contact)
const Footer = () => (
  <footer className="w-full border-t border-white/10 bg-ink-900 section-pad footer-safe py-10">
    <div className="flex flex-col items-center justify-between gap-4 font-grotesk text-xs uppercase tracking-widest text-white/40 md:flex-row">
      <p>© {new Date().getFullYear()} {profile.name}</p>
      <nav className="flex flex-wrap justify-center gap-5">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={(e) => scrollToHash(e, item.href)} className="footer-link hover:text-lime-300">
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  </footer>
);

export default Footer;
