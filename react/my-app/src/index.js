import React, { Component } from "react";
import ReactDOM from "react-dom";
import Counter from "./components/counter";

ReactDOM.render(<Counter/>, document.getElementById("root"));

/*
import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Reactio'
    };
  }

  render() {
    return (
      <div>
        {this.state.name} 
        <p>
          Start editing to see some magic happen
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
*/