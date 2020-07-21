import React from "react";
import "./App.css";
import { connect } from "react-redux";
import Counter from "./Counter";
import { inc, dec, reset } from "./Actions";

const mapStateToProps = (state) => {
  return { count: state.count };
};

const mapDispatchToProps = { inc, dec, reset };

class App extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <Counter
          count={this.props.count}
          inc={this.props.inc}
          dec={this.props.dec}
          reset={this.props.reset}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
