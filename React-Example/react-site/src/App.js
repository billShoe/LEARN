import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Content from './content.js'
import Justin from './justin.js'
import Scott from './scott.js'
import Youtube from './youtube.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://cdn.shopify.com/s/files/1/1061/1924/products/Beer_Emoji_large.png?v=1480481062" className="App-logo" alt="logo" />
          <h1 className="App-title">I need a drink.</h1>
        </header>
          <Content />
          <Youtube />
          <Justin />
          <Scott />
      </div>
    );
  }
}

export default App;
