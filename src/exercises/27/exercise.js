// What is a callback?
//callback function is a function which is called inside some other function

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

welcome("Bhavana");
success();

// In the above example:
// - Before welcoming, success message is printed.
// - Use callbacks to fix the problem.
// - If needed, update the function definition.
