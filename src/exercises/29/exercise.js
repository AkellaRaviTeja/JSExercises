// - Explain currying.
// Ans: It is a technique in functional programming, transformation of the function of multiple arguments into several functions of a single argument in sequence.currying allows you to create a new function by partially applying the arguments of an existing function, resulting in a new function that can take the remaining arguments. 


// - Convert the below function to curry function

function calculateVolume(length) {
  return function (breadth) {
    return function (height) {
      return length * breadth * height;
    };
  };
}


const LengthVol = calculateVolume(2); 
const LengthAndBreadth= LengthVol (5);
const ans = LengthAndBreadth(8); 
console.log(ans)