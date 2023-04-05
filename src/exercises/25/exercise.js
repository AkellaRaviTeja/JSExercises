// Read what is a closure and give an example here

//Ans: Closures are inner functions inside of an outer function. They have their own local scope and has access to outer function’s scope, parameters (but NOT arguments object), and they also have access to global variables.From what I understand, Closures is a neat way to deal with scope issues. Reasons we use Closures is because Javascript is a function-level scope rather than as with other languages, block-level scope and Javascript is an asynchronous/event driven language.

// is how Closures work:
// 1. After its outer function has been executed and has returned a value, closures can still run.
// 2. Closures store references to the outer function’s variable, hence, we will always have access to the updated values of outer function’s variables.
// 3. Since we have access to the updated values of outer function’s variables. We will have issue/bugs when a variable changes via for loop, but this can be fixed by using IIFE, (Immediately Invoked Function Expression).

// Examples of closure:

function greeting(name) {
  let message = `Hello, ${name}!`;

  function sayHello() {
    console.log(message);
  }

  return sayHello;
}

let hello = greeting("Gautam");
hello();
