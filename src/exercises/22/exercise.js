// At each of the statements in the statements in the below function
// - Use debugging techniques to find the values of x,y
// - What is "Watch" in chrome debugging console. Share a screenshot of the watch variables at each step.

function randomCalculator() {
  let x = 10,
    y = 0;
    debugger;
  x = x * 10 + 1 - (2 / 2) * 3;
  y = x - 1 + 3 * 10 - 2;
  x = x * 2 - (1 / 3) * 3;
  x = x + 10 - 2 - 3 * 2;
  console.log(x);
}

/**
 * Initially add x and y variables to Watch section in Chrome debugging console.
 * and in code add a debugger statement below first line so that we can track x and y values from intial position
 * if added at the top they will not be created and it shows '< not available >'
 * now reload the page it will automatically stop the execution at debugger statement in line8.
 * and then click on `ctrl + '` to go step by step and track x and y values after each statement.
 * also observe that after executing console.log we get the last x value logged in console.
 */



randomCalculator()