import { Heart } from 'lucide-react';

const FloatingDecorations = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Floating hearts */}
      {[...Array(8)].map((_, i) => (
        <Heart
          key={`heart-${i}`}
          className="absolute text-primary/10 animate-float-up"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 15}s`,
            animationDuration: `${20 + Math.random() * 10}s`,
          }}
          size={20 + Math.random() * 20}
          fill="currentColor"
        />
      ))}

      {/* Teddy bear emojis */}
      {[...Array(4)].map((_, i) => (
        <span
          key={`teddy-${i}`}
          className="absolute text-2xl animate-float opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${8 + Math.random() * 6}s`,
          }}
        >
          🧸
        </span>
      ))}

      {/* Small sparkle dots */}
      {[...Array(15)].map((_, i) => (
        <div
          key={`sparkle-${i}`}
          className="absolute w-1 h-1 rounded-full bg-primary/20 animate-pulse-glow"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingDecorations;
