// Complete the below function.
// - Use Array methods.
// - Do not use loops

//Here we will be using map method which it returns an new array with modified elemts in the result array
//map method is simialr to forEach where forEach will not return any array as a result
function multiplyArrayByTwo(inputArray) {
  // inputArray = inputArray.map(function (value) {
  //   return value * 2;
  // });

  //using array function in the map methods
  let updatedArray = inputArray.map((value) => value * 2);
  console.log(`Given input array is ${updatedArray}`);
}
multiplyArrayByTwo([1, 2, 34, 4]);
