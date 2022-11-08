// Complete the below function.
// - Find the easiest way to do it.
// - Comment the function that you used.

function binaryToDecimal(binaryString) {
  let decimalValue = parseInt(binaryString, 2);
  console.log(
    `Decimal for the given binary string ${binaryString} is ${decimalValue}`
  );
}
binaryToDecimal("1100");
//used parseInt with the radix set to 2 ;
//parseInt(binaryString, 2);
