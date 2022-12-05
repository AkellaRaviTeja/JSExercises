// Execute this function,
//  - comment the reason for failure.
//  - Fix the issue.

//let is a block variable, there can not accessed from out of the block { }
function divideTenByNumber(number) {
  if (number != 0) {
    var result = 10 / number;
  } else {
    var result = "Indeterminate";
  }
  console.log(`Result after dividing 10 by ${number} is ${result}`);
}
