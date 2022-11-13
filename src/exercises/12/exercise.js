// Gracefully handle the error in the errorCaller function

function errorFunction() {
  throw "This is a random error";
}

function errorCaller() {
  errorFunction();
}

try {
  errorCaller();
} catch (e) {
  console.log(e);
}
