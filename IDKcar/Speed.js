console.log("test success");

class Speed {
  constructor (){
    this.value = 10;
  }
  getValue() {
    return this.value;
  }
  accelerate() {
    this.value++;
  }
  brake() {
    this.value--;
  }
}

module.exports = Speed;
