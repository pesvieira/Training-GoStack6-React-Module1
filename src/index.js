import React from "react";
import { render } from "react-dom";

import Button from "./Button";

import "./style.scss";

class App extends React.Component {
  state = {
    counter: 0
  };

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <React.Fragment>
        <h1>Hello Rocketseat</h1>
        <h2>{this.state.counter}</h2>
        <Button onClick={this.handleClick}>Somar</Button>
      </React.Fragment>
    );
  }
}

render(<App />, document.getElementById("app"));
