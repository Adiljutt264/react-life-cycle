import './App.css';
import React from "react";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: "adil",
      surname: "javed",
      count: 0,
    };
    this.increment = this.increment.bind(this);
  }
  increment(){
    this.setState((prev)=>{
      return{
        count: prev.count + 1,
      }
    })
  }
  render(){
    return (
      <div className="App">
    <h2>{this.state.count}</h2>
    <button onClick={this.increment}>+</button>
      </div>
    );
}
}

export default App;
