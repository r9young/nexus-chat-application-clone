'use client'
import React, { useEffect, useRef } from 'react';

interface FlashMessageProps {
  message: string;
}

const FlashMessage: React.FC<FlashMessageProps> = ({ message }) => {
  const divRef = useRef<HTMLDivElement>(null);
  // it is like putting a special 'label' or 'tag'

  useEffect(() => {
    // Change background color on message change
    if (divRef.current) {
      divRef.current.style.backgroundColor = 'yellow';

      // Revert color after 300ms, it is not important here!
      const timeout = setTimeout(() => {
        if (divRef.current) {
          divRef.current.style.backgroundColor = '';
        }
      }, 300);

      // Cleanup timer on component unmount or next effect run
      return () => clearTimeout(timeout); // is optional
    }
  }, [message]);

  return (
    <div ref={divRef}>
      {message}
    </div>
  );
};

export default FlashMessage;
