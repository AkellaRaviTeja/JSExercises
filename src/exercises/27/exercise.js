// What is a callback?

/*A callback function is a function passed into another function as an argument.
This technique allows a function to call another function
A callback function can run after another function has finished
A callback ia a function that is to be executed after another function has
finished executing--hence the name "callback"
*/

function welcome(name, myCallBack) {
  setTimeout(() => {
    console.log(`Welcome ${name}`);
    myCallBack()
  }, 1000);
}

function success() {
  console.log("Greetings successful!!");
}

welcome("Apxor", success);

// In the above example:
// - Before welcoming, success message is printed.
// - Use callbacks to fix the problem.
// - If needed, update the function definition.
