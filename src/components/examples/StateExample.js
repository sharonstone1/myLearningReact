import React, { useState, useEffect } from 'react';

const SomeChild = () => {

  useEffect(() => {
    console.log('mounted');
    return () => console.log('unmounted');
  });

  return <h1>I'm a child</h1>;
};

const StateExample = () => {
  const [needsShowChild, setNeedsShowChild] = useState(false);

  const buttonHandler = () => {
    setNeedsShowChild(!needsShowChild);
  };

  return (
    <div>
      <button onClick={buttonHandler}>tap</button>
      {needsShowChild && 
        <SomeChild />
      }
    </div>
  );
};

export default StateExample;