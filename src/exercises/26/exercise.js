// Create a Counter using closures.
// - counter should have "increment","decrement" and "value" functions.

// - Is there a anonymus function used here? Is so where is it?
// - Yes , Anonymous function is used . It is the function outer to the increment , decrement and getValue functions.

// - What is an IIFE? Have we used one here?
// - An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. Yes we used IIFE here

// - Discuss about "Revealing Module Pattern" and how we have used it.
// - Revealing Module Pattern is JavaScript’s design pattern that is available for users to actually organize JavaScript’s codes in modules 
//   which actually gives better code structure and helps in making things either private or public to users.

// - What are higher order functions?
// - A higher order function is a function that takes a function as an argument, or returns a function.

const counter = (function () {
  let count=0;  
  return {
    increment(){
      return ++count;
    },
    decrement(){
      return --count;
    },
    getValue(){
      return count;
    }
  }
})();
