import React, { Component } from 'react'
import rent from './store/rent'
import {Link} from 'react-router-dom'

class RentDetail extends Component {
  constructor(props){
    super(props)
    this.state = {
      rent: rent
    }
  }
  componentWillMount(){
    const id = this.props.match.params.id;
    this.setState({rentId: id})
    let rent = this.state.rent.find(function(listing){
      return listing.id === parseInt(id);
    });
    if(rent){
      this.setState({rent: rent});
    }
  }

  render() {
    return(
      <div id="body">
        <Link to='/'>Home</Link>
        <h2>{this.state.rent.name}</h2>
        <h4>{this.state.rent.rate}</h4>
        <p>{this.state.rent.desc}</p>
        <img id="bodyimg" src={this.state.rent.img} />
      </div>
    );
  }
}

export default RentDetail;
