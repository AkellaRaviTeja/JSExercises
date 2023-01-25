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

/* Output : 
      A was called
      C was called
      D was called
      foo
      B was called  
      false
*/

/* Reason :
    In the first console.log() , Initially A() will be called and then since A() returns undefined so C() will be called and then since C() returns null , D() will be called and D() returns "foo" string.hence foo will be printed.
    In the second console.log() , B() will be called and since B() returns false which is other than undefined and null hence D() wont be executed and that returned false will be printed to console.
*/