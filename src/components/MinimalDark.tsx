// Minimal Dark UI Component
// Inspired by writenicecode's aesthetic
// Clean, minimal, subtle borders, dark backgrounds

"use client";

import { useState } from "react";

interface MinimalCardProps {
  title: string;
  description: string;
  tag?: string;
  onClick?: () => void;
}

export function MinimalCard({ title, description, tag, onClick }: MinimalCardProps) {
  return (
    <div
      onClick={onClick}
      className="group p-4 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 cursor-pointer transition-all duration-200"
    >
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-white font-medium">{title}</h3>
        {tag && (
          <span className="text-xs px-2 py-0.5 rounded-full bg-zinc-900 text-zinc-400 border border-zinc-800">
            {tag}
          </span>
        )}
      </div>
      <p className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">
        {description}
      </p>
    </div>
  );
}

export function MinimalButton({ children, variant = "primary" }: { children: React.ReactNode; variant?: "primary" | "secondary" }) {
  return (
    <button
      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
        variant === "primary"
          ? "bg-white text-black hover:bg-zinc-200"
          : "bg-zinc-900 text-white border border-zinc-800 hover:bg-zinc-800"
      }`}
    >
      {children}
    </button>
  );
}

export function MinimalInput({ placeholder }: { placeholder: string }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="w-full px-4 py-3 rounded-lg bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-600 transition-colors duration-200"
    />
  );
}

export function MinimalAvatar({ src, alt }: { src?: string; alt: string }) {
  return (
    <div className="w-10 h-10 rounded-full bg-zinc-800 overflow-hidden">
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-zinc-500 text-sm">
          {alt[0].toUpperCase()}
        </div>
      )}
    </div>
  );
}

export function MinimalToggle({ checked, onChange }: { checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      onClick={() => onChange(!checked)}
      className={`relative w-11 h-6 rounded-full transition-colors ${
        checked ? "bg-white" : "bg-zinc-800"
      }`}
    >
      <div
        className={`absolute top-0.5 w-5 h-5 rounded-full bg-black transition-transform ${
          checked ? "translate-x-5" : "translate-x-0.5"
        }`}
      />
    </button>
  );
}

export function MinimalBadge({ children, color = "zinc" }: { children: React.ReactNode; color?: string }) {
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-${color}-900/50 text-${color}-400 border border-${color}-800`}>
      {children}
    </span>
  );
}

export function MinimalList({ items }: { items: { title: string; subtitle?: string; icon?: React.ReactNode }[] }) {
  return (
    <div className="space-y-1">
      {items.map((item, i) => (
        <div
          key={i}
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-zinc-900/50 cursor-pointer transition-colors"
        >
          {item.icon && <span className="text-zinc-500">{item.icon}</span>}
          <div className="flex-1">
            <p className="text-sm text-white">{item.title}</p>
            {item.subtitle && (
              <p className="text-xs text-zinc-500">{item.subtitle}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export function MinimalProgress({ value, max = 100 }: { value: number; max?: number }) {
  const percent = Math.min((value / max) * 100, 100);
  
  return (
    <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
      <div
        className="h-full bg-white rounded-full transition-all duration-300"
        style={{ width: `${percent}%` }}
      />
    </div>
  );
}

export function MinimalTabs({ tabs, activeTab, onTabChange }: { 
  tabs: string[]; 
  activeTab: string; 
  onTabChange: (tab: string) => void 
}) {
  return (
    <div className="flex gap-1 p-1 bg-zinc-900 rounded-lg">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`px-4 py-2 text-sm rounded-md transition-all duration-200 ${
            activeTab === tab
              ? "bg-zinc-800 text-white"
              : "text-zinc-400 hover:text-white"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export function MinimalModal({ isOpen, onClose, title, children }: {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative z-10 w-full max-w-md p-6 rounded-2xl bg-zinc-950 border border-zinc-800">
        <h2 className="text-lg font-semibold text-white mb-4">{title}</h2>
        {children}
      </div>
    </div>
  );
}

// Demo component showcasing the minimal dark aesthetic
export function MinimalUIDemo() {
  const [activeTab, setActiveTab] = useState("Overview");
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className="p-6 bg-zinc-950 rounded-xl border border-zinc-800 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-zinc-800" />
          <div>
            <p className="text-white font-medium">John Doe</p>
            <p className="text-xs text-zinc-500">@johndoe</p>
          </div>
        </div>
        <MinimalButton>Follow</MinimalButton>
      </div>

      {/* Tabs */}
      <MinimalTabs
        tabs={["Overview", "Projects", "Settings"]}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
          <p className="text-2xl font-semibold text-white">1.2K</p>
          <p className="text-xs text-zinc-500">Followers</p>
        </div>
        <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
          <p className="text-2xl font-semibold text-white">842</p>
          <p className="text-xs text-zinc-500">Following</p>
        </div>
        <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
          <p className="text-2xl font-semibold text-white">128</p>
          <p className="text-xs text-zinc-500">Projects</p>
        </div>
      </div>

      {/* List */}
      <MinimalList
        items={[
          { title: "Design System", subtitle: "Updated 2h ago", icon: "🎨" },
          { title: "Micro-interactions", subtitle: "In progress", icon: "✨" },
          { title: "Icon Library", subtitle: "Completed", icon: "📦" },
        ]}
      />

      {/* Toggles */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm text-white">Notifications</span>
          <MinimalToggle checked={notifications} onChange={setNotifications} />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-white">Dark Mode</span>
          <MinimalToggle checked={darkMode} onChange={setDarkMode} />
        </div>
      </div>

      {/* Progress */}
      <div>
        <div className="flex justify-between mb-2">
          <span className="text-sm text-zinc-400">Progress</span>
          <span className="text-sm text-zinc-400">75%</span>
        </div>
        <MinimalProgress value={75} />
      </div>
    </div>
  );
}
