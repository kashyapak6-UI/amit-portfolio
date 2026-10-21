import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clsx from "clsx";

gsap.registerPlugin(ScrollTrigger);

// 3D word-by-word reveal (adapted from the reference repo's AnimatedTitle)
const AnimatedTitle = ({ title, containerClass, lineClass }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%",
            end: "center bottom",
            toggleActions: "play none none reverse",
          },
        })
        .to(".animated-word", {
          opacity: 1,
          transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
          ease: "power2.inOut",
          stagger: 0.04,
          duration: 0.8,
        });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={clsx("animated-title", containerClass)}>
      {title.split("<br />").map((line, index) => (
        <div key={index} className={clsx("flex max-w-full flex-wrap gap-x-3 md:gap-x-5", lineClass)}>
          {line.split(" ").map((word, idx) => (
            <span key={idx} className="animated-word" dangerouslySetInnerHTML={{ __html: word }} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default AnimatedTitle;
