const employee = require("./exercise.js");

describe("Object methods", () => {
  it("should return the fullname of employee", () => {
    expect(employee.getFullName()).toBe("Ravi Teja");
  });

  it("should return the fullname of new employee", () => {
    const newEmployee = {
      firstName: "New",
      lastName: "Employee",
    };
    const fullName = employee.getFullName.call(newEmployee);
    expect(fullName).toBe("New Employee");
  });
});
