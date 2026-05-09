const FloatingDecorations = () => {
  const sketchItems = ['✏️', '📐', '🖍️', '📎', '🎨', '💫', '⭐', '📓', '🖌️', '✂️'];
  
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Floating art supply emojis */}
      {sketchItems.map((item, i) => (
        <span
          key={`sketch-${i}`}
          className="absolute animate-float-up select-none"
          style={{
            left: `${5 + Math.random() * 90}%`,
            animationDelay: `${Math.random() * 25}s`,
            animationDuration: `${20 + Math.random() * 15}s`,
            fontSize: `${1 + Math.random() * 0.8}rem`,
            opacity: 0.12,
          }}
        >
          {item}
        </span>
      ))}

      {/* Subtle doodle dots — more of them */}
      {[...Array(30)].map((_, i) => (
        <div
          key={`dot-${i}`}
          className="absolute rounded-full bg-pencil/6 animate-pulse-glow"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${2 + Math.random() * 3}px`,
            height: `${2 + Math.random() * 3}px`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}

      {/* Rich hand-drawn SVG background layer */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 3000">
        {/* Scattered pencil marks */}
        <line x1="70" y1="150" x2="170" y2="130" stroke="hsl(var(--pencil))" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="1250" y1="220" x2="1330" y2="250" stroke="hsl(var(--pencil))" strokeWidth="1" strokeLinecap="round" />
        <line x1="1050" y1="780" x2="1150" y2="750" stroke="hsl(var(--pencil))" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="200" y1="1200" x2="280" y2="1180" stroke="hsl(var(--pencil))" strokeWidth="1" strokeLinecap="round" />
        <line x1="1200" y1="1600" x2="1300" y2="1580" stroke="hsl(var(--pencil))" strokeWidth="1" strokeLinecap="round" />
        
        {/* Doodle circles scattered throughout */}
        <circle cx="280" cy="350" r="25" fill="none" stroke="hsl(var(--pencil))" strokeWidth="1" strokeDasharray="3 4" />
        <circle cx="1190" cy="500" r="35" fill="none" stroke="hsl(var(--pencil))" strokeWidth="1" strokeDasharray="4 5" />
        <circle cx="140" cy="900" r="20" fill="none" stroke="hsl(var(--sketch-gold))" strokeWidth="0.8" />
        <circle cx="1100" cy="1100" r="28" fill="none" stroke="hsl(var(--pencil))" strokeWidth="1" strokeDasharray="3 6" />
        <circle cx="200" cy="1800" r="18" fill="none" stroke="hsl(var(--pencil))" strokeWidth="1" strokeDasharray="4 4" />
        <circle cx="1250" cy="2200" r="30" fill="none" stroke="hsl(var(--sketch-gold))" strokeWidth="1" strokeDasharray="3 5" />
        <circle cx="350" cy="2600" r="22" fill="none" stroke="hsl(var(--pencil))" strokeWidth="1" />
        
        {/* Squiggly lines */}
        <path d="M 840 50 Q 860 35, 880 50 T 920 50 T 960 50" fill="none" stroke="hsl(var(--pencil))" strokeWidth="0.8" />
        <path d="M 420 920 Q 440 905, 460 920 T 500 920" fill="none" stroke="hsl(var(--pencil))" strokeWidth="0.8" />
        <path d="M 100 1500 Q 120 1485, 140 1500 T 180 1500 T 220 1500" fill="none" stroke="hsl(var(--pencil))" strokeWidth="0.8" />
        <path d="M 900 2000 Q 920 1985, 940 2000 T 980 2000" fill="none" stroke="hsl(var(--pencil))" strokeWidth="0.8" />
        
        {/* Small stars */}
        <path d="M700 200 L705 190 L710 200 L720 195 L712 205 L720 215 L710 210 L705 220 L700 210 L690 215 L698 205 L690 195Z" 
              fill="none" stroke="hsl(var(--sketch-gold))" strokeWidth="1" />
        <path d="M100 650 L105 640 L110 650 L120 645 L112 655 L120 665 L110 660 L105 670 L100 660 L90 665 L98 655 L90 645Z" 
              fill="none" stroke="hsl(var(--sketch-gold))" strokeWidth="1" />
        <path d="M1300 1300 L1305 1290 L1310 1300 L1320 1295 L1312 1305 L1320 1315 L1310 1310 L1305 1320 L1300 1310 L1290 1315 L1298 1305 L1290 1295Z" 
              fill="none" stroke="hsl(var(--sketch-gold))" strokeWidth="1" />
        
        {/* Small crosses */}
        <path d="M500 400 L510 410 M510 400 L500 410" stroke="hsl(var(--pencil))" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M1000 700 L1010 710 M1010 700 L1000 710" stroke="hsl(var(--pencil))" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M300 1400 L310 1410 M310 1400 L300 1410" stroke="hsl(var(--pencil))" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M800 1900 L810 1910 M810 1900 L800 1910" stroke="hsl(var(--pencil))" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M600 2500 L610 2510 M610 2500 L600 2510" stroke="hsl(var(--pencil))" strokeWidth="1.5" strokeLinecap="round" />
        
        {/* Small diamonds */}
        <path d="M350 100 L360 90 L370 100 L360 110Z" fill="none" stroke="hsl(var(--sketch-gold))" strokeWidth="0.8" />
        <path d="M1150 400 L1160 390 L1170 400 L1160 410Z" fill="none" stroke="hsl(var(--pencil))" strokeWidth="0.8" />
        <path d="M250 2100 L260 2090 L270 2100 L260 2110Z" fill="none" stroke="hsl(var(--sketch-gold))" strokeWidth="0.8" />
        
        {/* Tiny triangles */}
        <path d="M900 150 L910 135 L920 150Z" fill="none" stroke="hsl(var(--pencil))" strokeWidth="0.8" />
        <path d="M150 1100 L160 1085 L170 1100Z" fill="none" stroke="hsl(var(--sketch-gold))" strokeWidth="0.8" />
        <path d="M1100 1800 L1110 1785 L1120 1800Z" fill="none" stroke="hsl(var(--pencil))" strokeWidth="0.8" />
        
        {/* Dot clusters */}
        <circle cx="600" cy="600" r="2" fill="hsl(var(--pencil))" />
        <circle cx="610" cy="605" r="1.5" fill="hsl(var(--pencil))" />
        <circle cx="595" cy="610" r="1" fill="hsl(var(--pencil))" />
        
        <circle cx="1000" cy="1200" r="2" fill="hsl(var(--pencil))" />
        <circle cx="1010" cy="1205" r="1.5" fill="hsl(var(--pencil))" />
        <circle cx="995" cy="1195" r="1" fill="hsl(var(--pencil))" />
        
        <circle cx="400" cy="2000" r="2" fill="hsl(var(--pencil))" />
        <circle cx="410" cy="2005" r="1.5" fill="hsl(var(--pencil))" />
        <circle cx="395" cy="1995" r="1" fill="hsl(var(--pencil))" />
      </svg>
    </div>
  );
};

export default FloatingDecorations;
