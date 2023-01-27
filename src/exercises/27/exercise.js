// What is a callback?
// A callback is a function that’s passed as an argument to a another function.

function welcome(name,success) {
  console.log(`Welcome ${name}`);
  success();
}

function success() {
  console.log("Greetings successful!!");
}

welcome("ganesh",success);


// In the above example:
// - Before welcoming, success message is printed.
// - Use callbacks to fix the problem.
// - If needed, update the function definition.
