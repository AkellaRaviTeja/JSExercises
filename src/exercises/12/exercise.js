// Gracefully handle the error in the errorCaller function

function errorFunction() {
  throw new Error("This is a random error");
}

function errorCaller() {
  try {
    errorFunction();
  } catch (err) {
    console.log(err);
  }
}
module.exports = errorFunction;
