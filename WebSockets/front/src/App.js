import React, { Component } from "react";

class App extends Component {
  state = {
    docs: [],
  };

  ws = new WebSocket("ws://localhost:3001");

  setupWs = () => {
    this.ws.onopen = () => {
      console.log("WS client connected");
    };
    this.ws.onmessage = (msg) => {
      let docs = JSON.parse(msg.data);
      console.log("Get message", docs);
      this.setState({ docs });
    };
  };

  componentDidMount() {
    this.setupWs();
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
