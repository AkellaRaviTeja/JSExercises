function checkIfArray(input) {
   let isInputAnArray = Array.isArray(input);
   if (isInputAnArray) {
     return ("Given input is an Array");
   } else {
     return ("Given input is not an Array");
   }
}
 
module.exports = checkIfArray;