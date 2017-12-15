import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  // create a constructor!!
  constructor(props){
    super(props);
    this.state = {
      buttonText: "Play Game",
      gameWon: false
    }
  }
  toggleResult(){
    const newButtonText = this.state.gameWon ? "Play Game" : "Excellent!"
    const newGameWon = this.state.gameWon ? false : true
    this.setState({ buttonText: newButtonText, gameWon: newGameWon})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to LEARN</h1>
        </header>
        <h2>Welcome to LEARN</h2>
        <button onClick={this.toggleResult.bind(this)} >{this.state.buttonText}</button>
        <span id="mainText">{this.state.gameWon && <h3>Congratulations! you have won something.</h3>}</span>
      </div>
    );
  }
}

export default App;
