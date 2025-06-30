// ParentWithCallback.tsx
import React, { useState, useCallback } from 'react';
import ChildButton from './ChildButton';

const ParentWithCallback = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log('Clicked');
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <ChildButton onClick={handleClick} />
    </div>
  );
};

export default ParentWithCallback;
