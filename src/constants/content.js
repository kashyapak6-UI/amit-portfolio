// ---------------------------------------------------------------
//  ALL SITE CONTENT LIVES HERE. Text comes from Amit Kashyap's CV.
//  All media is served locally from /public/canva.
// ---------------------------------------------------------------

export const profile = {
  name: "Amit Kashyap",
  shortName: "Amit",
  role: "Graphic & Web UI Designer",
  location: "Ludhiana, India",
  greeting: "Hello, I am Amit!",
  tagline: "“Short and sweet” is my mantra. I emphasize simplicity and elegance in my digital designs.",
  heroLines: ["Design that"],
  available: "Based in Ludhiana, India · Remote & on-site",
};

export const navItems = [
  { label: "Work", href: "#work" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

// Project names/descriptions from the CV. Projects without a matching local image show a styled gradient card.
export const projects = [
  {
    title: "MyChamp11 App UI",
    category: "Mobile App UI",
    year: "2024–25",
    description: "Mobile app UI screens for the MyChamp11 fantasy cricket gaming app (GrizonTech).",
    image: null,
    accent: "#5ce1ff",
  },
  {
    title: "Gaming Brand Social Creatives",
    category: "Social Media",
    year: "2024–25",
    description: "Social media creatives and graphic card visuals for the gaming brand (GrizonTech).",
    image: null,
    accent: "#d4ff3f",
  },
  {
    title: "Website Landing Pages",
    category: "Website UI",
    year: "2024–25",
    description: "Website UI layouts for landing and internal pages, plus dashboard layouts for client platforms (GrizonTech).",
    image: "/canva/gallery-banner-04.webp",
    accent: "#a98bff",
  },
  {
    title: "Starzlink AI Reels",
    category: "AI Content",
    year: "2023–24",
    description: "AI-based reels, social creatives, branding visuals and campaign assets for Starzlink Corporation.",
    image: "/canva/gallery-social-05.webp",
    accent: "#ff5c8a",
  },
  {
    title: "Digital Handlers Social Campaigns",
    category: "Social Media",
    year: "2023",
    description: "High-volume social creatives (12–13 per day) for food, education and immigration clients.",
    image: null,
    accent: "#ffb547",
  },
  {
    title: "TTC Robotronics Steel Branding",
    category: "Branding",
    year: "2022",
    description: "Social creatives and branding visuals for steel industry projects, delivered under tight deadlines.",
    image: null,
    accent: "#7cffb2",
  },
];

export const about = {
  heading: "Hi, I'm Amit Kashyap",
  image: "/canva/focus-03.webp",
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
  { name: "Adobe Photoshop", icon: "/icons/photoshop.svg", color: "#31a8ff" },
  { name: "Adobe Illustrator", icon: "/icons/illustrator.svg", color: "#ff9a00" },
  { name: "Figma", icon: "/icons/figma.svg", color: "#a259ff" },
  { name: "Canva", icon: "/icons/canva.svg", color: "#00c4cc" },
  { name: "AI Creative Tools", color: "#d4ff3f", note: "Image, video & voice generation" }, // no icon by design
];

export const coreSkills = [
  "Social Media Creatives & Branding",
  "Website UI Design (landing & internal pages)",
  "Mobile App UI Screens (basic level)",
  "AI Generated Images, Videos & Reels",
  "Digital Visual Content Creation",
];

// Design focuses + CV core skills
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
};

// Media gallery — Amit's own design work (originals in D:\Amit\canva-assets)
export const gallery = [
 {
  "type": "image",
  "src": "/canva/gallery-project-01.webp",
  "w": 1599,
  "h": 1066,
  "category": "Branding",
  "title": "Branding 01"
 },
 {
  "type": "image",
  "src": "/canva/gallery-project-02.webp",
  "w": 1599,
  "h": 1066,
  "category": "Branding",
  "title": "Branding 02"
 },
 {
  "type": "image",
  "src": "/canva/gallery-project-03.webp",
  "w": 1600,
  "h": 1600,
  "category": "Branding",
  "title": "Branding 03"
 },
 {
  "type": "image",
  "src": "/canva/gallery-project-04.webp",
  "w": 1600,
  "h": 1040,
  "category": "Branding",
  "title": "Branding 04"
 },
 {
  "type": "video",
  "src": "/canva/gallery-video-01.mp4",
  "poster": "/canva/gallery-video-01-poster.webp",
  "w": 720,
  "h": 1280,
  "category": "Video",
  "title": "Video 01"
 },
 {
  "type": "image",
  "src": "/canva/gallery-project-05.webp",
  "w": 800,
  "h": 800,
  "category": "Branding",
  "title": "Branding 05"
 },
 {
  "type": "image",
  "src": "/canva/gallery-logo-01.webp",
  "w": 800,
  "h": 800,
  "category": "Logo",
  "title": "Logo 01"
 },
 {
  "type": "image",
  "src": "/canva/gallery-logo-02.webp",
  "w": 800,
  "h": 800,
  "category": "Logo",
  "title": "Logo 02"
 },
 {
  "type": "image",
  "src": "/canva/gallery-logo-03.webp",
  "w": 800,
  "h": 800,
  "category": "Logo",
  "title": "Logo 03"
 },
 {
  "type": "image",
  "src": "/canva/gallery-social-01.webp",
  "w": 800,
  "h": 800,
  "category": "Social media",
  "title": "Social media 01"
 },
 {
  "type": "image",
  "src": "/canva/gallery-social-02.webp",
  "w": 800,
  "h": 800,
  "category": "Social media",
  "title": "Social media 02"
 },
 {
  "type": "image",
  "src": "/canva/gallery-social-03.webp",
  "w": 800,
  "h": 800,
  "category": "Social media",
  "title": "Social media 03"
 },
 {
  "type": "image",
  "src": "/canva/gallery-social-04.webp",
  "w": 800,
  "h": 800,
  "category": "Social media",
  "title": "Social media 04"
 },
 {
  "type": "image",
  "src": "/canva/gallery-social-05.webp",
  "w": 800,
  "h": 800,
  "category": "Social media",
  "title": "Social media 05"
 },
 {
  "type": "video",
  "src": "/canva/gallery-video-02.mp4",
  "poster": "/canva/gallery-video-02-poster.webp",
  "w": 720,
  "h": 1280,
  "category": "Video",
  "title": "Video 02"
 },
 {
  "type": "image",
  "src": "/canva/gallery-social-06.webp",
  "w": 800,
  "h": 800,
  "category": "Social media",
  "title": "Social media 06"
 },
 {
  "type": "image",
  "src": "/canva/gallery-social-07.webp",
  "w": 800,
  "h": 800,
  "category": "Social media",
  "title": "Social media 07"
 },
 {
  "type": "image",
  "src": "/canva/gallery-social-08.webp",
  "w": 800,
  "h": 800,
  "category": "Social media",
  "title": "Social media 08"
 },
 {
  "type": "image",
  "src": "/canva/gallery-social-09.webp",
  "w": 800,
  "h": 800,
  "category": "Social media",
  "title": "Social media 09"
 },
 {
  "type": "image",
  "src": "/canva/gallery-social-10.webp",
  "w": 800,
  "h": 800,
  "category": "Social media",
  "title": "Social media 10"
 },
 {
  "type": "image",
  "src": "/canva/gallery-social-11.webp",
  "w": 800,
  "h": 800,
  "category": "Social media",
  "title": "Social media 11"
 },
 {
  "type": "image",
  "src": "/canva/gallery-poster-01.webp",
  "w": 1080,
  "h": 1350,
  "category": "Poster",
  "title": "Poster 01"
 },
 {
  "type": "image",
  "src": "/canva/gallery-poster-02.webp",
  "w": 900,
  "h": 1600,
  "category": "Poster",
  "title": "Poster 02"
 },
 {
  "type": "image",
  "src": "/canva/gallery-poster-03.webp",
  "w": 800,
  "h": 800,
  "category": "Poster",
  "title": "Poster 03"
 },
 {
  "type": "video",
  "src": "/canva/gallery-video-03.mp4",
  "poster": "/canva/gallery-video-03-poster.webp",
  "w": 720,
  "h": 1280,
  "category": "Video",
  "title": "Video 03"
 },
 {
  "type": "image",
  "src": "/canva/gallery-poster-04.webp",
  "w": 800,
  "h": 800,
  "category": "Poster",
  "title": "Poster 04"
 },
 {
  "type": "image",
  "src": "/canva/gallery-poster-05.webp",
  "w": 900,
  "h": 1600,
  "category": "Poster",
  "title": "Poster 05"
 },
 {
  "type": "image",
  "src": "/canva/gallery-poster-06.webp",
  "w": 640,
  "h": 800,
  "category": "Poster",
  "title": "Poster 06"
 },
 {
  "type": "image",
  "src": "/canva/gallery-poster-07.webp",
  "w": 800,
  "h": 800,
  "category": "Poster",
  "title": "Poster 07"
 },
 {
  "type": "image",
  "src": "/canva/gallery-poster-08.webp",
  "w": 1080,
  "h": 1350,
  "category": "Poster",
  "title": "Poster 08"
 },
 {
  "type": "image",
  "src": "/canva/gallery-poster-09.webp",
  "w": 533,
  "h": 800,
  "category": "Poster",
  "title": "Poster 09"
 },
 {
  "type": "image",
  "src": "/canva/gallery-poster-10.webp",
  "w": 640,
  "h": 800,
  "category": "Poster",
  "title": "Poster 10"
 },
 {
  "type": "image",
  "src": "/canva/gallery-poster-11.webp",
  "w": 1080,
  "h": 1350,
  "category": "Poster",
  "title": "Poster 11"
 },
 {
  "type": "image",
  "src": "/canva/gallery-poster-12.webp",
  "w": 900,
  "h": 1600,
  "category": "Poster",
  "title": "Poster 12"
 },
 {
  "type": "video",
  "src": "/canva/gallery-video-04.mp4",
  "poster": "/canva/gallery-video-04-poster.webp",
  "w": 720,
  "h": 1280,
  "category": "Video",
  "title": "Video 04"
 },
 {
  "type": "image",
  "src": "/canva/gallery-poster-13.webp",
  "w": 1080,
  "h": 1350,
  "category": "Poster",
  "title": "Poster 13"
 },
 {
  "type": "image",
  "src": "/canva/gallery-event-01.webp",
  "w": 1016,
  "h": 1600,
  "category": "Event creative",
  "title": "Event creative 01"
 },
 {
  "type": "image",
  "src": "/canva/gallery-event-02.webp",
  "w": 1016,
  "h": 1600,
  "category": "Event creative",
  "title": "Event creative 02"
 },
 {
  "type": "image",
  "src": "/canva/gallery-event-03.webp",
  "w": 1016,
  "h": 1600,
  "category": "Event creative",
  "title": "Event creative 03"
 },
 {
  "type": "image",
  "src": "/canva/gallery-event-04.webp",
  "w": 1016,
  "h": 1600,
  "category": "Event creative",
  "title": "Event creative 04"
 },
 {
  "type": "image",
  "src": "/canva/gallery-banner-01.webp",
  "w": 1600,
  "h": 667,
  "category": "Web banner",
  "title": "Web banner 01"
 },
 {
  "type": "image",
  "src": "/canva/gallery-banner-02.webp",
  "w": 1600,
  "h": 667,
  "category": "Web banner",
  "title": "Web banner 02"
 },
 {
  "type": "image",
  "src": "/canva/gallery-banner-03.webp",
  "w": 1600,
  "h": 667,
  "category": "Web banner",
  "title": "Web banner 03"
 },
 {
  "type": "image",
  "src": "/canva/gallery-banner-04.webp",
  "w": 1365,
  "h": 616,
  "category": "Web banner",
  "title": "Web banner 04"
 },
 {
  "type": "video",
  "src": "/canva/gallery-video-05.mp4",
  "poster": "/canva/gallery-video-05-poster.webp",
  "w": 720,
  "h": 1280,
  "category": "Video",
  "title": "Video 05"
 }
];
