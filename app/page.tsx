"use client";
import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Download,
  ExternalLink,
  Sparkles,
  ArrowUpRight,
  Layers,
  X,
  ChevronDown,
  Check,
  FolderGit2,
  Smartphone,
  BrainCircuit,
  Globe,
} from "lucide-react";

function GithubIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

function LinkedinIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

function WhatsappIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.148-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.124-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}

interface Project {
  num: string;
  title: string;
  year: string;
  category: "Web Apps" | "Mobile & UI/UX" | "Systems & NLP";
  role: string;
  description: string;
  details: string;
  tech: string[];
  extraTechCount?: number;
  github: string;
  accentGradient: string;
  previewType: "web" | "mobile" | "nlp";
  image?: string; 
}

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [showBioModal, setShowBioModal] = useState(false);
  const [introOpened, setIntroOpened] = useState(false);
  const [copied, setCopied] = useState(false);
  const [rotateStyle, setRotateStyle] = useState({
    transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)",
  });

  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateX = (-y / 12).toFixed(2);
    const rotateY = (x / 12).toFixed(2);
    setRotateStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`,
    });
  };

  const handleMouseLeave = () => {
    setRotateStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
    });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("andigautama010@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Portfolio Inquiry from ${contactForm.name || "Visitor"}`
    );
    const body = encodeURIComponent(
      `Name: ${contactForm.name}\nEmail: ${contactForm.email}\n\nMessage:\n${contactForm.message}`
    );
    window.location.href = `mailto:andigautama010@gmail.com?subject=${subject}&body=${body}`;
  };

  const categories = ["All", "Web Apps", "Mobile & UI/UX", "Systems & NLP"];

  const projects: Project[] = [
    {
      num: "01",
      title: "ActiveLab: Full-Stack Gym Membership & Booking Platform",
      year: "2026",
      category: "Web Apps",
      role: "Full-Stack Developer",
      description:
        "Integrated web and mobile ecosystem allowing users to subscribe to gym memberships and schedule real-time class appointments across partner fitness centers.",
      details:
        "Developed as a comprehensive platform handling user authentication, subscription workflows, real-time class appointment scheduling, and gym partner database relations using Supabase, Next.js, and Express.js.",
      tech: ["Next.js", "Express.js", "Supabase", "Flutter", "PostgreSQL", "REST API"],
      github: "https://github.com/AndiGautama",
      accentGradient: "from-[#143d2d] via-[#0d261c] to-[#07130e]",
      previewType: "web",
    },
    {
      num: "02",
      title: "Loyalty Marketplace: Cross-Platform Mobile Rewards App",
      year: "2025",
      category: "Mobile & UI/UX",
      role: "Flutter Mobile Developer",
      description:
        "Cross-platform e-commerce application engineered in Android Studio with automated loyalty point calculations and an end-to-end reward redemption module.",
      details:
        "Built an intuitive mobile marketplace using Flutter and Dart. Designed custom algorithms to automatically calculate reward points per transaction and created smooth redemption workflows with GoRouter, Provider, and BLoC state management.",
      tech: ["Flutter", "Dart", "BLoC / Provider", "GoRouter", "Android Studio"],
      github: "https://github.com/AndiGautama",
      accentGradient: "from-[#1e3a2f] via-[#0f291e] to-[#081610]",
      previewType: "mobile",
    },
    {
      num: "03",
      title: "CareerLog: Interactive Job Application & Career Tracker",
      year: "2025",
      category: "Web Apps",
      role: "Full-Stack Web Developer",
      description:
        "Interactive web platform integrated with public job APIs to track, manage, and organize job applications backed by a relational database.",
      details:
        "Engineered using Next.js and Prisma ORM with SQLite. Integrated external job listing APIs to fetch live job openings and streamline application status tracking for job seekers.",
      tech: ["Next.js", "TypeScript", "Prisma ORM", "SQLite", "Bootstrap"],
      github: "https://github.com/AndiGautama",
      accentGradient: "from-[#292312] via-[#14261d] to-[#07130e]",
      previewType: "web",
    },
    {
      num: "04",
      title: "E-Commerce Customer Review Sentiment Analysis Engine",
      year: "2026",
      category: "Systems & NLP",
      role: "AI & NLP Developer",
      description:
        "Natural Language Processing prototype utilizing TF-IDF vectorization and Cosine Similarity to evaluate customer review sentiments through an interactive UI.",
      details:
        "Built an NLP-based sentiment analysis model using Python and Scikit-Learn. Processed e-commerce customer feedback datasets and deployed an interactive chat interface.",
      tech: ["Python", "NLP", "TF-IDF", "Scikit-Learn", "Cosine Similarity", "Gradio"],
      github: "https://github.com/AndiGautama",
      accentGradient: "from-[#19382b] via-[#12241b] to-[#07130e]",
      previewType: "nlp",
    },
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  // Data Tech Stack & Tools beserta icon dari CDN Devicon (kecuali Vercel/Next.js/GitHub yg butuh filter invert agar terlihat di background gelap)
  const squareSkills = [
    {
      name: "JavaScript",
      category: "Frontend",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    },
    {
      name: "TypeScript",
      category: "Frontend",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    },
    {
      name: "HTML5",
      category: "Frontend",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      category: "Frontend",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    },
    {
      name: "React",
      category: "Frontend",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    {
      name: "Next.js",
      category: "Full-Stack",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      invert: true, // Karena logo asli warna hitam
    },
    {
      name: "Node.js",
      category: "Backend",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "PHP",
      category: "Backend",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
    },
    {
      name: "Python",
      category: "AI & Backend",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    },
    {
      name: "Java",
      category: "Backend",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    },
    {
      name: "Flutter",
      category: "Mobile",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
    },
    {
      name: "PostgreSQL",
      category: "Database",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "MongoDB",
      category: "Database",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "Supabase",
      category: "Backend / DB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
    },
    {
      name: "Android Studio",
      category: "Tool / IDE",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg",
    },
    {
      name: "VS Code",
      category: "Tool / IDE",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
    },
    {
      name: "Figma",
      category: "Design",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
    },
    {
      name: "GitHub",
      category: "Version Control",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
      invert: true,
    },
    {
      name: "Vercel",
      category: "Hosting / DevOps",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
      invert: true,
    },
  ];

  const capabilityPills = [
    "Full-Stack Web Architecture",
    "RESTful API & Express.js",
    "Cross-Platform Mobile (Flutter)",
    "Natural Language Processing (TF-IDF, Cosine Similarity)",
    "Database Schema & Indexing (PostgreSQL / Supabase / MongoDB)",
    "Enterprise B2B Web Maintenance",
    "Network Emulation & Linux Administration",
  ];

  return (
    <div className="min-h-screen bg-[#07130e] text-[#f3f0e6] font-sans selection:bg-[#d4af37] selection:text-[#07130e] relative">
      {/* 3D INTRO SHOWCASE (100dvw x 100dvh FULL SCREEN) */}
      <div
        className={`fixed inset-0 w-[100dvw] h-[100dvh] z-[60] bg-[#07130e] flex flex-col items-center justify-center p-4 transition-all duration-1000 ease-in-out overflow-hidden ${
          introOpened
            ? "-translate-y-full opacity-0 pointer-events-none"
            : "translate-y-0 opacity-100"
        }`}
      >
        {/* BACKGROUND KARTU BUBBLE FULL MERATA */}
        <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden flex flex-col justify-around py-2 opacity-90">
          <div className="whitespace-nowrap animate-float-slow flex gap-5 w-full">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex gap-5 shrink-0">
                <div className="px-5 py-2.5 rounded-2xl bg-[#0c241b]/95 border border-[#d4af37]/60 backdrop-blur-md shadow-2xl text-xs font-mono text-[#f8f6f0] flex items-center gap-2">📍 Cengkareng, Jakarta Barat</div>
                <div className="px-5 py-2.5 rounded-2xl bg-[#0c241b]/95 border border-[#d4af37]/60 backdrop-blur-md shadow-2xl text-xs font-mono text-[#f8f6f0] flex items-center gap-2">📧 andigautama010@gmail.com</div>
                <div className="px-5 py-2.5 rounded-2xl bg-[#0c241b]/95 border border-[#d4af37]/60 backdrop-blur-md shadow-2xl text-xs font-mono text-[#f8f6f0] flex items-center gap-2">🎓 Universitas Tarumanagara</div>
                <div className="px-5 py-2.5 rounded-2xl bg-[#0c241b]/95 border border-[#d4af37]/60 backdrop-blur-md shadow-2xl text-xs font-mono text-[#f8f6f0] flex items-center gap-2">🚀 Ready to Work - IT Intern</div>
              </div>
            ))}
          </div>

          <div className="whitespace-nowrap animate-float-slow-rev flex gap-5 w-full">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex gap-5 shrink-0">
                <div className="px-5 py-2.5 rounded-2xl bg-[#0c241b]/95 border border-[#d4af37]/60 backdrop-blur-md shadow-2xl text-xs font-mono text-[#f8f6f0] flex items-center gap-2">💻 Tech: Next.js, Python, Flutter</div>
                <div className="px-5 py-2.5 rounded-2xl bg-[#0c241b]/95 border border-[#d4af37]/60 backdrop-blur-md shadow-2xl text-xs font-mono text-[#f8f6f0] flex items-center gap-2">📊 GPA: 3.46 / 4.00</div>
                <div className="px-5 py-2.5 rounded-2xl bg-[#0c241b]/95 border border-[#d4af37]/60 backdrop-blur-md shadow-2xl text-xs font-mono text-[#f8f6f0] flex items-center gap-2">💡 25+ Software Projects</div>
                <div className="px-5 py-2.5 rounded-2xl bg-[#0c241b]/95 border border-[#d4af37]/60 backdrop-blur-md shadow-2xl text-xs font-mono text-[#f8f6f0] flex items-center gap-2">🚀 Seeking IT Internship</div>
              </div>
            ))}
          </div>

          <div className="whitespace-nowrap animate-float-slow flex gap-5 w-full">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex gap-5 shrink-0">
                <div className="px-5 py-2.5 rounded-2xl bg-[#0c241b]/95 border border-[#d4af37]/60 backdrop-blur-md shadow-2xl text-xs font-mono text-[#f8f6f0] flex items-center gap-2">🛡️ Red Hat & GNS3 Networking</div>
                <div className="px-5 py-2.5 rounded-2xl bg-[#0c241b]/95 border border-[#d4af37]/60 backdrop-blur-md shadow-2xl text-xs font-mono text-[#f8f6f0] flex items-center gap-2">📱 Flutter Mobile App Developer</div>
                <div className="px-5 py-2.5 rounded-2xl bg-[#0c241b]/95 border border-[#d4af37]/60 backdrop-blur-md shadow-2xl text-xs font-mono text-[#f8f6f0] flex items-center gap-2">🔍 Scikit-Learn & NLP Python</div>
                <div className="px-5 py-2.5 rounded-2xl bg-[#0c241b]/95 border border-[#d4af37]/60 backdrop-blur-md shadow-2xl text-xs font-mono text-[#f8f6f0] flex items-center gap-2">⚡ Supabase & PostgreSQL</div>
              </div>
            ))}
          </div>

          <div className="whitespace-nowrap animate-float-slow-rev flex gap-5 w-full">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex gap-5 shrink-0">
                <div className="px-5 py-2.5 rounded-2xl bg-[#0c241b]/95 border border-[#d4af37]/60 backdrop-blur-md shadow-2xl text-xs font-mono text-[#f8f6f0] flex items-center gap-2">⚡ ActiveLab Gym Booking Platform</div>
                <div className="px-5 py-2.5 rounded-2xl bg-[#0c241b]/95 border border-[#d4af37]/60 backdrop-blur-md shadow-2xl text-xs font-mono text-[#f8f6f0] flex items-center gap-2">🛒 Loyalty Marketplace App</div>
                <div className="px-5 py-2.5 rounded-2xl bg-[#0c241b]/95 border border-[#d4af37]/60 backdrop-blur-md shadow-2xl text-xs font-mono text-[#f8f6f0] flex items-center gap-2">🤖 Sentiment Analysis Chatbot</div>
                <div className="px-5 py-2.5 rounded-2xl bg-[#0c241b]/95 border border-[#d4af37]/60 backdrop-blur-md shadow-2xl text-xs font-mono text-[#f8f6f0] flex items-center gap-2">🔥 TypeScript & Tailwind</div>
              </div>
            ))}
          </div>

          <div className="whitespace-nowrap animate-float-slow flex gap-5 w-full">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex gap-5 shrink-0">
                <div className="px-5 py-2.5 rounded-2xl bg-[#0c241b]/95 border border-[#d4af37]/60 backdrop-blur-md shadow-2xl text-xs font-mono text-[#f8f6f0] flex items-center gap-2">📍 West Jakarta, Indonesia</div>
                <div className="px-5 py-2.5 rounded-2xl bg-[#0c241b]/95 border border-[#d4af37]/60 backdrop-blur-md shadow-2xl text-xs font-mono text-[#f8f6f0] flex items-center gap-2">📞 +62 815-2700-5005</div>
                <div className="px-5 py-2.5 rounded-2xl bg-[#0c241b]/95 border border-[#d4af37]/60 backdrop-blur-md shadow-2xl text-xs font-mono text-[#f8f6f0] flex items-center gap-2">🎓 Computer Science Undergraduate</div>
                <div className="px-5 py-2.5 rounded-2xl bg-[#0c241b]/95 border border-[#d4af37]/60 backdrop-blur-md shadow-2xl text-xs font-mono text-[#f8f6f0] flex items-center gap-2">⭐ Software Engineering Spec</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute inset-0 w-full h-full bg-[#07130e]/45 pointer-events-none" />

        <div className="relative z-10 text-center space-y-3 max-w-lg pt-2">
          <div className="relative pt-3 pb-1 px-4 mx-auto w-fit">
            <span className="absolute top-0.5 left-2 z-20 px-3 py-0.5 rounded-full bg-[#0c1f17] border border-[#d4af37]/60 text-[10px] font-bold text-[#e6c762] shadow-2xl animate-bounce">
              ⚡ AI Spec
            </span>
            <span className="absolute bottom-0.5 right-2 z-20 px-3 py-0.5 rounded-full bg-[#0c1f17] border border-[#d4af37]/60 text-[10px] font-bold text-[#e6c762] shadow-2xl animate-pulse">
              🚀 IT Intern
            </span>

            <div
              onClick={() => setShowBioModal(true)}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={rotateStyle}
              className="relative w-44 h-52 sm:w-52 sm:h-60 rounded-3xl p-1.5 bg-gradient-to-br from-[#d4af37] via-[#133829] to-[#d4af37] shadow-2xl shadow-[#d4af37]/30 cursor-pointer transition-transform duration-200 ease-out group"
              title="Click to View Bio Card"
            >
              <div className="w-full h-full rounded-[20px] bg-[#0c1f17] overflow-hidden flex items-center justify-center relative">
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                  <span className="px-3 py-1.5 rounded-xl bg-[#d4af37] text-[#07130e] text-xs font-bold shadow-lg">
                    View Bio 🔍
                  </span>
                </div>
                <img
                  src="/andi.png"
                  alt="Andi Gautama"
                  className="w-full h-full object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
            </div>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#d4af37] font-bold">
              Interactive Showcase
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#f8f6f0]">
              Andi Gautama
            </h1>
            <p className="text-xs text-[#9eb5ab]">
              IT Undergraduate at Universitas Tarumanagara
            </p>
            <p className="text-[10px] text-[#d4af37] italic">
              (Click photo to open profile card)
            </p>
          </div>

          <button
            onClick={() => setIntroOpened(true)}
            className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#b89225] hover:from-[#e3c14d] hover:to-[#c9a12d] text-[#07130e] font-bold text-xs uppercase tracking-wider transition-all duration-300 hover:scale-105 shadow-xl shadow-[#d4af37]/25"
          >
            <span>Enter Portfolio Experience</span>
            <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
          </button>
        </div>
      </div>

      {/* POP-UP MODAL BIODATA */}
      {showBioModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-md p-5 sm:p-6 rounded-3xl bg-[#0e241b] border border-[#d4af37]/50 shadow-2xl space-y-4 text-left animate-scaleUp">
            <button
              onClick={() => setShowBioModal(false)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-[#07130e] border border-[#1c3b2e] text-[#8fa89b] hover:text-white transition z-20"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-4 border-b border-[#1c3b2e] pb-4">
              <div className="w-20 h-24 sm:w-24 sm:h-28 rounded-2xl overflow-hidden border-2 border-[#d4af37] shadow-xl shrink-0 bg-[#07130e]">
                <img
                  src="/andi.png"
                  alt="Andi Gautama"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="space-y-1">
                <span className="inline-block text-[9px] font-mono uppercase tracking-widest text-[#d4af37] px-2 py-0.5 rounded bg-[#d4af37]/10 border border-[#d4af37]/20">
                  Verified Candidate
                </span>
                <h3 className="text-xl font-bold text-[#f8f6f0]">Andi Gautama</h3>
                <p className="text-[11px] text-[#e6c762] font-medium leading-tight">
                  Software Engineering & IT Intern Candidate
                </p>
              </div>
            </div>

            <div className="space-y-2.5 text-xs text-[#a3b8ad] leading-relaxed">
              <div className="p-3 rounded-2xl bg-[#07130e] border border-[#d4af37]/30 flex justify-between items-center shadow-inner">
                <span className="text-[#8fa89b] text-[11px]">Academic Honor:</span>
                <span className="font-extrabold text-[#e6c762] text-sm">
                  GPA 3.46 / 4.00 (Untar)
                </span>
              </div>

              <div className="space-y-1.5 text-[11px] sm:text-xs text-[#c5d6ce]">
                <p>
                  <strong className="text-[#f3f0e6]">Core Profile:</strong> IT
                  Undergraduate at Universitas Tarumanagara specializing in{" "}
                  <span className="text-[#e6c762]">AI & Intelligent Systems</span>.
                  Experienced in maintaining enterprise B2B platforms
                  (Ex-Indotrading Intern) with a portfolio of 25+ deployed
                  applications.
                </p>
                <p>
                  <strong className="text-[#f3f0e6]">Status:</strong>{" "}
                  <span className="text-[#e6c762]">Ready to work</span>, actively
                  seeking an <span className="text-[#e6c762]">IT Internship</span>{" "}
                  opportunity.
                </p>
              </div>
            </div>

            <div className="space-y-1.5 pt-1 border-t border-[#1c3b2e]">
              <p className="text-[10px] text-[#8fa89b] uppercase tracking-wider font-semibold">
                Direct Access to Candidate:
              </p>
              <div className="grid grid-cols-4 gap-2">
                <a
                  href="https://wa.me/6281527005005"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center p-3 rounded-xl bg-[#07130e] hover:bg-[#133829] border border-[#d4af37]/40 text-[#d4af37] transition shadow-md hover:scale-105"
                  title="WhatsApp"
                >
                  <WhatsappIcon className="w-5 h-5" />
                </a>
                <button
                  onClick={copyEmail}
                  className="relative flex items-center justify-center p-3 rounded-xl bg-[#07130e] hover:bg-[#133829] border border-[#d4af37]/40 text-[#d4af37] transition shadow-md hover:scale-105"
                  title="Copy Email"
                >
                  {copied ? (
                    <Check className="w-5 h-5 text-emerald-400" />
                  ) : (
                    <Mail className="w-5 h-5" />
                  )}
                  {copied && (
                    <span className="absolute -top-8 px-2 py-0.5 rounded bg-emerald-600 text-white text-[10px] font-bold shadow-lg animate-fadeIn">
                      Copied!
                    </span>
                  )}
                </button>
                <a
                  href="https://www.linkedin.com/in/andi-gautama"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center p-3 rounded-xl bg-[#07130e] hover:bg-[#133829] border border-[#d4af37]/40 text-[#d4af37] transition shadow-md hover:scale-105"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/AndiGautama"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center p-3 rounded-xl bg-[#07130e] hover:bg-[#133829] border border-[#d4af37]/40 text-[#d4af37] transition shadow-md hover:scale-105"
                  title="GitHub Repositories"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="pt-1">
              <button
                onClick={() => setShowBioModal(false)}
                className="w-full py-3 rounded-xl bg-[#d4af37] hover:bg-[#e3c14d] text-[#07130e] font-bold text-xs uppercase tracking-wider transition shadow-lg"
              >
                Close Card
              </button>
            </div>
          </div>
        </div>
      )}

      {/* BACKGROUND GLOWS */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-[#133829]/40 blur-[130px]" />
        <div className="absolute top-1/3 -right-40 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-[#d4af37]/10 blur-[140px]" />
      </div>

      {/* FIXED FLOATING NAVBAR */}
      <header className="fixed top-4 left-0 right-0 z-40 px-3 sm:px-6 pointer-events-none">
        <div className="max-w-6xl mx-auto backdrop-blur-xl bg-[#0c1f17]/90 border border-[#d4af37]/30 rounded-2xl px-4 sm:px-6 py-3 flex justify-between items-center shadow-2xl shadow-black/80 pointer-events-auto">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#d4af37] to-[#9a7b1c] flex items-center justify-center text-[#07130e] font-extrabold text-xs sm:text-sm shadow-md group-hover:scale-105 transition">
              AG
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-wide text-xs sm:text-sm text-[#f3f0e6] leading-none">
                Andi Gautama
              </span>
              <span className="text-[10px] text-[#8fa89b] font-mono">
                Software & AI Engineer
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center space-x-1 bg-[#07130e]/60 p-1 rounded-xl border border-[#1c3b2e]">
            <a
              href="#projects"
              className="px-3.5 py-1.5 rounded-lg text-xs font-medium text-[#c5d6ce] hover:text-[#d4af37] hover:bg-[#0e241b] transition"
            >
              Works
            </a>
            <a
              href="#skills"
              className="px-3.5 py-1.5 rounded-lg text-xs font-medium text-[#c5d6ce] hover:text-[#d4af37] hover:bg-[#0e241b] transition"
            >
              Toolkit
            </a>
            <a
              href="#experience"
              className="px-3.5 py-1.5 rounded-lg text-xs font-medium text-[#c5d6ce] hover:text-[#d4af37] hover:bg-[#0e241b] transition"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="px-3.5 py-1.5 rounded-lg text-xs font-medium text-[#c5d6ce] hover:text-[#d4af37] hover:bg-[#0e241b] transition"
            >
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowBioModal(true)}
              className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#07130e] border border-[#1c3b2e] hover:border-[#d4af37]/50 text-[#e6c762] text-xs font-medium transition"
            >
              <span>Bio Card</span>
            </button>
            <a
              href="/CV-Andi-Gautama.pdf"
              download
              className="flex items-center gap-1.5 bg-gradient-to-r from-[#d4af37] to-[#b89225] hover:from-[#e3c14d] hover:to-[#c9a12d] text-[#07130e] text-[11px] sm:text-xs font-bold uppercase tracking-wider px-3.5 py-2 rounded-xl transition shadow-md"
            >
              <Download className="w-3.5 h-3.5" />
              <span>CV</span>
            </a>
          </div>
        </div>
      </header>

      {/* MAIN WEBSITE CONTENT */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-28 pb-20 space-y-24 sm:space-y-32">
        {/* HERO SECTION */}
        <section className="grid lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-7 flex flex-col justify-between p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-[#0e241b]/95 via-[#0b1c15]/95 to-[#081510]/95 border border-[#d4af37]/20 shadow-2xl space-y-6">
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#e6c762] text-xs font-medium">
                <Sparkles className="w-3.5 h-3.5" />
                Ready to Work — Seeking IT Internship
              </div>

              <div className="space-y-2">
                <p className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#8fa89b] font-semibold">
                  Software & AI Engineering Portfolio
                </p>
                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#f8f6f0] leading-[1.15]">
                  Crafting Intelligent{" "}
                  <span className="bg-gradient-to-r from-[#e6c762] via-[#d4af37] to-[#9dbf9e] bg-clip-text text-transparent">
                    Digital Products
                  </span>
                  .
                </h1>
              </div>

              <p className="text-[#a3b8ad] text-xs sm:text-sm leading-relaxed">
                Hi, I&apos;m <strong className="text-[#f3f0e6]">Andi Gautama</strong> —
                IT Undergraduate at{" "}
                <span className="text-[#e6c762]">Universitas Tarumanagara</span>{" "}
                specializing in AI, Full-Stack Web, and Flutter Mobile
                Development.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#projects"
                  className="bg-[#d4af37] hover:bg-[#e3c14d] text-[#07130e] font-bold text-xs sm:text-sm px-5 py-3 rounded-xl transition flex items-center gap-1.5 shadow-lg"
                >
                  Explore Works <ArrowUpRight className="w-4 h-4" />
                </a>
                <a
                  href="/CV-Andi-Gautama.pdf"
                  download
                  className="flex items-center gap-1.5 border border-[#d4af37]/30 hover:border-[#d4af37] bg-[#091812]/70 text-[#f3f0e6] px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition"
                >
                  <Download className="w-4 h-4 text-[#d4af37]" /> Download CV
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-3 border-t border-[#1c3b2e] text-[11px] sm:text-xs text-[#8fa89b]">
                <a
                  href="https://github.com/AndiGautama"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 hover:text-[#e6c762] transition"
                >
                  <GithubIcon className="w-4 h-4 text-[#d4af37]" /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/andi-gautama"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 hover:text-[#e6c762] transition"
                >
                  <LinkedinIcon className="w-4 h-4 text-[#d4af37]" /> LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Right Bento Card */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="p-6 sm:p-7 rounded-3xl bg-[#0c1f17]/90 border border-[#d4af37]/20 flex-1 flex flex-col justify-between space-y-5">
              <div className="flex items-center justify-between border-b border-[#1c3b2e] pb-3">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#d4af37]" />
                  <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
                    Executive Profile
                  </span>
                </div>
                <span className="text-xs text-[#8fa89b] flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#d4af37]" /> Jakarta Barat
                </span>
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between items-center py-1 border-b border-[#153024]">
                  <span className="text-[#8fa89b]">Focus</span>
                  <span className="font-semibold text-[#f3f0e6]">
                    AI & Intelligent Systems
                  </span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-[#153024]">
                  <span className="text-[#8fa89b]">University</span>
                  <span className="font-semibold text-[#f3f0e6]">Untar</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-[#153024]">
                  <span className="text-[#8fa89b]">GPA</span>
                  <span className="font-bold text-[#e6c762]">3.46 / 4.00</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-[#8fa89b]">Experience</span>
                  <span className="font-semibold text-[#f3f0e6]">
                    B2B Tech Intern
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-3.5 rounded-2xl bg-[#07140f] border border-[#1c3b2e]">
                  <div className="text-xl sm:text-2xl font-extrabold text-[#e6c762]">
                    25+
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-[#8fa89b]">
                    Projects Built
                  </div>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#07140f] border border-[#1c3b2e]">
                  <div className="text-xl sm:text-2xl font-extrabold text-[#f8f6f0]">
                    Full-Stack
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-[#8fa89b]">
                    Web, Mobile & AI
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. FEATURED PROJECTS */}
        <section id="projects" className="space-y-8 scroll-mt-28">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-1">
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#d4af37]">
                SELECTED WORKS & CASE STUDIES
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#f8f6f0] tracking-tight">
                featured engineering projects.
              </h2>
            </div>

            <div className="inline-flex flex-wrap items-center gap-1.5 p-1.5 rounded-full bg-[#0c1f17] border border-[#1c3b2e] w-fit">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    activeCategory === cat
                      ? "bg-[#d4af37] text-[#07130e] shadow-md"
                      : "text-[#9eb5ab] hover:text-[#f8f6f0]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-12 pt-2">
            {filteredProjects.map((project, index) => {
              const visibleTech = project.tech.slice(0, 3);
              const remainingCount = project.tech.length - visibleTech.length;

              return (
                <div
                  key={index}
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-52 w-full rounded-2xl p-2.5 bg-[#0c1f17] border border-[#1c3b2e] group-hover:border-[#d4af37]/50 transition-all duration-300 shadow-xl overflow-hidden mb-5">
                      <div
                        className={`w-full h-full rounded-xl bg-gradient-to-br ${project.accentGradient} border border-[#1c3b2e]/80 flex flex-col justify-between p-4 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500`}
                      >
                        <div className="flex items-center justify-between z-10">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#d4af37]/80" />
                            <span className="w-2.5 h-2.5 rounded-full bg-[#2a5946]" />
                            <span className="w-2.5 h-2.5 rounded-full bg-[#153024]" />
                          </div>
                          <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#07130e]/80 border border-[#d4af37]/30 text-[#e6c762]">
                            {project.category}
                          </span>
                        </div>

                        <div className="my-auto flex items-center justify-between gap-3 z-10 px-1">
                          <div className="space-y-1.5 max-w-[75%]">
                            <span className="text-[10px] font-mono text-[#8fa89b] uppercase tracking-widest">
                              {project.role}
                            </span>
                            <div className="text-sm font-bold text-[#f8f6f0] line-clamp-2 leading-snug">
                              {project.title.split(":")[0]}
                            </div>
                          </div>
                          <div className="w-11 h-11 rounded-2xl bg-[#07130e]/90 border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] shrink-0 shadow-lg group-hover:rotate-6 transition">
                            {project.previewType === "web" && (
                              <Globe className="w-5 h-5" />
                            )}
                            {project.previewType === "mobile" && (
                              <Smartphone className="w-5 h-5" />
                            )}
                            {project.previewType === "nlp" && (
                              <BrainCircuit className="w-5 h-5" />
                            )}
                          </div>
                        </div>

                        <div className="flex items-center justify-between text-[10px] font-mono text-[#8fa89b] pt-2 border-t border-white/5 z-10">
                          <span>PROJECT #{project.num}</span>
                          <span className="text-[#e6c762] group-hover:translate-x-1 transition-transform">
                            Preview ↗
                          </span>
                        </div>

                        <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-[#d4af37]/15 blur-2xl pointer-events-none" />
                      </div>
                    </div>

                    <div className="flex items-start justify-between gap-3 mb-2.5">
                      <h3 className="text-lg font-bold text-[#f8f6f0] group-hover:text-[#e6c762] transition leading-snug">
                        {project.title}
                      </h3>
                      <span className="shrink-0 px-2.5 py-0.5 rounded-full bg-[#0c1f17] border border-[#1c3b2e] text-[11px] font-mono text-[#9eb5ab]">
                        {project.year}
                      </span>
                    </div>

                    <p className="text-xs sm:text-[13px] text-[#9eb5ab] leading-relaxed line-clamp-3 mb-4">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-1.5 mb-4">
                      {visibleTech.map((t, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 text-[11px] font-medium rounded-full bg-[#0c1f17] border border-[#1c3b2e] text-[#c5d6ce]"
                        >
                          {t}
                        </span>
                      ))}
                      {remainingCount > 0 && (
                        <span className="px-2.5 py-1 text-[11px] font-semibold rounded-full bg-[#0c1f17] border border-[#d4af37]/30 text-[#e6c762]">
                          +{remainingCount}
                        </span>
                      )}
                    </div>

                    <div className="pt-3 border-t border-[#153024] flex items-center justify-between text-xs">
                      <span className="font-bold text-[#f3f0e6] group-hover:text-[#d4af37] inline-flex items-center gap-1 transition">
                        Read Case Study <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>

                      <div
                        className="flex items-center gap-2.5 text-[#8fa89b]"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="hover:text-[#d4af37] transition"
                          title="Open Project Summary"
                        >
                          <FolderGit2 className="w-4 h-4" />
                        </button>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:text-[#d4af37] transition"
                          title="External Link"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:text-[#d4af37] transition"
                          title="GitHub Repository"
                        >
                          <GithubIcon className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 3. SKILLS & TOOLS (WITH SVG LOGOS) */}
        <section id="skills" className="space-y-8 scroll-mt-28">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-1">
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#d4af37]">
                TOOLKIT & CAPABILITIES
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#f8f6f0] tracking-tight">
                tech stack & tools.
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#9eb5ab] max-w-md leading-relaxed">
              Core technologies, programming languages, and engineering tools I use to build
              scalable applications and intelligent systems.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {squareSkills.map((item, idx) => (
              <div
                key={idx}
                className="group p-5 rounded-3xl bg-[#0c1f17]/85 border border-[#1c3b2e] hover:border-[#d4af37]/60 transition-all duration-300 hover:-translate-y-1 flex flex-col items-center justify-center text-center space-y-3 shadow-lg"
              >
                <div
                  className="w-14 h-14 rounded-2xl bg-[#07130e] border border-[#1c3b2e] flex items-center justify-center shadow-md transform -rotate-3 group-hover:rotate-0 group-hover:scale-110 transition-all duration-300 overflow-hidden p-2"
                >
                  <img 
                    src={item.icon} 
                    alt={`${item.name} logo`} 
                    className={`w-full h-full object-contain ${item.invert ? 'invert brightness-0 opacity-80' : ''}`}
                  />
                </div>

                <div className="space-y-0.5 pt-1">
                  <h3 className="text-sm font-bold text-[#f8f6f0] group-hover:text-[#e6c762] transition">
                    {item.name}
                  </h3>
                  <p className="text-[11px] font-mono text-[#8fa89b]">
                    {item.category}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2.5 pt-2">
            {capabilityPills.map((pill, i) => (
              <div
                key={i}
                className="px-4 py-2 rounded-full bg-[#0c1f17]/90 border border-[#1c3b2e] hover:border-[#d4af37]/40 text-xs text-[#c5d6ce] flex items-center gap-2 transition"
              >
                <span className="text-[#d4af37] text-sm leading-none">✦</span>
                <span>{pill}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 4. EXPERIENCE */}
        <section id="experience" className="space-y-8 scroll-mt-28">
          <div className="space-y-1 border-b border-[#1c3b2e] pb-4">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#d4af37]">
              CAREER & ACADEMIC JOURNEY
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#f8f6f0] tracking-tight">
              work experience.
            </h2>
          </div>

          <div className="space-y-6 border-l-2 border-[#d4af37]/30 ml-3 pl-6">
            <div className="relative p-6 rounded-3xl bg-[#0c1f17]/75 border border-[#1c3b2e] space-y-3">
              <div className="absolute -left-[31px] top-6 w-3.5 h-3.5 rounded-full bg-[#d4af37] border-4 border-[#07130e]" />
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                <h3 className="text-lg sm:text-xl font-bold text-[#f8f6f0]">
                  Web Developer & Operations Intern
                </h3>
                <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#d4af37]/10 text-[#e6c762] w-fit">
                  May 2022 – Oct 2022
                </span>
              </div>
              <p className="text-xs sm:text-sm font-medium text-[#8fa89b]">
                PT. Inovasi Sukses Sentosa (Indotrading.com & Kikayu.com) — Jakarta
              </p>
              <ul className="list-disc list-inside text-xs sm:text-sm text-[#a3b8ad] space-y-1.5 pt-1 leading-relaxed">
                <li>
                  Contributed to development and deployment of Indotrading B2B
                  enterprise e-commerce platform.
                </li>
                <li>
                  Performed website maintenance, bug fixes, and performance
                  optimization for platform uptime.
                </li>
                <li>
                  Managed product databases and inventory systems, updating B2B
                  stock levels and pricing accurately.
                </li>
              </ul>
            </div>

            <div className="relative p-6 rounded-3xl bg-[#0c1f17]/75 border border-[#1c3b2e] space-y-3">
              <div className="absolute -left-[31px] top-6 w-3.5 h-3.5 rounded-full bg-[#2a5946] border-4 border-[#07130e]" />
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                <h3 className="text-lg sm:text-xl font-bold text-[#f8f6f0]">
                  Event Service Staff
                </h3>
                <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#153024] text-[#9eb5ab] w-fit">
                  Jun 2026 – Jul 2026
                </span>
              </div>
              <p className="text-xs sm:text-sm font-medium text-[#8fa89b]">
                PT Jakarana Tama (Mie Gaga - Jakarta Fair) — Jakarta
              </p>
              <ul className="list-disc list-inside text-xs sm:text-sm text-[#a3b8ad] space-y-1.5 pt-1 leading-relaxed">
                <li>
                  Delivered customer service by serving orders efficiently with a
                  welcoming attitude to visitors.
                </li>
                <li>
                  Maintained high standards of booth hygiene and operational
                  cleanliness through daily schedules.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 5. CONTACT SECTION */}
        <section
          id="contact"
          className="p-8 sm:p-14 rounded-[32px] bg-gradient-to-br from-[#0e241b] via-[#0a1b14] to-[#07130e] border border-[#d4af37]/30 shadow-2xl scroll-mt-28"
        >
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#07130e] border border-[#d4af37]/30 text-xs text-[#e6c762] font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for internships & projects
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#f8f6f0] leading-[1.15] tracking-tight">
                always searching for new problems, fun teams and great ideas.
              </h2>

              <p className="text-xs sm:text-sm text-[#9eb5ab] leading-relaxed">
                have a project idea, internship opportunity, or just want to
                discuss software engineering, NLP, or full-stack development?
                drop a note or reach out directly.
              </p>

              <div className="space-y-3 pt-2 text-xs sm:text-sm">
                <a
                  href="https://github.com/AndiGautama"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-[#c5d6ce] hover:text-[#e6c762] transition w-fit"
                >
                  <GithubIcon className="w-4 h-4 text-[#d4af37]" />
                  <span>github.com/AndiGautama</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
                </a>

                <a
                  href="mailto:andigautama010@gmail.com"
                  className="flex items-center gap-3 text-[#c5d6ce] hover:text-[#e6c762] transition w-fit"
                >
                  <Mail className="w-4 h-4 text-[#d4af37]" />
                  <span>andigautama010@gmail.com</span>
                </a>

                <a
                  href="https://wa.me/6281527005005"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-[#c5d6ce] hover:text-[#e6c762] transition w-fit"
                >
                  <Phone className="w-4 h-4 text-[#d4af37]" />
                  <span>+62 815-2700-5005 (WhatsApp)</span>
                </a>
              </div>

              <div className="pt-4 border-t border-[#1c3b2e]">
                <p className="text-xs italic text-[#8fa89b] font-serif">
                  Powered by Next.js & TypeScript — engineered in West Jakarta.
                </p>
              </div>
            </div>

            <form
              onSubmit={handleContactSubmit}
              className="lg:col-span-6 space-y-7 lg:pl-4 pt-2"
            >
              <div>
                <input
                  type="text"
                  required
                  placeholder="name [or nickname, we don't judge]"
                  value={contactForm.name}
                  onChange={(e) =>
                    setContactForm({ ...contactForm, name: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-[#1c3b2e] focus:border-[#d4af37] py-3 text-sm text-[#f8f6f0] placeholder-[#6c877b] focus:outline-none transition"
                />
              </div>

              <div>
                <input
                  type="email"
                  required
                  placeholder="e-mail address"
                  value={contactForm.email}
                  onChange={(e) =>
                    setContactForm({ ...contactForm, email: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-[#1c3b2e] focus:border-[#d4af37] py-3 text-sm text-[#f8f6f0] placeholder-[#6c877b] focus:outline-none transition"
                />
              </div>

              <div>
                <textarea
                  rows={4}
                  required
                  placeholder="tell me about your project, internship role, or questions..."
                  value={contactForm.message}
                  onChange={(e) =>
                    setContactForm({ ...contactForm, message: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-[#1c3b2e] focus:border-[#d4af37] py-3 text-sm text-[#f8f6f0] placeholder-[#6c877b] focus:outline-none transition resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-[#d4af37] hover:bg-[#e3c14d] text-[#07130e] font-bold text-xs sm:text-sm tracking-wide transition shadow-xl shadow-[#d4af37]/20 hover:scale-[1.02]"
                >
                  <span>send message →</span>
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* POP-UP MODAL PROJECT CASE STUDY */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-lg p-6 sm:p-8 rounded-3xl bg-[#0e241b] border border-[#d4af37]/40 shadow-2xl space-y-6 text-left animate-scaleUp">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-[#07130e] border border-[#1c3b2e] text-[#8fa89b] hover:text-white transition"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-[#d4af37] px-2.5 py-1 rounded-md bg-[#d4af37]/10 border border-[#d4af37]/20">
                  Case Study {selectedProject.num}
                </span>
                <span className="text-xs font-mono text-[#8fa89b]">
                  • {selectedProject.year}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#f8f6f0] pt-1">
                {selectedProject.title}
              </h3>
              <p className="text-xs text-[#e6c762] font-semibold uppercase tracking-wider">
                {selectedProject.role}
              </p>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-[#a3b8ad] leading-relaxed border-t border-b border-[#1c3b2e] py-4">
              <p>
                <strong className="text-[#f3f0e6]">Overview:</strong>{" "}
                {selectedProject.description}
              </p>
              <p>
                <strong className="text-[#f3f0e6]">Architecture & Details:</strong>{" "}
                {selectedProject.details}
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-xs text-[#8fa89b] uppercase tracking-wider font-semibold">
                Technologies Used:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {selectedProject.tech.map((item, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 text-[11px] font-medium rounded-lg bg-[#07130e] border border-[#d4af37]/25 text-[#e6c762]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-[#d4af37] hover:bg-[#e3c14d] text-[#07130e] font-bold text-xs sm:text-sm py-3 rounded-xl transition shadow-md"
              >
                <GithubIcon className="w-4 h-4" /> View Repository on GitHub
              </a>
            </div>
          </div>
        </div>
      )}

      {/* CSS ANIMATION */}
      <style jsx global>{`
        @keyframes floatMarquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        @keyframes floatMarqueeRev {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        @keyframes scaleUp {
          0% {
            opacity: 0;
            transform: scale(0.85);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-float-slow {
          display: flex;
          width: 300%;
          animation: floatMarquee 40s linear infinite;
        }
        .animate-float-slow-rev {
          display: flex;
          width: 300%;
          animation: floatMarqueeRev 40s linear infinite;
        }
        .animate-scaleUp {
          animation: scaleUp 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      <footer className="border-t border-[#153024] py-8 text-center text-xs text-[#6c877b]">
        © 2026 Andi Gautama — Portfolio Website
      </footer>
    </div>
  );
}