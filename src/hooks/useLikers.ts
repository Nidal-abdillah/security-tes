import { useState } from "react";
const useLikers = () => {
  const [likers, setlikers] = useState(0);
  const handdleIncrement = () => {
    setlikers(likers + 1);
  };
  const handleDecrement = () => {
    setlikers(likers - 1);
  };
  const handleReset = () => {
    setlikers(0);
  };
  return { likers, handdleIncrement, handleDecrement, handleReset };
};
export default useLikers;
