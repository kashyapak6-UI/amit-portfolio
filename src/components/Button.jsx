import clsx from "clsx";

// Rolling-text button (pattern from the reference repo)
const Button = ({ id, title, rightIcon, leftIcon, containerClass, href, type = "button", onClick }) => {
  const Tag = href ? "a" : "button";
  return (
    <Tag
      id={id}
      href={href}
      type={href ? undefined : type}
      onClick={onClick}
      className={clsx(
        "btn-roll group relative z-10 inline-flex w-fit cursor-pointer items-center gap-2 overflow-hidden rounded-full bg-lime-300 px-7 py-3 text-ink-900",
        containerClass
      )}
    >
      {leftIcon}
      <span className="relative inline-flex overflow-hidden font-grotesk text-xs font-semibold uppercase tracking-widest">
        <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
          {title}
        </div>
        <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
          {title}
        </div>
      </span>
      {rightIcon}
    </Tag>
  );
};

export default Button;
