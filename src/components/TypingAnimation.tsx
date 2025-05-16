'use client';
import Typed from 'typed.js';
import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

type Props = {
  strings: string[];
  className?: string;
  startDelay?: number;
};

function TypingAnimation({ strings, className, startDelay = 0 }: Props) {
  const typing = useRef<HTMLSpanElement>(null);
  const typedInstance = useRef<Typed | null>(null);

  useEffect(() => {
    if (typing.current) {
      // Destroy previous instance if exists
      if (typedInstance.current) {
        typedInstance.current.destroy();
      }
      // Create new Typed instance
      typedInstance.current = new Typed(typing.current, {
        strings,
        startDelay: startDelay,
        typeSpeed: 40,
        loop: false,
        cursorChar: '',
      });
    }
    // Cleanup on unmount
    return () => {
      if (typedInstance.current) {
        typedInstance.current.destroy();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <span ref={typing} className={cn(`subpixel-antialiased ${className}`)}></span>
    </div>
  );
}

export default TypingAnimation;
