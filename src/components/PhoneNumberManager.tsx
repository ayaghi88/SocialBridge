import React from 'react';
import { MOCK_PHONES } from '../constants';
import { Phone, ShieldCheck, AlertCircle } from 'lucide-react';

export const PhoneNumberManager = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tighter">PHONE NUMBERS</h2>
          <p className="text-sm opacity-50 font-serif italic">Temporary verification assets</p>
        </div>
        <button className="px-4 py-2 bg-ink text-bg text-xs font-bold rounded hover:opacity-90 transition-opacity">
          PROVISION NEW
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_PHONES.map((phone) => (
          <div key={phone.id} className="border border-line p-6 rounded bg-white/50 flex flex-col gap-4 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start">
              <div className="p-2 bg-ink/5 rounded">
                <Phone className="w-5 h-5" />
              </div>
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-widest ${
                phone.status === 'Active' ? 'bg-emerald-100 text-emerald-800' :
                phone.status === 'Pending' ? 'bg-amber-100 text-amber-800' :
                'bg-red-100 text-red-800'
              }`}>
                {phone.status}
              </span>
            </div>

            <div>
              <div className="text-xl font-mono font-bold">{phone.number}</div>
              <div className="text-[10px] opacity-50 uppercase font-bold tracking-wider mt-1">
                {phone.country} • {phone.provider}
              </div>
            </div>

            <div className="mt-auto pt-4 border-t border-line/10 flex justify-between items-center">
              <div className="flex items-center gap-2 text-xs opacity-60">
                <ShieldCheck className="w-3 h-3" />
                <span>Expires: {phone.expiresAt}</span>
              </div>
              <button className="text-[10px] font-bold underline uppercase hover:text-ink/70">
                Renew
              </button>
            </div>
          </div>
        ))}

        <div className="border border-dashed border-line/40 p-6 rounded flex flex-col items-center justify-center gap-2 opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
          <AlertCircle className="w-8 h-8" />
          <span className="text-xs font-bold uppercase tracking-widest">Request Bulk Provision</span>
        </div>
      </div>
    </div>
  );
};
