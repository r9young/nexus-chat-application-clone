// ChildButton.tsx
import React from 'react';

const ChildButton = React.memo(({ onClick }: { onClick: () => void }) => {
  console.log('🔁 ChildButton rendered');
  return <button onClick={onClick}>Click me</button>;
});

export default ChildButton;
