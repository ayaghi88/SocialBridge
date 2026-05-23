import React from 'react';
import { MOCK_AUDIT_LOG } from '../constants';
import { UserSession } from '../types';

interface AuditLogProps {
  currentUser: UserSession | null;
}

export const AuditLog = ({ currentUser }: AuditLogProps) => {
  // Prepend a dynamic live session action to the audit logs
  const dynamicLogs = currentUser ? [
    {
      id: 'dynamic-session',
      timestamp: new Date().toISOString().replace('T', ' ').substring(0, 19),
      user: currentUser.email,
      action: 'Session Started',
      details: `User ${currentUser.name} signed in as ${currentUser.role} on ${currentUser.organization} portal.`
    },
    ...MOCK_AUDIT_LOG
  ] : MOCK_AUDIT_LOG;

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tighter">AUDIT LOG</h2>
          <p className="text-sm opacity-50 font-serif italic">System activity and security trail (Isolated session)</p>
        </div>
        <button className="px-4 py-2 border border-line text-xs font-bold rounded hover:bg-ink hover:text-bg transition-colors">
          EXPORT CSV
        </button>
      </div>

      <div className="border border-line rounded overflow-hidden bg-white/50">
        <div className="grid grid-cols-[1.5fr_1fr_1.5fr_2fr] p-4 border-b border-line bg-ink/5">
          <div className="col-header">Timestamp</div>
          <div className="col-header">User</div>
          <div className="col-header">Action</div>
          <div className="col-header">Details</div>
        </div>

        {dynamicLogs.map((entry) => (
          <div key={entry.id} className="grid grid-cols-[1.5fr_1fr_1.5fr_2fr] p-4 border-b border-line transition-colors duration-200 hover:bg-ink/5">
            <div className="data-value opacity-50">{entry.timestamp}</div>
            <div className="data-value font-bold truncate max-w-[150px]" title={entry.user}>{entry.user}</div>
            <div className="data-value">
              <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                entry.action === 'Session Started' ? 'bg-emerald-100 text-emerald-800' : 'bg-ink/10 text-ink'
              }`}>
                {entry.action}
              </span>
            </div>
            <div className="data-value opacity-70 italic font-serif text-xs">{entry.details}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

