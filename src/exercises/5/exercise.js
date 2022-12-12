// Complete the below function.
// - Find the easiest way to do it.
// - Comment the function that you used.

function binaryToDecimal(binaryString) {
  let decimalValue = 0;
  let len = binaryString.length; //find the length of binaryString
  for (let i = 0; i < len; i++) {
    //when character is "1" the Math.pow function will return otherwise return 0
    decimalValue += binaryString[i] == "1" ? Math.pow(2, len - i - 1) : 0;
  }
  console.log(
    `Decimal for the given binary string ${binaryString} is ${decimalValue}`
  );
}
