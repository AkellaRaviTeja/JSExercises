// Execute this function,
//  - comment the reason for failure.
//  - Fix the issue.

function divideTenByNumber(number) {
  let result;
  if (number != 0) {
    result = 10 / number;
  } else {
    result = "Indeterminate";
  }

  console.log(`Result after dividing 10 by ${number} is ${result}`);
}
divideTenByNumber(3);

//result is defined but it is not in the scope of the function it is the scope of the if else block
