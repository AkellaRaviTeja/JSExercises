// Complete the below function.
// - Use Array methods.
// - Do not use loops

function multiplyArrayByTwo(inputArray) {
  let multipliedArray = inputArray.map(number => number * 2); 
  console.log(`Given input array is ${inputArray}`);
  console.log(`Given input array multiplied by 2 is ${multipliedArray}`);
}