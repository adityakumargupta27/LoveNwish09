import { useState } from 'react';
import { Heart, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PasswordModalProps {
  onSuccess: () => void;
}

const PasswordModal = ({ onSuccess }: PasswordModalProps) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.toLowerCase() === 'buttercups') {
      onSuccess();
    } else {
      setError(true);
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
    }
  };

  return (
    <div className="fixed inset-0 romantic-gradient flex items-center justify-center p-4 z-50">
      {/* Floating hearts background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-primary-foreground/20 animate-float-up"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
              fontSize: `${1 + Math.random() * 2}rem`,
            }}
            size={24 + Math.random() * 24}
          />
        ))}
      </div>

      <div 
        className={`bg-card/95 backdrop-blur-lg rounded-3xl p-8 md:p-12 w-full max-w-md card-shadow transition-all duration-300 ${
          isShaking ? 'animate-[shake_0.5s_ease-in-out]' : ''
        }`}
        style={{
          animation: isShaking ? 'shake 0.5s ease-in-out' : undefined,
        }}
      >
        <div className="text-center mb-8">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-secondary flex items-center justify-center">
            <Lock className="w-10 h-10 text-primary" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-2">
            A Special Surprise
          </h2>
          <p className="text-muted-foreground font-body">
            Enter the secret password to continue...
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
              placeholder="Enter password..."
              className={`w-full px-6 py-4 rounded-2xl bg-secondary/50 border-2 ${
                error ? 'border-accent' : 'border-transparent'
              } focus:border-primary focus:outline-none transition-all duration-300 text-center font-body text-lg placeholder:text-muted-foreground`}
              autoFocus
            />
            <Heart className="absolute right-4 top-1/2 -translate-y-1/2 text-primary w-5 h-5" />
          </div>
          
          {error && (
            <p className="text-accent text-center text-sm animate-fade-in">
              That's not it, sweetheart! Try again 💕
            </p>
          )}

          <Button type="submit" variant="romantic" size="xl" className="w-full">
            <Heart className="w-5 h-5 mr-2" />
            Unlock My Surprise
          </Button>
        </form>

        <p className="text-center text-muted-foreground text-sm mt-6 font-body">
          Hint: What do I always call you? 🧁
        </p>
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
          20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
      `}</style>
    </div>
  );
};

export default PasswordModal;
