import axios from "axios";
import React, { Component } from "react";
import './App.css'

class App extends Component {

  state = {
    advice: ""
  }

  componentDidMount() {
    this.fetchAdvice()
  }

  fetchAdvice = () => {
    axios.get("https://api.adviceslip.com/advice")
      .then(res => {
        const { advice } = res.data.slip;
        this.setState({ advice })

      })
      .catch(error => {
        console.log(error)
      })
  }
  render() {
    return (
      <div className="app">
        <div className="card">
          <h2 className="heading">{this.state.advice}</h2>
          <button className="button" onClick={this.fetchAdvice}><span>GIVE ME ADVICE!</span></button>
        </div>
      </div>
    );
  }
}

export default App;
