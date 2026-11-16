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
  lead: "I'm a Software Engineering student at McMaster University who works on machine learning and data. I like turning large, messy datasets into models and tools that give clear answers. My main tools are Python, SQL, PyTorch, scikit-learn, Pandas, and NumPy, plus LangChain for LLM pipelines and PostgreSQL and DynamoDB for storage.",
  body: "At RBC Borealis I'm building CNN and transfer learning models in PyTorch to detect diabetic retinopathy across more than 60,000 retinal images, tuned for high sensitivity so fewer cases get missed. Earlier, I migrated a NoSQL database to a normalized PostgreSQL schema and built dashboards that cut reporting time from two hours to under a minute.",
  aside:
    "At LingoSpace I optimized multimodal AI generation pipelines, which cut image generation costs by 60 percent. I like building things, so check out my projects and get in touch.",
};

export type Skill = { name: string; icon: string; src?: string };

/** Icons via skillicons.dev (custom `src` when unavailable there) */
export const skills: Skill[] = [
  { name: "Python", icon: "py" },
  { name: "Java", icon: "java" },
  { name: "C", icon: "c" },
  { name: "C++", icon: "cpp" },
  { name: "TypeScript", icon: "ts" },
  { name: "JavaScript", icon: "js" },
  { name: "HTML", icon: "html" },
  { name: "CSS", icon: "css" },
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextjs" },
  { name: "Node.js", icon: "nodejs" },
  { name: "Flask", icon: "flask" },
  { name: "Firebase", icon: "firebase" },
  { name: "Tailwind", icon: "tailwind" },
  { name: "Three.js", icon: "threejs" },
  { name: "Figma", icon: "figma" },
  { name: "PostgreSQL", icon: "postgres" },
  { name: "DynamoDB", icon: "dynamodb" },
  { name: "OpenCV", icon: "opencv" },
  { name: "scikit-learn", icon: "sklearn" },
  { name: "PyTorch", icon: "pytorch" },
  { name: "Grafana", icon: "grafana" },
  {
    name: "Power BI",
    icon: "powerbi",
    src: "/icons/powerbi.svg",
  },
  { name: "AWS", icon: "aws" },
  { name: "Docker", icon: "docker" },
  { name: "Linux", icon: "linux" },
  { name: "Git", icon: "git" },
  { name: "GitHub", icon: "github" },
  { name: "Raspberry Pi", icon: "raspberrypi" },
  { name: "Bash", icon: "bash" },
];

export type Role = {
  dates: string;
  title: string;
  org: string;
  summary: string;
};

export const roles: Role[] = [
  {
    dates: "Sep 2026 — Present",
    title: "Machine Learning Researcher",
    org: "RBC Borealis",
    summary:
      "CNN and transfer learning in PyTorch for diabetic retinopathy across 60,000+ retinal images; 96.5% sensitivity and ResNet fine-tuning from 0.72 to 0.9+ accuracy.",
  },
  {
    dates: "May 2026 — Aug 2026",
    title: "Data Integration Intern / Research Assistant III",
    org: "Harvest Systems / McMaster University",
    summary:
      "End-to-end sensor pipeline with PLCs, MQTT, AWS IoT Core, and Lambda; DynamoDB → PostgreSQL migration; Grafana & Sigma dashboards that cut reporting from 2 hrs to under 1 min.",
  },
  {
    dates: "Dec 2025 — Feb 2026",
    title: "AI Software Engineer Intern",
    org: "Ridan 3D Industries",
    summary:
      "AI-assisted 3D modelling with Three.js/WebGL and a rule-based + RAG design assistant for topology and parametric suggestions.",
  },
  {
    dates: "Oct 2025 — Dec 2025",
    title: "AI Engineer Intern",
    org: "LingoSpace",
    summary:
      "Multimodal AI pipelines for ESL edutainment; cut image generation costs 60% and improved brand-aligned illustration quality 25%.",
  },
  {
    dates: "Oct 2025 — Dec 2025",
    title: "Product Development Intern",
    org: "TWOROW.AI",
    summary: "Mobile UX, Figma prototypes, and UI changes grounded in user research.",
  },
  {
    dates: "Sep 2025 — Apr 2026",
    title: "Open Source Contributor — Interface AI",
    org: "Google Developer Groups McMaster",
    summary:
      "LangChain pipelines mapping OCR to semantic UI actions, CI/CD for releases, and Gemini-generated synonyms for 10+ action variants.",
  },
  {
    dates: "Mar 2025 — Jun 2025",
    title: "Software Developer",
    org: "GastroTrackAI",
    summary: "UX fixes, Flask/Firebase notifications, Uber Eats API support, and docs.",
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
  code: "OC-01",
  title: "Oculus",
  summary:
    "AI-assisted diabetic retinopathy screening with computer vision: baseline CNN and ResNet transfer learning across 60,000+ retinal images, tuned for 96.5% sensitivity and flagging referable cases for professional review.",
  tags: ["PyTorch", "CNN", "ResNet", "Computer Vision", "Python"],
  links: [{ label: "GitHub", href: "https://github.com/MohitGedela/Oculus" }],
  featured: true,
};

export const projects: Project[] = [
  {
    code: "GS-02",
    title: "GeoShield",
    summary:
      "Real-time emergency response: survivors request help, volunteers answer, both meet on a live map.",
    tags: ["React", "Vite", "Tailwind", "Socket.io", "Node.js"],
    links: [{ label: "GitHub", href: "https://github.com/MohitGedela/GeoShield" }],
  },
  {
    code: "LV-03",
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
    code: "MD-04",
    title: "Moodify",
    summary: "Snap or upload a photo, detect emotion, generate a Spotify playlist.",
    tags: ["Python", "OpenCV", "Streamlit"],
    links: [
      { label: "Live", href: "https://moodifyyy.streamlit.app/" },
      { label: "GitHub", href: "https://github.com/MohitGedela/Moodify" },
    ],
  },
  {
    code: "ES-05",
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
    code: "EV-06",
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
    code: "AR-07",
    title: "MemoAR",
    summary: "QR-triggered AR narrative of a person’s history (PlayCanvas, Zappar, Mixamo).",
    tags: ["PlayCanvas", "Zappar", "Mixamo"],
    links: [
      { label: "Video", href: "https://www.youtube.com/watch?v=K9rlWchffrU" },
      { label: "Devpost", href: "https://devpost.com/software/memoar" },
      { label: "Try it", href: "https://drive.google.com/file/d/1pFsltHNiGDzej33W7RS3AdaHfWpPw6J9/view" },
    ],
  },
];

export const statusItems = [
  "Building Oculus, ML Retinal Screening @ RBC Borealis",
  "Incoming Data Science @ Scotiabank Velocity",
  "Open to Summer 2027 Co-op and Internships",
];

