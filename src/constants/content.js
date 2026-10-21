// ---------------------------------------------------------------
//  ALL PLACEHOLDER CONTENT LIVES HERE. Edit this file to personalise
//  the portfolio (name, text, projects, skills, contact links).
// ---------------------------------------------------------------

export const profile = {
  name: "Amit",
  role: "Graphic Designer",
  location: "India",
  tagline: "I design brands, posters and packaging that people remember.",
  heroLines: ["Design that", "moves people"],
  available: "Available for freelance — 2026",
  resumeUrl: "#",
};

export const navItems = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

// Images: free placeholders from picsum.photos — replace `image` with
// your own files (put them in /public/projects and use "/projects/x.jpg").
export const projects = [
  {
    title: "Lotus Puff Branding",
    category: "Branding",
    year: "2026",
    description: "Complete visual identity for a snack brand — logo, colours, type system.",
    image: "https://picsum.photos/seed/amit-branding/1200/900",
    accent: "#d4ff3f",
  },
  {
    title: "Neon Nights Poster",
    category: "Poster",
    year: "2026",
    description: "Gig poster series with bold type and glowing gradients.",
    image: "https://picsum.photos/seed/amit-poster/1200/900",
    accent: "#ff5c8a",
  },
  {
    title: "Flavour Pack Series",
    category: "Packaging",
    year: "2025",
    description: "Per-flavour packaging system with a shared grid and unique colourways.",
    image: "https://picsum.photos/seed/amit-packaging/1200/900",
    accent: "#ffb547",
  },
  {
    title: "Pulse Fitness App",
    category: "UI Design",
    year: "2025",
    description: "Mobile UI kit and dashboard screens designed in Figma.",
    image: "https://picsum.photos/seed/amit-ui/1200/900",
    accent: "#5ce1ff",
  },
  {
    title: "Monogram Logo Set",
    category: "Logo",
    year: "2025",
    description: "Twelve geometric monograms for small studios and creators.",
    image: "https://picsum.photos/seed/amit-logo/1200/900",
    accent: "#a98bff",
  },
  {
    title: "City Folk Illustrations",
    category: "Illustration",
    year: "2024",
    description: "Editorial illustration series celebrating street life.",
    image: "https://picsum.photos/seed/amit-illustration/1200/900",
    accent: "#7cffb2",
  },
];

export const about = {
  heading: "Hi, I'm Amit",
  image: "https://picsum.photos/seed/amit-studio/1600/1000",
  paragraphs: [
    "I'm a graphic designer who loves turning rough ideas into clean, bold visuals. From brand identities to packaging and posters, I care about every pixel and every fold.",
    "My process is simple: listen, sketch, iterate, and ship work that looks great and works hard for the business behind it.",
  ],
  stats: [
    { value: 5, suffix: "+", label: "Years designing" },
    { value: 80, suffix: "+", label: "Projects shipped" },
    { value: 30, suffix: "+", label: "Happy clients" },
  ],
};

export const skills = [
  { name: "Photoshop", level: 92, short: "Ps", color: "#31a8ff" },
  { name: "Illustrator", level: 90, short: "Ai", color: "#ff9a00" },
  { name: "Figma", level: 85, short: "Fg", color: "#a259ff" },
  { name: "After Effects", level: 75, short: "Ae", color: "#9999ff" },
  { name: "Blender", level: 65, short: "Bl", color: "#f5792a" },
  { name: "Branding", level: 95, short: "Br", color: "#d4ff3f" },
];

export const services = ["Brand Identity", "Packaging", "Posters", "Social Media", "UI Design", "Motion"];

export const contact = {
  heading: "Let's make something bold",
  email: "hello@amit-design.com",
  phone: "+91 00000 00000",
  socials: [
    { label: "Behance", href: "#" },
    { label: "Dribbble", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
  ],
};
