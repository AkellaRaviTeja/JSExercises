const multiplyArrayByTwo = require('./exercise.js');

test('multiply array by two', () => {
    const consolepass = jest.spyOn(console, 'log');
    multiplyArrayByTwo([1, 2, 3]);
    expect(consolepass).toHaveBeenCalledWith(`Given input array is ${[1, 2, 3].map((element) => element * 2)}`);
    multiplyArrayByTwo([]);
    expect(consolepass).toHaveBeenCalledWith(`Given input array is ${[].map((element) => element * 2)}`);
});