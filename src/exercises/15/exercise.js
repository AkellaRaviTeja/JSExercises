// Convert the below functions into arrow functions.
/*
const greetings = function () {
  return "Hello World";
};
*/

const greetings = () => "Hello World";
/*
const isEven = function (num) {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
};*/
const isEven = (num) => (num % 2 == 0 ? true : false);
