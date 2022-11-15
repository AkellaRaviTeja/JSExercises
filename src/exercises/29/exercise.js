// - Explain currying.
// - Convert the below function to curry function

function calculateVolume(length, breadth, height) {
  return length * breadth * height;
}
//currying is used for partial implementation of the arguments
//currying is tranformation of function which translates the function from f(a,b,c)
//f(a)(b)(c)

function calculateVolume2(length) {
  return function (breadth) {
    return function (height) {
      return length * breadth * height;
    };
  };
}
console.log(calculateVolume2(3)(4)(5));
//we can create a seperate function for every argument;
// /if the length of the cube is fixed then we can create a funvtion and use it by just changing bredth and width
