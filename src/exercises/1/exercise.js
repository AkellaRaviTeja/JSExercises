// Execute this function,
//  - comment the reason for failure.
//  - Fix the issue.


//We can't change the values of a variable, when we declared the value with "const" keyword. 
//If we want to change the values of a variable we have to declare the variable with "let" or "var".
//Here I changed the "const" keyword as "let".
function printOneToTen() {
  for (let number = 1; number <= 10; number++) {
    console.log(`\n${number}`);
  }
}

