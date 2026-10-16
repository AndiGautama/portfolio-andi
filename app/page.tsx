"use client";
import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Download,
  ExternalLink,
  Code2,
  Database,
  Cpu,
  Terminal,
  GraduationCap,
  Award,
  Sparkles,
  ArrowUpRight,
  Layers,
  X,
  Maximize2,
  ChevronDown,
  Copy,
  Check,
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
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.148-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.124-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
    </svg>
  );
}

interface Project {
  num: string;
  title: string;
  role: string;
  description: string;
  details: string;
  tech: string[];
  github: string;
}

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showBioModal, setShowBioModal] = useState(false);
  const [introOpened, setIntroOpened] = useState(false);
  const [copied, setCopied] = useState(false);
  const [rotateStyle, setRotateStyle] = useState({ transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)" });

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

  const projects: Project[] = [
    {
      num: "01",
      title: "ActiveLab — Gym Membership & Class Booking",
      role: "Full-Stack Developer",
      description: "Integrated web and mobile ecosystem allowing users to subscribe to gym memberships and schedule real-time class appointments across partner fitness centers.",
      details: "Developed as a comprehensive platform handling user authentication, subscription workflows, real-time class appointment scheduling, and gym partner database relations using Supabase and Express.js.",
      tech: ["Flutter", "Express.js", "Supabase", "REST API"],
      github: "https://github.com/AndiGautama",
    },
    {
      num: "02",
      title: "Loyalty Marketplace Mobile App",
      role: "Flutter Mobile Developer",
      description: "Cross-platform e-commerce application engineered in Android Studio with automated loyalty point calculations and an end-to-end reward redemption module.",
      details: "Built an intuitive mobile marketplace using Flutter and Dart. Designed custom algorithms to automatically calculate reward points per transaction and created smooth redemption workflows with state management.",
      tech: ["Flutter", "Dart", "Riverpod", "Android Studio"],
      github: "https://github.com/AndiGautama",
    },
    {
      num: "03",
      title: "CareerLog — Job Application Tracker",
      role: "Full-Stack Web Developer",
      description: "Interactive web platform integrated with public job APIs to track, manage, and organize job applications backed by a relational database.",
      details: "Engineered using Next.js and Prisma ORM with SQLite. Integrated Arbeitnow public API to fetch live job listings and streamline application status tracking for job seekers.",
      tech: ["Next.js", "TypeScript", "Prisma ORM", "SQLite"],
      github: "https://github.com/AndiGautama",
    },
    {
      num: "04",
      title: "E-Commerce Sentiment Analysis Chatbot",
      role: "AI & NLP Developer",
      description: "Natural Language Processing prototype utilizing TF-IDF vectorization and Cosine Similarity to evaluate customer review sentiments through an interactive UI.",
      details: "Built an NLP-based sentiment analysis model using Python and Scikit-Learn. Processed e-commerce customer feedback datasets and deployed an interactive chat interface via Gradio.",
      tech: ["Python", "Scikit-Learn", "NLP", "Gradio"],
      github: "https://github.com/AndiGautama",
    },
  ];

  const skillCategories = [
    {
      title: "Web & Mobile Engineering",
      icon: <Code2 className="w-5 h-5 text-[#d4af37]" />,
      skills: ["Next.js", "React", "TypeScript", "JavaScript", "Flutter", "Dart", "Node.js", "HTML5 & CSS3", "Bootstrap"],
    },
    {
      title: "AI & Data Science",
      icon: <Cpu className="w-5 h-5 text-[#d4af37]" />,
      skills: ["Python", "Machine Learning", "Data Analysis", "Scikit-Learn", "Pandas", "NLP", "TF-IDF Vectorization"],
    },
    {
      title: "Database & Architecture",
      icon: <Database className="w-5 h-5 text-[#d4af37]" />,
      skills: ["PostgreSQL", "MySQL", "Supabase", "MongoDB", "SQLite", "Prisma ORM", "RESTful APIs"],
    },
    {
      title: "Networking & Dev Tools",
      icon: <Terminal className="w-5 h-5 text-[#d4af37]" />,
      skills: ["GNS3", "Cisco Packet Tracer", "Linux (Red Hat / Alpine)", "Git & GitHub", "VirtualBox", "Figma", "Android Studio"],
    },
  ];

  return (
    <div className="min-h-screen bg-[#07130e] text-[#f3f0e6] font-sans selection:bg-[#d4af37] selection:text-[#07130e] relative overflow-x-hidden">
      
      {/* 3D INTRO SHOWCASE (100dvw x 100dvh FULL SCREEN) */}
      <div
        className={`fixed inset-0 w-[100dvw] h-[100dvh] z-50 bg-[#07130e] flex flex-col items-center justify-center p-4 transition-all duration-1000 ease-in-out overflow-hidden ${
          introOpened ? "-translate-y-full opacity-0 pointer-events-none" : "translate-y-0 opacity-100"
        }`}
      >
        {/* BACKGROUND 7 BARIS KARTU BUBBLE FULL MERATA TANPA GAP */}
        <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden flex flex-col justify-around py-2 opacity-90">
          
          <div className="whitespace-nowrap animate-float-slow flex gap-5 w-full">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex gap-5 shrink-0">
                <div className="px-5 py-2.5 rounded-2xl bg-[#0c241b]/95 border border-[#d4af37]/60 backdrop-blur-md shadow-2xl text-xs font-mono text-[#f8f6f0] flex items-center gap-2">📍 Cengkareng, Jakarta Barat</div>
                <div className="px-5 py-2.5 rounded-2xl bg-[#0c241b]/95 border border-[#d4af37]/60 backdrop-blur-md shadow-2xl text-xs font-mono text-[#f8f6f0] flex items-center gap-2">📧 andigautama010@gmail.com</div>
                <div className="px-5 py-2.5 rounded-2xl bg-[#0c241b]/95 border border-[#d4af37]/60 backdrop-blur-md shadow-2xl text-xs font-mono text-[#f8f6f0] flex items-center gap-2">📞 +62 815-2700-5005</div>
                <div className="px-5 py-2.5 rounded-2xl bg-[#0c241b]/95 border border-[#d4af37]/60 backdrop-blur-md shadow-2xl text-xs font-mono text-[#f8f6f0] flex items-center gap-2">🎓 Universitas Tarumanagara</div>
                <div className="px-5 py-2.5 rounded-2xl bg-[#0c241b]/95 border border-[#d4af37]/60 backdrop-blur-md shadow-2xl text-xs font-mono text-[#f8f6f0] flex items-center gap-2">🚀 Ready to Work - IT Intern</div>
                <div className="px-5 py-2.5 rounded-2xl bg-[#0c241b]/95 border border-[#d4af37]/60 backdrop-blur-md shadow-2xl text-xs font-mono text-[#f8f6f0] flex items-center gap-2">⭐ AI & Intelligent Systems</div>
              </div>
            ))}
          </div>

          <div className="whitespace-nowrap animate-float-slow-rev flex gap-5 w-full">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex gap-5 shrink-0">
                <div className="px-5 py-2.5 rounded-2xl bg-[#0c241b]/95 border border-[#d4af37]/60 backdrop-blur-md shadow-2xl text-xs font-mono text-[#f8f6f0] flex items-center gap-2">💻 Tech: Next.js, Python, Flutter</div>
                <div className="px-5 py-2.5 rounded-2xl bg-[#0c241b]/95 border border-[#d4af37]/60 backdrop-blur-md shadow-2xl text-xs font-mono text-[#f8f6f0] flex items-center gap-2">📊 GPA: 3.46 / 4.00</div>
                <div className="px-5 py-2.5 rounded-2xl bg-[#0c241b]/95 border border-[#d4af37]/60 backdrop-blur-md shadow-2xl text-xs font-mono text-[#f8f6f0] flex items-center gap-2">💡 25+ Software Projects</div>
                <div className="px-5 py-2.5 rounded-2xl bg-[#0c241b]/95 border border-[#d4af37]/60 backdrop-blur-md shadow-2xl text-xs font-mono text-[#f8f6f0] flex items-center gap-2">🏆 Ex-Indotrading B2B Intern</div>
                <div className="px-5 py-2.5 rounded-2xl bg-[#0c241b]/95 border border-[#d4af37]/60 backdrop-blur-md shadow-2xl text-xs font-mono text-[#f8f6f0] flex items-center gap-2">🚀 Seeking IT Internship</div>
                <div className="px-5 py-2.5 rounded-2xl bg-[#0c241b]/95 border border-[#d4af37]/60 backdrop-blur-md shadow-2xl text-xs font-mono text-[#f8f6f0] flex items-center gap-2">💼 Full-Stack Development</div>
              </div>
            ))}
          </div>

          <div className="whitespace-nowrap animate-float-slow flex gap-5 w-full">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex gap-5 shrink-0">
                <div className="px-5 py-2.5 rounded-2xl bg-[#0c241b]/95 border border-[#d4af37]/60 backdrop-blur-md shadow-2xl text-xs font-mono text-[#f8f6f0] flex items-center gap-2">🛡️ Red Hat & GNS3 Networking</div>
                <div className="px-5 py-2.5 rounded-2xl bg-[#0c241b]/95 border border-[#d4af37]/60 backdrop-blur-md shadow-2xl text-xs font-mono text-[#f8f6f0] flex items-center gap-2">🎯 Project Leader KMB Dharmayana</div>
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
                <div className="px-5 py-2.5 rounded-2xl bg-[#0c241b]/95 border border-[#d4af37]/60 backdrop-blur-md shadow-2xl text-xs font-mono text-[#f8f6f0] flex items-center gap-2">💼 CareerLog Web App</div>
                <div className="px-5 py-2.5 rounded-2xl bg-[#0c241b]/95 border border-[#d4af37]/60 backdrop-blur-md shadow-2xl text-xs font-mono text-[#f8f6f0] flex items-center gap-2">🤖 Sentiment Analysis Chatbot</div>
                <div className="px-5 py-2.5 rounded-2xl bg-[#0c241b]/95 border border-[#d4af37]/60 backdrop-blur-md shadow-2xl text-xs font-mono text-[#f8f6f0] flex items-center gap-2">🔥 TypeScript & Tailwind</div>
              </div>
            ))}
          </div>

          <div className="whitespace-nowrap animate-float-slow flex gap-5 w-full">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex gap-5 shrink-0">
                <div className="px-5 py-2.5 rounded-2xl bg-[#0c241b]/95 border border-[#d4af37]/60 backdrop-blur-md shadow-2xl text-xs font-mono text-[#f8f6f0] flex items-center gap-2">📍 West Jakarta, Indonesia</div>
                <div className="px-5 py-2.5 rounded-2xl bg-[#0c241b]/95 border border-[#d4af37]/60 backdrop-blur-md shadow-2xl text-xs font-mono text-[#f8f6f0] flex items-center gap-2">📧 andigautama010@gmail.com</div>
                <div className="px-5 py-2.5 rounded-2xl bg-[#0c241b]/95 border border-[#d4af37]/60 backdrop-blur-md shadow-2xl text-xs font-mono text-[#f8f6f0] flex items-center gap-2">📞 +62 815-2700-5005</div>
                <div className="px-5 py-2.5 rounded-2xl bg-[#0c241b]/95 border border-[#d4af37]/60 backdrop-blur-md shadow-2xl text-xs font-mono text-[#f8f6f0] flex items-center gap-2">🎓 Computer Science Undergraduate</div>
                <div className="px-5 py-2.5 rounded-2xl bg-[#0c241b]/95 border border-[#d4af37]/60 backdrop-blur-md shadow-2xl text-xs font-mono text-[#f8f6f0] flex items-center gap-2">⭐ Software Engineering Spec</div>
              </div>
            ))}
          </div>

          <div className="whitespace-nowrap animate-float-slow-rev flex gap-5 w-full">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex gap-5 shrink-0">
                <div className="px-5 py-2.5 rounded-2xl bg-[#0c241b]/95 border border-[#d4af37]/60 backdrop-blur-md shadow-2xl text-xs font-mono text-[#f8f6f0] flex items-center gap-2">🏆 SMK Cinta Kasih Tzu Chi Graduate</div>
                <div className="px-5 py-2.5 rounded-2xl bg-[#0c241b]/95 border border-[#d4af37]/60 backdrop-blur-md shadow-2xl text-xs font-mono text-[#f8f6f0] flex items-center gap-2">⭐ 2nd Place ASN Short Movie Competition</div>
                <div className="px-5 py-2.5 rounded-2xl bg-[#0c241b]/95 border border-[#d4af37]/60 backdrop-blur-md shadow-2xl text-xs font-mono text-[#f8f6f0] flex items-center gap-2">🚀 Ready to Work - IT Intern</div>
                <div className="px-5 py-2.5 rounded-2xl bg-[#0c241b]/95 border border-[#d4af37]/60 backdrop-blur-md shadow-2xl text-xs font-mono text-[#f8f6f0] flex items-center gap-2">💡 Problem Solver & Fast Learner</div>
              </div>
            ))}
          </div>

          <div className="whitespace-nowrap animate-float-slow flex gap-5 w-full">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex gap-5 shrink-0">
                <div className="px-5 py-2.5 rounded-2xl bg-[#0c241b]/95 border border-[#d4af37]/60 backdrop-blur-md shadow-2xl text-xs font-mono text-[#f8f6f0] flex items-center gap-2">💡 Full-Stack & AI Solutions</div>
                <div className="px-5 py-2.5 rounded-2xl bg-[#0c241b]/95 border border-[#d4af37]/60 backdrop-blur-md shadow-2xl text-xs font-mono text-[#f8f6f0] flex items-center gap-2">🔥 Next.js, TypeScript & Node.js</div>
                <div className="px-5 py-2.5 rounded-2xl bg-[#0c241b]/95 border border-[#d4af37]/60 backdrop-blur-md shadow-2xl text-xs font-mono text-[#f8f6f0] flex items-center gap-2">⚡ Supabase, PostgreSQL & Prisma</div>
                <div className="px-5 py-2.5 rounded-2xl bg-[#0c241b]/95 border border-[#d4af37]/60 backdrop-blur-md shadow-2xl text-xs font-mono text-[#f8f6f0] flex items-center gap-2">🎯 Dedicated Team Leader</div>
              </div>
            ))}
          </div>

        </div>

        <div className="absolute inset-0 w-full h-full bg-[#07130e]/45 pointer-events-none" />

        <div className="relative z-10 text-center space-y-3 max-w-lg pt-2">
          
          {/* FOTO UTUH MENGIKUTI BORDER TANPA KEPOTONG */}
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
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#d4af37]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                
                {/* Menggunakan object-cover dan center agar pas di dalam border */}
                <img
                  src="/andi.png"
                  alt="Andi Gautama"
                  className="w-full h-full object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            </div>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#d4af37] font-bold">Interactive Showcase</span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#f8f6f0]">Andi Gautama</h1>
            <p className="text-xs text-[#9eb5ab]">IT Undergraduate at Universitas Tarumanagara</p>
            <p className="text-[10px] text-[#d4af37] italic">(Click photo to open profile card)</p>
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

            {/* Header Profil */}
            <div className="flex items-center gap-4 border-b border-[#1c3b2e] pb-4">
              <div className="w-20 h-24 sm:w-24 sm:h-28 rounded-2xl overflow-hidden border-2 border-[#d4af37] shadow-xl shrink-0 bg-[#07130e]">
                <img src="/andi.png" alt="Andi Gautama" className="w-full h-full object-cover object-center" />
              </div>
              <div className="space-y-1">
                <span className="inline-block text-[9px] font-mono uppercase tracking-widest text-[#d4af37] px-2 py-0.5 rounded bg-[#d4af37]/10 border border-[#d4af37]/20">
                  Verified Candidate
                </span>
                <h3 className="text-xl font-bold text-[#f8f6f0]">Andi Gautama</h3>
                <p className="text-[11px] text-[#e6c762] font-medium leading-tight">Software Engineering & IT Intern Candidate</p>
              </div>
            </div>

            {/* Ringkasan Fokus HRD */}
            <div className="space-y-2.5 text-xs text-[#a3b8ad] leading-relaxed">
              <div className="p-3 rounded-2xl bg-[#07130e] border border-[#d4af37]/30 flex justify-between items-center shadow-inner">
                <span className="text-[#8fa89b] text-[11px]">Academic Honor:</span>
                <span className="font-extrabold text-[#e6c762] text-sm">GPA 3.46 / 4.00 (Untar)[cite: 1]</span>
              </div>
              
              <div className="space-y-1.5 text-[11px] sm:text-xs text-[#c5d6ce]">
                <p>
                  <strong className="text-[#f3f0e6]">Core Profile:</strong> IT Undergraduate at Universitas Tarumanagara specializing in <span className="text-[#e6c762]">AI & Intelligent Systems</span>[cite: 1]. Experienced in maintaining enterprise B2B platforms (Ex-Indotrading Intern) with a portfolio of 25+ deployed applications[cite: 1].
                </p>
                <p>
                  <strong className="text-[#f3f0e6]">Status:</strong> <span className="text-[#e6c762]">Ready to work</span>, actively seeking an <span className="text-[#e6c762]">IT Internship</span> opportunity.
                </p>
              </div>
            </div>

            {/* Tombol Kontak Cepat (Logo Saja) */}
            <div className="space-y-1.5 pt-1 border-t border-[#1c3b2e]">
              <p className="text-[10px] text-[#8fa89b] uppercase tracking-wider font-semibold">Direct Access to Candidate:</p>
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
                  {copied ? <Check className="w-5 h-5 text-emerald-400" /> : <Mail className="w-5 h-5" />}
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

      {/* FLOATING NAVBAR */}
      <header className="sticky top-4 z-40 px-3 sm:px-6">
        <div className="max-w-5xl mx-auto backdrop-blur-xl bg-[#0c1f17]/90 border border-[#d4af37]/25 rounded-2xl px-4 sm:px-6 py-3 flex justify-between items-center shadow-2xl shadow-black/60">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-[#d4af37] to-[#9a7b1c] flex items-center justify-center text-[#07130e] font-extrabold text-xs sm:text-sm shadow-md">
              AG
            </div>
            <span className="font-semibold tracking-wide text-xs sm:text-sm text-[#f3f0e6]">Andi Gautama</span>
          </a>

          <nav className="hidden md:flex items-center space-x-6 text-xs uppercase tracking-widest font-medium text-[#9eb5ab]">
            <a href="#projects" className="hover:text-[#d4af37] transition">Works</a>
            <a href="#skills" className="hover:text-[#d4af37] transition">Expertise</a>
            <a href="#experience" className="hover:text-[#d4af37] transition">Experience</a>
            <a href="#contact" className="hover:text-[#d4af37] transition">Contact</a>
          </nav>

          <a
            href="/CV-Andi-Gautama.pdf"
            download
            className="flex items-center gap-1.5 bg-gradient-to-r from-[#d4af37] to-[#b89225] hover:from-[#e3c14d] hover:to-[#c9a12d] text-[#07130e] text-[11px] sm:text-xs font-bold uppercase tracking-wider px-3.5 py-2 rounded-xl transition shadow-md"
          >
            <Download className="w-3.5 h-3.5" />
            <span>CV</span>
          </a>
        </div>
      </header>

      {/* MAIN WEBSITE CONTENT */}
      <main className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-8 pb-20 space-y-20 sm:space-y-28">
        
        {/* HERO SECTION */}
        <section className="grid lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-7 flex flex-col justify-between p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-[#0e241b]/95 via-[#0b1c15]/95 to-[#081510]/95 border border-[#d4af37]/20 shadow-2xl space-y-6">
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#e6c762] text-xs font-medium">
                <Sparkles className="w-3.5 h-3.5" />
                Ready to Work — Seeking IT Internship
              </div>

              <div className="space-y-2">
                <p className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#8fa89b] font-semibold">Software & AI Engineering Portfolio</p>
                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#f8f6f0] leading-[1.15]">
                  Crafting Intelligent <span className="bg-gradient-to-r from-[#e6c762] via-[#d4af37] to-[#9dbf9e] bg-clip-text text-transparent">Digital Products</span>.
                </h1>
              </div>

              <p className="text-[#a3b8ad] text-xs sm:text-sm leading-relaxed">
                Hi, I&apos;m <strong className="text-[#f3f0e6]">Andi Gautama</strong> — IT Undergraduate at <span className="text-[#e6c762]">Universitas Tarumanagara</span> specializing in AI, Full-Stack Web, and Flutter Mobile Development.
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
                <a href="https://github.com/AndiGautama" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-[#e6c762] transition">
                  <GithubIcon className="w-4 h-4 text-[#d4af37]" /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/andi-gautama" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-[#e6c762] transition">
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
                  <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">Executive Profile</span>
                </div>
                <span className="text-xs text-[#8fa89b] flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#d4af37]" /> Jakarta Barat
                </span>
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between items-center py-1 border-b border-[#153024]">
                  <span className="text-[#8fa89b]">Focus</span>
                  <span className="font-semibold text-[#f3f0e6]">AI & Intelligent Systems</span>
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
                  <span className="font-semibold text-[#f3f0e6]">B2B Tech Intern</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-3.5 rounded-2xl bg-[#07140f] border border-[#1c3b2e]">
                  <div className="text-xl sm:text-2xl font-extrabold text-[#e6c762]">25+</div>
                  <div className="text-[10px] sm:text-[11px] text-[#8fa89b]">Projects Built</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#07140f] border border-[#1c3b2e]">
                  <div className="text-xl sm:text-2xl font-extrabold text-[#f8f6f0]">Full-Stack</div>
                  <div className="text-[10px] sm:text-[11px] text-[#8fa89b]">Web, Mobile & AI</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. FEATURED PROJECTS */}
        <section id="projects" className="space-y-8 scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-[#1c3b2e] pb-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#d4af37]">
                <span>01</span> <span className="w-6 h-[1px] bg-[#d4af37]/50" /> <span>Interactive Showcase</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#f8f6f0]">Featured Technical Projects</h2>
            </div>
            <span className="text-[11px] sm:text-xs text-[#8fa89b] italic">💡 Tap any project card to open details</span>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {projects.map((project, index) => (
              <div
                key={index}
                onClick={() => setSelectedProject(project)}
                className="group relative p-6 rounded-3xl bg-gradient-to-b from-[#0e241b]/80 to-[#091712]/90 border border-[#1c3b2e] hover:border-[#d4af37]/60 transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between space-y-5 shadow-xl active:scale-[0.98]"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs font-mono font-bold text-[#d4af37] px-2 py-0.5 rounded-md bg-[#d4af37]/10 border border-[#d4af37]/20">
                        {project.num}
                      </span>
                      <span className="text-[11px] uppercase tracking-wider text-[#8fa89b] font-medium">
                        {project.role}
                      </span>
                    </div>
                    <span className="text-[11px] text-[#d4af37] flex items-center gap-1 opacity-80 group-hover:opacity-100 font-medium">
                      Details <Maximize2 className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#f8f6f0] group-hover:text-[#e6c762] transition">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#9eb5ab] leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#153024] flex flex-wrap gap-1.5">
                  {project.tech.map((item, i) => (
                    <span key={i} className="px-2.5 py-1 text-[11px] font-medium rounded-lg bg-[#07130e] border border-[#d4af37]/20 text-[#e6c762]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. SKILLS */}
        <section id="skills" className="space-y-8 scroll-mt-24">
          <div className="space-y-1 border-b border-[#1c3b2e] pb-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#d4af37]">
              <span>02</span> <span className="w-6 h-[1px] bg-[#d4af37]/50" /> <span>Arsenal</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#f8f6f0]">Core Competencies & Tools</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {skillCategories.map((cat, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-[#0c1f17]/70 border border-[#1c3b2e] space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/25">{cat.icon}</div>
                  <h3 className="text-base sm:text-lg font-bold text-[#f8f6f0]">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-medium rounded-xl bg-[#07130e] border border-[#1c3b2e] text-[#c5d6ce]">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. EXPERIENCE */}
        <section id="experience" className="space-y-8 scroll-mt-24">
          <div className="space-y-1 border-b border-[#1c3b2e] pb-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#d4af37]">
              <span>03</span> <span className="w-6 h-[1px] bg-[#d4af37]/50" /> <span>Journey</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#f8f6f0]">Work Experience</h2>
          </div>

          <div className="space-y-6 border-l-2 border-[#d4af37]/30 ml-3 pl-6">
            <div className="relative p-6 rounded-3xl bg-[#0c1f17]/75 border border-[#1c3b2e] space-y-3">
              <div className="absolute -left-[31px] top-6 w-3.5 h-3.5 rounded-full bg-[#d4af37] border-4 border-[#07130e]" />
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                <h3 className="text-lg sm:text-xl font-bold text-[#f8f6f0]">Web Developer & Operations Intern</h3>
                <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#d4af37]/10 text-[#e6c762] w-fit">
                  May 2022 – Oct 2022
                </span>
              </div>
              <p className="text-xs sm:text-sm font-medium text-[#8fa89b]">PT. Inovasi Sukses Sentosa (Indotrading.com & Kikayu.com) — Jakarta</p>
              <ul className="list-disc list-inside text-xs sm:text-sm text-[#a3b8ad] space-y-1.5 pt-1 leading-relaxed">
                <li>Contributed to development and deployment of Indotrading B2B enterprise e-commerce platform.</li>
                <li>Performed website maintenance, bug fixes, and performance optimization for platform uptime.</li>
                <li>Managed product databases and inventory systems, updating B2B stock levels and pricing accurately.</li>
              </ul>
            </div>

            <div className="relative p-6 rounded-3xl bg-[#0c1f17]/75 border border-[#1c3b2e] space-y-3">
              <div className="absolute -left-[31px] top-6 w-3.5 h-3.5 rounded-full bg-[#2a5946] border-4 border-[#07130e]" />
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                <h3 className="text-lg sm:text-xl font-bold text-[#f8f6f0]">Event Service Staff</h3>
                <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#153024] text-[#9eb5ab] w-fit">
                  Jun 2026 – Jul 2026
                </span>
              </div>
              <p className="text-xs sm:text-sm font-medium text-[#8fa89b]">PT Jakarana Tama (Mie Gaga - Jakarta Fair) — Jakarta</p>
              <ul className="list-disc list-inside text-xs sm:text-sm text-[#a3b8ad] space-y-1.5 pt-1 leading-relaxed">
                <li>Delivered customer service by serving orders efficiently with a welcoming attitude to visitors.</li>
                <li>Maintained high standards of booth hygiene and operational cleanliness through daily schedules.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 5. CONTACT BANNER */}
        <section id="contact" className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#122e22] via-[#0b1d16] to-[#07130e] border border-[#d4af37]/35 text-center space-y-5 shadow-2xl">
          <div className="max-w-xl mx-auto space-y-3 relative z-10">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#d4af37]">Initiate Collaboration</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#f8f6f0]">Ready to Contribute to Your Team.</h2>
            <p className="text-[#a3b8ad] text-xs sm:text-sm leading-relaxed">
              Ready to work — actively seeking Software Engineering and IT Internship opportunities.
            </p>

            <div className="flex flex-wrap justify-center gap-3 pt-3">
              <a href="mailto:andigautama010@gmail.com" className="flex items-center gap-2 bg-gradient-to-r from-[#d4af37] to-[#b89225] text-[#07130e] font-bold text-xs px-5 py-3 rounded-xl transition shadow-md">
                <Mail className="w-4 h-4" /> Email
              </a>
              <a href="https://wa.me/6281527005005" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-[#07130e] text-[#f3f0e6] border border-[#d4af37]/30 font-semibold text-xs px-5 py-3 rounded-xl transition">
                <Phone className="w-4 h-4 text-[#d4af37]" /> WhatsApp
              </a>
              <a href="https://www.linkedin.com/in/andi-gautama" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-[#07130e] text-[#f3f0e6] border border-[#d4af37]/30 font-semibold text-xs px-5 py-3 rounded-xl transition">
                <LinkedinIcon className="w-4 h-4 text-[#d4af37]" /> LinkedIn
              </a>
              <a href="https://github.com/AndiGautama" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-[#07130e] text-[#f3f0e6] border border-[#d4af37]/30 font-semibold text-xs px-5 py-3 rounded-xl transition">
                <GithubIcon className="w-4 h-4 text-[#d4af37]" /> GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* POP-UP MODAL PROJECT */}
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
              <span className="text-xs font-mono font-bold text-[#d4af37] px-2.5 py-1 rounded-md bg-[#d4af37]/10 border border-[#d4af37]/20">
                Project {selectedProject.num}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#f8f6f0] pt-1">{selectedProject.title}</h3>
              <p className="text-xs text-[#e6c762] font-semibold uppercase tracking-wider">{selectedProject.role}</p>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-[#a3b8ad] leading-relaxed border-t border-b border-[#1c3b2e] py-4">
              <p><strong className="text-[#f3f0e6]">Overview:</strong> {selectedProject.description}</p>
              <p><strong className="text-[#f3f0e6]">Technical Details:</strong> {selectedProject.details}</p>
            </div>

            <div className="space-y-2">
              <p className="text-xs text-[#8fa89b] uppercase tracking-wider font-semibold">Technologies Used:</p>
              <div className="flex flex-wrap gap-1.5">
                {selectedProject.tech.map((item, i) => (
                  <span key={i} className="px-2.5 py-1 text-[11px] font-medium rounded-lg bg-[#07130e] border border-[#d4af37]/25 text-[#e6c762]">
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

      {/* CSS ANIMATION (MARQUEE 300% WIDTH TANPA GAP & TRANSISI MODAL HALUS) */}
      <style jsx global>{`
        @keyframes floatMarquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes floatMarqueeRev {
          0% { transform: translateX(-33.333%); }
          100% { transform: translateX(0%); }
        }
        @keyframes scaleUp {
          0% { opacity: 0; transform: scale(0.85); }
          100% { opacity: 1; transform: scale(1); }
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
        2026 Andi Gautama Portofolio
      </footer>
    </div>
  );
}