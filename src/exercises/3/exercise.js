// Complete the below function. Find if an input is array or not.
//  - Comment what is the operator that you have used.

function checkIfArray(input) {
  let isInputAnArray = false;

  //...
  isInputAnArray = Array.isArray(input);

  //by using isArray function we can check the input is array or not
  //It will return true if the input is array otherwise return false
  if (isInputAnArray) {
    console.log("Given input is an Array");
  } else {
    console.log("Given input is not an Array");
  }
}
