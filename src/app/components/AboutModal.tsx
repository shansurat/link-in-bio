"use client";
import { X, Zap, Code, Palette, Box, Construction, Terminal } from "lucide-react";

interface AboutModalProps {
  isDarkMode: boolean;
  subTextColor: string;
  onClose: () => void;
}

const techStack = [
  { name: "Next.js", icon: <Zap size={14} />, color: "text-white bg-black" },
  { name: "React", icon: <Code size={14} />, color: "text-blue-500 bg-blue-50" },
  { name: "Tailwind CSS", icon: <Palette size={14} />, color: "text-cyan-500 bg-cyan-50" },
  { name: "Lucide Icons", icon: <Box size={14} />, color: "text-orange-500 bg-orange-50" },
];

export default function AboutModal({ isDarkMode, subTextColor, onClose }: AboutModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className={`relative w-full max-w-sm p-8 rounded-2xl shadow-2xl transform transition-all scale-100 ${isDarkMode
          ? "bg-slate-800 text-slate-100"
          : "bg-white text-slate-900"
          }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-black/5 transition-colors"
        >
          <X size={20} className={subTextColor} />
        </button>

        <div className="flex flex-col gap-5">
          {/* Header */}
          <div className="flex items-center gap-3 pb-4 border-b border-slate-700/50">
            <div
              className={`p-3 rounded-xl ${isDarkMode
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

          {/* Bio Content */}
          <div className={`text-sm leading-relaxed space-y-4 ${subTextColor}`}>
            <p>
              This single-page application is designed as a performant,
              accessible hub for my digital presence. It uses a modern,
              component-based architecture to ensure fast load times and a
              seamless mobile experience.
            </p>

            {/* Construction Note */}
            <div
              className={`p-3 rounded-lg text-xs border flex gap-3 items-start ${isDarkMode
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
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium border transition-colors ${isDarkMode
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
        </div>
      </div>
    </div>
  );
}
