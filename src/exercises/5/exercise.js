// Complete the below function.
// - Find the easiest way to do it.
// - Comment the function that you used.

function binaryToDecimal(binaryString) {
  let decimalValue =  parseInt(binaryString, 2);
  // used parseInt and passed second parameter 2 because we are converting binary
  console.log(
    `Decimal for the given binary string ${binaryString} is ${decimalValue}`
  );
}
binaryToDecimal(1001)
