import import { Component } from 'react';

class Counter extends Component {
  state = { counterVal: 0 }
  inc = () => {
    this.setState({ counterVal: this.state.counterVal + 1})
  }
  dec = () => {
    this.setState({ counterVal: this.state.counterVal - 1})
  }
  render() {
    return (
      <>
        <h1>My Counter</h1>
        <p>
          {/* this is where my counter is */}
          {this.state.counterVal}
          <button onClick={this.inc}>+</button>
          <button onClick={this.dec}>-</button>
        </p>
      </>
    )
  }
}
export default Counter;