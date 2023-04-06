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
/*
                  A was called
                  C was called
                  D was called
                  foo
                  B was called
                  false
*/

// First A is called and it returns undefined. So the next value is C which returns null. So the next value is D which returns "foo". So the final value is "foo".
// In the second case B is called and it returns false. So it doesn't go to the next value.