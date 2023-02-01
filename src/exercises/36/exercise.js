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

// A was called
// C was called
// D was called
// foo
// B was called
// false

//Null coalescing operator(??) returns its right-hand side operand when its left-hand side
//  operand is null or undefined, and otherwise returns its left - hand side operand.
