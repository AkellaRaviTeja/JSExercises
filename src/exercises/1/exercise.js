// Execute this function,
//  - comment the reason for failure.
//  - Fix the issue.

function printOneToTen() {
  let x = [];
  for (let number = 1; number <= 10; number++) {
    // Variables defined with const cannot be Reassigned
    //console.log(`\n${number}`);
    x.push(number);
  }
  return x;
}
module.exports = printOneToTen;