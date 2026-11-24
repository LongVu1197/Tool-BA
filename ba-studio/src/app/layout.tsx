import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BA Copilot Studio — Vibe Coding for Business Analysts",
  description: "Next-gen workspace for Business Analysts: Auto HDSD, SRS, Use Cases & Wireframes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className="dark h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#070a13] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 font-sans">
        <div className="vibe-bg-glow" />
        <div className="relative z-10 flex-1 flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
