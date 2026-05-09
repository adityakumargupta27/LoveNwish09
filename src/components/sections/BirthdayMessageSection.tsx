import { useState } from 'react';
import CakeAnimation from '@/components/CakeAnimation';
import GiftModal from '@/components/GiftModal';

const BirthdayMessageSection = () => {
  const [showGift, setShowGift] = useState(false);

  return (
    <section 
      id="birthday" 
      data-section="birthday"
      className="py-24 md:py-40 px-4 relative overflow-hidden"
    >
      {/* Background doodles */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.04]" viewBox="0 0 1200 900">
        <circle cx="100" cy="150" r="40" fill="none" stroke="hsl(var(--sketch-gold))" strokeWidth="1" strokeDasharray="4 5" />
        <circle cx="1100" cy="100" r="30" fill="none" stroke="hsl(var(--pencil))" strokeWidth="1" strokeDasharray="3 6" />
        <path d="M200 800 L210 790 L220 800 L210 810Z" fill="none" stroke="hsl(var(--sketch-gold))" strokeWidth="1" />
        <path d="M1000 700 L1010 690 L1020 700 L1010 710Z" fill="none" stroke="hsl(var(--pencil))" strokeWidth="1" />
        <path d="M600 50 Q 620 35, 640 50 Q 660 65, 680 50" fill="none" stroke="hsl(var(--pencil))" strokeWidth="0.8" />
        <path d="M50 500 L60 495 M60 500 L50 495" stroke="hsl(var(--pencil))" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M1150 400 L1160 395 M1160 400 L1150 395" stroke="hsl(var(--pencil))" strokeWidth="1.5" strokeLinecap="round" />
      </svg>

      {/* Scattered art supply elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {['✏️', '📓', '⭐', '🎨', '💫', '🖌️'].map((emoji, i) => (
          <span
            key={i}
            className="absolute animate-float opacity-8 select-none"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
              fontSize: `${1.5 + Math.random() * 1}rem`,
            }}
          >
            {emoji}
          </span>
        ))}
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-12 scroll-reveal">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-pencil/10 rounded-full px-4 py-1.5 mb-4">
            <span className="font-sketch text-sm text-graphite">The Last Page</span>
          </div>
        </div>

        {/* Cake Animation */}
        <div className="scroll-reveal mb-16">
          <CakeAnimation onGiftClick={() => setShowGift(true)} />
        </div>

        {/* Final letter */}
        <div className="scroll-reveal">
          <div className="notebook-page p-8 md:p-12 relative max-w-2xl mx-auto">
            {/* Washi tape */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-sketch-gold/35 rounded-sm -rotate-1 z-10" />
            
            {/* Notebook lines overlay */}
            <div className="absolute inset-0 rounded-[2px_12px_12px_2px] overflow-hidden pointer-events-none notebook-lines opacity-25" />

            {/* Paper holes */}
            <div className="absolute left-4 top-[15%] w-3 h-3 rounded-full border-2 border-pencil/12" />
            <div className="absolute left-4 top-[40%] w-3 h-3 rounded-full border-2 border-pencil/12" />
            <div className="absolute left-4 top-[65%] w-3 h-3 rounded-full border-2 border-pencil/12" />
            <div className="absolute left-4 top-[90%] w-3 h-3 rounded-full border-2 border-pencil/12" />

            {/* Red margin line */}
            <div className="absolute left-[48px] top-0 bottom-0 w-[2px] bg-red-400/20 rounded-full" />

            <div className="relative z-10 pl-10 space-y-6">
              <p className="font-sketch text-lg md:text-xl text-graphite leading-relaxed">
                We were young, dumb, and probably didn't realize how good that time was —
                <br />
                but some memories just stay.
              </p>
              
              <p className="font-sketch text-lg md:text-xl text-graphite leading-relaxed">
                And you're a big part of that.
              </p>

              <p className="font-sketch text-lg md:text-xl text-graphite leading-relaxed">
                Stay the same — creating, doing your own thing,
                <br />
                and not trying to fit into anything.
              </p>

              <div className="pt-4 border-t border-pencil/10">
                <p className="font-handwritten text-4xl md:text-5xl text-charcoal">
                  Happy Birthday, Divya.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Final decorative element */}
        <div className="scroll-reveal mt-16 text-center">
          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-16 bg-pencil/15" />
            <span className="text-pencil/25">✏️</span>
            <div className="h-[1px] w-16 bg-pencil/15" />
          </div>
          <p className="font-doodle text-sm text-graphite/30 mt-4">
            close this tab and go celebrate. 🎉
          </p>
        </div>
      </div>

      <GiftModal isOpen={showGift} onClose={() => setShowGift(false)} />
    </section>
  );
};

export default BirthdayMessageSection;
