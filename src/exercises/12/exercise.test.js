
const errorFunction = require("./exercise.js");
describe("Handle Errors", () => {
  it("should handle error or not", () => {
    expect(() => errorFunction()).toThrow(Error);
  });
});
