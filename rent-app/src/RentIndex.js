import React, { Component } from 'react';
import rent from './store/rent.js';
import {Link} from 'react-router-dom';

class RentIndex extends Component {
  componentWillMount(){
    this.setState({rent: rent})
  }
  render() {
    let list = this.state.rent.map(function(rent){
      return(
        <li key={rent.id}>
          <Link to={`/rent/${rent.id}`}>
            {rent.name}
          </Link>
        </li>
      )
    })
    return (
      <ul>
        {list}
      </ul>
    );
  }
}
export default RentIndex;
