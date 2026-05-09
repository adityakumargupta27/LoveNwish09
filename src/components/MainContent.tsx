import { useState } from 'react';
import { Pencil, BookOpen, Palette, Image, Cake, Star } from 'lucide-react';
import FloatingDecorations from './FloatingDecorations';
import FriendLetterTab from './tabs/FriendLetterTab';
import MusicTab from './tabs/MusicTab';
import MemoriesTab from './tabs/MemoriesTab';
import GalleryTab from './tabs/GalleryTab';
import CakeTab from './tabs/CakeTab';

const tabs = [
  { id: 'cake', label: 'Birthday Cake', icon: Cake },
  { id: 'letter', label: 'A Letter', icon: BookOpen },
  { id: 'gallery', label: 'Gallery', icon: Image },
  { id: 'memories', label: 'Memories', icon: Star },
  { id: 'music', label: 'Playlist', icon: Palette },
];

const MainContent = () => {
  const [activeTab, setActiveTab] = useState('cake');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'letter':
        return <FriendLetterTab />;
      case 'cake':
        return <CakeTab />;
      case 'music':
        return <MusicTab />;
      case 'memories':
        return <MemoriesTab />;
      case 'gallery':
        return <GalleryTab />;
      default:
        return <CakeTab />;
    }
  };

  return (
    <div className="min-h-screen paper-gradient relative">
      <FloatingDecorations />
      
      {/* Header */}
      <header className="relative z-10 pt-6 pb-4 px-4 text-center">
        <div className="flex items-center justify-center gap-3 mb-2">
          <span className="text-2xl animate-wiggle inline-block">🎨</span>
          <h1 className="font-handwritten text-4xl md:text-5xl text-charcoal">
            Happy Birthday, Bestie!
          </h1>
          <span className="text-2xl animate-wiggle inline-block" style={{animationDelay: '0.5s'}}>✏️</span>
        </div>
        <p className="text-graphite font-sketch text-base">
          A little something sketched with love, from your class 6D benchmate 📚
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
                className={`flex items-center gap-2 px-4 py-3 rounded-xl font-sketch text-base whitespace-nowrap transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-primary text-primary-foreground shadow-md scale-105 -rotate-1'
                    : 'bg-card/80 text-foreground hover:bg-paper-warm hover:scale-102 border border-pencil/10'
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
      <footer className="fixed bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-background/90 to-transparent p-4">
        <p className="text-center text-graphite/50 font-sketch text-sm">
          Sketched with ✏️ & 💛 by your benchmate
        </p>
      </footer>
    </div>
  );
};

export default MainContent;
