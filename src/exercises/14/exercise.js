// Get the full name of the new employee. See how you can execute the function "getFullName" on newEmployee object.
// - Comment your findings

const employee = {
  firstName: "Ravi",
  lastName: "Teja",
  age: 29,
  id: 1122,
  getFullName: function () {
    console.log(this.firstName + " " + this.lastName);
    //Copy the solution from the exercise before this.
  },
};

const newEmployee = {
  firstName: "New",
  lastName: "Employee",
};
newEmployee.getFullName = employee.getFullName;
newEmployee.getFullName();
//we can copy the properties(methods and data) from one object another another object in js
