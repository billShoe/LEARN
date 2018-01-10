var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var Cat = require('./models').Cat

app.use(express.static('public'))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.json({message: 'API Example App'})
});

app.get('/cats', (req, res) => {
  Cat.findAll().then((cats) => {
    res.json ({cats: cats})
  })
})

module.exports = app
