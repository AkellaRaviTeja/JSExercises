// Create a Counter using closures.
// - counter should have "increment","decrement" and "value" functions.
// - Is there a anonymus function used here? Is so where is it?
// - What is an IIFE? Have we used one here?
// - Discuss about "Revealing Module Pattern" and how we have used it.
// - What are higher order functions?

const counter = (function () {
  //Your code goes here.

  let val;
  const value = i => val = i;
  const increment = () => val++;
  const decrement = () => val--;
  

  // value(35);
  // increment();
  // console.log(val)

})();

// Yes, there is a anonymus function used here. The function which is assigned to counter variable is
// a anonymus function.

// IIFE stands for Immediately Invoked Function Expression. IIFE is a javascript function that runs as
// soon as it is defined. We have used one here.

// Revealing Module Pattern is JavaScript’s design pattern that is available for users to actually
// organize JavaScript’s codes in modules which actually gives better code structure and helps in
//  making things either private or public to users.

// Basically, a function which takes another function as an argument or 
// returns a function is known as a higher order function.