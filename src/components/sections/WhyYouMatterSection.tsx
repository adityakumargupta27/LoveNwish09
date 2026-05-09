const WhyYouMatterSection = () => {
  return (
    <section 
      id="why-you" 
      data-section="why-you"
      className="py-24 md:py-32 px-4 relative overflow-hidden"
    >
      {/* Background doodles */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.045]" viewBox="0 0 1200 700">
        <circle cx="120" cy="150" r="35" fill="none" stroke="hsl(var(--pencil))" strokeWidth="1" strokeDasharray="4 6" />
        <circle cx="1080" cy="100" r="28" fill="none" stroke="hsl(var(--sketch-gold))" strokeWidth="1" strokeDasharray="3 4" />
        <circle cx="180" cy="550" r="20" fill="none" stroke="hsl(var(--pencil))" strokeWidth="1" />
        <circle cx="1050" cy="500" r="30" fill="none" stroke="hsl(var(--pencil))" strokeWidth="1" strokeDasharray="5 5" />
        <path d="M900 80 L910 70 L920 80 L910 90Z" fill="none" stroke="hsl(var(--sketch-gold))" strokeWidth="1" />
        <path d="M250 600 L260 590 L270 600 L260 610Z" fill="none" stroke="hsl(var(--pencil))" strokeWidth="1" />
        <path d="M600 50 Q 620 35, 640 50 Q 660 65, 680 50" fill="none" stroke="hsl(var(--pencil))" strokeWidth="0.8" />
        <path d="M50 350 Q 70 335, 90 350" fill="none" stroke="hsl(var(--pencil))" strokeWidth="0.8" />
        <path d="M1100 300 L1110 295 M1110 300 L1100 295" stroke="hsl(var(--pencil))" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M200 250 L210 245 M210 250 L200 245" stroke="hsl(var(--pencil))" strokeWidth="1.5" strokeLinecap="round" />
        {/* Star */}
        <path d="M750 600 L755 590 L760 600 L770 595 L762 605 L770 615 L760 610 L755 620 L750 610 L740 615 L748 605 L740 595Z" 
              fill="none" stroke="hsl(var(--sketch-gold))" strokeWidth="0.8" />
        {/* Dots */}
        <circle cx="500" cy="100" r="2" fill="hsl(var(--pencil))" />
        <circle cx="800" cy="600" r="1.5" fill="hsl(var(--pencil))" />
        <circle cx="350" cy="400" r="2" fill="hsl(var(--pencil))" />
      </svg>

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-12 scroll-reveal">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-pencil/10 rounded-full px-4 py-1.5 mb-4">
            <span className="font-sketch text-sm text-graphite">The Point</span>
          </div>
          <h2 className="font-handwritten text-5xl md:text-7xl text-charcoal mb-3">
            Why You Matter
          </h2>
        </div>

        {/* Main content — notebook page */}
        <div className="scroll-reveal notebook-page p-8 md:p-12 relative max-w-2xl mx-auto">
          {/* Washi tape */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-accent/15 rounded-sm rotate-1 z-10" />
          
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
              You were one of the real ones early on.
              <br />
              No acting, no pretending — just being yourself.
            </p>

            <p className="font-sketch text-lg md:text-xl text-graphite leading-relaxed">
              And honestly, not many people stay like that.
            </p>

            <p className="font-handwritten text-2xl md:text-3xl text-charcoal leading-relaxed">
              That's what makes you different.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyYouMatterSection;
