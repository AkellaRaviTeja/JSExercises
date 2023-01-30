// Create a Counter using closures.
// - counter should have "increment","decrement" and "value" functions.
// - Is there a anonymus function used here? Is so where is it?
// - What is an IIFE? Have we used one here?
// - Discuss about "Revealing Module Pattern" and how we have used it.
// - What are higher order functions?


// anonymus function is IIFE 

// yeah it is line 34 on assigning counter value 

// IIFE(Immediately Invoked Function Expression): This type of function is called immediately invoked as these functions are executed as soon as they are mounted to the stack. No need to write it again adter creating the function for invoking 
// An IIFE is a good way to secure the scope. 
// You can use IIFEs to prevent global variables’ definition issues, alias variables, protect private data, and avoid conflicts of using many libraries that export the same object name.
// Revealing module pattern is a design pattern, which let you organise your javascript code in modules, and gives better code structure. 
// It gives you power to create public/private variables/methods (using closure), and avoids polluting global scope (If you know how to avoid that).



// HOF Higher order functions
// A function that receives another function as an argument or that returns a new function or both is called Higher-order function. 
// Higher-order functions are only possible because of the First-class function.


const counter = (function () {
  //Your code goes here.
  // private value 
  let count = 0
  
  const increment = () => {
    count += 1
  }
  const decrement = () => {
    count -= 1
  }
  const getValue = () => {
    return count
  }

  return {
    increment: increment,
    decrement: decrement,
    getValue: getValue
  }
  
})();

counter.increment()
counter.increment()
console.log(counter.getValue())
