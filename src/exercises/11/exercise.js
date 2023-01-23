// Complete the below function. Print the sum of the elements in the given array.
// - Use Array methods
// - Do not use loops

function sumOfArray(inputArray) {
    let sum=inputArray.reduce((sum , ele ) => sum+=ele , 0);
    console.log(`sum of the elements in the array is ${sum}`);
}