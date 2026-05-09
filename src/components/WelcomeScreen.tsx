import { useEffect, useState } from 'react';
import { Palette } from 'lucide-react';

interface WelcomeScreenProps {
  onComplete: () => void;
}

const WelcomeScreen = ({ onComplete }: WelcomeScreenProps) => {
  const [isAnimating, setIsAnimating] = useState(true);
  const [showSubtext, setShowSubtext] = useState(false);

  useEffect(() => {
    const subtextTimer = setTimeout(() => setShowSubtext(true), 1200);
    const timer = setTimeout(() => {
      setIsAnimating(false);
      setTimeout(onComplete, 600);
    }, 4500);

    return () => {
      clearTimeout(timer);
      clearTimeout(subtextTimer);
    };
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 flex flex-col items-center justify-center z-40 transition-opacity duration-600 ${
        !isAnimating ? 'opacity-0' : 'opacity-100'
      }`}
      style={{
        background: 'linear-gradient(135deg, hsl(40 40% 97%) 0%, hsl(38 50% 91%) 40%, hsl(35 35% 94%) 100%)',
      }}
    >
      {/* Rich sketch decorations */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        {/* Hand-drawn star */}
        <path d="M80 60 L85 50 L90 60 L100 55 L92 65 L100 75 L90 70 L85 80 L80 70 L70 75 L78 65 L70 55Z" 
              fill="none" stroke="hsl(var(--sketch-gold))" strokeWidth="1.5" opacity="0.25" />
        {/* Doodle circles */}
        <circle cx="85%" cy="20%" r="30" fill="none" stroke="hsl(var(--pencil))" strokeWidth="1" opacity="0.08" strokeDasharray="4 5" />
        <circle cx="12%" cy="75%" r="40" fill="none" stroke="hsl(var(--pencil))" strokeWidth="1" opacity="0.06" strokeDasharray="3 6" />
        {/* Wavy lines */}
        <path d="M0,85% Q 15%,82% 30%,85% T 60%,85% T 100%,82%" 
              fill="none" stroke="hsl(var(--pencil-light))" strokeWidth="1" opacity="0.1" strokeDasharray="8 6" />
        {/* Corner squiggles */}
        <path d="M20 30 Q 35 20, 50 30 Q 65 40, 80 30" fill="none" stroke="hsl(var(--pencil))" strokeWidth="1" opacity="0.06" />
      </svg>

      {/* Floating art supplies */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {['✏️', '📐', '🎨', '⭐', '🖌️', '📓', '🖍️', '💫', '✂️', '📎'].map((emoji, i) => (
          <span
            key={i}
            className="absolute animate-float select-none"
            style={{
              left: `${8 + Math.random() * 84}%`,
              top: `${8 + Math.random() * 84}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
              fontSize: `${1.5 + Math.random() * 1}rem`,
              opacity: 0.15,
            }}
          >
            {emoji}
          </span>
        ))}
      </div>

      {/* Main content */}
      <div className="relative text-center px-4 animate-welcome">
        {/* Notebook icon */}
        <div className="mb-6">
          <div className="w-20 h-20 md:w-24 md:h-24 mx-auto rounded-2xl bg-paper-warm/80 border-2 border-pencil/10 flex items-center justify-center shadow-lg rotate-6 animate-wiggle">
            <span className="text-5xl md:text-6xl">🎨</span>
          </div>
        </div>
        
        <h1 className="font-handwritten text-7xl md:text-9xl lg:text-[10rem] text-charcoal drop-shadow-sm mb-2" 
            style={{ lineHeight: 1.1 }}>
          Happy Birthday
        </h1>
        
        <div className={`transition-all duration-700 ${showSubtext ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="font-handwritten text-4xl md:text-5xl text-primary mt-2">
            Divya ✨
          </p>
          <p className="font-sketch text-xl md:text-2xl text-graphite mt-4">
            Someone sketched something for you. Scroll through.
          </p>
        </div>

        {/* Decorative pencil line */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <div className="h-[2px] w-16 bg-pencil/30 animate-draw-line" />
          <Palette className="w-5 h-5 text-primary/60" />
          <div className="h-[2px] w-16 bg-pencil/30 animate-draw-line" />
        </div>
      </div>

      {/* Bottom message */}
      <p className="absolute bottom-8 text-graphite/70 font-sketch text-base animate-pulse">
        Flipping through some pages...
      </p>
    </div>
  );
};

export default WelcomeScreen;
