const memories = [
  {
    text: "the most random conversations somehow being the funniest",
    rotation: '-1.5deg',
    color: 'bg-yellow-50',
    tapeColor: 'bg-sketch-gold/30',
  },
  {
    text: "laughing at things that wouldn't even make sense now",
    rotation: '1deg',
    color: 'bg-amber-50/80',
    tapeColor: 'bg-watercolor-amber/40',
  },
  {
    text: "that phase where everything felt simple",
    rotation: '-0.5deg',
    color: 'bg-orange-50/60',
    tapeColor: 'bg-sketch-orange/20',
  },
  {
    text: "you just doing your own thing, always",
    rotation: '1.5deg',
    color: 'bg-yellow-50/70',
    tapeColor: 'bg-watercolor-blue/25',
  },
];

const RandomMemoriesSection = () => {
  return (
    <section 
      id="memories" 
      data-section="memories"
      className="py-24 md:py-32 px-4 relative bg-paper-warm/20 overflow-hidden"
    >
      {/* Background doodles */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.045]" viewBox="0 0 1200 700">
        <circle cx="150" cy="80" r="30" fill="none" stroke="hsl(var(--pencil))" strokeWidth="1" strokeDasharray="3 5" />
        <circle cx="1050" cy="120" r="22" fill="none" stroke="hsl(var(--sketch-gold))" strokeWidth="1" />
        <circle cx="100" cy="600" r="18" fill="none" stroke="hsl(var(--pencil))" strokeWidth="1" strokeDasharray="4 4" />
        <circle cx="1100" cy="550" r="35" fill="none" stroke="hsl(var(--pencil))" strokeWidth="1" strokeDasharray="5 6" />
        <path d="M700 50 L710 40 L720 50 L710 60Z" fill="none" stroke="hsl(var(--sketch-gold))" strokeWidth="1" />
        <path d="M300 650 L310 640 L320 650 L310 660Z" fill="none" stroke="hsl(var(--pencil))" strokeWidth="1" />
        <path d="M400 80 Q 420 65, 440 80 Q 460 95, 480 80" fill="none" stroke="hsl(var(--pencil))" strokeWidth="0.8" />
        <path d="M800 600 Q 820 585, 840 600" fill="none" stroke="hsl(var(--pencil))" strokeWidth="0.8" />
        <path d="M200 350 L210 345 M210 350 L200 345" stroke="hsl(var(--pencil))" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M1000 400 L1010 395 M1010 400 L1000 395" stroke="hsl(var(--pencil))" strokeWidth="1.5" strokeLinecap="round" />
        {/* Star */}
        <path d="M550 650 L555 640 L560 650 L570 645 L562 655 L570 665 L560 660 L555 670 L550 660 L540 665 L548 655 L540 645Z" 
              fill="none" stroke="hsl(var(--sketch-gold))" strokeWidth="0.8" />
      </svg>

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-12 scroll-reveal">
          <div className="inline-flex items-center gap-2 bg-sketch-gold/15 border border-pencil/10 rounded-full px-4 py-1.5 mb-4">
            <span className="font-sketch text-sm text-graphite">Small Things</span>
          </div>
          <h2 className="font-handwritten text-5xl md:text-7xl text-charcoal mb-3">
            Random Memories
          </h2>
        </div>

        {/* Memory cards — sticky note style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {memories.map((memory, index) => (
            <div
              key={index}
              className="scroll-reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div 
                className={`${memory.color} rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:scale-[1.03] relative`}
                style={{ 
                  transform: `rotate(${memory.rotation})`,
                  boxShadow: '2px 3px 10px hsl(30 10% 30% / 0.08)',
                }}
              >
                {/* Tape */}
                <div className={`absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-3.5 ${memory.tapeColor} rounded-sm z-10`}
                     style={{ transform: `translateX(-50%) rotate(${Math.random() * 6 - 3}deg)` }} />
                
                <p className="font-handwritten text-xl md:text-2xl text-charcoal/80 text-center leading-relaxed mt-1">
                  "{memory.text}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RandomMemoriesSection;
