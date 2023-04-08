const binaryToDecimal = require("./exercise.js");
describe("Convert binary to decimal", () => {
  it("should print correct correct decimal value", () => {
    const consoleSpy = jest.spyOn(console, "log");
    binaryToDecimal(1101000);
    expect(consoleSpy).toHaveBeenCalledWith("Decimal for the given binary string 1101000 is 104");
  });
});
