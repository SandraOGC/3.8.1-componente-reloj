import React, { Component } from "react";
import "./App.css";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: 0,
      minutes: 0,
      seconds: 0
    };
    this.updateClock = this.updateClock.bind(this);
  }

  //ejercicio 1

  componentDidMount() {
    this.intervalo = setInterval(this.updateClock, 1000);
  }

  updateClock() {
    let time = new Date();
    let timeS = time.getSeconds();
    let timeM = time.getMinutes();
    let timeH = time.getHours();

    this.setState({
      hours: timeH,
      minutes: timeM,
      seconds: timeS
    });
  }

  render() {
    return (
      <div className="App">
        <h1 className="clock">
          {this.state.hours}:{this.state.minutes}:{this.state.seconds}
        </h1>
      </div>
    );
  }
}

export default Clock;
