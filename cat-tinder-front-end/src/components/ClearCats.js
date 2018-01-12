import React, { Component } from 'react';
import {
  Button,
  Col
} from 'react-bootstrap'

export default class ClearCats extends Component {

  constructor(props){
    super(props)
    this.state = {
      apiUrl: "http://localhost:3000",
      cats: [],
      newCatSuccess: true,
      errors: null
    }
  }

handleClick(){
    const cats = Object.assign([], this.state.cats)
    cats.pop()
    this.setState({
      cats: cats,
      errors: null,
      newCatSuccess: true
      })
  }

  render(){
    return (
      <form>
        <Col sm={2}>
          <Button
            onClick={this.handleClick.bind(this)}
            id="clear">Remove all cats
          </Button>
        </Col>
      </form>
    )
  }
}
