const multiplyArrayByTwo = require("./exercise.js");

describe("multiply array by two", () => {
  it("should print correct output", () => {
    const consoleSpy = jest.spyOn(console, "log");
    multiplyArrayByTwo([1, 2, 3, 4]);
    expect(consoleSpy).toHaveBeenCalledWith("Given input array is 1,2,3,4")
    expect(consoleSpy).toHaveBeenCalledWith("Given input array multiplied by 2 is 2,4,6,8");
  });
});
