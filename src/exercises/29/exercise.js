// - Explain currying.
// - Convert the below function to curry function

function calculateVolume(length) {
  return (breadth) => {
    return (height) => {
      return length * breadth * height; 
    }
  }
}

console.log(calculateVolume(4)(5)(6))


// We simply wrap a function inside a function, which means we are going to return a function from another function to obtain this kind of translation. 
// The parent function takes the first provided argument and returns the function that takes the next argument and this keeps on repeating till the number of arguments ends. 
// Hopefully, the function that receives the last argument returns the expected result.