import { useState } from 'react';
import { Heart, Mail, Music, StickyNote, Image, Cake } from 'lucide-react';
import FloatingDecorations from './FloatingDecorations';
import LoveLetterTab from './tabs/LoveLetterTab';
import MusicTab from './tabs/MusicTab';
import NotesTab from './tabs/NotesTab';
import GalleryTab from './tabs/GalleryTab';
import CakeTab from './tabs/CakeTab';

const tabs = [
  { id: 'letter', label: 'Love Letter', icon: Mail },
  { id: 'cake', label: 'Cake', icon: Cake },
  { id: 'music', label: 'Music', icon: Music },
  { id: 'notes', label: 'Notes', icon: StickyNote },
  { id: 'gallery', label: 'Gallery', icon: Image },
];

const MainContent = () => {
  const [activeTab, setActiveTab] = useState('cake');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'letter':
        return <LoveLetterTab />;
      case 'cake':
        return <CakeTab />;
      case 'music':
        return <MusicTab />;
      case 'notes':
        return <NotesTab />;
      case 'gallery':
        return <GalleryTab />;
      default:
        return <CakeTab />;
    }
  };

  return (
    <div className="min-h-screen romantic-gradient relative">
      <FloatingDecorations />
      
      {/* Header */}
      <header className="relative z-10 pt-6 pb-4 px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Heart className="w-6 h-6 text-primary" fill="currentColor" />
          <h1 className="font-display text-3xl md:text-4xl text-foreground">
            Happy Birthday
          </h1>
          <Heart className="w-6 h-6 text-primary" fill="currentColor" />
        </div>
        <p className="text-muted-foreground font-body text-sm">
          A special celebration just for you 💕
        </p>
      </header>

      {/* Tab navigation */}
      <nav className="relative z-10 px-4 mb-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-2xl font-body text-sm whitespace-nowrap transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                    : 'bg-card/80 text-foreground hover:bg-card hover:scale-102'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Tab content */}
      <main className="relative z-10 pb-20">
        <div key={activeTab} className="animate-fade-in">
          {renderTabContent()}
        </div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-background/80 to-transparent p-4">
        <p className="text-center text-muted-foreground/60 font-body text-xs">
          Made with 💕 just for you
        </p>
      </footer>
    </div>
  );
};

export default MainContent;
