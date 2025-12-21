import { useState } from 'react';
import { Heart, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LoveLetterTab = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="max-w-2xl mx-auto p-4 md:p-8">
      <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-6 md:p-10 card-shadow">
        {/* Letter header */}
        <div className="text-center mb-8">
          <Heart className="w-12 h-12 text-primary mx-auto mb-4" fill="currentColor" />
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-2">
            A Letter For You
          </h2>
          <p className="text-muted-foreground font-body text-sm">
            Written with all my heart 💕
          </p>
        </div>

        {/* Letter content */}
        <div className="prose prose-pink max-w-none">
          <p className="font-body text-foreground leading-relaxed text-lg mb-6 italic">
            My Dearest Love,
          </p>
          
          <p className="font-body text-muted-foreground leading-relaxed mb-4">
            On this special day, I want you to know how much you mean to me. 
            Every single day with you feels like a gift, and today I get to celebrate 
            the most wonderful gift of all – you.
          </p>

          <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-[2000px]' : 'max-h-0'}`}>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              From the moment I met you, I knew there was something extraordinary about you. 
              Your smile lights up my darkest days, your laugh is the sweetest melody I've ever heard, 
              and your love has made me a better person.
            </p>
            
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              You are my best friend, my confidant, my partner in crime, and the love of my life. 
              I am so grateful for every moment we share, every adventure we embark on, 
              and every quiet evening spent in each other's arms.
            </p>

            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              As you blow out the candles today, know that my wish for you is nothing but happiness, 
              love, and all the dreams your heart desires. You deserve the world, and I promise 
              to spend every day trying to give it to you.
            </p>

            <p className="font-body text-foreground leading-relaxed text-lg mt-8 italic">
              Forever and always yours,
            </p>
            <p className="font-display text-3xl text-primary mt-2">
              With All My Love 💕
            </p>
          </div>
        </div>

        {/* Expand/Collapse button */}
        <div className="mt-6 text-center">
          <Button 
            variant="ghost" 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-primary hover:text-accent"
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
        <div className="mt-8 flex items-center justify-center gap-2">
          {[...Array(5)].map((_, i) => (
            <Heart 
              key={i} 
              className="w-4 h-4 text-primary/60" 
              fill="currentColor"
              style={{ animationDelay: `${i * 200}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoveLetterTab;
