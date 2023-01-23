// Get the full name of the new employee. See how you can execute the function "getFullName" on newEmployee object.
// - Comment your findings

/* 
  __proto__ provides a way to inherit properties and methods of another object , Here newEmployee inherits employee Object.Hence newEmployee object can use getFullname method of employee object
*/

const employee = {
  firstName: "Ravi",
  lastName: "Teja",
  age: 29,
  id: 1122,
  getFullName: function () {
    //Copy the solution from the exercise before this.
    return `${this.firstName} ${this.lastName}`;
  },
};

const newEmployee = {
  firstName: "New",
  lastName: "Employee",
  __proto__: employee
};
