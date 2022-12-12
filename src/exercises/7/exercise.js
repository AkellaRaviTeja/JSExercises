// Complete the below function.
// - Use Array methods

function commaSeparatedString(inputArray) {
  // Given an Array like ["firstName","lastName"]
  // Return a comma separated String like "firstName,lastName"

  //using join function all elements in the array will join as one string
  let result = inputArray.join(",");
  console.log(result);
}
