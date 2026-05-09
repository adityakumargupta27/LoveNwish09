const ThatPhaseSection = () => {
  return (
    <section 
      id="that-phase" 
      data-section="that-phase"
      className="py-24 md:py-32 px-4 relative overflow-hidden"
    >
      {/* Background doodles */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.045]" viewBox="0 0 1200 700">
        <circle cx="100" cy="100" r="30" fill="none" stroke="hsl(var(--pencil))" strokeWidth="1" strokeDasharray="4 5" />
        <circle cx="1100" cy="600" r="25" fill="none" stroke="hsl(var(--sketch-gold))" strokeWidth="1" strokeDasharray="3 4" />
        <path d="M800 80 L810 70 L820 80 L810 90Z" fill="none" stroke="hsl(var(--sketch-gold))" strokeWidth="1" />
        <path d="M200 600 L210 590 L220 600 L210 610Z" fill="none" stroke="hsl(var(--pencil))" strokeWidth="1" />
        <path d="M500 50 Q 520 35, 540 50 Q 560 65, 580 50" fill="none" stroke="hsl(var(--pencil))" strokeWidth="0.8" />
        <path d="M1050 350 L1060 345 M1060 350 L1050 345" stroke="hsl(var(--pencil))" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M150 400 L160 395 M160 400 L150 395" stroke="hsl(var(--pencil))" strokeWidth="1.5" strokeLinecap="round" />
        {/* Play button shape */}
        <path d="M950 150 L970 165 L950 180Z" fill="none" stroke="hsl(var(--pencil))" strokeWidth="1" />
        <circle cx="960" cy="165" r="22" fill="none" stroke="hsl(var(--pencil))" strokeWidth="1" strokeDasharray="4 4" />
        {/* Small dots */}
        <circle cx="400" cy="300" r="2" fill="hsl(var(--pencil))" />
        <circle cx="700" cy="150" r="1.5" fill="hsl(var(--pencil))" />
        <circle cx="300" cy="550" r="2" fill="hsl(var(--pencil))" />
      </svg>

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-12 scroll-reveal">
          <div className="inline-flex items-center gap-2 bg-sketch-gold/15 border border-pencil/10 rounded-full px-4 py-1.5 mb-4">
            <span className="font-sketch text-sm text-graphite">Chapter Three</span>
          </div>
          <h2 className="font-handwritten text-5xl md:text-7xl text-charcoal mb-3">
            That Phase
          </h2>
        </div>

        {/* Main content */}
        <div className="scroll-reveal notebook-page p-8 md:p-12 relative max-w-2xl mx-auto">
          {/* Washi tape */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-sketch-gold/30 rounded-sm -rotate-2 z-10" />
          
          {/* Notebook lines overlay */}
          <div className="absolute inset-0 rounded-[2px_12px_12px_2px] overflow-hidden pointer-events-none notebook-lines opacity-25" />
          
          {/* Paper holes */}
          <div className="absolute left-4 top-[25%] w-3 h-3 rounded-full border-2 border-pencil/12" />
          <div className="absolute left-4 top-[55%] w-3 h-3 rounded-full border-2 border-pencil/12" />
          <div className="absolute left-4 top-[85%] w-3 h-3 rounded-full border-2 border-pencil/12" />
          
          {/* Red margin line */}
          <div className="absolute left-[48px] top-0 bottom-0 w-[2px] bg-red-400/20 rounded-full" />

          <div className="relative z-10 pl-10 space-y-6">
            <p className="font-sketch text-lg md:text-xl text-graphite leading-relaxed">
              You were making TikToks before it became everyone's thing.
              <br />
              I won't lie — you're probably the reason I even opened that app.
            </p>

            <p className="font-sketch text-lg md:text-xl text-graphite leading-relaxed">
              Not for trends…
              <br />
              just to see what you were doing next.
            </p>
          </div>
        </div>

        {/* Decorative element */}
        <div className="scroll-reveal mt-8 flex items-center justify-center gap-3">
          {['📱', '🎬', '⭐'].map((emoji, i) => (
            <span 
              key={i} 
              className="text-lg animate-float opacity-25"
              style={{ animationDelay: `${i * 300}ms` }}
            >
              {emoji}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThatPhaseSection;
