// Complete the below function.
// - Find the easiest way to do it.
// - Comment the function that you used.

// parseInt() is used to convert binary String to decimal

function binaryToDecimal(binaryString) {
  let decimalValue=parseInt(binaryString,2);
  console.log(
    `Decimal for the given binary string ${binaryString} is ${decimalValue}`
  );
}
