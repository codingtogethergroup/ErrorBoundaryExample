import * as React from "react";

export default function Counter() {
  const [count, setCount] = React.useState(0);
  const clickHandler = () => {
    setCount((c) => c + 1);
  };

  if (count > 3) {
    throw new Error("Count is too big.");
  }
  return (
    <>
      <h2>{count}</h2>
      <button onClick={clickHandler}>+1</button>
    </>
  );
}
