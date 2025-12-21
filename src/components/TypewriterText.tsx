import { useEffect, useState } from 'react';

interface TypewriterTextProps {
  text: string;
  delay?: number;
  className?: string;
  onComplete?: () => void;
}

const TypewriterText = ({ text, delay = 150, className = '', onComplete }: TypewriterTextProps) => {
  const [displayedChars, setDisplayedChars] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedChars(prev => [...prev, text[currentIndex]]);
        setCurrentIndex(prev => prev + 1);
      }, delay);

      return () => clearTimeout(timer);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, text, delay, onComplete]);

  return (
    <span className={className}>
      {displayedChars.map((char, index) => (
        <span
          key={index}
          className="inline-block animate-typewriter"
          style={{ animationDelay: `${index * 50}ms` }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypewriterText;
