const divideTenByNumber = require("./exercise.js");
describe("Devide 10 by number", () => {
  it("print correct result when number is not zero", () => {
    expect(divideTenByNumber(5)).toBe(2);
  });

  it('Print "Indeterminate" when number is zero', () => {
    expect(divideTenByNumber(0)).toBe("Indeterminate");
  });

  it("print correct message in console", () => {
    const consoleSpy = jest.spyOn(console, "log");
    divideTenByNumber(2);
    expect(consoleSpy).toHaveBeenCalledWith(
      "Result after dividing 10 by 2 is 5");
  });
});
