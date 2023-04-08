// Execute this function,
//  - comment the reason for failure.
//  - Fix the issue.

//ans : Variables defined with let can not be redeclared and variables defined with let must be declared before use.Variables defined with let have block scope.
// we have two way to declare variable for this question
// 1). we can declare result at the top
function divideTenByNumber(number) {
  let result;
  if (number != 0) {
    result = 10 / number;
  } else {
    result = "Indeterminate";
  }

  console.log(`Result after dividing 10 by ${number} is ${result}`);
  return result;
}

// 2). we can declare variable as var , var is globle scope variable so we can call the variable any where.
// function divideTenByNumber(number) {
//   if (number != 0) {
//     var result = 10 / number;
//   } else {
//     var result = "Indeterminate";
//   }

//   console.log(`Result after dividing 10 by ${number} is ${result}`);
// }

module.exports = divideTenByNumber;
