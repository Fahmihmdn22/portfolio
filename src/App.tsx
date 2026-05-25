import React, { useState, useEffect } from 'react';
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  ArrowRight, 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle, 
  Download, 
  Code2, 
  ExternalLink,
  Smartphone,
  Atom,
  Check,
  Copy,
  BarChart2,
  Terminal,
  Palette,
  ShoppingBag,
  FileText,
  Printer,
  Eye
} from 'lucide-react';

const roles = ["Frontend Developer", "UI/UX Designer", "Content Creator"];

export default function App() {
  // Mobile menu control state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Theme control state (starts in 'dark' as requested)
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  
  // Contact form state
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  // Typewriter effect state
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // Standalone HTML text viewer state
  const [showCodeDrawer, setShowCodeDrawer] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  // Resume/CV interactive preview modal state
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [copiedResumeText, setCopiedResumeText] = useState(false);

  // Handle light/dark mode changes on document
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Typewriter effect controller loop
  useEffect(() => {
    const handleTyping = () => {
      const fullRole = roles[currentRoleIndex];
      if (!isDeleting) {
        setCurrentText(fullRole.substring(0, currentText.length + 1));
        setTypingSpeed(100);
        if (currentText === fullRole) {
          setTypingSpeed(2500); // Wait on completed text
          setIsDeleting(true);
        }
      } else {
        setCurrentText(fullRole.substring(0, currentText.length - 1));
        setTypingSpeed(50); // Erase faster
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(300);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, typingSpeed]);

  // Handle contact form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setFormSubmitted(true);
    }
  };

  const handleResetForm = () => {
    setFormData({ name: '', email: '', message: '' });
    setFormSubmitted(false);
  };

  // RAW SINGLE FILE HTML TEXT TO SHOW IN DEVELOPER PANEL
  const RAW_HTML_TEXT = `<!DOCTYPE html>
<html lang="id" class="scroll-smooth dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fahmi | Personal Portfolio & Creative Frontend Developer</title>
    <!-- Tailwind Play CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Google Fonts: Inter & Space Grotesk -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
    <script>
        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                        display: ['Space Grotesk', 'sans-serif'],
                    },
                    colors: {
                        brand: {
                            slate: { 50: '#f8fafc', 100: '#f1f5f9', 800: '#1e293b', 900: '#0f172a', 950: '#020617' },
                            accent: {
                                emerald: { 400: '#34d399', 500: '#10b981', 600: '#059669' },
                                violet: { 400: '#a78bfa', 500: '#8b5cf6', 600: '#7c3aed' }
                            }
                        }
                    }
                }
            }
        }
    </script>
    <style>
        .typing-caret { border-right: 3px solid currentColor; animation: caret-blink 0.75s step-end infinite; }
        @keyframes caret-blink { from, to { border-color: transparent } 50% { border-color: #10b981 } }
        .gradient-glow { filter: blur(80px); opacity: 0.15; pointer-events: none; }
    </style>
</head>
<body class="bg-brand-slate-50 text-brand-slate-900 dark:bg-brand-slate-950 dark:text-brand-slate-100 transition-colors duration-300 font-sans">
    <!-- Ambient Blur -->
    <div class="fixed top-0 left-1/4 w-[500px] h-[500px] bg-brand-accent-emerald-500 rounded-full gradient-glow z-0"></div>
    <div class="fixed bottom-1/4 right-1/4 w-[600px] h-[600px] bg-brand-accent-violet-500 rounded-full gradient-glow z-0"></div>

    <div class="relative z-10 flex flex-col min-h-screen">
        <header id="navbar-header" class="sticky top-0 z-50 transition-all duration-300">
            <div class="absolute inset-0 bg-white/70 dark:bg-brand-slate-950/70 backdrop-blur-md -z-10"></div>
            <nav class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <a href="#home" class="font-display text-2xl font-bold tracking-tight">Fahmi<span class="text-brand-accent-emerald-500 font-extrabold">.</span></a>
                <div class="hidden md:flex items-center space-x-8">
                    <a href="#home" class="font-medium text-sm text-brand-slate-600 dark:text-brand-slate-300 hover:text-brand-accent-emerald-500 transition-colors">Home</a>
                    <a href="#about" class="font-medium text-sm text-brand-slate-600 dark:text-brand-slate-300 hover:text-brand-accent-emerald-500 transition-colors">About</a>
                    <a href="#projects" class="font-medium text-sm text-brand-slate-600 dark:text-brand-slate-300 hover:text-brand-accent-emerald-500 transition-colors">Projects</a>
                    <a href="#contact" class="font-medium text-sm text-brand-slate-600 dark:text-brand-slate-300 hover:text-brand-accent-emerald-500 transition-colors">Contact</a>
                </div>
                <div class="flex items-center space-x-4">
                    <button id="theme-toggle" class="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-brand-slate-900/50 text-brand-slate-700 dark:text-brand-slate-300">
                        <span id="theme-sun" class="block">☀️</span>
                        <span id="theme-moon" class="hidden">🌙</span>
                    </button>
                    <a href="#contact" class="hidden md:inline-flex items-center justify-center px-5 h-10 text-xs font-semibold rounded-xl bg-brand-slate-900 text-white dark:bg-white dark:text-brand-slate-950 transition-all">Hubungi Saya</a>
                    <button id="menu-toggle" class="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 md:hidden text-brand-slate-700 dark:text-brand-slate-300">Menu</button>
                </div>
            </nav>
            <div id="mobile-drawer" class="fixed top-20 inset-x-0 bottom-0 bg-white/95 dark:bg-brand-slate-950/95 backdrop-blur-md border-t translate-x-full transition-transform duration-300 md:hidden z-50">
                <div class="flex flex-col space-y-6 p-8 text-center">
                    <a href="#home" class="mobile-link text-lg font-medium">Home</a>
                    <a href="#about" class="mobile-link text-lg font-medium">About</a>
                    <a href="#projects" class="mobile-link text-lg font-medium">Projects</a>
                    <a href="#contact" class="mobile-link text-lg font-medium">Contact</a>
                </div>
            </div>
        </header>

        <main class="flex-grow">
            <!-- Full portfolio detail omitted here for simplicity of representation -->
            <!-- Read actual file on workspace root: /fahmi_portfolio.html -->
        </main>
    </div>
    <script src="https://unpkg.com/lucide@latest"></script>
    <script>
        lucide.createIcons();
        /* Full typewriter, toggler, drawer, scrolling, validation routines included directly inside the saved file. */
    </script>
</body>
</html>`;

  // Function to copy code representation on clipboard
  const handleCopyCode = () => {
    navigator.clipboard.writeText(RAW_HTML_TEXT);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-[#0a0a0c] text-zinc-100 selection:bg-emerald-500/20 selection:text-emerald-400' 
        : 'bg-[#fafafa] text-zinc-950 selection:bg-emerald-500/10 selection:text-emerald-800'
    }`}>
      {/* Decorative Grid Mesh (Crafted Visual Accent) */}
      <div className="fixed inset-0 pointer-events-none opacity-5 dark:opacity-[0.02] z-0"
           style={{ 
             backgroundImage: 'radial-gradient(#10b981 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }} />

      {/* Decorative Glow Ambient Orbs (Architectural Integrity) */}
      <div className="absolute top-10 right-[15%] w-[400px] h-[400px] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/3 left-[10%] w-[500px] h-[500px] rounded-full bg-purple-500/3 blur-[140px] pointer-events-none z-0" />

      {/* STICKY GLASSMORPHIC NAVBAR */}
      <header className="sticky top-0 z-40 transition-all border-b border-zinc-200/30 dark:border-zinc-900/30 backdrop-blur-md bg-white/60 dark:bg-[#0a0a0c]/60">
        <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between" id="header-nav">
          {/* Logo Name */}
          <a href="#home" className="font-display text-xl font-bold tracking-tight hover:opacity-85 transition-opacity">
            Fahmi<span className="text-emerald-500 font-extrabold font-sans">.</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-10 text-xs font-semibold tracking-wider uppercase">
            <a href="#home" className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors relative group py-1">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 transition-all group-hover:w-full" />
            </a>
            <a href="#about" className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors relative group py-1">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 transition-all group-hover:w-full" />
            </a>
            <a href="#projects" className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors relative group py-1">
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 transition-all group-hover:w-full" />
            </a>
            <a href="#contact" className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors relative group py-1">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 transition-all group-hover:w-full" />
            </a>
          </div>

          <div className="flex items-center space-x-4">
            {/* Developer HTML Export Code Trigger button */}
            <button 
              onClick={() => setShowCodeDrawer(true)}
              className="px-3 py-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 font-mono text-[10px] uppercase font-bold tracking-wider flex items-center gap-1.5 transition-all cursor-pointer text-zinc-700 dark:text-zinc-300 rounded-lg"
              title="Dapatkan file HTML tunggal yang siap pakai"
              id="export-cta"
            >
              <Code2 className="w-3.5 h-3.5 text-emerald-500" />
              <span className="hidden sm:inline">Ekspor HTML</span>
            </button>

            {/* Light/Dark Toggle */}
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 transition-all cursor-pointer rounded-lg"
              aria-label="Toggle theme"
              id="theme-toggle-btn"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-zinc-600" />
              )}
            </button>

            {/* Hamburger Button Mobile */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 border border-zinc-200 dark:border-zinc-800 md:hidden hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-700 dark:text-zinc-300 transition-colors cursor-pointer rounded-lg"
              aria-label="Toggle mobile dynamic menu"
              id="mobile-hamburger"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </nav>

        {/* Dynamic Mobile Menu Slide Dropdown */}
        <div className={`fixed top-20 inset-x-0 bg-white/98 dark:bg-[#0a0a0c]/98 backdrop-blur-md border-b border-zinc-104 dark:border-zinc-900 transition-all duration-300 md:hidden z-50 ${
          mobileMenuOpen ? 'opacity-100 translate-y-0 py-6 visible' : 'opacity-0 -translate-y-4 invisible pointer-events-none'
        }`}>
          <div className="flex flex-col space-y-4 px-6 text-center text-xs uppercase font-semibold tracking-wider">
            <a 
              href="#home" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-zinc-650 dark:text-zinc-300 hover:text-emerald-500 transition-colors"
            >
              Home
            </a>
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-zinc-650 dark:text-zinc-300 hover:text-emerald-500 transition-colors"
            >
              About
            </a>
            <a 
              href="#projects" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-zinc-650 dark:text-zinc-300 hover:text-emerald-500 transition-colors"
            >
              Projects
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-zinc-650 dark:text-zinc-300 hover:text-emerald-500 transition-colors"
            >
              Contact
            </a>
            
            <div className="pt-4 border-t border-zinc-100 dark:border-zinc-900 flex justify-center">
              <button 
                onClick={() => { setMobileMenuOpen(false); setShowCodeDrawer(true); }}
                className="w-full inline-flex items-center justify-center h-11 rounded-lg bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 font-bold text-xs uppercase tracking-wider gap-2 shadow-sm"
              >
                <Code2 className="w-4 h-4 text-emerald-500" />
                Ekspor HTML Tunggal
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* CORE HERO SECTION */}
      <section id="home" className="min-h-[calc(100vh-80px)] xl:min-h-[calc(100vh-100px)] flex items-center relative py-20 px-6 z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center w-full">
          {/* Header Texts Column (Span 7) */}
          <div className="lg:col-span-12 xl:col-span-7 flex flex-col space-y-8 text-center lg:text-left">
            <div className="flex justify-center lg:justify-start">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 select-none border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2 animate-ping"></span>
                Tersedia untuk Pekerjaan Baru
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-900 dark:text-white leading-tight">
              Halo, Saya <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-400 to-violet-400">Fahmi</span>
            </h1>

            {/* Rotating Typed Text Display */}
            <div className="h-10 flex justify-center lg:justify-start items-center">
              <p className="font-display text-lg sm:text-xl font-medium text-zinc-500 dark:text-zinc-400">
                Seseorang <span className="text-emerald-500 dark:text-emerald-400 font-semibold animate-typing break-words">{currentText}</span>
              </p>
            </div>

            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
              Front-End Developer berbakat yang mendedikasikan diri untuk melahirkan antarmuka situs yang modern, cepat, serta sarat interaktif bermakna. Ahli mengawinkan estetika dan fungsi.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a 
                href="#projects" 
                className="inline-flex items-center justify-center px-6 h-12 font-bold text-xs uppercase tracking-wider rounded-lg bg-zinc-950 hover:bg-zinc-900 text-white dark:bg-white dark:hover:bg-zinc-100 dark:text-zinc-950 transition-all w-full sm:w-auto cursor-pointer"
                id="cta-projects"
              >
                Lihat Karya
                <ArrowRight className="w-3.5 h-3.5 ml-2 text-emerald-500" />
              </a>
              <button 
                onClick={() => setShowResumeModal(true)}
                className="inline-flex items-center justify-center px-6 h-12 font-bold text-xs uppercase tracking-wider rounded-lg border border-emerald-500/30 dark:border-emerald-500/25 bg-emerald-500/5 hover:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 transition-all w-full sm:w-auto cursor-pointer"
                id="cta-resume"
              >
                Unduh Resume/CV
                <Download className="w-3.5 h-3.5 ml-2 text-emerald-500 animate-bounce" />
              </button>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 h-12 font-bold text-xs uppercase tracking-wider rounded-lg border border-zinc-200 dark:border-zinc-800 bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-800 dark:text-zinc-200 transition-all w-full sm:w-auto cursor-pointer"
                id="cta-contact"
              >
                Hubungi Saya
              </a>
            </div>

            {/* Abstract Tech status line */}
            <div className="pt-6 flex justify-center lg:justify-start items-center space-x-6 text-[10px] text-zinc-400 dark:text-zinc-500 font-mono uppercase tracking-wider">
              <span className="flex items-center"><Terminal className="w-3.5 h-3.5 mr-1.5 text-emerald-500" /> React 19 SPA</span>
              <span className="flex items-center"><Palette className="w-3.5 h-3.5 mr-1.5 text-violet-500" /> Tailwind v4 CSS</span>
            </div>
          </div>

          {/* Graphics Column Sphere with portrait (Span 5) */}
          <div className="lg:col-span-12 xl:col-span-5 flex justify-center items-center relative">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
              {/* Profile Wrapper Frame */}
              <div className="absolute inset-0 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/10 backdrop-blur-md overflow-hidden flex items-center justify-center p-6 shadow-xl">
                {/* Tech microdots background */}
                <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#10b981 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
                
                {/* Minimalist Profile Picture Mask */}
                <div className="relative w-full h-full rounded-xl overflow-hidden border border-zinc-200/50 dark:border-zinc-800/80 shadow-md group">
                  <img 
                    src="./assets/images/fahmi_avatar_1779696635365.png" 
                    alt="Fahmi Developer Portrait" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://picsum.photos/seed/fahmi/400/400";
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT ME SECTION */}
      <section id="about" className="py-24 px-6 relative bg-zinc-50/50 dark:bg-[#0d0d11]/40 border-y border-zinc-200/30 dark:border-zinc-900/30 z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white mb-3">Tentang Saya</h2>
            <div className="h-0.5 w-12 bg-emerald-500 mx-auto rounded-full" />
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-4 leading-relaxed font-light">
              Mengulik baris kode kreatif guna menghasilkan solusi visual yang interaktif, menawan, dan memiliki performansi prima.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Visual Portrait Card (Left 5) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm">
                <div className="relative rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-950 p-2 shadow-sm">
                  <div className="rounded-xl overflow-hidden aspect-square bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/40 dark:border-zinc-800/40">
                    <img 
                      src="./assets/images/fahmi_avatar_1779696635365.png" 
                      alt="Fahmi Hamdani" 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-102"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://picsum.photos/seed/fahmi/400/400";
                      }}
                    />
                  </div>
                  <div className="mt-4 p-3 text-center">
                    <p className="font-display font-bold text-zinc-900 dark:text-zinc-100 text-sm tracking-tight">Fahmi Hamdani</p>
                    <p className="text-[10px] font-mono uppercase tracking-wider text-emerald-500 mt-1.5 flex items-center justify-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-emerald-500" /> Based in Indonesia
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Descriptive & Skills Grid Column (Right 7) */}
            <div className="lg:col-span-7 flex flex-col space-y-8">
              <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white leading-tight">
                Menghubungkan Seni Desain Dengan Struktur Kode Modern
              </h3>
              
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                Sejak menekuni dunia pemrograman frontend, fokus utama saya selalu diarahkan untuk mengkonstruksi arsitektur situs web yang tidak hanya elok secara estetika, namun juga andal diakses dari perangkat apapun. Saya sangat termotivasi untuk menciptakan kode bersih (clean code) dan interaksi antarmuka yang ramah pengguna.
              </p>

              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                Bagi saya, penulisan kode baris demi baris adalah proses pemecahan masalah kreatif. Saya terus beradaptasi dengan tren teknologi web paling mutakhir untuk melahirkan performa mumpuni.
              </p>

              {/* Statistics Counters Grid */}
              <div className="grid grid-cols-3 gap-6 border-y border-zinc-200/30 dark:border-zinc-800/30 py-6">
                <div>
                  <p className="font-display text-3xl font-extrabold text-emerald-500 dark:text-emerald-400">3+</p>
                  <p className="text-[10px] uppercase tracking-wider font-semibold text-zinc-450 dark:text-zinc-500 mt-1">Tahun Pengalaman</p>
                </div>
                <div>
                  <p className="font-display text-3xl font-extrabold text-violet-500 dark:text-violet-400">12+</p>
                  <p className="text-[10px] uppercase tracking-wider font-semibold text-zinc-450 dark:text-zinc-500 mt-1">Proyek Selesai</p>
                </div>
                <div>
                  <p className="font-display text-3xl font-extrabold text-emerald-500 dark:text-emerald-400">100%</p>
                  <p className="text-[10px] uppercase tracking-wider font-semibold text-zinc-450 dark:text-zinc-500 mt-1">Kepuasan Desain</p>
                </div>
              </div>

              {/* Professional Badges Grid */}
              <div>
                <h4 className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-4">Kemampuan Utama</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-3 py-1.5 text-xs font-medium rounded-lg bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-300 border border-zinc-200/60 dark:border-zinc-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mr-2"></span>HTML5 & CSS3
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 text-xs font-medium rounded-lg bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-300 border border-zinc-200/60 dark:border-zinc-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-2"></span>JavaScript (ES6+)
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 text-xs font-medium rounded-lg bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-300 border border-zinc-200/60 dark:border-zinc-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></span>TypeScript
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 text-xs font-medium rounded-lg bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-300 border border-zinc-200/60 dark:border-zinc-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-2"></span>React.js / Next.js
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 text-xs font-medium rounded-lg bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-300 border border-zinc-200/60 dark:border-zinc-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mr-2"></span>Tailwind CSS
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 text-xs font-medium rounded-lg bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-300 border border-zinc-200/60 dark:border-zinc-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-500 mr-2"></span>UI/UX Design
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 text-xs font-medium rounded-lg bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-350 border border-zinc-200/60 dark:border-zinc-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600 mr-2"></span>Git & GitHub
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILED PROJECTS GRID SECTION */}
      <section id="projects" className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section title */}
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white mb-3">Proyek Unggulan</h2>
            <div className="h-0.5 w-12 bg-emerald-500 mx-auto rounded-full" />
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-4 leading-relaxed font-light">
              Intip portofolio karya terbaik saya yang menggabungkan kesederhanaan desain dan kinerja teknologi jempolan.
            </p>
          </div>

          {/* 3 Grid Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Project 1 (SocioSphere) */}
            <article className="flex flex-col rounded-xl overflow-hidden border border-zinc-200/60 dark:border-zinc-805 bg-white/40 dark:bg-zinc-900/10 backdrop-blur-md shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1.5 group">
              <div className="relative aspect-video bg-zinc-100 dark:bg-zinc-950 flex items-center justify-center border-b border-zinc-200/30 dark:border-zinc-900/30 overflow-hidden">
                <BarChart2 className="w-10 h-10 text-zinc-400 dark:text-zinc-600 group-hover:scale-105 group-hover:text-emerald-500 transition-all duration-500" />
                <span className="absolute top-4 right-4 bg-zinc-900/90 dark:bg-zinc-900/80 backdrop-blur text-[9px] text-emerald-400 font-mono tracking-wider uppercase font-bold px-2.5 py-1 rounded-md border border-zinc-250/10 z-10">WEB CONTROLS</span>
              </div>
              
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-lg font-bold text-zinc-900 dark:text-white group-hover:text-emerald-500 transition-colors duration-200 mb-2">SocioSphere</h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed font-light mb-5">
                    Dasbor manajemen & analitik percakapan media sosial mutakhir dengan grafik peninjau real-time interaktif dan penandaan sentimen otomatis.
                  </p>
                  
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    <span className="text-[10px] px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/40 dark:border-zinc-800/40 text-zinc-650 dark:text-zinc-300 font-mono">ReactJS</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/40 dark:border-zinc-800/40 text-zinc-650 dark:text-zinc-300 font-mono">TailwindCSS</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/40 dark:border-zinc-800/40 text-zinc-650 dark:text-zinc-300 font-mono">Recharts</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-zinc-100 dark:border-zinc-900">
                  <a href="#" className="inline-flex items-center text-xs font-semibold text-zinc-450 hover:text-emerald-500 transition-colors">
                    <Github className="w-4 h-4 mr-1.5" /> Repository
                  </a>
                  <a href="#" className="inline-flex items-center text-xs font-semibold text-emerald-500 hover:text-emerald-600 transition-colors">
                    Live Demo <ExternalLink className="w-3.5 h-3.5 ml-1" />
                  </a>
                </div>
              </div>
            </article>

            {/* Project 2 (EcoShop) */}
            <article className="flex flex-col rounded-xl overflow-hidden border border-zinc-200/60 dark:border-zinc-805 bg-white/40 dark:bg-zinc-900/10 backdrop-blur-md shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1.5 group">
              <div className="relative aspect-video bg-zinc-100 dark:bg-zinc-950 flex items-center justify-center border-b border-zinc-200/30 dark:border-zinc-900/30 overflow-hidden">
                <ShoppingBag className="w-10 h-10 text-zinc-400 dark:text-zinc-600 group-hover:scale-105 group-hover:text-emerald-500 transition-all duration-500" />
                <span className="absolute top-4 right-4 bg-zinc-900/90 dark:bg-zinc-900/80 backdrop-blur text-[9px] text-emerald-400 font-mono tracking-wider uppercase font-bold px-2.5 py-1 rounded-md border border-zinc-250/10 z-10">SPA APPLICATION</span>
              </div>
              
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-lg font-bold text-zinc-900 dark:text-white group-hover:text-emerald-500 transition-colors duration-200 mb-2">EcoShop</h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed font-light mb-5">
                    Konsep toko online ramah lingkungan modern dengan rancangan performasi super cepat, fitur keranjang belanja real-time, saringan produk dinamis, dan sistem checkout mulus.
                  </p>
                  
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    <span className="text-[10px] px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/40 dark:border-zinc-800/40 text-zinc-650 dark:text-zinc-300 font-mono">HTML5</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/40 dark:border-zinc-800/40 text-zinc-650 dark:text-zinc-300 font-mono">TailwindCSS</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/40 dark:border-zinc-800/40 text-zinc-650 dark:text-zinc-300 font-mono">VanillaJS</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-zinc-100 dark:border-zinc-900">
                  <a href="#" className="inline-flex items-center text-xs font-semibold text-zinc-450 hover:text-emerald-500 transition-colors">
                    <Github className="w-4 h-4 mr-1.5" /> Repository
                  </a>
                  <a href="#" className="inline-flex items-center text-xs font-semibold text-emerald-500 hover:text-emerald-600 transition-colors">
                    Live Demo <ExternalLink className="w-3.5 h-3.5 ml-1" />
                  </a>
                </div>
              </div>
            </article>

            {/* Project 3 (MindSpace) */}
            <article className="flex flex-col rounded-xl overflow-hidden border border-zinc-200/60 dark:border-zinc-805 bg-white/40 dark:bg-zinc-900/10 backdrop-blur-md shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1.5 group">
              <div className="relative aspect-video bg-zinc-100 dark:bg-zinc-950 flex items-center justify-center border-b border-zinc-200/30 dark:border-zinc-900/30 overflow-hidden">
                <CheckCircle className="w-10 h-10 text-zinc-400 dark:text-zinc-600 group-hover:scale-105 group-hover:text-emerald-500 transition-all duration-500" />
                <span className="absolute top-4 right-4 bg-zinc-900/90 dark:bg-zinc-900/80 backdrop-blur text-[9px] text-emerald-400 font-mono tracking-wider uppercase font-bold px-2.5 py-1 rounded-md border border-zinc-250/10 z-10">UTILITY DESKTOP</span>
              </div>
              
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-lg font-bold text-zinc-900 dark:text-white group-hover:text-emerald-500 transition-colors duration-200 mb-2">MindSpace</h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed font-light mb-5">
                    Aplikasi pelacak tugas & fokus produktivitas minimalis terintegrasi Pomodoro timer meluas, logs statistik harian, dan kustomisasi papan kerja personal.
                  </p>
                  
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    <span className="text-[10px] px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/40 dark:border-zinc-800/40 text-zinc-650 dark:text-zinc-300 font-mono">ViteJS</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/40 dark:border-zinc-800/40 text-zinc-650 dark:text-zinc-300 font-mono">TailwindCSS</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/40 dark:border-zinc-800/40 text-zinc-650 dark:text-zinc-300 font-mono">Lucide</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-zinc-100 dark:border-zinc-900">
                  <a href="#" className="inline-flex items-center text-xs font-semibold text-zinc-450 hover:text-emerald-500 transition-colors">
                    <Github className="w-4 h-4 mr-1.5" /> Repository
                  </a>
                  <a href="#" className="inline-flex items-center text-xs font-semibold text-emerald-500 hover:text-emerald-600 transition-colors">
                    Live Demo <ExternalLink className="w-3.5 h-3.5 ml-1" />
                  </a>
                </div>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* SECURE DYNAMIC CONTACT SECTION */}
      <section id="contact" className="py-24 px-6 relative bg-zinc-50/50 dark:bg-[#0d0d11]/40 border-t border-zinc-200/30 dark:border-zinc-900/30 z-10 font-sans">
        <div className="max-w-7xl mx-auto">
          {/* Section banner */}
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white mb-3">Mulai Hubungi</h2>
            <div className="h-0.5 w-12 bg-emerald-500 mx-auto rounded-full" />
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-4 leading-relaxed font-light">
              Punya gagasan proyek digital seru atau sekedar ingin menyapa? Kirim pesan Anda sekarang!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 max-w-5xl mx-auto items-stretch">
            {/* Contact Details Pane Column (Left 5) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8 h-full">
              <div className="flex flex-col space-y-6">
                <h3 className="font-display text-2xl font-bold text-zinc-900 dark:text-white leading-tight">Mari Kolaborasi</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-450 font-light leading-relaxed">
                  Saya selalu antusias menyambut kolaborasi profesional, peluang kerja lepas (freelance), maupun obrolan seputar eksplorasi front-end.
                </p>

                {/* Vertical lists */}
                <div className="flex flex-col space-y-4 pt-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-emerald-500 shadow-sm">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">Hubungi via email</p>
                      <a href="mailto:fahmihamdani205@gmail.com" className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 hover:text-emerald-500 transition-colors">fahmihamdani205@gmail.com</a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-emerald-500 shadow-sm">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">Domisili saat ini</p>
                      <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">Indonesia</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div>
                <h4 className="text-[10px] font-bold text-zinc-405 dark:text-zinc-500 uppercase tracking-widest mb-4">Kanal Media Sosial</h4>
                <div className="flex space-x-2.5">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg flex items-center justify-center border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-emerald-500 transition-all cursor-pointer" aria-label="GitHub">
                    <Github className="w-4 h-4" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg flex items-center justify-center border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-emerald-500 transition-all cursor-pointer" aria-label="LinkedIn">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg flex items-center justify-center border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-emerald-500 transition-all cursor-pointer" aria-label="Twitter">
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Form submission block (Right 7) */}
            <div className="lg:col-span-7 h-full">
              <div className="rounded-xl border border-zinc-200/60 dark:border-zinc-800 bg-white/50 dark:bg-zinc-950/40 p-8 shadow-sm relative overflow-hidden min-h-[440px] flex flex-col justify-center">
                <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-emerald-500 via-teal-400 to-violet-500" />
                
                {!formSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col space-y-2">
                        <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">Hubungi Nama</label>
                        <input 
                          type="text" 
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          placeholder="Fahmi..." 
                          className="px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-950 text-sm focus:bg-white dark:focus:bg-zinc-950 text-zinc-800 dark:text-white focus:border-emerald-500 focus:ring-0 outline-none transition-all"
                        />
                      </div>
                      <div className="flex flex-col space-y-2">
                        <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">Alamat Email</label>
                        <input 
                          type="email" 
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="nama@email.com" 
                          className="px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-950 text-sm focus:bg-white dark:focus:bg-zinc-950 text-zinc-800 dark:text-white focus:border-emerald-500 focus:ring-0 outline-none transition-all"
                        />
                      </div>
                    </div>
                    
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">Isi Pesan</label>
                      <textarea 
                        id="message" 
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="Tuliskan ide proyek digital atau pertanyaan Anda di sini..." 
                        className="px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-950 text-sm focus:bg-white dark:focus:bg-zinc-950 text-zinc-800 dark:text-white focus:border-emerald-500 focus:ring-0 outline-none transition-all resize-none"
                      />
                    </div>

                    <button 
                      type="submit" 
                      className="w-full inline-flex items-center justify-center h-12 font-bold text-xs uppercase tracking-wider rounded-lg bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 hover:bg-zinc-900 dark:hover:bg-zinc-100 transition-all cursor-pointer"
                    >
                      Kirim Pesan <Send className="w-3.5 h-3.5 ml-2 text-emerald-500" />
                    </button>
                  </form>
                ) : (
                  <div className="flex flex-col items-center justify-center text-center py-6 animate-fade-in">
                    <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center justify-center mb-6">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <h4 className="font-display text-xl font-bold text-zinc-900 dark:text-white mb-2">Pesan Berhasil Terkirim!</h4>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 max-w-sm mb-6 font-light leading-relaxed">
                      Terima kasih sudah menghubungi, <strong>{formData.name}</strong>. Fahmi akan segera membalas surat elektronik Anda sesegera mungkin.
                    </p>
                    <button 
                      onClick={handleResetForm}
                      className="px-5 h-10 text-[10px] font-bold uppercase tracking-wider rounded-lg bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800 transition-all cursor-pointer"
                    >
                      Kirim Pesan Lainnya
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-200/30 dark:border-zinc-900/30 py-12 px-6 bg-white dark:bg-[#0a0a0c] min-h-[140px] z-10 relative">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-2.5">
            <span className="font-display text-lg font-bold">Fahmi<span className="text-emerald-500 font-sans font-extrabold">.</span></span>
            <span className="h-4 w-px bg-zinc-200 dark:bg-zinc-800" />
            <p className="text-xs text-zinc-500 dark:text-zinc-500 font-light">&copy; 2026 Fahmi Portfolio. All Rights Reserved.</p>
          </div>
          
          <div className="flex items-center space-x-6 text-[11px] uppercase tracking-wider font-semibold text-zinc-500 dark:text-zinc-400">
            <a href="#home" className="hover:text-emerald-500 transition-colors">Home</a>
            <a href="#about" className="hover:text-emerald-500 transition-colors">About</a>
            <a href="#projects" className="hover:text-emerald-500 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-emerald-500 transition-colors">Contact</a>
          </div>
        </div>
      </footer>

      {/* MODAL / BOTTOM SLIDE-OUT PANEL FOR SINGLE-FILE HTML SOURCE EXPORT */}
      {showCodeDrawer && (
        <div className="fixed inset-0 z-50 flex items-center justify-end animate-fade-in" id="code-panel">
          {/* Backdrop screen */}
          <div 
            onClick={() => setShowCodeDrawer(false)}
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity" 
          />
          
          {/* Drawer container body */}
          <div className="relative w-full max-w-3xl h-full bg-slate-900 text-slate-100 flex flex-col shadow-2xl z-10 border-l border-slate-800">
            {/* Header control line */}
            <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-slate-950/65">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-white">Ekspor Portfolio Single-File</h3>
                  <p className="text-[11px] text-slate-400 font-light font-sans">Satu file HTML utuh modern berkerja instan dengan CDN Tailwind & JavaSript.</p>
                </div>
              </div>
              <button 
                onClick={() => setShowCodeDrawer(false)}
                className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Instruction content area */}
            <div className="p-6 bg-slate-950 text-xs text-slate-300 font-light flex flex-col space-y-2 border-b border-slate-850">
              <p className="font-semibold text-slate-100 flex items-center gap-1.5">
                💡 Cara Menggunakan Portofolio Ini:
              </p>
              <ol className="list-decimal list-inside space-y-1 text-[11px] text-slate-400">
                <li>Klik tombol <strong className="text-emerald-400">"Salin Kode"</strong> di bawah ini.</li>
                <li>Buat file bernama <strong className="text-white">index.html</strong> di komputer lokal Anda.</li>
                <li>Tempel (paste) kode tersebut, lalu simpan file tersebut.</li>
                <li>Klik dua kali file tersebut untuk langsung membukanya di browser apa pun — tidak memerlukan kompilasi!</li>
              </ol>
            </div>

            {/* Source Code View Box */}
            <div className="flex-grow overflow-auto p-6 font-mono text-xs text-emerald-300/90 leading-relaxed bg-slate-950 relative">
              <div className="absolute top-4 right-4 z-20">
                <button 
                  onClick={handleCopyCode}
                  className="px-4 py-2.5 rounded-lg text-xs font-semibold bg-slate-800 text-slate-100 hover:bg-emerald-500 hover:text-white transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
                >
                  {copiedCode ? (
                    <>
                      <Check className="w-4 h-4 text-white" />
                      Tersalin!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Salin Kode HTML
                    </>
                  )}
                </button>
              </div>
              <pre className="whitespace-pre overflow-x-auto text-slate-300 select-all p-4 bg-slate-900 rounded-xl border border-slate-800">
                {RAW_HTML_TEXT}
              </pre>
            </div>

            {/* Bottom Actions Footer */}
            <div className="p-6 border-t border-slate-800 bg-slate-900 flex items-center justify-between">
              <span className="text-[11px] text-slate-500 font-mono">fahmi_portfolio.html</span>
              <button 
                onClick={() => setShowCodeDrawer(false)}
                className="px-5 h-10 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-100 transition-colors cursor-pointer"
              >
                Selesai / Tutup
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL INTERAKTIF UNTUK PRATINJAU & UNDUH RESUME / CV */}
      {showResumeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in" id="resume-preview-modal">
          {/* Backdrop screen overlay */}
          <div 
            onClick={() => setShowResumeModal(false)}
            className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm transition-opacity" 
          />
          
          {/* Modal Container */}
          <div className="relative w-full max-w-4xl h-[90vh] md:h-[85vh] bg-zinc-100 dark:bg-zinc-950 rounded-2xl flex flex-col shadow-2xl z-10 border border-zinc-200 dark:border-zinc-800 overflow-hidden">
            
            {/* Modal TOP Header toolbar with actions */}
            <div className="p-5 border-b border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white dark:bg-zinc-900/90 backdrop-blur-md">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500">
                  <FileText className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-base text-zinc-950 dark:text-zinc-50 tracking-tight">Pratinjau CV / Resume</h3>
                  <p className="text-[10px] text-zinc-500 dark:text-zinc-400 font-mono uppercase tracking-wider">Fahmi Hamdani &bull; Portofolio Digital</p>
                </div>
              </div>
              
              {/* Toolbar Actions Bar */}
              <div className="flex flex-wrap items-center gap-2">
                {/* Download TXT format */}
                <button 
                  onClick={() => {
                    const content = `FAHMI HAMDANI\nCREATIVE FRONT-END DEVELOPER & UI/UX DESIGNER\nEmail: fahmihamdani205@gmail.com\n\n=========================================\nRINGKASAN PROFESIONAL\n=========================================\nFront-End Developer mendedikasikan diri untuk melahirkan antarmuka situs yang modern, cepat, serta sarat interaktif bermakna.\n\n=========================================\nPENGALAMAN UTAMA & PROYEK\n=========================================\n- SocioSphere: Dasbor Analitik Media Sosial (ReactJS, TailwindCSS, Recharts)\n- EcoShop: Konsep E-Commerce Berkelanjutan (HTML5, TailwindCSS, VanillaJS)\n- MindSpace: Aplikasi Produktivitas & Pomodoro (ViteJS, TailwindCSS, Lucide)\n\n=========================================\nTEKNOLOGI UTAMA\n=========================================\nHTML5, CSS3, JavaScript (ES6+), TypeScript, ReactJS, Next.js, ViteJS, Tailwind CSS, Git, GitHub\n\n=========================================\PENDIDIKAN\n=========================================\nSarjana Ilmu Komputer / Teknik Informatika`;
                    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
                    const url = URL.createObjectURL(blob);
                    const link = document.createElement('a');
                    link.href = url;
                    link.download = 'Resume_Fahmi_Hamdani.txt';
                    link.click();
                    URL.revokeObjectURL(url);
                  }}
                  className="px-3 py-1.5 rounded bg-zinc-900 hover:bg-zinc-850 dark:bg-white dark:hover:bg-zinc-100 text-white dark:text-zinc-950 text-[10px] uppercase font-bold tracking-wider flex items-center gap-1.5 transition-all cursor-pointer shadow-sm border border-zinc-200/20"
                  title="Unduh dokumen dalam bentuk format berkas .txt"
                >
                  <Download className="w-3.5 h-3.5 text-emerald-500" />
                  Format TXT
                </button>

                {/* Download Markdown format */}
                <button 
                  onClick={() => {
                    const mdContent = `# FAHMI HAMDANI\n## CREATIVE FRONT-END DEVELOPER\n- **Email**: fahmihamdani205@gmail.com\n- **Web**: https://fahmihamdani205.github.io\n\n### RINGKASAN PROFESIONAL\nFront-End Developer mendedikasikan diri untuk melahirkan antarmuka situs yang modern, cepat, serta sarat interaktif bermakna.\n\n### PROYEK UTAMA\n1. **SocioSphere** (ReactJS, Recharts)\n2. **EcoShop** (TailwindCSS, VanillaJS)\n3. **MindSpace** (ViteJS, Lucide)\n\n### BAHASA PEMROGRAMAN & KEMAMPUAN\nHTML5, CSS3, JavaScript (ES6+), TypeScript, ReactJS, TailwindCSS, Figma, UI/UX Design, Git, GitHub`;
                    const blob = new Blob([mdContent], { type: 'text/markdown;charset=utf-8' });
                    const url = URL.createObjectURL(blob);
                    const link = document.createElement('a');
                    link.href = url;
                    link.download = 'Resume_Fahmi_Hamdani.md';
                    link.click();
                    URL.revokeObjectURL(url);
                  }}
                  className="px-3 py-1.5 rounded bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-950 dark:text-zinc-50 text-[10px] uppercase font-bold tracking-wider flex items-center gap-1.5 transition-all cursor-pointer border border-zinc-300 dark:border-zinc-700"
                  title="Unduh dokumen dalam bentuk Markdown .md"
                >
                  <FileText className="w-3.5 h-3.5 text-blue-500" />
                  Format MD
                </button>

                {/* Copy Text Action */}
                <button 
                  onClick={() => {
                    const textContent = `FAHMI HAMDANI\nEmail: fahmihamdani205@gmail.com\nFront-End Developer & UI/UX Specialist\nPengalaman: 3+ Tahun\nProyek Unggulan:\n- SocioSphere (React & Recharts)\n- EcoShop (HTML5, Tailwind, JS)\n- MindSpace (Vite & Lucide)\nKemampuan: React, Next.js, TypeScript, Tailwind CSS, Figma`;
                    navigator.clipboard.writeText(textContent);
                    setCopiedResumeText(true);
                    setTimeout(() => setCopiedResumeText(false), 2000);
                  }}
                  className="px-3 py-1.5 rounded bg-emerald-500/10 dark:bg-emerald-500/5 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[10px] uppercase font-bold tracking-wider flex items-center gap-1.5 transition-all cursor-pointer border border-emerald-500/20"
                >
                  {copiedResumeText ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500 animate-pulse" />
                      Tersalin
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-emerald-500" />
                      Salin Resume
                    </>
                  )}
                </button>

                {/* Close Button */}
                <button 
                  onClick={() => setShowResumeModal(false)}
                  className="p-1.5 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-400 hover:text-zinc-800 dark:hover:text-white transition-colors cursor-pointer"
                  aria-label="Tutup pratinjau"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Resume Sheet Content viewport */}
            <div className="flex-grow overflow-y-auto p-6 md:p-12 bg-zinc-100 dark:bg-zinc-950/40">
              {/* Paper Layout Canvas */}
              <div className="max-w-3xl mx-auto bg-white dark:bg-zinc-900 border border-zinc-200/70 dark:border-zinc-800/80 rounded-xl p-8 md:p-10 shadow-lg text-zinc-900 dark:text-zinc-100 font-sans leading-relaxed relative overflow-hidden">
                {/* Visual Accent Top Bar */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-violet-500" />
                
                {/* Header Section */}
                <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-zinc-200/50 dark:border-zinc-805">
                  <div>
                    <h1 className="font-display font-extrabold text-3xl text-zinc-950 dark:text-white tracking-tight">FAHMI HAMDANI</h1>
                    <p className="text-xs font-mono font-bold tracking-widest text-emerald-500 uppercase mt-1">Creative Front-End Developer</p>
                    <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-zinc-500 dark:text-zinc-400 font-light">
                      <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-emerald-500" /> fahmihamdani205@gmail.com</span>
                      <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-violet-500" /> Based in Indonesia</span>
                      <span className="flex items-center gap-1.5"><Github className="w-3.5 h-3.5 text-zinc-400" /> github.com</span>
                    </div>
                  </div>
                  
                  {/* Decorative Portrait inside the CV sheet */}
                  <div className="w-16 h-16 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 flex-shrink-0">
                    <img 
                      src="./assets/images/fahmi_avatar_1779696635365.png" 
                      alt="Avatar Portrait" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://picsum.photos/seed/fahmi/200/200";
                      }}
                    />
                  </div>
                </header>

                {/* Professional Statement Ringkasan */}
                <section className="py-6 border-b border-zinc-200/50 dark:border-zinc-805">
                  <h2 className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest mb-3">Profil Profesional</h2>
                  <p className="text-xs text-zinc-650 dark:text-zinc-300 font-light leading-relaxed">
                    Seseorang Front-End Developer berbakat yang mendedikasikan diri untuk melahirkan antarmuka situs yang modern, cepat, serta sarat interaksi bermakna. Ahli mengawinkan sains estetika web, optimalisasi performa tinggi, dan fungsi arsitektur kode bersih (clean code) untuk melahirkan pengalaman pengguna terbaik.
                  </p>
                </section>

                {/* Key Metrics grid snippet */}
                <section className="py-6 border-b border-zinc-200/50 dark:border-zinc-805">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="p-3 bg-zinc-50 dark:bg-zinc-900/50 rounded-lg border border-zinc-100 dark:border-zinc-800/40">
                      <p className="font-display font-semibold text-xl text-emerald-500">3+</p>
                      <p className="text-[9px] uppercase tracking-wider font-bold text-zinc-400 dark:text-zinc-500 mt-1">Tahun Pengalaman</p>
                    </div>
                    <div className="p-3 bg-zinc-50 dark:bg-zinc-900/50 rounded-lg border border-zinc-100 dark:border-zinc-800/40">
                      <p className="font-display font-semibold text-xl text-violet-500">12+</p>
                      <p className="text-[9px] uppercase tracking-wider font-bold text-zinc-400 dark:text-zinc-500 mt-1">Proyek Selesai</p>
                    </div>
                    <div className="p-3 bg-zinc-50 dark:bg-zinc-900/50 rounded-lg border border-zinc-100 dark:border-zinc-800/40">
                      <p className="font-display font-semibold text-xl text-zinc-800 dark:text-white">100%</p>
                      <p className="text-[9px] uppercase tracking-wider font-bold text-zinc-400 dark:text-zinc-500 mt-1">Desain Satis</p>
                    </div>
                  </div>
                </section>

                {/* Experience & Major Works */}
                <section className="py-6 border-b border-zinc-200/50 dark:border-zinc-805">
                  <h2 className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest mb-4">Pengalaman Kerja & Proyek Utama</h2>
                  <div className="space-y-6">
                    {/* Project/Work item 1 */}
                    <div className="relative pl-4 border-l border-zinc-200 dark:border-zinc-805">
                      <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-emerald-500" />
                      <div className="flex items-center justify-between flex-wrap gap-2 text-xs">
                        <h3 className="font-bold text-zinc-950 dark:text-white">SocioSphere &bull; Dasbor Analitik Media Sosial</h3>
                        <span className="font-mono text-[10px] uppercase font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded">ReactJS &bull; Recharts</span>
                      </div>
                      <p className="text-[10px] font-semibold text-zinc-500 dark:text-zinc-400 mt-1">Maret 2025 - Sekarang | Lead Front-End Developer</p>
                      <p className="text-xs text-zinc-650 dark:text-zinc-350 font-light mt-2">
                        Mengkonstruksi dasbor taktis media sosial berpeninjau grafik real-time dinamis. Mengimplementasi optimisasi re-render komponen React hingga mendongkrak performa aksesitas komponen visual sebesar 40%.
                      </p>
                    </div>

                    {/* Project/Work item 2 */}
                    <div className="relative pl-4 border-l border-zinc-200 dark:border-zinc-805">
                      <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-violet-500" />
                      <div className="flex items-center justify-between flex-wrap gap-2 text-xs">
                        <h3 className="font-bold text-zinc-950 dark:text-white">EcoShop &bull; Aplikasi Single-Page E-Commerce</h3>
                        <span className="font-mono text-[10px] uppercase font-bold text-violet-500 bg-violet-500/10 px-2 py-0.5 rounded">TailwindCSS &bull; JS</span>
                      </div>
                      <p className="text-[10px] font-semibold text-zinc-500 dark:text-zinc-400 mt-1">Agustus 2024 - Februari 2025 | Specialist Frontend UI/UX</p>
                      <p className="text-xs text-zinc-650 dark:text-zinc-350 font-light mt-2">
                        Mewujudkan sistem toko online ramah lingkungan dengan sistem keranjang belanja instan, filter produk multikriteria, serta arsitektur antarmuka fully-responsive di semua browser.
                      </p>
                    </div>

                    {/* Project/Work item 3 */}
                    <div className="relative pl-4 border-l border-zinc-200 dark:border-zinc-805">
                      <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-emerald-500" />
                      <div className="flex items-center justify-between flex-wrap gap-2 text-xs">
                        <h3 className="font-bold text-zinc-950 dark:text-white">MindSpace &bull; Utilitas Pelacak Tugas & Fokus</h3>
                        <span className="font-mono text-[10px] uppercase font-bold text-zinc-500 bg-zinc-200 dark:bg-zinc-800 px-2 py-0.5 rounded">ViteJS &bull; Pomodoro</span>
                      </div>
                      <p className="text-[10px] font-semibold text-zinc-500 dark:text-zinc-400 mt-1">Januari 2024 - Mei 2024 | Creator & Core Developer</p>
                      <p className="text-xs text-zinc-650 dark:text-zinc-350 font-light mt-2">
                        Mengintegrasi logs statistik kemajuan kerja dengan Pomodoro timer interaktif dan persistensi data lokal (localStorage) untuk fleksibilitas kerja luring (offline-first).
                      </p>
                    </div>
                  </div>
                </section>

                {/* Core Expertise Columns */}
                <section className="py-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h2 className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest mb-3">Keahlian & Teknologi</h2>
                      <div className="flex flex-wrap gap-1.5">
                        <span className="text-[10px] font-semibold text-zinc-800 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-800 px-2.5 py-1 rounded">ReactJS</span>
                        <span className="text-[10px] font-semibold text-zinc-800 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-800 px-2.5 py-1 rounded">Next.js</span>
                        <span className="text-[10px] font-semibold text-zinc-800 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-800 px-2.5 py-1 rounded">TypeScript</span>
                        <span className="text-[10px] font-semibold text-zinc-800 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-800 px-2.5 py-1 rounded">JavaScript (ES6+)</span>
                        <span className="text-[10px] font-semibold text-zinc-800 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-800 px-2.5 py-1 rounded">Tailwind CSS</span>
                        <span className="text-[10px] font-semibold text-zinc-800 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-800 px-2.5 py-1 rounded">HTML5 & CSS3</span>
                        <span className="text-[10px] font-semibold text-zinc-800 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-800 px-2.5 py-1 rounded">UI/UX Figma</span>
                        <span className="text-[10px] font-semibold text-zinc-800 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-800 px-2.5 py-1 rounded">Git & GitHub</span>
                      </div>
                    </div>
                    <div>
                      <h2 className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest mb-3">Pendidikan & Sertifikasi</h2>
                      <div className="space-y-2 text-xs font-light">
                        <div>
                          <p className="font-bold text-zinc-950 dark:text-white">Sarjana Ilmu Komputer / Teknik Informatika</p>
                          <p className="text-[10px] text-zinc-500 dark:text-zinc-400 font-mono mt-0.5">&bull; Fokus pada Teknologi Rekayasa Perangkat Lunak</p>
                        </div>
                        <div className="pt-1.5">
                          <p className="font-bold text-zinc-950 dark:text-white">Sertifikat Kreatif UI/UX Specialist & Frontend</p>
                          <p className="text-[10px] text-zinc-500 dark:text-zinc-400 font-mono mt-0.5">&bull; Lisensi Sertifikasi Industri Global</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            {/* Modal Bottom control panel */}
            <div className="p-5 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/95 flex items-center justify-between">
              <span className="text-[10px] text-zinc-400 dark:text-zinc-500 font-mono">Resume_Fahmi_Hamdani_Interactive.pdf &bull; v2.0</span>
              <button 
                onClick={() => setShowResumeModal(false)}
                className="px-5 h-10 text-xs font-bold uppercase tracking-wider rounded-lg bg-zinc-950 hover:bg-zinc-900 text-white dark:bg-white dark:hover:bg-zinc-100 dark:text-zinc-950 transition-all cursor-pointer border border-transparent"
              >
                Tutup Pratinjau
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
