import React from 'react';
import { LayoutGrid, Phone, Calendar, BarChart3, History, Users } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Sidebar = ({ activeTab, setActiveTab }: SidebarProps) => {
  const menuItems = [
    { id: 'accounts', label: 'Accounts', icon: Users },
    { id: 'phones', label: 'Phone Numbers', icon: Phone },
    { id: 'scheduler', label: 'Scheduler', icon: Calendar },
    { id: 'engagement', label: 'Engagement', icon: BarChart3 },
    { id: 'audit', label: 'Audit Log', icon: History },
  ];

  return (
    <div className="w-64 border-r border-line h-screen flex flex-col p-6 gap-8">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-ink rounded flex items-center justify-center">
          <LayoutGrid className="text-bg w-5 h-5" />
        </div>
        <h1 className="font-bold tracking-tighter text-xl">SOCIALBRIDGE</h1>
      </div>

      <nav className="flex flex-col gap-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={cn(
              "flex items-center gap-3 px-4 py-2 rounded transition-all duration-200 text-sm font-medium",
              activeTab === item.id 
                ? "bg-ink text-bg" 
                : "hover:bg-ink/5 text-ink/70 hover:text-ink"
            )}
          >
            <item.icon className="w-4 h-4" />
            {item.label}
          </button>
        ))}
      </nav>

      <div className="mt-auto pt-6 border-t border-line/20">
        <div className="flex items-center gap-3 px-4">
          <div className="w-8 h-8 rounded-full bg-ink/10 flex items-center justify-center text-xs font-bold">
            AH
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold">Amber's Health</span>
            <span className="text-[10px] opacity-50 uppercase">Enterprise Plan</span>
          </div>
        </div>
      </div>
    </div>
  );
};
