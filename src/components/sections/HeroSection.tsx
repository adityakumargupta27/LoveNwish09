const HeroSection = () => {
  return (
    <section 
      id="hero" 
      data-section="hero"
      className="min-h-screen flex flex-col items-center justify-center relative px-4 py-20 overflow-hidden"
    >
      {/* Notebook-style background lines */}
      <div className="absolute inset-0 notebook-lines opacity-20 pointer-events-none" />
      
      {/* Rich corner doodles — top left */}
      <svg className="absolute top-6 left-6 w-32 h-32 opacity-[0.07]" viewBox="0 0 120 120">
        <path d="M10 10 Q 30 5, 50 15 Q 70 25, 90 10" fill="none" stroke="hsl(var(--pencil))" strokeWidth="2" strokeLinecap="round" />
        <path d="M15 30 Q 40 22, 65 35" fill="none" stroke="hsl(var(--pencil))" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="100" cy="30" r="8" fill="none" stroke="hsl(var(--sketch-gold))" strokeWidth="1.5" strokeDasharray="3 3" />
        <path d="M5 50 L15 45 L12 55 L22 50 L18 60" fill="none" stroke="hsl(var(--pencil))" strokeWidth="1" strokeLinecap="round" />
      </svg>

      {/* Top right doodle cluster */}
      <svg className="absolute top-10 right-10 w-40 h-40 opacity-[0.06]" viewBox="0 0 150 150">
        <circle cx="40" cy="40" r="25" fill="none" stroke="hsl(var(--pencil))" strokeWidth="1.5" strokeDasharray="4 6" />
        <circle cx="40" cy="40" r="12" fill="none" stroke="hsl(var(--sketch-gold))" strokeWidth="1" />
        <path d="M80 20 L90 10 L100 20 L110 10" fill="none" stroke="hsl(var(--pencil))" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M90 60 Q 110 50, 130 65 Q 140 75, 120 80" fill="none" stroke="hsl(var(--pencil))" strokeWidth="1" strokeLinecap="round" />
        <path d="M70 90 L75 80 L80 90 L85 80 L90 90" fill="none" stroke="hsl(var(--sketch-gold))" strokeWidth="1" strokeLinecap="round" />
      </svg>

      {/* Bottom left doodles */}
      <svg className="absolute bottom-20 left-8 w-36 h-36 opacity-[0.06]" viewBox="0 0 140 140">
        <path d="M20 120 Q 40 100, 60 110 Q 80 120, 100 100" fill="none" stroke="hsl(var(--pencil))" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="10" y="20" width="30" height="30" rx="2" fill="none" stroke="hsl(var(--pencil))" strokeWidth="1" strokeDasharray="5 4" transform="rotate(5 25 35)" />
        <circle cx="110" cy="50" r="18" fill="none" stroke="hsl(var(--watercolor-blue))" strokeWidth="1" strokeDasharray="3 5" />
        <path d="M60 30 L70 20 L80 30 L70 40Z" fill="none" stroke="hsl(var(--sketch-gold))" strokeWidth="1" />
      </svg>

      {/* Bottom right star cluster */}
      <svg className="absolute bottom-24 right-12 w-28 h-28 opacity-[0.07]" viewBox="0 0 100 100">
        <path d="M50 10 L55 25 L70 25 L58 35 L63 50 L50 40 L37 50 L42 35 L30 25 L45 25Z" fill="none" stroke="hsl(var(--sketch-gold))" strokeWidth="1.5" />
        <circle cx="20" cy="70" r="10" fill="none" stroke="hsl(var(--pencil))" strokeWidth="1" strokeDasharray="2 3" />
        <circle cx="80" cy="75" r="7" fill="none" stroke="hsl(var(--pencil))" strokeWidth="1" />
      </svg>

      {/* Scattered small doodle marks across the section */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.04]" viewBox="0 0 1000 800">
        {/* Small crosses */}
        <path d="M150 200 L160 210 M160 200 L150 210" stroke="hsl(var(--pencil))" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M820 150 L830 160 M830 150 L820 160" stroke="hsl(var(--pencil))" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M700 600 L710 610 M710 600 L700 610" stroke="hsl(var(--pencil))" strokeWidth="1.5" strokeLinecap="round" />
        {/* Small dots */}
        <circle cx="300" cy="100" r="2" fill="hsl(var(--pencil))" />
        <circle cx="600" cy="700" r="2" fill="hsl(var(--pencil))" />
        <circle cx="900" cy="300" r="2" fill="hsl(var(--pencil))" />
        <circle cx="100" cy="500" r="1.5" fill="hsl(var(--pencil))" />
        {/* Tiny squiggles */}
        <path d="M400 50 Q 410 45, 420 50 Q 430 55, 440 50" fill="none" stroke="hsl(var(--pencil))" strokeWidth="0.8" />
        <path d="M200 700 Q 210 695, 220 700 Q 230 705, 240 700" fill="none" stroke="hsl(var(--pencil))" strokeWidth="0.8" />
        {/* Tiny triangles */}
        <path d="M500 300 L505 290 L510 300Z" fill="none" stroke="hsl(var(--sketch-gold))" strokeWidth="0.8" />
        <path d="M800 500 L805 490 L810 500Z" fill="none" stroke="hsl(var(--sketch-gold))" strokeWidth="0.8" />
      </svg>

      <div className="text-center max-w-3xl mx-auto relative z-10">
        {/* Notebook badge */}
        <div className="inline-flex items-center gap-2 bg-paper-warm/80 border border-pencil/10 rounded-full px-5 py-2 mb-8 font-sketch text-graphite text-sm">
          <span>📓</span>
          <span>A notebook that goes back a while</span>
        </div>

        <h1 className="font-handwritten text-5xl md:text-7xl lg:text-8xl text-charcoal leading-[1.15] mb-6">
          From Class 6D to now —
          <br />
          <span className="text-primary">some people just stay important.</span>
        </h1>
        
        <p className="font-sketch text-xl md:text-2xl text-graphite max-w-xl mx-auto leading-relaxed mb-4">
          This is for someone who made school days a lot less ordinary.
        </p>

        {/* Decorative pencil line */}
        <div className="mt-12 flex items-center justify-center gap-4">
          <div className="h-[2px] w-20 bg-pencil/20 animate-draw-line" />
          <span className="text-lg animate-wiggle">✏️</span>
          <div className="h-[2px] w-20 bg-pencil/20 animate-draw-line" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span className="font-sketch text-sm text-graphite/40">scroll ↓</span>
        <div className="w-6 h-10 border-2 border-pencil/20 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-pencil/30 rounded-full animate-[float_2s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
