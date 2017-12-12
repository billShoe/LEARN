class Car{
    constructor(){
        this.wheels = 4;
        this.speed = 0;
        this.lightsOn = false;
        this.turnSigal = false;
    }
    lightsOn() {
        this.lightsOn = true;
    }
    lightsOff() {
        this.lightsOn = false;
    }
    turnLight(x) {
        let arr = ["none", "left", "right"]
        this.turnSigal = arr[x];
    }
}

let newCar = new Car;

function makeCar(){
  newCar = new Car;
}

function accelerate() {
  newCar.speed+=10;
  document.getElementById('speedNow').innerHTML = newCar.speed;
}

function decelerate() {
  if(newCar.speed > 0) {
    newCar.speed-=7;
    if (newCar.speed < 0) {
      newCar.speed = 0;
      document.getElementById('speedNow').innerHTML = newCar.speed;
    } else { document.getElementById('speedNow').innerHTML = newCar.speed;}
  }
}

function disp() {
  console.log("Something");
}


var boxOne = document.getElementsByClassName('box')[0];


    document.getElementsByClassName('toggleButton')[0].onclick = function() {
      if(this.innerHTML === 'Play')
      {
        this.innerHTML = 'Pause';
        boxOne.classList.add('horizTranslate');
      } else {
        this.innerHTML = 'Play';
        var computedStyle = window.getComputedStyle(boxOne),
            marginLeft = computedStyle.getPropertyValue('margin-left');
        boxOne.style.marginLeft = marginLeft;
        boxOne.classList.remove('horizTranslate');
      }
    }

console.log("index success");
