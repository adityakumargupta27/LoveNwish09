import { Sparkles, X, Star } from 'lucide-react';
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
        className="absolute inset-0 bg-charcoal/40 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-card rounded-2xl p-8 md:p-12 max-w-lg w-full card-shadow border-2 border-pencil/10 animate-pop-in">
        {/* Washi tape decorations */}
        <div className="absolute -top-3 left-8 w-20 h-5 bg-sketch-gold/40 rounded-sm rotate-2" />
        <div className="absolute -top-3 right-8 w-16 h-5 bg-watercolor-blue/30 rounded-sm -rotate-3" />

        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl hover:bg-secondary transition-colors"
        >
          <X className="w-5 h-5 text-muted-foreground" />
        </button>

        {/* Content */}
        <div className="text-center">
          {/* Gift icon */}
          <div className="relative inline-block mb-6">
            <div className="w-24 h-24 rounded-2xl bg-paper-warm border-2 border-pencil/10 flex items-center justify-center mx-auto animate-pulse-glow rotate-3">
              <span className="text-5xl">🎁</span>
            </div>
            <Sparkles className="absolute -top-2 -right-2 w-8 h-8 text-sketch-gold animate-pulse" />
            <Star className="absolute -bottom-1 -left-1 w-6 h-6 text-sketch-orange animate-float" fill="currentColor" />
          </div>

          <h2 className="font-handwritten text-5xl md:text-6xl text-charcoal mb-4">
            The Actual Gift
          </h2>

          <p className="font-sketch text-graphite mb-6 leading-relaxed text-lg">
            This website is it. I spent actual hours on this instead of sleeping. 
            If that's not friendship, I don't know what is.
          </p>

          <div className="bg-paper-warm/80 rounded-xl p-6 mb-6 border border-pencil/10 -rotate-1">
            <p className="font-handwritten text-2xl text-charcoal mb-2">
              "I could've just sent a text."
            </p>
            <p className="text-graphite text-sm font-sketch">
              But where's the fun in that? ✏️
            </p>
          </div>

          <div className="space-y-3">
            <Button variant="sketch" size="lg" className="w-full" onClick={onClose}>
              <Star className="w-5 h-5 mr-2" fill="currentColor" />
              Okay, I'm Impressed 😤
            </Button>
            <p className="text-muted-foreground text-xs font-sketch">
              scroll down, there's more ↓
            </p>
          </div>
        </div>

        {/* Floating sketch decorations */}
        <div className="absolute -z-10 inset-0 overflow-hidden rounded-2xl">
          {['✏️', '📐', '⭐', '🎨', '💫', '📓'].map((emoji, i) => (
            <span
              key={i}
              className="absolute animate-float opacity-10 select-none text-lg"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            >
              {emoji}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GiftModal;
