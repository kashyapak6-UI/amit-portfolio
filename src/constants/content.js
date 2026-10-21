// ---------------------------------------------------------------
//  ALL SITE CONTENT LIVES HERE. Text comes from Amit Kashyap's CV.
//  Project images are still placeholders (picsum.photos) — swap
//  `image` for your own files in /public/projects later.
// ---------------------------------------------------------------

export const profile = {
  name: "Amit Kashyap",
  shortName: "Amit",
  role: "Graphic & Web UI Designer",
  location: "Ludhiana, India",
  greeting: "Hello, I am Amit!",
  tagline: "“Short and sweet” is my mantra. I emphasize simplicity and elegance in my digital designs.",
  heroLines: ["Design that", "moves people"],
  available: "Based in Ludhiana, India · Remote & on-site",
  portfolioUrl:
    "https://amitkashyap.my.canva.site/brand-designer-portfolio-website-in-beige-black-bronze-warm-classic-style",
};

export const navItems = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

// Project names/descriptions from the CV. Images are placeholders.
export const projects = [
  {
    title: "MyChamp11 App UI",
    category: "Mobile App UI",
    year: "2024–25",
    description: "Mobile app UI screens for the MyChamp11 fantasy cricket gaming app (GrizonTech).",
    image: "https://picsum.photos/seed/amit-mychamp11/1200/900",
    accent: "#5ce1ff",
  },
  {
    title: "Gaming Brand Social Creatives",
    category: "Social Media",
    year: "2024–25",
    description: "Social media creatives and graphic card visuals for the gaming brand (GrizonTech).",
    image: "https://picsum.photos/seed/amit-gaming/1200/900",
    accent: "#d4ff3f",
  },
  {
    title: "Website Landing Pages",
    category: "Website UI",
    year: "2024–25",
    description: "Website UI layouts for landing and internal pages, plus dashboard layouts for client platforms (GrizonTech).",
    image: "https://picsum.photos/seed/amit-webui/1200/900",
    accent: "#a98bff",
  },
  {
    title: "Starzlink AI Reels",
    category: "AI Content",
    year: "2023–24",
    description: "AI-based reels, social creatives, branding visuals and campaign assets for Starzlink Corporation.",
    image: "https://picsum.photos/seed/amit-starzlink/1200/900",
    accent: "#ff5c8a",
  },
  {
    title: "Digital Handlers Social Campaigns",
    category: "Social Media",
    year: "2023",
    description: "High-volume social creatives (12–13 per day) for food, education and immigration clients.",
    image: "https://picsum.photos/seed/amit-digitalhandlers/1200/900",
    accent: "#ffb547",
  },
  {
    title: "TTC Robotronics Steel Branding",
    category: "Branding",
    year: "2022",
    description: "Social creatives and branding visuals for steel industry projects, delivered under tight deadlines.",
    image: "https://picsum.photos/seed/amit-ttc/1200/900",
    accent: "#7cffb2",
  },
];

export const about = {
  heading: "Hi, I'm Amit Kashyap",
  image: "https://picsum.photos/seed/amit-studio/1600/1000",
  paragraphs: [
    "Creative Graphic and Web UI Designer with over 4 years of experience specializing in social media creatives, branding, website UI layouts, mobile app screens (basic level), and AI-generated visual content.",
    "Experienced in both full-time and freelance projects with a strong background in remote work environments. Skilled in delivering high-volume digital designs across multiple industries including gaming, technology, real estate, and digital marketing using Photoshop, Illustrator, Figma, Canva, and modern AI creative tools.",
    "I'm passionate about brand design, illustration, and print design, aiming to establish a presence in digital media and technology. I'm eager to collaborate with individuals and organizations to showcase my distinctive style. If you're interested in creating impactful visual art together, let's connect!",
  ],
  // All numbers come from the CV.
  stats: [
    { value: 4, suffix: "+", label: "Years experience" },
    { value: 1000, suffix: "+", label: "Social creatives" },
    { value: 6, suffix: "", label: "Companies" },
  ],
};

// The CV lists no proficiency levels, so none are shown.
export const tools = [
  { name: "Adobe Photoshop", short: "Ps", color: "#31a8ff" },
  { name: "Adobe Illustrator", short: "Ai", color: "#ff9a00" },
  { name: "Figma", short: "Fg", color: "#a259ff" },
  { name: "Canva", short: "Cv", color: "#00c4cc" },
  { name: "AI Creative Tools", short: "AI", color: "#d4ff3f", note: "Image, video & voice generation" },
];

export const coreSkills = [
  "Social Media Creatives & Branding",
  "Website UI Design (landing & internal pages)",
  "Mobile App UI Screens (basic level)",
  "AI Generated Images, Videos & Reels",
  "Digital Visual Content Creation",
];

// Design focuses from the Canva portfolio + CV core skills
export const services = ["Social Media", "Branding", "UI Design", "App UI Screens", "AI Images & Reels", "Video", "Logo"];

export const experience = [
  {
    role: "Graphic & Web UI Designer",
    company: "GrizonTech",
    location: "Ludhiana (Remote)",
    period: "Aug 2024 – Dec 2025",
    points: [
      "Designed website UI layouts for landing and internal pages.",
      "Created mobile app UI screens for the “MyChamp11” fantasy cricket gaming app.",
      "Produced social media creatives and graphic card visuals for the gaming brand.",
      "Designed dashboard layouts and digital creatives for client platforms.",
    ],
  },
  {
    role: "Creative Graphic Designer",
    company: "Starzlink Corporation",
    location: "Ludhiana",
    period: "Aug 2023 – Aug 2024",
    points: ["Social media creatives and AI-based reels.", "Branding visuals.", "Campaign creative assets."],
  },
  {
    role: "Graphic Designer",
    company: "Digital Handlers India",
    location: "Ludhiana",
    period: "Feb 2023 – Jul 2023",
    points: ["High-volume social creatives (12–13 per day) for food, education and immigration clients."],
  },
  {
    role: "Graphic Designer",
    company: "VPro Infotech",
    location: "Ludhiana",
    period: "Jun 2022 – Dec 2022",
    points: ["Social media marketing graphics.", "Branding and promotional materials.", "Consistent visual themes across campaigns."],
  },
  {
    role: "Graphic Designer",
    company: "TTC Robotronics",
    location: "Ludhiana",
    period: "Apr 2022 – Jun 2022",
    points: ["Social creatives and branding visuals for steel industry projects.", "High-volume work under tight deadlines."],
  },
  {
    role: "Graphic Designer",
    company: "Media Vox",
    location: "Ludhiana",
    period: "Feb 2020 – May 2020",
    points: ["Social creatives for immigration and property service brands while keeping brand identity."],
  },
];

export const education = [
  {
    title: "Professional Graphic Design & Creative Courses",
    place: "Brilliko Institutes, Ludhiana",
    period: "",
    detail: "Graphic design tools, digital media and creative technologies.",
  },
  {
    title: "Senior Secondary School",
    place: "Blossom Global English Senior Secondary School, Ludhiana",
    period: "2014",
    detail: "",
  },
];

export const achievements = [
  "Designed 1000+ social media creatives across brands and industries.",
  "Consistent high-volume delivery under tight deadlines.",
  "Long-term remote work experience.",
  "Contributed to mobile app UI and website UI projects for major clients.",
];

export const contact = {
  heading: "Let's make something bold",
  cta: "Reach out if you want to create impactful visual art together.",
  email: "amitkashyap777999@gmail.com",
  phones: ["+91-9803277171", "7505973969"],
  location: "Ludhiana, India",
  links: [{ label: "Canva Portfolio", href: profile.portfolioUrl }],
};
