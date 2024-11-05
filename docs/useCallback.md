Explanation
Parent Component State:

The parent has two pieces of state: count and otherState.
The increment function, passed to the child component, is memoized using useCallback.
Memoized Function:

The increment function inside useCallback will not be recreated on every render unless its dependencies (in this case, none) change.
Effect on Child Component:

ChildComponent is wrapped in React.memo, which prevents it from re-rendering unless its props change.
Because increment is memoized with useCallback, ChildComponent does not re-render when otherState changes.
Result:

When toggling otherState, only the parent re-renders; the child component does not.
This optimizes performance by preventing unnecessary re-renders of ChildComponent.
By using useCallback, the function reference (increment) stays the same across renders, which helps optimize components relying on stable props.

````
import React, { useState, useCallback } from 'react';

// Child Component
const ChildComponent = React.memo(({ increment }) => {
  console.log("ChildComponent re-rendered");
  return <button onClick={increment}>Increment</button>;
});

// Parent Component
const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(false);

  // Memoize the increment function using useCallback
  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <ChildComponent increment={increment} />
      <button onClick={() => setOtherState(!otherState)}>
        Toggle other state
      </button>
    </div>
  );
};

export default ParentComponent;

````