const greeting = require("./exercise.js");
describe("welcome greetings", () => {
  it("should print correct welcome greetings", () => {
    const consoleSpy = jest.spyOn(console, "log");
    greeting("amol","godse");
    expect(consoleSpy).toHaveBeenCalledWith("Welcome, amol godse!");
  });
  
});
