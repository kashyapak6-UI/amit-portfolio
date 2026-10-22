import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { HiOutlineMenuAlt4, HiX } from "react-icons/hi";

import Button from "./Button";
import { navItems, profile } from "../constants/content";

export const scrollToHash = (event, href) => {
  if (!href?.startsWith("#")) return;
  event.preventDefault();
  const target = document.querySelector(href);
  if (!target) return;
  if (window.__lenis) window.__lenis.scrollTo(target, { offset: -20, duration: 1.4 });
  else target.scrollIntoView({ behavior: "smooth" });
};

const NavBar = () => {
  const navContainerRef = useRef(null);
  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  // Hide on scroll down, show (floating) on scroll up — from the reference repo
  useEffect(() => {
    const nav = navContainerRef.current;
    // The reel hero has its own top bar, so this floating nav only appears after the hero
    const heroH = document.getElementById("hero")?.offsetHeight ?? 0;
    if (currentScrollY < Math.max(10, heroH - 80)) {
      setIsNavVisible(false);
      nav.classList.remove("floating-nav");
      if (menuOpen) setMenuOpen(false);
    } else if (currentScrollY > lastScrollY && !menuOpen) {
      setIsNavVisible(false);
      nav.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      nav.classList.add("floating-nav");
    }
    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY, menuOpen]);

  useEffect(() => {
    gsap.to(navContainerRef.current, { y: isNavVisible ? 0 : -110, opacity: isNavVisible ? 1 : 0, duration: 0.3 });
  }, [isNavVisible]);

  const go = (e, href) => {
    setMenuOpen(false);
    scrollToHash(e, href);
  };

  return (
    <div ref={navContainerRef} className="fixed inset-x-3 top-3 z-50 transition-all duration-700 sm:inset-x-6 sm:top-4">
      <header className="w-full">
        <nav className="flex items-center justify-between px-4 py-3">
          <a href="#hero" onClick={(e) => go(e, "#hero")} className="flex items-center gap-3">
            <span className="flex-center size-10 rounded-xl bg-lime-300 font-display text-lg font-extrabold text-ink-900">
              AK
            </span>
            <span className="sr-only">{profile.name} — home</span>
          </a>

          <div className="flex items-center">
            <div className="hidden md:block">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={(e) => go(e, item.href)} className="nav-hover-btn">
                  {item.label}
                </a>
              ))}
            </div>
            <Button title="Hire me" href="#contact" onClick={(e) => go(e, "#contact")} containerClass="ml-8 hidden !py-2.5 md:inline-flex" />
            <button
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((v) => !v)}
              className="flex-center size-10 rounded-xl border border-white/15 text-xl md:hidden"
            >
              {menuOpen ? <HiX /> : <HiOutlineMenuAlt4 />}
            </button>
          </div>
        </nav>

        {menuOpen && (
          <div className="mx-2 mb-2 flex flex-col gap-4 rounded-2xl border border-white/10 bg-ink-800/95 p-6 backdrop-blur md:hidden">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={(e) => go(e, item.href)} className="font-display text-3xl font-bold uppercase">
                {item.label}
              </a>
            ))}
          </div>
        )}
      </header>
    </div>
  );
};

export default NavBar;
