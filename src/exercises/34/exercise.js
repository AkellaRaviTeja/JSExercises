// Default parameters
// - Read : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters

function multiply(num1 = 1, num2 = 1) {
  return num1 * num2;
}
console.log(multiply(4, 5));
console.log(multiply(5));
console.log(multiply(1));

// multiply(2,3) - returns 6
// multiple(4) - return NaN

// Update the above function to consider a missing numbers default value as 1

// After the change
// multiply(4) - Should return 4
// multiply() - Should return 1
