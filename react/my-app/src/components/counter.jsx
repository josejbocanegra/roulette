import React, { Component } from 'react';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      count: 10
    };
    this.increment = this.increment.bind(this);
  }

  increment(){
    this.setState({count: this.state.count + 1});
  }

  render() {
    return (
      <div>
        {this.state.count}
        <button onClick={this.increment}> Mas </button>
      </div>
    );
  }
}

export default Counter;
