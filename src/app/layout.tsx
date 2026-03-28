import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shan Surat | Full Stack Developer & Graphic Designer",
  description: "Architecting scalable web solutions and crafting beautiful user interfaces. Bridging the gap between engineering and design.",
  other: {
    "script:ld+json": JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Shan Surat",
        alternateName: ["shansurat.dev", "Shan"],
        url: "https://shansurat.dev/",
      },
      {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Shan Surat",
        image: "shansurat.webp",
        jobTitle: ["Full Stack Developer", "Graphic Designer"],
        url: "https://shansurat.dev/",
        sameAs: [
          "https://www.freelancer.com/u/ksurat",
          "https://github.com/shansurat",
          "https://linkedin.com/in/shansurat",
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Metro Manila",
          addressCountry: "PH",
        },
        description:
          "Architecting scalable web solutions and crafting beautiful user interfaces. Bridging the gap between engineering and design.",
      },
    ]),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
