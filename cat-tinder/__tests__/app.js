const request = require('supertest')
const app = require('../app')

jest.mock('../models/cat')

describe("App", ()=>{
  it("Tests the root path", ()=>{
    return request(app).get("/").then(response => {
      expect(response.statusCode).toBe(200)
    })
  });

  it("Lists cats", ()=>{
    return request(app).get("/cats").then(response =>{
      expect(response.statusCode).toBe(200)
      expect(response.body.cats[0].name).toBe('Paws')
    })
  })
})

it("Validates name when creating cat", ()=>{
  return request(app)
    .post("/cats")
    .send({
      age: 2,
      enjoys: "Food!"
    })
    .then(response =>{
      expect(response.statusCode).toBe(400)
      const error = response.body.errors.validations[0]
      expect(error.param).toBe('name')
      expect(error.msg).toBe('Is required')
    })
})
