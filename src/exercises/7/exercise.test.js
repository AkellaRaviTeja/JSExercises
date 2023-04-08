const commaSeparatedString = require("./exercise.js");
describe("Comma sepration", () => {
  it("should return a comma separated String", () => {
    expect(commaSeparatedString(["firstName", "lastName"])).toBe(
      "firstName,lastName"
    );
  });
});
