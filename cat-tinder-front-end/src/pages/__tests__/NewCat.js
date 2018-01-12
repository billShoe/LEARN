import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import NewCat from '../NewCat';


it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<NewCat />, div)
})

it('has input forms', ()=>{
  const component = mount(<NewCat />)
  expect(component.find('FormInput').exists()).toBe(true)
})

it('has a submit button', ()=>{
  const component = mount(<NewCat />)
  expect(component.find('button#submit').text()).toBe("Create Cat Profile")
})

it("calls handleSubmit on submit", ()=>{
  const mockSubmitHandler = jest.fn()
  const component = mount(<NewCat onSubmit={mockSubmitHandler}/>)
  component.find('button#submit').simulate('click', {button: 0})
  expect(mockSubmitHandler.mock.calls.length).toBe(1)
})

it("passes values on submit", ()=>{
  const mockSubmitHandler = jest.fn()
  const component = mount(<NewCat onSubmit={mockSubmitHandler}/>)
  component.find('input[className="name"]').simulate('change', {target: {value: 'Paws', name: 'name'}})
  component.find('input[className="age"]').simulate('change', {target: {value: 2, name: 'age'}})
  component.find('textarea[className="enjoys"]').simulate('change', {target: {value: 'Scratches', name: 'enjoys'}})
  component.find('button#submit').simulate('click', {button: 0})

  const submittedValues = mockSubmitHandler.mock.calls[0][0]

  expect(submittedValues["name"]).toBe("Paws")
  expect(submittedValues["age"]).toBe(2)
  expect(submittedValues["enjoys"]).toBe("Scratches")
})
