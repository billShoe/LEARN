import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import { Grid, PageHeader, Row, Col, Button } from 'react-bootstrap'
import Cats from './pages/Cats'
import NewCat from './pages/NewCat'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      apiUrl: "http://localhost:3000",
      cats: [],
      newCatSuccess: true,
      errors: null
    }
  }

  handleNewCat(params){
    fetch(`${this.state.apiUrl}/cats`,
      {
        body: JSON.stringify(params),
        headers: {
          'Content-Type': 'application/json'
        },
        method: "POST"
      }
    )
    .then((rawResponse)=>{
      return rawResponse.json()
    })
    .then((parsedResponse) =>{
      if(parsedResponse.errors){
        this.setState({errors: parsedResponse.errors})
      }else{
        const cats = Object.assign([], this.state.cats)
        cats.push(parsedResponse.cat)
        this.setState({
          cats: cats,
          errors: null,
          newCatSuccess: true
        })
      }
    })
  }

  removeCats(){
    fetch(`${this.state.apiUrl}/cats`
    )
    .then((rawResponse)=>{
      return rawResponse.json()
    })
    .then((parsedResponse) =>{
      if(parsedResponse.errors){
        this.setState({errors: parsedResponse.errors})
      }else{
        const cats = Object.assign([], this.state.cats)
        cats.pop()
        this.setState({
          cats: cats,
          errors: null,
          newCatSuccess: true
        })
      }
    })
  }

  componentWillMount(){
    fetch(`${this.state.apiUrl}/cats`).then((rawResponse) =>{
      return rawResponse.json()
    }).then((parsedResponse)=>{
      this.setState({cats: parsedResponse.cats})
      })
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
              </PageHeader>
              <NewCat
                onSubmit={this.handleNewCat.bind(this)}
                errors={this.state.errors && this.state.errors.validations}
              />
              {this.state.newCatSuccess &&
                <Redirect to="/cats" />
              }
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
                </PageHeader>
                <Cats cats={this.state.cats} />
                  {!this.state.newCatSuccess &&
                    <Redirect to="/" />
                  }
                  <Button
                    onClick={this.removeCats.bind(this)}
                    id="clear">Remove a cat
                  </Button>
              </Grid>
            )} />
          </div>
        </Router>
      );
    }
  }
