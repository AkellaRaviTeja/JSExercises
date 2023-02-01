// Complete the below function. Find the length of the given array.
// - Also validate the input. Accept the input only if its an array.

function findTheLength(inputArray) {
  let lengthOfArray;
  if (Array.isArray(inputArray)) {
    lengthOfArray = inputArray.length;
    console.log(`Length of the given input array is ${lengthOfArray}`);
  }
  else {
    console.log(`Please give array as input.`);
  }
}
