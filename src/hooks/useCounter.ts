import { useState } from "react";

export const useCounter = () => {
  const [count, setcount] = useState(0);
  const handdleIncrement = () => {
    setcount(count + 1);
  };
  const handleDecrement = () => {
    setcount(count - 1);
  };
  const handleReset = () => {
    setcount(0);
  };
  return { count, handdleIncrement, handleDecrement, handleReset };
};
