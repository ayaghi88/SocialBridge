import React from 'react';
import { MOCK_ACCOUNTS } from '../constants';
import { Twitter, Instagram, Linkedin, Facebook, Youtube, Music2 } from 'lucide-react';

const PlatformIcon = ({ platform }: { platform: string }) => {
  switch (platform) {
    case 'Twitter': return <Twitter className="w-4 h-4" />;
    case 'Instagram': return <Instagram className="w-4 h-4" />;
    case 'LinkedIn': return <Linkedin className="w-4 h-4" />;
    case 'Facebook': return <Facebook className="w-4 h-4" />;
    case 'YouTube': return <Youtube className="w-4 h-4" />;
    case 'TikTok': return <Music2 className="w-4 h-4" />;
    default: return null;
  }
};

export const AccountList = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tighter">ACCOUNTS</h2>
          <p className="text-sm opacity-50 font-serif italic">Managing 20 corporate profiles</p>
        </div>
        <button className="px-4 py-2 bg-ink text-bg text-xs font-bold rounded hover:opacity-90 transition-opacity">
          + ADD ACCOUNT
        </button>
      </div>

      <div className="border border-line rounded overflow-hidden bg-white/50">
        <div className="grid grid-cols-[40px_1.5fr_1fr_1fr_1fr] p-4 border-b border-line bg-ink/5">
          <div className="col-header"></div>
          <div className="col-header">Username</div>
          <div className="col-header">Platform</div>
          <div className="col-header">Status</div>
          <div className="col-header">Created At</div>
        </div>

        {MOCK_ACCOUNTS.map((account) => (
          <div key={account.id} className="data-row">
            <div className="flex items-center justify-center">
              <PlatformIcon platform={account.platform} />
            </div>
            <div className="data-value font-bold">{account.username}</div>
            <div className="data-value opacity-70">{account.platform}</div>
            <div className="flex items-center">
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-widest ${
                account.status === 'Active' ? 'bg-emerald-100 text-emerald-800' :
                account.status === 'Flagged' ? 'bg-amber-100 text-amber-800' :
                'bg-red-100 text-red-800'
              }`}>
                {account.status}
              </span>
            </div>
            <div className="data-value opacity-50">{account.createdAt}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
