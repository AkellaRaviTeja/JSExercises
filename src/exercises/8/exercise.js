// Complete the below function.
// - Print the given Array. One element in one line
// - Use loops

function printArray(inputArray) {
  //using for loop
  for (let i = 0; i < inputArray.length; i++) {
    console.log(inputArray[i]);
  }
  //using forin loop
  //ForIn loop will take indexs of an array
  for (let ele in inputArray) {
    console.log(inputArray[ele]);
  }
  //using ForOf loop
  //ForOf will take element from an Array
  for (let ele of inputArray) {
    console.log(ele);
  }
}
