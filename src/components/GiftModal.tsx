import { Heart, Gift, X, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface GiftModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GiftModal = ({ isOpen, onClose }: GiftModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-foreground/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-card rounded-3xl p-8 md:p-12 max-w-lg w-full card-shadow animate-scale-in">
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-secondary transition-colors"
        >
          <X className="w-5 h-5 text-muted-foreground" />
        </button>

        {/* Content */}
        <div className="text-center">
          {/* Gift icon with animation */}
          <div className="relative inline-block mb-6">
            <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center mx-auto animate-pulse-glow">
              <Gift className="w-12 h-12 text-primary" />
            </div>
            <Sparkles className="absolute -top-2 -right-2 w-8 h-8 text-accent animate-pulse" />
            <Heart className="absolute -bottom-1 -left-1 w-6 h-6 text-primary animate-float" fill="currentColor" />
          </div>

          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            A Special Gift! 🎁
          </h2>

          <p className="font-body text-muted-foreground mb-6 leading-relaxed">
            This website is my gift to you – a little corner of the internet 
            made with love, just for the most amazing person in my life.
          </p>

          <div className="bg-secondary/50 rounded-2xl p-6 mb-6">
            <p className="font-display text-2xl text-foreground mb-2">
              "You are my today and all of my tomorrows"
            </p>
            <p className="text-muted-foreground text-sm font-body">
              — With endless love 💕
            </p>
          </div>

          <div className="space-y-3">
            <Button variant="romantic" size="lg" className="w-full" onClick={onClose}>
              <Heart className="w-5 h-5 mr-2" fill="currentColor" />
              I Love You Too!
            </Button>
            <p className="text-muted-foreground text-xs font-body">
              More surprises coming your way! 🎉
            </p>
          </div>
        </div>

        {/* Floating decorations */}
        <div className="absolute -z-10 inset-0 overflow-hidden rounded-3xl">
          {[...Array(6)].map((_, i) => (
            <Heart
              key={i}
              className="absolute text-primary/10 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
              size={16 + Math.random() * 16}
              fill="currentColor"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GiftModal;
