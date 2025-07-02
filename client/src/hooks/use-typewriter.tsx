import { useState, useEffect, useRef } from 'react';

interface UseTypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
}

export const useTypewriter = ({ text, speed = 50, delay = 0 }: UseTypewriterProps) => {
  const [displayText, setDisplayText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let timeout: NodeJS.Timeout;
    
    const startTyping = () => {
      let i = 0;
      const typeNextChar = () => {
        if (i < text.length) {
          setDisplayText(text.substring(0, i + 1));
          i++;
          timeout = setTimeout(typeNextChar, speed);
        }
      };
      typeNextChar();
    };

    if (delay > 0) {
      timeout = setTimeout(startTyping, delay);
    } else {
      startTyping();
    }

    return () => clearTimeout(timeout);
  }, [isVisible, text, speed, delay]);

  return { displayText, elementRef };
};