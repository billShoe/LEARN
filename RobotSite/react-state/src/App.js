import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import GreetingInput from './Greetinginput'
import GoodBot from './GoodBot'
import BadBot from './BadBot'
import Kanye from './Kanye'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      greeting: ""
    }
  }

  updateGreeting(greeting){
    this.setState({greeting: greeting})
  }
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div>
          <GreetingInput greeting={this.state.greeting} updateGreeting={this.updateGreeting.bind(this)} />
        </div>
        <div>
          <GoodBot greeting={this.state.greeting} />
        </div>
        <div>
          <BadBot greeting={this.state.greeting} />
        </div>
        <div>
          <Kanye greeting={this.state.greeting} />
        </div>
      </div>
    );
  }
}

export default App;
