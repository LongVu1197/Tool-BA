"use client";

import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Dashboard from "@/components/Dashboard";
import HdsdStudio from "@/components/HdsdStudio";
import { GitFork, PenTool, FolderOpen, Settings, Sparkles } from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <main className="flex h-screen w-screen overflow-hidden bg-[#070a13] text-slate-100">
      {/* Slim Glassmorphic Left Sidebar */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden relative">
        {/* Top Minimal Ambient Bar */}
        <header className="h-14 px-8 border-b border-white/5 flex items-center justify-between z-10 shrink-0">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
              BA COPILOT STUDIO v1.0
            </span>
            <span className="text-xs text-slate-500">|</span>
            <span className="text-xs text-slate-400">
              Workspace: <span className="text-slate-200 font-medium">d:/MyBAProject/Project test</span>
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-1.5 text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#10b981]" />
              Local Engine: <strong className="text-slate-200">Next.js + Node FS</strong>
            </div>
            <div className="glass-pill px-3 py-1 rounded-full text-slate-300 font-mono text-[11px]">
              Vibe: Dark Glassmorphism
            </div>
          </div>
        </header>

        {/* Dynamic Content Views */}
        <div className="flex-1 overflow-y-auto flex flex-col">
          {activeTab === "dashboard" && (
            <Dashboard onNavigateToHdsd={() => setActiveTab("hdsd")} />
          )}

          {activeTab === "hdsd" && <HdsdStudio />}

          {activeTab === "usecase" && (
            <div className="flex-1 p-8 max-w-7xl mx-auto w-full flex flex-col items-center justify-center text-center">
              <div className="p-4 rounded-3xl glass-panel text-cyan-400 mb-4 shadow-[0_0_25px_rgba(0,240,255,0.2)]">
                <GitFork className="w-10 h-10" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Use Case Matrix & Mermaid Flow</h2>
              <p className="text-xs text-slate-400 max-w-md">
                Phân hệ soạn thảo ma trận Use Case và tự động render biểu đồ Sequence, Flowchart bằng Mermaid.js (Giai đoạn 2).
              </p>
            </div>
          )}

          {activeTab === "wireframe" && (
            <div className="flex-1 p-8 max-w-7xl mx-auto w-full flex flex-col items-center justify-center text-center">
              <div className="p-4 rounded-3xl glass-panel text-purple-400 mb-4 shadow-[0_0_25px_rgba(168,85,247,0.2)]">
                <PenTool className="w-10 h-10" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Wireframe Studio & Figma Sync</h2>
              <p className="text-xs text-slate-400 max-w-md">
                Bảng vẽ kéo thả Excalidraw và nhúng thiết kế Figma trực tiếp vào tài liệu đặc tả (Giai đoạn 3).
              </p>
            </div>
          )}

          {activeTab === "files" && (
            <div className="flex-1 p-8 max-w-7xl mx-auto w-full flex flex-col items-center justify-center text-center">
              <div className="p-4 rounded-3xl glass-panel text-blue-400 mb-4 shadow-[0_0_25px_rgba(59,130,246,0.2)]">
                <FolderOpen className="w-10 h-10" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Local File Repository</h2>
              <p className="text-xs text-slate-400 max-w-md">
                Quản lý các tài liệu SRS, HDSD, template và screenshots đã lưu trong cơ sở dữ liệu IndexedDB trên máy của bạn.
              </p>
            </div>
          )}

          {activeTab === "settings" && (
            <div className="flex-1 p-8 max-w-7xl mx-auto w-full flex flex-col items-center justify-center text-center">
              <div className="p-4 rounded-3xl glass-panel text-amber-400 mb-4 shadow-[0_0_25px_rgba(245,158,11,0.2)]">
                <Settings className="w-10 h-10" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Cấu Hình Hệ Thống & API Keys</h2>
              <p className="text-xs text-slate-400 max-w-md">
                Cài đặt Google Gemini API Key hoặc OpenAI API Key cục bộ. Dữ liệu được bảo mật 100% trên thiết bị cá nhân của bạn.
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
