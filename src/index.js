import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class Room extends React.Component{
  state={
    islit: true,
    Temp: 59
  }



  flipLight = () => {
    this.setState({
      islit: !this.state.islit
    });
  };

  On = () =>{
    this.setState({
      islit: true
    });
  };

  Off = () =>{
    this.setState({
      islit: false
    });
  };

  add = () =>{
    this.setState({
      Temp: this.state.Temp+1
    })
  }

  reduce = () =>{
    this.setState({
      Temp: this.state.Temp-1
    })
  }
  
  render (){
    const brightness = this.state.islit ? "lit" : "dark";
    return(
      <div className={`room ${brightness}`}>The room is {this.state.islit ? 'lit' : 'dark'}
      <br/>
      <button onClick={this.flipLight}>Flip</button>
      <br/>
      <button onClick={this.On}>ON</button>
      <br/>
      <button onClick={this.Off}>OFF</button>
      <br/>
      <button onClick={this.add}>++</button>
      <br/>
      <button onClick={this.reduce}>---</button>
      <br/>
      The current temperature is {this.state.Temp}°  you can
      increase or reduce it above
      </div>
      

    )
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Room />, rootElement);
