// Create a Counter using closures.
// - counter should have "increment","decrement" and "value" functions.
// - Is there a anonymus function used here? Is so where is it?
// - What is an IIFE? Have we used one here?
// - Discuss about "Revealing Module Pattern" and how we have used it.
// - What are higher order functions?

const counter = (function () {
  //Your code goes here.
  let privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }

  return {
    increment() {
      changeBy(1);
    },

    decrement() {
      changeBy(-1);
    },

    value() {
      return privateCounter;
    },
  };
})();

console.log(counter.value()); // 0

console.log(counter.increment());
console.log(counter.increment());

console.log(counter.value()); //2

console.log(counter.decrement());

console.log(counter.value()); //1


//yes, in this exercise we use anonymus function
//At line number 8
/* (function(){
  /..
})();
*/

//IIFE(immediately invoking function expression)
/*Syntax:
(function(){
  //statements..
})();

(()=>
  //statements..
)();

In Javascript the function are invoked immediately with out call them with the help of IIFE
*/


