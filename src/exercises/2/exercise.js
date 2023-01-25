// Execute this function,
//  - comment the reason for failure.
//  - Fix the issue.

// Reason : variables declared using let keyword are block scoped hence they can't be accessed outside of that block

function divideTenByNumber(number) {
  let result = number !==0 ? 10 / number : "Indeterminate" ;
  console.log(`Result after dividing 10 by ${number} is ${result}`);
  return result;
}
module.exports = divideTenByNumber;