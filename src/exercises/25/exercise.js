// Read what is a closure and give an example here

// function makeFunc() {
//   const name = 'Mozilla';
//   function displayName() {
//     console.log(name);
//   }
//   return displayName;
// }

// const myFunc = makeFunc();
// myFunc();

// A closure is a feature of JavaScript that allows inner functions to access their outer scope.
// Closure helps in binding a function to its outer boundary and is created automatically whenever a function is created. 
// A block is also treated as a scope since ES6.
// Since JavaScript is event-driven so closures are useful as it helps to maintain the state between events.
// In other words, closure is created when a child function keep the environment of the parent scope even after the parent function has already executed 