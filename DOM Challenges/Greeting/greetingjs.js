var currentState = {
       availableGreetings: ["Bob", "Mary", "Carson"],
       greetingIndex: 0,
       nextName: 1
     }

     var element = document.getElementById('greeting');
     element.innerHTML = "Hello " +currentState.availableGreetings[currentState.greetingIndex];

     document.getElementById('name').innerHTML=currentState.availableGreetings[currentState.nextName];


     function greetNext(){

       currentState.greetingIndex += 1;
       currentState.nextName +=1;

       if (currentState.nextName== currentState.availableGreetings.length){
          currentState.nextName= 0;
       }
       //we need to check to see if we are at the last greeting, and circle around to first if so
       if(currentState.greetingIndex == currentState.availableGreetings.length){
         currentState.greetingIndex= 0;

       }

       //update the dom with new greeting
       var element = document.getElementById('greeting');
       element.innerHTML = "Hello " +currentState.availableGreetings[currentState.greetingIndex];



       document.getElementById('name').innerHTML=currentState.availableGreetings[currentState.nextName];

      }
