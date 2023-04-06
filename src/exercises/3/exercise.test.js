const checkIfArray = require("./exercise.js");
describe("Check if an input is array or not", () => {
  it("should print correct result when it is an array", () => {
    const consoleSpy = jest.spyOn(console, "log");
    checkIfArray([1, 2, 3, 4]);
    expect(consoleSpy).toHaveBeenCalledWith("Given input is an Array");
  });
  it("should print else condition when it is an not array", () => {
    const consoleSpy = jest.spyOn(console, "log");
    checkIfArray(5);
    expect(consoleSpy).toHaveBeenCalledWith("Given input is not an Array");
  });
});
