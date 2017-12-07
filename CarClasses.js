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

class Tesla extends Car{
    constructor(a){
        super()
        this.modelName = "Tesla"
        this.modelYear = a;
    }
    accelerate() {
        this.speed += 10;
    }
    brake() {
        this.speed -= 7;
    }
    carInfo() {
        console.log(this);
    }
}

class Tata extends Car {
    constructor(a) {
        super()
        this.modelName = "Tata";
        this.modelYear = a;
    }
    accelerate() {
        this.speed += 2;
    }
    brake() {
        this.speed -= 1.25;
    }
    carInfo() {
        console.log(this);
    }
}

class Toyota extends Car {
    constructor(a) {
        super()
        this.modelName = "Toyota";
        this.modelYear = a
    }
    accelerate() {
        this.speed += 7;
    }
    brake() {
        this.speed -= 5;
    }
    carInfo() {
        console.log(this);
    }
}

var myTesla = new Tesla(2013);
var yourTesla = new Tesla(2020);
var myTata = new Tata(1989);
var yourTata = new Tata(2015);
var myToyota = new Toyota(2018);
var yourToyota = new Toyota(1970);

var carArray = [myTesla, yourTesla, myTata, yourTata, myToyota, yourToyota];

//Takes array of cars as argument
// showSort(carArray)
//Sorts array by name, then year
//Prints out year then name
function showSort(x) {
    var cmp = function(a,b){
        if (a > b) {return +1};
        if (a < b) {return -1};
        return 0;
    }
    x.sort(function(a,b) {
        return cmp(a.modelName,b.modelName) || cmp(a.modelYear,b.modelYear)
    })
    for(let iter = 0 ; iter < x.length ; iter ++){
        console.log(x[iter].modelYear + ' ' + x[iter].modelName);
    }
}
