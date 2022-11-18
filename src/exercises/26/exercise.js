// Create a Counter using closures.
// - counter should have "increment","decrement" and "value" functions.
// - Is there a anonymus function used here? Is so where is it?
// - What is an IIFE? Have we used one here?
// - Discuss about "Revealing Module Pattern" and how we have used it.
// - What are higher order functions?

const counter = (function () {
  //Your code goes here.
  let val = 0;
  return function() {
    return {
      increment() {
        val += 1
      },
      decrement() {
        val -= 1
      },
      value() {
        return val;
      }
    }
  }
})();


const c = counter();

console.log(c.value());

c.increment();
c.increment();

console.log(c.value());

c.decrement();

console.log(c.value());