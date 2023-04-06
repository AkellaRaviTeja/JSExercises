// Execute this function,
//  - comment the reason for failure.
//  - Fix the issue.

// ans: In for loop you use const variable and const is constant we can't change thier value so i have changed const to let.
// Variables defined with const cannot be Redeclared.
// Variables defined with const cannot be Reassigned.
// Variables defined with const have Block Scope.

function printOneToTen() {
  for (let number = 1; number <= 10; number++) {
    console.log(number);
  }
}

module.exports = printOneToTen;
