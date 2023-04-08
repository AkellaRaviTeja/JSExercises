const { isEven, greetings } = require("./exercise.js");

describe("Arrow function", () => {
  it("should return greeting", () => {
    expect(greetings()).toBe("Hello World");
  });

  it("should returns true for even number", () => {
    expect(isEven(2)).toBe(true);
  });
  it("should returns false for odd number", () => {
    expect(isEven(3)).toBe(false);
  });
});
