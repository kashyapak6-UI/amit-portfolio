// Prefix public asset paths with Vite's base so they work at '/' (dev) and '/amit-portfolio/' (GitHub Pages).
const B = import.meta.env.BASE_URL;

// ---------------------------------------------------------------
//  ALL SITE CONTENT LIVES HERE. Text comes from Amit Kashyap's CV.
//  All media is served locally from /public/canva.
// ---------------------------------------------------------------

export const profile = {
  name: "Amit Kashyap",
  shortName: "Amit",
  role: "Graphic & Web UI Designer",
  greeting: "Hello, I am Amit Kashyap",
  tagline: "“Short and sweet” is my mantra. I emphasize simplicity and elegance in my digital designs.",
  heroLines: ["Design that", "Connects"],
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
    description: "Mobile app UI screens for a fantasy cricket gaming app.",
    image: null,
    accent: "#5ce1ff",
  },
  {
    title: "Gaming Brand Social Creatives",
    category: "Social Media",
    year: "2024–25",
    description: "Social posts and graphic card visuals for a gaming brand.",
    image: null,
    accent: "#d4ff3f",
  },
  {
    title: "Website Landing Pages",
    category: "Website UI",
    year: "2024–25",
    description: "Landing and internal page layouts, plus dashboard screens for client platforms.",
    image: B + "canva/gallery-banner-04.webp",
    accent: "#a98bff",
  },
  {
    title: "AI Reels & Campaign Assets",
    category: "AI Content",
    year: "2023–24",
    description: "AI-generated reels paired with social creatives, branding visuals and campaign assets.",
    image: B + "canva/gallery-social-05.webp",
    accent: "#ff5c8a",
  },
  {
    title: "Food, Education & Immigration Campaigns",
    category: "Social Media",
    year: "2023",
    description: "Social campaign creatives for food, education and immigration clients.",
    image: null,
    accent: "#ffb547",
  },
  {
    title: "Steel Industry Branding",
    category: "Branding",
    year: "2022",
    description: "Brand visuals and social creatives for steel industry projects.",
    image: null,
    accent: "#7cffb2",
  },
];

export const about = {
  heading: "I shape ideas",
  imageAlt: "Sketching a design on paper",
  image: B + "canva/focus-03.webp",
  paragraphs: [
    "I design clear, bold visuals for social feeds, brands, websites and apps, along with AI-generated visual content.",
    "Experienced in both full-time and freelance projects with a strong background in remote work environments, delivering high-volume digital designs across many industries.",
    "I'm passionate about brand design, illustration, and print design, aiming to establish a presence in digital media and technology. I'm eager to collaborate with individuals and organizations to showcase my distinctive style.",
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
  { name: "Adobe Photoshop", icon: B + "icons/photoshop.svg", color: "#31a8ff" },
  { name: "Adobe Illustrator", icon: B + "icons/illustrator.svg", color: "#ff9a00" },
  { name: "Figma", icon: B + "icons/figma.svg", color: "#a259ff" },
  { name: "Canva", icon: B + "icons/canva.svg", color: "#00c4cc" },
  { name: "AI Creative Tools", color: "#d4ff3f", note: "Image, video & voice generation" }, // no icon by design
];

export const coreSkills = [
  "Social Media Creatives & Branding",
  "Website UI Design (landing & internal pages)",
  "Mobile App UI Screens (basic level)",
  "AI Generated Images, Videos & Reels",
  "Digital Visual Content Creation",
];

// Industries from the CV (skills themselves live in the Skills section)
export const services = ["Gaming", "Technology", "Real Estate", "Digital Marketing", "Food", "Education", "Immigration", "Steel Industry", "Property Services"];

export const experience = [
  {
    role: "Graphic & Web UI Designer",
    company: "GrizonTech",
    location: "Remote",
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
    location: "",
    period: "Aug 2023 – Aug 2024",
    points: ["Social media creatives and AI-based reels.", "Branding visuals.", "Campaign creative assets."],
  },
  {
    role: "Graphic Designer",
    company: "Digital Handlers India",
    location: "",
    period: "Feb 2023 – Jul 2023",
    points: ["High-volume social creatives — 12–13 per day — across multiple client accounts."],
  },
  {
    role: "Graphic Designer",
    company: "VPro Infotech",
    location: "",
    period: "Jun 2022 – Dec 2022",
    points: ["Social media marketing graphics.", "Branding and promotional materials.", "Consistent visual themes across campaigns."],
  },
  {
    role: "Graphic Designer",
    company: "TTC Robotronics",
    location: "",
    period: "Apr 2022 – Jun 2022",
    points: ["Social creatives and branding visuals for steel industry projects."],
  },
  {
    role: "Graphic Designer",
    company: "Media Vox",
    location: "",
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
    title: "Schooling",
    place: "Blossom Global English Senior Secondary School, Ludhiana",
    period: "2014",
    detail: "",
  },
];

export const achievements = [
  "Consistent high-volume delivery under tight deadlines.",
  "Contributed to mobile app UI and website UI projects for major clients.",
];

export const contact = {
  heading: "Let's make something bold",
  cta: "Reach out if you want to create impactful visual art together.",
  email: "amitkashyap777999@gmail.com",
  phones: ["+91-9803277171", "7505973969"],
};

// Media gallery — Amit's own design work (originals in D:\Amit\canva-assets)
export const gallery = [
 {
  "type": "image",
  "src": B + "canva/gallery-project-01.webp",
  "w": 1599,
  "h": 1066,
  "category": "Branding",
  "title": "Branding 01"
 },
 {
  "type": "image",
  "src": B + "canva/gallery-project-02.webp",
  "w": 1599,
  "h": 1066,
  "category": "Branding",
  "title": "Branding 02"
 },
 {
  "type": "image",
  "src": B + "canva/gallery-project-03.webp",
  "w": 1600,
  "h": 1600,
  "category": "Branding",
  "title": "Branding 03"
 },
 {
  "type": "image",
  "src": B + "canva/gallery-project-04.webp",
  "w": 1600,
  "h": 1040,
  "category": "Branding",
  "title": "Branding 04"
 },
 {
  "type": "video",
  "src": B + "canva/gallery-video-01.mp4",
  "poster": B + "canva/gallery-video-01-poster.webp",
  "w": 720,
  "h": 1280,
  "category": "Video",
  "title": "Video 01"
 },
 {
  "type": "image",
  "src": B + "canva/gallery-project-05.webp",
  "w": 800,
  "h": 800,
  "category": "Branding",
  "title": "Branding 05"
 },
 {
  "type": "image",
  "src": B + "canva/gallery-logo-01.webp",
  "w": 800,
  "h": 800,
  "category": "Logo",
  "title": "Logo 01"
 },
 {
  "type": "image",
  "src": B + "canva/gallery-logo-02.webp",
  "w": 800,
  "h": 800,
  "category": "Logo",
  "title": "Logo 02"
 },
 {
  "type": "image",
  "src": B + "canva/gallery-logo-03.webp",
  "w": 800,
  "h": 800,
  "category": "Logo",
  "title": "Logo 03"
 },
 {
  "type": "image",
  "src": B + "canva/gallery-social-01.webp",
  "w": 800,
  "h": 800,
  "category": "Social media",
  "title": "Social media 01"
 },
 {
  "type": "image",
  "src": B + "canva/gallery-social-02.webp",
  "w": 800,
  "h": 800,
  "category": "Social media",
  "title": "Social media 02"
 },
 {
  "type": "image",
  "src": B + "canva/gallery-social-03.webp",
  "w": 800,
  "h": 800,
  "category": "Social media",
  "title": "Social media 03"
 },
 {
  "type": "image",
  "src": B + "canva/gallery-social-04.webp",
  "w": 800,
  "h": 800,
  "category": "Social media",
  "title": "Social media 04"
 },
 {
  "type": "image",
  "src": B + "canva/gallery-social-05.webp",
  "w": 800,
  "h": 800,
  "category": "Social media",
  "title": "Social media 05"
 },
 {
  "type": "video",
  "src": B + "canva/gallery-video-02.mp4",
  "poster": B + "canva/gallery-video-02-poster.webp",
  "w": 720,
  "h": 1280,
  "category": "Video",
  "title": "Video 02"
 },
 {
  "type": "image",
  "src": B + "canva/gallery-social-06.webp",
  "w": 800,
  "h": 800,
  "category": "Social media",
  "title": "Social media 06"
 },
 {
  "type": "image",
  "src": B + "canva/gallery-social-07.webp",
  "w": 800,
  "h": 800,
  "category": "Social media",
  "title": "Social media 07"
 },
 {
  "type": "image",
  "src": B + "canva/gallery-social-08.webp",
  "w": 800,
  "h": 800,
  "category": "Social media",
  "title": "Social media 08"
 },
 {
  "type": "image",
  "src": B + "canva/gallery-social-09.webp",
  "w": 800,
  "h": 800,
  "category": "Social media",
  "title": "Social media 09"
 },
 {
  "type": "image",
  "src": B + "canva/gallery-social-10.webp",
  "w": 800,
  "h": 800,
  "category": "Social media",
  "title": "Social media 10"
 },
 {
  "type": "image",
  "src": B + "canva/gallery-social-11.webp",
  "w": 800,
  "h": 800,
  "category": "Social media",
  "title": "Social media 11"
 },
 {
  "type": "image",
  "src": B + "canva/gallery-poster-01.webp",
  "w": 1080,
  "h": 1350,
  "category": "Poster",
  "title": "Poster 01"
 },
 {
  "type": "image",
  "src": B + "canva/gallery-poster-02.webp",
  "w": 900,
  "h": 1600,
  "category": "Poster",
  "title": "Poster 02"
 },
 {
  "type": "image",
  "src": B + "canva/gallery-poster-03.webp",
  "w": 800,
  "h": 800,
  "category": "Poster",
  "title": "Poster 03"
 },
 {
  "type": "video",
  "src": B + "canva/gallery-video-03.mp4",
  "poster": B + "canva/gallery-video-03-poster.webp",
  "w": 720,
  "h": 1280,
  "category": "Video",
  "title": "Video 03"
 },
 {
  "type": "image",
  "src": B + "canva/gallery-poster-04.webp",
  "w": 800,
  "h": 800,
  "category": "Poster",
  "title": "Poster 04"
 },
 {
  "type": "image",
  "src": B + "canva/gallery-poster-05.webp",
  "w": 900,
  "h": 1600,
  "category": "Poster",
  "title": "Poster 05"
 },
 {
  "type": "image",
  "src": B + "canva/gallery-poster-06.webp",
  "w": 640,
  "h": 800,
  "category": "Poster",
  "title": "Poster 06"
 },
 {
  "type": "image",
  "src": B + "canva/gallery-poster-07.webp",
  "w": 800,
  "h": 800,
  "category": "Poster",
  "title": "Poster 07"
 },
 {
  "type": "image",
  "src": B + "canva/gallery-poster-08.webp",
  "w": 1080,
  "h": 1350,
  "category": "Poster",
  "title": "Poster 08"
 },
 {
  "type": "image",
  "src": B + "canva/gallery-poster-09.webp",
  "w": 533,
  "h": 800,
  "category": "Poster",
  "title": "Poster 09"
 },
 {
  "type": "image",
  "src": B + "canva/gallery-poster-10.webp",
  "w": 640,
  "h": 800,
  "category": "Poster",
  "title": "Poster 10"
 },
 {
  "type": "image",
  "src": B + "canva/gallery-poster-11.webp",
  "w": 1080,
  "h": 1350,
  "category": "Poster",
  "title": "Poster 11"
 },
 {
  "type": "image",
  "src": B + "canva/gallery-poster-12.webp",
  "w": 900,
  "h": 1600,
  "category": "Poster",
  "title": "Poster 12"
 },
 {
  "type": "video",
  "src": B + "canva/gallery-video-04.mp4",
  "poster": B + "canva/gallery-video-04-poster.webp",
  "w": 720,
  "h": 1280,
  "category": "Video",
  "title": "Video 04"
 },
 {
  "type": "image",
  "src": B + "canva/gallery-poster-13.webp",
  "w": 1080,
  "h": 1350,
  "category": "Poster",
  "title": "Poster 13"
 },
 {
  "type": "image",
  "src": B + "canva/gallery-event-01.webp",
  "w": 1016,
  "h": 1600,
  "category": "Event creative",
  "title": "Event creative 01"
 },
 {
  "type": "image",
  "src": B + "canva/gallery-event-02.webp",
  "w": 1016,
  "h": 1600,
  "category": "Event creative",
  "title": "Event creative 02"
 },
 {
  "type": "image",
  "src": B + "canva/gallery-event-03.webp",
  "w": 1016,
  "h": 1600,
  "category": "Event creative",
  "title": "Event creative 03"
 },
 {
  "type": "image",
  "src": B + "canva/gallery-event-04.webp",
  "w": 1016,
  "h": 1600,
  "category": "Event creative",
  "title": "Event creative 04"
 },
 {
  "type": "image",
  "src": B + "canva/gallery-banner-01.webp",
  "w": 1600,
  "h": 667,
  "category": "Web banner",
  "title": "Web banner 01"
 },
 {
  "type": "image",
  "src": B + "canva/gallery-banner-02.webp",
  "w": 1600,
  "h": 667,
  "category": "Web banner",
  "title": "Web banner 02"
 },
 {
  "type": "image",
  "src": B + "canva/gallery-banner-03.webp",
  "w": 1600,
  "h": 667,
  "category": "Web banner",
  "title": "Web banner 03"
 },
 {
  "type": "image",
  "src": B + "canva/gallery-banner-04.webp",
  "w": 1365,
  "h": 616,
  "category": "Web banner",
  "title": "Web banner 04"
 },
 {
  "type": "video",
  "src": B + "canva/gallery-video-05.mp4",
  "poster": B + "canva/gallery-video-05-poster.webp",
  "w": 720,
  "h": 1280,
  "category": "Video",
  "title": "Video 05"
 }
];

// Curved reel hero (layout adapted from the MotionSites "Reelmark" hero prompt).
// Cards show Amit's own work from /public/canva: 5 reels + 5 posters, alternating.
export const reelHero = {
  badge: "Selected work in motion",
  headline: ["Let's create", "something together"],
  subline: [
    "Reels, posters and brand creatives from recent projects.",
    "Drag the reel or let it play, then let's make yours next.",
  ],
  noteTop: ["Drag to", "explore"],
  noteBottom: "Your project next",
  cta: { label: "Let's talk", href: "#contact" },
  cards: [
    { type: "video", src: B + "canva/gallery-video-01.mp4", poster: B + "canva/gallery-video-01-poster.webp", alt: "Laundry brand reel" },
    { type: "image", src: B + "canva/gallery-poster-02.webp", alt: "Something Royal poster" },
    { type: "video", src: B + "canva/gallery-video-02.mp4", poster: B + "canva/gallery-video-02-poster.webp", alt: "Laundry brand promo reel" },
    { type: "image", src: B + "canva/gallery-poster-05.webp", alt: "Snack brand IPL poster" },
    { type: "video", src: B + "canva/gallery-video-03.mp4", poster: B + "canva/gallery-video-03-poster.webp", alt: "Laundry service reel" },
    { type: "image", src: B + "canva/gallery-poster-10.webp", alt: "Steel brand poster" },
    { type: "video", src: B + "canva/gallery-video-04.mp4", poster: B + "canva/gallery-video-04-poster.webp", alt: "Carpet cleaning reel" },
    { type: "image", src: B + "canva/gallery-poster-12.webp", alt: "Event venue poster" },
    { type: "video", src: B + "canva/gallery-video-05.mp4", poster: B + "canva/gallery-video-05-poster.webp", alt: "Website promo reel" },
    { type: "image", src: B + "canva/gallery-poster-06.webp", alt: "Momos food poster" },
  ],
};
