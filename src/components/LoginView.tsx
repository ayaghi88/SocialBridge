import React, { useState } from 'react';
import { LayoutGrid, ArrowRight, UserCheck, Shield } from 'lucide-react';
import { UserSession } from '../types';

interface LoginViewProps {
  onLogin: (session: UserSession) => void;
}

export const LoginView = ({ onLogin }: LoginViewProps) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState<'Administrator' | 'Operator' | 'Manager'>('Operator');
  const [org, setOrg] = useState("Amber's Healthcare");
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter an email address.');
      return;
    }
    setError('');

    // If typing custom, extract name from email prefix or default
    const derivedName = name.trim() || email.split('@')[0].split(/[._-]/).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    
    onLogin({
      email: email.trim(),
      name: derivedName,
      role: role,
      organization: org.trim() || 'SocialBridge Entity',
    });
  };

  return (
    <div className="min-h-screen bg-bg text-ink flex flex-col justify-between p-8 selection:bg-ink selection:text-bg">
      {/* Top Bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-ink rounded flex items-center justify-center">
            <LayoutGrid className="text-bg w-5 h-5" />
          </div>
          <h1 className="font-bold tracking-tighter text-xl">SOCIALBRIDGE</h1>
        </div>
        <div className="font-mono text-[10px] opacity-40 uppercase tracking-widest hidden sm:block">
          SECURE CHANNEL // MULTI-USER GATEWAY
        </div>
      </div>

      {/* Main Content Card Container */}
      <div className="w-full max-w-md mx-auto my-12 md:my-16 flex flex-col gap-8">
        <div className="border border-line rounded p-8 bg-white/40 shadow-sm flex flex-col gap-6">
          <div className="border-b border-line/15 pb-4">
            <h2 className="text-2xl font-bold tracking-tighter uppercase font-sans">Enterprise Portal</h2>
            <p className="text-xs font-serif italic opacity-60 mt-1">
              Sign in with your work email to access your isolated social profiles and phone assets securely.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-mono tracking-widest uppercase opacity-60">WORK EMAIL</label>
              <input
                type="email"
                required
                className="bg-transparent border border-line rounded p-2.5 text-sm font-mono focus:outline-none focus:ring-1 focus:ring-ink"
                placeholder="you@domain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-mono tracking-widest uppercase opacity-60">FULL NAME (OPTIONAL)</label>
              <input
                type="text"
                className="bg-transparent border border-line rounded p-2.5 text-sm font-mono focus:outline-none focus:ring-1 focus:ring-ink"
                placeholder="e.g. Samantha Jones"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-mono tracking-widest uppercase opacity-60">ROLE</label>
                <select
                  className="bg-transparent border border-line rounded p-2.5 text-xs font-mono focus:outline-none"
                  value={role}
                  onChange={(e) => setRole(e.target.value as any)}
                >
                  <option value="Operator">Operator</option>
                  <option value="Manager">Manager</option>
                  <option value="Administrator">Administrator</option>
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-mono tracking-widest uppercase opacity-60">ORGANIZATION</label>
                <input
                  type="text"
                  className="bg-transparent border border-line rounded p-2.5 text-xs font-mono focus:outline-none"
                  value={org}
                  onChange={(e) => setOrg(e.target.value)}
                />
              </div>
            </div>

            {error && (
              <div className="text-xs font-mono text-red-600 font-bold bg-red-50 p-2 rounded border border-red-200">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="mt-2 py-3 bg-ink text-bg font-mono text-xs font-bold rounded flex items-center justify-center gap-2 hover:opacity-95 transition-opacity active:scale-[0.99] uppercase tracking-wider cursor-pointer"
            >
              Sign In to Session
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>

        {/* Security / Separation Info Card */}
        <div className="border border-line/30 rounded p-4 bg-ink/[0.02] flex items-start gap-3">
          <Shield className="w-5 h-5 text-ink/40 mt-0.5 flex-shrink-0" />
          <div className="flex flex-col gap-1 text-[11px] leading-relaxed opacity-60 font-serif">
            <p className="font-sans font-bold uppercase tracking-wider text-[9px] opacity-80 mb-0.5">
              Secure Browser Isolation Warning
            </p>
            This dashboard uses client-specific session state storage. Signing in sets an isolated session for this browser only. Different devices or private tabs will start completely logged out to protect identity confidentiality.
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-col sm:flex-row justify-between items-center border-t border-line/10 pt-4 text-[10px] font-mono opacity-40 uppercase tracking-widest gap-2">
        <span>© 2026 SocialBridge Multi-User Gateway</span>
        <span>Secure Secure SSL Active // DB Encrypted</span>
      </div>
    </div>
  );
};
