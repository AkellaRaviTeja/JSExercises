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
console.log(A() ?? C() ?? D()); //
console.log(B() ?? D());

//Comment the outputs below and reason

/*output:
A was called
c was called 
d was called
foo //(undefined ?? null ?? foo)
b was called
false //(false ?? ...)
*/
