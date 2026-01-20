"use client";
import { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Code,
  Database,
  Palette,
  Coffee,
  ArrowRight,
  Moon,
  Sun,
  Share2,
  Check,
  MapPin,
  Clock,
  MessageCircle,
  Info,
  X,
  Zap,
  Box,
  Construction,
  Terminal,
} from "lucide-react";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [copied, setCopied] = useState(false);
  const [time, setTime] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAvatarExpanded, setIsAvatarExpanded] = useState(false);

  // Data for the profile
  const profile = {
    name: "Shan Surat",
    bio: "Architecting scalable web solutions and crafting beautiful user interfaces. Bridging the gap between engineering and design.",
    avatarSmall: "shansurat-2-210.webp",
    avatarBig: "shansurat-2-376.webp",
    location: "Metro Manila, Philippines 🇵🇭",
  };

  // Tech stack used for this specific website
  const techStack = [
    { name: "Next.js", icon: <Zap size={14} />, color: "text-white bg-black" },
    {
      name: "React",
      icon: <Code size={14} />,
      color: "text-blue-500 bg-blue-50",
    },
    {
      name: "Tailwind CSS",
      icon: <Palette size={14} />,
      color: "text-cyan-500 bg-cyan-50",
    },
    {
      name: "Lucide Icons",
      icon: <Box size={14} />,
      color: "text-orange-500 bg-orange-50",
    },
  ];

  // JSON-LD Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    image: profile.avatarBig,
    jobTitle: ["Full Stack Developer", "Graphic Designer"],
    url: typeof window !== "undefined" ? window.location.href : "",
    sameAs: [
      "https://www.freelancer.com/u/ksurat",
      "https://github.com/shansurat",
      "https://linkedin.com/in/shansurat",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Marikina",
      addressCountry: "Philippines",
    },
    description: profile.bio,
  };

  // Update time for Philippines
  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Manila",
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });

    const updateTime = () => setTime(formatter.format(new Date()));

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Copy URL handler
  const handleShare = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  // Links configuration
  const links = [
    {
      id: 1,
      title: "Freelancer Portfolio",
      url: "https://www.freelancer.com/u/ksurat",
      icon: (
        <svg
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          width="20"
          height="20"
          aria-hidden="true"
        >
          <title>Freelancer</title>
          <path d="m14.096 3.076 1.634 2.292L24 3.076M5.503 20.924l4.474-4.374-2.692-2.89m6.133-10.584L11.027 5.23l4.022.15M4.124 3.077l.857 1.76 4.734.294m-3.058 7.072 3.497-6.522L0 5.13m7.064 7.485 3.303 3.548 3.643-3.57 1.13-6.652-4.439-.228Z" />
        </svg>
      ),
      subtitle: "Projects & 5-star reviews",
      featured: true,
      colSpan: "col-span-2",
      rel: "noopener noreferrer me",
      itemProp: "url",
    },
    {
      id: 2,
      title: "GitHub",
      url: "https://github.com/shansurat",
      icon: <Github size={20} />,
      subtitle: "@shansurat",
      featured: false,
      colSpan: "col-span-1",
      rel: "noopener noreferrer me",
      itemProp: "sameAs",
    },
    {
      id: 3,
      title: "LinkedIn",
      url: "https://linkedin.com/in/shansurat",
      icon: <Linkedin size={20} />,
      subtitle: "Let's connect",
      featured: false,
      colSpan: "col-span-1",
      rel: "noopener noreferrer me",
      itemProp: "sameAs",
    },
    {
      id: 4,
      title: "Email",
      url: "mailto:kristianmarksurat@gmail.com",
      icon: <Mail size={20} />,
      subtitle: "Message me",
      featured: false,
      colSpan: "col-span-1",
      rel: "noopener noreferrer",
      itemProp: "email",
    },
    {
      id: 6,
      title: "WhatsApp",
      url: "https://wa.me/639696323813",
      icon: <MessageCircle size={20} />,
      subtitle: "Let's chat",
      featured: false,
      colSpan: "col-span-1",
      rel: "noopener noreferrer",
      itemProp: "telephone",
    },
    {
      id: 5,
      title: "Buy me a Matcha Drink",
      url: "https://paypal.me/kristianmarksurat",
      icon: <Coffee size={20} />,
      subtitle: "Fuel my coding sessions 🍵",
      featured: false,
      colSpan: "col-span-2",
      rel: "noopener noreferrer",
    },
  ];

  const bgGradient = isDarkMode ? "bg-slate-900" : "bg-slate-50";

  const cardBg = isDarkMode
    ? "bg-slate-800/50 hover:bg-slate-800 border-slate-700"
    : "bg-white hover:bg-slate-50 border-slate-200";

  const textColor = isDarkMode ? "text-slate-100" : "text-slate-900";
  const subTextColor = isDarkMode ? "text-slate-400" : "text-slate-500";

  // Common Header Button Styles
  const headerBtnClass = `cursor-pointer p-3 rounded-full transition-all duration-200 relative group border backdrop-blur-sm ${
    isDarkMode
      ? "bg-slate-800/80 hover:bg-slate-700 border-transparent"
      : "bg-white/80 hover:bg-slate-100 shadow-sm border-transparent"
  }`;

  return (
    <div
      className={`min-h-screen w-full transition-colors duration-300 ${bgGradient} ${textColor} font-sans flex flex-col items-center py-12 px-4 md:py-24 md:px-6 relative overflow-hidden`}
    >
      {/* PERFORMANCE OPTIMIZATION: Preconnects */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />

      {/* Inject JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      ></script>

      {/* Top Gradient Overlay for depth */}
      <div
        className={`absolute top-0 left-0 w-full h-96 pointer-events-none transition-all duration-700
        ${
          isDarkMode
            ? "opacity-50 bg-[radial-gradient(ellipse_at_top,var(--color-indigo-500),var(--color-slate-900),transparent)]"
            : "opacity-40 bg-[radial-gradient(ellipse_at_top,var(--color-blue-400),var(--color-slate-100),transparent)]"
        }`}
      />

      {/* Central Spotlight Gradient Light */}
      <div
        className={`absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] -translate-y-1/2 rounded-full blur-[100px] pointer-events-none transition-colors duration-700
        ${isDarkMode ? "bg-indigo-600/40" : "bg-blue-400/40"}`}
      />

      {/* Main Container */}
      <main
        className="w-full max-w-md z-10 flex flex-col items-center gap-8 md:gap-12"
        itemScope
        itemType="https://schema.org/Person"
      >
        {/* Header Controls */}
        <header className="w-full flex justify-between items-center px-2 mb-2 md:mb-4 animate-fade-in-down">
          <button
            onClick={toggleTheme}
            className={headerBtnClass}
            aria-label="Toggle Theme"
          >
            <div
              className={`relative z-10 ${
                isDarkMode ? "text-yellow-400" : "text-slate-600"
              }`}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </div>
          </button>

          <div className="flex items-center gap-3">
            {/* Info/About Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className={headerBtnClass}
              aria-label="About this site"
            >
              <div
                className={`relative z-10 ${
                  isDarkMode ? "text-slate-300" : "text-slate-600"
                }`}
              >
                <Info size={20} />
              </div>
            </button>

            {/* Share Button */}
            <button
              onClick={handleShare}
              className={`${headerBtnClass} flex items-center gap-2`}
              aria-label="Share Profile"
            >
              <div
                className={`relative z-10 ${
                  isDarkMode ? "text-slate-300" : "text-slate-600"
                }`}
              >
                {copied ? (
                  <Check size={20} className="text-green-500" />
                ) : (
                  <Share2 size={20} />
                )}
              </div>
            </button>
          </div>
        </header>

        {/* Profile Section */}
        <div className="flex flex-col items-center text-center gap-8 animate-fade-in-down delay-100">
          <div className="relative group">
            <button
              onClick={() => setIsAvatarExpanded(true)}
              className={`w-32 h-32 rounded-full flex items-center justify-center border-4 shadow-xl transition-transform duration-300 group-hover:scale-105 overflow-hidden cursor-zoom-in
                ${
                  isDarkMode
                    ? "border-slate-800 bg-slate-800"
                    : "border-white bg-white"
                }`}
              aria-label="Enlarge profile picture"
            >
              <img
                src={profile.avatarSmall}
                alt={profile.name}
                className="w-full h-full object-cover"
                itemProp="image"
              />
            </button>

            {/* Status Badge */}
            <div className="absolute bottom-2 right-2 w-6 h-6 pointer-events-none">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-subtle-ping"></span>
              <span
                className="relative inline-flex rounded-full h-6 w-6 bg-green-500 border-4 border-slate-900"
                title="Available for work"
              ></span>
            </div>
          </div>

          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight" itemProp="name">
              {profile.name}
            </h1>

            {/* Roles Pills Container */}
            <div className="flex flex-wrap justify-center gap-3">
              <div
                className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm
                ${
                  isDarkMode
                    ? "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"
                    : "bg-blue-50 text-blue-600 border border-blue-200"
                }`}
                itemProp="jobTitle"
              >
                <Code size={14} />
                <span className="opacity-50">+</span>
                <Database size={14} />
                <span>Full Stack Developer</span>
              </div>

              <div
                className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm
                ${
                  isDarkMode
                    ? "bg-purple-500/10 text-purple-400 border border-purple-500/20"
                    : "bg-purple-50 text-purple-600 border border-purple-200"
                }`}
                itemProp="jobTitle"
              >
                <Palette size={14} />
                <span>Graphic Designer</span>
              </div>
            </div>

            <p
              className={`max-w-xs text-base leading-relaxed ${subTextColor} mt-2 mx-auto`}
              itemProp="description"
            >
              {profile.bio}
            </p>

            <div
              className={`flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-sm font-medium ${subTextColor} mt-6`}
            >
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span itemProp="addressLocality">{profile.location}</span>
              </div>
              <div className="flex items-center w-40 gap-2">
                <Clock size={16} />
                {time} (PHST)
              </div>
            </div>
          </div>
        </div>

        {/* Links Section */}
        <nav className="w-full animate-fade-in-up delay-200">
          <ul className="grid grid-cols-2 gap-5">
            {links.map((link) => (
              <li key={link.id} className={link.colSpan}>
                <a
                  href={link.url}
                  target="_blank"
                  rel={link.rel}
                  itemProp={link.itemProp}
                  title={link.title}
                  className={`cursor-pointer block relative h-full group transition-transform duration-200 hover:-translate-y-1`}
                >
                  {/* Inner Card Body with Clipping */}
                  <div
                    className={`relative h-full rounded-2xl overflow-hidden border backdrop-blur-sm transition-all duration-200 group-hover:shadow-xl ${cardBg} ${
                      link.featured
                        ? isDarkMode
                          ? "ring-2 ring-indigo-500/50"
                          : "ring-2 ring-blue-400/50"
                        : ""
                    }`}
                  >
                    <div className="relative z-10 flex items-center gap-4 p-5 h-full">
                      <div
                        className={`p-3.5 rounded-xl transition-colors shrink-0
                        ${
                          isDarkMode
                            ? "bg-slate-700 group-hover:bg-indigo-500/20 group-hover:text-indigo-400"
                            : "bg-slate-100 group-hover:bg-blue-100 group-hover:text-blue-600"
                        }
                      `}
                      >
                        {link.icon}
                      </div>

                      <div className="flex-1 min-w-0 text-left">
                        <h2 className="font-semibold text-sm sm:text-base">
                          {link.title}
                        </h2>
                        {link.subtitle && (
                          <p className={`text-xs ${subTextColor} mt-0.5`}>
                            {link.subtitle}
                          </p>
                        )}
                      </div>

                      {link.colSpan === "md:col-span-2" && (
                        <div
                          className={`hidden md:block opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 ${subTextColor}`}
                        >
                          <ArrowRight size={20} />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Featured Badge - Outside the card body, but inside the transform wrapper */}
                  {link.featured && (
                    <span className="absolute -top-2.5 -right-2 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full shadow-sm z-20">
                      Featured
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <footer
          className={`mt-8 md:mt-16 text-sm ${subTextColor} text-center animate-fade-in-up delay-300`}
        >
          <a
            href="mailto:kristianmarksurat@gmail.com?subject=Inquiry:%20Custom%20Link-in-Bio%20Page"
            className={`relative inline-block mb-6 text-xs font-bold tracking-widest uppercase hover:tracking-[0.2em] transition-all duration-300 cursor-pointer ${
              isDarkMode ? "text-indigo-300" : "text-blue-700"
            }`}
          >
            ✨ Want something like this page? Hit me up!
          </a>

          <p>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <a
            href="https://github.com/shansurat/link-in-bio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 mt-2 text-xs opacity-70 hover:opacity-100 transition-opacity hover:underline cursor-pointer relative px-1 rounded group"
          >
            <span className="relative z-10 flex items-center gap-1.5">
              <Github size={12} />
              View Source on My GitHub
            </span>
          </a>
        </footer>
      </main>

      {/* About Site / Tech Stack Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className={`relative w-full max-w-sm p-8 rounded-2xl shadow-2xl transform transition-all scale-100 ${
              isDarkMode
                ? "bg-slate-800 text-slate-100"
                : "bg-white text-slate-900"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-black/5 transition-colors"
            >
              <X size={20} className={subTextColor} />
            </button>

            <div className="flex flex-col gap-5">
              {/* Header */}
              <div className="flex items-center gap-3 pb-4 border-b border-slate-700/50">
                <div
                  className={`p-3 rounded-xl ${
                    isDarkMode
                      ? "bg-indigo-500/10 text-indigo-400"
                      : "bg-blue-100 text-blue-600"
                  }`}
                >
                  <Terminal size={24} />
                </div>
                <div>
                  <h2 className="text-xl font-bold">About This Page</h2>
                  <p className={`text-xs ${subTextColor}`}>Site Information</p>
                </div>
              </div>

              {/* Bio Content - Focused on the SITE */}
              <div
                className={`text-sm leading-relaxed space-y-4 ${subTextColor}`}
              >
                <p>
                  This single-page application is designed as a performant,
                  accessible hub for my digital presence. It uses a modern,
                  component-based architecture to ensure fast load times and a
                  seamless mobile experience.
                </p>

                {/* Construction Note */}
                <div
                  className={`p-3 rounded-lg text-xs border flex gap-3 items-start ${
                    isDarkMode
                      ? "bg-amber-500/5 border-amber-500/20 text-amber-200/80"
                      : "bg-amber-50 border-amber-200 text-amber-700"
                  }`}
                >
                  <Construction size={16} className="shrink-0 mt-0.5" />
                  <span>
                    <strong>Status:</strong> This page serves as a temporary
                    gateway. The primary portfolio website is currently
                    undergoing a complete redesign and re-engineering.
                  </span>
                </div>
              </div>

              {/* Tech Stack Section */}
              <div className="mt-2">
                <h3 className="text-xs font-bold uppercase tracking-wider opacity-70 mb-3">
                  Built With
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {techStack.map((tech) => (
                    <div
                      key={tech.name}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium border transition-colors ${
                        isDarkMode
                          ? "bg-slate-700/50 border-slate-600 hover:bg-slate-700"
                          : "bg-slate-50 border-slate-200 hover:bg-slate-100"
                      }`}
                    >
                      <span
                        className={
                          isDarkMode
                            ? "text-slate-200"
                            : tech.color.split(" ")[0]
                        }
                      >
                        {tech.icon}
                      </span>
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Subtle Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className={`cursor-pointer w-full py-2.5 mt-2 rounded-lg text-sm font-medium transition-colors relative overflow-hidden group ${
                  isDarkMode
                    ? "text-slate-400 hover:text-slate-200 hover:bg-slate-700/50"
                    : "text-slate-500 hover:text-slate-700 hover:bg-slate-100"
                }`}
              >
                <span className="relative z-10">Close</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Avatar Expansion Modal */}
      {isAvatarExpanded && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in cursor-zoom-out"
          onClick={() => setIsAvatarExpanded(false)}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <img
              src={profile.avatarBig}
              alt={profile.name}
              className="w-64 h-64 md:w-96 md:h-96 rounded-full border-4 border-white shadow-2xl object-cover animate-scale-in"
            />
            <button
              onClick={() => setIsAvatarExpanded(false)}
              className="absolute -top-12 right-1/2 translate-x-1/2 p-2 text-white/80 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translate3d(0, -20px, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
        .animate-fade-in-down {
          animation: fadeInDown 0.6s ease-out forwards;
          opacity: 0;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translate3d(0, 20px, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }

        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 0.2s ease-out;
        }
        @keyframes scaleIn {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-scale-in {
          animation: scaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        @keyframes subtlePing {
          75%, 100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
        .animate-subtle-ping {
          animation: subtlePing 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default App;
