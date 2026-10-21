import { services } from "../constants/content";

const Marquee = () => {
  const items = [...services, ...services];
  return (
    <div className="relative z-20 -ml-[5%] w-[110%] -rotate-2 border-y border-white/10 bg-lime-300 py-4 text-ink-900">
      <div className="flex w-max marquee-track">
        {items.map((s, i) => (
          <span key={i} className="flex items-center gap-8 pr-8 font-display text-2xl font-extrabold uppercase md:text-4xl">
            {s} <span className="text-xl">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
