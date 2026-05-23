import React from 'react';
import { MOCK_POSTS, MOCK_ACCOUNTS } from '../constants';
import { Send, Clock, CheckCircle2 } from 'lucide-react';

export const PostScheduler = () => {
  return (
    <div className="flex flex-col h-full gap-8">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold tracking-tighter">SCHEDULER</h2>
          <p className="text-sm opacity-50 font-serif italic">Automated content distribution</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 flex flex-col gap-6">
          <div className="border border-line p-6 rounded bg-white/50">
            <h3 className="text-xs font-bold uppercase tracking-widest mb-6 opacity-50">New Scheduled Post</h3>
            <form className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-bold uppercase tracking-wider opacity-50">Select Account</label>
                <select className="bg-transparent border border-line rounded p-2 text-sm font-mono focus:outline-none focus:ring-1 focus:ring-ink">
                  {MOCK_ACCOUNTS.map(acc => (
                    <option key={acc.id} value={acc.id}>{acc.username} ({acc.platform})</option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-bold uppercase tracking-wider opacity-50">Content</label>
                <textarea 
                  className="bg-transparent border border-line rounded p-2 text-sm h-32 resize-none focus:outline-none focus:ring-1 focus:ring-ink"
                  placeholder="What's happening?"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-bold uppercase tracking-wider opacity-50">Schedule Time</label>
                <input 
                  type="datetime-local" 
                  className="bg-transparent border border-line rounded p-2 text-sm font-mono focus:outline-none focus:ring-1 focus:ring-ink"
                />
              </div>
              <button type="submit" className="mt-2 py-3 bg-ink text-bg text-xs font-bold rounded flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                <Send className="w-3 h-3" />
                SCHEDULE POST
              </button>
            </form>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="border border-line rounded overflow-hidden bg-white/50">
            <div className="p-4 border-b border-line bg-ink/5 flex justify-between items-center">
              <h3 className="text-xs font-bold uppercase tracking-widest opacity-50">Upcoming Queue</h3>
              <span className="text-[10px] font-mono opacity-50">{MOCK_POSTS.length} posts pending</span>
            </div>

            <div className="flex flex-col">
              {MOCK_POSTS.map((post) => {
                const account = MOCK_ACCOUNTS.find(a => a.id === post.accountId);
                return (
                  <div key={post.id} className="p-6 border-b border-line last:border-0 flex gap-6 hover:bg-ink/5 transition-colors">
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-10 h-10 rounded bg-ink/5 flex items-center justify-center">
                        <Clock className="w-5 h-5 opacity-30" />
                      </div>
                      <div className="h-full w-px bg-line/10" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex flex-col">
                          <span className="text-sm font-bold tracking-tight">@{account?.username}</span>
                          <span className="text-[10px] font-mono opacity-50 uppercase">{account?.platform}</span>
                        </div>
                        <span className="text-[10px] font-mono bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full font-bold uppercase tracking-widest">
                          {post.status}
                        </span>
                      </div>
                      <p className="text-sm opacity-80 leading-relaxed mb-4">"{post.content}"</p>
                      <div className="flex items-center gap-4 text-[10px] font-mono opacity-50 uppercase font-bold">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {new Date(post.scheduledTime).toLocaleString()}
                        </span>
                        <button className="underline hover:text-ink">Edit</button>
                        <button className="underline text-red-600 hover:text-red-800">Cancel</button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
