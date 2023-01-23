// Complete the below function. Find if an input is array or not.
//  - Comment what is the operator that you have used.

// instanceof Operator is used to check if the input is array or not .

function checkIfArray(input) {
  let isInputAnArray = input instanceof Array;

  if (isInputAnArray) {
    console.log("Given input is an Array");
  } else {
    console.log("Given input is not an Array");
  }
}
