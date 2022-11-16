// What is debugger;
// - Comment your understanding of it.
// - Paste the link of the MDN article here.

//when we write the debugger keyword in code the breakpoint
//will be set.
//If no debugging functionality then debugger will not have any effect

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger
function helloWorld() {
  let a = 10;
  let b = 20;
  let c = 30;
  debugger;
  console.log(a + b + c);
}
helloWorld();
