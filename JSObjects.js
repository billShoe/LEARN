// car challenge
var newCar = function(a,b,c,initSpeed, nowPedal) {
  var car = {
    modelYear: a,
    make: b,
    color: c,
    pedal: nowPedal,
    topSpeed: 85,
    lowSpeed: 0,
    startSpeed: initSpeed,
    getSpeed: function() {
      if (this.pedal == "gas" || this.pedal == "brake") {
        if (this.pedal === "gas") {
          while ( this.startSpeed < this.topSpeed){
            this.startSpeed++;
          }
        }
        else {
          while (this.startSpeed > this.lowSpeed){
            var slow = this.startSpeed;
            this.startSpeed -= (Math.ceil(Math.random() * (slow / 2)));
            console.log(this.startSpeed);
          }
        }
      }
      return this.startSpeed;
    }
  };
  console.log(car.modelYear + ' ' + car.make + ' ' + car.color + ' ' + car.getSpeed());
}



// third challenge acceleration
var newCar = {
topSpeed: 70,
lowSpeed: 0,
currentSpeed: 0
};
while ( newCar.currentSpeed < newCar.topSpeed ) {
  newCar.currentSpeed++;
  console.log(newCar.currentSpeed);
}
while (newCar.currentSpeed > newCar.lowSpeed) {
  newCar.currentSpeed--;
    console.log(newCar.currentSpeed);
}

// forth challenge
var newCar = {
topSpeed: 85,
lowSpeed: 0,
currentSpeed: 80
};
if (newCar.currentSpeed < newCar.topSpeed){
  while ( newCar.currentSpeed < newCar.topSpeed ) {
    newCar.currentSpeed++;
    console.log(newCar.currentSpeed);
  }
}
while (newCar.currentSpeed > newCar.lowSpeed) {
  newCar.currentSpeed--;
    console.log(newCar.currentSpeed);
}
