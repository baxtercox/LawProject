import React, { Components } from "react";

class Counter extends React.Component {
  state = {
    count: 0,
  };

  render() {
    return (
      <div>
        <span> {this.formatCount}</span>
        <button>Increment</button>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? <h1>Zero</h1> : count;
  }
}

export default Counter;
