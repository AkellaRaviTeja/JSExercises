// Gracefully handle the error in the errorCaller function

function errorFunction() {
  throw "This is a random error";
}

function errorCaller() {
  //try block is to run the code to overcome the error exceptions
  //The catch statement allows you to define a block of code to be executed, if an error occurs in the try block.
  //both try block and catch block declare as a pair
  try {
    errorFunction();
  } catch (err) {
    console.log(err);
  }
}
