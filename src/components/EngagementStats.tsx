import React from 'react';
import { MOCK_ENGAGEMENT } from '../constants';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

export const EngagementStats = () => {
  return (
    <div className="flex flex-col h-full gap-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tighter">ENGAGEMENT</h2>
        <p className="text-sm opacity-50 font-serif italic">Cross-platform performance analytics</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="border border-line p-6 rounded bg-white/50">
          <h3 className="text-xs font-bold uppercase tracking-widest mb-6 opacity-50">Likes Growth</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={MOCK_ENGAGEMENT}>
                <defs>
                  <linearGradient id="colorLikes" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#141414" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#141414" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#14141420" />
                <XAxis 
                  dataKey="date" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fontFamily: 'JetBrains Mono' }}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fontFamily: 'JetBrains Mono' }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#141414', 
                    border: 'none', 
                    borderRadius: '4px',
                    color: '#E4E3E0',
                    fontSize: '12px',
                    fontFamily: 'JetBrains Mono'
                  }}
                  itemStyle={{ color: '#E4E3E0' }}
                />
                <Area type="monotone" dataKey="likes" stroke="#141414" fillOpacity={1} fill="url(#colorLikes)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="border border-line p-6 rounded bg-white/50">
          <h3 className="text-xs font-bold uppercase tracking-widest mb-6 opacity-50">Shares & Comments</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={MOCK_ENGAGEMENT}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#14141420" />
                <XAxis 
                  dataKey="date" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fontFamily: 'JetBrains Mono' }}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fontFamily: 'JetBrains Mono' }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#141414', 
                    border: 'none', 
                    borderRadius: '4px',
                    color: '#E4E3E0',
                    fontSize: '12px',
                    fontFamily: 'JetBrains Mono'
                  }}
                />
                <Line type="monotone" dataKey="shares" stroke="#141414" strokeWidth={2} dot={{ r: 4, fill: '#141414' }} />
                <Line type="monotone" dataKey="comments" stroke="#141414" strokeWidth={2} strokeDasharray="5 5" dot={{ r: 4, fill: '#141414' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { label: 'Total Reach', value: '1.2M', change: '+12%' },
          { label: 'Avg Engagement', value: '4.8%', change: '+0.5%' },
          { label: 'Active Profiles', value: '18/20', change: 'Stable' },
          { label: 'Posts This Week', value: '142', change: '+24' },
        ].map((stat, idx) => (
          <div key={idx} className="border border-line p-6 rounded bg-white/50">
            <div className="text-[10px] font-bold uppercase tracking-widest opacity-50 mb-1">{stat.label}</div>
            <div className="text-2xl font-bold tracking-tighter">{stat.value}</div>
            <div className="text-[10px] font-mono mt-2 text-emerald-600 font-bold">{stat.change}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
