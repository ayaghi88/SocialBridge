import React from 'react';
import { LayoutGrid, Phone, Calendar, BarChart3, History, Users, LogOut } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { UserSession } from '../types';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  currentUser: UserSession | null;
  onLogout: () => void;
}

export const Sidebar = ({ activeTab, setActiveTab, currentUser, onLogout }: SidebarProps) => {
  const menuItems = [
    { id: 'accounts', label: 'Accounts', icon: Users },
    { id: 'phones', label: 'Phone Numbers', icon: Phone },
    { id: 'scheduler', label: 'Scheduler', icon: Calendar },
    { id: 'engagement', label: 'Engagement', icon: BarChart3 },
    { id: 'audit', label: 'Audit Log', icon: History },
  ];

  // Derive initials
  const initials = currentUser
    ? currentUser.name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .slice(0, 2)
        .toUpperCase()
    : '??';

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
              "flex items-center gap-3 px-4 py-2 rounded transition-all duration-200 text-sm font-medium cursor-pointer",
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

      <div className="mt-auto pt-6 border-t border-line/20 flex flex-col gap-4">
        {currentUser && (
          <div className="flex items-start gap-3 px-2">
            <div className="w-9 h-9 flex-shrink-0 rounded bg-ink text-bg flex items-center justify-center text-xs font-mono font-bold">
              {initials}
            </div>
            <div className="flex flex-col overflow-hidden">
              <span className="text-xs font-bold truncate" title={currentUser.name}>
                {currentUser.name}
              </span>
              <span className="text-[10px] opacity-40 truncate" title={currentUser.email}>
                {currentUser.email}
              </span>
              <span className="text-[9px] text-ink font-mono font-bold tracking-wider mt-0.5 uppercase opacity-75">
                {currentUser.role}
              </span>
            </div>
          </div>
        )}

        <button
          onClick={onLogout}
          className="flex items-center justify-between gap-2 px-4 py-2 rounded text-xs text-red-700/80 hover:text-red-700 hover:bg-red-50 font-mono tracking-wider border border-transparent hover:border-red-100 transition-all cursor-pointer uppercase font-bold"
        >
          <span>End Session</span>
          <LogOut className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

