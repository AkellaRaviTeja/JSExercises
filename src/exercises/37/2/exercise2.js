function divideTenByNumber(number) {
   let result;
   if (number !== 0) {
      result = 10 / number;
   } else {
      result = "Indeterminate";
   }
 
   return result;
}
 
 module.exports = divideTenByNumber;

