// Execute this function,
//  - comment the reason for failure.
//  - Fix the issue.

/* failure due to using of const keyword
const keyword declare variable as a block constant
reassigning of varible is not possible
*/
function printOneToTen() {
  for (let number = 1; number <= 10; number++) {
    console.log(`\n${number}`);
  }
}
