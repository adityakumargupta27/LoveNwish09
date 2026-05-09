const TheArtistSection = () => {
  return (
    <section 
      id="artist" 
      data-section="artist"
      className="py-24 md:py-32 px-4 relative bg-paper-warm/30 overflow-hidden"
    >
      {/* Background doodles */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.045]" viewBox="0 0 1200 700">
        <circle cx="80" cy="120" r="40" fill="none" stroke="hsl(var(--watercolor-blue))" strokeWidth="1" strokeDasharray="5 6" />
        <circle cx="1120" cy="80" r="28" fill="none" stroke="hsl(var(--pencil))" strokeWidth="1" strokeDasharray="3 5" />
        <circle cx="1050" cy="580" r="22" fill="none" stroke="hsl(var(--sketch-gold))" strokeWidth="1" />
        <path d="M200 50 L210 40 L220 50 L210 60Z" fill="none" stroke="hsl(var(--sketch-gold))" strokeWidth="1" />
        <path d="M950 620 L960 610 L970 620 L960 630Z" fill="none" stroke="hsl(var(--pencil))" strokeWidth="1" />
        <path d="M600 650 Q 620 635, 640 650 Q 660 665, 680 650" fill="none" stroke="hsl(var(--pencil))" strokeWidth="0.8" />
        <path d="M1100 300 Q 1120 285, 1140 300" fill="none" stroke="hsl(var(--pencil))" strokeWidth="0.8" />
        <path d="M100 450 L110 445 M110 450 L100 445" stroke="hsl(var(--pencil))" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M900 150 L910 145 M910 150 L900 145" stroke="hsl(var(--pencil))" strokeWidth="1.5" strokeLinecap="round" />
        {/* Paintbrush-like stroke */}
        <path d="M300 30 Q 350 20, 400 35 Q 450 50, 500 30" fill="none" stroke="hsl(var(--watercolor-blue))" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        {/* Palette shape */}
        <ellipse cx="1000" cy="300" rx="25" ry="18" fill="none" stroke="hsl(var(--sketch-gold))" strokeWidth="1" transform="rotate(-15 1000 300)" />
        <circle cx="990" cy="295" r="3" fill="none" stroke="hsl(var(--sketch-gold))" strokeWidth="0.8" />
        <circle cx="1010" cy="298" r="3" fill="none" stroke="hsl(var(--sketch-gold))" strokeWidth="0.8" />
      </svg>

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-12 scroll-reveal">
          <div className="inline-flex items-center gap-2 bg-watercolor-blue/15 border border-pencil/10 rounded-full px-4 py-1.5 mb-4">
            <span className="font-sketch text-sm text-graphite">Chapter Two</span>
          </div>
          <h2 className="font-handwritten text-5xl md:text-7xl text-charcoal mb-3">
            The Artist
          </h2>
        </div>

        {/* Main content */}
        <div className="scroll-reveal notebook-page p-8 md:p-12 relative max-w-2xl mx-auto">
          {/* Washi tape */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-watercolor-blue/25 rounded-sm rotate-1 z-10" />
          
          {/* Notebook lines overlay */}
          <div className="absolute inset-0 rounded-[2px_12px_12px_2px] overflow-hidden pointer-events-none notebook-lines opacity-25" />
          
          {/* Paper holes */}
          <div className="absolute left-4 top-[20%] w-3 h-3 rounded-full border-2 border-pencil/12" />
          <div className="absolute left-4 top-[50%] w-3 h-3 rounded-full border-2 border-pencil/12" />
          <div className="absolute left-4 top-[80%] w-3 h-3 rounded-full border-2 border-pencil/12" />
          
          {/* Red margin line */}
          <div className="absolute left-[48px] top-0 bottom-0 w-[2px] bg-red-400/20 rounded-full" />

          <div className="relative z-10 pl-10 space-y-6">
            <p className="font-sketch text-lg md:text-xl text-graphite leading-relaxed">
              You didn't just draw, you created things.
              <br />
              I still remember that book you made and showed to Raghini ma'am —
              <br />
              that was not normal for a 6th grader.
            </p>

            <p className="font-sketch text-lg md:text-xl text-graphite leading-relaxed">
              Even back then, it was obvious —
              <br />
              you weren't just following things, you were building your own world.
            </p>
          </div>
        </div>

        {/* Decorative sketch elements */}
        <div className="scroll-reveal mt-8 flex items-center justify-center gap-3">
          {['🎨', '✏️', '🖌️'].map((emoji, i) => (
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

export default TheArtistSection;
