// Complete the below function.
// - Use Array methods

// Ans : The join() method returns a new string by concatenating all of the elements in an array, separated by a specified separator.

// Given an Array like ["firstName","lastName"]
// Return a comma separated String like "firstName,lastName"
function commaSeparatedString(inputArray) {
  return inputArray.join(",");
}

module.exports = commaSeparatedString;
