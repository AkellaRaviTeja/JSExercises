// What is a callback?
// - A callback is a function that is passed as an argument to another function, , which is then invoked inside the outer function to complete some kind of routine or action. A callback function can run after another function has finished. 

function welcome(name, callback) {
  setTimeout(() => {
    console.log(`Welcome ${name}`);
    callback();
  }, 1000);
}

function success() {
  console.log("Greetings successful!!");
}

welcome("Gautham", success);

// In the above example:
// - Before welcoming, success message is printed.
// - Use callbacks to fix the problem.
// - If needed, update the function definition.
