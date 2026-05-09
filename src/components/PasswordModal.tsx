import { useState } from 'react';
import { Pencil, KeyRound } from 'lucide-react';
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
    if (password.toLowerCase() === 'benchmate' || password.toLowerCase() === '6d') {
      onSuccess();
    } else {
      setError(true);
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
    }
  };

  return (
    <div className="fixed inset-0 paper-gradient flex items-center justify-center p-4 z-50">
      {/* Floating sketch elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {['✏️', '📐', '🖍️', '📓', '🎨', '✂️', '📝', '⭐', '🖌️', '📎'].map((emoji, i) => (
          <span
            key={i}
            className="absolute animate-float-up opacity-20 select-none"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${18 + Math.random() * 12}s`,
              fontSize: `${1.2 + Math.random() * 1.2}rem`,
            }}
          >
            {emoji}
          </span>
        ))}
      </div>

      {/* Decorative hand-drawn circles */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
        <circle cx="15%" cy="20%" r="60" fill="none" stroke="hsl(var(--pencil))" strokeWidth="1.5" strokeDasharray="4 6" />
        <circle cx="80%" cy="30%" r="40" fill="none" stroke="hsl(var(--pencil))" strokeWidth="1" strokeDasharray="3 5" />
        <circle cx="70%" cy="75%" r="80" fill="none" stroke="hsl(var(--pencil))" strokeWidth="1.5" strokeDasharray="5 8" />
        <line x1="10%" y1="85%" x2="35%" y2="80%" stroke="hsl(var(--pencil))" strokeWidth="1" strokeDasharray="6 4" />
      </svg>

      <div 
        className={`bg-card/95 backdrop-blur-lg rounded-2xl p-8 md:p-12 w-full max-w-md card-shadow border-2 border-pencil/10 transition-all duration-300 ${
          isShaking ? 'animate-[shake_0.5s_ease-in-out]' : ''
        }`}
        style={{
          animation: isShaking ? 'shake 0.5s ease-in-out' : undefined,
        }}
      >
        {/* Washi tape */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-sketch-gold/40 rounded-sm -rotate-1 z-10" />

        <div className="text-center mb-8">
          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-paper-warm border-2 border-pencil/15 flex items-center justify-center rotate-3">
            <span className="text-4xl">📓</span>
          </div>
          <h2 className="font-handwritten text-5xl md:text-6xl text-foreground mb-3">
            Hold up.
          </h2>
          <p className="text-muted-foreground font-sketch text-lg">
            This notebook has a lock on it. What's the password?
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
              placeholder="Type the secret word..."
              className={`w-full px-6 py-4 rounded-xl bg-paper-warm/60 border-2 ${
                error ? 'border-sketch-orange' : 'border-pencil/15'
              } focus:border-primary focus:outline-none transition-all duration-300 text-center font-sketch text-xl placeholder:text-muted-foreground/60`}
              autoFocus
            />
            <Pencil className="absolute right-4 top-1/2 -translate-y-1/2 text-pencil-light w-5 h-5" />
          </div>
          
          {error && (
            <p className="text-sketch-orange text-center text-sm animate-fade-in-up font-sketch">
              Nope. Think harder. ✏️
            </p>
          )}

          <Button type="submit" variant="sketch" size="xl" className="w-full">
            <KeyRound className="w-5 h-5 mr-2" />
            Unlock This Thing
          </Button>
        </form>

        <p className="text-center text-muted-foreground text-sm mt-6 font-sketch">
          Hint: What were we in class 6D? 📚
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
