// Complete the below function. Find if an input is array or not.
//  - Comment what is the operator that you have used.

function checkIfArray (input) {
  let isInputAnArray = false;

  //...
  if (Array.isArray(input)) {
    isInputAnArray = true;
  }

  if (isInputAnArray) {
    console.log("Given input is an Array");
  } else {
    console.log("Given input is not an Array");
  }
}

// checkIfArray([1,2])
// I have an inbulit function for this within JS Array