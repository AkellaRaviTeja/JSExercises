const printArray = require('./exercise.js');

test('print array', () => {
    const consolepass = jest.spyOn(console, 'log');
    printArray([1, 2, 3]);
    [1, 2, 3].forEach((ele) => { expect(consolepass).toHaveBeenCalledWith(ele) });
    printArray([]);
    [].forEach((ele) => { expect(consolepass).toHaveBeenCalledWith(ele) });
});