function userInput(){
  var x = document.getElementById("userInput").value;
  return x;
}

var turns = 0;
var secret = Math.floor(Math.random()*101);

function hiLo(){
  console.log(secret);
  var x = parseInt(userInput());

  if (isNaN(x)) {
        document.getElementById("output").innerHTML = "Give me a number, dummy." ;
        turns--;
  }
  else if (x == secret){
    document.getElementById("output").innerHTML = "You are winner!!" ;
    return;
  }
  else if (x < secret){
    document.getElementById("output").innerHTML = "Too low." ;
  }
  else if (x > secret){
    document.getElementById("output").innerHTML = "Too high." ;
  }
  turns++
  if(turns > 7){
      document.getElementById("output").innerHTML = "U LOSE" ;
  }
}
