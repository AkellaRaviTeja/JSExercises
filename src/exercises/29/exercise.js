// - Explain currying.
// - Convert the below function to curry function

/*
Currying in javascript means transformation of the function of multiple
arguments into several functions of a single argument in sequence.
*/

function calculateVolume(length) {
  return function (breadth) {
    return function (height) {
      return length * breadth * height;
    };
  };
}
console.log(calculateVolume(2)(3)(4));
