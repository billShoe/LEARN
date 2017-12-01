function reverseText(text, callback) {
  var reversePromise = new Promise(function(res, rej){
    if (callback) {
      var splitText = text.split("");
      var reverseArray = splitText.reverse();
      res(reverseArray.join(""));
    }
    else {
      rej(console.log("No actions done."));
    }
  });
  reversePromise.then(
    function(res){
      console.log(res);
    }
  ).catch(function(rej){
    console.log("An error has occured: " + rej);
  });
}

function capText (text, callback) {
  var capPromise = new Promise(function(res, rej){
    if (callback) {
      res(text.toUpperCase());
    }
    else {
      rej(console.log("ERROR"));
    }
  });

  capPromise.then(function (res){
    console.log(res);
  }) .catch(function (rej){
    console.log(rej);
  });
}
