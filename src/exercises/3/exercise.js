// Complete the below function. Find if an input is array or not.
//  - Comment what is the operator that you have used.

function checkIfArray(input) {
  let isInputAnArray = false;

  //...
  // we can use instanceof operator to type checking
  if(input instanceof Array) {
      isInputAnArray = true;
  }

  if (isInputAnArray) {
    console.log("Given input is an Array");
  } else {
    console.log("Given input is not an Array");
  }
}

checkIfArray([1, 2, 3, 4])