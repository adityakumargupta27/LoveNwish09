import { useState } from 'react';
import TypewriterText from './TypewriterText';
import { Button } from '@/components/ui/button';
import { Gift, Heart } from 'lucide-react';

interface CakeAnimationProps {
  onGiftClick: () => void;
}

const CakeAnimation = ({ onGiftClick }: CakeAnimationProps) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleCakeClick = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => setShowMessage(true), 2000);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 p-4 md:p-8">
      {/* Cake SVG */}
      <div 
        className="relative cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95"
        onClick={handleCakeClick}
      >
        <svg 
          viewBox="0 0 300 350" 
          className="w-64 h-72 md:w-80 md:h-96"
          aria-label="Birthday cake animation"
        >
          {/* Cake plate */}
          <ellipse 
            cx="150" 
            cy="320" 
            rx="130" 
            ry="20" 
            fill="hsl(var(--pink-medium))"
            className="drop-shadow-lg"
          />
          
          {/* Bottom layer */}
          <rect
            x="40"
            y={isAnimating ? "240" : "300"}
            width="220"
            height="80"
            rx="10"
            fill="hsl(var(--pink-soft))"
            className={`transition-all duration-1000 ease-out ${isAnimating ? 'opacity-100' : 'opacity-0'}`}
            style={{ 
              transformOrigin: 'bottom',
              transform: isAnimating ? 'scaleY(1)' : 'scaleY(0)'
            }}
          />
          
          {/* Bottom cream layer */}
          <ellipse
            cx="150"
            cy={isAnimating ? "240" : "300"}
            rx="115"
            ry="15"
            fill="hsl(var(--cream))"
            className={`transition-all duration-700 delay-300 ${isAnimating ? 'opacity-100' : 'opacity-0'}`}
          />
          
          {/* Middle layer */}
          <rect
            x="55"
            y={isAnimating ? "170" : "250"}
            width="190"
            height="70"
            rx="10"
            fill="hsl(var(--pink-medium))"
            className={`transition-all duration-1000 delay-500 ease-out ${isAnimating ? 'opacity-100' : 'opacity-0'}`}
          />
          
          {/* Middle cream layer */}
          <ellipse
            cx="150"
            cy={isAnimating ? "170" : "250"}
            rx="100"
            ry="12"
            fill="hsl(var(--cream))"
            className={`transition-all duration-700 delay-700 ${isAnimating ? 'opacity-100' : 'opacity-0'}`}
          />
          
          {/* Top layer */}
          <rect
            x="70"
            y={isAnimating ? "110" : "200"}
            width="160"
            height="60"
            rx="10"
            fill="hsl(var(--pink-deep))"
            className={`transition-all duration-1000 delay-900 ease-out ${isAnimating ? 'opacity-100' : 'opacity-0'}`}
          />
          
          {/* Top cream and decorations */}
          <ellipse
            cx="150"
            cy={isAnimating ? "110" : "200"}
            rx="85"
            ry="10"
            fill="hsl(var(--cream))"
            className={`transition-all duration-700 delay-1100 ${isAnimating ? 'opacity-100' : 'opacity-0'}`}
          />
          
          {/* Frosting drips */}
          {[80, 110, 140, 170, 200].map((x, i) => (
            <ellipse
              key={i}
              cx={x}
              cy={isAnimating ? "125" : "210"}
              rx="8"
              ry={12 + (i % 2) * 5}
              fill="hsl(var(--cream))"
              className={`transition-all duration-500 ${isAnimating ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: `${1200 + i * 100}ms` }}
            />
          ))}
          
          {/* Candles */}
          {[100, 130, 150, 170, 200].map((x, i) => (
            <g key={i} className={`transition-all duration-500 ${isAnimating ? 'opacity-100' : 'opacity-0'}`}
               style={{ transitionDelay: `${1500 + i * 100}ms` }}>
              {/* Candle body */}
              <rect
                x={x - 4}
                y={isAnimating ? "70" : "160"}
                width="8"
                height="40"
                rx="2"
                fill={i % 2 === 0 ? "hsl(var(--teal-accent))" : "hsl(var(--accent))"}
              />
              {/* Flame */}
              <ellipse
                cx={x}
                cy={isAnimating ? "60" : "150"}
                rx="8"
                ry="12"
                fill="#FFD700"
                className={isAnimating ? "animate-flicker" : ""}
                style={{ animationDelay: `${i * 100}ms` }}
              />
              <ellipse
                cx={x}
                cy={isAnimating ? "58" : "148"}
                rx="4"
                ry="7"
                fill="#FF6B35"
                className={isAnimating ? "animate-flicker" : ""}
                style={{ animationDelay: `${i * 100 + 50}ms` }}
              />
            </g>
          ))}
          
          {/* Cherry on top */}
          <circle
            cx="150"
            cy={isAnimating ? "95" : "185"}
            r="12"
            fill="hsl(var(--accent))"
            className={`transition-all duration-500 delay-[2000ms] ${isAnimating ? 'opacity-100' : 'opacity-0'}`}
          />
          <ellipse
            cx="154"
            cy={isAnimating ? "91" : "181"}
            rx="4"
            ry="3"
            fill="white"
            fillOpacity="0.5"
            className={`transition-all duration-500 delay-[2000ms] ${isAnimating ? 'opacity-100' : 'opacity-0'}`}
          />
        </svg>

        {!isAnimating && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-card/90 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-lg animate-pulse-glow">
              <p className="font-body text-foreground text-sm md:text-base">Tap to bake! 🎂</p>
            </div>
          </div>
        )}
      </div>

      {/* Message section */}
      <div className="text-center lg:text-left max-w-md">
        {showMessage ? (
          <div className="space-y-6">
            <div className="min-h-[100px]">
              <TypewriterText 
                text="Happy Birthday, My Love!"
                delay={120}
                className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground"
              />
            </div>
            
            <p className="font-body text-muted-foreground text-lg animate-fade-in" style={{ animationDelay: '3s' }}>
              Every moment with you is a blessing. Here's to another year of love, laughter, and beautiful memories together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '4s' }}>
              <Button variant="romantic" size="lg" onClick={onGiftClick}>
                <Gift className="w-5 h-5 mr-2" />
                Here's a gift for you, cutie
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-4 opacity-50">
            <Heart className="w-12 h-12 text-primary mx-auto lg:mx-0 animate-pulse" />
            <p className="font-body text-muted-foreground">
              Click on the cake to see something magical...
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CakeAnimation;
