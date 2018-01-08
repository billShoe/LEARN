import React, { Component } from 'react'
import rent from './store/rent'

class Header extends Component {
  render() {
      return(
        <div>
          <h1>Lettuce find you a home.</h1>
          <img src='../images/lettuce.png' />
        </div>
    );
  }
}
export default Header;
