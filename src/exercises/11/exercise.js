// Complete the below function. Print the sum of the elements in the given array.
// - Use Array methods
// - Do not use loops

function sumOfArray(inputArray) {
    let sum = 0;
    inputArray.forEach(element => {
        sum += element;
    });
    console.log(sum);
}

sumOfArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);