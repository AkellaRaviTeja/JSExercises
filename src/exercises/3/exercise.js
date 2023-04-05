// Complete the below function. Find if an input is array or not.
//  - Comment what is the operator that you have used.

//ans : I used Array.isArray() , Array.isArray() method checks whether the passed argument is an array or not.
function checkIfArray(input) {
  let isInputAnArray = false;

  if (Array.isArray(input)) {
    isInputAnArray = true;
  }

  if (isInputAnArray) {
    console.log("Given input is an Array");
  } else {
    console.log("Given input is not an Array");
  }
}
