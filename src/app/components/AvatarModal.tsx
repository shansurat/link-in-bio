"use client";
import Image from "next/image";
import { X } from "lucide-react";

interface AvatarModalProps {
  avatarSrc: string;
  altText: string;
  onClose: () => void;
}

export default function AvatarModal({ avatarSrc, altText, onClose }: AvatarModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in cursor-zoom-out"
      onClick={onClose}
    >
      <div className="relative" onClick={(e) => e.stopPropagation()}>
        <Image
          src={avatarSrc}
          alt={altText}
          width={384}
          height={384}
          className="w-64 h-64 md:w-96 md:h-96 rounded-full border-4 border-white shadow-2xl object-cover animate-scale-in"
          priority
        />
        <button
          onClick={onClose}
          className="absolute -top-12 right-1/2 translate-x-1/2 p-2 text-white/80 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>
      </div>
    </div>
  );
}
