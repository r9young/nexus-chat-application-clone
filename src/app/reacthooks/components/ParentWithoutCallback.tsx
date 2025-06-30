// ParentWithoutCallback.tsx
import React, { useState } from 'react';
import ChildButton from './ChildButton';

const ParentWithoutCallback = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log('Clicked');
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <ChildButton onClick={handleClick} />
      <div>test</div>
    </div>
  );
};

export default ParentWithoutCallback;
