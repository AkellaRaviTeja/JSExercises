// Complete the below function.
// - Find the easiest way to do it.
// - Comment the function that you used.


function binaryToDecimal(binaryString) {
  // we can pass the base value of the string and actual string to `parseInt` and it will convert the string to decimal.
  let decimalValue = parseInt(binaryString, 2);
  console.log(
    `Decimal for the given binary string ${binaryString} is ${decimalValue}`
  );
}

binaryToDecimal("1001")