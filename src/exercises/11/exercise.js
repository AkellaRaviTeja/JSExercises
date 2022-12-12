// Complete the below function. Print the sum of the elements in the given array.
// - Use Array methods
// - Do not use loops

function sumOfArray(inputArray) {
  let result = inputArray.reduce(function (total, age) {
    return total + age;
  }, 0);
  console.log(result);
}
