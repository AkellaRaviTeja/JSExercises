// What is a callback?

// A callback function is a function passed into another function as an argument,
//  which is then invoked inside the outer function to complete some kind of routine or action.

function welcome(name,callback) {
  setTimeout(() => {
    console.log(`Welcome ${name}`);
    callback();
  }, 1000);
}

function success() {
  console.log("Greetings successful!!");
}

welcome("Hema",success);


// In the above example:
// - Before welcoming, success message is printed.
// - Use callbacks to fix the problem.
// - If needed, update the function definition.
