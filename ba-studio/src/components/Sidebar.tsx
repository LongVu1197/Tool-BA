"use client";

import React from "react";
import {
  LayoutDashboard,
  FileSpreadsheet,
  GitFork,
  PenTool,
  FolderOpen,
  Settings,
  Sparkles,
  Sun,
  ChevronRight,
} from "lucide-react";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "hdsd", label: "Auto HDSD Studio", icon: FileSpreadsheet, badge: "MVP" },
    { id: "usecase", label: "Use Case & Flow", icon: GitFork },
    { id: "wireframe", label: "Wireframe & Figma", icon: PenTool },
    { id: "files", label: "Local Files", icon: FolderOpen },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <aside className="w-20 md:w-22 min-h-screen py-6 px-3 flex flex-col justify-between items-center glass-panel border-r border-white/5 z-20 shrink-0">
      {/* Top Branding */}
      <div className="flex flex-col items-center gap-8 w-full">
        <button
          onClick={() => setActiveTab("dashboard")}
          className="relative group p-3 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 hover:bg-cyan-500/20 transition-all duration-300"
          title="BA Copilot Studio"
        >
          <Sparkles className="w-6 h-6 animate-pulse" />
          <div className="absolute inset-0 rounded-2xl bg-cyan-400/20 blur-md -z-10 group-hover:bg-cyan-400/40 transition-all" />
        </button>

        {/* Navigation Icons */}
        <nav className="flex flex-col items-center gap-3 w-full">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`relative group w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-200 ${
                  isActive
                    ? "bg-white/10 text-cyan-300 border border-cyan-400/40 shadow-[0_0_15px_rgba(0,240,255,0.25)]"
                    : "text-slate-400 hover:text-slate-100 hover:bg-white/5"
                }`}
                title={item.label}
              >
                <Icon className="w-5 h-5" />
                {item.badge && (
                  <span className="absolute -top-1 -right-1 px-1.5 py-0.2 text-[9px] font-bold rounded-full bg-cyan-500 text-black shadow-sm">
                    {item.badge}
                  </span>
                )}
                {/* Active indicator dot */}
                {isActive && (
                  <span className="absolute -left-1.5 w-1 h-5 rounded-r-full bg-cyan-400 shadow-[0_0_8px_#00f0ff]" />
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Bottom Profile & Toggle */}
      <div className="flex flex-col items-center gap-5 w-full pt-4 border-t border-white/5">
        <button
          className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-400 hover:text-slate-200 hover:bg-white/5 transition-all"
          title="Toggle Ambient Light"
        >
          <Sun className="w-4 h-4" />
        </button>

        {/* User Avatar */}
        <div className="group relative flex flex-col items-center cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-600 via-indigo-600 to-purple-600 p-[2px] transition-transform duration-200 group-hover:scale-105">
            <div className="w-full h-full rounded-full bg-[#0b101f] flex items-center justify-center text-xs font-semibold text-cyan-200">
              BA
            </div>
          </div>
          <span className="text-[10px] text-slate-400 mt-1.5 flex items-center gap-0.5">
            Aaru <ChevronRight className="w-3 h-3 text-slate-500" />
          </span>
        </div>
      </div>
    </aside>
  );
}
