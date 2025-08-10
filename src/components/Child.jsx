import React, { useContext } from 'react';
import { CounterContext } from '../context/context';

const Child = () => {
  const { count, setCount } = useContext(CounterContext);

  return (
    <div>
      <p>Count from context: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  );
};

export default Child;
