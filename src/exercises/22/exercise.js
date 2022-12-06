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
  console.log(x); //197
}
