// What is a callback?

// Callback is a function that is passed as an argument to other function.
// It can be used to call a function after a certain operation/event is done.


function welcome(name) {
  setTimeout(() => {
    console.log(`Welcome ${name}`);
  }, 1000);
}

function success() {
  setTimeout(() => {
    console.log("Greetings successful!!");
  }, 1001);
}

welcome('User');
success();

// In the above example:
// - Before welcoming, success message is printed.
// - Use callbacks to fix the problem.
// - If needed, update the function definition.
