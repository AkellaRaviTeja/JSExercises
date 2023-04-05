// Create a Counter using closures.
// - counter should have "increment","decrement" and "value" functions.

// - Is there a anonymus function used here? Is so where is it?
// Yes, there is an anonymous function used here. It wraps the code that defines the counter object, and is immediately invoked.

// - What is an IIFE? Have we used one here?
// An IIFE (Immediately Invoked Function Expression) is a function that is immediately invoked after it is defined. Yes, we have used an IIFE here to create the counter object.

// - Discuss about "Revealing Module Pattern" and how we have used it.
// The Revealing Module Pattern is a way of organizing code using closures to create private and public members. In this pattern, private members are defined inside the closure, and public members are returned as an object. We have used the Revealing Module Pattern in the counter example by defining the increment, decrement, and value functions as private members, and returning an object that exposes them as public members.

// - What are higher order functions?
// Higher order functions are functions that either take functions as arguments, or return functions as their result. In the counter example, there are no higher order functions.

const counter = (function () {
  //Your code goes here.
  let count = 0;

  function increment() {
    count++;
  }

  function decrement() {
    count--;
  }

  function value() {
    return count;
  }

  return {
    increment,
    decrement,
    value,
  };
})();
