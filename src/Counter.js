import React from "react";

const Counter = (props) => {
  return (
    <div>
      Count: {props.count}
      <br />
      <button onClick={props.inc}>+</button>
      <button onClick={props.dec}>-</button>
    </div>
  );
};

export default Counter;
