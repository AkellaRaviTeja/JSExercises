// At each of the statements in the statements in the below function
// - Use debugging techniques to find the values of x,y
// - What is "Watch" in chrome debugging console. Share a screenshot of the watch variables at each step.

function randomCalculator() {
  debugger;
  let x = 10,
    y = 0;
  x = x * 10 + 1 - (2 / 2) * 3;
  y = x - 1 + 3 * 10 - 2;
  x = x * 2 - (1 / 3) * 3;
  x = x + 10 - 2 - 3 * 2;
  console.log(x);
}

// Watch – shows current values for any expressions.(You can click the plus + and input an expression. The debugger will show its value, automatically recalculating it in the process of execution.)

/* Scope – current variables.
  Local shows local function variables. You can also see their values highlighted right over the source.
  Global has global variables (out of any functions).*/
