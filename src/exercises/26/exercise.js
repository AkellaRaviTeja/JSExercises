// Create a Counter using closures.
// - counter should have "increment","decrement" and "value" functions.
// - Is there a anonymus function used here? Is so where is it?
// - What is an IIFE? Have we used one here?
// - Discuss about "Revealing Module Pattern" and how we have used it.
// - What are higher order functions?

const counter = (function () {
  let value = 0;
  return [
    function increment() {
      value++;
    },
    function decrement() {
      value--;
    },
    function getValue() {
      console.log(value);
    },
    //Your code goes here.
  ];
})();

const result = counter;
result[0]();
result[0]();
result[0]();
console.log(result[0]());
//anonymus function is used since the name is ot given to function
//but it is assigned to a constant counter is an anonymous function

//IIFE means Immediately Invoked Function Expression.This can we called using anonymous function
//or arrow function no need to assign function sincle it will be called once or used only once and
//cannot be used any where but one thing to remember it should be enclosed in an parenthesis()
// and parenthesis() should be attached at the end to make the call
//Counter is an IIFE

//higher order function whose parameters may be function or can return another function
