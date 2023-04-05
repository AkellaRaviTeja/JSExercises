// Complete the below function.
// - Find the easiest way to do it.
// - Comment the function that you used.


//ans : I used parseInt function .The parseInt() function parses a string argument and returns an integer of the specified radix.

function binaryToDecimal(binaryString) {
  let decimalValue = parseInt(binaryString, 2);
  console.log(
    `Decimal for the given binary string ${binaryString} is ${decimalValue}`
  );
}
