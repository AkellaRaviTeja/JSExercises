// Complete the below function.
// - Find the easiest way to do it.
// - Comment the function that you used.

//parseInt(value,base) :
//This parseInt function takes two arguments, one is value i.e., string and other is base.

function binaryToDecimal(binaryString) {
  let decimalValue=parseInt(binaryString,2);
  console.log(
    `Decimal for the given binary string ${binaryString} is ${decimalValue}`
  );
}
