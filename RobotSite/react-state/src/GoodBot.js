import React, { Component } from 'react';

export default class GoodBot extends Component {
  render() {
    return (
      <div>
        <h1>Good Robot</h1>
        <h2>I hear you saying {this.props.greeting} is that correct?</h2>
      </div>
    );
  }
}
