"use client";
import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Globe,
  Mail,
  Twitter,
  Code,
  Database,
  Palette,
  Coffee,
  ArrowRight,
  Moon,
  Sun,
  Share2,
  Check,
  Construction,
  MapPin,
  Clock,
  MessageCircle,
  Info, // Added Info icon
  X, // Added X icon for modal close
} from "lucide-react";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [copied, setCopied] = useState(false);
  const [time, setTime] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal

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

  // Data for the profile
  const profile = {
    name: "Shan Surat",
    bio: "Architecting scalable web solutions and crafting beautiful user interfaces. Bridging the gap between engineering and design.",
    avatarInitials: "SS",
    location: "Marikina, Philippines",
  };

  // Links configuration with layout props
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
        >
          <title>Freelancer</title>
          <path d="m14.096 3.076 1.634 2.292L24 3.076M5.503 20.924l4.474-4.374-2.692-2.89m6.133-10.584L11.027 5.23l4.022.15M4.124 3.077l.857 1.76 4.734.294m-3.058 7.072 3.497-6.522L0 5.13m7.064 7.485 3.303 3.548 3.643-3.57 1.13-6.652-4.439-.228Z" />
        </svg>
      ),
      subtitle: "View my past projects & 5-star client reviews",
      featured: true,
      colSpan: "col-span-2", // Full width
    },
    {
      id: 2,
      title: "GitHub",
      url: "https://github.com/shansurat",
      icon: <Github size={20} />,
      subtitle: "@shansurat",
      featured: false,
      colSpan: "col-span-1", // Half width
    },
    {
      id: 3,
      title: "LinkedIn",
      url: "https://linkedin.com/in/shansurat",
      icon: <Linkedin size={20} />,
      subtitle: "Let's connect", // Shortened for better fit
      featured: false,
      colSpan: "col-span-1", // Half width
    },
    {
      id: 4,
      title: "Email Me",
      url: "mailto:kristianmarksurat@gmail.com",
      icon: <Mail size={20} />,
      subtitle: "Send a message",
      featured: false,
      colSpan: "col-span-1", // Changed to half width to share row with WhatsApp
    },
    {
      id: 6, // New WhatsApp Link
      title: "WhatsApp",
      url: "https://wa.me/639696323813", // Replace with your number
      icon: <MessageCircle size={20} />,
      subtitle: "Let's chat",
      featured: false,
      colSpan: "col-span-1",
    },
    {
      id: 5,
      title: "Buy me a Matcha Drink",
      url: "https://paypal.me/kristianmarksurat",
      icon: <Coffee size={20} />,
      subtitle: "Fuel my coding sessions with green energy 🍵",
      featured: false,
      colSpan: "col-span-2",
    },
  ];

  const bgGradient = isDarkMode ? "bg-slate-900" : "bg-slate-50";

  const cardBg = isDarkMode
    ? "bg-slate-800/50 hover:bg-slate-800 border-slate-700"
    : "bg-white hover:bg-slate-50 border-slate-200";

  const textColor = isDarkMode ? "text-slate-100" : "text-slate-900";
  const subTextColor = isDarkMode ? "text-slate-400" : "text-slate-500";

  return (
    <div
      className={`min-h-screen w-full transition-colors duration-300 ${bgGradient} ${textColor} font-sans flex flex-col items-center py-12 px-4 md:py-24 md:px-6 relative overflow-hidden`}
    >
      {/* Background decoration */}
      <div
        className={`absolute top-0 left-0 w-full h-96 pointer-events-none transition-all duration-700
        ${
          isDarkMode
            ? "opacity-40 bg-[radial-gradient(ellipse_at_top,var(--color-indigo-900),var(--color-slate-900),transparent)]"
            : "opacity-30 bg-[radial-gradient(ellipse_at_top,var(--color-blue-300),var(--color-slate-100),transparent)]"
        }`}
      />

      {/* Main Container */}
      <main className="w-full max-w-md z-10 flex flex-col items-center gap-8 md:gap-12">
        {/* Header Controls */}
        <div className="w-full flex justify-between items-center px-2 mb-2 md:mb-4">
          <button
            onClick={toggleTheme}
            className={`cursor-pointer p-3 rounded-full transition-all duration-200 ${
              isDarkMode
                ? "bg-slate-800 hover:bg-slate-700 text-yellow-400"
                : "bg-white hover:bg-slate-100 text-slate-600 shadow-sm"
            }`}
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <div className="flex items-center gap-3">
            {/* Info Button with Notification Badge */}
            <button
              onClick={() => setIsModalOpen(true)}
              className={`cursor-pointer relative p-3 rounded-full transition-all duration-200 ${
                isDarkMode
                  ? "bg-slate-800 hover:bg-slate-700 text-slate-300"
                  : "bg-white hover:bg-slate-100 text-slate-600 shadow-sm"
              }`}
              aria-label="Information"
            >
              <Info size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-pulse border border-slate-800"></span>
            </button>

            {/* Share Button */}
            <button
              onClick={handleShare}
              className={`cursor-pointer p-3 rounded-full transition-all duration-200 flex items-center gap-2 ${
                isDarkMode
                  ? "bg-slate-800 hover:bg-slate-700 text-slate-300"
                  : "bg-white hover:bg-slate-100 text-slate-600 shadow-sm"
              }`}
              aria-label="Share Profile"
            >
              {copied ? (
                <Check size={20} className="text-green-500" />
              ) : (
                <Share2 size={20} />
              )}
            </button>
          </div>
        </div>

        {/* Profile Section */}
        <div className="flex flex-col items-center text-center gap-8 animate-fade-in-down">
          <div className="relative group">
            <div
              className={`w-32 h-32 rounded-full flex items-center justify-center text-4xl font-bold border-4 shadow-xl transition-transform duration-300 group-hover:scale-105
                ${
                  isDarkMode
                    ? "bg-gradient-to-br from-indigo-500 to-purple-600 border-slate-800 text-white"
                    : "bg-gradient-to-br from-blue-500 to-cyan-400 border-white text-white"
                }`}
            >
              {profile.avatarInitials}
            </div>
            <div
              className="absolute bottom-2 right-2 bg-green-500 w-6 h-6 rounded-full border-4 border-slate-900"
              title="Available for work"
            ></div>
          </div>

          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight">
              {profile.name}
            </h1>

            {/* Roles Pills Container */}
            <div className="flex flex-wrap justify-center gap-3">
              {/* Full Stack Pill */}
              <div
                className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold
                ${
                  isDarkMode
                    ? "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"
                    : "bg-blue-50 text-blue-600 border border-blue-200"
                }`}
              >
                <Code size={14} />
                <span className="opacity-50">+</span>
                <Database size={14} />
                <span>Full Stack Developer</span>
              </div>

              {/* Graphic Designer Pill */}
              <div
                className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold
                ${
                  isDarkMode
                    ? "bg-purple-500/10 text-purple-400 border border-purple-500/20"
                    : "bg-purple-50 text-purple-600 border border-purple-200"
                }`}
              >
                <Palette size={14} />
                <span>Graphic Designer</span>
              </div>
            </div>

            {/* Added mx-auto to center the bio description */}
            <p
              className={`max-w-xs text-base leading-relaxed ${subTextColor} mt-2 mx-auto`}
            >
              {profile.bio}
            </p>

            {/* Location and Time */}
            <div
              className={`flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-sm font-medium ${subTextColor} mt-6`}
            >
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                {profile.location}
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                {time} (PHST)
              </div>
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="w-full grid grid-cols-2 gap-5">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`cursor-pointer group relative flex items-center gap-4 p-5 rounded-2xl border backdrop-blur-sm transition-all duration-200 transform hover:-translate-y-1 hover:shadow-xl
                ${cardBg}
                ${
                  link.featured
                    ? isDarkMode
                      ? "ring-2 ring-indigo-500/50"
                      : "ring-2 ring-blue-400/50"
                    : ""
                }
                ${link.colSpan}
              `}
            >
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
                <h3 className="font-semibold truncate pr-1 text-sm sm:text-base">
                  {link.title}
                </h3>
                {link.subtitle && (
                  <p className={`text-xs truncate ${subTextColor} mt-0.5`}>
                    {link.subtitle}
                  </p>
                )}
              </div>

              {/* Show arrow only on full-width cards to prevent crowding */}
              {link.colSpan === "col-span-2" && (
                <div
                  className={`opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 ${subTextColor}`}
                >
                  <ArrowRight size={20} />
                </div>
              )}

              {link.featured && (
                <span className="absolute -top-2.5 -right-2 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full shadow-sm">
                  Featured
                </span>
              )}
            </a>
          ))}
        </div>

        {/* Footer */}
        <footer className={`mt-8 md:mt-16 text-sm ${subTextColor}`}>
          <p>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </footer>
      </main>

      {/* Info Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className={`relative w-full max-w-sm p-6 rounded-2xl shadow-2xl transform transition-all scale-100 ${
              isDarkMode
                ? "bg-slate-800 text-slate-100"
                : "bg-white text-slate-900"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className={`cursor-pointer absolute top-4 right-4 p-2 rounded-full transition-colors ${
                isDarkMode ? "hover:bg-slate-700" : "hover:bg-slate-100"
              }`}
            >
              <X size={20} />
            </button>

            <div className="flex flex-col items-center text-center gap-4 mt-2">
              <div
                className={`p-4 rounded-full ${
                  isDarkMode
                    ? "bg-amber-500/10 text-amber-500"
                    : "bg-amber-100 text-amber-600"
                }`}
              >
                <Construction size={32} />
              </div>
              <h3 className="text-xl font-bold">Website Under Construction</h3>
              <p className={`text-sm leading-relaxed ${subTextColor}`}>
                Thank you for visiting! I am currently redesigning my portfolio
                to better showcase my latest full-stack projects and design
                work. This page serves as a temporary hub for my professional
                links.
              </p>
              <p className={`text-sm leading-relaxed ${subTextColor}`}>
                While the main site is being built, you can view my detailed
                work history on Freelancer, check my code on GitHub, or contact
                me directly for collaboration opportunities.
              </p>
              <button
                onClick={() => setIsModalOpen(false)}
                className={`cursor-pointer w-full py-3 rounded-xl font-semibold transition-colors mt-4 ${
                  isDarkMode
                    ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                    : "bg-blue-600 hover:bg-blue-700 text-white"
                }`}
              >
                Got it
              </button>
            </div>
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
          animation: fadeInDown 0.6s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </div>
  );
};

export default App;
