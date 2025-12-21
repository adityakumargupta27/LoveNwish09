import { Sparkles, Heart, Star, Sun, Moon } from 'lucide-react';

const notes = [
  { 
    icon: Heart, 
    title: "You're Amazing",
    content: "Never forget how incredible you are. Your kindness, your strength, your beautiful soul you make the world a better place.",
    color: "text-primary"
  },
  { 
    icon: Star, 
    title: "Dream Big",
    content: "All your dreams are valid. I'll be here cheering you on, supporting you every step of the way.",
    color: "text-teal"
  },
  { 
    icon: Sun, 
    title: "Good Morning Sunshine",
    content: "Every morning I wake up grateful that you're in my life. You are my sunshine on cloudy days.",
    color: "text-accent"
  },
  { 
    icon: Moon, 
    title: "Sweet Dreams",
    content: "As you drift off to sleep, remember that you are loved beyond measure. Sweet dreams, my love.",
    color: "text-primary"
  },
];

const NotesTab = () => {
  return (
    <div className="max-w-3xl mx-auto p-4 md:p-8">
      <div className="text-center mb-8">
        <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
        <h2 className="font-display text-4xl md:text-5xl text-foreground mb-2">
          Little Reminders
        </h2>
        <p className="text-muted-foreground font-body">
          Things I want you to always remember ✨
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {notes.map((note, index) => (
          <div
            key={index}
            className="bg-card/80 backdrop-blur-sm rounded-3xl p-6 card-shadow hover:scale-[1.02] transition-all duration-300 animate-fade-in"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="flex items-start gap-4">
              <div className={`p-3 rounded-2xl bg-secondary ${note.color}`}>
                <note.icon className="w-6 h-6" fill="currentColor" />
              </div>
              <div>
                <h3 className="font-display text-2xl text-foreground mb-2">
                  {note.title}
                </h3>
                <p className="text-muted-foreground font-body leading-relaxed">
                  {note.content}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Special note at bottom */}
      <div className="mt-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8 text-center animate-fade-in" style={{ animationDelay: '600ms' }}>
        <p className="font-display text-2xl md:text-3xl text-foreground">
          "You are loved more than you'll ever know"
        </p>
        <div className="flex justify-center gap-2 mt-4">
          {[...Array(3)].map((_, i) => (
            <Heart 
              key={i} 
              className="w-5 h-5 text-primary animate-pulse-glow" 
              fill="currentColor"
              style={{ animationDelay: `${i * 200}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotesTab;
