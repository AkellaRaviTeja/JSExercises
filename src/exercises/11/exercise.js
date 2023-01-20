// Complete the below function. Print the sum of the elements in the given array.
// - Use Array methods
// - Do not use loops

function sumOfArray(inputArray) {
    let sum = 0
    inputArray.forEach(item => sum += item)
    console.log(sum)
}

// sumOfArray([1,4,5])
