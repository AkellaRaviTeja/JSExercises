// - Explain currying.
// - Convert the below function to curry function

function calculateVolume(length, breadth, height) {
  return length * breadth * height;
}

function calculateVolume(length) {
  return function (breadth) {
    return function (height) {
      return length*breadth*height
    }
  }
}

// Currying is a transformation of functions that translates a function from callable as f(a, b, c) 
// into callable as f(a)(b)(c). Currying doesn’t call a function. It just transforms it.
