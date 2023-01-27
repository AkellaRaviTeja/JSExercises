// At each of the statements in the statements in the below function
// - Use debugging techniques to find the values of x,y
// - What is "Watch" in chrome debugging console. Share a screenshot of the watch variables at each step.

/*
  The Variables whose values we want to keep track of can be added to watch . watch panel shows values of those variables at each step .
*/

function randomCalculator() {
  let x = 10,
    y = 0;
  debugger; // x=10 , y=0
  x = x * 10 + 1 - (2 / 2) * 3; // x=10 , y=0
  y = x - 1 + 3 * 10 - 2; // x=98 , y=0
  x = x * 2 - (1 / 3) * 3; //x=98 , y=125
  x = x + 10 - 2 - 3 * 2; // x=195 , y=125
  console.log(x); // x=197 , y=125
}

randomCalculator();