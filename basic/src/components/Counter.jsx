import { React, useState } from "react";

export default function Counter() {
  const [num, setNum] = useState(0);
  return (
    <div className="counter">
      <span className="number">{num}</span>
      <button
        className="button"
        onClick={() => {
          setNum(num + 5);
          // setNum((prev) => prev + 1);
          // setNum((prev) => prev + 1);
          // setNum((prev) => prev + 1);
          // setNum((prev) => prev + 1);
          // setNum((prev) => prev + 1);
          console.log(num);
        }}
      >
        Add +
      </button>
    </div>
  );
}
