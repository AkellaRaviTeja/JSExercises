// Complete the below function. Find if an input is array or not.
//  - Comment what is the operator that you have used.

function checkIfArray(input) {
  let isInputAnArray = Array.isArray(input);

  //Array.isArray(input) returns boolean value based on whether the input is array or not.

  if (isInputAnArray) {
    console.log("Given input is an Array");
  } else {
    console.log("Given input is not an Array");
  }
}

