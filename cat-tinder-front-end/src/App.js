import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import { Grid, PageHeader, Row, Col } from 'react-bootstrap'
import Cats from './pages/Cats'
import NewCat from './pages/NewCat'


export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      cats: [
        {
          id: 1,
          name: 'Morris',
          age: 2,
          enjoys: "Long walks on the beach."
        },
        {
          id: 2,
          name: 'Paws',
          age: 4,
          enjoys: "Snuggling by the fire."
        },
        {
          id: 3,
          name: 'Mr. Meowsalot',
          age: 12,
          enjoys: "Being in charge."
        }
      ]
    }
  }
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" render={props => (
            <Grid>
              <PageHeader>
                <Row>
                  <Col xs={8}>
                    Cat Tinder
                    <small className='subtitle text-primary'> - Add a Cat</small>
                  </Col>
                </Row>
                <Row>
                  <Col xs={4}>
                    <small>
                      <Link to='/cats' id='cats-link'>Show me the Cats</Link>
                    </small>
                  </Col>
                </Row>
              </PageHeader>
              <NewCat />
            </Grid>
          )} />

          <Route exact path="/cats" render={props => (
            <Grid>
              <PageHeader>
                <Row>
                  <Col xs={8}>
                    Cat Tinder
                    <small className='subtitle text-primary'> - All the Cats</small>
                  </Col>
                </Row>
                <Row>
                  <Col xs={4}>
                    <small>
                      <Link to='/' id='cats-link'>Add a Cat</Link>
                    </small>
                  </Col>
                </Row>
              </PageHeader>
            </Grid>
          )} />
        </div>
      </Router>
    )
  }
}
