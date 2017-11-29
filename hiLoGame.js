function promptUser(){
  var x = prompt("Select a number from 1 to 100");
  return x;
}

function try(){};

function hiLo(){
  var turns = 0;
  var secret = Math.floor(Math.random()*101);
  var userName = prompt("Enter your name: ");

  while (turns <= 6){
  //user input
  var x = promptUser();
  if (x == null) {return;}
  else {parseInt(x);}

  if (isNaN(x)) {
    console.log("Input a valid number please.");
    turns--;
  }
  else if (x == secret){
    console.log(userName +  " wins!");
    return;
  }
  else if (x < secret){
    console.log(x + " is too low");
  }
  else if (x > secret){
    console.log(x + " is too high");
  }

  turns++
  }
  console.log(userName +  " is a loser :(");
}
//asdfdsssdlsjchfsdfsf
