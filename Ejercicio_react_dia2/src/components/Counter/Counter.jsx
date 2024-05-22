import { useState } from "react";

const Counter = ({initialState, sumar, restar}) => {
  const [counter, setCounter] = useState(initialState);
  
  const increment = () => {
    setCounter(counter + sumar)};

  const decrement = () => {
    setCounter(counter - restar)
 };

  return (
    <div>
      <button onClick={increment}>Sumar</button>
      <span>{counter}</span>
      <button onClick={decrement}>Restar</button>
      
    </div>
  )
};

export default Counter;

