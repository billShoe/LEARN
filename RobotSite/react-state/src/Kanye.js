import React, { Component } from 'react';

export default class Kanye extends Component {
  render() {
    return (
      <div>
        <h1>Yeezybot 9000</h1>
        <h2>Imma let you finish but Beyonce is {this.props.greeting}.</h2>
      </div>
    );
  }
}
