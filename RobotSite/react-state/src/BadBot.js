import React, { Component } from 'react';



export default class BadBot extends Component {
  constructor() {
    super();

    //repeats everytime event is triggered, so it updates in real time
    this.func = function(){
      const BLA = ['B','L','A'];
      let count = 0;
      let string = this.props.greeting; //string = userinput
      var blah = "";
      //Increments through enitre input string
      //Adds B, L , A in order
      //returns finished blah string
      for(let iter = 0; iter < string.length ; iter++){
        if (count < 2) {              // itereates through B and L
          blah += BLA[count];         // Adds to end of blah string
          count++                     // increments and go to else if count = 2
        }
        else {
          blah += BLA[count]          // Else adds A to end of string
          count = 0;                  // resets counter to 0 (B)
        }
      }
      return blah;                    // ABCDE will return BLABL
    } //end function
  }

  render() {
    return (
      <div>
        <h1>Bad Robot</h1>
        <h2>I hear you saying <span id="spin">{this.func()} </span> is that correct?</h2>
      </div>
    );
  }
}
