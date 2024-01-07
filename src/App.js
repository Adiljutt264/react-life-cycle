import './App.css';
import React from "react";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  increment(){
    this.setState((prev)=>{
      return{
        count: prev.count + 1,
      }
    })
  }
  handleChange(e){
    this.setState({
      name: e.target.value,
    })
  }
  render(){
    return (
      <div className="app">
    <h2>{this.state.count}</h2>
    <button onClick={this.increment}>+</button>
    <input type={"text"} placeholder='Enter Your name' value={this.state.name} onChange={this.handleChange}></input>
      <p>{this.state.name}</p>
      </div>
    );
}
}

export default App;
