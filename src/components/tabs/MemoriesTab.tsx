import { Sparkles, Star, Sun, Moon, Palette, PenTool } from 'lucide-react';

const memories = [
  { 
    icon: '📚', 
    title: "Class 6D Benchmate",
    content: "Remember our bench? Where I'd be half-asleep and you'd be sketching the most beautiful things in your notebook. Those were the golden days!",
    rotation: "-1deg",
    tape: "bg-sketch-gold/40",
  },
  { 
    icon: '🎨', 
    title: "The Artist",
    content: "Your sketches could make anyone stop and stare. While the whole class was doing homework, you were creating art. And honestly? Your doodles were better than anything in our textbooks.",
    rotation: "1deg",
    tape: "bg-watercolor-rose/40",
  },
  { 
    icon: '⭐', 
    title: "Best Person Ever",
    content: "Of all the people I met in my first school, you are hands down the best. Not just a classmate, not just a friend — but someone truly special.",
    rotation: "-0.5deg",
    tape: "bg-watercolor-blue/40",
  },
  { 
    icon: '✨', 
    title: "Keep Shining",
    content: "You make the world more colorful with every sketch you draw and every smile you share. Never stop being you, because 'you' is pretty incredible.",
    rotation: "0.8deg",
    tape: "bg-watercolor-purple/30",
  },
];

const MemoriesTab = () => {
  return (
    <div className="max-w-3xl mx-auto p-4 md:p-8">
      <div className="text-center mb-8">
        <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-paper-warm border-2 border-pencil/10 flex items-center justify-center rotate-3">
          <span className="text-3xl">💭</span>
        </div>
        <h2 className="font-handwritten text-5xl md:text-6xl text-charcoal mb-2">
          Little Memories
        </h2>
        <p className="text-graphite font-sketch text-base">
          Things I want you to always remember ✨
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {memories.map((memory, index) => (
          <div
            key={index}
            className="bg-card/90 backdrop-blur-sm rounded-xl p-6 card-shadow border border-pencil/8 hover:scale-[1.03] transition-all duration-300 animate-fade-in relative"
            style={{ 
              animationDelay: `${index * 150}ms`,
              transform: `rotate(${memory.rotation})`,
            }}
          >
            {/* Washi tape */}
            <div className={`absolute -top-2.5 left-1/2 -translate-x-1/2 w-16 h-5 ${memory.tape} rounded-sm`} 
                 style={{ transform: `translateX(-50%) rotate(${Math.random() * 6 - 3}deg)` }} />
            
            <div className="flex items-start gap-4 mt-2">
              <div className="p-3 rounded-xl bg-paper-warm border border-pencil/10 text-2xl flex-shrink-0">
                {memory.icon}
              </div>
              <div>
                <h3 className="font-handwritten text-3xl text-charcoal mb-2">
                  {memory.title}
                </h3>
                <p className="text-graphite font-sketch text-base leading-relaxed">
                  {memory.content}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Special note at bottom — like a torn notebook page */}
      <div className="mt-10 relative">
        <div className="bg-paper-warm/80 rounded-xl p-8 text-center border-2 border-pencil/8 animate-fade-in card-shadow" 
             style={{ animationDelay: '600ms', transform: 'rotate(-0.5deg)' }}>
          {/* Paper holes */}
          <div className="absolute left-4 top-1/4 w-3 h-3 rounded-full border-2 border-pencil/15" />
          <div className="absolute left-4 top-1/2 w-3 h-3 rounded-full border-2 border-pencil/15" />
          <div className="absolute left-4 top-3/4 w-3 h-3 rounded-full border-2 border-pencil/15" />
          
          {/* Red margin line */}
          <div className="absolute left-10 top-0 bottom-0 w-[2px] bg-accent/20 rounded-full" />
          
          <p className="font-handwritten text-3xl md:text-4xl text-charcoal">
            "The best things in life are the people you love,<br/>
            the places you've been,<br/>
            and the memories you've made along the way"
          </p>
          <div className="flex justify-center gap-3 mt-4">
            {['✏️', '🎨', '⭐'].map((emoji, i) => (
              <span 
                key={i} 
                className="text-xl animate-float" 
                style={{ animationDelay: `${i * 250}ms` }}
              >
                {emoji}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemoriesTab;
