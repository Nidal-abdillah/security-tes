import { useCounter } from "../hooks/useCounter";
const Count = () => {
  const { count, handdleIncrement, handleDecrement, handleReset } = useCounter();
  return (
    <div style={{ display: "flex", padding: "10px", alignItems: "center", gap: "10px", justifyContent: "center" }}>
      <button style={{ backgroundColor: "black", color: "white" }} onClick={handdleIncrement}>
        +
      </button>
      <h1>{count}</h1>
      <button style={{ backgroundColor: "black", color: "white" }} onClick={handleDecrement}>
        -
      </button>

      <button style={{ backgroundColor: "black", color: "white" }} onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};
export default Count;
