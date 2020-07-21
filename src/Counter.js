import React from "react";

const Counter = ({ count, inc, dec }) => {
  return (
    <div>
      Count: {count}
      <br />
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
    </div>
  );
};

export default Counter;
