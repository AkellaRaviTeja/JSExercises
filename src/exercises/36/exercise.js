// Null coalescing
// - Read : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing

function A() {
  console.log("A was called");
  return undefined;
}
function B() {
  console.log("B was called");
  return false;
}
function C() {
  console.log("C was called");
  return null;
}
function D() {
  console.log("D was called");
  return "foo";
}
console.log(A() ?? C() ?? D());
console.log(B() ?? D());

//Comment the outputs below and reason
//  (left_val ?? right_val)
// left_val get returned only if the left value is not null or undefined
// same happening here 

// 1st console 
// A() get executed and return undefined so, it goes to C() again it get null value and now it goes to D() which returns "foo" it is consoled.
// foo

// 2nd console 
// B() returns false which is not a null nor undefined so it get returned
// false
