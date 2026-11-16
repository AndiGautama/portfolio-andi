import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Andi Gautama | Software & AI Engineer",
  description: "Portfolio of Andi Gautama, an IT Undergraduate at Universitas Tarumanagara specializing in Full-Stack Web, Mobile Apps, and AI/NLP integration.",
  keywords: [
    "Andi Gautama",
    "Software Engineer",
    "AI Developer",
    "Flutter Developer",
    "Next.js",
    "Portofolio IT",
    "Jakarta Barat"
  ],
  authors: [{ name: "Andi Gautama" }],
  openGraph: {
    title: "Andi Gautama | Software & AI Engineer",
    description: "Explore my interactive portfolio featuring software engineering, mobile apps, and AI/NLP projects.",
    url: "https://andigautama.vercel.app", // Ganti dengan URL Vercel kamu nanti
    siteName: "Andi Gautama Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-[#050d0a] text-[#f3f0e6]">
        {children}
      </body>
    </html>
  );
}