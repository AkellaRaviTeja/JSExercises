const binaryToDecimal = require('./exercise.js');

test('binary to decimal', () => {
    const consolepass = jest.spyOn(console, 'log');
    binaryToDecimal(1001);
    expect(consolepass).toHaveBeenCalledWith("Decimal for the given binary string 1001 is 9");
    binaryToDecimal(11);
    expect(consolepass).toHaveBeenCalledWith("Decimal for the given binary string 11 is 3");
    binaryToDecimal(0);
    expect(consolepass).toHaveBeenCalledWith("Decimal for the given binary string 0 is 0");
});