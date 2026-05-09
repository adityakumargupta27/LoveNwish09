const Class6DSection = () => {
  return (
    <section 
      id="class-6d" 
      data-section="class-6d"
      className="py-24 md:py-32 px-4 relative overflow-hidden"
    >
      {/* Background doodles */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.045]" viewBox="0 0 1200 700">
        <circle cx="120" cy="80" r="35" fill="none" stroke="hsl(var(--pencil))" strokeWidth="1" strokeDasharray="4 5" />
        <circle cx="1080" cy="150" r="25" fill="none" stroke="hsl(var(--sketch-gold))" strokeWidth="1" strokeDasharray="3 4" />
        <circle cx="150" cy="550" r="20" fill="none" stroke="hsl(var(--pencil))" strokeWidth="1" />
        <path d="M900 80 L910 70 L920 80 L910 90Z" fill="none" stroke="hsl(var(--sketch-gold))" strokeWidth="1" />
        <path d="M300 600 L310 590 L320 600 L310 610Z" fill="none" stroke="hsl(var(--pencil))" strokeWidth="1" />
        <path d="M700 50 Q 720 35, 740 50 Q 760 65, 780 50" fill="none" stroke="hsl(var(--pencil))" strokeWidth="0.8" />
        <path d="M50 300 Q 70 285, 90 300 Q 110 315, 130 300" fill="none" stroke="hsl(var(--pencil))" strokeWidth="0.8" />
        <path d="M1100 500 L1110 495 M1110 500 L1100 495" stroke="hsl(var(--pencil))" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M200 200 L210 195 M210 200 L200 195" stroke="hsl(var(--pencil))" strokeWidth="1.5" strokeLinecap="round" />
        {/* Small star */}
        <path d="M1000 400 L1005 390 L1010 400 L1020 395 L1012 405 L1020 415 L1010 410 L1005 420 L1000 410 L990 415 L998 405 L990 395Z" 
              fill="none" stroke="hsl(var(--sketch-gold))" strokeWidth="0.8" />
        {/* Dots */}
        <circle cx="500" cy="100" r="2" fill="hsl(var(--pencil))" />
        <circle cx="800" cy="600" r="2" fill="hsl(var(--pencil))" />
        <circle cx="400" cy="500" r="1.5" fill="hsl(var(--pencil))" />
      </svg>

      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12 scroll-reveal">
          <div className="inline-flex items-center gap-2 bg-watercolor-amber/20 border border-pencil/10 rounded-full px-4 py-1.5 mb-4">
            <span className="font-sketch text-sm text-graphite">Chapter One</span>
          </div>
          <h2 className="font-handwritten text-5xl md:text-7xl text-charcoal mb-3">
            Class 6D
          </h2>
        </div>

        {/* Main content — notebook page style */}
        <div className="scroll-reveal notebook-page p-8 md:p-12 relative max-w-2xl mx-auto">
          {/* Washi tape */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-sketch-gold/30 rounded-sm -rotate-1 z-10" />
          
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
              Back in Class 6D, nothing felt serious.
              <br />
              We were just kids — laughing at random things, doing stupid stuff,
              <br />
              and somehow those small moments turned into the best ones.
            </p>

            <p className="font-sketch text-lg md:text-xl text-graphite leading-relaxed">
              You were always doing something different.
              <br />
              Not trying to stand out — you just naturally did.
            </p>
          </div>
        </div>

        {/* Decorative doodle underneath */}
        <div className="scroll-reveal mt-8 flex items-center justify-center gap-3">
          {['📚', '✏️', '📐'].map((emoji, i) => (
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

export default Class6DSection;
