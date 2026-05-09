import { useState } from 'react';
import TypewriterText from './TypewriterText';
import { Button } from '@/components/ui/button';
import { Gift } from 'lucide-react';

interface CakeAnimationProps {
  onGiftClick: () => void;
}

const CakeAnimation = ({ onGiftClick }: CakeAnimationProps) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleCakeClick = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => setShowMessage(true), 2500);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 p-4 md:p-8">
      {/* Sketch-style Cake SVG */}
      <div 
        className="relative cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95"
        onClick={handleCakeClick}
      >
        <svg 
          viewBox="0 0 300 350" 
          className="w-56 h-64 md:w-72 md:h-80"
          aria-label="Birthday cake sketch animation"
        >
          {/* Paper background */}
          <rect x="10" y="10" width="280" height="330" rx="4" fill="hsl(var(--paper-warm))" opacity="0.5" />
          
          {/* Notebook lines */}
          {[...Array(10)].map((_, i) => (
            <line key={i} x1="20" y1={40 + i * 32} x2="280" y2={40 + i * 32} 
                  stroke="hsl(var(--watercolor-blue))" strokeWidth="0.5" opacity="0.2" />
          ))}

          {/* Cake plate */}
          <path 
            d={`M 40 310 Q 150 340, 260 310`}
            fill="none" 
            stroke="hsl(var(--pencil))"
            strokeWidth="2.5"
            strokeLinecap="round"
            className={`transition-all duration-700 ${isAnimating ? 'opacity-100' : 'opacity-30'}`}
            style={{ strokeDasharray: 400, strokeDashoffset: isAnimating ? 0 : 400, transition: 'stroke-dashoffset 1s ease-out' }}
          />
          
          {/* Bottom layer */}
          <path
            d="M 55 230 L 55 310 Q 56 312, 58 310 L 242 310 Q 244 312, 245 310 L 245 230 Q 243 228, 240 230 L 60 230 Q 57 228, 55 230Z"
            fill={isAnimating ? "hsl(var(--paper-warm))" : "none"}
            stroke="hsl(var(--pencil))"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`transition-all duration-1000 ease-out ${isAnimating ? 'opacity-100' : 'opacity-0'}`}
            style={{ strokeDasharray: 600, strokeDashoffset: isAnimating ? 0 : 600, transition: 'stroke-dashoffset 1.2s ease-out, opacity 0.5s' }}
          />
          
          {/* Crosshatch pattern */}
          {isAnimating && [...Array(8)].map((_, i) => (
            <line key={`hatch-${i}`}
              x1={70 + i * 22} y1="235" x2={80 + i * 22} y2="305"
              stroke="hsl(var(--pencil-light))" strokeWidth="0.8" opacity="0.3"
              className="transition-opacity duration-500"
              style={{ transitionDelay: `${800 + i * 50}ms` }}
            />
          ))}
          
          {/* Middle layer */}
          <path
            d="M 68 165 L 68 230 Q 69 232, 72 230 L 228 230 Q 231 232, 232 230 L 232 165 Q 230 163, 227 165 L 73 165 Q 70 163, 68 165Z"
            fill={isAnimating ? "hsl(var(--watercolor-amber) / 0.3)" : "none"}
            stroke="hsl(var(--pencil))"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`transition-all duration-1000 delay-500 ease-out ${isAnimating ? 'opacity-100' : 'opacity-0'}`}
            style={{ strokeDasharray: 500, strokeDashoffset: isAnimating ? 0 : 500, transition: 'stroke-dashoffset 1s ease-out 0.5s, opacity 0.5s 0.5s' }}
          />

          {/* Frosting drips */}
          <path
            d="M 68 165 Q 85 180, 100 165 Q 115 150, 130 170 Q 145 185, 160 165 Q 175 148, 190 168 Q 205 183, 220 165 Q 230 155, 232 165"
            fill="none"
            stroke="hsl(var(--sketch-gold))"
            strokeWidth="3"
            strokeLinecap="round"
            className={`transition-all duration-700 delay-700 ${isAnimating ? 'opacity-100' : 'opacity-0'}`}
            style={{ strokeDasharray: 300, strokeDashoffset: isAnimating ? 0 : 300, transition: 'stroke-dashoffset 1.2s ease-out 0.8s, opacity 0.3s 0.7s' }}
          />

          {/* Top layer */}
          <path
            d="M 82 110 L 82 165 Q 83 167, 86 165 L 214 165 Q 217 167, 218 165 L 218 110 Q 216 108, 213 110 L 87 110 Q 84 108, 82 110Z"
            fill={isAnimating ? "hsl(var(--watercolor-blue) / 0.15)" : "none"}
            stroke="hsl(var(--pencil))"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`transition-all duration-1000 delay-900 ease-out ${isAnimating ? 'opacity-100' : 'opacity-0'}`}
            style={{ strokeDasharray: 450, strokeDashoffset: isAnimating ? 0 : 450, transition: 'stroke-dashoffset 1s ease-out 0.9s, opacity 0.5s 0.9s' }}
          />

          {/* Candles */}
          {[110, 135, 150, 165, 190].map((x, i) => (
            <g key={i} className={`transition-all duration-500 ${isAnimating ? 'opacity-100' : 'opacity-0'}`}
               style={{ transitionDelay: `${1500 + i * 120}ms` }}>
              <rect
                x={x - 4}
                y="68"
                width="8"
                height="42"
                rx="2"
                fill="none"
                stroke={i % 2 === 0 ? "hsl(var(--sketch-teal))" : "hsl(var(--sketch-orange))"}
                strokeWidth="1.5"
              />
              <line x1={x - 3} y1="78" x2={x + 3} y2="78" 
                    stroke={i % 2 === 0 ? "hsl(var(--sketch-teal))" : "hsl(var(--sketch-orange))"} strokeWidth="0.8" />
              <line x1={x - 3} y1="88" x2={x + 3} y2="88" 
                    stroke={i % 2 === 0 ? "hsl(var(--sketch-teal))" : "hsl(var(--sketch-orange))"} strokeWidth="0.8" />
              <path
                d={`M ${x} 52 Q ${x + 6} 58, ${x} 68 Q ${x - 6} 58, ${x} 52Z`}
                fill="hsl(var(--sketch-gold))"
                opacity="0.8"
                className={isAnimating ? "animate-flicker" : ""}
                style={{ animationDelay: `${i * 120}ms` }}
              />
              <path
                d={`M ${x} 56 Q ${x + 3} 60, ${x} 64 Q ${x - 3} 60, ${x} 56Z`}
                fill="hsl(var(--sketch-orange))"
                opacity="0.9"
                className={isAnimating ? "animate-flicker" : ""}
                style={{ animationDelay: `${i * 120 + 60}ms` }}
              />
            </g>
          ))}

          {/* Star on top */}
          <path
            d="M 150 30 L 155 45 L 170 45 L 158 55 L 163 70 L 150 60 L 137 70 L 142 55 L 130 45 L 145 45Z"
            fill="hsl(var(--sketch-gold))"
            stroke="hsl(var(--pencil))"
            strokeWidth="1.5"
            fillOpacity="0.6"
            className={`transition-all duration-500 delay-[2200ms] ${isAnimating ? 'opacity-100' : 'opacity-0'}`}
          />

          {/* HBD text */}
          <text
            x="150" y="200"
            textAnchor="middle"
            fontFamily="'Caveat', cursive"
            fontSize="22"
            fill="hsl(var(--pencil))"
            opacity={isAnimating ? 0.6 : 0}
            className="transition-opacity duration-500"
            style={{ transitionDelay: '1800ms' }}
          >
            HBD! 🎂
          </text>
        </svg>

        {!isAnimating && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-card/90 backdrop-blur-sm rounded-xl px-6 py-3 shadow-md border border-pencil/10 animate-pulse-glow">
              <p className="font-sketch text-foreground text-base">Tap to sketch the cake! ✏️</p>
            </div>
          </div>
        )}
      </div>

      {/* Message */}
      <div className="text-center lg:text-left max-w-md">
        {showMessage ? (
          <div className="space-y-6">
            <div className="min-h-[80px]">
              <TypewriterText 
                text="Make a wish."
                delay={120}
                className="font-handwritten text-5xl md:text-6xl lg:text-7xl text-charcoal"
              />
            </div>
            
            <p className="font-sketch text-graphite text-lg animate-fade-in-up" style={{ animationDelay: '2s' }}>
              (But not out loud. Keep it to yourself. That's how wishes work.)
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '3s' }}>
              <Button variant="sketch" size="lg" onClick={onGiftClick}>
                <Gift className="w-5 h-5 mr-2" />
                Wait, there's a gift too?
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-4 opacity-50">
            <span className="text-4xl mx-auto lg:mx-0 block w-fit animate-wiggle">✏️</span>
            <p className="font-sketch text-graphite text-lg">
              Tap the canvas to sketch something...
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CakeAnimation;
