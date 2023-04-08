const printArray = require("./exercise.js");
describe("Print One element in one line", () => {
  test(" Print the given Array. One element in one line", () => {
    const consoleSpy = jest.spyOn(console, "log");
    printArray([1, 2, 3, 4]);
    expect(consoleSpy).toHaveBeenCalledTimes(4);
  });
});
