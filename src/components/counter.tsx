import { useState } from 'react';
import classes from './style.module.scss';

export const Counter = () => {
  const [count, setCount] = useState(0);

  const addOne = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className={classes.btn}>
      <h1>{count}</h1>
      <button onClick={addOne}>Add one</button>
    </div>
  );
};
