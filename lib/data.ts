export type OutLink = { label: string; href: string };

export const profile = {
  name: "Mohit Gedela",
  email: "mohitkumarduttag@gmail.com",
  school: "Software Engineering @ McMaster University",
  location: "Toronto, Ontario",
  github: "https://github.com/MohitGedela",
  linkedin: "https://www.linkedin.com/in/mohit-gedela",
  devpost: "https://devpost.com/mohitkumarduttag",
  resume: "/mohitsResume.pdf",
  repo: "https://github.com/MohitGedela/Personal-Portfolio",
};

export const about = {
  lead: "I am computer software enthusiast who loves turning complex problems into simple, beautiful solutions. My passion lies in creating user-centered digital experiences that are both functional and visually stunning.",
  body: "With expertise in modern web technologies, I specialize in Java, Python, HTML, CSS, and JavaScript. I believe in writing clean, maintainable code and following best practices to deliver exceptional results.",
  aside:
    "When I'm not at my desk, you'll find me lifting weights or exploring the outdoors staying active so I'm ready for whatever challenge comes next.",
};

export type Skill = { name: string; icon: string };

/** Icons via skillicons.dev */
export const skills: Skill[] = [
  { name: "Java", icon: "java" },
  { name: "Python", icon: "python" },
  { name: "JavaScript", icon: "js" },
  { name: "TypeScript", icon: "ts" },
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextjs" },
  { name: "HTML", icon: "html" },
  { name: "CSS", icon: "css" },
  { name: "Tailwind", icon: "tailwind" },
  { name: "Node.js", icon: "nodejs" },
  { name: "Flask", icon: "flask" },
  { name: "Firebase", icon: "firebase" },
  { name: "Three.js", icon: "threejs" },
  { name: "Figma", icon: "figma" },
  { name: "Vite", icon: "vite" },
  { name: "Git", icon: "git" },
  { name: "GitHub", icon: "github" },
  { name: "Linux", icon: "linux" },
  { name: "Android", icon: "androidstudio" },
];

export type Role = {
  dates: string;
  title: string;
  org: string;
  summary: string;
};

/** Newest first — matches https://mohitgedela.netlify.app/ */
export const roles: Role[] = [
  {
    dates: "Dec 2025 — Present",
    title: "AI & 3D Modeling Systems Intern",
    org: "Ridan 3D Industries",
    summary:
      "AI-assisted 3D modeling with Three.js/WebGL. RAG and rule-based checks guide mesh optimization and design adjustments.",
  },
  {
    dates: "Nov 2025 — Present",
    title: "AI Onboarding Intern",
    org: "LingoSpace",
    summary:
      "Multimodal AI for education: output quality, brand alignment, and lower generation cost through model choice and prompts.",
  },
  {
    dates: "Oct 2025 — Dec 2025",
    title: "Product Development Intern",
    org: "TWOROW.AI",
    summary: "Mobile UX, Figma prototypes, and UI changes grounded in user research.",
  },
  {
    dates: "Sep 2025 — Present",
    title: "Open Source Contributor — Interface AI",
    org: "Google Developer Groups McMaster",
    summary: "Frontend features and LLM-backed automation for an AI Chrome extension.",
  },
  {
    dates: "May 2025 — Present",
    title: "Events Team Executive",
    org: "McMaster Software Engineering Society",
    summary: "Event planning, logistics, and on-site execution.",
  },
  {
    dates: "Mar 2025 — Jun 2025",
    title: "Software Developer",
    org: "GastroTrackAI",
    summary: "UX fixes, Flask/Firebase notifications, Uber Eats API support, and docs.",
  },
  {
    dates: "Oct 2023 — Jun 2024",
    title: "Co-Founder & Vice President",
    org: "KCI Computer Science Club",
    summary: "Beginner workshops (Python, Java, Arduino, Raspberry Pi), projects, and contest prep.",
  },
  {
    dates: "Dec 2022 — Jun 2024",
    title: "Founder & President",
    org: "KCI Engineering",
    summary: "Club projects, workshops, guest lectures, and member communication.",
  },
  {
    dates: "Aug 2023 — May 2024",
    title: "VP Technology & Outreach",
    org: "Global Ventures Youth",
    summary: "NPO site and socials, 60+ partnerships, and awareness campaigns.",
  },
  {
    dates: "Sep 2022 — May 2023",
    title: "VP of Technology",
    org: "Fruitlet · JA Canada",
    summary: "Shopify storefront, channels, and day-to-day tech ops.",
  },
];

export type Project = {
  code: string;
  title: string;
  summary: string;
  tags: string[];
  links: OutLink[];
  featured?: boolean;
};

export const featuredProject: Project = {
  code: "GS-01",
  title: "GeoShield",
  summary:
    "Real-time emergency response: survivors request help, volunteers answer, both meet on a live map.",
  tags: ["React", "Vite", "Tailwind", "Socket.io", "Node.js"],
  links: [{ label: "GitHub", href: "https://github.com/MohitGedela/GeoShield" }],
  featured: true,
};

export const projects: Project[] = [
  {
    code: "LV-02",
    title: "LevelUP",
    summary: "Documents become personalized quizzes with progress tracking, powered by Gemini.",
    tags: ["Next.js", "React", "TypeScript", "Gemini"],
    links: [
      { label: "GitHub", href: "https://github.com/MohitGedela/LevelUP" },
      { label: "Video", href: "https://www.youtube.com/watch?v=HGCNUBG9pMg" },
      { label: "Devpost", href: "https://devpost.com/software/levelup-4bv3u5" },
    ],
  },
  {
    code: "MD-03",
    title: "Moodify",
    summary: "Snap or upload a photo, detect emotion, generate a Spotify playlist.",
    tags: ["Python", "OpenCV", "Streamlit"],
    links: [
      { label: "Live", href: "https://moodifyyy.streamlit.app/" },
      { label: "GitHub", href: "https://github.com/MohitGedela/Moodify" },
    ],
  },
  {
    code: "ES-04",
    title: "EchoSense-Pi",
    summary: "Smart white cane on a Raspberry Pi 4 with head- and foot-level collision alerts.",
    tags: ["Python", "Java", "Raspberry Pi", "Android"],
    links: [
      { label: "GitHub", href: "https://github.com/MohitGedela/EchoSense-Pi" },
      { label: "Video", href: "https://www.youtube.com/watch?v=5bp5AZkxrpE" },
      { label: "Devpost", href: "https://devpost.com/software/echosense-elti96" },
    ],
  },
  {
    code: "EV-05",
    title: "EvoSense",
    summary: "Real-time facial expression detection for accessible emotion feedback.",
    tags: ["OpenCV", "MediaPipe", "scikit-learn"],
    links: [
      { label: "GitHub", href: "https://github.com/MohitGedela/EvoSense-Camera-Technology" },
      { label: "Video", href: "https://www.youtube.com/watch?v=wDDgGBVDg0o" },
      { label: "Devpost", href: "https://devpost.com/software/evosense" },
    ],
  },
  {
    code: "AR-06",
    title: "MemoAR",
    summary: "QR-triggered AR narrative of a person’s history (PlayCanvas, Zappar, Mixamo).",
    tags: ["PlayCanvas", "Zappar", "Mixamo"],
    links: [
      { label: "Video", href: "https://www.youtube.com/watch?v=K9rlWchffrU" },
      { label: "Devpost", href: "https://devpost.com/software/memoar" },
      { label: "Try it", href: "https://drive.google.com/file/d/1pFsltHNiGDzej33W7RS3AdaHfWpPw6J9/view" },
    ],
  },
  {
    code: "JB-07",
    title: "Math Battleship",
    summary: "Java battleship using coordinates, slopes, and inequalities to find the fleet.",
    tags: ["Java"],
    links: [{ label: "GitHub", href: "https://github.com/MohitGedela/Java-Battleship-Linear-Relations" }],
  },
  {
    code: "WD-08",
    title: "Wordo",
    summary: "Five-letter words, six tries, color hints after every guess.",
    tags: ["Java"],
    links: [{ label: "GitHub", href: "https://github.com/MohitGedela/Java-Wordle-Game" }],
  },
];

export const statusItems = [
  "Building Oculus, ML Retinal Screening",
  "Incoming Data @ Scotiabank Velocity",
  "Open to Summer 2027 Co-op and Internships",
];

