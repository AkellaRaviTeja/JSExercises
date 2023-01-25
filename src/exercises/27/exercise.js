// What is a callback?

function welcome(name, callback) {
  setTimeout(() => {
    console.log(`Welcome ${name}`)
    callback()
  }, 1000);
}

function success() {
  console.log("Greetings successful!!");
}

welcome('Yashwanth',success);

// In the above example:
// - Before welcoming, success message is printed.
// - Use callbacks to fix the problem.
// - If needed, update the function definition.
