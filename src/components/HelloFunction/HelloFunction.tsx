import { useState } from "react";

const HelloFunction = (props: {}) => {
  const [count, setCount] = useState(0)
  
  const increaseCounter = () => {
    setCount(count+1);
  }

  return (
    <div>
      <h1>HelloFunction: {count}</h1>
      <button onClick={increaseCounter}>Click me</button>
    </div>
  );
};

export default HelloFunction;
