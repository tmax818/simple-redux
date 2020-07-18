import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  onCounterInc = () => {
    this.setState({ count: this.state.count + 1 });
  };

  onCounterDec = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };

  render() {
    return (
      <div>
        Count: {this.state.count}
        <br />
        <button onClick={this.onCounterInc}>+</button>
        <button onClick={this.onCounterDec}>-</button>
      </div>
    );
  }
}

export default Counter;
