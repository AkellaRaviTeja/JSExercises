// - Explain currying.
// - Convert the below function to curry function

function calculateVolume(length, breadth, height) {
  return length * breadth * height;
}


/**
 * currying is a technique used to convert single function with multiple parameters into several functions of single parameter
 * the function is wrapped inside an another function and so on...
 * like this, the first function is passed with a parameter which returns an another function to which second parameter is passed and so on...
 * then, the final answer is returned from the inner function to outer and so on... and atlast the function that we called returns the final answer.
 */

console.log(`volume using regular function = ${calculateVolume(2, 3, 5)}`)

function calculateVolumeByCurrying(length) {
  return function(breadth) {
    return function(height) {
      return length * breadth * height;
    }
  }
}

console.log(`volume using curry function = ${calculateVolumeByCurrying(2)(3)(5)}`)