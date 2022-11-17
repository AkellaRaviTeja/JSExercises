// Complete the below function.
// - Use Array methods.
// - Do not use loops

function multiplyArrayByTwo(inputArray) {
  inputArray = inputArray.map(val => val * 2);
  console.log(`Given input array is ${inputArray}`);
}

multiplyArrayByTwo([1, 2, 3, 4])