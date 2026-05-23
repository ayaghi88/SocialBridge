import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { AccountList } from './components/AccountList';
import { PhoneNumberManager } from './components/PhoneNumberManager';
import { PostScheduler } from './components/PostScheduler';
import { EngagementStats } from './components/EngagementStats';
import { AuditLog } from './components/AuditLog';
import { LoginView } from './components/LoginView';
import { UserSession } from './types';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activeTab, setActiveTab] = useState('accounts');
  const [currentUser, setCurrentUser] = useState<UserSession | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load session from localStorage on mount (different for every device/client)
  useEffect(() => {
    try {
      const savedSession = localStorage.getItem('socialbridge_session');
      if (savedSession) {
        setCurrentUser(JSON.parse(savedSession));
      }
    } catch (e) {
      console.error('Error parsing session data:', e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleLogin = (session: UserSession) => {
    setCurrentUser(session);
    localStorage.setItem('socialbridge_session', JSON.stringify(session));
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('socialbridge_session');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'accounts': return <AccountList />;
      case 'phones': return <PhoneNumberManager />;
      case 'scheduler': return <PostScheduler />;
      case 'engagement': return <EngagementStats />;
      case 'audit': return <AuditLog currentUser={currentUser} />;
      default: return <AccountList />;
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-bg text-ink">
        <div className="font-mono text-xs uppercase tracking-widest animate-pulse">
          initializing terminal...
        </div>
      </div>
    );
  }

  if (!currentUser) {
    return <LoginView onLogin={handleLogin} />;
  }

  return (
    <div className="flex min-h-screen bg-bg text-ink selection:bg-ink selection:text-bg">
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        currentUser={currentUser}
        onLogout={handleLogout}
      />
      
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

