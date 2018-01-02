var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (request, response) {
 response.sendFile("index.html", {"root": __dirname});
});

app.get('/home', function (request, response) {
 response.send('<form action="/"><input type="submit" value="To home" /></form>')
});

app.get('/reverse/:text', function (request, response) {
  var text = request.params["text"];
  text = text.split('').reverse();

  response.send(text.join(''));
});

app.get('/add/a=:inputA&b=:inputB', function (request, response) {
  var a = request.params["inputA"];
  var b = request.params["inputB"];
  var add = parseInt(a)+parseInt(b);
  response.send(add.toString());
});

app.get('/piglatin/:input' , function (request, response) {
  var result = [];
  var text = request.params["input"];
  var a = text.split("+");
//Creates a translate function
  var translate = function(x){
//tag holds the ending that we add
      var tag = "";
//regexp??????? we did it promise
      var pos = x.search(/[aieou]/i);
//pos looks for a e i o u and ends at cons. before vowel
//pos holds postion of the letter
      if(pos == 0){
//If word starts with a vowel, just add way to the end of it
          tag = "way";
//returns word with ay at the end
          return x + tag;
//if word does not start with vowel, piglatin it
      }else if(pos > 0){
//cuts out all char. before vowel
          tag = x.slice(0,pos);
//adds tag to the end of word and returns it
          return x.slice(pos) + tag + "ay";
      }
  }
//runs for each index in array and saves to result
  for(let iter = 0; iter < a.length; iter++){
      result.push(translate(a[iter]));
  }
//returns new piglatin word
  var piggy = result.join(" ");
  response.send(piggy);
});


app.listen(3000, function () {
 console.log('Example app listening on port 3000!');
});
