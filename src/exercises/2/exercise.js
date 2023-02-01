// Execute this function,
//  - comment the reason for failure.
//  - Fix the issue.

//Here the "result" variable must declare outside the "if-else" block to access it
//in outside of the "if-else" block. And we can't redeclare variables using "let"
//keyword, so we have to just initialise it.

function divideTenByNumber(number) {
  let result;
  if (number != 0) {
     result = 10 / number;
  } else {
     result = "Indeterminate";
  }

  console.log(`Result after dividing 10 by ${number} is ${result}`);
}


