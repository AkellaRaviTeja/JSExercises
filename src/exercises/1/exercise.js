// Execute this function,
//  - comment the reason for failure.
//  - Fix the issue.

function printOneToTen() {
  // Error : we can't change const variable in js 
  // for (const number = 1; number <= 10; number++) {

  // Fix: change const to let
  for (let number = 1; number <= 10; number++) {
    console.log(`\n${number}`);
  }
}

// we need to call the function to get the Output.
printOneToTen()