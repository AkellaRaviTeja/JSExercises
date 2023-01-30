// Complete the below function.
// - Use Array methods.
// - Do not use loops

function multiplyArrayByTwo(inputArray) {
  console.log(`Given input array is ${inputArray}`);
  inputArray  = inputArray.map(value => value*2)
  console.log(inputArray);
}
// multiplyArrayByTwo([12,4])