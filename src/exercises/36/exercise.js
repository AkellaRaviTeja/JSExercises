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


/**
 * 
 * ?? operator return RHS only if the LHS has null or undefined
 * 
 * Line 20
 * since A() and C() returned undefined and null respectively. So the returned value from D() has been printed 
 * 
 * Line 21 
 * since B() doesn't have a null or undefined return value it simple prints the returned value from B() i.e, false
 * 
 */