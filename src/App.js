import { Component } from 'react';
import Counter from './components/Counter';
class App extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = { val: 0 }
  //   this.inc = this.inc.bind(this)
  // }
  // inc() {
  // }
  // state = { counterVal: 0, age: 34 }
  // inc = () => {
  //   this.setState({ counterVal: this.state.counterVal + 1})
  // }
  // dec = () => {
  //   this.setState({ counterVal: this.state.counterVal - 1})
  // }
  render() {
    return(
      // <>
      //   <h1>My Counter</h1>
      //   <p>
      //     {/* this is where my counter is */}
      //     {this.state.counterVal}
      //     <button onClick={this.inc}>+</button>
      //     <button onClick={this.dec}>-</button>
      //   </p>
      // </>
      <>
        <Counter color="blue" />
        <Counter color="red"/>
        <Counter color="yellow"/>
        <Counter color="pink"/>
        <Counter />
      </>
    )
  }
}
export default App;



// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
