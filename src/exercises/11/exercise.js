// Complete the below function. Print the sum of the elements in the given array.
// - Use Array methods
// - Do not use loops
//we will use reduce method it has extra argument in the function which is called accumulator
function sumOfArray(inputArray) {
  const sum = inputArray.reduce(function (acc, val, index, arr) {
    return acc + val;
  }, 0);
  return sum;
}
//the second argument of the redduce method is the intial value of the accumulator
//it can be any number

let inputArray = [1, 2, 3, 4, 5, 56, 33];
console.log(sumOfArray(inputArray));
//reduce cannot be used only for sum it can be used for finding the maximum elements
//it can be used whenever result should be single value

//chaining of the methods together
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const totalDeposit = movements
  .filter((mov) => mov > 0)
  .map((mov) => mov * 1.1)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDeposit);
