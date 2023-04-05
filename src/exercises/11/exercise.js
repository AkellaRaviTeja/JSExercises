// Complete the below function. Print the sum of the elements in the given array.
// - Use Array methods
// - Do not use loops

//Ans: Used reduce() array method to sum of all the elements in the array

function sumOfArray(inputArray) {
  let sum = inputArray.reduce((acc, currentVal) => acc + currentVal, 0); 
  console.log(`Sum of the elements in the given array is ${sum}`);
}
