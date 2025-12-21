import { useState } from 'react';
import PasswordModal from '@/components/PasswordModal';
import WelcomeScreen from '@/components/WelcomeScreen';
import MainContent from '@/components/MainContent';

type AppState = 'password' | 'welcome' | 'main';

const Index = () => {
  const [appState, setAppState] = useState<AppState>('password');

  const handlePasswordSuccess = () => {
    setAppState('welcome');
  };

  const handleWelcomeComplete = () => {
    setAppState('main');
  };

  return (
    <>
      {appState === 'password' && (
        <PasswordModal onSuccess={handlePasswordSuccess} />
      )}
      
      {appState === 'welcome' && (
        <WelcomeScreen onComplete={handleWelcomeComplete} />
      )}
      
      {appState === 'main' && (
        <MainContent />
      )}
    </>
  );
};

export default Index;
