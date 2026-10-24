import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, MeshWobbleMaterial, RoundedBox, Sparkles, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

// Group that follows the mouse and rotates/zooms with page scroll
const Rig = ({ children }) => {
  const group = useRef();
  useFrame((state, delta) => {
    const scroll = Math.min(window.scrollY / window.innerHeight, 1.5);
    const g = group.current;
    g.rotation.y = THREE.MathUtils.damp(g.rotation.y, state.pointer.x * 0.45 + scroll * 1.6, 4, delta);
    g.rotation.x = THREE.MathUtils.damp(g.rotation.x, -state.pointer.y * 0.3 + scroll * 0.6, 4, delta);
    g.position.y = THREE.MathUtils.damp(g.position.y, scroll * 2.2, 4, delta);
    const base = Math.min(1, state.viewport.aspect * 0.8 + 0.15); // shrink on portrait/mobile
    const s = base * (1 - scroll * 0.25);
    g.scale.setScalar(THREE.MathUtils.damp(g.scale.x, s, 4, delta));
    state.camera.position.x = THREE.MathUtils.damp(state.camera.position.x, state.pointer.x * 0.6, 3, delta);
    state.camera.lookAt(0, 0, 0);
  });
  return <group ref={group}>{children}</group>;
};

const Spinner = ({ speed = 0.3, children, ...props }) => {
  const ref = useRef();
  useFrame((_, delta) => {
    ref.current.rotation.x += delta * speed;
    ref.current.rotation.y += delta * speed * 1.3;
  });
  return (
    <mesh ref={ref} castShadow {...props}>
      {children}
    </mesh>
  );
};

// Phones/tablets: lighter render (lower DPR, no shadow maps, fewer sparkles). Desktop unchanged.
const isTouchPhone = typeof window !== "undefined" && window.matchMedia?.("(pointer: coarse) and (max-width: 1024px)").matches;

const Shapes = () => (
  <Rig>
    {/* centre blob */}
    <Float speed={1.6} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh position={[0, 0, 0]} castShadow>
        <icosahedronGeometry args={[1.35, 24]} />
        <MeshDistortMaterial color="#7c5cff" roughness={0.15} metalness={0.35} distort={0.38} speed={2} />
      </mesh>
    </Float>

    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <Spinner position={[2.7, 1.1, -0.6]} speed={0.4}>
        <torusKnotGeometry args={[0.5, 0.17, 160, 24]} />
        <meshStandardMaterial color="#d4ff3f" roughness={0.25} metalness={0.5} />
      </Spinner>
    </Float>

    <Float speed={1.4} rotationIntensity={2} floatIntensity={1.5}>
      <RoundedBox args={[0.9, 0.9, 0.9]} radius={0.15} smoothness={6} position={[-2.8, -0.9, 0.2]} rotation={[0.5, 0.6, 0]} castShadow>
        <meshStandardMaterial color="#ff5c8a" roughness={0.3} metalness={0.2} />
      </RoundedBox>
    </Float>

    <Float speed={2.4} rotationIntensity={1} floatIntensity={2.5}>
      <Spinner position={[-2.2, 1.7, -1.2]} speed={0.25}>
        <torusGeometry args={[0.45, 0.16, 32, 64]} />
        <MeshWobbleMaterial color="#5ce1ff" factor={0.6} speed={1.5} roughness={0.2} />
      </Spinner>
    </Float>

    <Float speed={1.8} rotationIntensity={1.2} floatIntensity={1.8}>
      <Spinner position={[2.1, -1.6, 0.6]} speed={0.35}>
        <octahedronGeometry args={[0.55, 0]} />
        <meshStandardMaterial color="#ffb547" roughness={0.2} metalness={0.6} flatShading />
      </Spinner>
    </Float>

    <Float speed={3} floatIntensity={3}>
      <mesh position={[0.6, 2.1, -2]}>
        <sphereGeometry args={[0.22, 32, 32]} />
        <meshStandardMaterial color="#f3f1ea" roughness={0.1} metalness={0.8} />
      </mesh>
    </Float>

    <Sparkles count={isTouchPhone ? 40 : 70} scale={[10, 6, 4]} size={2.2} speed={0.4} color="#d4ff3f" opacity={0.7} />
  </Rig>
);

const HeroScene = () => {
  // pause the render loop while the hero is off-screen (saves battery on phones)
  const wrap = useRef(null);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const el = wrap.current?.closest("#hero") || wrap.current;
    if (!el || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { rootMargin: "100px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={wrap} className="absolute inset-0">
      <Canvas
        shadows={!isTouchPhone}
        dpr={isTouchPhone ? [1, 1.25] : [1, 1.75]}
        frameloop={visible ? "always" : "never"}
        camera={{ position: [0, 0, 7], fov: 45 }}
        gl={{ antialias: !isTouchPhone, alpha: true, powerPreference: "high-performance" }}
        className="!absolute inset-0"
      >
        <ambientLight intensity={0.55} />
        <directionalLight position={[4, 6, 5]} intensity={2.2} castShadow />
        <pointLight position={[-5, -2, 3]} intensity={40} color="#7c5cff" />
        <pointLight position={[5, -3, 2]} intensity={25} color="#d4ff3f" />
        <hemisphereLight args={["#ffffff", "#1a1030", 0.6]} />
        <Shapes />
        <ContactShadows position={[0, -2.8, 0]} opacity={0.45} scale={14} blur={2.8} far={5} color="#000000" frames={isTouchPhone ? 1 : Infinity} />
      </Canvas>
    </div>
  );
};

export default HeroScene;
