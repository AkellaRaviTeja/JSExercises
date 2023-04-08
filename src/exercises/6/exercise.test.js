const findTheLength = require("./exercise.js");
describe("Checking input is array or not and length of the given array", () => {
  it("should print the correct output if given input is array and it's length", () => {
    const consoleSpy = jest.spyOn(console, "log");
    findTheLength([1, 2, 6, 5, 8]);
    expect(consoleSpy).toHaveBeenCalledWith(
      "Length of the given input array is 5"
    );
  });
  it("should print the correct output if given input is not array", () => {
    const consoleSpy = jest.spyOn(console, "log");
    findTheLength(5);
    expect(consoleSpy).toHaveBeenCalledWith(
      "Your passed argument is not a valid array"
    );
  });
});
