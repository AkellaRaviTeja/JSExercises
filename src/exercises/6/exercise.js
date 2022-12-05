// Complete the below function. Find the length of the given array.
// - Also validate the input. Accept the input only if its an array.

function findTheLength(inputArray) {
  //if its an array then it will return length of the array otherwise return invalid
  let lengthOfArray = Array.isArray(inputArray) ? inputArray.length : "invalid";
  console.log(`Length of the given input array is ${lengthOfArray}`);
}
