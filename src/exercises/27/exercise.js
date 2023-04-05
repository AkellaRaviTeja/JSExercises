// What is a callback?
// Ans:  a callback is a function passed as an argument to another function that is executed after a particular event has occurred or a task has been completed. The function receiving the callback can then call that function to execute the code it contains, thereby allowing the function receiving the callback to be customized with different functionality.

function welcome(name, callback) {
  setTimeout(() => {
    console.log(`Welcome ${name}`);
    callback();
  }, 1000);
}

function success() {
  console.log("Greetings successful!!");
}

welcome("Amol", success);

// In the above example:
// - Before welcoming, success message is printed.
// - Use callbacks to fix the problem.
// - If needed, update the function definition.
