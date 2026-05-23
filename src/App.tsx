import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { AccountList } from './components/AccountList';
import { PhoneNumberManager } from './components/PhoneNumberManager';
import { PostScheduler } from './components/PostScheduler';
import { EngagementStats } from './components/EngagementStats';
import { AuditLog } from './components/AuditLog';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activeTab, setActiveTab] = useState('accounts');

  const renderContent = () => {
    switch (activeTab) {
      case 'accounts': return <AccountList />;
      case 'phones': return <PhoneNumberManager />;
      case 'scheduler': return <PostScheduler />;
      case 'engagement': return <EngagementStats />;
      case 'audit': return <AuditLog />;
      default: return <AccountList />;
    }
  };

  return (
    <div className="flex min-h-screen bg-bg text-ink selection:bg-ink selection:text-bg">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1 p-12 overflow-y-auto max-w-7xl mx-auto w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="h-full"
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
