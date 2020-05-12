import React, { Component } from "react";

class App extends Component {
  state = {
    docs: [],
  };
  componentDidMount() {
    fetch("/docs")
      .then((res) => res.json())
      .then((res) => {
        this.setState({ docs: res });
        console.log(res);
      });
  }
  render() {
    return (
      <div>
        {this.state.docs.map((e, i) => (
          <p key={i}>{e.name}</p>
        ))}
      </div>
    );
  }
}

export default App;
