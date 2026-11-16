"use client";
import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  Download,
  ExternalLink,
  ArrowUpRight,
  X,
  ChevronDown,
  Check,
  Gamepad2,
  Trophy,
  AlertCircle,
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

interface Project {
  num: string;
  title: string;
  year: string;
  category: "Web Apps" | "Mobile & UI/UX" | "Systems & NLP";
  role: string;
  description: string;
  details: string;
  tech: string[];
  github: string;
  thumbnail: string;
  gallery: string[];
}

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [showBioModal, setShowBioModal] = useState(false);
  const [introOpened, setIntroOpened] = useState(false);
  const [copied, setCopied] = useState(false);

  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(20);
  const [target, setTarget] = useState({ top: 50, left: 50, type: 'bug', id: 0 });
  const [flash, setFlash] = useState<"red" | "green" | null>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (gameStarted && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (timeLeft === 0) {
      setGameStarted(false);
    }
    return () => clearTimeout(timer);
  }, [gameStarted, timeLeft]);

  useEffect(() => {
    if (!gameStarted || timeLeft === 0) return;
    const moveTimer = setInterval(() => {
      spawnTarget();
    }, 850);
    return () => clearInterval(moveTimer);
  }, [gameStarted, timeLeft]);

  const spawnTarget = () => {
    const isBug = Math.random() > 0.3;
    setTarget({
      top: Math.floor(Math.random() * 65) + 15,
      left: Math.floor(Math.random() * 75) + 10,
      type: isBug ? 'bug' : (Math.random() > 0.5 ? 'feature' : 'coffee'),
      id: Date.now(),
    });
  };

  const handleTargetClick = (type: string) => {
    if (type === 'bug') {
      setScore(s => s + 10);
      triggerFlash("green");
    } else {
      setScore(s => s - 5);
      triggerFlash("red");
    }
    spawnTarget();
  };

  const triggerFlash = (color: "red" | "green") => {
    setFlash(color);
    setTimeout(() => setFlash(null), 200);
  };

  const startGame = () => {
    setScore(0);
    setTimeLeft(20);
    setGameStarted(true);
    spawnTarget();
  };

  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const copyEmail = () => {
    navigator.clipboard.writeText("andigautama010@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Message from ${contactForm.name} (${contactForm.email})`);
    const body = encodeURIComponent(`Sender Name: ${contactForm.name}\nSender Email: ${contactForm.email}\n\nMessage:\n${contactForm.message}`);
    window.location.href = `mailto:andigautama010@gmail.com?subject=${subject}&body=${body}`;
  };

  const categories = ["All", "Web Apps", "Mobile & UI/UX", "Systems & NLP"];

  const projects: Project[] = [
    {
      num: "01",
      title: "ActiveLab: Gym Membership & Booking App",
      year: "2026",
      category: "Mobile & UI/UX",
      role: "Flutter Developer",
      description: "Aplikasi mobile lintas platform untuk berlangganan gym dan booking kelas fitness secara real-time.",
      details: "Dibangun menggunakan Flutter dan Dart. Mengintegrasikan sistem autentikasi, manajemen member, serta penjadwalan kelas fitness dengan UI yang bersih dan responsif.",
      tech: ["Flutter", "Dart", "Supabase", "REST API"],
      github: "https://github.com/AndiGautama",
      thumbnail: "/activelab.png",
      gallery: ["/activelab.png"],
    },
    {
      num: "02",
      title: "E-Commerce Review Sentiment Analysis",
      year: "2026",
      category: "Systems & NLP",
      role: "AI & NLP Developer",
      description: "Sistem Natural Language Processing untuk mengevaluasi sentimen ulasan pelanggan e-commerce.",
      details: "Memanfaatkan teknik TF-IDF vectorization dan Cosine Similarity menggunakan Python & Scikit-Learn untuk mengkategorikan ulasan produk secara otomatis.",
      tech: ["Python", "NLP", "TF-IDF", "Scikit-Learn"],
      github: "https://github.com/AndiGautama",
      thumbnail: "/analisissentimen.png",
      gallery: ["/analisissentimen.png"],
    },
    {
      num: "03",
      title: "NASA Astronomy Web Explorer",
      year: "2025",
      category: "Web Apps",
      role: "Frontend Developer",
      description: "Website eksplorasi luar angkasa interaktif yang mengambil data galaksi dan astronomi langsung dari API publik NASA.",
      details: "Dibangun murni dengan HTML, CSS modern, dan JavaScript. Menampilkan gambar astronomi harian dan galeri kosmik dengan tata letak minimalis.",
      tech: ["HTML5", "CSS3", "JavaScript", "NASA API"],
      github: "https://github.com/AndiGautama",
      thumbnail: "/astronomi.png",
      gallery: ["/astronomi.png"],
    },
    {
      num: "04",
      title: "Roll-a-Ball Desktop Game",
      year: "2025",
      category: "Systems & NLP",
      role: "Game Developer",
      description: "Game klasik interaktif mengumpulkan koin dengan kontrol fisik bola yang mulus.",
      details: "Dikembangkan menggunakan Android Studio / Game Engine untuk melatih logika pemrograman berorientasi objek dan penanganan event input pengguna.",
      tech: ["Game Engine", "Android Studio", "Java / C#"],
      github: "https://github.com/AndiGautama",
      thumbnail: "/ballgame.png",
      gallery: ["/ballgame.png"],
    },
    {
      num: "05",
      title: "Indonesian Nusantara Batik Gallery",
      year: "2025",
      category: "Web Apps",
      role: "Web Designer & Developer",
      description: "Katalog digital yang menampilkan ragam motif dan filosofi batik tradisional dari berbagai daerah di Indonesia.",
      details: "Menyajikan informasi budaya lokal dengan desain galeri visual yang elegan dan informatif.",
      tech: ["HTML5", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/AndiGautama",
      thumbnail: "/batik1.png",
      gallery: ["/batik1.png", "/batik2.png"],
    },
    {
      num: "06",
      title: "RestoBite: Admin & User Dining Platform",
      year: "2025",
      category: "Web Apps",
      role: "Full-Stack PHP Developer",
      description: "Website pemesanan makanan berbasis web dengan fitur CRUD lengkap dan autentikasi multi-role (Admin/User).",
      details: "Admin dapat mengelola menu restoran (tambah/hapus/edit), sementara pelanggan dapat melakukan pemesanan langsung secara online.",
      tech: ["PHP", "MySQL", "HTML/CSS", "Bootstrap"],
      github: "https://github.com/AndiGautama",
      thumbnail: "/restaurant.png",
      gallery: ["/restaurant.png"],
    },
    {
      num: "07",
      title: "Scientific Web Calculator",
      year: "2025",
      category: "Web Apps",
      role: "Frontend Developer",
      description: "Kalkulator saintifik multifungsi untuk perhitungan matematika lanjutan.",
      details: "Project iseng eksperimen fungsi matematika kompleks dengan antarmuka tombol responsif dan bersih.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/AndiGautama",
      thumbnail: "/scienzetific.png",
      gallery: ["/scienzetific.png"],
    },
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const squareSkills = [
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
    { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", invert: true },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
    { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
    { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" },
    { name: "Android Studio", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", invert: true },
  ];

  return (
    <div className="min-h-screen bg-[#050d0a] text-[#f3f0e6] font-sans selection:bg-[#d4af37] selection:text-[#050d0a] relative scroll-smooth">
      <div
        className={`fixed inset-0 w-[100dvw] h-[100dvh] z-[60] bg-[#050d0a] flex flex-col items-center justify-center p-4 transition-transform duration-1000 ease-in-out ${
          introOpened ? "-translate-y-full pointer-events-none" : "translate-y-0"
        }`}
      >
        <div className="relative z-10 text-center space-y-6 max-w-lg">
          <div className="relative mx-auto w-32 h-32 sm:w-40 sm:h-40 rounded-full p-1 bg-gradient-to-br from-[#d4af37] to-[#1c3b2e] shadow-2xl">
            <img
              src="/andi.png"
              alt="Andi Gautama"
              className="w-full h-full rounded-full object-cover border-4 border-[#050d0a]"
              onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/150?text=AG"; }}
            />
          </div>

          <div className="space-y-2">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#d4af37] font-medium">
              Portfolio 2026
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold text-[#f8f6f0] tracking-tight">
              Andi Gautama
            </h1>
            <p className="text-sm text-[#8fa89b]">
              Software & AI Engineer • West Jakarta
            </p>
          </div>

          <button
            onClick={() => setIntroOpened(true)}
            className="group mt-4 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#f3f0e6] text-[#050d0a] hover:bg-[#d4af37] font-semibold text-sm transition-all duration-300 shadow-lg"
          >
            <span>View Portfolio</span>
            <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>

      <header className="fixed top-0 left-0 right-0 z-40 bg-[#050d0a]/80 backdrop-blur-xl border-b border-[#1c3b2e] px-4 py-3">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <a href="#" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#d4af37] flex items-center justify-center text-[#050d0a] font-bold text-sm">
              AG
            </div>
            <span className="font-semibold text-sm hidden sm:block">Andi Gautama</span>
          </a>

          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-[#8fa89b]">
            <a href="#projects" className="hover:text-[#d4af37] transition">Projects</a>
            <a href="#skills" className="hover:text-[#d4af37] transition">Skills</a>
            <a href="#minigame" className="hover:text-[#d4af37] transition flex items-center gap-1"><Gamepad2 className="w-4 h-4"/> Mini Game</a>
            <a href="#experience" className="hover:text-[#d4af37] transition">Experience</a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowBioModal(true)}
              className="text-sm font-medium text-[#c5d6ce] hover:text-[#d4af37] transition"
            >
              Profile
            </button>
            <a
              href="/CV-Andi-Gautama.pdf"
              download
              className="flex items-center gap-1.5 bg-[#1c3b2e] hover:bg-[#d4af37] hover:text-[#050d0a] text-[#f3f0e6] text-xs font-semibold px-4 py-2 rounded-full transition"
            >
              <Download className="w-3.5 h-3.5" /> CV
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-32 pb-24 space-y-32">
        <section className="flex flex-col items-center text-center space-y-6 pt-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0c1f17] border border-[#1c3b2e] text-[#d4af37] text-xs sm:text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for IT Internship & Software Roles
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight max-w-4xl leading-tight">
            Building clean digital experiences and <span className="text-[#d4af37]">intelligent systems.</span>
          </h1>
          
          <p className="text-[#8fa89b] text-base sm:text-lg max-w-2xl">
            IT Undergraduate at Universitas Tarumanagara specializing in Full-Stack Web, Mobile Apps, and AI/NLP integration with 25+ built projects.
          </p>

          <div className="flex items-center gap-4 pt-4">
            <a href="#projects" className="bg-[#f3f0e6] text-[#050d0a] px-6 py-3 rounded-full font-semibold text-sm hover:bg-[#d4af37] transition">
              See My Work
            </a>
            <a href="#contact" className="border border-[#1c3b2e] text-[#f3f0e6] px-6 py-3 rounded-full font-semibold text-sm hover:border-[#d4af37] transition">
              Contact Me
            </a>
          </div>
        </section>

        <section id="projects" className="space-y-10 scroll-mt-28">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
              <p className="text-[#8fa89b] mt-1 text-sm">Click any card to inspect details and preview image galleries.</p>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs sm:text-sm transition ${
                    activeCategory === cat ? "bg-[#d4af37] text-[#050d0a] font-semibold" : "bg-[#0c1f17] text-[#8fa89b] hover:text-[#f3f0e6]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div 
                key={index} 
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer flex flex-col bg-[#0c1f17]/40 rounded-3xl border border-[#1c3b2e] overflow-hidden hover:border-[#d4af37]/50 transition-colors shadow-lg"
              >
                <div className="w-full h-52 bg-[#050d0a] overflow-hidden relative">
                  <img 
                    src={project.thumbnail} 
                    alt={project.title} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    onError={(e) => { e.currentTarget.src = `https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80`; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1f17] to-transparent opacity-60"></div>
                  
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 bg-[#050d0a]/80 backdrop-blur-md rounded-full text-[10px] font-semibold text-[#d4af37] uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-[#f3f0e6] group-hover:text-[#d4af37] transition leading-snug mb-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-[#8fa89b] text-xs mb-6 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="mt-auto flex items-center justify-between pt-4 border-t border-[#1c3b2e]">
                    <div className="flex flex-wrap gap-1">
                      {project.tech.slice(0, 2).map((t, i) => (
                        <span key={i} className="text-[11px] font-medium text-[#c5d6ce] bg-[#1c3b2e]/50 px-2 py-0.5 rounded-md border border-[#1c3b2e]">
                          {t}
                        </span>
                      ))}
                    </div>
                    
                    <span className="text-xs text-[#d4af37] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Details <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="minigame" className="p-8 sm:p-12 rounded-[2rem] bg-[#0c1f17] border border-[#1c3b2e] text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#d4af37 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
          
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#050d0a] border border-[#d4af37]/30 text-[#e6c762] text-xs font-semibold">
              <Gamepad2 className="w-4 h-4" /> Dev Simulator 2026
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Catch the Bug!</h2>
            <p className="text-sm text-[#8fa89b]">
              Prove your debugging skills! Click the <span className="text-emerald-400 font-bold">Bug 🐛 (+10)</span> before it escapes. 
              Don't squash the <span className="text-blue-400 font-bold">Feature 💡 (-5)</span> or spill the <span className="text-amber-600 font-bold">Coffee ☕ (-5)</span>!
            </p>

            {!gameStarted && timeLeft === 20 && (
              <button
                onClick={startGame}
                className="mt-4 px-8 py-3.5 bg-[#f3f0e6] hover:bg-[#d4af37] text-[#050d0a] font-bold text-sm rounded-full transition-colors shadow-lg"
              >
                Start Debugging
              </button>
            )}

            {gameStarted && (
              <div 
                className={`relative h-64 sm:h-80 w-full bg-[#050d0a] rounded-2xl border-2 overflow-hidden my-6 transition-colors duration-200 ${flash === 'red' ? 'border-red-500/50 bg-red-950/20' : flash === 'green' ? 'border-emerald-500/50 bg-emerald-950/20' : 'border-[#1c3b2e]'}`}
              >
                <div className="absolute top-0 left-0 right-0 p-3 flex justify-between items-center bg-gradient-to-b from-[#050d0a] to-transparent pointer-events-none">
                  <div className="px-3 py-1 rounded-md bg-[#1c3b2e]/80 border border-[#1c3b2e] text-xs font-mono text-[#d4af37] font-bold">
                    Score: {score}
                  </div>
                  <div className="px-3 py-1 rounded-md bg-[#1c3b2e]/80 border border-[#1c3b2e] text-xs font-mono text-[#f3f0e6] flex items-center gap-1.5">
                    Time: <span className={timeLeft <= 5 ? "text-red-400 font-bold animate-pulse" : ""}>{timeLeft}s</span>
                  </div>
                </div>

                <button
                  onClick={() => handleTargetClick(target.type)}
                  style={{ top: `${target.top}%`, left: `${target.left}%` }}
                  className={`absolute p-2 sm:p-3 rounded-full shadow-2xl transform -translate-x-1/2 -translate-y-1/2 cursor-crosshair transition-all duration-300 ease-out active:scale-75 ${
                    target.type === 'bug' ? 'text-3xl sm:text-4xl animate-pulse hover:bg-emerald-900/30' : 'text-3xl sm:text-4xl hover:bg-red-900/30'
                  }`}
                  title={target.type}
                >
                  {target.type === 'bug' && '🐛'}
                  {target.type === 'feature' && '💡'}
                  {target.type === 'coffee' && '☕'}
                </button>
              </div>
            )}

            {!gameStarted && timeLeft < 20 && (
              <div className="space-y-4 pt-4">
                <div className="p-6 rounded-2xl bg-[#050d0a] border border-[#d4af37]/40 max-w-sm mx-auto shadow-xl">
                  <p className="text-xs font-mono text-[#8fa89b] mb-1">SESSION COMPLETE</p>
                  <h3 className="text-2xl font-extrabold text-[#f3f0e6] mb-3">
                    Final Score: <span className={score < 0 ? "text-red-400" : "text-[#d4af37]"}>{score}</span>
                  </h3>
                  
                  {score > 100 ? (
                    <div className="flex items-center justify-center gap-2 text-sm text-emerald-400 bg-emerald-950/40 p-2 rounded-lg">
                      <Trophy className="w-4 h-4" /> Senior Debugger!
                    </div>
                  ) : score > 0 ? (
                    <div className="flex items-center justify-center gap-2 text-sm text-[#d4af37] bg-[#d4af37]/10 p-2 rounded-lg">
                      <Check className="w-4 h-4" /> Solid Code.
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-2 text-sm text-red-400 bg-red-950/40 p-2 rounded-lg">
                      <AlertCircle className="w-4 h-4" /> Production Down!
                    </div>
                  )}
                </div>
                
                <button
                  onClick={startGame}
                  className="px-6 py-2.5 bg-[#1c3b2e] hover:bg-[#d4af37] text-[#f3f0e6] hover:text-[#050d0a] font-bold text-xs rounded-full transition-colors"
                >
                  Play Again 🔄
                </button>
              </div>
            )}
          </div>
        </section>

        <section id="skills" className="space-y-10 scroll-mt-28">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Toolkit</h2>
            <p className="text-[#8fa89b] mt-1 text-sm">Languages and tools I use to build my projects.</p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {squareSkills.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center p-4 rounded-2xl bg-[#0c1f17]/50 border border-[#1c3b2e] hover:bg-[#1c3b2e]/50 transition-colors gap-3"
              >
                <img 
                  src={item.icon} 
                  alt={item.name} 
                  className={`w-9 h-9 object-contain ${item.invert ? 'invert brightness-0 opacity-90' : ''}`}
                />
                <span className="text-[11px] font-medium text-[#c5d6ce]">{item.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="space-y-10 scroll-mt-28">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Experience</h2>
          </div>

          <div className="space-y-8 pl-4 border-l border-[#1c3b2e]">
            <div className="relative pl-6">
              <div className="absolute w-3 h-3 bg-[#d4af37] rounded-full -left-[6.5px] top-1.5" />
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                <h3 className="text-lg font-bold text-[#f3f0e6]">Web Developer & Operations Intern</h3>
                <span className="text-xs text-[#8fa89b] font-mono mt-1 sm:mt-0">May 2022 – Oct 2022</span>
              </div>
              <p className="text-sm font-medium text-[#d4af37] mb-3">PT. Inovasi Sukses Sentosa (Indotrading.com) — Jakarta</p>
              <ul className="list-disc list-inside text-xs sm:text-sm text-[#8fa89b] space-y-1">
                <li>Contributed to development and deployment of B2B enterprise e-commerce platform.</li>
                <li>Performed website maintenance, bug fixes, and database inventory management.</li>
              </ul>
            </div>

            <div className="relative pl-6">
              <div className="absolute w-3 h-3 bg-[#1c3b2e] rounded-full -left-[6.5px] top-1.5" />
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                <h3 className="text-lg font-bold text-[#f3f0e6]">Event Service Staff</h3>
                <span className="text-xs text-[#8fa89b] font-mono mt-1 sm:mt-0">Jun 2026 – Jul 2026</span>
              </div>
              <p className="text-sm font-medium text-[#d4af37] mb-3">PT Jakarana Tama (Mie Gaga - Jakarta Fair) — Jakarta</p>
              <ul className="list-disc list-inside text-xs sm:text-sm text-[#8fa89b] space-y-1">
                <li>Delivered customer service and handled operations for visitors at JIExpo Kemayoran.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="py-10 border-t border-[#1c3b2e] scroll-mt-28">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Let's connect.</h2>
              <p className="text-[#8fa89b] text-sm leading-relaxed mb-6">
                Fill out the form to send an email directly to my inbox (`andigautama010@gmail.com`).
              </p>
              
              <div className="space-y-4">
                <a href="mailto:andigautama010@gmail.com" className="flex items-center gap-3 text-sm text-[#f3f0e6] hover:text-[#d4af37] transition w-fit">
                  <Mail className="w-5 h-5 text-[#8fa89b]" /> andigautama010@gmail.com
                </a>
                <a href="https://wa.me/6281527005005" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-[#f3f0e6] hover:text-[#d4af37] transition w-fit">
                  <Phone className="w-5 h-5 text-[#8fa89b]" /> +62 815-2700-5005
                </a>
                <a href="https://github.com/AndiGautama" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-[#f3f0e6] hover:text-[#d4af37] transition w-fit">
                  <GithubIcon className="w-5 h-5 text-[#8fa89b]" /> github.com/AndiGautama
                </a>
              </div>
            </div>

            <form onSubmit={handleContactSubmit} className="space-y-6">
              <input
                type="text"
                required
                placeholder="Your Name"
                value={contactForm.name}
                onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                className="w-full bg-[#0c1f17] border border-[#1c3b2e] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#d4af37] transition"
              />
              <input
                type="email"
                required
                placeholder="Your Email Address"
                value={contactForm.email}
                onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                className="w-full bg-[#0c1f17] border border-[#1c3b2e] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#d4af37] transition"
              />
              <textarea
                rows={4}
                required
                placeholder="Your Message / Inquiry..."
                value={contactForm.message}
                onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                className="w-full bg-[#0c1f17] border border-[#1c3b2e] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#d4af37] transition resize-none"
              />
              <button
                type="submit"
                className="bg-[#f3f0e6] text-[#050d0a] font-semibold text-sm px-6 py-3 rounded-xl hover:bg-[#d4af37] transition w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <span>Send Email to Andi</span> <ArrowUpRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </section>
      </main>

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050d0a]/90 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0c1f17] border border-[#1c3b2e] p-6 sm:p-8 shadow-2xl custom-scrollbar">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 bg-[#050d0a] rounded-full text-[#8fa89b] hover:text-[#f3f0e6] transition"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <span className="text-xs font-semibold text-[#d4af37] uppercase tracking-wider">
                {selectedProject.category} • {selectedProject.year}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#f3f0e6] mt-1 mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-sm text-[#8fa89b]">{selectedProject.description}</p>
            </div>

            <div className={`grid gap-4 mb-6 ${selectedProject.gallery.length === 1 ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}>
              {selectedProject.gallery.map((imgSrc, idx) => (
                <div key={idx} className={`w-full ${selectedProject.gallery.length === 1 ? 'h-64 sm:h-96' : 'h-48'} rounded-2xl bg-[#050d0a] border border-[#1c3b2e] overflow-hidden`}>
                  <img 
                    src={imgSrc} 
                    alt={`Gallery ${idx + 1}`} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    onError={(e) => { e.currentTarget.src = `https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80`; }}
                  />
                </div>
              ))}
            </div>

            <div className="space-y-4 mb-8">
              <h4 className="font-semibold text-[#f3f0e6]">About the Project</h4>
              <p className="text-sm text-[#8fa89b] leading-relaxed">
                {selectedProject.details}
              </p>
              
              <div className="pt-2">
                <h4 className="font-semibold text-[#f3f0e6] mb-2 text-sm">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-[#1c3b2e] text-[#c5d6ce]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-4 border-t border-[#1c3b2e]">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-[#f3f0e6] hover:bg-[#d4af37] text-[#050d0a] font-semibold text-sm px-6 py-2.5 rounded-full transition"
              >
                <GithubIcon className="w-4 h-4" /> View Repository
              </a>
            </div>
          </div>
        </div>
      )}

      {showBioModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050d0a]/90 backdrop-blur-sm">
          <div className="relative w-full max-w-sm rounded-3xl bg-[#0c1f17] border border-[#1c3b2e] p-6 shadow-2xl">
            <button
              onClick={() => setShowBioModal(false)}
              className="absolute top-4 right-4 p-2 bg-[#050d0a] rounded-full text-[#8fa89b] hover:text-[#f3f0e6] transition"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex flex-col items-center text-center mt-4 mb-6">
              <img src="/andi.png" alt="Andi" className="w-24 h-24 rounded-full object-cover border-2 border-[#d4af37] mb-4" onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/150"; }} />
              <h3 className="text-xl font-bold text-[#f3f0e6]">Andi Gautama</h3>
              <p className="text-sm text-[#d4af37] mt-1">GPA 3.46 / 4.00 (Untar)</p>
            </div>

            <p className="text-sm text-[#8fa89b] text-center mb-6 leading-relaxed">
              Seeking an IT Internship. Experienced in maintaining enterprise B2B platforms with a portfolio of 25+ deployed applications.
            </p>

            <div className="flex justify-center gap-3">
              <button onClick={copyEmail} className="p-3 rounded-full bg-[#1c3b2e] text-[#f3f0e6] hover:bg-[#d4af37] hover:text-[#050d0a] transition relative">
                {copied ? <Check className="w-5 h-5" /> : <Mail className="w-5 h-5" />}
              </button>
              <a href="https://wa.me/6281527005005" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-[#1c3b2e] text-[#f3f0e6] hover:bg-[#d4af37] hover:text-[#050d0a] transition">
                <Phone className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/andi-gautama" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-[#1c3b2e] text-[#f3f0e6] hover:bg-[#d4af37] hover:text-[#050d0a] transition">
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #1c3b2e;
          border-radius: 10px;
        }
      `}</style>
      
      <footer className="border-t border-[#1c3b2e] py-8 text-center text-xs text-[#8fa89b]">
        © 2026 Andi Gautama. Crafted with Next.js & Tailwind CSS.
      </footer>
    </div>
  );
}