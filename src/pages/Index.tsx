import { useState } from 'react';
import WelcomeScreen from '@/components/WelcomeScreen';
import ScrollExperience from '@/components/ScrollExperience';

type AppState = 'welcome' | 'main';

const Index = () => {
  const [appState, setAppState] = useState<AppState>('welcome');

  const handleWelcomeComplete = () => {
    setAppState('main');
  };

  return (
    <>
      {appState === 'welcome' && (
        <WelcomeScreen onComplete={handleWelcomeComplete} />
      )}
      
      {appState === 'main' && (
        <ScrollExperience />
      )}
    </>
  );
};

export default Index;
