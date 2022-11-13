// Convert the below functions into arrow functions.

const greetings = function () {
  return "Hello World";
};

// const isEven = function (num) {
//   if (num % 2 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// };
//converting to arrow function

const greet = () => {
  return "Hello World";
};

console.log(greet());

const isEven = (num) => {
  let result = num % 2 == 0 ? true : false;
  return result;
};
console.log(isEven(10));
