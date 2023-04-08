// Create a Counter using closures.
// - counter should have "increment","decrement" and "value" functions.
// - Is there a anonymus function used here? Is so where is it?
//   yes, it is used, it is the self-invoking function. It is used to create a private scope. 


// - What is an IIFE? Have we used one here?
//  IIFE is an Immediately Invoked Function Expression. It is a function that is executed immediately after it is created. Yes, we have used one here. 


// - Discuss about "Revealing Module Pattern" and how we have used it.
//  The Revealing Module Pattern is a way of organizing code using closures to create private and public members. Private members are those that are not accessible from outside the module, while public members are those that are accessible from outside the module.
//  The Revealing Module Pattern is a design pattern that uses closures to hide state and reveal behavior. We have used it here, because we have used a self-invoking function to create a private scope. 

// - What are higher order functions?
// Higher order functions are functions that take other functions as arguments or return functions as results. 

const counter = (function () {
  //Your code goes here.
  let counter = 0;
  return {
    increment: function () {
      counter += 1;
    },
    decrement: function () {
      counter -= 1;
    },
    value: function () {
      return counter;
    },
  };
})();

counter.increment();
counter.increment();
counter.increment();
counter.decrement();
console.log(counter.value()); // 2
