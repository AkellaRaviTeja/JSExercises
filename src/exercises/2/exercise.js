// Execute this function,
//  - comment the reason for failure.
//  - Fix the issue.

function divideTenByNumber(number) {
  // Error: result is inside the local space of if and else blocks. So, scope of result is limited to only those blocks.
  // Fix: move result above condition statement

  let result;
  if (number != 0) {
    result = 10 / number;
  } else {
    result = "Indeterminate";
  }

  console.log(`Result after dividing 10 by ${number} is ${result}`);
}


divideTenByNumber(0);