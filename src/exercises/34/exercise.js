// Default parameters
// - Read : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters

function multiply(num1, num2) {
  return num1 * num2;
}

// multiply(2,3) - returns 6
// multiple(4) - return NaN

console.log(`multiply(2, 3) = ${multiply(2, 3)}`)
console.log(`multiply(4) = ${multiply(4)}\n\n`)



// Update the above function to consider a missing numbers default value as 1

function modifiedMultiply(num1 = 1, num2 = 1) {
  return num1 * num2;
}

// After the change
// multiply(4) - Should return 4
// multiply() - Should return 1

console.log(`modifiedMultiply(2, 3) = ${modifiedMultiply(2, 3)}`)
console.log(`modifiedMultiply(4) = ${modifiedMultiply(4)}`)
console.log(`modifiedMultiply() = ${modifiedMultiply()}`)