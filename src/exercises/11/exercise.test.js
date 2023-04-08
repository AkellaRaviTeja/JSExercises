const sumOfArray = require("./exercise.js");

describe("Use of array reduce methods", () => {
  it("should print the sum of the elements in the given array", () => {
    const consoleSpy = jest.spyOn(console, "log");
    const input = [1, 2, 3, 5];
    sumOfArray(input);
    expect(consoleSpy).toHaveBeenCalledWith(
      "Sum of the elements in the given array is 11"
    );
  });
});
