const employee = require("./exercise.js");

describe("Object concepts", () => {
  it("should print the fullname of employee", () => {
    const consoleSpy = jest.spyOn(console, "log");
    employee.getFullName();
    expect(consoleSpy).toHaveBeenCalledWith("Ravi Teja");
  });
  it("should print the Vote Eligiblity", () => {
    const consoleSpy = jest.spyOn(console, "log");
    employee.checkVoteEligiblity();
    if (employee.age >= 18) {
      expect(consoleSpy).toHaveBeenCalledWith("You are eligible to vote.");
    } else {
      expect(consoleSpy).toHaveBeenCalledWith("You are not eligible to vote.");
    }
  });
});
