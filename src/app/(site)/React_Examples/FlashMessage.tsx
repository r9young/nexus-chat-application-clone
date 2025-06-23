'use client'
import React, { useEffect, useRef } from 'react';

interface FlashMessageProps {
  message: string;
}

const FlashMessage: React.FC<FlashMessageProps> = ({ message }) => {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Change background color on message change
    if (divRef.current) {
      divRef.current.style.backgroundColor = 'yellow';

      // Revert color after 500ms
      const timeout = setTimeout(() => {
        if (divRef.current) {
          divRef.current.style.backgroundColor = '';
        }
      }, 500);

      // Cleanup timer on component unmount or next effect run
      return () => clearTimeout(timeout);
    }
  }, [message]);

  return (
    <div ref={divRef}>
      {message}
    </div>
  );
};

export default FlashMessage;
