// Complete the below function.
// - Use Array methods.
// - Do not use loops

function multiplyArrayByTwo(inputArray) {
  //by using map function
  inputArray = inputArray.map((input) => 2 * input);
  console.log(`Given input array is ${inputArray}`);
}
