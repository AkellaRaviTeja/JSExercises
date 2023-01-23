// Complete the below function.
// - Use Array methods.
// - Do not use loops

function multipleBytwo(num){
  return num*2;
}

function multiplyArrayByTwo(inputArray) {
  console.log(`Given input array is ${inputArray}`);
  let resultArray=inputArray.map(multipleBytwo)
  console.log(`Result array is ${resultArray}`);
}
