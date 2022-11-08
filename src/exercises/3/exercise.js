// Complete the below function. Find if an input is array or not.
//  - Comment what is the operator that you have used.

function checkIfArray(input) {
  let isInputAnArray = false;

  //...
  isInputAnArray = Array.isArray(input);
  isInputAnArray
    ? console.log("Given input is an Array")
    : console.log("Given input is not an Array");
  //used conditional operator
  // if (isInputAnArray) {
  //   console.log("Given input is an Array");
  // } else {
  //   console.log("Given input is not an Array");
  // }
}
checkIfArray([1, 2, 3, 4, 5, 6]);
