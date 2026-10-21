import { useRef, useState } from "react";

// Mouse-driven 3D tilt (adapted from the reference repo's BentoTilt)
const Tilt = ({ children, className = "", strength = 8, scale = 0.97 }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;
    const { left, top, width, height } = itemRef.current.getBoundingClientRect();
    const rx = ((event.clientY - top) / height - 0.5) * strength;
    const ry = ((event.clientX - left) / width - 0.5) * -strength;
    setTransformStyle(`perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(${scale}, ${scale}, ${scale})`);
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTransformStyle("")}
      style={{ transform: transformStyle, transition: "transform 0.25s ease-out", transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  );
};

export default Tilt;
