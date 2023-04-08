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
// foo
// B was called
// false

//In the first console.log, the A() function is called first, which logs "A
// was called" to the console and returns undefined.so undefined is falsy, then next
// expression (C()) is executed.which logs "C was
// called" to the console and returns null. so it's giving null it is also falsy,then the next
// expression (D()) is executed. The D() function is called, which logs "D was called"
// to the console and returns "foo". Finally, "foo" is returned and print.

console.log(B() ?? D());
// In second console first (B()) is called so it executed, and printed "B was called", after that it's return false,and false is not nullish so that's why it's not go inside.

