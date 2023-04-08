const findTheLength = require('./exercise.js');

test('find the length', () => {
    const consolepass = jest.spyOn(console, 'log');
    findTheLength("Hello World!");
    expect(consolepass).toHaveBeenCalledWith("Please enter an array");
    findTheLength([]);
    expect(consolepass).toHaveBeenCalledWith("Length of the given input array is 0");
    findTheLength([1, 2, 3]);
    expect(consolepass).toHaveBeenCalledWith("Length of the given input array is 3");
});