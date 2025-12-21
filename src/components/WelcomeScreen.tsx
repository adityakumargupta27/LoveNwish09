import { useEffect, useState } from 'react';
import { Heart, Sparkles } from 'lucide-react';

interface WelcomeScreenProps {
  onComplete: () => void;
}

const WelcomeScreen = ({ onComplete }: WelcomeScreenProps) => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
      setTimeout(onComplete, 500);
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 romantic-gradient flex flex-col items-center justify-center z-40 transition-opacity duration-500 ${
        !isAnimating ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Sparkle decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <Sparkles
            key={i}
            className="absolute text-primary-foreground/40 animate-pulse-glow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
            size={16 + Math.random() * 16}
          />
        ))}
      </div>

      {/* Floating hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-accent/30 animate-float"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
            size={20 + Math.random() * 30}
            fill="currentColor"
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative text-center px-4 animate-welcome">
        <div className="mb-6">
          <Heart 
            className="w-16 h-16 md:w-20 md:h-20 text-primary-foreground mx-auto animate-pulse-glow" 
            fill="currentColor"
          />
        </div>
        
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-primary-foreground drop-shadow-lg mb-4">
          Happy Birthday
        </h1>
        
        <p className="font-display text-3xl md:text-4xl text-primary-foreground/90 mt-4">
          My Love ✨
        </p>

        {/* Decorative line */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <div className="h-px w-16 bg-primary-foreground/40" />
          <Heart className="w-4 h-4 text-primary-foreground/60" fill="currentColor" />
          <div className="h-px w-16 bg-primary-foreground/40" />
        </div>
      </div>

      {/* Bottom message */}
      <p className="absolute bottom-8 text-primary-foreground/70 font-body text-sm animate-pulse">
        Loading something special for you...
      </p>
    </div>
  );
};

export default WelcomeScreen;
