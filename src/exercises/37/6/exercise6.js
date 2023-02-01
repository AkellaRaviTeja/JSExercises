function findTheLength(inputArray) {
   let lengthOfArray;
   if (Array.isArray(inputArray)) {
     lengthOfArray = inputArray.length;
     return lengthOfArray
   }
   else {
     return (`Please give array as input.`);
   }
}
 
module.exports = findTheLength