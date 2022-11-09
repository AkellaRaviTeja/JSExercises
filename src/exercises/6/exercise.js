// Complete the below function. Find the length of the given array.
// - Also validate the input. Accept the input only if its an array.
function findTheLength(inputArray) {
  let lengthOfArray = inputArray.length;
  console.log(`Length of the given input array is ${lengthOfArray}`);
}
let inputArray = [1, 2, 3, 4, 5];
Array.isArray(inputArray) && findTheLength(inputArray);
