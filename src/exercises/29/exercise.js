// - Explain currying.
// - Currying is a technique in functional programming that performs the transformation of a function with multiple arguments into several functions containing a single argument in a sequence.
// - Currying is a transformation of functions that translates a function from callable as f(a, b, c) into callable as f(a)(b)(c).
// - Convert the below function to curry function

function calculateVolume(length) {
  return function(breadth){
    return function(height){
      return length*breadth*height;
    }
  };
}