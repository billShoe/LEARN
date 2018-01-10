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
