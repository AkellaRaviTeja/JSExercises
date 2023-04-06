// - Explain currying.
// currying is a technique of evaluating function with multiple arguments, into sequence of functions with single argument. 



// - Convert the below function to curry function

function calculateVolume(length) {
  return function (breadth) {
    return function (height) {
      return length * breadth * height;
    };
  }
}
