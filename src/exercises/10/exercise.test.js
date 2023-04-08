const findVoteEligibleCandidates = require("./exercise.js");

describe("Use of array methods", () => {
  it("should Print the names of the candidates eligible to vote", () => {
    const consoleSpy = jest.spyOn(console, "log");
    const input = [
      {
        name: "Ravi",
        age: 28,
      },
      {
        name: "Teja",
        age: 28,
      },
    ];
    findVoteEligibleCandidates(input);
    expect(consoleSpy).toHaveBeenCalledWith("Ravi");
    expect(consoleSpy).toHaveBeenCalledWith("Teja");
  });
});
