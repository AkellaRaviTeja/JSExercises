const checkIfArray = require("./exercise.js");

test("check if array", () => {
    const consolepass = jest.spyOn(console, 'log');
    checkIfArray([1, 2, 3]);
    expect(consolepass).toHaveBeenCalledWith("Given input is an Array");
    checkIfArray(1, 2, 3);
    expect(consolepass).toHaveBeenCalledWith("Given input is not an Array");
});