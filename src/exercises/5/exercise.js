// Complete the below function.
// - Find the easiest way to do it.
// - Comment the function that you used.

function binaryToDecimal(binaryString) {
  let decimalValue = parseInt(binaryString, 2);
  //parseInt() function parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).
  console.log(
    `Decimal for the given binary string ${binaryString} is ${decimalValue}`
  );
}
