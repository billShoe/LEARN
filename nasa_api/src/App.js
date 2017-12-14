import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  PageHeader,
  Table
} from 'react-bootstrap';
import neoData from './sample-neo';
import Footer from './footer'

class App extends Component {
  constructor(props){
    super(props)
    let today = new Date()
    this.state = {
      apiKey: "LH39ISdYCK6C6QImrEmm9TzQPc3s1oxo7mnuq2Ms",
      startDate:`${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`,
      apiUrl: "https://api.nasa.gov/neo/rest/v1/feed",
      rawData: neoData,
      asteroids: []
    }
}
  componentWillMount(){
  fetch(`${this.state.apiUrl}?start_date=${this.state.startDate}&api_key=${this.state.apiKey}`).then((rawResponse)=>{
    // rawResponse.json() returns a promise that we pass along
    return rawResponse.json()
  }).then((parsedResponse) => {

    // when this promise resolves, we can work with our data
    let neoData = parsedResponse.near_earth_objects

    let newAsteroids = []
    Object.keys(neoData).forEach((date)=>{
      neoData[date].forEach((asteroid) =>{
        newAsteroids.push({
          id: asteroid.neo_reference_id,
          name: asteroid.name,
          date: asteroid.close_approach_data[0].close_approach_date,
          diameterMin: asteroid.estimated_diameter.feet.estimated_diameter_min.toFixed(0),
          diameterMax: asteroid.estimated_diameter.feet.estimated_diameter_max.toFixed(0),
          closestApproach: asteroid.close_approach_data[0].miss_distance.miles,
          velocity: parseFloat(asteroid.close_approach_data[0].relative_velocity.miles_per_hour).toFixed(0),
          distance: asteroid.close_approach_data[0].miss_distance.miles
        })
      })
    })

    // state is updated when promises are resolved
    this.setState({asteroids: newAsteroids})
  })
}



  render() {
    return (
      <div className="App">
        <div className="container">
          <PageHeader>
            <img class="headerPic" src="http://kingworldnews.com/wp-content/uploads/2017/01/King-World-News-A-Horrific-Ending-As-The-World-Moves-One-Day-Closer-To-Armageddon.jpg" alt="we're screwed"/>
             <h1>&nbsp;&nbsp; Asteroids <small>that almost killed us. </small></h1>
          </PageHeader>
        </div>
        <div class="container" id="mainTable">
          <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Estimated Diameter (feet)</th>
              <th>Date of Closest Approach</th>
              <th>Distance (miles)</th>
              <th>Velocity (miles/hour)</th>
            </tr>
          </thead>
          <tbody>
            {this.state.asteroids.map((asteroid)=>{
              return(
                <tr key={asteroid.id}>
                  <td>{asteroid.name}</td>
                  <td>{asteroid.diameterMin} - {asteroid.diameterMax}</td>
                  <td>{asteroid.date}</td>
                  <td>{asteroid.distance}</td>
                  <td>{asteroid.velocity}</td>
                </tr>
              )
            })}
          </tbody>
          </Table>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
