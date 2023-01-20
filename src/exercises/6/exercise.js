// Complete the below function. Find the length of the given array.
// - Also validate the input. Accept the input only if its an array.

function findTheLength(inputArray) {
  if (Array.isArray(inputArray) === false) {
    console.log("Not an array")
    return
  }
  let lengthOfArray = inputArray.length
  console.log(`Length of the given input array is ${lengthOfArray}`);
}
findTheLength([1,2,4])