"use client";

import React, { useState, useEffect } from "react";
import {
  Play,
  Pause,
  Plus,
  FileText,
  FolderOpen,
  Download,
  Share2,
  Sparkles,
  CloudSun,
  Activity,
  Layers,
  CheckCircle2,
  Clock,
  ArrowUpRight,
  Sliders,
  Laptop
} from "lucide-react";

interface DashboardProps {
  onNavigateToHdsd: () => void;
}

export default function Dashboard({ onNavigateToHdsd }: DashboardProps) {
  // Real-time clock
  const [time, setTime] = useState("07:45 PM");
  const [dateStr, setDateStr] = useState("May 24, 2026");
  const [dayStr, setDayStr] = useState("Saturday");

  // Timer state
  const [timerSeconds, setTimerSeconds] = useState(25 * 60);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }));
      setDateStr(now.toLocaleDateString([], { month: 'short', day: 'numeric', year: 'numeric' }));
      setDayStr(now.toLocaleDateString([], { weekday: 'long' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTimerRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timerSeconds]);

  const formatTimer = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  // Mock task checklist
  const [tasks, setTasks] = useState([
    { id: 1, title: "UI/UX Research & SRS", status: "Completed" },
    { id: 2, title: "Design Dashboard & Figma", status: "Completed" },
    { id: 3, title: "Auto-Match Screenshots HDSD", status: "In Progress" },
    { id: 4, title: "Export Docx Standard Template", status: "Pending" },
  ]);

  const toggleTask = (id: number) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id
          ? {
              ...t,
              status:
                t.status === "Completed"
                  ? "Pending"
                  : t.status === "Pending"
                  ? "In Progress"
                  : "Completed",
            }
          : t
      )
    );
  };

  return (
    <div className="flex-1 p-6 md:p-8 max-w-7xl mx-auto w-full overflow-y-auto">
      {/* 2-Column Responsive Bento Grid matching the reference layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        
        {/* ROW 1: Greeting Banner (Left 7 cols) & Date/Weather (Right 5 cols) */}
        <div className="lg:col-span-7 glass-panel rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between min-h-[170px]">
          {/* Subtle Ambient wave in card */}
          <div className="flex justify-between items-start z-10">
            <div>
              <p className="text-xs uppercase tracking-wider text-slate-400 font-medium">Good Evening,</p>
              <h1 className="text-3xl font-bold tracking-tight text-white mt-0.5">Aaru</h1>
              <p className="text-xs text-slate-400 mt-1">Stay focused and make it happen.</p>
            </div>
            <div className="glass-pill px-3 py-1 rounded-full text-xs font-mono text-cyan-300">
              {time}
            </div>
          </div>

          {/* Glowing Wavy Line (Neon pulse) */}
          <div className="w-full mt-4 relative h-12 flex items-center">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 400 50" fill="none">
              <path
                d="M 0 30 Q 50 10, 100 28 T 200 22 T 300 35 T 400 15"
                stroke="url(#neonCyanGrad)"
                strokeWidth="2.5"
                strokeLinecap="round"
                className="drop-shadow-[0_0_8px_rgba(0,240,255,0.7)]"
              />
              {/* Highlight Nodes */}
              <circle cx="100" cy="28" r="3.5" fill="#00f0ff" className="drop-shadow-[0_0_8px_#00f0ff]" />
              <circle cx="200" cy="22" r="3.5" fill="#00f0ff" className="drop-shadow-[0_0_8px_#00f0ff]" />
              <circle cx="300" cy="35" r="3.5" fill="#00f0ff" className="drop-shadow-[0_0_8px_#00f0ff]" />
              <defs>
                <linearGradient id="neonCyanGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#00f0ff" stopOpacity="1" />
                  <stop offset="100%" stopColor="#a855f7" stopOpacity="0.8" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Date, Weather & AI Status (Right 5 cols) */}
        <div className="lg:col-span-5 glass-panel rounded-3xl p-6 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-lg font-bold text-slate-100">{dateStr}</h2>
              <p className="text-xs text-slate-400">{dayStr}</p>
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] text-emerald-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              Gemini Vision Ready
            </div>
          </div>

          <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
            <div className="flex items-center gap-3">
              <CloudSun className="w-8 h-8 text-amber-400 drop-shadow-[0_0_10px_rgba(251,191,36,0.5)]" />
              <div>
                <span className="text-2xl font-bold text-white">27°</span>
                <p className="text-[11px] text-slate-400">Cloudy • H: 31° L: 21°</p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-xs text-slate-400">Active Workspace</span>
              <p className="text-xs font-semibold text-cyan-300">Project Test / BA</p>
            </div>
          </div>
        </div>

        {/* ROW 2: Productivity Ring (Left 7 cols) & Focus Timer (Right 5 cols) */}
        <div className="lg:col-span-7 glass-panel rounded-3xl p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-semibold text-slate-200">Productivity</h3>
            <span className="text-xs text-slate-400 cursor-pointer hover:text-white">Today ▾</span>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <div className="text-4xl font-extrabold text-white tracking-tight">78%</div>
              <p className="text-xs text-slate-400 mt-0.5">Great Progress!</p>
              
              <div className="flex items-center gap-6 mt-6">
                <div>
                  <p className="text-[11px] text-slate-400">Tasks Completed</p>
                  <p className="text-xl font-bold text-white">14</p>
                </div>
                <div>
                  <p className="text-[11px] text-slate-400">Total Tasks</p>
                  <p className="text-xl font-bold text-white">18</p>
                </div>
              </div>
            </div>

            {/* Neon Circular Progress Ring */}
            <div className="relative w-32 h-32 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="transparent"
                  stroke="rgba(255,255,255,0.06)"
                  strokeWidth="8"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="transparent"
                  stroke="url(#ringGrad)"
                  strokeWidth="8"
                  strokeDasharray="251.2"
                  strokeDashoffset={251.2 * (1 - 0.78)}
                  strokeLinecap="round"
                  className="drop-shadow-[0_0_12px_rgba(0,240,255,0.6)]"
                />
                <defs>
                  <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00f0ff" />
                    <stop offset="100%" stopColor="#a855f7" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>

        {/* Focus Timer (Right 5 cols) */}
        <div className="lg:col-span-5 glass-panel rounded-3xl p-6 flex flex-col items-center justify-between">
          <div className="w-full flex justify-between items-center">
            <h3 className="text-sm font-semibold text-slate-200">Focus Timer</h3>
            <Clock className="w-4 h-4 text-slate-400" />
          </div>

          {/* Circular Countdown Dial with Sunset Orange Glow */}
          <div className="relative w-36 h-36 flex items-center justify-center my-2">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
                stroke="rgba(255,255,255,0.06)"
                strokeWidth="6"
              />
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
                stroke="url(#timerGrad)"
                strokeWidth="6"
                strokeDasharray="251.2"
                strokeDashoffset={251.2 * (1 - timerSeconds / (25 * 60))}
                strokeLinecap="round"
                className="drop-shadow-[0_0_15px_rgba(249,115,22,0.6)]"
              />
              <defs>
                <linearGradient id="timerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f97316" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-bold font-mono text-white tracking-wider">
                {formatTimer(timerSeconds)}
              </span>
              <span className="text-[10px] text-slate-400">Deep Work</span>
            </div>
          </div>

          <button
            onClick={() => setIsTimerRunning(!isTimerRunning)}
            className="flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/10 text-xs font-medium text-slate-200 transition-all hover:scale-105"
          >
            {isTimerRunning ? (
              <>
                <Pause className="w-3.5 h-3.5 text-amber-400" /> Pause
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 text-cyan-400 fill-cyan-400" /> Start
              </>
            )}
          </button>
        </div>

        {/* ROW 3: Tasks Checklist (Left 7 cols) & Current Mood / AI Vision (Right 5 cols) */}
        <div className="lg:col-span-7 glass-panel rounded-3xl p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-semibold text-slate-200">Tasks</h3>
            <button className="p-1 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-all">
              <Plus className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-3">
            {tasks.map((task) => (
              <div
                key={task.id}
                onClick={() => toggleTask(task.id)}
                className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 cursor-pointer transition-all"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center border transition-all ${
                      task.status === "Completed"
                        ? "bg-cyan-500 border-cyan-400 text-black shadow-[0_0_10px_#00f0ff]"
                        : task.status === "In Progress"
                        ? "border-amber-400/80 bg-amber-500/20"
                        : "border-slate-600 bg-transparent"
                    }`}
                  >
                    {task.status === "Completed" && <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>
                  <span
                    className={`text-xs font-medium ${
                      task.status === "Completed"
                        ? "text-slate-400 line-through"
                        : "text-slate-200"
                    }`}
                  >
                    {task.title}
                  </span>
                </div>

                <span
                  className={`text-[10px] px-2 py-0.5 rounded-md font-medium ${
                    task.status === "Completed"
                      ? "text-slate-400"
                      : task.status === "In Progress"
                      ? "text-amber-300 bg-amber-500/10 border border-amber-500/20"
                      : "text-slate-500"
                  }`}
                >
                  {task.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Current Mood & Distractions (Right 5 cols) */}
        <div className="lg:col-span-5 glass-panel rounded-3xl p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-semibold text-slate-200">Current Mood</h3>
            <p className="text-xs text-cyan-400 font-medium mt-0.5">Focused</p>
          </div>

          {/* Smooth Wavy Ambient Line */}
          <div className="w-full my-4 h-12 flex items-center">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 300 40" fill="none">
              <path
                d="M 0 20 Q 75 0, 150 20 T 300 20"
                stroke="url(#blueWaveGrad)"
                strokeWidth="2.5"
                strokeLinecap="round"
                className="drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]"
              />
              <defs>
                <linearGradient id="blueWaveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#38bdf8" />
                  <stop offset="50%" stopColor="#60a5fa" />
                  <stop offset="100%" stopColor="#818cf8" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="flex justify-between items-center pt-3 border-t border-white/5">
            <span className="text-xs text-slate-400">Distractions</span>
            <span className="text-xs font-medium text-emerald-400">Low</span>
          </div>
        </div>

        {/* ROW 4: Weekly Activity (Left 7 cols) & Shortcuts (Right 5 cols) */}
        <div className="lg:col-span-7 glass-panel rounded-3xl p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-semibold text-slate-200">Weekly Activity</h3>
            <span className="text-xs text-slate-400 cursor-pointer hover:text-white">This Week ▾</span>
          </div>

          {/* Bar Chart Mockup with 7.8h Pill Indicator */}
          <div className="flex items-end justify-between h-28 pt-4 px-2">
            {[
              { day: "Mon", h: 40 },
              { day: "Tue", h: 45 },
              { day: "Wed", h: 55 },
              { day: "Thu", h: 65 },
              { day: "Fri", h: 85, active: true },
              { day: "Sat", h: 95 },
              { day: "Sun", h: 30 },
            ].map((bar, i) => (
              <div key={i} className="flex flex-col items-center gap-2 group cursor-pointer">
                {bar.active && (
                  <div className="px-2 py-0.5 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-[10px] text-cyan-300 font-mono -mb-1 animate-bounce">
                    7.8h
                  </div>
                )}
                <div className="w-3 rounded-full bg-slate-800 h-20 flex items-end overflow-hidden">
                  <div
                    style={{ height: `${bar.h}%` }}
                    className={`w-full rounded-full transition-all duration-500 ${
                      bar.active
                        ? "bg-cyan-400 shadow-[0_0_12px_#00f0ff]"
                        : "bg-blue-600/70 group-hover:bg-cyan-500"
                    }`}
                  />
                </div>
                <span className="text-[10px] text-slate-400">{bar.day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Shortcuts / Quick Actions (Right 5 cols) */}
        <div className="lg:col-span-5 glass-panel rounded-3xl p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-semibold text-slate-200">Shortcuts</h3>
            <span className="text-xs text-cyan-400 cursor-pointer" onClick={onNavigateToHdsd}>
              Open Studio →
            </span>
          </div>

          {/* 6-icon grid matching the design */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "Auto HDSD", icon: FileText, color: "text-cyan-400", onClick: onNavigateToHdsd },
              { label: "Files", icon: FolderOpen, color: "text-blue-400" },
              { label: "Diagrams", icon: Layers, color: "text-purple-400" },
              { label: "Export Docx", icon: Download, color: "text-emerald-400" },
              { label: "Figma Sync", icon: Share2, color: "text-pink-400" },
              { label: "AI Config", icon: Sparkles, color: "text-amber-400" },
            ].map((shortcut, idx) => {
              const Icon = shortcut.icon;
              return (
                <button
                  key={idx}
                  onClick={shortcut.onClick}
                  className="flex flex-col items-center justify-center p-3 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 transition-all group hover:scale-105"
                >
                  <div className={`p-2 rounded-xl bg-white/5 ${shortcut.color} mb-1.5 group-hover:shadow-[0_0_12px_rgba(255,255,255,0.2)]`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] text-slate-300 font-medium">{shortcut.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ROW 5: Upcoming Events (Left 7 cols) & System Status (Right 5 cols) */}
        <div className="lg:col-span-7 glass-panel rounded-3xl p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-semibold text-slate-200">Upcoming Events</h3>
            <span className="text-xs text-slate-400 hover:text-white cursor-pointer">View All</span>
          </div>

          <div className="space-y-3">
            {[
              { day: "25", month: "MAY", title: "Project Meeting", time: "10:00 AM - 11:00 AM", dot: "bg-blue-500 shadow-[0_0_8px_#3b82f6]" },
              { day: "26", month: "MAY", title: "Design Review & Wireframes", time: "02:00 PM - 03:30 PM", dot: "bg-amber-500 shadow-[0_0_8px_#f59e0b]" },
              { day: "28", month: "MAY", title: "Client Demo - HDSD Walkthrough", time: "11:00 AM - 12:00 PM", dot: "bg-emerald-500 shadow-[0_0_8px_#10b981]" },
            ].map((ev, i) => (
              <div key={i} className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="flex items-center gap-3">
                  <div className="text-center px-2 py-1 rounded-lg bg-white/5 border border-white/10">
                    <p className="text-xs font-bold text-white">{ev.day}</p>
                    <p className="text-[9px] text-slate-400">{ev.month}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-200">{ev.title}</p>
                    <p className="text-[10px] text-slate-400">{ev.time}</p>
                  </div>
                </div>
                <span className={`w-2 h-2 rounded-full ${ev.dot}`} />
              </div>
            ))}
          </div>
        </div>

        {/* System Status (Right 5 cols) */}
        <div className="lg:col-span-5 glass-panel rounded-3xl p-6 flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <h3 className="text-sm font-semibold text-slate-200">System Status</h3>
            <Activity className="w-4 h-4 text-cyan-400" />
          </div>

          <div className="flex items-center justify-center my-2">
            <div className="relative w-28 h-28 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="38" fill="transparent" stroke="rgba(255,255,255,0.06)" strokeWidth="6" />
                <circle
                  cx="50" cy="50" r="38" fill="transparent"
                  stroke="#00f0ff"
                  strokeWidth="6"
                  strokeDasharray="238.7"
                  strokeDashoffset={238.7 * (1 - 0.92)}
                  strokeLinecap="round"
                  className="drop-shadow-[0_0_12px_#00f0ff]"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-lg font-bold text-white">92%</span>
                <span className="text-[9px] text-slate-400">Optimal</span>
              </div>
            </div>
          </div>

          <div className="space-y-2 pt-2 border-t border-white/5">
            {[
              { label: "Storage (IndexedDB)", val: "78%", w: "w-[78%]" },
              { label: "AI Quota (Gemini)", val: "82%", w: "w-[82%]" },
              { label: "Network Latency", val: "94%", w: "w-[94%]" },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col gap-1">
                <div className="flex justify-between text-[10px] text-slate-400">
                  <span>{item.label}</span>
                  <span className="font-mono text-slate-200">{item.val}</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                  <div className={`h-full rounded-full bg-cyan-400 ${item.w}`} />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
