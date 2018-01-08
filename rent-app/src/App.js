import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import RentIndex from './RentIndex'
import RentDetail from './RentDetail'


class App extends Component {
  render() {
      return(
        <Router>
          <div>
            <Header name = 'Squash Flats' />
              <Route exact path = '/' component={RentIndex} />
              <Route path='/rent/:id' component = {RentDetail} />
            <Footer />
        </div>
      </Router>
    );
  }
}
export default App;
