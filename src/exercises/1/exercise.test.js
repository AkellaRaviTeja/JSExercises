const printOneToTen = require("./exercise.js");
describe("Use of loop", () => {
  test("Print 1 to 10 in new line", () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation();
    printOneToTen();
    expect(consoleSpy).toHaveBeenCalledTimes(10);
    expect(consoleSpy).toHaveBeenNthCalledWith(1, 1);
    expect(consoleSpy).toHaveBeenNthCalledWith(10, 10);
    consoleSpy.mockRestore();
  });
});
