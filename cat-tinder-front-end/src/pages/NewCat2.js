import React, { Component } from 'react';
import {
  Button,
  Col,
  Row
} from 'react-bootstrap';
import FormInput from '../components/FormInput';
import CatStore from '../stores/catstore'

class NewCat extends Component {
  constructor(props){
    super(props)
    this.state={
      cat: CatStore.getFields(),
      errors: [],
      alerts: []
    }
  }

  handleChange(event){
    const target = event.target
    const cat = this.state.cat
    cat[target.name] = target.value
    this.setState({
      cat: cat
    })
  }

  validate(){
    CatStore.validate()
    this.setState({alerts: CatStore.getAlerts()})
    this.setState({errors: CatStore.getErrors()})
  }

  handleSubmit(event){
    event.preventDefault()
    this.validate()
  }

  displayError(){
    let arr = this.state.alerts;
    let arrItem = arr.map((print, i) =>
      <div key = {i} className='alert alert-danger'>{print}</div>
    );
    return arrItem;
  }

  render() {
    return (
      <form>
        <Row>
          <Col xs={6}>
            {
              this.displayError()
            }
          </Col>
        </Row>
        <Row>
          <Col sm={3} >
            <FormInput
              name='name'
              label='Name'
              value={this.state.cat.name}
              onChange={this.handleChange.bind(this)}
              errors={this.state.errors.name}
            />
          </Col>
          <Col sm={1}>
            <FormInput
              type= "number"
              name='age'
              label='Age'
              value={this.state.cat.age}
              onChange={this.handleChange.bind(this)}
              errors={this.state.errors.age}
            />
          </Col>
        </Row>

        <Row>
          <Col sm={4}>
            <FormInput
              name='enjoys'
              label='Enjoys'
              value={this.state.cat.enjoys}
              onChange={this.handleChange.bind(this)}
              errors={this.state.errors.enjoys}
            />
          </Col>
        </Row>

        <Row>
          <Col sm={3}>
            <Button
              onClick={this.handleSubmit.bind(this)}
            id="submit">Create Cat Profile</Button>
          </Col>
        </Row>

      </form>
    )
  }
}

export default NewCat
