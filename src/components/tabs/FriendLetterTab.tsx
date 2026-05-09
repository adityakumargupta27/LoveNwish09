import { useState } from 'react';
import { BookOpen, ChevronDown, ChevronUp, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FriendLetterTab = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="max-w-2xl mx-auto p-4 md:p-8">
      <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 md:p-10 card-shadow border-2 border-pencil/8 relative">
        {/* Washi tape decoration */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-5 bg-watercolor-blue/30 rounded-sm rotate-1" />
        
        {/* Notebook-style lines background */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none notebook-lines opacity-40" />

        {/* Letter header */}
        <div className="text-center mb-8 relative z-10">
          <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-paper-warm border-2 border-pencil/10 flex items-center justify-center rotate-3">
            <span className="text-3xl">📝</span>
          </div>
          <h2 className="font-handwritten text-5xl md:text-6xl text-charcoal mb-2">
            A Letter For You
          </h2>
          <p className="text-graphite font-sketch text-base">
            Written on the last page of my notebook, just like old times ✏️
          </p>
        </div>

        {/* Letter content */}
        <div className="prose max-w-none relative z-10">
          <p className="font-handwritten text-charcoal leading-relaxed text-2xl mb-6">
            Dear Best Friend,
          </p>
          
          <p className="font-sketch text-graphite leading-relaxed text-lg mb-4">
            Hey! Remember that first day in class 6D when I sat next to you 
            on that bench? I had no idea that I was sitting next to the most 
            incredible person I'd ever meet. You weren't just a benchmate — 
            you became the best part of my school days.
          </p>

          <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-[3000px]' : 'max-h-0'}`}>
            <p className="font-sketch text-graphite leading-relaxed text-lg mb-4">
              You know what I remember most? Your sketches. While I was struggling 
              with boring math problems, you were doodling masterpieces in the margins 
              of your notebook. Every page you touched turned into art. I used to 
              secretly peek at your drawings and think, "This person is going to be 
              famous one day."
            </p>
            
            <p className="font-sketch text-graphite leading-relaxed text-lg mb-4">
              You're the kind of friend everyone deserves but very few get. The one 
              who listens, who laughs at my terrible jokes (thank you for that by the way), 
              who never judges, and who always knows exactly what to say when things get tough.
            </p>

            <p className="font-sketch text-graphite leading-relaxed text-lg mb-4">
              I know life has taken us on different paths since class 6D, but some connections 
              don't care about distance or time. You're still the same amazing person — 
              the girl who could turn a blank page into something beautiful, and who turned 
              a random benchmate into a friend for life.
            </p>

            <p className="font-sketch text-graphite leading-relaxed text-lg mb-4">
              So on your birthday, I just want you to know: meeting you was the best thing 
              that happened to me in school. You made those days unforgettable, and you 
              continue to make every conversation, every moment, absolutely worth it.
            </p>

            <p className="font-sketch text-graphite leading-relaxed text-lg mb-4">
              Keep sketching, keep dreaming, keep being the absolutely wonderful person 
              you are. The world needs more people like you. 
            </p>

            <p className="font-handwritten text-charcoal leading-relaxed text-2xl mt-8">
              Happy Birthday, you beautiful soul!
            </p>
            <p className="font-handwritten text-3xl text-primary mt-3">
              — Your Benchmate Forever 🎨✏️
            </p>
          </div>
        </div>

        {/* Expand/Collapse button */}
        <div className="mt-6 text-center relative z-10">
          <Button 
            variant="ghost" 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-primary hover:text-accent font-sketch"
          >
            {isExpanded ? (
              <>
                Read Less <ChevronUp className="ml-2 w-4 h-4" />
              </>
            ) : (
              <>
                Read More <ChevronDown className="ml-2 w-4 h-4" />
              </>
            )}
          </Button>
        </div>

        {/* Decorative footer */}
        <div className="mt-8 flex items-center justify-center gap-3 relative z-10">
          {['✏️', '🎨', '⭐', '🖌️', '💫'].map((emoji, i) => (
            <span 
              key={i} 
              className="text-lg animate-float"
              style={{ animationDelay: `${i * 300}ms` }}
            >
              {emoji}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FriendLetterTab;
