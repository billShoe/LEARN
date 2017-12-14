import React, { Component } from 'react';

class GreetingInput extends Component {
  handleChange(e){
    this.props.updateGreeting(e.target.value)
  }

  render() {
    return (
      <input placeholder="placeholder?" value={this.greeting} onChange={this.handleChange.bind(this)} />
    );
  }
}

export default GreetingInput;
