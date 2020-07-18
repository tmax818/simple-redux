import React from "react";
import "./App.css";

import Counter from "./Counter";

class App extends React.Component {
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
      <div className="App">
        <Counter
          count={this.state.count}
          inc={this.onCounterInc}
          dec={this.onCounterDec}
        />
      </div>
    );
  }
}

export default App;
