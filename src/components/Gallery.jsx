import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import AnimatedTitle from "./AnimatedTitle";
import { gallery } from "../constants/content";

gsap.registerPlugin(ScrollTrigger);

// Masonry media gallery: 1 col phones, 2 tablets, 3–4 desktop.
// Images lazy-load; videos use native controls and only play on click.
const Gallery = () => {
  const root = useRef(null);
  const images = gallery.filter((g) => g.type === "image").length;
  const videos = gallery.length - images;

  useGSAP(
    () => {
      // 3D tilt-up reveal, batched so many items stay cheap
      gsap.set(".gal-item", { rotateX: -35, y: 70, opacity: 0, transformOrigin: "50% 0%" });
      ScrollTrigger.batch(".gal-item", {
        start: "top 92%",
        onEnter: (els) => gsap.to(els, { rotateX: 0, y: 0, opacity: 1, duration: 0.9, ease: "power3.out", stagger: 0.08, overwrite: true }),
      });
    },
    { scope: root }
  );

  return (
    <section id="gallery" ref={root} className="relative w-full bg-ink-800 section-pad py-32">
      <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <div>
          <p className="eyebrow mb-6">Gallery</p>
          <AnimatedTitle title="Social, posters,<br />logos &amp; video" containerClass="text-5xl md:text-8xl text-cream-50" />
        </div>
        <div className="max-w-sm font-body text-white/60">
          <p>
            {images} images and {videos} videos. Videos play on click.
          </p>
        </div>
      </div>

      <div className="gal-grid columns-1 gap-5 sm:columns-2 lg:columns-3 xl:columns-4" style={{ perspective: "1400px" }}>
        {gallery.map((g) => (
          <figure key={g.src} className="gal-item group relative mb-5 break-inside-avoid overflow-hidden rounded-2xl border border-white/10 bg-ink-700">
            {g.type === "video" ? (
              <video
                className="gal-video block h-auto w-full bg-black"
                src={g.src}
                poster={g.poster}
                width={g.w}
                height={g.h}
                controls
                preload="metadata"
                playsInline
              />
            ) : (
              <img
                className="gal-img block h-auto w-full transition duration-700 group-hover:scale-[1.03]"
                src={g.src}
                alt={`${g.category} design sample`}
                width={g.w}
                height={g.h}
                loading="lazy"
                decoding="async"
              />
            )}
            <figcaption className="pointer-events-none absolute left-3 top-3 rounded-full bg-ink-900/75 px-3 py-1 font-grotesk text-[10px] font-semibold uppercase tracking-widest text-lime-300 backdrop-blur">
              {g.category}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
